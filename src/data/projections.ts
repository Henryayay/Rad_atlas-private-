import type { Projection } from '../types/projection';

import chestPaImg from '../../views_diagrams/Chest/Chest_PA.png';
import chestLateralImg from '../../views_diagrams/Chest/Chest_lateral.png';
import chestLateralDecuImg from '../../views_diagrams/Chest/Chest_lateral_decu.png';
import chestApicalLordoticImg from '../../views_diagrams/Chest/Chest_apical_lordotic.png';
import chestApicalLordoticTubeTiltImg from '../../views_diagrams/Chest/Chest_apical_lordotic_tubetilt.png';
import clavicleApAxialImg from '../../views_diagrams/Chest/Clavicle_AP_axial.png';
import lowerRibsImg from '../../views_diagrams/Chest/lower_ribs.png';

import abdomenApImg from '../../views_diagrams/Abdomen/AbdomenAP.png';
import kubImg from '../../views_diagrams/Abdomen/KUB.png';

import wristPaUlnarDevImg from '../../views_diagrams/upper_limbs/wrist_PA_ulnar_deviation.png';
import wristAnteriorOblImg from '../../views_diagrams/upper_limbs/wrist_anterior_obl.png';
import wristPosteriorOblImg from '../../views_diagrams/upper_limbs/wrist_posterior_obl.png';
import carpalTunnelInferoImg from '../../views_diagrams/upper_limbs/carpel_tunnel_inferosuperior.png';
import carpalTunnelSuperoImg from '../../views_diagrams/upper_limbs/carpel_tunnel_superoinferior.png';
import shoulderAxialImg from '../../views_diagrams/upper_limbs/Shoulder_axial.png';
import shoulderOutletImg from '../../views_diagrams/upper_limbs/Shoulder_outlet.png';

import kneeApImg from '../../views_diagrams/lower_limbs/Knee_AP.png';
import kneeLatImg from '../../views_diagrams/lower_limbs/Knee_lat.png';
import kneeSkylineImg from '../../views_diagrams/lower_limbs/knee_skyline.png';
import kneeMerchantsImg from '../../views_diagrams/lower_limbs/knee_merchants.png';
import kneeHolmbladImg from '../../views_diagrams/lower_limbs/knee_holmbald.png';
import subtalarBrodensImg from '../../views_diagrams/lower_limbs/subtalar_brodens.png';
import calcaneumAxialImg from '../../views_diagrams/lower_limbs/calcaneum_axial.png';

import pelvisApImg from '../../views_diagrams/Pelvis & hips/Pelvis_AP.png';
import unilateralHipImg from '../../views_diagrams/Pelvis & hips/unilateral_hip.png';
import lateralHipImg from '../../views_diagrams/Pelvis & hips/lateral_hip.png';
import siJointOblImg from '../../views_diagrams/Pelvis & hips/SI_joint_obl.png';

import skullOfImg from '../../views_diagrams/Skull/Skull_OF.jpg';
import skullCaldwellImg from '../../views_diagrams/Skull/Skull_OF_axial_Caldwell.jpg';
import skullTowneImg from "../../views_diagrams/Skull/FO_axial_Towne's.jpeg";
import skullWatersImg from '../../views_diagrams/Skull/Skull_OM_Waters.jpg';
import skullLatImg from '../../views_diagrams/Skull/Skull_lat.png';

