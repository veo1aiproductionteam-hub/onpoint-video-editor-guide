import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Mic,
  Type,
  BookOpen,
  Image as ImageIcon,
  PlayCircle,
  ExternalLink,
  Copy,
  Check,
  Download,
  FolderOpen,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Sun,
  Moon,
  Volume2,
  ChevronDown,
  Filter,
  ZoomIn,
  FileText,
  Info,
  Film,
  X,
  AlertTriangle,
  Layers,
  Clapperboard,
  Eye,
} from 'lucide-react';
import {
  BRANDS,
  VOICE_SAMPLES,
  BRAND_DRIVE_ROOT_URL,
  EDITOR_COLLECTION_ROOT_URL,
  VOICE_DRIVE_FOLDER_URL,
  type BrandItem,
  type BrandTemplateLink,
} from '../data/brandsData';
import type { LightboxPayload } from './ImageLightbox';

interface BrandGuidelineSectionProps {
  selectedBrandSlug: string;
  onSelectBrandSlug: (slug: string) => void;
  onOpenLightbox: (item: LightboxPayload) => void;
}

const CATEGORIES = [
  'All',
  'Beauty',
  'FMCG',
  'Household Electronic',
  'Mom & Baby',
  'Supplement',
  'F&B',
  'Fashion & Sport',
];

