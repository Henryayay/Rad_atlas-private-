import React from 'react';
import { Compass, RotateCcw } from 'lucide-react';
import type {
  DiagramSilhouette,
  Projection,
  ProjectionTroubleshootingItem,
} from '../types/projection';
import {
  parseBaselineAngles,
  parseTroubleshootingCorrection,
  resolveDiagramConfig,
} from '../utils/geometry';

interface BeamDiagramSVGProps {
  projection: Projection;
  traumaMode: boolean;
  activeTroubleshooting: ProjectionTroubleshootingItem | null;
  onClearTroubleshooting?: () => void;
}

/**
 * Generates an SVG arc path centered at (cx, cy) with radius r from startDeg to endDeg (SVG screen degrees).
 */
function describeArc(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number
): string {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(startDeg));
  const y1 = cy + r * Math.sin(toRad(startDeg));
  const x2 = cx + r * Math.cos(toRad(endDeg));
  const y2 = cy + r * Math.sin(toRad(endDeg));
  const sweep = endDeg >= startDeg ? 1 : 0;
  const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} ${sweep} ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

interface SilhouetteProps {
  silhouette: DiagramSilhouette;
  viewPlane: 'sagittal' | 'axial';
  strokeColor: string;
  fillColor: string;
  isPaProjection: boolean;
  baselineLabel?: string;
  isOverlay?: boolean;
}

