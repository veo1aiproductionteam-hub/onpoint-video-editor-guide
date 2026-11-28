import React from 'react';
import { Clapperboard, Users, Workflow, Sparkles, BookOpenCheck, Search, FolderOpen } from 'lucide-react';
import { BRAND_DRIVE_ROOT_URL } from '../data/brandsData';

export type NavTab = 'about' | 'process' | 'prompts' | 'brands';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenQuickSearch: () => void;
  brandCount: number;
  showAbout?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenQuickSearch,
  brandCount,
  showAbout = false,
}) => {
  const allTabs: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'about', label: 'About', icon: <Users className="w-4 h-4" /> },
    { id: 'process', label: 'Process', icon: <Workflow className="w-4 h-4" />, badge: '5 Steps' },
    { id: 'prompts', label: 'Prompt Layout', icon: <Sparkles className="w-4 h-4" />, badge: 'Image & Video' },
    { id: 'brands', label: 'Guideline of Brands', icon: <BookOpenCheck className="w-4 h-4" />, badge: `${brandCount}` },
  ];
  const tabs = showAbout ? allTabs : allTabs.filter((t) => t.id !== 'about');

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080A0F]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand Identity */}
        <button
          onClick={() => onSelectTab(showAbout ? 'about' : 'process')}
          className="flex items-center gap-3 text-left group cursor-pointer shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF5A36] to-amber-500 flex items-center justify-center shadow-lg shadow-[#FF5A36]/25 group-hover:scale-105 transition-transform">
            <Clapperboard className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white">
                ONPOINT
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#FF5A36]/15 text-[#FF7D5F] border border-[#FF5A36]/30">
                Video Team
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Video Editor Guide · 2026</p>
          </div>
        </button>

        {/* Primary 3-Category Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/10">
          {tabs.map((t) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onSelectTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF5A36] to-[#FF7648] text-white shadow-md shadow-[#FF5A36]/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {t.icon}
                <span>{t.label}</span>
                {t.badge && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                      isActive ? 'bg-black/20 text-white' : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {t.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenQuickSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-xs text-slate-300 hover:text-white transition cursor-pointer"
            title="Quick Jump to Brand (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Find brand...</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded bg-black/40 border border-white/10 text-slate-400">
              Ctrl K
            </kbd>
          </button>
          <a
            href={BRAND_DRIVE_ROOT_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/25 text-xs font-medium text-sky-300 transition"
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Drive 2026</span>
          </a>
        </div>
      </div>

      {/* Mobile Tab Strip */}
      <div className="md:hidden border-t border-white/10 px-3 py-2 flex items-center gap-1.5 overflow-x-auto bg-[#0B0E16]">
        {tabs.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onSelectTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                isActive
                  ? 'bg-[#FF5A36] text-white'
                  : 'bg-white/[0.04] text-slate-300'
              }`}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
