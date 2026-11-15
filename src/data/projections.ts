import type { Projection } from '../types/projection';

import chestPaImg from '../../views_diagrams/Chest/Chest_PA.png';
import chestLateralImg from '../../views_diagrams/Chest/Chest_lateral.png';
import chestLateralDecuImg from '../../views_diagrams/Chest/Chest_lateral_decu.png';
import chestApicalLordoticImg from '../../views_diagrams/Chest/Chest_apical_lordotic.png';
import chestApicalLordoticTubeTiltImg from '../../views_diagrams/Chest/Chest_apical_lordotic_tubetilt.png';

import abdomenApImg from '../../views_diagrams/Abdomen/AbdomenAP.png';
import kubImg from '../../views_diagrams/Abdomen/KUB.png';

import kneeApImg from '../../views_diagrams/lower_limbs/Knee_AP.png';
import kneeLatImg from '../../views_diagrams/lower_limbs/Knee_lat.png';

import pelvisApImg from '../../views_diagrams/Pelvis & hips/Pelvis_AP.png';
import unilateralHipImg from '../../views_diagrams/Pelvis & hips/unilateral_hip.png';
import lateralHipImg from '../../views_diagrams/Pelvis & hips/lateral_hip.png';

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
      'Lung apices and至少 upper half of lung fields clearly demonstrated',
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
      respiration: 'Expose at end of full inspiration (pushes kidneys inferiorly into FOV) or arrested expiration',
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
  // UPPER LIMBS (views_diagrams/upper_limbs — kept unchanged)
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
      crEntryPoint: 'Iliac crest (L4–L5 interspace), ~5 cm anterior to posterior skin surface',
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
      'Paget disease, multiple myeloma, or顱骨 osteoblastic/osteolytic lesions',
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