export const BrandGuidelineSection: React.FC<BrandGuidelineSectionProps> = ({
  selectedBrandSlug,
  onSelectBrandSlug,
  onOpenLightbox,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState<'all' | 'has-info' | 'has-assets' | 'has-video' | 'pending'>('all');
  const [logoBgLight, setLogoBgLight] = useState(true);
  const [assetBgLight, setAssetBgLight] = useState(true);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [showVoiceLibrary, setShowVoiceLibrary] = useState(false);
  const [activeVoicePreviewId, setActiveVoicePreviewId] = useState<string | null>(null);

  useEffect(() => {
    setShowVideoPlayer(false);
  }, [selectedBrandSlug]);

  const filteredBrands = useMemo(() => {
    return BRANDS.filter((b) => {
      if (categoryFilter !== 'All' && b.category !== categoryFilter) return false;
      if (statusFilter === 'has-info' && b.completeness !== 'complete') return false;
      if (statusFilter === 'has-assets' && b.assetImages.length === 0 && b.styleRefs.length === 0 && b.logos.length === 0) {
        return false;
      }
      if (statusFilter === 'has-video' && !b.refVideo) return false;
      if (statusFilter === 'pending' && b.completeness !== 'pending') return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const hit =
          b.name.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          (b.font?.family.toLowerCase().includes(q) ?? false) ||
          (b.voiceModel?.toLowerCase().includes(q) ?? false) ||
          (b.guidelineSummary?.toLowerCase().includes(q) ?? false) ||
          b.notes.some((n) => n.toLowerCase().includes(q));
        if (!hit) return false;
      }
      return true;
    });
  }, [categoryFilter, statusFilter, searchQuery]);

  const activeBrand: BrandItem = useMemo(() => {
    const exact = BRANDS.find((b) => b.slug === selectedBrandSlug);
    if (exact && (filteredBrands.length === 0 || filteredBrands.some((b) => b.slug === exact.slug))) {
      return exact;
    }
    return filteredBrands[0] || exact || BRANDS[0];
  }, [selectedBrandSlug, filteredBrands]);

  const copyHex = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch {
      // ignore
    }
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1600);
  };

  const completenessBadge = (c: BrandItem['completeness']) => {
    if (c === 'complete') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
          <CheckCircle2 className="w-3 h-3" /> Complete Info
        </span>
      );
    }
    if (c === 'partial') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
          <Info className="w-3 h-3" /> Partial Info
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-500/15 text-slate-300 border border-slate-500/30">
        <Clock className="w-3 h-3" /> Pending Info
      </span>
    );
  };

  const getLogoTopPercent = (y?: number) => {
    if (typeof y !== 'number') return 14;
    const pct = 18 - ((y - 1380) / 360) * 10;
    return Math.max(7, Math.min(22, Math.round(pct)));
  };

  const getLogoLeftPercent = (x?: number) => {
    if (typeof x !== 'number' || x === 0) return 50;
    const offset = Math.max(-32, Math.min(32, (x / 1080) * 80));
    return Math.round(50 + offset);
  };

  const templatePillMeta = (kind: BrandTemplateLink['kind']) => {
    switch (kind) {
      case 'intro':
      case 'outro':
        return {
          icon: <Clapperboard className="w-3.5 h-3.5 shrink-0" />,
          cls: 'bg-[#FF5A36]/15 hover:bg-[#FF5A36]/25 border-[#FF5A36]/35 text-[#FFB4A3]',
        };
      case 'font':
        return {
          icon: <Type className="w-3.5 h-3.5 shrink-0" />,
          cls: 'bg-amber-500/15 hover:bg-amber-500/25 border-amber-400/35 text-amber-200',
        };
      case 'doc':
        return {
          icon: <FileText className="w-3.5 h-3.5 shrink-0" />,
          cls: 'bg-violet-500/15 hover:bg-violet-500/25 border-violet-400/35 text-violet-200',
        };
      default:
        return {
          icon: <FolderOpen className="w-3.5 h-3.5 shrink-0" />,
          cls: 'bg-sky-500/15 hover:bg-sky-500/25 border-sky-400/35 text-sky-200',
        };
    }
  };

  const stats = useMemo(
    () => ({
      total: BRANDS.length,
      withRef: BRANDS.filter((b) => b.refVideo).length,
      full: BRANDS.filter((b) => b.completeness === 'complete').length,
      withAssets: BRANDS.filter((b) => b.assetImages.length > 0 || b.styleRefs.length > 0 || b.logos.length > 0).length,
    }),
    []
  );

  const isExternalUrl = (url?: string) => Boolean(url && /^https?:\/\//i.test(url));

  const hasVisualSection = activeBrand.styleRefs.length > 0 || activeBrand.assetImages.length > 0;

  return (
    <div className="space-y-6 pb-24">
      {/* Header & Brand Selector */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#121726] via-[#0D111C] to-[#090B10] p-6 sm:p-8 space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF7D5F]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Brand Library · {stats.total} Brands</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1.5">
              Guideline of Brands
            </h1>
            <p className="text-sm text-slate-300 mt-1.5 max-w-2xl">
              Select a brand to check its <strong className="text-white">Voice Model</strong>,{' '}
              <strong className="text-white">Font & Colors</strong>,{' '}
              <strong className="text-white">Brand Guideline & Templates</strong>,{' '}
              <strong className="text-white">Logos, Packshots & Style Refs</strong> from{' '}
              <a
                href={EDITOR_COLLECTION_ROOT_URL}
                target="_blank"
                rel="noreferrer"
                className="underline text-[#FF8C72] hover:text-[#FFB4A3]"
              >
                EDITOR COLLECTION
              </a>
              , and <strong className="text-amber-300">1 Best Reference Video</strong> from{' '}
              <a
                href={BRAND_DRIVE_ROOT_URL}
                target="_blank"
                rel="noreferrer"
                className="underline text-sky-400 hover:text-sky-300"
              >
                BRAND NEW 2026
              </a>
              .
            </p>
          </div>

          {/* Direct Brand Dropdown Selector */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <div className="relative min-w-[240px]">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                Select Brand ({BRANDS.length})
              </label>
              <div className="relative">
                <select
                  value={activeBrand.slug}
                  onChange={(e) => {
                    onSelectBrandSlug(e.target.value);
                    const chosen = BRANDS.find((b) => b.slug === e.target.value);
                    if (chosen) {
                      if (categoryFilter !== 'All' && chosen.category !== categoryFilter) setCategoryFilter('All');
                      if (statusFilter !== 'all') setStatusFilter('all');
                      if (searchQuery) setSearchQuery('');
                    }
                  }}
                  className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl bg-[#151B2B] border border-[#FF5A36]/50 hover:border-[#FF5A36] text-sm font-semibold text-white focus:outline-none cursor-pointer shadow-lg shadow-[#FF5A36]/10"
                >
                  {BRANDS.map((b) => (
                    <option key={b.slug} value={b.slug}>
                      {b.name} {b.assetImages.length > 0 || b.styleRefs.length > 0 ? '◆ ' : ''}{b.refVideo ? '★' : ''}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#FF8C72] pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="sm:self-end">
              <button
                onClick={() => setShowVoiceLibrary((v) => !v)}
                className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                  showVoiceLibrary
                    ? 'bg-violet-500 text-white border-violet-400'
                    : 'bg-violet-500/15 hover:bg-violet-500/25 text-violet-200 border-violet-400/35'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>VOICE MẪU ({VOICE_SAMPLES.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Summary Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/10 text-xs">
          <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-between">
            <span className="text-slate-400">Total Brands</span>
            <span className="font-mono font-bold text-white text-sm">{stats.total}</span>
          </div>
          <div className="px-3.5 py-2.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 flex items-center justify-between">
            <span className="text-emerald-300/90">Complete Info</span>
            <span className="font-mono font-bold text-emerald-300 text-sm">{stats.full}</span>
          </div>
          <div className="px-3.5 py-2.5 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 flex items-center justify-between">
            <span className="text-amber-300/90">With Visual Assets</span>
            <span className="font-mono font-bold text-amber-300 text-sm">{stats.withAssets}</span>
          </div>
          <div className="px-3.5 py-2.5 rounded-xl bg-sky-500/[0.06] border border-sky-500/20 flex items-center justify-between">
            <span className="text-sky-300/90">With Best Ref Video</span>
            <span className="font-mono font-bold text-sky-300 text-sm">{stats.withRef}</span>
          </div>
        </div>
      </section>

      {/* Collapsible VOICE MẪU Library */}
      {showVoiceLibrary && (
        <section className="rounded-3xl border border-violet-500/30 bg-[#0E111D] p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-violet-300">
                Shared Drive Audio Reference · BRAND NEW 2026 / VOICE MẪU
              </div>
              <h2 className="font-display text-lg font-bold text-white mt-0.5">
                Team Voice Models Library ({VOICE_SAMPLES.length} Samples)
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={VOICE_DRIVE_FOLDER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 border border-violet-400/35 text-xs font-medium text-violet-200 transition"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                <span>Open VOICE MẪU Folder</span>
              </a>
              <button
                onClick={() => setShowVoiceLibrary(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
                aria-label="Close voice library"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {VOICE_SAMPLES.map((vs) => {
              const isPlaying = activeVoicePreviewId === vs.id;
              return (
                <div
                  key={vs.id}
                  className="rounded-xl border border-white/10 bg-black/35 p-3 space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300">
                        {vs.group}
                      </span>
                      <div className="text-xs font-semibold text-white truncate mt-1">{vs.name}</div>
                    </div>
                    <a
                      href={vs.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white shrink-0"
                      title="Open audio in Drive"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  {isPlaying ? (
                    <iframe
                      src={vs.previewUrl}
                      className="w-full h-16 rounded-lg border border-white/10 bg-black"
                      allow="autoplay"
                      title={vs.name}
                    />
                  ) : (
                    <button
                      onClick={() => setActiveVoicePreviewId(vs.id)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-violet-500/25 border border-white/10 text-[11px] font-medium text-slate-200 transition cursor-pointer"
                    >
                      <PlayCircle className="w-3.5 h-3.5 text-violet-300" />
                      <span>Preview Voice</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Filters Toolbar */}
      <section className="rounded-2xl border border-white/10 bg-[#0D111A] p-4 space-y-3.5">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search brand, font (e.g. SVN-Gilroy, Montserrat), voice, or note (e.g. claim, AI)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#FF5A36]/60 focus:outline-none text-xs sm:text-sm text-white placeholder:text-slate-500"
            />
          </div>

          {/* Info Status Filter */}
          <div className="flex items-center gap-1.5 bg-black/30 p-1 rounded-xl border border-white/10 overflow-x-auto">
            <Filter className="w-3.5 h-3.5 text-slate-500 ml-2 shrink-0" />
            {(
              [
                { id: 'all', label: 'All' },
                { id: 'has-info', label: 'Complete Info' },
                { id: 'has-assets', label: 'Has Assets' },
                { id: 'has-video', label: 'Has Ref Video' },
                { id: 'pending', label: 'Pending' },
              ] as const
            ).map((st) => (
              <button
                key={st.id}
                onClick={() => setStatusFilter(st.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                  statusFilter === st.id
                    ? 'bg-sky-500/25 text-sky-200 border border-sky-400/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All' ? BRANDS.length : BRANDS.filter((b) => b.category === cat).length;
            const active = categoryFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border transition cursor-pointer ${
                  active
                    ? 'bg-white text-slate-950 border-white font-semibold'
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.08]'
                }`}
              >
                {cat}{' '}
                <span className={`font-mono text-[10px] ${active ? 'text-slate-600' : 'text-slate-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Master-Detail Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT: Scrollable Brand Directory */}
        <aside className="lg:col-span-4 rounded-3xl border border-white/10 bg-[#0D111A] overflow-hidden lg:sticky lg:top-20">
          <div className="px-4 py-3 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
            <span className="text-xs font-semibold text-white">
              Brands ({filteredBrands.length})
            </span>
            {(categoryFilter !== 'All' || statusFilter !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setCategoryFilter('All');
                  setStatusFilter('all');
                  setSearchQuery('');
                }}
                className="text-[11px] text-[#FF8C72] hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="max-h-[760px] overflow-y-auto divide-y divide-white/[0.05]">
            {filteredBrands.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400">
                No brands match your current filter.
              </div>
            ) : (
              filteredBrands.map((b) => {
                const isSelected = b.slug === activeBrand.slug;
                const hasPackshotsOrStyle = b.assetImages.length > 0 || b.styleRefs.length > 0;
                return (
                  <button
                    key={b.slug}
                    onClick={() => onSelectBrandSlug(b.slug)}
                    className={`w-full text-left px-4 py-3.5 transition flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#FF5A36]/20 via-[#FF5A36]/8 to-transparent border-l-2 border-l-[#FF5A36]'
                        : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-semibold truncate ${
                            isSelected ? 'text-white' : 'text-slate-200'
                          }`}
                        >
                          {b.name}
                        </span>
                        {b.completeness === 'complete' && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" title="Complete Info" />
                        )}
                        {b.completeness === 'partial' && (
                          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" title="Partial Info" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5 truncate">
                        <span>{b.category}</span>
                        {b.font?.family && (
                          <>
                            <span>·</span>
                            <span className="text-slate-300 truncate">{b.font.family}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {hasPackshotsOrStyle && (
                        <span
                          className="p-1 rounded bg-amber-500/15 text-amber-300"
                          title={`Visual Assets (${b.assetImages.length} packshots · ${b.styleRefs.length} style refs)`}
                        >
                          <Layers className="w-3 h-3" />
                        </span>
                      )}
                      {b.logos.length > 0 && (
                        <span
                          className="p-1 rounded bg-white/[0.06] text-slate-300"
                          title={`Has ${b.logos.length} Logo(s)`}
                        >
                          <ImageIcon className="w-3 h-3" />
                        </span>
                      )}
                      {b.refVideo && (
                        <span
                          className="p-1 rounded bg-sky-500/15 text-sky-300"
                          title="Has Best Ref Video"
                        >
                          <PlayCircle className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        {/* RIGHT: Brand Guideline Full Dossier */}
        <div className="lg:col-span-8 space-y-5">
          {/* Brand Title Banner */}
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#141A2B] via-[#0F1420] to-[#0B0E16] p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/10 text-slate-200">
                    {activeBrand.category}
                  </span>
                  {completenessBadge(activeBrand.completeness)}
                  {(activeBrand.assetImages.length > 0 || activeBrand.styleRefs.length > 0) && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      <Layers className="w-3 h-3" />
                      {activeBrand.assetImages.length + activeBrand.styleRefs.length} Visual Assets
                    </span>
                  )}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2.5">
                  {activeBrand.name}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-2">
                  <span>
                    Studio Archive:{' '}
                    <strong className="text-emerald-300 font-mono">{activeBrand.totalVideos} videos</strong>
                  </span>
                  {activeBrand.voiceModel && (
                    <span>
                      Voice: <strong className="text-violet-200">{activeBrand.voiceModel}</strong>
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {activeBrand.editorCollectionUrl && (
                  <a
                    href={activeBrand.editorCollectionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FF5A36]/15 hover:bg-[#FF5A36]/25 border border-[#FF5A36]/35 text-xs font-semibold text-[#FFB4A3] transition"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Asset Drive Folder</span>
                  </a>
                )}
                {activeBrand.driveFolderUrl && (
                  <a
                    href={activeBrand.driveFolderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/30 text-xs font-semibold text-sky-200 transition"
                  >
                    <FolderOpen className="w-3.5 h-3.5" />
                    <span>Video Archive</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* GRID: 1. Voice Model + 2. Font & Colors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 1. VOICE MODEL */}
            <div className="rounded-2xl border border-white/10 bg-[#0D111A] p-5 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-400/30 flex items-center justify-center text-violet-300">
                    <Mic className="w-4 h-4" />
                  </span>
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                    Voice Model
                  </h3>
                </div>

                {activeBrand.voiceModel ? (
                  <div className="p-3.5 rounded-xl bg-violet-500/10 border border-violet-500/25">
                    <div className="text-sm font-semibold text-white">{activeBrand.voiceModel}</div>
                    <p className="text-[11px] text-violet-200/80 mt-1">
                      {activeBrand.voiceModel.toLowerCase().includes('no voice') ||
                      activeBrand.voiceModel.toLowerCase().startsWith('none')
                        ? 'Visual / SFX-focused brand — do not add AI voiceover unless explicitly specified in the script.'
                        : 'Match vocal tone and pacing to the brand’s Best Reference Video below.'}
                    </p>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-dashed border-white/15">
                    <div className="text-xs font-semibold text-slate-300">Not specified yet</div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Confirm with the Video Team or preview available voices in the shared VOICE MẪU folder.
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={() => setShowVoiceLibrary(true)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/[0.04] hover:bg-violet-500/20 border border-white/10 text-xs font-medium text-violet-200 transition cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Browse Shared VOICE MẪU Samples</span>
              </button>
            </div>

            {/* 2. FONT & TYPOGRAPHY */}
            <div className="rounded-2xl border border-white/10 bg-[#0D111A] p-5 space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                    <Type className="w-4 h-4" />
                  </span>
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                    Font & Color Style
                  </h3>
                </div>
                {activeBrand.font?.downloadUrl && (
                  <a
                    href={activeBrand.font.downloadUrl}
                    {...(isExternalUrl(activeBrand.font.downloadUrl)
                      ? { target: '_blank', rel: 'noreferrer' }
                      : { download: true })}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 text-[11px] font-semibold text-amber-200 transition"
                  >
                    {isExternalUrl(activeBrand.font.downloadUrl) ? (
                      <ExternalLink className="w-3 h-3" />
                    ) : (
                      <Download className="w-3 h-3" />
                    )}
                    <span>Font</span>
                  </a>
                )}
              </div>

              {activeBrand.font ? (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-amber-500/[0.07] border border-amber-500/20">
                    <div className="text-[10px] font-mono uppercase text-amber-300">Font Family</div>
                    <div className="text-sm font-bold text-white mt-0.5">{activeBrand.font.family}</div>
                    {activeBrand.font.styleRule && (
                      <div className="text-xs text-slate-300 mt-1.5">
                        <strong className="text-slate-200">Style:</strong> {activeBrand.font.styleRule}
                      </div>
                    )}
                    {activeBrand.font.colorNote && (
                      <div className="text-xs text-slate-400 mt-1">{activeBrand.font.colorNote}</div>
                    )}
                  </div>

                  {activeBrand.font.colors && activeBrand.font.colors.length > 0 && (
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                        Brand Color Swatches (Click to Copy HEX)
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeBrand.font.colors.map((c) => (
                          <button
                            key={c.name + c.hex}
                            onClick={() => copyHex(c.hex)}
                            className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-black/40 hover:bg-white/[0.08] border border-white/10 text-[11px] transition cursor-pointer"
                            title={`Copy ${c.hex}`}
                          >
                            <span
                              className="w-4 h-4 rounded-md border border-white/25 shrink-0"
                              style={{ backgroundColor: c.hex }}
                            />
                            <span className="text-slate-200">{c.name}</span>
                            <span className="font-mono text-slate-400">{c.hex}</span>
                            {copiedHex === c.hex ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3 text-slate-500" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-dashed border-white/15">
                  <div className="text-xs font-semibold text-slate-300">Font info not updated yet</div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Refer to the brand’s Best Reference Video below for typography reference.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 3. BRAND GUIDELINE, MANDATORY NOTES & TEMPLATES */}
          <div className="rounded-2xl border border-white/10 bg-[#0D111A] p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                  <BookOpen className="w-4 h-4" />
                </span>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                  Brand Guideline & Templates
                </h3>
              </div>
              {(activeBrand.guidelineDocs.length > 0 || activeBrand.templates.length > 0) && (
                <span className="text-[11px] font-mono text-emerald-300">
                  {activeBrand.guidelineDocs.length + activeBrand.templates.length} Resource Link(s)
                </span>
              )}
            </div>

            {activeBrand.guidelineSummary ? (
              <p className="text-sm text-slate-200 leading-relaxed">{activeBrand.guidelineSummary}</p>
            ) : (
              <p className="text-xs text-slate-400 italic">
                Detailed written brand guideline has not been added yet. Use the Best Reference Video and asset folder
                below as visual reference.
              </p>
            )}

            {/* Mandatory Editor Notes & Claims */}
            {activeBrand.notes.length > 0 && (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.07] p-4 space-y-2">
                <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Important Editor Notes & Mandatory Claims</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-50/95 leading-relaxed">
                  {activeBrand.notes.map((n, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Official Docs */}
            {activeBrand.guidelineDocs.length > 0 && (
              <div className="flex flex-wrap gap-2.5 pt-1">
                {activeBrand.guidelineDocs.map((doc) =>
                  doc.type === 'image' ? (
                    <button
                      key={doc.label}
                      onClick={() =>
                        onOpenLightbox({
                          src: doc.url,
                          title: `${activeBrand.name} — ${doc.label}`,
                          downloadName: `${activeBrand.slug}-guideline.jpg`,
                        })
                      }
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 text-xs font-semibold text-emerald-200 transition cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Preview {doc.label}</span>
                    </button>
                  ) : (
                    <a
                      key={doc.label}
                      href={doc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 text-xs font-semibold text-emerald-200 transition"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{doc.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )
                )}
              </div>
            )}

            {/* Intro / Outro Templates, Fonts & Cloud Asset Folders */}
            {activeBrand.templates.length > 0 && (
              <div className="space-y-2 pt-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Templates, Fonts & Source Repositories
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeBrand.templates.map((tpl) => {
                    const meta = templatePillMeta(tpl.kind);
                    return (
                      <a
                        key={tpl.label + tpl.url}
                        href={tpl.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition ${meta.cls}`}
                      >
                        {meta.icon}
                        <span>{tpl.label}</span>
                        <ExternalLink className="w-3 h-3 opacity-75 shrink-0" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {(activeBrand.dos.length > 0 || activeBrand.donts.length > 0) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {activeBrand.dos.length > 0 && (
                  <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.06] p-4 space-y-2">
                    <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> DO — Visual Standards
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-200 leading-relaxed">
                      {activeBrand.dos.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeBrand.donts.length > 0 && (
                  <div className="rounded-xl border border-rose-500/25 bg-rose-500/[0.06] p-4 space-y-2">
                    <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" /> DON’T — Strict Avoids
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-200 leading-relaxed">
                      {activeBrand.donts.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-rose-400 mt-0.5">✕</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 4. LOGO & POSITION IN VIDEO */}
          <div className="rounded-2xl border border-white/10 bg-[#0D111A] p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#FF5A36]/20 border border-[#FF5A36]/35 flex items-center justify-center text-[#FF8C72]">
                  <ImageIcon className="w-4 h-4" />
                </span>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                  Logo & Position in Video
                </h3>
              </div>

              {activeBrand.logos.length > 0 && (
                <button
                  onClick={() => setLogoBgLight((v) => !v)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[11px] text-slate-300 cursor-pointer"
                >
                  {logoBgLight ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                  <span>{logoBgLight ? 'Dark Preview' : 'Light Preview'}</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              {/* CapCut Position Visualizer */}
              <div className="md:col-span-5 rounded-xl bg-black/35 border border-white/10 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    CapCut Logo Placement
                  </span>
                  {activeBrand.logoPosition.status === 'confirmed' && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      Confirmed
                    </span>
                  )}
                  {activeBrand.logoPosition.status === 'tbd' && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      Updating Later
                    </span>
                  )}
                  {activeBrand.logoPosition.status === 'na' && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-500/20 text-slate-300">
                      N/A
                    </span>
                  )}
                </div>

                {activeBrand.logoPosition.status === 'confirmed' ? (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-4">
                      <div className="w-16 aspect-[9/16] rounded-lg border border-white/20 bg-slate-900 relative shrink-0 overflow-hidden">
                        <div className="absolute inset-x-1 top-1 bottom-1 border border-dashed border-emerald-500/40 rounded" />
                        <div
                          className="absolute -translate-x-1/2 h-2.5 rounded-sm bg-[#FF5A36] shadow shadow-[#FF5A36]/50"
                          style={{
                            top: `${getLogoTopPercent(activeBrand.logoPosition.y)}%`,
                            left: `${getLogoLeftPercent(activeBrand.logoPosition.x)}%`,
                            width: activeBrand.logoPosition.size || '40%',
                          }}
                        />
                      </div>
                      <div className="space-y-1.5 text-xs">
                        <div>
                          <span className="text-slate-400">Scale / Size: </span>
                          <code className="text-white font-semibold">{activeBrand.logoPosition.size}</code>
                        </div>
                        <div>
                          <span className="text-slate-400">Location X: </span>
                          <code className="text-emerald-300 font-semibold">{activeBrand.logoPosition.x}</code>
                        </div>
                        <div>
                          <span className="text-slate-400">Location Y: </span>
                          <code className="text-emerald-300 font-semibold">{activeBrand.logoPosition.y}</code>
                        </div>
                      </div>
                    </div>
                    {activeBrand.logoPosition.note && (
                      <div className="text-[11px] text-slate-400 leading-snug pt-1 border-t border-white/[0.06]">
                        {activeBrand.logoPosition.note}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {activeBrand.logoPosition.note || 'Logo position in video will be updated later.'}
                  </div>
                )}
              </div>

              {/* Logo Gallery */}
              <div className="md:col-span-7">
                {activeBrand.logos.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-64 overflow-y-auto pr-1">
                    {activeBrand.logos.map((lg) => (
                      <div
                        key={lg.src}
                        className="group rounded-xl border border-white/10 overflow-hidden bg-black/30 flex flex-col"
                      >
                        <button
                          onClick={() =>
                            onOpenLightbox({
                              src: lg.src,
                              title: `${activeBrand.name} — ${lg.label}`,
                              downloadName: `${activeBrand.slug}-${lg.label.replace(/\s+/g, '_')}.png`,
                            })
                          }
                          className={`h-20 p-2.5 flex items-center justify-center cursor-zoom-in ${
                            logoBgLight ? 'bg-checker-light' : 'bg-checker-dark'
                          }`}
                        >
                          <img
                            src={lg.src}
                            alt={lg.label}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                          />
                        </button>
                        <div className="px-2 py-1.5 bg-[#121622] border-t border-white/10 flex items-center justify-between gap-1">
                          <span className="text-[10px] text-slate-300 truncate" title={lg.label}>
                            {lg.label}
                          </span>
                          <a
                            href={lg.src}
                            download
                            className="text-slate-400 hover:text-white shrink-0"
                            title="Download Logo"
                          >
                            <Download className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full min-h-[112px] rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-4 flex flex-col items-center justify-center text-center">
                    <ImageIcon className="w-5 h-5 text-slate-500 mb-1.5" />
                    <div className="text-xs font-medium text-slate-300">No logo files uploaded yet</div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Check the brand’s Asset Drive Folder or Reference Video for logo usage.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 5. BRAND ASSETS, PACKSHOTS & VISUAL STYLE REFERENCES */}
          {hasVisualSection && (
            <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-br from-[#141724] via-[#0D111A] to-[#0B0E16] p-5 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/35 flex items-center justify-center text-amber-300">
                    <Layers className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                      Brand Assets & Visual References
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Click any image to inspect full-size or download · Curated from EDITOR COLLECTION
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {activeBrand.assetImages.length > 0 && (
                    <button
                      onClick={() => setAssetBgLight((v) => !v)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[11px] text-slate-300 cursor-pointer"
                    >
                      {assetBgLight ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                      <span>{assetBgLight ? 'Dark BG' : 'Light BG'}</span>
                    </button>
                  )}
                  {activeBrand.editorCollectionUrl && (
                    <a
                      href={activeBrand.editorCollectionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 text-[11px] font-semibold text-amber-200 transition"
                    >
                      <FolderOpen className="w-3.5 h-3.5" />
                      <span>Full Raw Drive Folder</span>
                    </a>
                  )}
                </div>
              </div>

              {/* A. Typography, Color Matrix & AI Talent Style Refs */}
              {activeBrand.styleRefs.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300/90 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      Visual Style, Typography & Talent References ({activeBrand.styleRefs.length})
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {activeBrand.styleRefs.map((ref) => (
                      <div
                        key={ref.src}
                        className="group rounded-xl border border-white/10 overflow-hidden bg-black/40 flex flex-col"
                      >
                        <button
                          onClick={() =>
                            onOpenLightbox({
                              src: ref.src,
                              title: `${activeBrand.name} — ${ref.label}`,
                              downloadName: `${activeBrand.slug}-${ref.label.replace(/[^a-zA-Z0-9]+/g, '_')}.png`,
                            })
                          }
                          className="relative h-40 w-full bg-[#0A0D14] p-2 flex items-center justify-center overflow-hidden cursor-zoom-in"
                        >
                          <img
                            src={ref.src}
                            alt={ref.label}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain group-hover:scale-[1.03] transition-transform"
                          />
                          <span className="absolute top-2 right-2 p-1 rounded-md bg-black/70 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ZoomIn className="w-3.5 h-3.5" />
                          </span>
                        </button>
                        <div className="px-2.5 py-2 bg-[#121622] border-t border-white/10 flex items-center justify-between gap-2">
                          <span className="text-[11px] font-medium text-slate-200 truncate" title={ref.label}>
                            {ref.label}
                          </span>
                          <a
                            href={ref.src}
                            download
                            className="text-slate-400 hover:text-white shrink-0"
                            title="Download Reference"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* B. Curated Packshots, Characters, Icons & Elements */}
              {activeBrand.assetImages.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-sky-300/90 flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5" />
                      Packshots, Elements, Characters & Icons ({activeBrand.assetImages.length})
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {activeBrand.assetImages.map((img) => (
                      <div
                        key={img.src}
                        className="group rounded-xl border border-white/10 overflow-hidden bg-black/30 flex flex-col"
                      >
                        <button
                          onClick={() =>
                            onOpenLightbox({
                              src: img.src,
                              title: `${activeBrand.name} — ${img.label}`,
                              downloadName: `${activeBrand.slug}-${img.label.replace(/[^a-zA-Z0-9]+/g, '_')}.png`,
                            })
                          }
                          className={`relative h-32 p-2.5 flex items-center justify-center cursor-zoom-in ${
                            assetBgLight ? 'bg-checker-light' : 'bg-checker-dark'
                          }`}
                        >
                          <img
                            src={img.src}
                            alt={img.label}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                          />
                          <span className="absolute top-1.5 right-1.5 p-1 rounded-md bg-black/65 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ZoomIn className="w-3 h-3" />
                          </span>
                        </button>
                        <div className="px-2 py-1.5 bg-[#121622] border-t border-white/10 flex items-center justify-between gap-1.5">
                          <span className="text-[10px] text-slate-200 truncate" title={img.label}>
                            {img.label}
                          </span>
                          <a
                            href={img.src}
                            download
                            className="text-slate-400 hover:text-white shrink-0"
                            title="Download Asset"
                          >
                            <Download className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 6. BEST REFERENCE VIDEO */}
          <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-[#0F1626] via-[#0C111C] to-[#0A0E17] p-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/35 flex items-center justify-center text-sky-300">
                <Film className="w-4 h-4" />
              </span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                    Best Reference Video
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-400/30">
                    {activeBrand.refVideo?.path.startsWith('EDITOR COLLECTION')
                      ? 'CURATED DEMO · EDITOR COLLECTION'
                      : 'TOP 1 PICK · BRAND NEW 2026'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Single benchmark reference video selected for this brand’s style, pacing, and layout.
                </p>
              </div>
            </div>

            {activeBrand.refVideo ? (
              <div className="space-y-4">
                <div className="rounded-xl bg-black/40 border border-white/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-sm font-bold text-white truncate">
                        {activeBrand.refVideo.name}
                      </span>
                      {activeBrand.refVideo.sizeMb && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                          {activeBrand.refVideo.sizeMb} MB
                        </span>
                      )}
                      {activeBrand.refVideo.modified && (
                        <span className="text-[10px] font-mono text-slate-400">
                          Updated {activeBrand.refVideo.modified}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 truncate">
                      Drive Path:{' '}
                      {activeBrand.refVideo.path.startsWith('EDITOR COLLECTION')
                        ? activeBrand.refVideo.path
                        : `BRAND NEW 2026 / ${activeBrand.refVideo.path}`}
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-400">
                        Picked #1{activeBrand.refVideo.poolSize > 1 ? ` of ${activeBrand.refVideo.poolSize} videos` : ''}:
                      </span>
                      {activeBrand.refVideo.reasons.map((r) => (
                        <span
                          key={r}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-sky-500/15 text-sky-200 border border-sky-400/25"
                        >
                          <Sparkles className="w-2.5 h-2.5" />
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setShowVideoPlayer((v) => !v)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition cursor-pointer"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>{showVideoPlayer ? 'Hide Player' : 'Watch Preview'}</span>
                    </button>
                    <a
                      href={activeBrand.refVideo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 text-xs font-semibold text-white transition"
                    >
                      <span>Open Drive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {showVideoPlayer && (
                  <div className="rounded-2xl overflow-hidden border border-sky-400/30 bg-black">
                    <iframe
                      src={activeBrand.refVideo.previewUrl}
                      className="w-full h-[460px] bg-black"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      title={`Ref video: ${activeBrand.refVideo.name}`}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-white/15 bg-black/25 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-200">
                    No reference video found yet
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    This brand currently has no uploaded demo video inside BRAND NEW 2026 or EDITOR COLLECTION.
                  </p>
                </div>
                <a
                  href={BRAND_DRIVE_ROOT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold text-slate-200 shrink-0 transition"
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span>Check BRAND NEW 2026</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