const AnatomicalSilhouette: React.FC<SilhouetteProps> = ({
  silhouette,
  viewPlane,
  strokeColor,
  fillColor,
  isPaProjection,
  baselineLabel,
  isOverlay = false,
}) => {
  const dash = isOverlay ? undefined : undefined;
  const subtleStroke = isOverlay ? '#fbbf24' : '#94a3b8';

  switch (silhouette) {
    case 'skull-sagittal': {
      const isIoml = baselineLabel?.toUpperCase().includes('IOML');
      return (
        <g>
          {/* Cranial vault + facial profile facing LEFT (anterior) and occiput RIGHT (posterior toward IR) */}
          <path
            d="M 10 -46 C 36 -46, 50 -24, 46 6 C 43 24, 28 38, 12 44 L 8 56 L -12 56 L -14 42 C -26 42, -36 38, -38 30 C -39 25, -34 23, -38 19 C -42 15, -36 11, -36 7 L -46 3 C -48 0, -40 -7, -37 -14 C -36 -28, -22 -46, 10 -46 Z"
            fill={fillColor}
            fillOpacity={isOverlay ? 0.25 : 0.7}
            stroke={strokeColor}
            strokeWidth={isOverlay ? 2.2 : 1.8}
            strokeDasharray={dash}
          />
          {/* Orbit */}
          <ellipse
            cx="-25"
            cy="-6"
            rx="6"
            ry="7"
            fill="none"
            stroke={subtleStroke}
            strokeWidth="1.2"
          />
          {/* EAM (External Acoustic Meatus) */}
          <circle cx="8" cy="4" r="3.2" fill={strokeColor} />
          {!isOverlay && (
            <text
              x="14"
              y="2"
              fill="#cbd5e1"
              fontSize="8"
              fontFamily="monospace"
            >
              EAM
            </text>
          )}
          {/* OML Dashed Baseline (Orbit outer canthus to EAM) */}
          <line
            x1="-34"
            y1="4"
            x2="44"
            y2="4"
            stroke={isIoml ? '#64748b' : '#38bdf8'}
            strokeWidth={isIoml ? '1' : '1.4'}
            strokeDasharray="3 3"
          />
          {/* IOML Dashed Baseline (~8° below OML at infraorbital margin to EAM) */}
          <line
            x1="-34"
            y1="10"
            x2="42"
            y2="-1"
            stroke={isIoml ? '#38bdf8' : '#64748b'}
            strokeWidth={isIoml ? '1.4' : '1'}
            strokeDasharray="3 3"
          />
          {!isOverlay && (
            <>
              <text
                x="-62"
                y="2"
                fill={isIoml ? '#64748b' : '#38bdf8'}
                fontSize="7.5"
                fontFamily="monospace"
              >
                OML
              </text>
              <text
                x="-65"
                y="14"
                fill={isIoml ? '#38bdf8' : '#64748b'}
                fontSize="7.5"
                fontFamily="monospace"
              >
                IOML
              </text>
            </>
          )}
        </g>
      );
    }

    case 'skull-frontal':
      return (
        <g>
          {/* Frontal cranium + mandible */}
          <path
            d="M -28 -8 C -30 -38, 30 -38, 28 -8 C 28 10, 22 24, 14 38 C 8 46, -8 46, -14 38 C -22 24, -28 10, -28 -8 Z"
            fill={fillColor}
            fillOpacity={isOverlay ? 0.25 : 0.7}
            stroke={strokeColor}
            strokeWidth={isOverlay ? 2.2 : 1.8}
          />
          {/* Orbits */}
          <circle cx="-12" cy="-6" r="6" fill="none" stroke={subtleStroke} strokeWidth="1.2" />
          <circle cx="12" cy="-6" r="6" fill="none" stroke={subtleStroke} strokeWidth="1.2" />
          {/* Nasal septum */}
          <path d="M 0 -4 L -4 10 L 4 10 Z" fill="none" stroke={subtleStroke} strokeWidth="1" />
          {/* MSP */}
          <line x1="0" y1="-44" x2="0" y2="52" stroke="#38bdf8" strokeWidth="1.1" strokeDasharray="3 3" />
          {!isOverlay && (
            <text x="4" y="-36" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">
              MSP
            </text>
          )}
        </g>
      );

    case 'torso-sagittal': {
      // By default: anterior faces LEFT, posterior/spine faces RIGHT.
      // For PA projections (e.g., Chest PA), flip horizontally so anterior faces RIGHT against the IR.
      const flip = isPaProjection ? -1 : 1;
      return (
        <g transform={`scale(${flip}, 1)`}>
          {/* Head/neck stub -> anterior chest -> abdomen -> pelvis -> posterior spine */}
          <path
            d="M -10 -66 C -14 -56, -14 -44, -18 -38 C -28 -30, -32 -10, -28 12 C -25 28, -22 44, -16 62 L 20 62 C 26 42, 26 16, 24 -8 C 23 -24, 18 -36, 12 -46 L 10 -66 Z"
            fill={fillColor}
            fillOpacity={isOverlay ? 0.25 : 0.7}
            stroke={strokeColor}
            strokeWidth={isOverlay ? 2.2 : 1.8}
          />
          {/* Vertebral column landmarks (C-spine, T-spine, L-spine) */}
          <path
            d="M 4 -54 C 10 -38, 15 -14, 12 10 C 9 28, 12 42, 16 54"
            fill="none"
            stroke={subtleStroke}
            strokeWidth="2.2"
            strokeDasharray="4 3"
          />
          {/* Vertebral level ticks */}
          <circle cx="5" cy="-38" r="2.2" fill="#38bdf8" />
          <circle cx="13" cy="-12" r="2.2" fill="#38bdf8" />
          <circle cx="11" cy="18" r="2.2" fill="#38bdf8" />
          {!isOverlay && (
            <g transform={`scale(${flip}, 1)`}>
              <text x={flip * 16} y="-36" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" textAnchor={flip < 0 ? 'end' : 'start'}>
                C4
              </text>
              <text x={flip * 20} y="-20" fill="#cbd5e1" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor={flip < 0 ? 'end' : 'start'}>
                T7
              </text>
              <text x={flip * 20} y="20" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" textAnchor={flip < 0 ? 'end' : 'start'}>
                L4–5
              </text>
            </g>
          )}
        </g>
      );
    }

    case 'torso-frontal': {
      if (viewPlane === 'axial') {
        // Top-down axial cross-section: ANT faces LEFT (tube) or RIGHT (if PA), POST faces IR
        const flip = isPaProjection ? -1 : 1;
        return (
          <g transform={`scale(${flip}, 1)`}>
            {/* Body ellipse cross-section */}
            <ellipse
              cx="0"
              cy="0"
              rx="26"
              ry="48"
              fill={fillColor}
              fillOpacity={isOverlay ? 0.25 : 0.7}
              stroke={strokeColor}
              strokeWidth={isOverlay ? 2.2 : 1.8}
            />
            {/* Anterior sternum / symphysis */}
            <rect x="-25" y="-7" width="5" height="14" rx="2" fill={subtleStroke} opacity="0.65" />
            {/* Posterior vertebral body + spinous process */}
            <circle cx="14" cy="0" r="7" fill="none" stroke={subtleStroke} strokeWidth="1.4" />
            <line x1="21" y1="0" x2="27" y2="0" stroke={subtleStroke} strokeWidth="2" />
            {/* Coronal / MSP axes */}
            <line x1="-30" y1="0" x2="30" y2="0" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="-52" x2="0" y2="52" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
            {!isOverlay && (
              <g transform={`scale(${flip}, 1)`}>
                <text x="0" y="-56" fill="#cbd5e1" fontSize="8" fontFamily="monospace" textAnchor="middle">
                  L
                </text>
                <text x="0" y="62" fill="#cbd5e1" fontSize="8" fontFamily="monospace" textAnchor="middle">
                  R
                </text>
              </g>
            )}
          </g>
        );
      }
      // Coronal frontal torso/pelvis silhouette
      return (
        <g>
          <path
            d="M -26 -46 C -30 -24, -24 0, -28 24 C -30 42, -20 56, -8 60 L 8 60 C 20 56, 30 42, 28 24 C 24 0, 30 -24, 26 -46 Z"
            fill={fillColor}
            fillOpacity={isOverlay ? 0.25 : 0.7}
            stroke={strokeColor}
            strokeWidth={isOverlay ? 2.2 : 1.8}
          />
          {/* Iliac wings + spine */}
          <path d="M -22 14 C -24 34, -14 48, -6 50" fill="none" stroke={subtleStroke} strokeWidth="1.2" />
          <path d="M 22 14 C 24 34, 14 48, 6 50" fill="none" stroke={subtleStroke} strokeWidth="1.2" />
          <line x1="0" y1="-48" x2="0" y2="56" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" />
        </g>
      );
    }

    case 'shoulder-axial':
      return (
        <g>
          {/* Scapula body + glenoid fossa on posterior (RIGHT) */}
          <path
            d="M 14 -38 L 32 -12 L 26 26 C 18 16, 14 6, 12 -4 C 10 -16, 12 -28, 14 -38 Z"
            fill={fillColor}
            fillOpacity={isOverlay ? 0.25 : 0.65}
            stroke={strokeColor}
            strokeWidth="1.6"
          />
          {/* Humeral head + Greater Tubercle (rotates visibly with partRotationDeg!) */}
          <circle
            cx="-8"
            cy="2"
            r="17"
            fill={fillColor}
            fillOpacity={isOverlay ? 0.25 : 0.75}
            stroke={strokeColor}
            strokeWidth={isOverlay ? 2.2 : 1.8}
          />
          {/* Greater tubercle protrusion */}
          <path
            d="M -8 -16 C -16 -22, -24 -16, -24 -6"
            fill="none"
            stroke={isOverlay ? '#f59e0b' : '#22d3ee'}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Epicondylar axis line */}
          <line x1="-8" y1="-26" x2="-8" y2="28" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" />
          {!isOverlay && (
            <text x="-28" y="-22" fill="#22d3ee" fontSize="7.5" fontFamily="monospace">
              GT
            </text>
          )}
        </g>
      );

    case 'limb-joint':
      if (viewPlane === 'axial') {
        // E.g. Hand PA Oblique: metacarpal cross-section with 45° step sponge
        return (
          <g>
            {/* Palmar/Metacarpal bar */}
            <rect
              x="-8"
              y="-34"
              width="16"
              height="68"
              rx="6"
              fill={fillColor}
              fillOpacity={isOverlay ? 0.25 : 0.75}
              stroke={strokeColor}
              strokeWidth={isOverlay ? 2.2 : 1.8}
            />
            {/* Individual metacarpal cross-section dots */}
            {[-22, -11, 0, 11, 22].map((my, i) => (
              <circle key={i} cx="0" cy={my} r="3.4" fill="none" stroke={subtleStroke} strokeWidth="1.2" />
            ))}
          </g>
        );
      }
      // Sagittal knee / limb joint articulation (distal femur + patella + tibial plateau + proximal tibia/fibula)
      return (
        <g>
          {/* Distal femur */}
          <path
            d="M -12 -64 L 12 -64 L 16 -10 C 16 0, -16 0, -16 -10 Z"
            fill={fillColor}
            fillOpacity={isOverlay ? 0.25 : 0.7}
            stroke={strokeColor}
            strokeWidth={isOverlay ? 2.2 : 1.8}
          />
          {/* Patella (anterior = LEFT) */}
          <ellipse
            cx="-23"
            cy="-12"
            rx="6"
            ry="12"
            fill={fillColor}
            fillOpacity={isOverlay ? 0.25 : 0.8}
            stroke={strokeColor}
            strokeWidth="1.6"
          />
          {/* Proximal tibia & plateau slope (~5° posterior tilt) */}
          <path
            d="M -15 8 L 16 11 L 12 64 L -11 64 Z"
            fill={fillColor}
            fillOpacity={isOverlay ? 0.25 : 0.7}
            stroke={strokeColor}
            strokeWidth={isOverlay ? 2.2 : 1.8}
          />
          {/* Fibular head (posterior-lateral) */}
          <path
            d="M 18 16 C 23 16, 24 26, 22 62 L 15 62 L 15 20 Z"
            fill="none"
            stroke={subtleStroke}
            strokeWidth="1.3"
          />
          {/* Joint space reference */}
          <line x1="-22" y1="3" x2="24" y2="6" stroke="#38bdf8" strokeWidth="1.1" strokeDasharray="3 3" />
        </g>
      );
  }
};

