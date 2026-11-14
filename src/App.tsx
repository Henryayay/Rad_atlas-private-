import React, { useEffect, useMemo, useState } from 'react';
import { PROJECTIONS } from './data/projections';
import type { AnatomicalRegion, Projection } from './types/projection';
import { SearchBar } from './components/SearchBar';
import { ProjectionViewCard } from './components/ProjectionViewCard';

const REGIONS: readonly ('All' | AnatomicalRegion)[] = [
  'All',
  'Chest & Thorax',
  'Abdomen',
  'Upper Extremity',
  'Shoulder Girdle',
  'Lower Extremity',
  'Pelvic Girdle',
  'Cervical Spine',
  'Thoracic & Lumbar Spine',
  'Skull & Facial Bones',
];

export const App: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [query, setQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<'All' | AnatomicalRegion>('All');
  const [selectedId, setSelectedId] = useState<string>(PROJECTIONS[0]?.id ?? '');

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

  const filteredProjections = useMemo<Projection[]>(() => {
    const q = query.trim().toLowerCase();
    return PROJECTIONS.filter((proj) => {
      const matchesRegion =
        selectedRegion === 'All' || proj.anatomicalRegion === selectedRegion;
      if (!matchesRegion) return false;
      if (!q) return true;

      return (
        proj.name.toLowerCase().includes(q) ||
        proj.anatomicalRegion.toLowerCase().includes(q) ||
        proj.aliases.some((alias) => alias.toLowerCase().includes(q)) ||
        proj.clinicalIndications.some((ind) => ind.toLowerCase().includes(q))
      );
    });
  }, [query, selectedRegion]);

  const activeProjection = useMemo<Projection | null>(() => {
    if (filteredProjections.length === 0) return null;
    return (
      filteredProjections.find((p) => p.id === selectedId) ?? filteredProjections[0]
    );
  }, [filteredProjections, selectedId]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col overflow-x-clip">
      {/* Slim Single-Line Top Bar + Scrollable Region Filter Pills */}
      <header className="sticky top-0 z-30 w-full overflow-x-clip border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
        <div className="max-w-7xl w-full mx-auto px-3 sm:px-5 py-2.5 min-w-0">
          <SearchBar
            isOnline={isOnline}
            query={query}
            onQueryChange={setQuery}
            regions={REGIONS}
            selectedRegion={selectedRegion}
            onSelectRegion={setSelectedRegion}
            matchCount={filteredProjections.length}
          />
        </div>
      </header>

      {/* Main Console Workspace */}
      <main className="flex-1 min-w-0 max-w-7xl w-full mx-auto px-3 sm:px-5 py-3.5 space-y-3.5">
        {/* Compact Projection Selector Strip */}
        {filteredProjections.length > 0 && (
          <div
            className="flex items-center gap-2 overflow-x-auto pb-0.5 no-scrollbar"
            aria-label="Matching projections"
          >
            {filteredProjections.map((proj) => {
              const isSelected = activeProjection?.id === proj.id;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setSelectedId(proj.id)}
                  className={`shrink-0 text-left px-3 py-1.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-slate-800 border-cyan-500/60 text-slate-50 shadow-sm'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-semibold whitespace-nowrap">
                    {proj.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                    {proj.exposure.baselineKvp} kVp · {proj.exposure.baselineMas} mAs · {proj.equipment.sid} cm
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Two-Column Split Projection View or Empty State */}
        {activeProjection ? (
          <ProjectionViewCard projection={activeProjection} />
        ) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-10 text-center space-y-2">
            <p className="text-sm font-semibold text-slate-200">
              No matching radiographic projections found
            </p>
            <p className="text-xs text-slate-400">
              Try searching by another projection name, alias (e.g. CXR, KUB, Towne), or clear the region filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedRegion('All');
              }}
              className="mt-2 inline-flex items-center px-3 py-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 text-xs font-medium hover:bg-cyan-500/25"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
