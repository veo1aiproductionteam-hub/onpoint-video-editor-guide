import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Film,
  Layers,
  ExternalLink,
  CheckCircle2,
  Users,
  Video,
  Wand2,
  Scissors,
  ClipboardList,
  SearchCheck,
} from 'lucide-react';
import {
  CORE_EDITORS,
  EXTENDED_TEAM,
  STUDIO_STATS,
  STUDIO_TOOLS,
  VIDEO_FORMATS,
} from '../data/teamAndProcessData';
import type { NavTab } from './Navbar';

interface AboutSectionProps {
  onNavigate: (tab: NavTab) => void;
  onJumpToProcessStep: (stepNumber: number) => void;
  onOpenBrandByName: (brandName: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onJumpToProcessStep,
  onOpenBrandByName,
}) => {
  const pipelinePreview = [
    {
      step: 1,
      title: 'Checklist & Script',
      desc: 'Locate your video code in Lark Master Tracker and open the linked Google Sheet script.',
      icon: <ClipboardList className="w-4 h-4" />,
      color: 'text-sky-300 bg-sky-500/15 border-sky-500/25',
    },
    {
      step: 2,
      title: 'Analyze & Assets',
      desc: 'Break down scenes, VO, supers & collect SKU packshots, logo, font, and ref video.',
      icon: <SearchCheck className="w-4 h-4" />,
      color: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/25',
    },
    {
      step: 3,
      title: 'Image · Nano Banana',
      desc: 'Use the Image Master Prompt in ChatGPT to craft & iterate 9:16 frames in FlowAI.',
      icon: <Wand2 className="w-4 h-4" />,
      color: 'text-amber-300 bg-amber-500/15 border-amber-500/25',
    },
    {
      step: 4,
      title: 'Video · Veo 3.1 Lite',
      desc: 'Animate approved frames in FlowAI using Veo 3.1 - Lite [Lower Priority].',
      icon: <Video className="w-4 h-4" />,
      color: 'text-violet-300 bg-violet-500/15 border-violet-500/25',
    },
    {
      step: 5,
      title: 'CapCut & Safe Zone',
      desc: 'Assemble clips, supers, VO, BGM & SFX, verify TikTok Safe Zone, and deliver.',
      icon: <Scissors className="w-4 h-4" />,
      color: 'text-[#FF7D5F] bg-[#FF5A36]/15 border-[#FF5A36]/30',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Studio Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#121726] via-[#0C101A] to-[#090B10] p-6 sm:p-10 lg:p-14">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF5A36]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A36]/15 border border-[#FF5A36]/30 text-xs font-medium text-[#FF8C72] mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OnPoint E-Commerce · Video Production Studio Guide 2026</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Crafting High-Converting{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] via-amber-400 to-sky-400">
              AI & Commercial Videos
            </span>{' '}
            at Scale.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Welcome to the official <strong className="text-white">OnPoint Video Team</strong> guide — uniting our
            5-stage AI production SOP (<code className="text-amber-300 text-sm">Nano Banana</code> +{' '}
            <code className="text-violet-300 text-sm">Veo 3.1 - Lite</code> +{' '}
            <code className="text-sky-300 text-sm">CapCut</code>) with ready-to-use Master Prompts and brand guidelines
            across all 67 partner brands.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('process')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF5A36] to-[#FF7648] hover:brightness-110 text-white text-sm font-semibold shadow-lg shadow-[#FF5A36]/25 transition cursor-pointer"
            >
              <span>Open Production Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('brands')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.11] border border-white/15 text-white text-sm font-semibold transition cursor-pointer"
            >
              <span>Explore Brand Guidelines</span>
            </button>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="relative z-10 mt-10 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STUDIO_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.07] px-4 py-4 hover:border-white/15 transition"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs font-semibold text-[#FF8C72] uppercase tracking-wider mt-1">{s.label}</div>
              <div className="text-xs text-slate-400 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Video Editor Squad */}
      <section className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF7D5F]">
            <Users className="w-3.5 h-3.5" />
            <span>Core Video Editors</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1.5">
            Meet the Video Production Team
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Our dedicated video editors drive end-to-end commercial storytelling, AI visual generation, motion craft, and
            brand consistency across 7 e-commerce categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {CORE_EDITORS.map((ed) => (
            <div
              key={ed.shortName}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#0E121B] overflow-hidden hover:border-white/25 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/30"
            >
              <div className="relative aspect-[4/4.3] bg-[#090B10] overflow-hidden">
                <img
                  src={ed.photo}
                  alt={ed.fullName}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B] via-[#0E121B]/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white bg-gradient-to-r ${ed.accent} shadow-md`}
                  >
                    {ed.level}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-display text-lg font-bold text-white leading-tight">{ed.fullName}</h3>
                  <p className="text-xs text-slate-300 mt-0.5">{ed.role}</p>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-sky-300">{ed.specialty}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{ed.bio}</p>
                </div>

                <div className="pt-3 border-t border-white/[0.07]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                    Featured Brands
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ed.highlights.map((brandName) => (
                      <button
                        key={brandName}
                        onClick={() => onOpenBrandByName(brandName)}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-white/[0.05] hover:bg-[#FF5A36]/20 border border-white/10 hover:border-[#FF5A36]/40 text-slate-300 hover:text-white transition cursor-pointer"
                      >
                        {brandName}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Extended Production Squad */}
      <section className="space-y-5">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-sky-400">
            Leadership · Content Creators · Support Squad
          </div>
          <h2 className="font-display text-2xl font-bold text-white mt-1">
            Cross-Functional Creative Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXTENDED_TEAM.map((m) => (
            <div
              key={m.name}
              className="flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-[#0E121B]/90 hover:border-white/20 transition"
            >
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-16 h-16 rounded-xl object-cover object-top border border-white/15 shrink-0"
                />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shrink-0">
                  <Film className="w-6 h-6 text-[#FF7D5F]" />
                </div>
              )}
              <div className="min-w-0">
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.06] text-sky-300 border border-white/10">
                  {m.group}
                </span>
                <h3 className="font-semibold text-white text-sm mt-1.5">{m.name}</h3>
                <p className="text-xs text-[#FF8C72] font-medium">{m.role}</p>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{m.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Pipeline Quick Preview */}
      <section className="rounded-3xl border border-white/10 bg-[#0D111A] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
              End-to-End Studio Workflow
            </div>
            <h2 className="font-display text-2xl font-bold text-white mt-1">
              How We Produce Every Video in 5 Stages
            </h2>
          </div>
          <button
            onClick={() => onNavigate('process')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7D5F] hover:text-white transition cursor-pointer"
          >
            <span>Open Full SOP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {pipelinePreview.map((p) => (
            <button
              key={p.step}
              onClick={() => onJumpToProcessStep(p.step)}
              className="group text-left p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#FF5A36]/50 transition flex flex-col justify-between gap-3 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg border ${p.color}`}>
                    {p.icon}
                  </span>
                  <span className="font-mono text-xs text-slate-500 group-hover:text-[#FF7D5F]">
                    0{p.step}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-white mt-3">{p.title}</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
              <div className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 group-hover:text-white">
                <span>Open stage</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Formats & Tool Stack */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-white/10 bg-[#0E121B] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-violet-400" />
            <h2 className="font-display text-lg font-bold text-white">Video Production Formats</h2>
          </div>
          <p className="text-xs text-slate-400">
            Standard video types delivered across TikTok, Shopee, Lazada, and brand social channels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {VIDEO_FORMATS.map((f) => (
              <div key={f.name} className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.07]">
                <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${f.color}`}>
                  {f.name}
                </span>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0E121B] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <h2 className="font-display text-lg font-bold text-white">Core Studio Tool Stack</h2>
          </div>
          <p className="text-xs text-slate-400">
            Quick launch links to every tool in the daily OnPoint Video Editor workflow.
          </p>
          <div className="space-y-2.5 pt-1">
            {STUDIO_TOOLS.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/[0.07] hover:border-white/20 transition group"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white group-hover:text-[#FF8C72] transition">
                      {tool.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                      {tool.step}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">{tool.role}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