export const BeamDiagramSVG: React.FC<BeamDiagramSVGProps> = ({
  projection,
  traumaMode,
  activeTroubleshooting,
  onClearTroubleshooting,
}) => {
  const config = resolveDiagramConfig(projection, traumaMode);
  const baseline = parseBaselineAngles(
    projection.positioning.crAngle,
    projection.positioning.partRotationAngle,
    traumaMode
  );
  const correction = parseTroubleshootingCorrection(activeTroubleshooting, baseline);

  const isPaProjection =
    projection.equipment.markerType === 'Prone' ||
    projection.id.toLowerCase().includes('-pa');

  // Canvas Geometry Constants inside viewBox="0 0 420 320"
  const partCx = 236;
  const partCy = 158;
  const detectorX = 310;
  const beamLength = 140;

  const hasCrFix = correction?.target === 'cr';
  const hasPartFix = correction?.target === 'part';
  const activePartDeg = baseline.partRotationDeg;

  // Resolve crTarget in world SVG coordinates (rotated by partRotationDeg around partCx, partCy)
  const localX = isPaProjection && config.silhouette === 'torso-sagittal'
    ? -config.crTarget.x
    : config.crTarget.x;
  const localY = config.crTarget.y;

  const partRad = (activePartDeg * Math.PI) / 180;
  const tx = partCx + localX * Math.cos(partRad) - localY * Math.sin(partRad);
  const ty = partCy + localX * Math.sin(partRad) + localY * Math.cos(partRad);

  // Compute Central Ray vector passing directly through (tx, ty)
  // Convention: crAngleDeg > 0 => CEPHALAD ↑ (-y as x increases), crAngleDeg < 0 => CAUDAD ↓ (+y as x increases)
  const computeBeamCoords = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    const ux = Math.cos(rad);
    const uy = -Math.sin(rad);
    const tubeX = tx - beamLength * ux;
    const tubeY = ty - beamLength * uy;
    const distToDetector = detectorX - tx;
    const exitY = ty + distToDetector * (uy / ux);
    return { tubeX, tubeY, exitY };
  };

  const baseBeam = computeBeamCoords(baseline.crAngleDeg);
  const fixBeam = hasCrFix ? computeBeamCoords(correction.correctedDeg) : null;

  const isHorizontalIr = projection.equipment.orientation === 'Horizontal' || traumaMode;

  const formatCrShort = (deg: number) => {
    if (Math.abs(deg) < 0.5) return '0° PERP';
    return deg > 0 ? `${Math.abs(deg)}° CEPHALAD ↑` : `${Math.abs(deg)}° CAUDAD ↓`;
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/90 overflow-hidden">
      {/* Header Bar */}
      <div className="px-3 py-2 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-1.5 bg-slate-900/70">
        <div className="flex items-center gap-1.5 min-w-0">
          <Compass className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-200 truncate">
            {projection.diagramImage
              ? 'Positioning & CR Diagram'
              : config.viewPlane === 'axial'
                ? 'Axial Cross-Section'
                : 'Sagittal Profile'}
          </span>
          {traumaMode && (
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/40 shrink-0">
              Trauma
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-[10px] font-mono shrink-0">
          <span className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-300 whitespace-nowrap">
            CR {formatCrShort(baseline.crAngleDeg)}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-purple-300 whitespace-nowrap">
            Part {baseline.partRotationDeg}°
          </span>
        </div>
      </div>

      {/* Active Troubleshooting Overlay Banner */}
      {correction && (
        <div className="px-3.5 py-2 bg-amber-950/50 border-b border-amber-500/40 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span className="font-semibold text-amber-300 shrink-0">
              {correction.target === 'cr' ? 'Adjusted Beam Angle:' : 'Adjusted Body Rotation:'}
            </span>
            <span className="text-amber-100 font-mono truncate">
              {correction.badgeText}
            </span>
          </div>
          {onClearTroubleshooting && (
            <button
              type="button"
              onClick={onClearTroubleshooting}
              className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-900/60 hover:bg-amber-800/80 text-amber-200 border border-amber-600/50 text-[11px]"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>
      )}

      {projection.diagramImage ? (
        <div className="p-2.5 bg-slate-950">
          <div className="rounded-lg bg-white p-2 flex items-center justify-center overflow-hidden shadow-inner">
            <img
              src={projection.diagramImage}
              alt={`Positioning diagram for ${projection.name}`}
              className="max-h-[340px] w-auto max-w-full object-contain select-none"
              loading="eager"
            />
          </div>
        </div>
      ) : (
        /* Generous 420x320 SVG Canvas (Fallback for projections without a lecture diagram image) */
        <div className="p-2">
          <svg
          viewBox="0 0 420 320"
          className="w-full h-auto block select-none"
          role="img"
          aria-label={`Anatomical 2D diagram for ${projection.name} (${config.silhouette}) with CR at ${formatCrShort(baseline.crAngleDeg)}`}
        >
          <defs>
            <pattern id="radTechGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#1e293b"
                strokeWidth="0.6"
              />
            </pattern>
            <linearGradient id="crBeamGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="fixBeamGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.08" />
            </linearGradient>
            <marker
              id="crArrowCyan"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6.5"
              markerHeight="6.5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#22d3ee" />
            </marker>
            <marker
              id="crArrowAmber"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
            </marker>
          </defs>

          {/* Background Panel */}
          <rect width="420" height="320" rx="10" fill="#020617" />
          <rect width="420" height="320" rx="10" fill="url(#radTechGrid)" />

          {/* Directional Orientation Header/Footer Labels (with generous padding) */}
          {config.viewPlane === 'sagittal' ? (
            <>
              <text x="18" y="22" fill="#94a3b8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
                CEPHALAD ↑
              </text>
              <text x="18" y="286" fill="#94a3b8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
                CAUDAD ↓
              </text>
              <text x="18" y="36" fill="#64748b" fontSize="8" fontFamily="monospace">
                {isPaProjection ? 'POSTERIOR (TUBE)' : 'ANTERIOR (TUBE)'}
              </text>
            </>
          ) : (
            <>
              <text x="18" y="22" fill="#94a3b8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
                AXIAL TOP-DOWN VIEW
              </text>
              <text x="18" y="36" fill="#64748b" fontSize="8" fontFamily="monospace">
                {isPaProjection ? 'POSTERIOR / TUBE SIDE' : 'ANTERIOR / TUBE SIDE'}
              </text>
              <text x="18" y="286" fill="#64748b" fontSize="8" fontFamily="monospace">
                RAO / LAO / RPO / LPO ROTATION PLANE
              </text>
            </>
          )}

          {/* Perpendicular Horizontal Reference Line through CR Target (tx, ty) */}
          <line
            x1="28"
            y1={ty}
            x2={detectorX}
            y2={ty}
            stroke="#334155"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* Baseline Collimated Beam Fan */}
          <polygon
            points={`${baseBeam.tubeX},${baseBeam.tubeY} ${detectorX},${baseBeam.exitY - 38} ${detectorX},${baseBeam.exitY + 38}`}
            fill="url(#crBeamGrad)"
            opacity={hasCrFix ? 0.28 : 1}
          />

          {/* Adjusted Collimated Beam Fan (Bright Amber #f59e0b) */}
          {fixBeam && (
            <polygon
              points={`${fixBeam.tubeX},${fixBeam.tubeY} ${detectorX},${fixBeam.exitY - 38} ${detectorX},${fixBeam.exitY + 38}`}
              fill="url(#fixBeamGrad)"
            />
          )}

          {/* Image Receptor (IR) Plate behind/beside anatomy */}
          <g transform={`translate(${detectorX}, ${partCy})`}>
            {isHorizontalIr ? (
              /* Horizontal / Supine Cassette Orientation */
              <g>
                <rect
                  x="0"
                  y="-64"
                  width="18"
                  height="128"
                  rx="3"
                  fill="#0f172a"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                />
                {/* Horizontal tray bracket indicator */}
                <path
                  d="M -6 -68 L 24 -68 M -6 68 L 24 68"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {projection.equipment.grid &&
                  Array.from({ length: 11 }).map((_, idx) => (
                    <line
                      key={idx}
                      x1="3"
                      y1={-50 + idx * 10}
                      x2="15"
                      y2={-50 + idx * 10}
                      stroke="#38bdf8"
                      strokeOpacity="0.45"
                      strokeWidth="0.9"
                    />
                  ))}
                <line x1="0" y1="-58" x2="0" y2="58" stroke="#22d3ee" strokeWidth="2.6" />
              </g>
            ) : (
              /* Vertical / Erect Cassette Orientation */
              <g>
                <rect
                  x="0"
                  y="-92"
                  width="14"
                  height="184"
                  rx="3"
                  fill="#0f172a"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                />
                {projection.equipment.grid &&
                  Array.from({ length: 17 }).map((_, idx) => (
                    <line
                      key={idx}
                      x1="2"
                      y1={-80 + idx * 10}
                      x2="12"
                      y2={-80 + idx * 10}
                      stroke="#38bdf8"
                      strokeOpacity="0.45"
                      strokeWidth="0.9"
                    />
                  ))}
                <line x1="0" y1="-84" x2="0" y2="84" stroke="#22d3ee" strokeWidth="2.6" />
              </g>
            )}

            {/* IR Metadata Labels (fit comfortably inside x = 334..408) */}
            <text x="24" y="-44" fill="#94a3b8" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
              IR PLATE
            </text>
            <text x="24" y="-30" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">
              {projection.equipment.cassetteSize}
            </text>
            <text x="24" y="-16" fill="#e2e8f0" fontSize="8" fontFamily="monospace">
              {isHorizontalIr ? 'HORIZONTAL' : projection.equipment.orientation.toUpperCase()}
            </text>
            <text
              x="24"
              y="-2"
              fill={projection.equipment.grid ? '#34d399' : '#f59e0b'}
              fontSize="8"
              fontFamily="monospace"
            >
              {projection.equipment.grid ? 'GRID: ON' : 'NON-GRID'}
            </text>
            {config.baselineLabel && (
              <text x="24" y="16" fill="#cbd5e1" fontSize="7.5" fontFamily="monospace">
                REF: {config.baselineLabel}
              </text>
            )}
          </g>

          {/* Baseline Anatomy Silhouette */}
          <g
            transform={`translate(${partCx}, ${partCy}) rotate(${baseline.partRotationDeg})`}
            opacity={hasPartFix ? 0.35 : 1}
          >
            <AnatomicalSilhouette
              silhouette={config.silhouette}
              viewPlane={config.viewPlane}
              strokeColor={hasPartFix ? '#94a3b8' : '#a855f7'}
              fillColor="#1e293b"
              isPaProjection={isPaProjection}
              baselineLabel={config.baselineLabel}
            />
          </g>

          {/* Adjusted Body Rotation Overlay (Bright Amber #f59e0b) */}
          {hasPartFix && (
            <>
              <g transform={`translate(${partCx}, ${partCy}) rotate(${correction.correctedDeg})`}>
                <AnatomicalSilhouette
                  silhouette={config.silhouette}
                  viewPlane={config.viewPlane}
                  strokeColor="#f59e0b"
                  fillColor="#78350f"
                  isPaProjection={isPaProjection}
                  baselineLabel={config.baselineLabel}
                  isOverlay
                />
              </g>
              <path
                d={describeArc(
                  partCx,
                  partCy,
                  64,
                  -90 + Math.min(baseline.partRotationDeg, correction.correctedDeg),
                  -90 + Math.max(baseline.partRotationDeg, correction.correctedDeg)
                )}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.2"
              />
              <rect
                x={partCx - 38}
                y={partCy - 86}
                width="76"
                height="16"
                rx="4"
                fill="#451a03"
                stroke="#f59e0b"
                strokeWidth="1"
              />
              <text
                x={partCx}
                y={partCy - 75}
                fill="#fbbf24"
                fontSize="8.5"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="middle"
              >
                FIX: {correction.correctedDeg}°
              </text>
            </>
          )}

          {/* CR Target Crosshair */}
          <g transform={`translate(${tx}, ${ty})`}>
            <circle cx="0" cy="0" r="6" fill="none" stroke="#22d3ee" strokeWidth="1.2" opacity="0.8" />
            <line x1="-9" y1="0" x2="9" y2="0" stroke="#22d3ee" strokeWidth="1.1" />
            <line x1="0" y1="-9" x2="0" y2="9" stroke="#22d3ee" strokeWidth="1.1" />
          </g>

          {/* Baseline CR Beam Degree Arc (when angled) */}
          {Math.abs(baseline.crAngleDeg) >= 1 && (
            <g opacity={hasCrFix ? 0.38 : 1}>
              <path
                d={describeArc(
                  tx,
                  ty,
                  58,
                  Math.min(180, 180 - baseline.crAngleDeg),
                  Math.max(180, 180 - baseline.crAngleDeg)
                )}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1.6"
              />
              <text
                x={tx - 68}
                y={baseline.crAngleDeg > 0 ? ty + 24 : ty - 16}
                fill="#22d3ee"
                fontSize="8.5"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="end"
              >
                {formatCrShort(baseline.crAngleDeg)}
              </text>
            </g>
          )}

          {/* Baseline Central Ray Line & X-Ray Tube Head */}
          <line
            x1={baseBeam.tubeX}
            y1={baseBeam.tubeY}
            x2={tx}
            y2={ty}
            stroke="#22d3ee"
            strokeWidth={hasCrFix ? '1.5' : '2.3'}
            strokeDasharray={hasCrFix ? '5 4' : undefined}
            opacity={hasCrFix ? 0.4 : 1}
            markerEnd={hasCrFix ? undefined : 'url(#crArrowCyan)'}
          />
          {/* Baseline exit ray from CR target to IR */}
          <line
            x1={tx}
            y1={ty}
            x2={detectorX - 2}
            y2={baseBeam.exitY}
            stroke="#22d3ee"
            strokeWidth="1.3"
            strokeDasharray="3 3"
            opacity={hasCrFix ? 0.25 : 0.7}
          />
          <g
            transform={`translate(${baseBeam.tubeX}, ${baseBeam.tubeY}) rotate(${-baseline.crAngleDeg})`}
            opacity={hasCrFix ? 0.35 : 1}
          >
            <rect
              x="-18"
              y="-12"
              width="28"
              height="24"
              rx="4"
              fill="#0f172a"
              stroke="#22d3ee"
              strokeWidth="1.8"
            />
            <rect x="10" y="-7" width="6" height="14" rx="1.5" fill="#22d3ee" />
            <text
              x="-15"
              y={baseBeam.tubeY < 72 ? 22 : -17}
              fill="#22d3ee"
              fontSize="8"
              fontWeight="bold"
              fontFamily="monospace"
            >
              TUBE
            </text>
          </g>

          {/* Adjusted Beam Angle Overlay (Bright Amber #f59e0b) */}
          {hasCrFix && fixBeam && (
            <g>
              <line
                x1={fixBeam.tubeX}
                y1={fixBeam.tubeY}
                x2={tx}
                y2={ty}
                stroke="#f59e0b"
                strokeWidth="2.6"
                markerEnd="url(#crArrowAmber)"
              />
              <line
                x1={tx}
                y1={ty}
                x2={detectorX - 2}
                y2={fixBeam.exitY}
                stroke="#f59e0b"
                strokeWidth="1.6"
                strokeDasharray="3 3"
                opacity="0.85"
              />
              <g transform={`translate(${fixBeam.tubeX}, ${fixBeam.tubeY}) rotate(${-correction.correctedDeg})`}>
                <rect
                  x="-18"
                  y="-12"
                  width="28"
                  height="24"
                  rx="4"
                  fill="#451a03"
                  stroke="#f59e0b"
                  strokeWidth="2.2"
                />
                <rect x="10" y="-7" width="6" height="14" rx="1.5" fill="#f59e0b" />
                <text
                  x="-18"
                  y={fixBeam.tubeY < 72 ? 23 : -17}
                  fill="#fbbf24"
                  fontSize="8.5"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  FIX TUBE
                </text>
              </g>
              {/* Adjusted Degree Arc */}
              <path
                d={describeArc(
                  tx,
                  ty,
                  76,
                  Math.min(180 - baseline.crAngleDeg, 180 - correction.correctedDeg),
                  Math.max(180 - baseline.crAngleDeg, 180 - correction.correctedDeg)
                )}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.2"
              />
              <rect
                x="18"
                y="244"
                width="136"
                height="18"
                rx="4"
                fill="#451a03"
                stroke="#f59e0b"
                strokeWidth="1.2"
              />
              <text
                x="86"
                y="256"
                fill="#fbbf24"
                fontSize="8.5"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="middle"
              >
                FIX: {formatCrShort(correction.correctedDeg)}
              </text>
            </g>
          )}

          {/* Bottom Legend Strip (cleanly padded at y = 306) */}
          <g transform="translate(18, 306)">
            <circle cx="4" cy="-3" r="3" fill="#22d3ee" />
            <text x="11" y="0" fill="#94a3b8" fontSize="8" fontFamily="monospace">
              Central Ray
            </text>
            <circle cx="80" cy="-3" r="3" fill="#a855f7" />
            <text x="87" y="0" fill="#94a3b8" fontSize="8" fontFamily="monospace">
              Anatomy
            </text>
            <circle cx="140" cy="-3" r="3" fill="#38bdf8" />
            <text x="147" y="0" fill="#94a3b8" fontSize="8" fontFamily="monospace">
              IR Plate
            </text>
            {correction && (
              <>
                <circle cx="204" cy="-3" r="3" fill="#f59e0b" />
                <text x="211" y="0" fill="#fbbf24" fontSize="8" fontWeight="bold" fontFamily="monospace">
                  Adjusted Fix (#f59e0b)
                </text>
              </>
            )}
          </g>
        </svg>
      </div>
      )}
    </div>
  );
};
