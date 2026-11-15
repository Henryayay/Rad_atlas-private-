/**
 * Anatomical regions covered by the Radiographic Positioning Atlas,
 * aligned with the `views_diagrams/` folder categories.
 */
export type AnatomicalRegion =
  | 'Chest'
  | 'Abdomen'
  | 'Upper Limbs'
  | 'Lower Limbs'
  | 'Pelvis & Hips'
  | 'Spine'
  | 'Skull'
  | (string & {});

/**
 * Image receptor (IR) / cassette orientation.
 */
export type CassetteOrientation = 'Vertical' | 'Horizontal' | 'Diagonal';

/**
 * Radiographic anatomical side marker type / placement context.
 */
export type MarkerType = 'Supine' | 'Prone' | (string & {});

/**
 * Anatomical silhouette type rendered in the 2D BeamDiagramSVG.
 */
export type DiagramSilhouette =
  | 'skull-sagittal'
  | 'skull-frontal'
  | 'torso-sagittal'
  | 'torso-frontal'
  | 'shoulder-axial'
  | 'limb-joint';

/**
 * Projection viewing plane for the 2D geometry diagram.
 * - `sagittal`: side profile (Cephalad = Up, Caudad = Down)
 * - `axial`: top-down cross-section (shows RAO/LAO/RPO/LPO body rotation relative to IR)
 */
export type DiagramViewPlane = 'sagittal' | 'axial';

/**
 * Coordinates on the silhouette where the Central Ray (CR) crosshair lands.
 * Values are offsets relative to the silhouette center `(0, 0)`.
 */
export interface DiagramCRTarget {
  x: number;
  y: number;
}

/**
 * Geometric configuration for rendering an anatomically accurate 2D radiographic diagram.
 */
export interface ProjectionDiagramConfig {
  /** Vector silhouette to draw */
  silhouette: DiagramSilhouette;
  /** Viewing plane ('sagittal' side profile or 'axial' top-down cross-section) */
  viewPlane: DiagramViewPlane;
  /** Target point on the silhouette where the Central Ray crosshair lands */
  crTarget: DiagramCRTarget;
  /** Optional anatomical baseline label (e.g. 'OML', 'IOML', 'MSP') */
  baselineLabel?: string;
}

/**
 * Equipment and image receptor configuration for a radiographic projection.
 */
export interface ProjectionEquipment {
  /** Source-to-Image Receptor Distance in centimeters (e.g. 100, 180) */
  sid: number;
  /** Standard cassette / detector size (e.g. "35 x 43 cm", "24 x 30 cm", "18 x 24 cm") */
  cassetteSize: string;
  /** Cassette / detector orientation */
  orientation: CassetteOrientation;
  /** Whether an anti-scatter grid (Bucky / stationary grid) is required */
  grid: boolean;
  /** Marker type / patient posture marker specification (Supine / Prone) */
  markerType: MarkerType;
  /** Positioning aids and accessories (e.g. sponges, sandbags, immobilization straps) */
  accessories: string[];
}

/**
 * Radiation protection and pre-exposure patient safety checklist.
 */
export interface ProjectionSafety {
  /** Whether Last Menstrual Period (LMP) / pregnancy check is required prior to exposure */
  requiresLmpCheck: boolean;
  /** Whether contact or shadow gonad shielding is indicated (when outside region of interest) */
  gonadShield: boolean;
  /** Radiopaque items that must be removed from the anatomical region before exposure */
  removableArtifacts: string[];
}

/**
 * Patient and anatomical part positioning, central ray geometry, collimation, and respiration.
 */
export interface ProjectionPositioning {
  /** Overall body habitus / posture (e.g. Erect, Supine, Seated at end of table) */
  patientPosition: string;
  /** Required obliquity or rotation angle of the anatomical part (e.g. "0° (True AP)", "45° medial rotation") */
  partRotationAngle: string | number;
  /** Central Ray (CR) angulation and direction (e.g. "Perpendicular (0°)", "15° cephalad") */
  crAngle: string | number;
  /** Exact surface anatomical landmark where the Central Ray enters */
  crEntryPoint: string;
  /** Four-sided collimation boundaries (superior, inferior, medial/lateral margins) */
  collimation: string;
  /** Breathing instructions during exposure (e.g. "2nd full inspiration", "Suspended expiration") */
  respiration: string;
}

/**
 * Baseline manual exposure factors and clinical technique adjustment notes.
 */
export interface ProjectionExposure {
  /** Baseline peak kilovoltage (kVp) for an average adult patient */
  baselineKvp: number;
  /** Baseline tube current-time product (mAs) for an average adult patient */
  baselineMas: number;
  /** Technique modifications for pathology, casts, pediatric/geriatric habitus, or grid changes */
  modificationNotes: string | string[];
}

/**
 * Optional bedside Cantonese patient communication cues for positioning and breathing.
 */
export interface CantonesePatientCues {
  /** Spoken Cantonese phrase for guiding patient posture and limb alignment */
  positioning?: string;
  /** Spoken Cantonese phrase for respiration control during exposure */
  breathing?: string;
}

/**
 * Repeatable radiographic error analysis and corrective action item.
 */
export interface ProjectionTroubleshootingItem {
  /** Observable error on the resulting radiograph */
  visualError: string;
  /** Underlying anatomical or positioning cause of the error */
  anatomicalCause: string;
  /** Exact clinical action to correct the positioning error */
  correctionAction: string;
  /** Specific quantitative CR angle or part rotation adjustment required */
  angleRotationAdjustment: string;
}

/**
 * Complete clinical definition for a diagnostic radiographic projection.
 */
export interface Projection {
  /** Unique identifier slug (e.g. "chest-pa", "knee-ap") */
  id: string;
  /** Primary standard projection title (e.g. "Chest — PA Erect") */
  name: string;
  /** Alternative clinical or eponymous names (e.g. ["CXR PA", "Posteroanterior Chest"]) */
  aliases: string[];
  /** Anatomical region classification */
  anatomicalRegion: AnatomicalRegion;
  /** Common clinical indications and pathologies evaluated by this projection */
  clinicalIndications: string[];
  /** Equipment, detector, and SID setup */
  equipment: ProjectionEquipment;
  /** Radiation safety and artifact removal checklist */
  safety: ProjectionSafety;
  /** Patient positioning, CR geometry, collimation, and respiration */
  positioning: ProjectionPositioning;
  /** Baseline exposure parameters and clinical modification notes */
  exposure: ProjectionExposure;
  /** Optional Cantonese phrases for patient positioning and breathing instructions */
  cantoneseCues?: CantonesePatientCues;
  /** Diagnostic image evaluation pass criteria */
  imageCriteria: string[];
  /** Common positioning errors, anatomical causes, and exact corrective adjustments */
  troubleshooting: ProjectionTroubleshootingItem[];
  /** Optional lecture diagram image URL from `views_diagrams/` (replaces the fallback 2D SVG when provided) */
  diagramImage?: string;
  /** Optional 2D SVG diagram geometry configuration (used when `diagramImage` is not provided) */
  diagramConfig?: ProjectionDiagramConfig;
}
