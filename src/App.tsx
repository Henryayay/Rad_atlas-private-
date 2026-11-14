import React, { useEffect, useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Crosshair,
  MessageSquare,
  Radiation,
  ShieldAlert,
  Sliders,
  WifiOff,
  Wrench,
} from 'lucide-react';
import type { Projection } from './types/projection';

const SAMPLE_PROJECTION: Projection = {
  id: 'chest-pa-erect',
  name: 'Chest — PA Erect',
  aliases: ['CXR PA', 'Posteroanterior Chest'],
  anatomicalRegion: 'Chest & Thorax',
  clinicalIndications: [
    'Pneumonia, pleural effusion, or pneumothorax',
    'Cardiomegaly and heart failure evaluation',
    'Pre-operative baseline thoracic assessment',
  ],
  equipment: {
    sid: 180,
    cassetteSize: '35 x 43 cm',
    orientation: 'Vertical',
    grid: true,
    markerType: 'Prone',
    accessories: ['Erect chest Bucky stand', 'Lead gonad/abdominal wrap shield'],
  },
  safety: {
    requiresLmpCheck: true,
    gonadShield: true,
    removableArtifacts: [
      'Necklaces and chains',
      'Bra with metal underwire/hooks',
      'Buttoned shirts and pocket items',
      'ECG leads (if clinically permissible)',
    ],
  },
  positioning: {
    patientPosition: 'Erect, anterior chest pressed firmly against vertical IR',
    partRotationAngle: '0° (MSP perpendicular to IR; roll shoulders anteriorly)',
    crAngle: '0° (Horizontal beam, perpendicular to IR)',
    crEntryPoint: 'T7 spinous process (inferior angle of scapula) at MSP',
    collimation: 'Superior to C7/lung apices, inferior to bilateral costophrenic angles, lateral to skin margins',
    respiration: 'Expose at end of 2nd full inspiration',
  },
  exposure: {
    baselineKvp: 120,
    baselineMas: 2.5,
    modificationNotes: [
      'Reduce kVp by 5–8 or mAs by 30–50% for severe emphysema/COPD',
      'Increase mAs by 25–50% for large pleural effusion or pulmonary edema',
    ],
  },
  cantoneseCues: {
    positioning: '心口貼實塊板，雙手叉腰，膊頭向前傾貼實塊板。',
    breathing: '深深吸一啖氣……再吸多啖氣，忍住唔好唞住！',
  },
  imageCriteria: [
    'Both lung apices and bilateral costophrenic angles included in full',
    'No rotation: medial ends of clavicles equidistant from spinous processes',
    'Scapulae rotated laterally clear of the lung fields',
    '10 posterior ribs visible above the diaphragm (adequate inspiration)',
    'Faint visualization of thoracic intervertebral spaces through cardiac shadow',
  ],
  troubleshooting: [
    {
      visualError: 'Right sternoclavicular (SC) joint is further from the spine than the left SC joint',
      anatomicalCause: 'Patient is rotated into a slight RAO position (right anterior thorax closer to IR)',
      correctionAction: 'Rotate the left shoulder slightly forward toward the vertical detector until MSP is perpendicular',
      angleRotationAdjustment: 'Counter-rotate torso ~5–10° toward left anterior aspect until SC joints are symmetric',
    },
    {
      visualError: 'Medial borders of scapulae superimpose upper lateral lung fields',
      anatomicalCause: 'Shoulders not rolled anteriorly enough or elbows abducted backward',
      correctionAction: 'Place dorsum of hands low on hips and gently roll both shoulders and elbows forward against the IR',
      angleRotationAdjustment: 'Increase anterior shoulder protraction by 15–20° without elevating the clavicles',
    },
  ],
};

