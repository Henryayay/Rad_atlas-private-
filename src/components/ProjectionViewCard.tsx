import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Crosshair,
  MessageSquare,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Wrench,
} from 'lucide-react';
import type { Projection } from '../types/projection';
import { BeamDiagramSVG } from './BeamDiagramSVG';

interface ProjectionViewCardProps {
  projection: Projection;
}

type ActiveTab = 'positioning-cr' | 'criteria-safety' | 'fix-image';

function formatCompactCassette(cassetteSize: string): string {
  return cassetteSize
    .replace(/\s*x\s*/gi, '×')
    .replace(/\s*cm$/i, '')
    .trim();
}

export const ProjectionViewCard: React.FC<ProjectionViewCardProps> = ({ projection }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('positioning-cr');
  const [traumaMode, setTraumaMode] = useState<boolean>(false);
  const [selectedFixIndex, setSelectedFixIndex] = useState<number | null>(null);

  // Reset active troubleshooting highlight when switching projections
  useEffect(() => {
    setSelectedFixIndex(null);
  }, [projection.id]);

  const activeTroubleshooting =
    selectedFixIndex !== null ? projection.troubleshooting[selectedFixIndex] ?? null : null;

  const modificationNotesList = Array.isArray(projection.exposure.modificationNotes)
    ? projection.exposure.modificationNotes
    : [projection.exposure.modificationNotes];

  const effectiveSid =
    traumaMode && projection.equipment.sid > 120
      ? '100–120 cm'
      : `${projection.equipment.sid} cm`;

  const effectiveOrientation =
    traumaMode && projection.equipment.orientation === 'Vertical'
      ? 'Horizontal'
      : projection.equipment.orientation;

  const effectiveMarker = traumaMode ? 'Supine' : projection.equipment.markerType;

  const effectivePatientPos = traumaMode
    ? `Trauma / Supine: Maintain supine immobilization (avoid forced rotation). Adapted from: ${projection.positioning.patientPosition}`
    : projection.positioning.patientPosition;

  return (
    <section className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[42%_minmax(0,1fr)] gap-4 lg:gap-5 items-start">
      {/* LEFT COLUMN (42% width, sticky on tablet/desktop) */}
      <div className="md:sticky md:top-[104px] space-y-3 min-w-0 w-full">
        <BeamDiagramSVG
          projection={projection}
          traumaMode={traumaMode}
          activeTroubleshooting={activeTroubleshooting}
          onClearTroubleshooting={() => setSelectedFixIndex(null)}
        />

        {/* Compact 2x2 Spec Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-slate-900/90 border border-slate-800 px-3 py-2.5 min-w-0">
            <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
              SID
            </div>
            <div className="text-xs sm:text-sm font-bold font-mono text-emerald-300 mt-0.5 truncate">
              {effectiveSid}
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/90 border border-slate-800 px-3 py-2.5 min-w-0">
            <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Cassette &amp; Orient.
            </div>
            <div className="text-xs sm:text-sm font-bold font-mono text-sky-300 mt-0.5 truncate">
              {formatCompactCassette(projection.equipment.cassetteSize)} {effectiveOrientation}
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/90 border border-slate-800 px-3 py-2.5 min-w-0">
            <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Grid &amp; Marker
            </div>
            <div className="text-xs sm:text-sm font-bold font-mono text-slate-100 mt-0.5 truncate">
              {projection.equipment.grid ? 'Grid ON' : 'Non-Grid'} • {effectiveMarker}
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/90 border border-slate-800 px-3 py-2.5 min-w-0">
            <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Exposure
            </div>
            <div className="text-xs sm:text-sm font-bold font-mono text-amber-300 mt-0.5 truncate">
              {projection.exposure.baselineKvp} kVp / {projection.exposure.baselineMas} mAs
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN (58% width) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/75 shadow-xl overflow-hidden min-w-0">
        {/* Projection Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 space-y-3 bg-slate-900">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="space-y-1 min-w-0">
              <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                {projection.anatomicalRegion}
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-50 tracking-tight leading-snug">
                {projection.name}
              </h1>
              {projection.aliases.length > 0 && (
                <p className="text-xs text-slate-400 truncate">
                  {projection.aliases.join(' · ')}
                </p>
              )}
            </div>

            {/* Prominent Action/Alert Toggle Pills */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {projection.safety.requiresLmpCheck && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold bg-amber-950/75 text-amber-300 border border-amber-500/50">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  28-Day LMP Check
                </span>
              )}

              <button
                type="button"
                role="switch"
                aria-checked={traumaMode}
                onClick={() => setTraumaMode((prev) => !prev)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-semibold transition-all ${
                  traumaMode
                    ? 'bg-amber-500/15 text-amber-200 border-amber-500/60 shadow-sm shadow-amber-950/50'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <Stethoscope
                  className={`w-3.5 h-3.5 ${traumaMode ? 'text-amber-400' : 'text-slate-400'}`}
                />
                <span>Trauma / Supine Mode</span>
                <span
                  className={`w-7 h-4 rounded-full p-0.5 transition-colors flex items-center ${
                    traumaMode ? 'bg-amber-500 justify-end' : 'bg-slate-700 justify-start'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-slate-950 block" />
                </span>
              </button>
            </div>
          </div>

          {/* Clinical Indications */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="font-semibold text-slate-400 mr-0.5">Indications:</span>
            {projection.clinicalIndications.map((ind, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300"
              >
                {ind}
              </span>
            ))}
          </div>

          {/* 3 Clean Console Tabs */}
          <div className="grid grid-cols-3 gap-1.5 pt-1" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'positioning-cr'}
              onClick={() => setActiveTab('positioning-cr')}
              className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                activeTab === 'positioning-cr'
                  ? 'bg-cyan-500/15 text-cyan-200 border-cyan-500/50'
                  : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Crosshair className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Positioning &amp; CR</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'criteria-safety'}
              onClick={() => setActiveTab('criteria-safety')}
              className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                activeTab === 'criteria-safety'
                  ? 'bg-emerald-500/15 text-emerald-200 border-emerald-500/50'
                  : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Criteria &amp; Safety</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'fix-image'}
              onClick={() => setActiveTab('fix-image')}
              className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all ${
                activeTab === 'fix-image'
                  ? 'bg-amber-500/15 text-amber-200 border-amber-500/50'
                  : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Fix This Image</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-900 border border-slate-700 text-slate-300 shrink-0">
                {projection.troubleshooting.length}
              </span>
            </button>
          </div>
        </div>

        {/* Tab Body */}
        <div className="p-4 sm:p-5">
          {activeTab === 'positioning-cr' && (
            <div className="space-y-4">
              {/* Positioning & CR Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-purple-400">
                    <UserCheck className="w-3.5 h-3.5" />
                    Patient &amp; Part Positioning
                  </div>
                  <dl className="space-y-2 text-xs">
                    <div>
                      <dt className="text-slate-400 text-[11px]">Patient Position</dt>
                      <dd className={traumaMode ? 'text-amber-200 font-medium mt-0.5' : 'text-slate-100 mt-0.5'}>
                        {effectivePatientPos}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-[11px]">Part Rotation</dt>
                      <dd className="text-slate-200 font-medium mt-0.5">
                        {projection.positioning.partRotationAngle}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-[11px]">Respiration</dt>
                      <dd className="text-amber-300 font-medium mt-0.5">
                        {projection.positioning.respiration}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-400">
                    <Crosshair className="w-3.5 h-3.5" />
                    Central Ray &amp; Collimation
                  </div>
                  <dl className="space-y-2 text-xs">
                    <div>
                      <dt className="text-slate-400 text-[11px]">CR Angle</dt>
                      <dd className="font-mono font-semibold text-sky-300 mt-0.5">
                        {projection.positioning.crAngle}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-[11px]">CR Entry Point</dt>
                      <dd className="text-slate-100 mt-0.5">
                        {projection.positioning.crEntryPoint}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-[11px]">Collimation Borders</dt>
                      <dd className="text-slate-300 mt-0.5">
                        {projection.positioning.collimation}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Exposure Modification Notes */}
              {modificationNotesList.length > 0 && (
                <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 px-3.5 py-2.5 text-xs text-slate-300 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                    Exposure &amp; Technique Notes
                  </div>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    {modificationNotesList.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Compact Cantonese Patient Cue Box */}
              {projection.cantoneseCues && (
                <div className="rounded-xl bg-fuchsia-950/20 border border-fuchsia-800/40 p-3.5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-fuchsia-300">
                    <MessageSquare className="w-3.5 h-3.5" />
                    廣東話擺位及呼吸指令 (Cantonese Patient Cues)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {projection.cantoneseCues.positioning && (
                      <div className="rounded-lg bg-slate-950/80 border border-slate-800/90 p-2.5">
                        <span className="text-[10px] font-mono text-slate-400 block">
                          擺位 Positioning
                        </span>
                        <p className="text-sm text-slate-100 font-medium mt-0.5 leading-snug">
                          「{projection.cantoneseCues.positioning}」
                        </p>
                      </div>
                    )}
                    {projection.cantoneseCues.breathing && (
                      <div className="rounded-lg bg-slate-950/80 border border-slate-800/90 p-2.5">
                        <span className="text-[10px] font-mono text-slate-400 block">
                          呼吸 Breathing
                        </span>
                        <p className="text-sm text-amber-300 font-medium mt-0.5 leading-snug">
                          「{projection.cantoneseCues.breathing}」
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'criteria-safety' && (
            <div className="space-y-4">
              {/* Diagnostic Image Criteria Checklist */}
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  Diagnostic Image Criteria
                </div>
                <ul className="space-y-2 text-xs text-slate-200">
                  {projection.imageCriteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Safety Badges, Accessories & Removable Artifacts */}
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <ShieldAlert className="w-4 h-4" />
                    Radiation Safety &amp; Artifacts
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
                        projection.safety.gonadShield
                          ? 'bg-cyan-950/70 text-cyan-300 border-cyan-700/60'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Gonad Shield: {projection.safety.gonadShield ? 'Indicated' : 'Omit (ROI)'}
                    </span>
                  </div>
                </div>

                {/* Removable Artifacts */}
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 mb-1.5">
                    Removable Artifacts
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {projection.safety.removableArtifacts.map((artifact, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200"
                      >
                        {artifact}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Positioning Accessories */}
                {projection.equipment.accessories.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                    <span className="text-slate-400 font-semibold">Accessories: </span>
                    {projection.equipment.accessories.join(', ')}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'fix-image' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-400">
                Click a troubleshooting card to highlight the adjusted beam angle or body rotation on the diagram.
              </p>
              <div className="space-y-2.5">
                {projection.troubleshooting.map((item, idx) => {
                  const isSelected = selectedFixIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedFixIndex(isSelected ? null : idx)}
                      aria-pressed={isSelected}
                      className={`w-full text-left rounded-xl p-3.5 border transition-all ${
                        isSelected
                          ? 'bg-amber-950/35 border-amber-500/80 ring-1 ring-amber-500/40 shadow-lg shadow-amber-950/30'
                          : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block">
                            Visual Error
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-rose-200 mt-0.5">
                            {item.visualError}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-start gap-2">
                          <div className="rounded-lg bg-slate-900/80 border border-slate-800 p-2.5">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block">
                              Cause
                            </span>
                            <p className="text-xs text-slate-300 mt-0.5">
                              {item.anatomicalCause}
                            </p>
                          </div>

                          <div className="hidden sm:flex items-center justify-center pt-4 text-slate-500">
                            <ArrowRight className="w-4 h-4" />
                          </div>

                          <div className="rounded-lg bg-emerald-950/25 border border-emerald-800/50 p-2.5">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block">
                              Exact Fix
                            </span>
                            <p className="text-xs text-emerald-100 mt-0.5">
                              {item.correctionAction}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-950/50 border border-amber-700/50 text-[11px] font-mono text-amber-300">
                            {item.angleRotationAdjustment}
                          </span>
                          <span
                            className={`text-[11px] font-medium ${
                              isSelected ? 'text-amber-300' : 'text-slate-400'
                            }`}
                          >
                            {isSelected ? 'Shown on diagram ✓' : 'Click to highlight'}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
