import type {
  Projection,
  ProjectionDiagramConfig,
  ProjectionTroubleshootingItem,
} from '../types/projection';

export interface ParsedDiagramAngles {
  /** Signed CR beam angle in degrees relative to perpendicular (positive = cephalad/upward tilt, negative = caudad/downward tilt) */
  crAngleDeg: number;
  /** Signed part rotation angle in degrees relative to detector plane */
  partRotationDeg: number;
  /** Human-readable CR label */
  crLabel: string;
  /** Human-readable part rotation label */
  partLabel: string;
}

export interface HighlightedCorrection {
  /** Which element is being corrected */
  target: 'cr' | 'part';
  /** Corrected angle in degrees */
  correctedDeg: number;
  /** Original angle in degrees */
  baselineDeg: number;
  /** Display badge string */
  badgeText: string;
}

/**
 * Provides sensible diagramConfig defaults based on anatomicalRegion and projection metadata
 * when a Projection does not specify an explicit `diagramConfig`.
 */
export function resolveDiagramConfig(
  projection: Projection,
  traumaMode = false
): ProjectionDiagramConfig {
  if (projection.diagramConfig) {
    // In Trauma / Supine mode on skull views, baseline switches from OML to IOML
    if (
      traumaMode &&
      projection.diagramConfig.silhouette === 'skull-sagittal' &&
      projection.diagramConfig.baselineLabel === 'OML'
    ) {
      return {
        ...projection.diagramConfig,
        baselineLabel: 'IOML',
      };
    }
    return projection.diagramConfig;
  }

  const region = projection.anatomicalRegion.toLowerCase();
  const nameLower = projection.name.toLowerCase();

  if (region.includes('skull') || region.includes('facial')) {
    return {
      silhouette: nameLower.includes('lateral') || nameLower.includes('towne')
        ? 'skull-sagittal'
        : 'skull-frontal',
      viewPlane: 'sagittal',
      crTarget: { x: -20, y: -14 },
      baselineLabel: traumaMode ? 'IOML' : 'OML',
    };
  }

  if (region.includes('shoulder')) {
    return {
      silhouette: 'shoulder-axial',
      viewPlane: 'axial',
      crTarget: { x: 0, y: 0 },
      baselineLabel: 'Glenohumeral',
    };
  }

  if (region.includes('upper') || region.includes('lower')) {
    return {
      silhouette: 'limb-joint',
      viewPlane: nameLower.includes('oblique') ? 'axial' : 'sagittal',
      crTarget: { x: 0, y: 4 },
      baselineLabel: 'Joint Space',
    };
  }

  if (region.includes('cervical') || region.includes('spine')) {
    return {
      silhouette: 'torso-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: 0, y: region.includes('cervical') ? -18 : 10 },
      baselineLabel: 'MSP',
    };
  }

  if (region.includes('chest') || region.includes('abdomen') || region.includes('pelvi')) {
    const isAxial = nameLower.includes('oblique') || nameLower.includes('rao') || nameLower.includes('lao');
    return {
      silhouette: isAxial ? 'torso-frontal' : 'torso-sagittal',
      viewPlane: isAxial ? 'axial' : 'sagittal',
      crTarget: { x: 0, y: region.includes('chest') ? -10 : 12 },
      baselineLabel: 'MSP',
    };
  }

  return {
    silhouette: 'torso-sagittal',
    viewPlane: 'sagittal',
    crTarget: { x: 0, y: 0 },
    baselineLabel: 'MSP',
  };
}

/**
 * Extracts the first numeric degree value (or midpoint of a range like "15°–20°") from a string or number.
 */
export function extractNumericAngle(value: string | number): number {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;

  // Check for range like "15°–20°" or "15-20"
  const rangeMatch = value.match(/(-?\d+(?:\.\d+)?)\s*°?\s*[–-]\s*(\d+(?:\.\d+)?)/);
  if (rangeMatch) {
    const low = parseFloat(rangeMatch[1]);
    const high = parseFloat(rangeMatch[2]);
    const mid = (Math.abs(low) + Math.abs(high)) / 2;
    return low < 0 ? -mid : mid;
  }

  const singleMatch = value.match(/(-?\d+(?:\.\d+)?)\s*°?/);
  if (singleMatch) {
    return parseFloat(singleMatch[1]);
  }
  return 0;
}

/**
 * Parses baseline CR angle and part rotation angle from projection positioning fields.
 */