export const App: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Clinical Console Header */}
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Crosshair className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold tracking-tight text-slate-50">
                  RAD ATLAS
                </h1>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                  PWA v1.0
                </span>
              </div>
              <p className="text-xs text-slate-400">
                100% Offline Dark-Mode Radiographic Positioning &amp; Technique Console
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                isOnline
                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                  : 'bg-amber-950/60 text-amber-300 border-amber-800/60'
              }`}
            >
              <WifiOff className="w-3.5 h-3.5" />
              {isOnline ? 'Offline-Ready Cached' : 'Offline Mode Active'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6 space-y-6">
        {/* Active Projection Overview Card */}
        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                {SAMPLE_PROJECTION.anatomicalRegion}
              </span>
              <h2 className="text-xl font-bold text-slate-50 mt-0.5">
                {SAMPLE_PROJECTION.name}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Aliases: {SAMPLE_PROJECTION.aliases.join(' • ')}
              </p>
            </div>
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2">
              <div className="text-center">
                <div className="text-[10px] font-mono uppercase text-slate-400">kVp</div>
                <div className="text-lg font-bold font-mono text-amber-400">
                  {SAMPLE_PROJECTION.exposure.baselineKvp}
                </div>
              </div>
              <div className="h-7 w-px bg-slate-800" />
              <div className="text-center">
                <div className="text-[10px] font-mono uppercase text-slate-400">mAs</div>
                <div className="text-lg font-bold font-mono text-cyan-400">
                  {SAMPLE_PROJECTION.exposure.baselineMas}
                </div>
              </div>
              <div className="h-7 w-px bg-slate-800" />
              <div className="text-center">
                <div className="text-[10px] font-mono uppercase text-slate-400">SID</div>
                <div className="text-lg font-bold font-mono text-emerald-400">
                  {SAMPLE_PROJECTION.equipment.sid} cm
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Equipment */}
            <div className="rounded-lg bg-slate-950/70 border border-slate-800/80 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Sliders className="w-4 h-4" />
                Equipment Setup
              </div>
              <dl className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <dt className="text-slate-400">Cassette Size</dt>
                  <dd className="font-mono text-slate-100">{SAMPLE_PROJECTION.equipment.cassetteSize}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Orientation</dt>
                  <dd className="font-mono text-slate-100">{SAMPLE_PROJECTION.equipment.orientation}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Grid</dt>
                  <dd className="font-mono text-slate-100">{SAMPLE_PROJECTION.equipment.grid ? 'Yes (Grid)' : 'No (Non-Grid)'}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Marker Type</dt>
                  <dd className="font-mono text-slate-100">{SAMPLE_PROJECTION.equipment.markerType}</dd>
                </div>
              </dl>
            </div>

            {/* Safety */}
            <div className="rounded-lg bg-slate-950/70 border border-slate-800/80 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <ShieldAlert className="w-4 h-4" />
                Radiation Safety &amp; Artifacts
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/60 text-amber-300">
                  LMP Check: {SAMPLE_PROJECTION.safety.requiresLmpCheck ? 'Required' : 'N/A'}
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-800/60 text-cyan-300">
                  Gonad Shield: {SAMPLE_PROJECTION.safety.gonadShield ? 'Yes' : 'No'}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                <span className="text-slate-400">Removable Artifacts: </span>
                {SAMPLE_PROJECTION.safety.removableArtifacts.join(', ')}
              </p>
            </div>

            {/* Positioning */}
            <div className="rounded-lg bg-slate-950/70 border border-slate-800/80 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <Activity className="w-4 h-4" />
                Positioning &amp; Central Ray
              </div>
              <ul className="text-xs space-y-1.5 text-slate-300">
                <li><strong className="text-slate-400">Patient:</strong> {SAMPLE_PROJECTION.positioning.patientPosition}</li>
                <li><strong className="text-slate-400">Part Rotation:</strong> {SAMPLE_PROJECTION.positioning.partRotationAngle}</li>
                <li><strong className="text-slate-400">CR Angle:</strong> {SAMPLE_PROJECTION.positioning.crAngle}</li>
                <li><strong className="text-slate-400">CR Entry:</strong> {SAMPLE_PROJECTION.positioning.crEntryPoint}</li>
                <li><strong className="text-slate-400">Respiration:</strong> {SAMPLE_PROJECTION.positioning.respiration}</li>
              </ul>
            </div>

            {/* Cantonese Patient Cues */}
            {SAMPLE_PROJECTION.cantoneseCues && (
              <div className="rounded-lg bg-slate-950/70 border border-slate-800/80 p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                  <MessageSquare className="w-4 h-4" />
                  Cantonese Patient Cues (廣東話指令)
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block">Positioning (擺位):</span>
                    <p className="text-sm font-medium text-slate-100 mt-0.5">
                      「{SAMPLE_PROJECTION.cantoneseCues.positioning}」
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Breathing (呼吸):</span>
                    <p className="text-sm font-medium text-amber-300 mt-0.5">
                      「{SAMPLE_PROJECTION.cantoneseCues.breathing}」
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Image Criteria & Troubleshooting */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="rounded-lg bg-slate-950/70 border border-slate-800/80 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                Diagnostic Image Criteria
              </div>
              <ul className="text-xs space-y-1.5 text-slate-300 list-disc list-inside">
                {SAMPLE_PROJECTION.imageCriteria.map((criterion, idx) => (
                  <li key={idx}>{criterion}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-slate-950/70 border border-slate-800/80 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
                <Wrench className="w-4 h-4" />
                Repeat / Positioning Troubleshooting
              </div>
              <div className="space-y-2.5">
                {SAMPLE_PROJECTION.troubleshooting.map((item, idx) => (
                  <div key={idx} className="text-xs border-l-2 border-rose-500/60 pl-2.5 space-y-0.5">
                    <div className="font-semibold text-rose-300">{item.visualError}</div>
                    <div className="text-slate-400">Cause: {item.anatomicalCause}</div>
                    <div className="text-emerald-300">Fix: {item.correctionAction}</div>
                    <div className="font-mono text-[11px] text-cyan-300">
                      Adjustment: {item.angleRotationAdjustment}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 py-3 px-4 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
        <Radiation className="w-3.5 h-3.5 text-amber-500/80" />
        <span>Rad Atlas • 100% Offline Dark-Mode PWA • Schema Verified (`src/types/projection.ts`)</span>
      </footer>
    </div>
  );
};

export default App;
