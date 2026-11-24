import React, { useState, useEffect, useRef } from 'react';
import { Search, X, PlayCircle, ArrowRight } from 'lucide-react';
import { BRANDS } from '../data/brandsData';

interface QuickBrandSearchModalProps {
  open: boolean;
  onClose: () => void;
  onPickBrand: (slug: string) => void;
}

export const QuickBrandSearchModal: React.FC<QuickBrandSearchModalProps> = ({
  open,
  onClose,
  onPickBrand,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const matches = BRANDS.filter((b) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      b.name.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      (b.font?.family.toLowerCase().includes(q) ?? false) ||
      (b.voiceModel?.toLowerCase().includes(q) ?? false)
    );
  }).slice(0, 12);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 bg-black/75 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-white/15 bg-[#0F131D] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
          <Search className="w-4 h-4 text-[#FF7D5F]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to any of 67 brands (e.g. ColosBaby, Betadine, Gillette, Olay, Rohto)..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto divide-y divide-white/[0.06]">
          {matches.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400">No matching brands found.</div>
          ) : (
            matches.map((b) => (
              <button
                key={b.slug}
                onClick={() => {
                  onPickBrand(b.slug);
                  onClose();
                }}
                className="w-full px-4 py-3 text-left hover:bg-white/[0.05] flex items-center justify-between gap-3 transition cursor-pointer"
              >
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">{b.name}</div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {b.category}
                    {b.font?.family ? ` · ${b.font.family}` : ''}
                    {b.voiceModel ? ` · ${b.voiceModel}` : ''}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0">
                  {b.refVideo && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 text-[10px]">
                      <PlayCircle className="w-3 h-3" /> Ref
                    </span>
                  )}
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