export function parseBaselineAngles(
  crAngle: string | number,
  partRotationAngle: string | number,
  traumaMode = false
): ParsedDiagramAngles {
  let rawCr = extractNumericAngle(crAngle);
  const crStr = String(crAngle).toLowerCase();

  // Convention in diagram: caudad tilts beam downward (-), cephalad tilts beam upward (+)
  if (crStr.includes('caudad') && rawCr > 0) {
    rawCr = -rawCr;
  } else if (crStr.includes('cephalad') && rawCr < 0) {
    rawCr = Math.abs(rawCr);
  }

  // Trauma mode specific adjustment for Towne skull (30° OML -> 37° IOML)
  if (traumaMode && crStr.includes('37°')) {
    rawCr = -37;
  }

  let rawPart = extractNumericAngle(partRotationAngle);
  const partStr = String(partRotationAngle).toLowerCase();
  if (partStr.includes('internal') && rawPart > 0) {
    rawPart = -rawPart;
  } else if (partStr.includes('rao') || partStr.includes('lpo')) {
    rawPart = -Math.abs(rawPart);
  }

  // In trauma mode, do not apply forced internal/external rotation;
  // for skull IOML trauma adaptation, tilt skull chin slightly up (+7°)
  if (traumaMode) {
    if (partStr.includes('internal') || partStr.includes('external')) {
      rawPart = 0;
    } else if (partStr.includes('ioml')) {
      rawPart = 7;
    }
  }

  return {
    crAngleDeg: rawCr,
    partRotationDeg: rawPart,
    crLabel: typeof crAngle === 'number' ? `${crAngle}°` : crAngle,
    partLabel: typeof partRotationAngle === 'number' ? `${partRotationAngle}°` : partRotationAngle,
  };
}

/**
 * Parses a troubleshooting item's angleRotationAdjustment into a visual correction highlight
 * for BeamDiagramSVG.
 */
export function parseTroubleshootingCorrection(
  item: ProjectionTroubleshootingItem | null,
  baseline: ParsedDiagramAngles
): HighlightedCorrection | null {
  if (!item) return null;

  const text = item.angleRotationAdjustment;
  const lower = text.toLowerCase();
  const isCr =
    lower.includes('cr ') ||
    lower.includes('cr angle') ||
    lower.includes('cephalad') ||
    lower.includes('caudad');

  const deltaMatch = text.match(/([+-]\s*\d+(?:\.\d+)?)\s*°?/);
  const absoluteMatch = text.match(/(\d+(?:\.\d+)?)\s*°/);

  if (isCr) {
    let corrected = baseline.crAngleDeg;
    if (deltaMatch) {
      const delta = parseFloat(deltaMatch[1].replace(/\s+/g, ''));
      if (lower.includes('caudad')) {
        // e.g. "+7° caudad" from -30° becomes -37°; "-7° caudad" reduces caudad tilt toward -30°
        corrected =
          delta >= 0
            ? baseline.crAngleDeg - Math.abs(delta)
            : baseline.crAngleDeg + Math.abs(delta);
      } else if (lower.includes('cephalad')) {
        corrected =
          delta >= 0
            ? baseline.crAngleDeg + Math.abs(delta)
            : baseline.crAngleDeg - Math.abs(delta);
      } else {
        corrected = baseline.crAngleDeg + delta;
      }
    } else if (absoluteMatch) {
      const val = parseFloat(absoluteMatch[1]);
      corrected = lower.includes('caudad') ? -val : val;
    } else if (lower.includes('inferior') || lower.includes('superior')) {
      corrected = baseline.crAngleDeg;
    }

    // Clamp to sensible visual range [-45, 45]
    corrected = Math.max(-45, Math.min(45, corrected));

    return {
      target: 'cr',
      baselineDeg: baseline.crAngleDeg,
      correctedDeg: corrected,
      badgeText: text,
    };
  }

  // Otherwise target is part rotation
  let corrected = baseline.partRotationDeg;
  if (deltaMatch) {
    const delta = parseFloat(deltaMatch[1].replace(/\s+/g, ''));
    corrected = baseline.partRotationDeg + delta;
  } else if (absoluteMatch) {
    const val = parseFloat(absoluteMatch[1]);
    corrected = lower.includes('internal') ? -val : val;
  }

  // If baseline and corrected ended up identical (e.g. "0° tilt"), show a clear visual offset
  if (corrected === baseline.partRotationDeg && absoluteMatch) {
    corrected = baseline.partRotationDeg + 12;
  }

  corrected = Math.max(-90, Math.min(90, corrected));

  return {
    target: 'part',
    baselineDeg: baseline.partRotationDeg,
    correctedDeg: corrected,
    badgeText: text,
  };
}