export const PROJECTIONS: Projection[] = [
  // ============================================================================
  // CHEST (views_diagrams/Chest)
  // ============================================================================
  {
    id: 'chest-pa-erect',
    name: 'Chest — PA Erect',
    aliases: ['CXR PA', 'Posteroanterior Chest'],
    anatomicalRegion: 'Chest',
    clinicalIndications: [
      'Pneumonia, pleural effusion, or pneumothorax',
      'Cardiomegaly and congestive heart failure (CTR assessment)',
      'Pre-operative thoracic screening',
    ],
    equipment: {
      sid: 180,
      cassetteSize: '35 x 43 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Prone',
      accessories: ['Erect chest Bucky stand', 'Lead abdominal/gonad wrap shield'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: [
        'Necklaces & pendants',
        'Bra with metal underwire/hooks',
        'Shirt buttons, pocket items & medicated patches',
        'ECG leads (if removable)',
      ],
    },
    positioning: {
      patientPosition: 'Erect, anterior chest pressed against vertical IR; chin raised, dorsum of hands on hips, shoulders rolled forward',
      partRotationAngle: '0° (MSP perpendicular to IR)',
      crAngle: '0° (Horizontal beam, perpendicular to IR)',
      crEntryPoint: 'T7 spinous process (level of inferior angle of scapula) at MSP',
      collimation: 'Upper border 5 cm (2 in.) above shoulders to lower costal margin (LCM); lateral to skin borders',
      respiration: 'Expose at end of 2nd full inspiration',
    },
    exposure: {
      baselineKvp: 110,
      baselineMas: 2,
      modificationNotes: [
        'Reduce kVp/mAs for severe COPD / emphysema',
        'Increase exposure for large pleural effusion or pulmonary edema',
        'Trauma / Supine AP: use 100–120 cm SID, place detector higher above shoulders to avoid apical cut-off',
      ],
    },
    cantoneseCues: {
      positioning: '心口貼實塊板，下巴抬高放喺塊板上面，雙手反手叉腰，膊頭向前傾貼實塊板。',
      breathing: '先生/小姐麻煩你深深吸一啖氣，吸到盡，忍實唔好唞住！',
    },
    imageCriteria: [
      'Both lung apices and bilateral costophrenic angles demonstrated in full',
      'No rotation: medial (sternal) ends of clavicles equidistant from thoracic spinous processes',
      'Scapulae projected laterally clear of the lung fields',
      '9–10 pairs of posterior ribs (6 anterior ribs) visible above the diaphragm',
      'Spinous processes and thoracic intervertebral spaces faintly visible through heart shadow',
    ],
    troubleshooting: [
      {
        visualError: 'Right sternoclavicular (SC) joint is further from spine than left SC joint',
        anatomicalCause: 'Patient rotated into slight RAO (right anterior thorax closer to IR)',
        correctionAction: 'Bring left shoulder slightly forward toward IR until MSP is perpendicular',
        angleRotationAdjustment: 'Part rotation -8° (counter-rotate left anterior chest toward IR)',
      },
      {
        visualError: 'Medial scapular borders superimpose upper lateral lung fields',
        anatomicalCause: 'Shoulders not rolled anteriorly enough against the detector',
        correctionAction: 'Place dorsum of hands low on hips and roll shoulders/elbows forward',
        angleRotationAdjustment: 'Part rotation +15° anterior shoulder protraction',
      },
      {
        visualError: 'Clavicles projected above lung apices (lordotic appearance)',
        anatomicalCause: 'Patient leaning backward or CR angled cephalad',
        correctionAction: 'Ensure patient stands upright with shoulders flush to IR and check horizontal CR',
        angleRotationAdjustment: 'CR angle -5° caudad (level horizontal 0°)',
      },
    ],
    diagramImage: chestPaImg,
    diagramConfig: {
      silhouette: 'torso-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: 4, y: -12 },
      baselineLabel: 'T7 / MSP',
    },
  },
  {
    id: 'chest-lateral',
    name: 'Chest — Lateral',
    aliases: ['Lateral CXR', 'Left Lateral Chest'],
    anatomicalRegion: 'Chest',
    clinicalIndications: [
      'Demonstration of retrosternal and retrocardiac lung spaces',
      'Localization of lesions seen on PA chest in 3D depth',
      'Posterior costophrenic angle small pleural effusion assessment',
    ],
    equipment: {
      sid: 180,
      cassetteSize: '35 x 43 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Supine',
      accessories: ['Erect chest Bucky stand', 'Lead gonad shield'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: [
        'Necklaces & chains',
        'Bra with metal underwire/hooks',
        'Adhesive patches & shirt buttons',
      ],
    },
    positioning: {
      patientPosition: 'Erect true lateral with affected side (default left side) against vertical Bucky; hands placed behind head with elbows brought slightly together, chin raised',
      partRotationAngle: '90° True Lateral (MSP parallel to IR; flank line equidistant to Bucky)',
      crAngle: '0° (Horizontal beam, perpendicular to IR)',
      crEntryPoint: 'T7 level (inferior angle of scapula) at mid-coronal / mid-thorax plane',
      collimation: 'Upper border 5 cm (2 in.) above shoulder to lower costal margin (LCM); anterior to sternum and posterior to thoracic skin margin',
      respiration: 'Expose at end of full inspiration',
    },
    exposure: {
      baselineKvp: 110,
      baselineMas: 4,
      modificationNotes: [
        'Left lateral is routine to minimize cardiac magnification unless right-sided lesion is suspected',
        'Slight forward bend may help superimpose scapulae and ribs in kyphotic patients',
      ],
    },
    cantoneseCues: {
      positioning: '請打側企貼實塊板，雙腳分開少少企穩，兩隻手放喺後尾枕舉高合埋少少，下巴抬起。',
      breathing: '深深吸一啖氣，吸到盡，忍實唔好唞住！',
    },
    imageCriteria: [
      'Entire lung fields from apices to posterior costophrenic angles included without posterior trunk cut-off',
      'True lateral: posterior ribs and costophrenic angles nearly superimposed',
      'Lung apices not obscured by humeral soft tissues',
      'Sternum in profile anteriorly without rotation',
      'Lung markings visible from hilum to periphery',
    ],
    troubleshooting: [
      {
        visualError: 'Posterior ribs are widely separated (> 1–1.5 cm AP offset)',
        anatomicalCause: 'Patient torso rotated out of true lateral (MSP not parallel to IR)',
        correctionAction: 'Align bilateral posterior scapular/flank borders perpendicular to the Bucky',
        angleRotationAdjustment: 'Part rotation ±10° to true 90° lateral alignment',
      },
      {
        visualError: 'Humeral soft tissue shadows superimpose superior lung apices',
        anatomicalCause: 'Patient arms dropped below shoulder level during exposure',
        correctionAction: 'Instruct patient to hold back of head and lift elbows high and forward',
        angleRotationAdjustment: 'Part rotation +20° shoulder flexion (elevate arms above apices)',
      },
    ],
    diagramImage: chestLateralImg,
    diagramConfig: {
      silhouette: 'torso-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: 0, y: -12 },
      baselineLabel: 'T7 / Mid-Coronal',
    },
  },
  {
    id: 'chest-lateral-decubitus',
    name: 'Chest — Lateral Decubitus',
    aliases: ['Decubitus Chest', 'Horizontal Beam Decubitus CXR'],
    anatomicalRegion: 'Chest',
    clinicalIndications: [
      'Small free pleural effusion (affected side down — fluid gravitates to dependent wall)',
      'Small pneumothorax (unaffected side down — free air rises to non-dependent wall)',
      'Air-fluid levels in pulmonary cavities',
    ],
    equipment: {
      sid: 180,
      cassetteSize: '35 x 43 cm',
      orientation: 'Horizontal',
      grid: false,
      markerType: 'Supine',
      accessories: [
        'Cassette holder',
        'Radiolucent chest pad (firm top / soft bottom) to elevate dependent thorax',
        'Lead gonad shield',
      ],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Necklaces', 'Bra hooks/underwires', 'Adhesive patches'],
    },
    positioning: {
      patientPosition: 'Lateral recumbent lying on radiolucent pad (affected side down for effusion; unaffected side down for pneumothorax), facing X-ray tube; knees and hips flexed, hands behind head',
      partRotationAngle: '0° (MSP parallel to vertical IR; back/chest flush against cassette)',
      crAngle: '0° (Horizontal beam, perpendicular to vertical IR)',
      crEntryPoint: 'T7 (inferior angle of scapula) at Mid-Sagittal Plane (MSP)',
      collimation: 'Superior 5 cm (2 in.) above shoulder to lower costal margin (LCM); bilateral lateral skin margins (ensure dependent chest wall is not cut off)',
      respiration: 'Expose at end of full inspiration',
    },
    exposure: {
      baselineKvp: 110,
      baselineMas: 2,
      modificationNotes: [
        'Keep patient in decubitus position for 5 minutes prior to exposure so fluid/air settles',
        'Always elevate thorax on radiolucent pad so divergent beam does not cut off dependent lung wall',
      ],
    },
    cantoneseCues: {
      positioning: '請打側瞓喺張墊上面，面向住部機，雙腳屈起穩定身體，雙手抱住後尾枕舉高。',
      breathing: '深深吸一啖氣，吸到盡，忍實唔好唞住！',
    },
    imageCriteria: [
      'Entire dependent and non-dependent lung fields and costophrenic angles included without cut-off',
      'No rotation: sternoclavicular joints equidistant from spine',
      'Apices clear of arms/shoulders',
      'Air-fluid level or free pleural fluid/air clearly demonstrated with horizontal beam',
    ],
    troubleshooting: [
      {
        visualError: 'Dependent lateral chest wall and costophrenic angle cut off at bottom edge',
        anatomicalCause: 'Patient lying directly on mattress without radiolucent elevation pad',
        correctionAction: 'Place firm radiolucent pad under dependent thorax so chest sits above lower IR border',
        angleRotationAdjustment: 'CR shift 3 cm toward dependent side (elevate patient on pad)',
      },
      {
        visualError: 'Asymmetric clavicles and distorted mediastinum',
        anatomicalCause: 'Patient rolled anteriorly or posteriorly out of true lateral recumbent posture',
        correctionAction: 'Flex hips/knees and align both shoulders and pelvis perpendicular to tabletop',
        angleRotationAdjustment: 'Part rotation -10° to align MSP parallel to IR',
      },
    ],
    diagramImage: chestLateralDecuImg,
    diagramConfig: {
      silhouette: 'torso-frontal',
      viewPlane: 'axial',
      crTarget: { x: 0, y: -10 },
      baselineLabel: 'T7 / Horizontal Beam',
    },
  },
  {
    id: 'chest-apical-lordotic',
    name: 'Chest — Apical Lordotic (AP)',
    aliases: ['Apical Lordotic Chest', 'Lordotic CXR (No Tube Tilt)'],
    anatomicalRegion: 'Chest',
    clinicalIndications: [
      'Evaluation of lung apices obscured by clavicles on routine PA chest',
      'Apical pulmonary tuberculosis (TB) or Pancoast tumor',
      'Right middle lobe / lingular collapse evaluation',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Horizontal',
      grid: true,
      markerType: 'Supine',
      accessories: ['Erect Bucky stand', 'Lead gonad shield'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Necklaces', 'Bra straps/underwires', 'Shirt buttons & patches'],
    },
    positioning: {
      patientPosition: 'Standing ~30 cm in front of vertical Bucky facing X-ray tube, then leaning backward so upper back/shoulders rest against IR (coronal plane ~45° to Bucky)',
      partRotationAngle: '45° backward lordotic lean (MSP perpendicular to IR)',
      crAngle: '0° (Horizontal beam, no tube tilting)',
      crEntryPoint: 'Mid-sternum (7.5–10 cm / 3–4 inches below jugular notch) at MSP',
      collimation: 'Upper border of IR 5 cm (2 in.) above shoulders; include upper half of lung fields and lateral skin margins',
      respiration: 'Expose at end of full inspiration',
    },
    exposure: {
      baselineKvp: 110,
      baselineMas: 2.5,
      modificationNotes: [
        'Support patient carefully while leaning backward at 45°; if patient is unstable or cannot lean back, use the Apical Lordotic (Tube Tilt 30°–40° cephalad) method instead',
      ],
    },
    cantoneseCues: {
      positioning: '請企前少少面向住部機，跟住身體慢慢向後拗，用雙手扶住或者將上背貼實後面塊板，我會扶住你唔使驚。',
      breathing: '深深吸一啖氣，吸到盡，忍實唔好唞住！',
    },
    imageCriteria: [
      'Clavicles projected superiorly above the lung apices without superimposition',
      'At least upper half of lung fields and apices clearly demonstrated',
      'Anterior and posterior ribs superimposed cleanly',
      'No rotation: medial ends of clavicles equidistant from vertebral column',
    ],
    troubleshooting: [
      {
        visualError: 'Clavicles still superimpose the lung apices',
        anatomicalCause: 'Insufficient backward lordotic lean (< 30° coronal tilt)',
        correctionAction: 'Have patient step slightly further forward from Bucky to achieve a 45° backward lean, or add cephalad tube tilt',
        angleRotationAdjustment: 'Part rotation +15° lordotic lean (or +15°–20° cephalad CR)',
      },
      {
        visualError: 'Lung apices cut off at superior border of radiograph',
        anatomicalCause: 'IR positioned too low relative to upward-projected apices',
        correctionAction: 'Ensure upper border of IR sits at least 5 cm (2 inches) above the shoulders after leaning back',
        angleRotationAdjustment: 'CR shift 4 cm superiorly',
      },
    ],
    diagramImage: chestApicalLordoticImg,
    diagramConfig: {
      silhouette: 'torso-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: -4, y: -18 },
      baselineLabel: 'Mid-Sternum (45° Lean)',
    },
  },
  {
    id: 'chest-apical-lordotic-tubetilt',
    name: 'Chest — Apical Lordotic (Tube Tilt)',
    aliases: ['Apical Axial Chest', 'Semi-Axial Apical CXR (30°–40° Cephalad)'],
    anatomicalRegion: 'Chest',
    clinicalIndications: [
      'Evaluation of lung apices when patient cannot safely lean backward into lordotic position',
      'Apical pulmonary tuberculosis (TB) or apical mass',
      'Geriatric or unstable patients requiring apical view',
    ],
    equipment: {
      sid: 180,
      cassetteSize: '24 x 30 cm',
      orientation: 'Horizontal',
      grid: true,
      markerType: 'Supine',
      accessories: ['Erect Bucky stand & radiolucent stool', 'Lead gonad shield'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Necklaces', 'Bra hooks/underwires', 'Patches'],
    },
    positioning: {
      patientPosition: 'Seated or standing upright with posterior thorax flush against vertical Bucky, facing X-ray tube',
      partRotationAngle: '0° Erect (MSP perpendicular to IR, back upright against Bucky)',
      crAngle: '30°–40° cephalad (cranial beam)',
      crEntryPoint: 'Mid-sternum (7.5–10 cm below jugular notch) at MSP',
      collimation: 'Include lung apices superiorly and at least upper half of lung fields; lateral to skin margins',
      respiration: 'Expose at end of full inspiration',
    },
    exposure: {
      baselineKvp: 110,
      baselineMas: 2.5,
      modificationNotes: [
        'Raise vertical Bucky slightly so the 30°–40° cephalad beam projects lung apices onto the center of the detector without superior cut-off',
      ],
    },
    cantoneseCues: {
      positioning: '請坐正或者企正，背脊貼實後面塊板，面向住前面部機唔好郁。',
      breathing: '深深吸一啖氣，吸到盡，忍實唔好唞住！',
    },
    imageCriteria: [
      'Clavicles projected superior to the lung apices',
      'Lung apices and at least upper half of lung fields clearly demonstrated',
      'Anterior and posterior ribs nearly superimposed',
      'Symmetric sternoclavicular joints without rotation',
    ],
    troubleshooting: [
      {
        visualError: 'Clavicles remain superimposed over the lung apices',
        anatomicalCause: 'Insufficient cephalad CR angulation (< 25°)',
        correctionAction: 'Increase cephalad tube tilt to 30°–40° directed at mid-sternum',
        angleRotationAdjustment: 'CR angle +10° cephalad (set to 30°–40° cephalad)',
      },
      {
        visualError: 'Apices projected above the top edge of the detector',
        anatomicalCause: 'Cassette not raised to match upward divergence of 30°–40° cephalad beam',
        correctionAction: 'Elevate Bucky tray 5–8 cm so angled exit ray aligns with IR center',
        angleRotationAdjustment: 'CR / IR alignment shift +5 cm superior',
      },
    ],
    diagramImage: chestApicalLordoticTubeTiltImg,
    diagramConfig: {
      silhouette: 'torso-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: -4, y: -18 },
      baselineLabel: 'Mid-Sternum (30°–40° ↑)',
    },
  },

  {
    id: 'clavicle-ap-axial',
    name: 'Clavicle — AP Axial (Lordotic)',
    aliases: ['AP Axial Clavicle', 'Clavicle Axial', 'Lordotic Clavicle View'],
    anatomicalRegion: 'Chest',
    clinicalIndications: [
      'Clavicular fracture (demonstrating superior/inferior fragment displacement)',
      'Evaluation of mid- and medial-third clavicle clear of upper ribs & lung apex',
      'Acromioclavicular (AC) and sternoclavicular (SC) alignment & non-union follow-up',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Horizontal',
      grid: true,
      markerType: 'R / L anatomical marker (AP supine/erect indicator)',
      accessories: ['Erect Bucky stand (or tabletop cassette in trauma)', 'Lap gonad shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Necklaces', 'Shirt collar buttons', 'Bra straps/clasps', 'Clothing zippers', 'ECG leads'],
    },
    positioning: {
      patientPosition:
        'Erect (or supine if trauma) with posterior shoulder against vertical IR, MSP perpendicular to IR, head turned slightly away from affected side (chin raised clear of beam), arms relaxed at sides',
      partRotationAngle: '0° (True AP; both shoulders level and in contact with Bucky)',
      crAngle:
        '15°–30° cephalad (20°–30° typical; use steeper 25°–30° tilt for thin/asthenic build and 15°–20° for broad muscular shoulders)',
      crEntryPoint: 'Mid-shaft of affected clavicle',
      collimation: 'Include entire clavicle from SC joint to AC joint, 2.5 cm above & below clavicle',
      respiration:
        'Expose at end of full inspiration (elevates clavicles further away from lung apices & 1st rib)',
    },
    exposure: {
      baselineKvp: 70,
      baselineMas: 5,
      modificationNotes:
        'Use 65 kVp / 5 mAs for straight 0° AP clavicle; 70 kVp compensates for increased oblique path length with 15°–30° cephalad tilt. Add +4 to +6 kVp for heavy muscular build or immobilization sling.',
    },
    cantoneseCues: {
      positioning: '先生/小姐，企直背脊貼住塊板，個頭稍微擰去好嗰邊少少唔好阻住條光線，肩膀放鬆垂低唔好郁。',
      breathing: '深深吸一啖氣，吸到盡，忍實唔好唞住！',
    },
    imageCriteria: [
      'Entire clavicle demonstrated from sternoclavicular (SC) joint to acromioclavicular (AC) joint',
      'Mid- and medial-shaft of clavicle projected superior to the 1st rib and lung apex',
      'Lateral third of clavicle projected cleanly above the scapula and thoracic cage',
      'Clear cortical margins and trabecular detail without motion blur',
    ],
    troubleshooting: [
      {
        visualError: 'Clavicle still superimposed over upper ribs / lung apex (insufficient upward throw)',
        anatomicalCause: 'Insufficient cephalad CR angulation (<15°) or exposure taken on expiration instead of inspiration',
        correctionAction: 'Increase cephalad CR tilt to 25°–30° and expose at end of full inspiration',
        angleRotationAdjustment: 'CR angle +10° cephalad (toward 25°–30°)',
      },
      {
        visualError: 'Clavicle foreshortened or projected excessively high off the chest with distortion',
        anatomicalCause: 'Excessive cephalad CR angulation (>35°) or patient leaning backward excessively',
        correctionAction: 'Reduce cephalad CR tilt to 15°–20° and ensure trunk is upright against Bucky',
        angleRotationAdjustment: 'CR angle -10° caudad (reduce to 15°–20° cephalad)',
      },
      {
        visualError: 'Mandible or chin shadow superimposed over medial clavicle',
        anatomicalCause: 'Patient failed to elevate chin or turn head toward the unaffected side',
        correctionAction: 'Ask patient to elevate chin slightly and rotate head away from affected clavicle',
        angleRotationAdjustment: 'Part rotation ±10° head turn toward unaffected side',
      },
    ],
    diagramImage: clavicleApAxialImg,
  },
  {
    id: 'lower-ribs-ap',
    name: 'Lower Ribs (8th–12th) — AP',
    aliases: ['AP Lower Ribs', 'Subdiaphragmatic Ribs AP', 'Ribs 8-12 AP', '9th-12th Ribs AP'],
    anatomicalRegion: 'Chest',
    clinicalIndications: [
      'Lower thoracic cage trauma or suspected 8th–12th rib fractures',
      'Focal lower chest wall pain / costochondral injury',
      'Supplement with PA Chest to exclude pneumothorax/haemothorax, and 45° Posterior Oblique if axillary curve obscured',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '35 x 43 cm',
      orientation: 'Horizontal',
      grid: true,
      markerType: 'R / L anatomical marker (AP supine indicator)',
      accessories: ['Tabletop Bucky', 'Knee support pillow for lumbar comfort', 'Gonad shield', 'Optional wedge filter'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Belt buckles', 'Trouser zippers/buttons', 'Bras/underwires', 'Topical pain patches'],
    },
    positioning: {
      patientPosition:
        'Supine with MSP centered to table Bucky midline; arms slightly abducted clear of lateral rib margins; knees slightly flexed over pillow to flatten lumbar lordosis',
      partRotationAngle: '0° (True AP; add 45° RPO/LPO affected-side-down oblique if axillary arc needs unfolding)',
      crAngle:
        '6°–10° cephalad from vertical at LCM to IR center (~T11–T12), OR 0° perpendicular centered directly at T12',
      crEntryPoint:
        'Midline (or affected side) at Lower Costal Margin (L2–L3) with cranial tilt to T11–T12 (lower IR border 5 cm below LCM), or perpendicular at T12 (midway between xiphoid and LCM)',
      collimation: 'Include 8th–12th ribs bilaterally (or affected hemithorax to lateral skin margin) down to iliac crests',
      respiration:
        'Expose at end of full expiration (elevates diaphragm above 8th rib so 8th–12th ribs project uniformly over abdominal soft tissue)',
    },
    exposure: {
      baselineKvp: 75,
      baselineMas: 20,
      modificationNotes:
        'Keep kVp relatively low (70–75 kVp) for high bony trabecular contrast of thin subdiaphragmatic ribs against dense upper abdomen. Higher kVp washes out subtle hairline rib fractures.',
    },
    cantoneseCues: {
      positioning: '先生/小姐麻煩你平瞓喺張床度，雙手打開少少唔好遮住兩邊肋骨，身體保持正中唔好鬱。',
      breathing: '吸一啖氣，然後完全呼晒啲氣出嚟，忍住唔好唞氣！',
    },
    imageCriteria: [
      'Lower ribs (8th–12th) completely included down to the iliac crests and lateral rib margins',
      'Diaphragm elevated sufficiently so 9th–12th ribs project below the diaphragm over homogeneous abdominal density',
      'No trunk rotation (vertebral spinous processes midline and rib arcs symmetrical)',
      'Sharp bony trabecular detail without respiratory motion blur',
    ],
    troubleshooting: [
      {
        visualError: '8th–10th ribs straddle high-contrast lung/diaphragm boundary (underexposed below diaphragm)',
        anatomicalCause: 'Exposure made on inspiration instead of full expiration',
        correctionAction: 'Repeat instructing full expiration so the diaphragm rises superior to the 8th/9th ribs',
        angleRotationAdjustment: 'CR shift 3 cm inferiorly on full expiration',
      },
      {
        visualError: '11th–12th floating ribs clipped at inferior edge of radiograph',
        anatomicalCause: 'Centering too high above LCM or IR placed too far cranially',
        correctionAction: 'Ensure lower IR border sits 5 cm (2 in.) below LCM and center at LCM with slight cephalad tilt (or T12)',
        angleRotationAdjustment: 'CR shift 4 cm inferiorly toward LCM',
      },
    ],
    diagramImage: lowerRibsImg,
  },

  // ============================================================================
  // ABDOMEN (views_diagrams/Abdomen)
  // ============================================================================
  {
    id: 'abdomen-ap-supine',
    name: 'Abdomen — AP Supine',
    aliases: ['AP Abdomen', 'Supine Abdomen (Subcostal / LCM)'],
    anatomicalRegion: 'Abdomen',
    clinicalIndications: [
      'Abdominal pain, distension, or suspected bowel obstruction / ileus',
      'Pneumoperitoneum, volvulus, or ascites evaluation',
      'Radiopaque gallstones, pancreatic calcification, or foreign body',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '35 x 43 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Supine',
      accessories: ['Table Bucky', 'Pillow for head', 'Gonad shield (male patients)'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: [
        'Trouser zippers, belts, coins & keys',
        'Underwear with metal clasps',
        'Medicated patches & navel piercings',
      ],
    },
    positioning: {
      patientPosition: 'Supine on X-ray table, head on pillow, arms at sides away from body, legs extended',
      partRotationAngle: '0° (MSP centered to table; bilateral ASIS equidistant from tabletop)',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: 'Lower Costal Margin (LCM / Subcostal plane at L3 level) along Mid-Sagittal Plane (MSP); lower IR border at ASIS',
      collimation: 'Include domes of diaphragm superiorly to ASIS / upper bladder inferiorly; 2.5 cm (1 in.) beyond lateral skin margins',
      respiration: 'Expose at end of full expiration',
    },
    exposure: {
      baselineKvp: 75,
      baselineMas: 16,
      modificationNotes: [
        'Increase kVp (+4–6 kVp) for ascites or obese habitus; decrease kVp for thin patients',
        'Expose on expiration to elevate diaphragm, flatten abdomen, and prevent visceral motion blur',
      ],
    },
    cantoneseCues: {
      positioning: '請除鞋平瞓喺床中間，面向天，雙手放喺身體兩邊（唔好放床邊以免夾親手），雙腳伸直放鬆。',
      breathing: '麻煩你吸一啖氣，之後呼氣，呼到盡，忍實唔好唞住！',
    },
    imageCriteria: [
      'Upper border includes domes of diaphragm; inferior border reaches ASIS / pelvic inlet',
      'No rotation: iliac wings and inferior ribs symmetric; spinous processes centered in vertebral bodies',
      'Bilateral psoas muscle outlines, lower liver border, and kidney shadows visible',
      'Lateral abdominal wall soft tissue and properitoneal fat stripes visible without motion blur',
    ],
    troubleshooting: [
      {
        visualError: 'Domes of diaphragm cut off at the superior margin of the radiograph',
        anatomicalCause: 'CR centered too low (at iliac crest instead of subcostal plane / LCM) or exposed on inspiration',
        correctionAction: 'Center CR at LCM (L3 subcostal plane) with lower cassette border at ASIS, and expose on full expiration',
        angleRotationAdjustment: 'CR shift 5 cm superior to LCM (L3)',
      },
      {
        visualError: 'Left iliac wing appears wider than right; spinous processes shifted left',
        anatomicalCause: 'Patient pelvis/torso rotated into slight LPO position',
        correctionAction: 'Palpate bilateral ASIS and level pelvis equidistant to tabletop',
        angleRotationAdjustment: 'Part rotation -10° (level bilateral ASIS)',
      },
    ],
    diagramImage: abdomenApImg,
    diagramConfig: {
      silhouette: 'torso-frontal',
      viewPlane: 'axial',
      crTarget: { x: 0, y: 8 },
      baselineLabel: 'Subcostal Plane (L3)',
    },
  },
  {
    id: 'abdomen-kub',
    name: 'Abdomen — AP KUB',
    aliases: ['KUB', 'Kidneys, Ureters & Bladder', 'Flat Plate KUB'],
    anatomicalRegion: 'Abdomen',
    clinicalIndications: [
      'Renal, ureteric, or vesical (bladder) calculi (90% radiopaque)',
      'Baseline scout / release film for Intravenous Urography (IVU)',
      'Ureteric stent or nephrostomy tube position check',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '35 x 43 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Supine',
      accessories: ['Table Bucky', 'Gonad shield (for male patients only, below symphysis pubis)'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: false,
      removableArtifacts: [
        'Trouser zippers, belts & coins',
        'Underwear metal clasps',
        'Medicated patches & navel rings',
      ],
    },
    positioning: {
      patientPosition: 'Supine on table, MSP centered to midline, arms at sides, bilateral ASIS equidistant to tabletop',
      partRotationAngle: '0° (MSP perpendicular to table; no pelvic rotation)',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: 'Iliac crest (L4 level / Umbilicus) at MSP; lower border of IR at pubic symphysis (ASIS + 1 palm width inferiorly)',
      collimation: 'Superior to upper renal poles (T11/T12), inferior to lower border of pubic symphysis, lateral to abdominal skin margins (+1 inch)',
      respiration:
        'Expose at end of full expiration (flatter abdomen, sharper bowel gas border, better contrast; full inspiration optional if high kidneys must shift inferiorly)',
    },
    exposure: {
      baselineKvp: 75,
      baselineMas: 16,
      modificationNotes: [
        'If tall patient cannot fit kidneys and bladder on one 35×43 cm film, use two-film KUB technique (AP Abdomen + angled AP Bladder view)',
        'Gonad shield for male patients only; omit in females to avoid obscuring bladder/distal ureters',
      ],
    },
    cantoneseCues: {
      positioning: '平瞓喺床中間，兩隻手放喺身體兩邊，雙腳放鬆唔好郁。',
      breathing: '麻煩你吸一啖氣，吸到盡，忍實唔好唞住！',
    },
    imageCriteria: [
      'Superior renal poles, psoas margins, and inferior border of pubic symphysis included on radiograph',
      'No rotation: symmetric iliac alae and obturator foramina; spinous processes in midline',
      'Renal outlines, psoas shadows, and transverse processes of lumbar vertebrae clearly visualized',
      'No motion unsharpness',
    ],
    troubleshooting: [
      {
        visualError: 'Pubic symphysis cut off at the inferior border of the radiograph',
        anatomicalCause: 'IR and CR centered too high above the iliac crests',
        correctionAction: 'Shift IR and CR inferiorly so CR enters at iliac crests (L4) and bottom of IR sits 1 palm below ASIS (at pubic symphysis)',
        angleRotationAdjustment: 'CR shift 4 cm inferior to Iliac Crest (L4)',
      },
      {
        visualError: 'Asymmetric obturator foramina and iliac wings',
        anatomicalCause: 'Pelvis rotated during positioning',
        correctionAction: 'Ensure bilateral ASIS are equidistant from the tabletop',
        angleRotationAdjustment: 'Part rotation -10° to level bilateral ASIS',
      },
    ],
    diagramImage: kubImg,
    diagramConfig: {
      silhouette: 'torso-frontal',
      viewPlane: 'axial',
      crTarget: { x: 0, y: 14 },
      baselineLabel: 'Iliac Crests (L4)',
    },
  },

  // ============================================================================
  // UPPER LIMBS (views_diagrams/upper_limbs + SVG fallback diagrams)
  // ============================================================================
  {
    id: 'hand-pa-oblique',
    name: 'Hand — PA Oblique (45°)',
    aliases: ['Oblique Hand', 'Lateral Oblique Hand'],
    anatomicalRegion: 'Upper Limbs',
    clinicalIndications: [
      'Metacarpal and phalangeal fractures (e.g., Boxer fracture)',
      'Joint space narrowing and osteoarthritis',
      'Radiopaque foreign body localization',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'Prone',
      accessories: ['45° radiolucent step sponge', 'Lead apron over lap'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Rings', 'Wristwatch', 'Bracelets'],
    },
    positioning: {
      patientPosition: 'Seated at end of table, elbow flexed 90°, forearm/hand resting on cassette',
      partRotationAngle: '45° lateral (external) rotation from pronated PA position',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: '3rd metacarpophalangeal (MCP) joint',
      collimation: 'Include fingertips to 2.5 cm proximal to wrist joint; 2.5 cm lateral to skin borders',
      respiration: 'Suspend motion (no breathing instruction required)',
    },
    exposure: {
      baselineKvp: 52,
      baselineMas: 2.5,
      modificationNotes: [
        'Increase +4 kVp or +50% mAs for fiberglass/plaster cast',
        'Trauma / Supine: elevate wrist on radiolucent sponge if patient cannot pronate',
      ],
    },
    cantoneseCues: {
      positioning: '隻手掌心向下放喺塊板上面，跟住手指公嗰邊慢慢向上拗起約四十五度，手指微微分開。',
      breathing: '唔使特別閉氣，保持隻手定住唔好郁。',
    },
    imageCriteria: [
      'Midshafts of 3rd–5th metacarpals separated without excessive overlap',
      '1st and 2nd metacarpals slightly overlapped at base only',
      'Open MCP and interphalangeal (IP) joint spaces (digits parallel to IR on step sponge)',
      'Soft tissue and fine bony trabecular detail clearly demonstrated',
    ],
    troubleshooting: [
      {
        visualError: '4th and 5th metacarpal shafts are superimposed',
        anatomicalCause: 'Insufficient lateral rotation (< 35°) or excessive rotation (> 55°)',
        correctionAction: 'Support fingers on 45° step wedge so palmar plane forms exactly 45° to IR',
        angleRotationAdjustment: 'Part rotation +10° to exact 45° lateral obliquity',
      },
      {
        visualError: 'Foreshortened distal phalanges and closed IP joint spaces',
        anatomicalCause: 'Fingertips resting directly on cassette instead of parallel to IR',
        correctionAction: 'Use a 45° stair-step sponge so each digit remains horizontal and parallel to IR',
        angleRotationAdjustment: 'Part tilt 0° horizontal digit alignment on step sponge',
      },
    ],
    diagramConfig: {
      silhouette: 'limb-joint',
      viewPlane: 'axial',
      crTarget: { x: 0, y: 0 },
      baselineLabel: '3rd MCP (45°)',
    },
  },
  {
    id: 'shoulder-ap-internal-external',
    name: 'Shoulder — AP (External / Neutral)',
    aliases: ['AP Shoulder', 'Glenohumeral AP'],
    anatomicalRegion: 'Upper Limbs',
    clinicalIndications: [
      'Proximal humerus fracture or dislocation',
      'Calcific tendinitis (supraspinatus)',
      'Acromioclavicular & glenohumeral arthritis',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Horizontal',
      grid: true,
      markerType: 'Supine',
      accessories: ['Erect Bucky or supine table Bucky', 'Sandbag for arm immobilization (non-trauma)'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Necklace', 'Bra straps/clips', 'Hospital gown snaps'],
    },
    positioning: {
      patientPosition: 'Erect or supine, posterior shoulder against Bucky, slight 10–15° obliquity if true AP needed',
      partRotationAngle: '0° (Epicondyles parallel to IR for external rotation; neutral if trauma)',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: '2.5 cm inferior to coracoid process',
      collimation: 'Include entire clavicle, acromion, proximal 1/3 humerus, and lateral skin margin',
      respiration: 'Suspend respiration at end of expiration',
    },
    exposure: {
      baselineKvp: 70,
      baselineMas: 10,
      modificationNotes: [
        'Trauma / Supine Mode: DO NOT externally rotate arm! Leave in neutral sling position and use 100 cm supine table Bucky',
        'Add +4 kVp for muscular or obese shoulder girdle',
      ],
    },
    cantoneseCues: {
      positioning: '背脊貼實塊板，手掌向前轉出少少（如有受傷就保持原位唔好郁）。',
      breathing: '呼氣……忍住唔好唞氣！',
    },
    imageCriteria: [
      'Greater tubercle visualized in profile laterally (External Rotation)',
      'Slight overlap of humeral head over glenoid fossa',
      'Proximal 1/3 humerus, lateral clavicle, and superior scapula included',
      'Sharp bony trabeculae around humeral neck and subacromial space',
    ],
    troubleshooting: [
      {
        visualError: 'Greater tubercle is superimposed over humeral head instead of lateral profile',
        anatomicalCause: 'Arm is internally rotated or in neutral position instead of external rotation',
        correctionAction: 'If no fracture/dislocation suspected, supinate hand so humeral epicondyles are parallel to IR',
        angleRotationAdjustment: 'Part rotation +25° external humeral rotation',
      },
      {
        visualError: 'Subacromial space appears narrowed and acromion overlaps humeral head',
        anatomicalCause: 'Kyphotic patient posture or insufficient caudad beam tilt',
        correctionAction: 'Angle CR slightly caudad to open the subacromial joint space',
        angleRotationAdjustment: 'CR angle 10° caudad',
      },
    ],
    diagramConfig: {
      silhouette: 'shoulder-axial',
      viewPlane: 'axial',
      crTarget: { x: -4, y: 2 },
      baselineLabel: 'Glenohumeral',
    },
  },

  {
    id: 'wrist-pa-ulnar-deviation',
    name: 'Wrist PA — Ulnar Deviation & Elongated Scaphoid',
    aliases: ['PA Scaphoid Ulnar Deviation', 'Elongated PA Scaphoid', 'Stecher Method (Modified)'],
    anatomicalRegion: 'Upper Limbs',
    clinicalIndications: [
      'Suspected scaphoid fracture (proximal pole 20%, waist 70%, distal tubercle 10%)',
      'Pain/tenderness in anatomical snuffbox following FOOSH injury',
      'Scapholunate dissociation or radiocarpal joint space evaluation',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '18 x 24 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'L / R anatomical marker (PA prone indicator)',
      accessories: ['Tabletop cassette / flat DR panel', 'Lead lap shield', 'Patient stool adjusted so shoulder, elbow & wrist share one horizontal plane'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Wristwatch', 'Bracelets', 'Rings (if swollen, keep or shield safely)', 'Splints/bandages if non-rigid'],
    },
    positioning: {
      patientPosition:
        'Seated beside end of table with shoulder, elbow (flexed 90°), and pronated wrist on same horizontal plane; hand flat on IR and deviated ulnarly (toward little finger) as far as tolerated without moving forearm',
      partRotationAngle: '0° (True pronated PA wrist with ulnar deviation)',
      crAngle:
        '0° perpendicular (standard PA ulnar deviation), plus 20° cephalad (10° / 20° / 30° cranial series toward elbow) for elongated scaphoid waist projection',
      crEntryPoint: 'Anatomical snuffbox (scaphoid bone, just distal-medial to radial styloid)',
      collimation: 'Include distal 1/3 of radius & ulna to proximal half of metacarpals, plus radial/ulnar skin margins',
      respiration: 'Suspend motion (no breathing hold required)',
    },
    exposure: {
      baselineKvp: 52,
      baselineMas: 3.2,
      modificationNotes:
        'Add +2 to +4 kVp if imaging through dry Plaster of Paris (POP) cast (+4 to +6 kVp if wet POP). If ulnar deviation is too painful, use Stecher method: abduct thumb, place cassette flat or 20° sponge, angle CR 30°–40° cranially to 1st–2nd MC bisector.',
    },
    cantoneseCues: {
      positioning: '請坐埋張枱旁邊，隻手掌心向下平放喺板面，成隻手掌盡量向尾指嗰邊拗過去，前臂唔好郁。',
      breathing: '唔使忍氣，隻手定住唔好郁。',
    },
    imageCriteria: [
      'Scaphoid demonstrated elongated and separated from trapezium, trapezoid, and adjacent carpals without foreshortening',
      'Distal radioulnar and radiocarpal joint spaces open (true PA without rotation)',
      'Scaphoid fat stripe clearly visible laterally (obliteration/displacement suggests occult fracture)',
      'Sharp cortical & fine trabecular bone detail across scaphoid waist and proximal pole',
    ],
    troubleshooting: [
      {
        visualError: 'Scaphoid remains foreshortened or waist obscured by normal palmar tilt',
        anatomicalCause: 'Insufficient ulnar deviation or CR left vertical (0°) when scaphoid lies steeply volar',
        correctionAction: 'Increase ulnar deviation gently and add 20° cephalad CR tilt toward the elbow',
        angleRotationAdjustment: 'CR angle +20° cephalad (toward elbow)',
      },
      {
        visualError: 'Radial and ulnar styloids overlapped or distal forearm rotated',
        anatomicalCause: 'Shoulder elevated above wrist or patient rotated forearm instead of wrist-only ulnar deviation',
        correctionAction: 'Drop shoulder to table level (equalize elbow and wrist height) and keep forearm pronated flat',
        angleRotationAdjustment: 'Part rotation ±10° forearm pronation/supination correction',
      },
    ],
    diagramImage: wristPaUlnarDevImg,
  },
  {
    id: 'wrist-anterior-oblique',
    name: 'Wrist — Anterior Oblique (PA Oblique)',
    aliases: ['PA Oblique Wrist', 'Scaphoid Anterior Oblique', 'Radial-Up Oblique Wrist'],
    anatomicalRegion: 'Upper Limbs',
    clinicalIndications: [
      'Scaphoid series view projecting scaphoid in true PA profile parallel to IR',
      'Assessment of trapezium, trapezoid, scaphoid tubercle, and radial styloid fractures',
      'Carpometacarpal joint of thumb & scaphotrapeziotrapezoidal (STT) articulation',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '18 x 24 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'L / R anatomical marker (PA oblique indicator)',
      accessories: ['45° radiolucent foam wedge pad', 'Lead lap shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Wristwatch', 'Bracelets', 'Metallized wrist braces'],
    },
    positioning: {
      patientPosition:
        'Seated beside table with arm abducted, elbow flexed 90°; from pronated PA wrist, externally/laterally rotate wrist 45° so radial (thumb) side is elevated onto a 45° foam sponge and ulnar border rests on IR',
      partRotationAngle: '45° external/lateral oblique from PA (radial side elevated)',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: 'Midway between radial and ulnar styloid processes (centered over anatomical snuffbox / scaphoid)',
      collimation: 'Distal 1/3 radius & ulna to proximal half of metacarpals, soft-tissue skin margins laterally',
      respiration: 'Suspend motion (no breathing hold required)',
    },
    exposure: {
      baselineKvp: 54,
      baselineMas: 3.2,
      modificationNotes:
        'Slightly higher (+2 kVp) than flat PA wrist to penetrate oblique carpal overlap. Nomenclature note: UK/PolyU Anterior Oblique means palmar/anterior surface faces IR (PA Oblique, radial-side up); some US texts swap anterior/posterior naming.',
    },
    cantoneseCues: {
      positioning: '隻手掌心向下放喺塊海綿上面，拇指嗰邊慢慢向上拗起大約四十五度，保持唔好郁。',
      breathing: '唔使忍氣，保持定住唔好郁。',
    },
    imageCriteria: [
      'Scaphoid projected in true PA plane without superimposition on trapezium/capitate',
      'Trapezium, scaphoid waist, and distal radius radial styloid well profiled',
      'Distal ulna and radius partially overlapping (consistent 45° obliquity)',
      '1st and 2nd carpometacarpal joints clearly demonstrated',
    ],
    troubleshooting: [
      {
        visualError: 'Carpals remain flat as on PA wrist; trapezium overlaps scaphoid tubercle',
        anatomicalCause: 'Under-rotation (<35° lateral elevation of radial side)',
        correctionAction: 'Elevate radial aspect onto a 45° radiolucent sponge so carpal plane sits at 45° to IR',
        angleRotationAdjustment: 'Part rotation +15° external/radial elevation toward 45°',
      },
      {
        visualError: 'Radius and ulna nearly superimposed (looks almost lateral)',
        anatomicalCause: 'Over-rotation (>60° lateral elevation)',
        correctionAction: 'Lower thumb side down slightly to rest smoothly on 45° sponge',
        angleRotationAdjustment: 'Part rotation -15° pronation toward 45°',
      },
    ],
    diagramImage: wristAnteriorOblImg,
  },
  {
    id: 'wrist-posterior-oblique',
    name: 'Wrist — Posterior Oblique (AP Oblique)',
    aliases: ['AP Oblique Wrist', 'Scaphoid Posterior Oblique', 'Pisiform Oblique Wrist'],
    anatomicalRegion: 'Upper Limbs',
    clinicalIndications: [
      'Lateral/profile projection of scaphoid bone in 4-view scaphoid trauma series',
      'Separation of pisiform and triquetrum from adjacent medial carpals (pisiform fracture / pisotriquetral OA)',
      'Hook of hamate & volar/dorsal carpal cortical margins',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '18 x 24 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'L / R anatomical marker (AP oblique indicator)',
      accessories: ['45° radiolucent foam wedge pad', 'Lead lap shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Wristwatch', 'Bracelets', 'Metallized wrist supports'],
    },
    positioning: {
      patientPosition:
        'Seated beside table with elbow flexed 90°; from supinated AP wrist (dorsum facing IR), internally/medially rotate wrist 45° so radial/thumb side drops toward IR and ulnar/pisiform border is elevated 45° on foam pad',
      partRotationAngle: '45° internal/medial oblique from AP (ulnar side elevated)',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: 'Midway between radial and ulnar styloid processes (mid-carpal region)',
      collimation: 'Distal 1/3 radius & ulna to proximal half of metacarpals, lateral skin margins',
      respiration: 'Suspend motion (no breathing hold required)',
    },
    exposure: {
      baselineKvp: 54,
      baselineMas: 3.2,
      modificationNotes:
        'UK/PolyU Posterior Oblique rotates from AP supinated 45° medially (putting posterior/dorsal surface toward IR and lifting the ulnar border), projecting scaphoid laterally and separating the pisiform cleanly on the medial border.',
    },
    cantoneseCues: {
      positioning: '請將手掌心向上平放，跟住將尾指嗰邊慢慢向上拗起大約四十五度，拇指向枱面方向轉少少，保持唔好郁。',
      breathing: '唔使忍氣，隻手定住唔好郁。',
    },
    imageCriteria: [
      'Pisiform separated and projected cleanly free of triquetrum/hamate superimposition on medial border',
      'Scaphoid demonstrated in lateral/end-on profile complimentary to Anterior Oblique view',
      'Triquetrum, lunate, and ulnar styloid process clearly delineated',
      'Sharp trabecular detail across medial carpal compartment',
    ],
    troubleshooting: [
      {
        visualError: 'Pisiform superimposed over triquetrum and hamate',
        anatomicalCause: 'Insufficient medial rotation from AP (<35°) or patient performed PA oblique instead of AP oblique',
        correctionAction: 'Start with palm up (supinated AP) and elevate ulnar border onto a 45° foam sponge',
        angleRotationAdjustment: 'Part rotation +15° internal/medial rotation toward 45°',
      },
      {
        visualError: 'Radius and ulna completely superimposed without carpal separation',
        anatomicalCause: 'Over-rotation (>60°) approaching true lateral wrist',
        correctionAction: 'Rotate wrist back toward supinated AP onto the 45° support wedge',
        angleRotationAdjustment: 'Part rotation -15° external rotation toward 45°',
      },
    ],
    diagramImage: wristPosteriorOblImg,
  },
  {
    id: 'carpal-tunnel-inferosuperior',
    name: 'Carpal Tunnel — Inferosuperior (Gaynor-Hart)',
    aliases: ['Gaynor-Hart Method', 'Inferosuperior Carpal Canal', 'Tangential Carpal Tunnel'],
    anatomicalRegion: 'Upper Limbs',
    clinicalIndications: [
      'Carpal tunnel syndrome (osseous canal narrowing, volar osteophytes compressing median nerve)',
      'Fractures of hook of hamate, pisiform, or palmar tubercle of trapezium',
      'Calcifications or soft-tissue masses within flexor carpal canal',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '18 x 24 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'L / R anatomical marker',
      accessories: ['Bandage/cloth traction strap (or patient opposite hand to pull fingers back)', 'Lead lap shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Wristwatch', 'Bracelets', 'Rings', 'Sleeve cuffs'],
    },
    positioning: {
      patientPosition:
        'Seated facing end of table; pronated forearm resting flat on IR, wrist maximally dorsiflexed (~90° hyperextension) by grasping fingers with opposite hand or pulling cloth strap so metacarpals are vertical and palmar carpal arch is perpendicular to IR (rotate hand ~10° radially if needed)',
      partRotationAngle: '0° forearm pronated with ~90° wrist dorsiflexion',
      crAngle: '25°–30° cephalad (directed tangentially along long axis of palm/metacarpals toward forearm)',
      crEntryPoint: 'Mid-carpal palmar region (~2.5 cm distal to base of 3rd metacarpal)',
      collimation: 'Close collimation to palmar carpal arch and soft-tissue skin borders',
      respiration: 'Suspend motion (no breathing hold required)',
    },
    exposure: {
      baselineKvp: 60,
      baselineMas: 5,
      modificationNotes:
        'Higher kVp (58–62 kVp) than routine wrist to penetrate dense longitudinal path across carpal tunnel while preserving soft-tissue contrast inside the canal. Keep fingers pulled clear of central ray path.',
    },
    cantoneseCues: {
      positioning: '請將前臂平放喺枱面，另一隻手幫手將手指公同四隻手指盡量向後拉扯住，令隻手腕屈起約九十度，成隻手定住唔好郁。',
      breathing: '唔使忍氣，保持拉實唔好郁。',
    },
    imageCriteria: [
      'Carpal tunnel demonstrated in unobstructed axial/tangential arch free of metacarpal/forearm overlap',
      'Pisiform and hook of hamate projected medially without superimposition',
      'Trapezium tubercle and scaphoid projected clearly on lateral arch border',
      'Capitate, lunate, and flexor surface soft tissue within arch sharply delineated',
    ],
    troubleshooting: [
      {
        visualError: 'Metacarpal shafts superimpose over the volar carpal canal',
        anatomicalCause: 'Insufficient wrist dorsiflexion (<75°) or CR angulation too steep (>35°)',
        correctionAction: 'Increase passive finger traction toward 90° dorsiflexion and verify 25°–30° cephalad beam tangent',
        angleRotationAdjustment: 'Part rotation +15° wrist dorsiflexion (or CR -5° toward 25°)',
      },
      {
        visualError: 'Hamate hook and pisiform overlap on ulnar wall of tunnel',
        anatomicalCause: 'Medial/ulnar rotation of hand during traction',
        correctionAction: 'Rotate extended hand slightly (~10°) radially/internally so ulnar border opens cleanly',
        angleRotationAdjustment: 'Part rotation -10° radial rotation',
      },
    ],
    diagramImage: carpalTunnelInferoImg,
  },
  {
    id: 'carpal-tunnel-superoinferior',
    name: 'Carpal Tunnel — Superoinferior (Vertical Beam)',
    aliases: ['Superoinferior Carpal Canal', 'Leaning Carpal Tunnel View', 'Tangential Carpal Tunnel (Vertical CR)'],
    anatomicalRegion: 'Upper Limbs',
    clinicalIndications: [
      'Alternative tangential carpal canal projection when patient cannot tolerate Gaynor-Hart opposite-hand finger traction',
      'Evaluation of hook of hamate, pisiform, trapezium, and flexor retinaculum osteophytes',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '18 x 24 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'L / R anatomical marker',
      accessories: ['Cassette positioned at table edge', 'Lead lap shield / apron'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Wristwatch', 'Bracelets', 'Rings', 'Watches'],
    },
    positioning: {
      patientPosition:
        'Standing or seated beside table with palm/distal metacarpals pressed flat on IR at table edge; wrist dorsiflexed while patient leans trunk and forearm forward (~25°–30° anterior to vertical) so humerus & shoulder clear the vertical beam',
      partRotationAngle: '25°–30° anterior forearm lean from vertical (wrist dorsiflexed)',
      crAngle: '0° (Vertical beam, perpendicular to IR / tangential to volar carpal arch)',
      crEntryPoint: 'Mid-carpal region (tangential to flexor crease between pisiform and trapezium)',
      collimation: 'Collimate closely to carpal arch region',
      respiration: 'Suspend motion (keep body still while leaning)',
    },
    exposure: {
      baselineKvp: 60,
      baselineMas: 5,
      modificationNotes:
        'Note higher lens/thyroid proximity when patient leans head forward over vertical beam — ensure patient keeps head back/turned away and wears protective apron.',
    },
    cantoneseCues: {
      positioning: '請企喺枱邊，手掌平按喺塊板邊緣，成個人連前臂慢慢向前傾少少，個頭抬高避開條光線，定住唔好郁。',
      breathing: '唔使忍氣，保持企穩唔好郁。',
    },
    imageCriteria: [
      'Complete palmar carpal arch (pisiform, hook of hamate, capitate, trapezium, scaphoid) visible in tunnel view',
      'Forearm and distal metacarpals cleared from carpal canal lumen',
      'Sharp bony trabecular and soft-tissue arch margins without motion',
    ],
    troubleshooting: [
      {
        visualError: 'Radius/ulna forearm shafts obscure posterior wall of carpal tunnel',
        anatomicalCause: 'Insufficient anterior forearm lean (<20° beyond vertical)',
        correctionAction: 'Have patient lean trunk/forearm slightly farther forward (25°–30°) without lifting palm off IR',
        angleRotationAdjustment: 'Part rotation +10° anterior forearm lean',
      },
      {
        visualError: 'Motion blur or patient discomfort on dorsiflexed wrist',
        anatomicalCause: 'Weight-bearing load too heavy on painful dorsiflexed wrist',
        correctionAction: 'Support body weight with opposite hand on table or switch to seated Inferosuperior (Gaynor-Hart) view',
        angleRotationAdjustment: 'Switch to Inferosuperior +25°–30° cephalad',
      },
    ],
    diagramImage: carpalTunnelSuperoImg,
  },
  {
    id: 'shoulder-axial-superoinferior',
    name: 'Shoulder — Axial (Supero-inferior)',
    aliases: ['Supero-inferior Axial Shoulder', 'Axillary Shoulder View', 'Axial Glenohumeral Joint'],
    anatomicalRegion: 'Upper Limbs',
    clinicalIndications: [
      'Confirming anterior vs posterior glenohumeral dislocation (when patient can abduct arm)',
      'Hill-Sachs compression defect, reverse Hill-Sachs (trough sign), or Bankart glenoid rim fracture',
      'Subscapularis / lesser tubercle avulsion and AC joint alignment',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Horizontal',
      grid: false,
      markerType: 'L / R anatomical marker',
      accessories: ['Curved or flat tabletop cassette placed beneath axilla/proximal humerus', 'Table stool', 'Lead apron / thyroid protection'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Necklaces', 'Shirt snaps/zippers', 'Bra straps'],
    },
    positioning: {
      patientPosition:
        'Seated beside radiographic table with affected arm abducted as near 90° as possible, elbow flexed 90°, hand pronated resting on IR positioned tucked under axilla between elbow and trunk; tilt patient head slightly toward unaffected side',
      partRotationAngle: '90° shoulder abduction (hand pronated)',
      crAngle:
        '5°–15° laterally (angled slightly away from trunk/long axis of body toward shoulder joint/elbow onto tabletop IR)',
      crEntryPoint: 'Superior aspect of glenohumeral joint, emerging through axilla onto IR',
      collimation: 'Medially to coracoid process, laterally to proximal 1/3 humerus, anterior & posterior skin margins',
      respiration: 'Suspend respiration during exposure',
    },
    exposure: {
      baselineKvp: 70,
      baselineMas: 5,
      modificationNotes:
        'Contraindicated if severe trauma/pain prevents abduction (never force abduction!). Alternative when supine/unable to abduct: Infero-superior Axial (Lawrence method) with CR 25°–30° medially into axilla toward IR above shoulder, or Modified Velpeau/Outlet view.',
    },
    cantoneseCues: {
      positioning: '請坐喺枱旁邊，將隻痛嘅手慢慢舉起橫放喺塊板上面，手肘曲九十度、掌心向下；個頭擰去好嗰邊少少。',
      breathing: '麻煩你唔好唞氣，定一定。',
    },
    imageCriteria: [
      'Glenohumeral joint space open, clearly showing anterior vs posterior humeral head relationship to glenoid',
      'Lesser tubercle projected in profile directed anteriorly; coracoid process visible anteriorly',
      'Acromioclavicular joint projected cleanly superimposed over humeral head',
      'Proximal 1/3 humerus and glenoid rim included without excessive trunk superimposition',
    ],
    troubleshooting: [
      {
        visualError: 'Glenoid rim cut off medially or obscured by thoracic ribcage',
        anatomicalCause: 'Cassette not tucked sufficiently deep into axilla or beam directed medially into chest wall',
        correctionAction: 'Tuck IR farther under axilla, tilt patient laterally slightly, and angle CR 5°–15° laterally',
        angleRotationAdjustment: 'CR angle +10° laterally toward elbow',
      },
      {
        visualError: 'Patient head or chin clips superior radiation field',
        anatomicalCause: 'Patient looking straight ahead or leaning toward tube',
        correctionAction: 'Tilt patient head gently toward unaffected side clear of collimator',
        angleRotationAdjustment: 'Part rotation -15° head tilt toward unaffected side',
      },
    ],
    diagramImage: shoulderAxialImg,
  },
  {
    id: 'shoulder-outlet-supraspinatus',
    name: 'Shoulder — Supraspinatus Outlet View (Neer)',
    aliases: ['Outlet View Shoulder', 'Supraspinatus Outlet', 'Neer Outlet View', 'Scapular Y Outlet'],
    anatomicalRegion: 'Upper Limbs',
    clinicalIndications: [
      'Subacromial impingement syndrome & narrowed acromiohumeral interval',
      'Acromial morphology (Type I–III hooked acromion) & anterior acromial osteophytes/spurs',
      'Anterior/posterior glenohumeral dislocation (coracoacromial arch check) & rotator cuff tendinopathy',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'L / R anatomical marker (RAO / LAO notation)',
      accessories: ['Erect Bucky stand', 'Lead gonad shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Necklaces', 'Bra hooks/straps', 'Shirt buttons/zippers'],
    },
    positioning: {
      patientPosition:
        'Erect facing vertical Bucky in anterior oblique (RAO/LAO) with affected shoulder in contact with Bucky; body rotated 45°–60° until scapular plane is perpendicular to IR and scapula clears ribcage; affected arm relaxed at side',
      partRotationAngle: '45°–60° anterior oblique (scapular body perpendicular to IR)',
      crAngle: '15° caudad',
      crEntryPoint: 'Posterior aspect of shoulder, 2.5 cm (1 inch) inferior to acromial end of clavicle / acromion',
      collimation: 'Include coracoid, acromioclavicular arch, humeral head, and inferior angle of scapula',
      respiration: 'Suspend respiration',
    },
    exposure: {
      baselineKvp: 70,
      baselineMas: 16,
      modificationNotes:
        'Slightly reduced exposure compared to standard Y-view (75 kVp / 25 mAs) prevents overexposure of the thin acromion and preserves subtle subacromial spurs/soft-tissue calcifications. Conflict note: PolyU uses 15° caudad (vs 10°–15° in some US texts; 0° is reserved for standard Trauma Y-view).',
    },
    cantoneseCues: {
      positioning: '請面對住塊板企，將痛嗰邊膊頭貼住塊板，身體再斜轉大約四十五至六十度，隻手自然垂低放鬆唔好郁。',
      breathing: '請忍住啖氣，唔好郁。',
    },
    imageCriteria: [
      'Scapular body seen end-on forming true "Y" (acromion posterolaterally, coracoid anteromedially, scapular blade inferiorly)',
      'Acromiohumeral outlet space opened wider than straight 0° Y-view without acromial-humeral overlap',
      'Anterior inferior acromial spurring (osteoarthritis) and distal clavicle profile demonstrated clearly',
      'Scapular borders superimposed and clear of thoracic ribcage',
    ],
    troubleshooting: [
      {
        visualError: 'Acromiohumeral arch compressed or obscured by distal clavicle/acromion overlap',
        anatomicalCause: 'Horizontal 0° CR used instead of 15° caudad tilt',
        correctionAction: 'Ensure 15° caudad CR tilt directed to 2.5 cm inferior to lateral acromial border',
        angleRotationAdjustment: 'CR angle -15° caudad',
      },
      {
        visualError: 'Lateral scapular border superimposed over ribs (over-rotated) or medial border hugging ribs (under-rotated)',
        anatomicalCause: 'Body oblique angle deviates from true scapular plane (~45°–60°)',
        correctionAction: 'Palpate acromion and medial scapular border to align plane perpendicular to IR',
        angleRotationAdjustment: 'Part rotation ±10° trunk obliquity',
      },
    ],
    diagramImage: shoulderOutletImg,
  },

  // ============================================================================
  // LOWER LIMBS (views_diagrams/lower_limbs)
  // ============================================================================
  {
    id: 'knee-ap',
    name: 'Knee — AP',
    aliases: ['AP Knee', 'Tibiofemoral AP'],
    anatomicalRegion: 'Lower Limbs',
    clinicalIndications: [
      'Distal femur / proximal tibia fracture',
      'Osteoarthritis and medial/lateral joint space narrowing',
      'Effusion or loose bodies',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '18 x 24 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'Supine',
      accessories: ['Soft support pad', 'Gonad shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Trouser zippers/buttons', 'Knee brace metal stays'],
    },
    positioning: {
      patientPosition: 'Supine (or standing if weight-bearing), leg fully extended',
      partRotationAngle: '5° internal rotation of leg (patella horizontal; femoral epicondyles parallel to IR)',
      crAngle: '0°–5° cephalad (tilt up 5° to open knee joint space in thicker thighs)',
      crEntryPoint: '1–1.5 cm distal (inferior) to apex of patella',
      collimation: 'Include distal 1/3 femur and proximal 1/3 tibia/fibula; 1 cm beyond lateral skin margins',
      respiration: 'Suspend motion',
    },
    exposure: {
      baselineKvp: 60,
      baselineMas: 5,
      modificationNotes: [
        'Apply 5° cephalad tube tilt for muscular/thick thighs to parallel tibial plateau slope',
        'Trauma / Supine Mode: keep patient supine, do not force internal rotation if fracture suspected',
      ],
    },
    cantoneseCues: {
      positioning: '伸直隻腳放喺床上面，腳尖微微向入面轉少少令菠蘿蓋向正上面，唔好郁。',
      breathing: '保持隻腳定住唔好郁。',
    },
    imageCriteria: [
      'Open femorotibial joint spaces bilaterally (parallel to CR)',
      'Patella centralized over distal femur; intercondylar eminence centered in fossa',
      'Slight overlap of fibular head with lateral tibial condyle (~0.5 cm)',
      'No rotation: medial and lateral femoral and tibial condyles symmetric',
    ],
    troubleshooting: [
      {
        visualError: 'Femorotibial joint space appears closed / overlapped',
        anatomicalCause: 'CR angulation not matched to posterior slope of tibial plateau',
        correctionAction: 'Angle CR 5° cephalad to open the femorotibial joint space',
        angleRotationAdjustment: 'CR angle +5° cephalad',
      },
      {
        visualError: 'Fibular head completely clear of tibia; patella shifted laterally',
        anatomicalCause: 'Leg externally rotated (toes pointing outward)',
        correctionAction: 'Internally rotate lower extremity ~5° until patella is level and epicondyles are parallel to IR',
        angleRotationAdjustment: 'Part rotation -10° internal leg rotation',
      },
    ],
    diagramImage: kneeApImg,
    diagramConfig: {
      silhouette: 'limb-joint',
      viewPlane: 'sagittal',
      crTarget: { x: -4, y: 8 },
      baselineLabel: 'Tibial Plateau',
    },
  },
  {
    id: 'knee-lateral',
    name: 'Knee — Lateral',
    aliases: ['Lateral Knee', 'Medio-Lateral Knee'],
    anatomicalRegion: 'Lower Limbs',
    clinicalIndications: [
      'Patellar fracture, subluxation, or joint effusion (lipohaemarthrosis fat-fluid level)',
      'Distal femur / tibial plateau fracture displacement',
      'Osgood-Schlatter disease or fabella/loose body assessment',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '18 x 24 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'Supine',
      accessories: [
        'Soft pad under unaffected leg (crossed forward)',
        'Soft pad under affected ankle to level lower leg',
        'Gonad shield',
      ],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Trousers, knee supports & bandages with metal clips'],
    },
    positioning: {
      patientPosition: 'Lateral recumbent on affected side (medio-lateral preferred), knee flexed 30°, unaffected leg brought forward over affected knee on pad; ankle supported on pad so lower leg is parallel to table',
      partRotationAngle: '90° True Lateral (femoral epicondyles perpendicular to IR; patella perpendicular to IR)',
      crAngle: '5° cephalad (cranial beam to superimpose medial and lateral femoral condyles)',
      crEntryPoint: '1–1.5 cm distal to apex of patella (medial aspect)',
      collimation: 'Include distal 1/3 femur, patella, and proximal 1/3 tibia/fibula; 1 cm beyond skin margins',
      respiration: 'Suspend motion',
    },
    exposure: {
      baselineKvp: 60,
      baselineMas: 5,
      modificationNotes: [
        '5° cephalad tilt projects the more inferior medial femoral condyle directly onto the lateral condyle',
        'Trauma / Supine Mode: perform Horizontal Beam Lateral (cross-table lateral) to avoid flexing a fractured patella and to demonstrate fat-fluid levels in suprapatellar bursa',
      ],
    },
    cantoneseCues: {
      positioning: '請打側向有事嗰邊瞓，有事隻腳微微屈起約三十度，無事嗰隻腳跨過前面墊住，腳眼下面墊塊軟墊保持小腿平放。',
      breathing: '保持隻腳定住唔好郁。',
    },
    imageCriteria: [
      'Medial and lateral femoral condyles directly superimposed (anterior, posterior, and inferior borders aligned)',
      'Open patellofemoral joint space with patella in lateral profile',
      'Open femorotibial joint space',
      'Fibular head slightly overlapped by tibia (distinguishes over- vs under-rotation)',
    ],
    troubleshooting: [
      {
        visualError: 'Inferior border of medial femoral condyle projects below lateral condyle (double contour)',
        anatomicalCause: 'CR was directed perpendicular (0°) instead of 5° cephalad, or lower leg sagged at ankle',
        correctionAction: 'Angle CR 5° cephalad and place soft pad under ankle so tibia/femur remain parallel to IR',
        angleRotationAdjustment: 'CR angle +5° cephalad',
      },
      {
        visualError: 'Patellofemoral joint space closed and anterior/posterior condylar margins offset',
        anatomicalCause: 'Over-rotation (fibular head completely obscured) or under-rotation (fibular head too prominent)',
        correctionAction: 'Adjust hip/pelvis rotation until patella is perpendicular to IR and epicondyles are vertically aligned',
        angleRotationAdjustment: 'Part rotation ±8° to true lateral',
      },
    ],
    diagramImage: kneeLatImg,
    diagramConfig: {
      silhouette: 'limb-joint',
      viewPlane: 'sagittal',
      crTarget: { x: -4, y: 8 },
      baselineLabel: '5° Cephalad',
    },
  },

  {
    id: 'knee-skyline-laurin',
    name: 'Patella / Knee Skyline (Laurin Seated 20°)',
    aliases: ['Laurin Skyline View', 'Sunrise View (Seated)', 'Axial Patellofemoral 20°'],
    anatomicalRegion: 'Lower Limbs',
    clinicalIndications: [
      'Patellar subluxation, lateral patellar tilt, or patellofemoral tracking disorder',
      'Longitudinal / vertical patellar fractures (not clearly seen on AP/Lateral)',
      'Patellofemoral osteoarthritis and trochlear groove osteochondral lesions',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Horizontal',
      grid: false,
      markerType: 'L / R anatomical marker',
      accessories: ['20° radiolucent knee support cushion', 'Lead apron/shield placed BEHIND held cassette (protects torso/gonads from cranial beam)'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Knee braces', 'Trouser zippers/metal snaps', 'Rolled thick denim over knee'],
    },
    positioning: {
      patientPosition:
        'Seated comfortably on radiographic table with knees flexed strictly 20° over foam support (flexing >45° pulls patella deep into trochlea via quadriceps tension and hides subluxation); patient holds IR resting flat against distal femur/proximal shin perpendicular to CR, with lead shield positioned behind IR',
      partRotationAngle: '20° knee flexion (quadriceps relaxed)',
      crAngle: '15°–20° cephalad (tangential inferosuperior beam aligned parallel to vertical axis of patella)',
      crEntryPoint: 'Apex (inferior pole) of patella, grazing patellofemoral joint space',
      collimation: 'Collimate tightly to patella, patellofemoral joint space, and anterior femoral condyles',
      respiration: 'Suspend motion (no breathing hold required)',
    },
    exposure: {
      baselineKvp: 60,
      baselineMas: 5,
      modificationNotes:
        'SAFETY: Always check LMP and place a lead apron/shield behind the patient-held cassette because the 15°–20° cranial beam aims toward the abdomen/gonads. Contrast with prone Hughston (45° flexion — masks mild subluxation) and supine Merchant view (caudal beam).',
    },
    cantoneseCues: {
      positioning: '請坐喺張床上面，隻腳屈起少少大約二十度放喺海綿墊上，大腿肌肉放鬆，雙手拎住塊鉛片同接收板貼緊大腿前方唔好郁。',
      breathing: '唔使忍氣，隻腳放鬆定住唔好郁。',
    },
    imageCriteria: [
      'Patellofemoral joint space completely open without femoral trochlear overlap',
      'Lateral femoral condyle appears slightly higher than medial femoral condyle (normal skyline contour)',
      'Lateral patellofemoral angle opens laterally (medial opening suggests subluxation)',
      'Clear trabecular detail of patellar facets and femoral trochlear groove',
    ],
    troubleshooting: [
      {
        visualError: 'Patella superimposed onto anterior femoral condyles (joint space closed)',
        anatomicalCause: 'CR not parallel to articular plane of patella or knee flexed excessively (>40°)',
        correctionAction: 'Keep knee flexed ~20° and adjust CR cephalad angle (15°–20°) along patellar vertical axis',
        angleRotationAdjustment: 'CR angle +5° cephalad toward patellar plane',
      },
      {
        visualError: 'Patella foreshortened / elongated asymmetrically',
        anatomicalCause: 'Cassette not held perpendicular to the central ray',
        correctionAction: 'Tilt top edge of held cassette slightly forward/back until IR plane sits 90° to CR',
        angleRotationAdjustment: 'Part rotation -10° cassette perpendicularity check',
      },
    ],
    diagramImage: kneeSkylineImg,
  },
  {
    id: 'knee-merchants',
    name: "Knee Patellofemoral — Merchant's View",
    aliases: ["Merchant's Axial Knee", 'Bilateral Tangential Patella', 'Merchant Patellofemoral'],
    anatomicalRegion: 'Lower Limbs',
    clinicalIndications: [
      'Bilateral comparison of patellofemoral joint space, congruence angle, and patellar subluxation',
      'Osteochondritis dissecans or articular facet chondromalacia of patella',
      'Longitudinal patellar fractures when seated Laurin or prone Hughston views cannot be tolerated',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Horizontal',
      grid: false,
      markerType: 'L / R bilateral anatomical markers',
      accessories: ['Merchant axial leg support device / adjustable footrest', 'Velcro leg strap across calves to relax quadriceps', 'Gonad shield over pelvis'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Knee sleeves', 'Trouser zippers/metal buttons', 'Socks/shoe hardware if in beam path'],
    },
    positioning: {
      patientPosition:
        'Supine near foot end of radiographic table with both knees flexed 45° over the Merchant knee support device; strap lower legs gently together to relax quadriceps (feet slightly everted); place IR on distal anterior shins ~30 cm below patellae tilted perpendicular to CR',
      partRotationAngle: '45° knee flexion (supine on Merchant frame)',
      crAngle: '60° caudad from vertical (30° from horizontal / femur long axis)',
      crEntryPoint: 'Midpoint between both patellae (just proximal to superior poles of patellae, perpendicular to IR)',
      collimation: 'Collimate horizontally to include both patellae & femoral condyles bilaterally',
      respiration: 'Suspend motion (no breathing hold required)',
    },
    exposure: {
      baselineKvp: 62,
      baselineMas: 6.3,
      modificationNotes:
        'Uses caudal beam angled away from trunk (lower pelvic scatter than inferosuperior skyline); increase slightly (+2–4 kVp / mAs) if SID is extended to 120–150 cm to accommodate tube-head reach.',
    },
    cantoneseCues: {
      positioning: '請平瞓近床尾位置，兩隻膝頭曲起四十五度放喺個架上面，大腿完全放鬆唔好用力，塊板放喺小腿前面定住唔好郁。',
      breathing: '唔使忍氣，雙腳放鬆唔好郁。',
    },
    imageCriteria: [
      'Both patellae and femoral intercondylar sulci projected symmetrically side by side',
      'Patellofemoral joint spaces open cleanly without proximal femoral or tibial superimposition',
      'Symmetric visualization of medial & lateral facets for congruence angle measurement',
      'Soft-tissue retinacula and patellar cortical borders sharp',
    ],
    troubleshooting: [
      {
        visualError: 'Proximal tibia/fibula projects over inferior patella and obscures patellofemoral space',
        anatomicalCause: 'Insufficient caudal angulation (<55° from vertical) or knee flexed <40°',
        correctionAction: 'Confirm 45° knee flexion on Merchant frame and verify 60° caudad CR (30° from horizontal femur)',
        angleRotationAdjustment: 'CR angle -10° caudad (toward 60° caudad from vertical)',
      },
      {
        visualError: 'Asymmetric femoral condyles / unequal patellar tilt side-to-side',
        anatomicalCause: 'Quadriceps actively tensed or legs externally rotated unevenly',
        correctionAction: 'Secure legs neutrally with soft strap and remind patient to relax quadriceps completely',
        angleRotationAdjustment: 'Part rotation ±10° neutral femoral rotation',
      },
    ],
    diagramImage: kneeMerchantsImg,
  },
  {
    id: 'knee-intercondylar-holmblad',
    name: "Knee Intercondylar Fossa — Holmblad's Tunnel View",
    aliases: ["Holmblad's Projection", 'Intercondylar Tunnel View', 'Kneeling Tunnel Knee'],
    anatomicalRegion: 'Lower Limbs',
    clinicalIndications: [
      'Loose bodies ("joint mice") within middle-to-posterior intercondylar fossa',
      'Osteochondritis dissecans (OCD) of femoral condyles & chondrocalcinosis',
      'Tibial spine / intercondylar eminence fractures and joint space narrowing',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '18 x 24 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'L / R anatomical marker',
      accessories: ['Tabletop cassette / flat DR panel directly under flexed knee', 'Cushioned pad under opposite knee', 'Gonad shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Knee braces/straps', 'Trouser zippers/buttons'],
    },
    positioning: {
      patientPosition:
        'Kneeling (all-fours) on radiographic couch with anterior surface of affected distal femur/patella/proximal tibia resting on IR; lean trunk 20° forward so thigh forms ~70° from horizontal IR (knee flexed ~70°, lower leg ~110° to thigh)',
      partRotationAngle: '20° forward femoral lean (~70° knee flexion; tibia flat on IR)',
      crAngle: '0° (Vertical beam, perpendicular to IR and lower leg)',
      crEntryPoint: 'Midpoint of posterior popliteal crease/fossa, emerging 1 cm inferior to apex of patella',
      collimation: 'Collimate tightly to distal femoral condyles, intercondylar fossa, and proximal tibia',
      respiration: 'Suspend motion (support weight safely with hands on couch)',
    },
    exposure: {
      baselineKvp: 62,
      baselineMas: 6.3,
      modificationNotes:
        'Holmblad produces NO geometric distortion of the middle/posterior intercondylar fossa (unlike prone Camp-Coventry 40° caudad, which shows anterior/middle fossa with elongation). Contraindicated if patient cannot kneel (acute fracture/patellar injury) — use Camp-Coventry or Béclère AP axial instead.',
    },
    cantoneseCues: {
      positioning: '請跪喺張床上面，痛嗰隻膝頭放喺塊板正中，雙手撐住床面慢慢將個身向前傾少少大約二十度，保持定住唔好郁。',
      breathing: '唔使忍氣，撐穩身體唔好郁。',
    },
    imageCriteria: [
      'Intercondylar fossa ("tunnel") widely open and oval-shaped without patellar superimposition',
      'Tibial intercondylar eminences (medial & lateral tubercles) clearly visualized without foreshortening',
      'Femorotibial joint space open symmetrically with crisp condylar subchondral bone',
      'No anatomical distortion across posterior intercondylar notch',
    ],
    troubleshooting: [
      {
        visualError: 'Patella or tibial plateau closes/obscures the lower intercondylar fossa',
        anatomicalCause: 'Thigh completely vertical (0° forward lean) or excessive forward lean (>35°)',
        correctionAction: 'Adjust forward trunk lean so femur sits ~20° forward of vertical (70° from horizontal table)',
        angleRotationAdjustment: 'Part rotation +10° forward femoral lean toward 20°',
      },
      {
        visualError: 'Condyles asymmetric laterally',
        anatomicalCause: 'Patient shifted body weight sideways twisting hip/lower leg',
        correctionAction: 'Keep lower leg perpendicular to IR posterior edge without internal/external twist',
        angleRotationAdjustment: 'Part rotation ±8° tibial neutral alignment',
      },
    ],
    diagramImage: kneeHolmbladImg,
  },
  {
    id: 'subtalar-brodens',
    name: "Subtalar Joint — Brodén's Views",
    aliases: ["Brodén's Projection", 'Posterior Subtalar Oblique', 'Talocalcaneal Joint Series'],
    anatomicalRegion: 'Lower Limbs',
    clinicalIndications: [
      'Intra-articular calcaneal fractures involving the posterior subtalar (talocalcaneal) facet',
      'Suspected subtalar dislocation, coalition, or post-traumatic osteoarthritis',
      'Serial evaluation from posterior to anterior segments of the posterior subtalar articulation',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'L / R anatomical marker',
      accessories: ['45° radiolucent leg/foot wedge pad', 'Cloth band/towel to assist 90° ankle dorsiflexion', 'Gonad shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Shoes & socks', 'Ankle braces', 'Metallic splints/pins'],
    },
    positioning: {
      patientPosition:
        'Supine with affected leg fully extended; foot dorsiflexed 90° (vertical plantar aspect) and entire leg + foot internally (medially) rotated 45° supported by foam sponge',
      partRotationAngle: '45° internal/medial leg rotation',
      crAngle:
        '10°, 20°, 30°, and 40° cephalad series (10° = posterior aspect, 20° = middle aspect, 30°–40° = anterior aspect of posterior subtalar facet)',
      crEntryPoint: '2.5 cm (1 inch) distal and 2.5 cm (1 inch) anterior to the LATERAL malleolus',
      collimation: 'Collimate closely to ankle mortise, talus, calcaneus, and subtalar joint',
      respiration: 'Suspend motion (no breathing hold required)',
    },
    exposure: {
      baselineKvp: 60,
      baselineMas: 5,
      modificationNotes:
        'CONFLICT RESOLVED: MIS II Revision table erroneously printed "2.5 cm anterior and 2.5 cm posterior to medial malleolus". Per anatomy, 2. Lower Extremities lecture (p. 4), and General X-ray notes (p. 55), centering is strictly 2.5 cm distal + 2.5 cm anterior to the LATERAL malleolus.',
    },
    cantoneseCues: {
      positioning: '請平瞓伸直隻腳，腳板盡量向上屈起九十度，成隻腳連腳趾向內側轉大約四十五度靠穩海綿墊，唔好郁。',
      breathing: '唔使忍氣，隻腳定住唔好郁。',
    },
    imageCriteria: [
      'Posterior talocalcaneal (subtalar) joint space demonstrated open across each sequential cephalad angle (10° posterior -> 40° anterior)',
      'Lateral malleolus and sinus tarsi projected free of excessive tibial superimposition',
      'Sharp trabecular detail of sustentaculum tali, posterior facet, and talar dome',
    ],
    troubleshooting: [
      {
        visualError: 'Subtalar joint space overlapped by calcaneal tuberosity or medial/lateral malleolus',
        anatomicalCause: 'Insufficient internal leg rotation (<35°) or foot plantarflexed',
        correctionAction: 'Ensure full 45° internal leg rotation (not ankle twist alone) and maintain 90° dorsiflexion',
        angleRotationAdjustment: 'Part rotation +15° internal rotation toward 45°',
      },
      {
        visualError: 'Desired posterior vs anterior subtalar facet segment not profiled',
        anatomicalCause: 'Incorrect cephalad tube tilt for target segment (or wrong malleolus landmark used)',
        correctionAction: 'Re-center 2.5 cm distal + 2.5 cm anterior to LATERAL malleolus and step CR from 10° to 40° cephalad',
        angleRotationAdjustment: 'CR angle +10° cephalad step (10°/20°/30°/40°)',
      },
    ],
    diagramImage: subtalarBrodensImg,
  },
  {
    id: 'calcaneum-axial',
    name: 'Calcaneum — Axial (Plantodorsal / Infero-superior)',
    aliases: ['Plantodorsal Axial Calcaneus', 'Inferosuperior Calcaneum Axial', 'Axial Heel View'],
    anatomicalRegion: 'Lower Limbs',
    clinicalIndications: [
      'Suspected calcaneal fracture (e.g., "Lover\'s fracture" from fall from height — assess lateral wall blowout & tuberosity alignment)',
      'Evaluation of calcaneal tuberosity varus/valgus displacement and sustentaculum tali',
      'NOTE: Lateral calcaneum is preferred for plantar calcaneal spurs (plantar fasciitis)',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '18 x 24 cm',
      orientation: 'Vertical',
      grid: false,
      markerType: 'L / R anatomical marker',
      accessories: ['Long gauze bandage/traction loop held by patient around forefoot for dorsiflexion', 'Optional compensating wedge filter at posterior heel', 'Gonad shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Shoes & thick socks', 'Ankle braces', 'Metallic splints/pins'],
    },
    positioning: {
      patientPosition:
        'Supine (or long-seated) on radiographic table with leg fully extended resting on tabletop IR; dorsiflex foot maximally until plantar surface is perpendicular (90°) to IR using a cloth/gauze loop pulled gently around forefoot',
      partRotationAngle: '0° neutral leg position with 90° foot dorsiflexion',
      crAngle: '40° cephalad (relative to long axis of foot / perpendicular tabletop IR)',
      crEntryPoint:
        'Plantar midline at the base of the 3rd metatarsal (angled ray traverses calcaneus and emerges just distal to lateral malleolus)',
      collimation: 'Include entire calcaneal tuberosity, sustentaculum tali, and subtalar joint space',
      respiration: 'Suspend motion (keep steady pull on forefoot strap)',
    },
    exposure: {
      baselineKvp: 74,
      baselineMas: 14,
      modificationNotes:
        'CONFLICT RESOLVED: 2. Lower Extremities (p. 9) mentions lateral malleolus level, whereas Week 11 Tutorial (p. 62) & diagram specify Base of 3rd MT. Entering at the plantar base of the 3rd MT at 40° cephalad geometrically exits distal to the lateral malleolus through the calcaneus (avoiding clipped tuberosity). Higher exposure (~72–76 kVp / 12.5–16 mAs vs lateral 60 kVp / 3.2 mAs) penetrates thick axial bone path; optional wedge prevents overexposing thin posterior tuberosity.',
    },
    cantoneseCues: {
      positioning: '請平瞓伸直隻腳，雙手拉住條布帶將腳板同腳趾盡量向自己方向拉起成直角，定住唔好郁。',
      breathing: '唔使忍氣，拉實隻腳唔好郁。',
    },
    imageCriteria: [
      'Entire calcaneus demonstrated axially from posterior tuberosity to subtalar joint and sustentaculum tali',
      'Subtalar joint space and medial/lateral calcaneal walls clearly outlined without excessive distortion',
      'No rotation of calcaneus; adequate penetration across both dense anterior body and thin posterior heel',
    ],
    troubleshooting: [
      {
        visualError: 'Posterior calcaneal tuberosity foreshortened or superimposed over subtalar joint',
        anatomicalCause: 'Insufficient dorsiflexion (plantarflexed foot) or CR angle <40° cephalad',
        correctionAction: 'Improve 90° forefoot dorsiflexion with traction strap (or increase cephalad angle to 45°–50° if unable to dorsiflex)',
        angleRotationAdjustment: 'CR angle +10° cephalad (if dorsiflexion limited)',
      },
      {
        visualError: 'Posterior heel margin burned out (overexposed) while subtalar joint is underexposed',
        anatomicalCause: 'Marked thickness gradient from forefoot/midfoot to thin posterior tuberosity',
        correctionAction: 'Place compensating wedge filter with thick end toward heel or slightly raise kVp (+4 kVp) and reduce mAs',
        angleRotationAdjustment: 'CR shift 2 cm distally toward 3rd MT base',
      },
    ],
    diagramImage: calcaneumAxialImg,
  },

  // ============================================================================
  // PELVIS & HIPS (views_diagrams/Pelvis & hips)
  // ============================================================================
  {
    id: 'pelvis-ap',
    name: 'Pelvis — AP',
    aliases: ['AP Pelvis', 'Bilateral Hips AP'],
    anatomicalRegion: 'Pelvis & Hips',
    clinicalIndications: [
      'Pelvic ring or proximal femur / neck of femur (NOF) fracture (Shenton line check)',
      'Developmental dysplasia or hip osteoarthritis',
      'Sacroiliac joint and pubic symphysis evaluation',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '35 x 43 cm',
      orientation: 'Horizontal',
      grid: true,
      markerType: 'Supine',
      accessories: ['Table Bucky', 'Sandbag/support for ankle internal rotation (non-trauma)'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: false,
      removableArtifacts: ['Belt, zippers, coins, keys', 'Underwear buttons/metal clips'],
    },
    positioning: {
      patientPosition: 'Supine, arms folded across chest, MSP centered to table, bilateral ASIS equidistant from tabletop',
      partRotationAngle: '15°–20° internal rotation of both lower limbs so big toes touch (skip in trauma)',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: 'Midway between level of ASIS and upper border of pubic symphysis at MSP (iliac crest ~5 cm / 2 in. below upper IR border)',
      collimation: 'Superior to iliac crests, inferior to pubic arch / proximal 1/3 femora, lateral to skin margins',
      respiration: 'Suspend respiration',
    },
    exposure: {
      baselineKvp: 75,
      baselineMas: 16,
      modificationNotes: [
        'Trauma / Supine Mode: DO NOT internally rotate limbs if NOF fracture or hip dislocation is suspected!',
        'For Total Hip Replacement (THR) follow-up, center 3.8 cm (1.5 in.) below pubic symphysis to include entire femoral prosthesis stem',
      ],
    },
    cantoneseCues: {
      positioning: '請平瞓喺床中間，雙手放喺心口，兩隻腳向入面轉令到兩隻腳趾公掂埋一齊（如懷疑骨折就唔好郁隻腳）。',
      breathing: '保持身體定住唔好郁。',
    },
    imageCriteria: [
      'Entire pelvic girdle (iliac crests, pubic & ischial rami) and proximal 1/3 of femora included',
      'No rotation: symmetric ilia and obturator foramina; sacrum and coccyx aligned with pubic symphysis',
      'Femoral necks demonstrated in full length without foreshortening; greater trochanters in profile',
      'Lesser trochanters minimally visible on medial femoral border',
    ],
    troubleshooting: [
      {
        visualError: 'Femoral necks appear foreshortened and lesser trochanters are prominent medially',
        anatomicalCause: 'Feet/legs externally rotated instead of internally rotated 15° (unless trauma contraindicated)',
        correctionAction: 'Internally rotate both legs from the hips by 15°–20° so big toes touch (if no trauma)',
        angleRotationAdjustment: 'Part rotation +15° internal rotation of lower limbs',
      },
      {
        visualError: 'Right obturator foramen narrower than left; coccyx shifted toward right',
        anatomicalCause: 'Pelvis rotated into slight RPO position',
        correctionAction: 'Palpate bilateral ASIS and level pelvis equidistant to tabletop',
        angleRotationAdjustment: 'Part rotation -10° (level bilateral ASIS)',
      },
    ],
    diagramImage: pelvisApImg,
    diagramConfig: {
      silhouette: 'torso-frontal',
      viewPlane: 'axial',
      crTarget: { x: 0, y: 20 },
      baselineLabel: 'ASIS–SP Midpoint',
    },
  },
  {
    id: 'hip-ap-unilateral',
    name: 'Hip — AP (Unilateral)',
    aliases: ['AP Hip', 'Unilateral Hip AP'],
    anatomicalRegion: 'Pelvis & Hips',
    clinicalIndications: [
      'Post-operative hip arthroplasty / internal fixation (DHS, Gamma nail) evaluation',
      'Localized proximal femur fracture or hip joint osteoarthritis',
      'Avascular necrosis of femoral head',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Supine',
      accessories: ['Table Bucky', 'Gonad shield'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Belt, trousers, pocket coins & keys', 'Underwear metal clips'],
    },
    positioning: {
      patientPosition: 'Supine on table, arms placed on chest, bilateral ASIS equidistant from tabletop, femur parallel to table',
      partRotationAngle: '15° internal rotation of affected lower limb (big toes touching) so femoral neck is parallel to IR (skip in trauma)',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: 'Femoral pulse: 2.5 cm distal along perpendicular bisector of line between ASIS and pubic symphysis (or 8 cm inferior and 4 cm medial to ASIS; upper IR border at ASIS)',
      collimation: 'Superior to ASIS, inferior to proximal 1/3 of femur (or entire orthopedic prosthesis), lateral to skin margin',
      respiration: 'Suspend respiration',
    },
    exposure: {
      baselineKvp: 75,
      baselineMas: 16,
      modificationNotes: [
        'Trauma / Supine Mode: never force internal rotation if femoral neck fracture is suspected',
        'Ensure entire orthopedic prosthesis/nail is included within collimation field',
      ],
    },
    cantoneseCues: {
      positioning: '請平瞓喺床上面，雙手放喺心口，兩隻腳向內轉令腳趾公掂埋一齊（如有骨折痛就保持原位唔好郁）。',
      breathing: '保持定住唔好郁。',
    },
    imageCriteria: [
      'ASIS, acetabulum, femoral head, neck, trochanters, and proximal third of femoral shaft demonstrated',
      'Femoral neck seen in full profile without foreshortening',
      'Greater trochanter in profile laterally; lesser trochanter minimally visible medially',
      'Obturator foramen open and ischial spine aligned with pelvic brim',
    ],
    troubleshooting: [
      {
        visualError: 'Lesser trochanter seen in full profile medially and femoral neck foreshortened',
        anatomicalCause: 'Lower limb in external or neutral rotation instead of 15° internal rotation',
        correctionAction: 'Internally rotate the entire leg 15° from the hip (if no trauma contraindication)',
        angleRotationAdjustment: 'Part rotation +15° internal leg rotation',
      },
      {
        visualError: 'Distal tip of hip prosthesis cut off at inferior margin',
        anatomicalCause: 'CR and IR positioned too superiorly for long-stem implant',
        correctionAction: 'Shift IR and CR 3–5 cm distally along femoral shaft so upper border sits at ASIS',
        angleRotationAdjustment: 'CR shift 4 cm inferior',
      },
    ],
    diagramImage: unilateralHipImg,
    diagramConfig: {
      silhouette: 'torso-frontal',
      viewPlane: 'axial',
      crTarget: { x: 8, y: 22 },
      baselineLabel: 'Femoral Pulse',
    },
  },
  {
    id: 'hip-lateral-unilateral',
    name: 'Hip — Lateral (Unilateral)',
    aliases: ['Unilateral Frog-Leg Hip', 'Lauenstein Method', 'Hip Oblique (Unilateral)'],
    anatomicalRegion: 'Pelvis & Hips',
    clinicalIndications: [
      'Non-trauma lateral evaluation of femoral head, neck, and acetabular rim',
      'Slipped capital femoral epiphysis (SCFE) or Perthes disease',
      'Osteoarthritis and hip impingement evaluation',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Supine',
      accessories: ['Table Bucky', '45° foam support pad under abducted knee/thigh', 'Gonad shield'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Belt, trousers, pocket items', 'Underwear metal clips'],
    },
    positioning: {
      patientPosition: 'Supine, knee and hip of affected side flexed with thigh abducted 45° resting on foam pad (or pelvis rotated 45° toward affected side with femur parallel to table)',
      partRotationAngle: '45° femur abduction / 45° pelvic obliquity toward affected side',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: 'Femoral pulse (midway between femoral pulse and palpable greater trochanter; 8 cm inferior and 4 cm medial to ASIS)',
      collimation: 'Superior to ASIS, inferior to proximal femur below lesser trochanter, lateral to skin margin',
      respiration: 'Suspend respiration',
    },
    exposure: {
      baselineKvp: 80,
      baselineMas: 16,
      modificationNotes: [
        'CONTRAINDICATED in acute hip trauma / suspected NOF fracture — perform Horizontal Beam (inferosuperior Danelius-Miller) lateral hip instead!',
        'Abduct thigh 15°–20° from vertical for true femoral neck profile, or 45°–60° for acetabulum/hip joint',
      ],
    },
    cantoneseCues: {
      positioning: '請平瞓，雙手放喺心口，有事嗰邊隻腳屈起膝頭再向外打開約四十五度，放喺塊軟墊上面休息。',
      breathing: '保持定住唔好郁。',
    },
    imageCriteria: [
      'Acetabulum, femoral head, femoral neck, and trochanteric region clearly demonstrated',
      'Lesser trochanter projected in profile medially',
      'Greater trochanter superimposed over the distal femoral neck',
      'Femoral neck demonstrated without excessive foreshortening',
    ],
    troubleshooting: [
      {
        visualError: 'Femoral neck severely foreshortened and overlapped by greater trochanter',
        anatomicalCause: 'Excessive thigh abduction (> 60° flat to table) when evaluating femoral neck',
        correctionAction: 'Support knee on higher foam wedge so thigh abducts 45° (or 15°–20° for neck profile)',
        angleRotationAdjustment: 'Part rotation 45° thigh abduction',
      },
      {
        visualError: 'Hip joint off-center laterally on radiograph',
        anatomicalCause: 'Patient pelvis shifted off midline when abducting leg',
        correctionAction: 'Align region of interest (8 cm below and 4 cm medial to ASIS) to the center of the table Bucky',
        angleRotationAdjustment: 'CR shift to femoral pulse center',
      },
    ],
    diagramImage: lateralHipImg,
    diagramConfig: {
      silhouette: 'torso-frontal',
      viewPlane: 'axial',
      crTarget: { x: 8, y: 22 },
      baselineLabel: '45° Hip Abduction',
    },
  },

  {
    id: 'si-joint-posterior-oblique',
    name: 'Sacroiliac (SI) Joints — Posterior Oblique',
    aliases: ['Posterior Oblique SI Joint', 'RPO/LPO Sacroiliac Joint', 'SI Joint Oblique'],
    anatomicalRegion: 'Pelvis & Hips',
    clinicalIndications: [
      'Sacroiliitis & Ankylosing Spondylitis (assessing joint widening, subchondral sclerosis, erosions, or bony ankylosis)',
      'Unilateral SI joint dislocation, post-traumatic diastasis, or localized SI pain',
      'Both sides routinely obtained for bilateral symmetry comparison',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'RPO / LPO anatomical marker (L or R indicating side ELEVATED away from IR)',
      accessories: ['25° radiolucent foam wedge/sponge under elevated pelvis', 'Gonad shield (placed carefully without obscuring pelvic/SI region)'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Belt buckles', 'Trouser zippers/metal buttons', 'Keys/coins in pockets', 'Metal clips'],
    },
    positioning: {
      patientPosition:
        'Supine on radiographic table; elevate affected side 25° onto a 25° radiolucent foam wedge (flex elevated-side knee slightly for stability). CRITICAL SIDE RULE: RPO elevates LEFT side (demonstrates LEFT SI joint); LPO elevates RIGHT side (demonstrates RIGHT SI joint)',
      partRotationAngle: '25° posterior oblique (RPO elevates left side; LPO elevates right side)',
      crAngle:
        '0° vertical beam (perpendicular to IR — standard/easier), OR 25°–30° cephalad (if sacral lordotic curve obscures lower SI joint)',
      crEntryPoint:
        '2.5 cm (1 inch) medial to the elevated ASIS (or 2.5 cm medial and 2.5 cm inferior to elevated ASIS if adding 25°–30° cephalad tilt)',
      collimation: 'Collimate tightly to affected SI joint (from L5/iliac crest down to inferior sacral margin)',
      respiration: 'Expose at end of full expiration',
    },
    exposure: {
      baselineKvp: 75,
      baselineMas: 20,
      modificationNotes:
        'Vertical 0° beam matches diagram and clinical standard for speed/accuracy; add 25°–30° cephalad tilt only when sacral overlap persists on difficult builds. Prone Anterior Oblique (LAO/RAO) lowers gonad dose slightly and aligns beam divergence, though supine RPO/LPO is better tolerated.',
    },
    cantoneseCues: {
      positioning: '請平瞓喺張床度，我哋會將你嗰邊盤骨墊高大約二十五度，上面隻腳曲起少少借力，保持定住唔好郁。',
      breathing: '吸一啖氣，呼氣，然後忍住唔好唞氣！',
    },
    imageCriteria: [
      'Affected SI joint space demonstrated open vertically between ilium and sacrum with minimal overlapping',
      'Elevated-side SI joint centered cleanly inside collimated field (RPO shows Left SI joint; LPO shows Right SI joint)',
      'L5–S1 junction and sacral wing clearly visible with adequate contrast and no motion blur',
    ],
    troubleshooting: [
      {
        visualError: 'Iliac wing and sacrum remain overlapped closing the SI joint space',
        anatomicalCause: 'Body obliquity insufficient (<20°) or excessive (>35°); joint planes vary slightly anatomically (25°–30°)',
        correctionAction: 'Verify 25° wedge support under elevated hip (adjust ±5° if patient lordosis/pelvis shape differs)',
        angleRotationAdjustment: 'Part rotation +5° posterior oblique toward 25°–30°',
      },
      {
        visualError: 'Inferior SI joint foreshortened or obscured by pelvic obliquity',
        anatomicalCause: 'Steep sacral inclination relative to vertical central ray',
        correctionAction: 'Re-center 2.5 cm medial & 2.5 cm inferior to elevated ASIS with 25°–30° cephalad tube angle',
        angleRotationAdjustment: 'CR angle +25° cephalad',
      },
    ],
    diagramImage: siJointOblImg,
  },

  // ============================================================================
  // SPINE (views_diagrams/Spine — kept unchanged)
  // ============================================================================
  {
    id: 'cspine-ap-axial',
    name: 'Cervical Spine — AP Axial',
    aliases: ['AP C-Spine', 'AP Lower Cervical Spine'],
    anatomicalRegion: 'Spine',
    clinicalIndications: [
      'Cervical vertebral body trauma or compression fracture',
      'Cervical spondylosis and uncovertebral arthritis',
      'Tracheal deviation or cervical rib screening',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '18 x 24 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Supine',
      accessories: ['Erect Bucky or trauma supine table Bucky', 'C-collar left in place for trauma'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Earrings', 'Necklaces', 'Hairpins', 'Dentures (if obstructing)'],
    },
    positioning: {
      patientPosition: 'Erect or supine, MSP perpendicular to IR, occlusal plane perpendicular to tabletop',
      partRotationAngle: '0° (MSP aligned; chin slightly elevated so mentum clears C3)',
      crAngle: '15°–20° cephalad',
      crEntryPoint: 'C4 level (lower margin of thyroid cartilage) at MSP',
      collimation: 'Include C3 to T1/T2; 2.5 cm lateral to soft tissue neck borders',
      respiration: 'Suspend respiration on expiration (do not swallow)',
    },
    exposure: {
      baselineKvp: 72,
      baselineMas: 12,
      modificationNotes: [
        'Trauma / Supine Mode: Do NOT remove cervical collar or extend neck; keep 15–20° cephalad CR angled to parallel C3–C7 disc spaces',
      ],
    },
    cantoneseCues: {
      positioning: '背脊貼實塊板，下巴微微抬高少少，頭唔好歪向左右。',
      breathing: '唔好吞口水，呼氣之後忍住唔好唞氣！',
    },
    imageCriteria: [
      'C3 through T2 vertebral bodies and open intervertebral disc spaces clearly demonstrated',
      'No rotation: spinous processes equidistant from lateral borders of vertebral bodies',
      'Mandible and occipital base superimposed cleanly above C3',
      'Spinous processes aligned in midline',
    ],
    troubleshooting: [
      {
        visualError: 'Intervertebral disc spaces appear narrowed/closed and vertebrae foreshortened',
        anatomicalCause: 'Insufficient cephalad CR angle (CR not parallel to downward slope of C-spine disc spaces)',
        correctionAction: 'Increase cephalad CR angulation to 15–20° and verify chin is not tucked down',
        angleRotationAdjustment: 'CR angle +10° cephalad (set to 18–20° cephalad)',
      },
      {
        visualError: 'Mandible superimposes C3 and C4 vertebral bodies',
        anatomicalCause: 'Chin tucked too far downward (neck flexed)',
        correctionAction: 'Slightly elevate chin until acanthiomeatal line is perpendicular to IR (skip if trauma)',
        angleRotationAdjustment: 'Part rotation +10° chin extension (or increase CR +5° cephalad in trauma)',
      },
    ],
    diagramConfig: {
      silhouette: 'torso-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: -6, y: -36 },
      baselineLabel: 'C4 Level',
    },
  },
  {
    id: 'lspine-lateral',
    name: 'Lumbar Spine — Lateral',
    aliases: ['Lateral L-Spine', 'L-Spine Lat'],
    anatomicalRegion: 'Spine',
    clinicalIndications: [
      'Spondylolisthesis or pars defect',
      'Lumbar disc space narrowing or compression fracture',
      'Vertebral alignment and lordotic curve evaluation',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '35 x 43 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Supine',
      accessories: ['Radiolucent waist support sponge', 'Knee support sponge', 'Lead strip behind patient back'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Belt, trouser buttons, zippers', 'Piercings'],
    },
    positioning: {
      patientPosition: 'True lateral recumbent (or erect), knees flexed, arms raised forward',
      partRotationAngle: '90° true lateral (interiliac line perpendicular to tabletop)',
      crAngle: '0° (or 5°–8° caudad if spine sags in wide-hipped patients without sponge)',
      crEntryPoint:
        'Iliac crest (L4–L5 interspace) for L-spine/LS-spine (or L3 / LCM, 2 fingers above crest, for dedicated upper lumbar spine), ~5 cm anterior to posterior skin surface',
      collimation: 'Include T12 to S1/sacrum; tight AP collimation (18–20 cm width) to reduce scatter',
      respiration: 'Suspend respiration at end of expiration',
    },
    exposure: {
      baselineKvp: 85,
      baselineMas: 45,
      modificationNotes: [
        'Place lead rubber mat behind dorsal lumbar border to absorb scatter',
        'Trauma / Supine Mode: perform Horizontal Beam Lateral (HBL) shoot-through with patient remaining supine!',
      ],
    },
    cantoneseCues: {
      positioning: '側身瞓喺度，雙腳微微屈起，雙手向前放，條腰唔好前後扭曲。',
      breathing: '呼氣……忍住唔好唞氣！',
    },
    imageCriteria: [
      'T12–S1 vertebral bodies and intervertebral foramina demonstrated cleanly',
      'True lateral: posterior vertebral margins superimposed without double-edge shadowing',
      'Open intervertebral disc spaces and spinous processes in profile',
      'Iliac crests nearly superimposed',
    ],
    troubleshooting: [
      {
        visualError: 'Intervertebral disc spaces appear wedged/closed with double-edged superior/inferior endplates',
        anatomicalCause: 'Thoracolumbar spine sagging downward toward tabletop due to broad hips',
        correctionAction: 'Place radiolucent sponge under waist to level spine parallel to IR, or angle CR 5–8° caudad',
        angleRotationAdjustment: 'CR angle 6° caudad (toward feet) to parallel disc spaces',
      },
      {
        visualError: 'Posterior margins of vertebral bodies show double contours (not superimposed)',
        anatomicalCause: 'Patient torso/hips rotated anteriorly or posteriorly out of true lateral',
        correctionAction: 'Align shoulders and iliac crests perpendicular to tabletop using sponges between knees',
        angleRotationAdjustment: 'Part rotation -8° back toward true 90° lateral',
      },
    ],
    diagramConfig: {
      silhouette: 'torso-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: 4, y: 16 },
      baselineLabel: 'L4–L5 / Mid-Coronal',
    },
  },

  // ============================================================================
  // SKULL (views_diagrams/Skull)
  // ============================================================================
  {
    id: 'skull-of',
    name: 'Skull — Occipito-Frontal (OF)',
    aliases: ['OF Skull', 'PA Skull (0°)'],
    anatomicalRegion: 'Skull',
    clinicalIndications: [
      'Frontal bone fracture or cranial vault survey',
      'Paget disease, multiple myeloma, or cranial osteoblastic/osteolytic lesions',
      'Internal auditory canals and frontal/ethmoid sinus overview',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Prone',
      accessories: ['Erect Bucky or table Bucky', 'Head immobilization clamps', 'Lead gonad shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Hairpins & hairclips', 'Earrings', 'Eyeglasses', 'Hearing aids', 'Dentures'],
    },
    positioning: {
      patientPosition: 'Standing/seated erect or prone facing vertical IR, forehead and nose resting against detector',
      partRotationAngle: '0° (MSP and OML both perpendicular to IR)',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: 'Enters posterior occiput at MSP to exit at Glabella / Nasion',
      collimation: 'Include entire cranial vertex and lateral cranial walls (whole mandible not required)',
      respiration: 'Suspend respiration',
    },
    exposure: {
      baselineKvp: 80,
      baselineMas: 20,
      modificationNotes: [
        'PA (Occipito-Frontal) significantly reduces radiation dose to the radiosensitive eye lenses compared to AP',
        'Trauma / Supine Mode: perform AP 0° with OML perpendicular to tabletop if patient cannot sit or lie prone',
      ],
    },
    cantoneseCues: {
      positioning: '請面向塊板，額頭同鼻尖貼實塊板，收少少下巴，個頭保持正中唔好郁。',
      breathing: '保持個頭定住唔好郁。',
    },
    imageCriteria: [
      'Entire cranial vault included (whole mandible not required)',
      'Petrous ridges completely fill the orbits (petrous ridge at upper third of orbit)',
      'Dorsum sellae and anterior clinoids visible superior to ethmoid sinuses',
      'No rotation: lateral border of orbit equidistant to lateral cranial cortex bilaterally',
    ],
    troubleshooting: [
      {
        visualError: 'Petrous ridges projected in lower half of orbits instead of filling orbits',
        anatomicalCause: 'Chin elevated too much (OML not perpendicular to IR) or caudal CR tilt applied',
        correctionAction: 'Tuck chin downward until OML is strictly perpendicular to the detector and verify 0° CR',
        angleRotationAdjustment: 'Part rotation -10° chin flexion (OML ⊥ IR)',
      },
      {
        visualError: 'Distance from lateral orbital margin to lateral skull border is asymmetric',
        anatomicalCause: 'Head rotated (MSP not perpendicular to IR)',
        correctionAction: 'Align MSP perpendicular to IR and check bilateral EAM-to-tabletop distance',
        angleRotationAdjustment: 'Part rotation ±8° to align MSP ⊥ IR',
      },
    ],
    diagramImage: skullOfImg,
    diagramConfig: {
      silhouette: 'skull-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: -20, y: -10 },
      baselineLabel: 'OML (0°)',
    },
  },
  {
    id: 'skull-caldwell',
    name: 'Skull — OF Axial (Caldwell Method)',
    aliases: ['Caldwell View', 'OF 15° Skull', 'PA Axial Skull'],
    anatomicalRegion: 'Skull',
    clinicalIndications: [
      'Frontal and anterior ethmoid sinusitis (air-fluid levels with horizontal beam)',
      'Orbital rim and superior orbital fissure evaluation',
      'Frontal bone and crista galli assessment',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Prone',
      accessories: ['Erect Bucky (tilt Bucky 15° if using horizontal beam for sinus fluid level)', 'Gonad shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Hairpins', 'Earrings', 'Eyeglasses', 'Dentures'],
    },
    positioning: {
      patientPosition: 'Erect or prone facing vertical IR, forehead and nose resting against detector',
      partRotationAngle: '0° (MSP and OML perpendicular to IR)',
      crAngle: '15° caudad (to OML)',
      crEntryPoint: 'Enters posterior skull in MSP to exit at Glabella / Nasion',
      collimation: 'Include entire cranial vault (or collimate to paranasal sinuses/orbits)',
      respiration: 'Suspend respiration',
    },
    exposure: {
      baselineKvp: 80,
      baselineMas: 20,
      modificationNotes: [
        'For orbital floor / foreign body evaluation, use 25°–30° caudad tilt to project petrous ridges below inferior orbital margins',
        'For sinus air-fluid levels, perform erect with horizontal beam and Bucky tilted 15°',
      ],
    },
    cantoneseCues: {
      positioning: '請面向塊板，額頭同鼻尖貼實塊板，保持個頭正中唔好郁。',
      breathing: '保持個頭定住唔好郁。',
    },
    imageCriteria: [
      'Petrous ridges projected into the lower third of the orbits (just above inferior orbital margins)',
      'Frontal sinuses, anterior ethmoid air cells, and crista galli clearly demonstrated above petrous ridges',
      'Interpupillary line (IPL) parallel to film edge (no tilt)',
      'No rotation: symmetric distance from foramen magnum / orbits to lateral cranial walls',
    ],
    troubleshooting: [
      {
        visualError: 'Petrous ridges fill the middle/upper orbits and obscure superior orbital fissures',
        anatomicalCause: 'Insufficient caudad CR angle (< 15°) or patient chin tucked too far down',
        correctionAction: 'Ensure OML is perpendicular to IR and set CR to full 15° caudad (or 25° for full orbits)',
        angleRotationAdjustment: 'CR angle -15° caudad',
      },
      {
        visualError: 'Petrous ridges projected completely below inferior orbital margins',
        anatomicalCause: 'Excessive caudad CR angulation (> 25°) or chin elevated away from IR',
        correctionAction: 'Tuck chin so forehead and nose touch IR (OML ⊥ IR) and set CR to 15° caudad',
        angleRotationAdjustment: 'CR angle +10° toward 15° caudad',
      },
    ],
    diagramImage: skullCaldwellImg,
    diagramConfig: {
      silhouette: 'skull-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: -20, y: -10 },
      baselineLabel: 'OML (15° Caudad)',
    },
  },
  {
    id: 'skull-towne',
    name: 'Skull — FO Axial (Towne Method)',
    aliases: ['Towne View', 'AP Axial Skull', 'Fronto-Occipital 30° Axial'],
    anatomicalRegion: 'Skull',
    clinicalIndications: [
      'Occipital bone fracture and base of skull trauma',
      'Petrous pyramids, dorsum sellae, and foramen magnum assessment',
      'Zygomatic arches and bilateral mastoid air cells comparison',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Supine',
      accessories: ['Angle sponge / head clamps', 'Lead apron'],
    },
    safety: {
      requiresLmpCheck: true,
      gonadShield: true,
      removableArtifacts: ['Hairpins & hairclips', 'Earrings', 'Glasses', 'Hearing aids', 'Removable dentures'],
    },
    positioning: {
      patientPosition: 'Supine or seated erect, posterior skull against Bucky, MSP perpendicular to IR',
      partRotationAngle: '0° (MSP perpendicular; OML perpendicular to IR, or IOML if trauma)',
      crAngle: '30° caudad to OML (or 37° caudad to IOML)',
      crEntryPoint: '3 fingers (~6 cm) above nasion/glabella at MSP, passing through EAM',
      collimation: 'Include entire cranial vertex, lateral parietal borders, and mastoid tips (whole mandible not needed)',
      respiration: 'Suspend respiration',
    },
    exposure: {
      baselineKvp: 80,
      baselineMas: 20,
      modificationNotes: [
        'Trauma / Supine Mode: keep neck neutral in collar (use IOML perpendicular) and increase CR angle to 37° caudad!',
      ],
    },
    cantoneseCues: {
      positioning: '後尾枕貼實塊板，下巴微微向心口收埋少少，個頭保持正中唔好郁。',
      breathing: '保持個頭定住唔好郁。',
    },
    imageCriteria: [
      'Dorsum sellae and posterior clinoid processes projected cleanly inside foramen magnum',
      'Petrous ridges symmetric and superior to mastoids',
      'Foramen magnum equidistant from lateral borders of skull (no rotation)',
      'Occipital bone and posterior cranial fossa sharply defined',
    ],
    troubleshooting: [
      {
        visualError: 'Dorsum sellae projected superior to foramen magnum (above posterior arch of C1)',
        anatomicalCause: 'Insufficient caudad CR angle (< 30° to OML) or chin elevated (OML not perpendicular)',
        correctionAction: 'Increase caudad CR angle by 7° or flex chin down to align OML perpendicular to IR',
        angleRotationAdjustment: 'CR angle +7° caudad (37° caudad if using IOML)',
      },
      {
        visualError: 'Dorsum sellae projected below foramen magnum / obscured by C1 arch',
        anatomicalCause: 'Excessive caudad CR angulation (> 37° to IOML)',
        correctionAction: 'Reduce caudad CR angulation until CR is exactly 30° to OML',
        angleRotationAdjustment: 'CR angle -7° caudad (reduce toward 30° caudad)',
      },
    ],
    diagramImage: skullTowneImg,
    diagramConfig: {
      silhouette: 'skull-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: -20, y: -24 },
      baselineLabel: 'OML (30° Caudad)',
    },
  },
  {
    id: 'skull-waters',
    name: "Skull — Occipito-Mental (OM / Waters' Method)",
    aliases: ["Waters' View", 'OM Skull', 'Parietoacanthial View'],
    anatomicalRegion: 'Skull',
    clinicalIndications: [
      'Maxillary, frontal, ethmoid, and sphenoid (open-mouth) sinusitis / fluid levels',
      'Facial bone fractures: orbital floor blow-out (teardrop sign), tripod/zygomatic, and maxilla fractures',
      'McGrigor lines facial trauma evaluation',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Vertical',
      grid: true,
      markerType: 'Prone',
      accessories: ['Erect Bucky stand', 'Lead gonad shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Earrings', 'Eyeglasses', 'Nose/lip piercings', 'Removable dentures', 'Hairpins'],
    },
    positioning: {
      patientPosition: 'Erect facing vertical Bucky, neck extended with chin (mentum) resting against IR (open mouth for paranasal sinuses to show sphenoid sinus; closed mouth for facial bones)',
      partRotationAngle: 'MML perpendicular to IR; OML forms 37° (or 45° for sinuses) to IR',
      crAngle: '0° (Horizontal beam, perpendicular to IR)',
      crEntryPoint: 'Enters posterior skull in MSP to exit at Acanthion / lower orbital margin',
      collimation: 'Include entire cranial/facial margins from vertex to mandible',
      respiration: 'Suspend respiration',
    },
    exposure: {
      baselineKvp: 80,
      baselineMas: 20,
      modificationNotes: [
        'Always perform erect with a horizontal beam when evaluating paranasal sinus air-fluid levels',
        'Instruct patient to open mouth wide ("Ahh") to visualize the sphenoid sinus through the oral cavity',
      ],
    },
    cantoneseCues: {
      positioning: '請面向塊板，抬起頭將下巴貼實塊板（鼻尖離塊板少少），如果要照鼻竇請擘大個口。',
      breathing: '保持個頭定住唔好郁。',
    },
    imageCriteria: [
      'Petrous ridges projected immediately below the floors of the maxillary sinuses (maxillary antra)',
      'Sphenoid sinus projected clearly through the open mouth (for open-mouth OM sinus view)',
      'No rotation: symmetric distance from lateral orbital border to lateral cranial cortex',
      'Orbits, zygomatic arches, and maxillary sinuses clearly demonstrated',
    ],
    troubleshooting: [
      {
        visualError: 'Petrous ridges superimpose the lower third of the maxillary sinuses',
        anatomicalCause: 'Insufficient neck extension (OML < 37° to IR; chin not raised enough)',
        correctionAction: 'Extend neck further so MML is perpendicular to IR and OML forms 37°–45° to IR',
        angleRotationAdjustment: 'Part rotation +10° chin extension (OML 37°–45° to IR)',
      },
      {
        visualError: 'Maxillary sinuses appear foreshortened and petrous ridges lie far below maxilla',
        anatomicalCause: 'Excessive neck hyperextension (OML > 50° to IR)',
        correctionAction: 'Lower chin slightly until MML is perpendicular to IR',
        angleRotationAdjustment: 'Part rotation -8° chin flexion',
      },
    ],
    diagramImage: skullWatersImg,
    diagramConfig: {
      silhouette: 'skull-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: -24, y: 12 },
      baselineLabel: 'MML ⊥ IR (OML 37°)',
    },
  },
  {
    id: 'skull-lateral',
    name: 'Skull — Lateral',
    aliases: ['Lateral Skull', 'Lat Cranium'],
    anatomicalRegion: 'Skull',
    clinicalIndications: [
      'Skull vault fractures, sella turcica remodeling, or pituitary adenoma',
      'Sphenoid sinus air-fluid level (horizontal beam trauma lateral) — sign of base of skull fracture',
      'Multiple myeloma (pepper-pot skull) or Paget disease',
    ],
    equipment: {
      sid: 100,
      cassetteSize: '24 x 30 cm',
      orientation: 'Horizontal',
      grid: true,
      markerType: 'Supine',
      accessories: ['Erect Bucky or table Bucky', 'Radiolucent sponge under chin if semiprone', 'Gonad shield'],
    },
    safety: {
      requiresLmpCheck: false,
      gonadShield: true,
      removableArtifacts: ['Earrings', 'Hairpins & clips', 'Eyeglasses', 'Hearing aids', 'Dentures'],
    },
    positioning: {
      patientPosition: 'Seated erect or semiprone (Sim position), head turned into true lateral with affected side against IR',
      partRotationAngle: '90° True Lateral (MSP parallel to IR; Interpupillary Line [IPL] perpendicular to IR; IOML parallel to transverse IR axis)',
      crAngle: '0° (Perpendicular to IR)',
      crEntryPoint: '5 cm (2 fingers) superior to EAM (or midway between glabella and external occipital protuberance [EOP])',
      collimation: 'Include entire cranial vault from frontal bone to occiput and vertex to skull base (whole mandible not required)',
      respiration: 'Suspend respiration',
    },
    exposure: {
      baselineKvp: 75,
      baselineMas: 16,
      modificationNotes: [
        'Trauma / Supine Mode: perform Horizontal Beam (cross-table) Dorsal Decubitus Lateral to detect sphenoid sinus air-fluid level without moving neck!',
      ],
    },
    cantoneseCues: {
      positioning: '請將個頭側埋一邊貼實塊板，雙眼望向正前方，保持個頭平正唔好郁。',
      breathing: '保持個頭定住唔好郁。',
    },
    imageCriteria: [
      'Entire cranial vault included (whole mandible not needed)',
      'Sella turcica (pituitary fossa, anterior and posterior clinoid processes, dorsum sellae) seen in sharp profile',
      'No rotation or tilt: bilateral orbital roofs, greater wings of sphenoid, mandibular rami, and TMJs superimposed',
      'Sharp visualization of inner and outer cranial tables and meningeal vascular markings',
    ],
    troubleshooting: [
      {
        visualError: 'Anterior and posterior margins of mandibular rami and greater sphenoid wings are separated horizontally',
        anatomicalCause: 'Head rotated (MSP not parallel to IR — nose/chin rotated toward or away from detector)',
        correctionAction: 'Align Mid-Sagittal Plane (MSP) strictly parallel to the IR',
        angleRotationAdjustment: 'Part rotation ±8° to align MSP // IR',
      },
      {
        visualError: 'Superior and inferior orbital roofs and EAMs are vertically offset',
        anatomicalCause: 'Head tilted (Interpupillary Line [IPL] not perpendicular to IR)',
        correctionAction: 'Adjust lateral head tilt until IPL is strictly perpendicular to the detector',
        angleRotationAdjustment: 'Part tilt ±8° to align IPL ⊥ IR',
      },
    ],
    diagramImage: skullLatImg,
    diagramConfig: {
      silhouette: 'skull-sagittal',
      viewPlane: 'sagittal',
      crTarget: { x: 8, y: -14 },
      baselineLabel: '2 Fingers Above EAM',
    },
  },
];
