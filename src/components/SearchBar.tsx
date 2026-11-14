import React from 'react';
import { Crosshair, Search, WifiOff, X } from 'lucide-react';
import type { AnatomicalRegion } from '../types/projection';

interface SearchBarProps {
  isOnline: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  regions: readonly ('All' | AnatomicalRegion)[];
  selectedRegion: 'All' | AnatomicalRegion;
  onSelectRegion: (region: 'All' | AnatomicalRegion) => void;
  matchCount: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  isOnline,
  query,
  onQueryChange,
  regions,
  selectedRegion,
  onSelectRegion,
  matchCount,
}) => {
  return (
    <div className="space-y-2">
      {/* Slim Single-Line Top Bar: Logo + Offline Badge + Search Input */}
      <div className="flex items-center gap-2 min-w-0">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Crosshair className="w-4 h-4" />
          </div>
          <span className="text-sm sm:text-base font-bold tracking-tight text-slate-50">
            RadAtlas
          </span>
          <span
            className={`inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium border ${
              isOnline
                ? 'bg-emerald-950/70 text-emerald-300 border-emerald-700/60'
                : 'bg-emerald-950/90 text-emerald-300 border-emerald-500/60'
            }`}
            title={isOnline ? 'Cached for 100% Offline Use' : 'Running 100% Offline'}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <WifiOff className="w-3 h-3 hidden sm:inline" />
            <span>Offline</span>
          </span>
        </div>

        {/* Search Input */}
        <div className="relative flex-1 w-0 min-w-0">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            size={1}
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search projection, alias..."
            aria-label="Search radiographic projections"
            className="w-full min-w-0 rounded-lg bg-slate-900 border border-slate-800 pl-8 pr-11 sm:pr-16 py-1.5 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition-colors"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
              {matchCount}
            </span>
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                aria-label="Clear search"
                className="p-0.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Single Horizontally Scrollable Row of Anatomical Region Filter Pills */}
      <div
        className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar"
        role="tablist"
        aria-label="Filter by anatomical region"
      >
        {regions.map((region) => {
          const isActive = selectedRegion === region;
          return (
            <button
              key={region}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectRegion(region)}
              className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium border transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/50'
                  : 'bg-slate-900/70 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {region}
            </button>
          );
        })}
      </div>
    </div>
  );
};
