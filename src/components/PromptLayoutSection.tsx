import React, { useState, useMemo, useRef } from 'react';
import {
  Sparkles,
  Image as ImageIcon,
  Video,
  Copy,
  Check,
  ExternalLink,
  Sliders,
  RotateCcw,
  Trash2,
  Wand2,
  Layers,
  CheckCircle2,
  XCircle,
  Terminal,
  ArrowRight,
  MessageSquarePlus,
  BookOpen,
  Lightbulb,
  LayoutGrid,
  AlignLeft,
} from 'lucide-react';
import {
  IMAGE_LAYOUT_SLOTS,
  VIDEO_LAYOUT_SLOTS,
  IMAGE_MASTER_SAMPLES,
  VIDEO_MASTER_SAMPLES,
  CHATGPT_REVISION_CHEATSHEET,
  type PromptSlotSpec,
  type SamplePromptItem,
} from '../data/promptLayoutData';
import {
  IMAGE_MASTER_PROMPT,
  VIDEO_MASTER_PROMPT,
} from '../data/teamAndProcessData';

type LayoutMode = 'image' | 'video' | 'chatgpt';

const ACCENT_STYLES: Record<
  PromptSlotSpec['accent'],
  { badge: string; border: string; text: string; pill: string; inlineBg: string }
> = {
  orange: {
    badge: 'bg-[#FF5A36]/20 text-[#FF8C72] border-[#FF5A36]/35',
    border: 'border-[#FF5A36]/30',
    text: 'text-[#FF8C72]',
    pill: 'bg-[#FF5A36]/12 border-[#FF5A36]/30 text-[#FFB4A3]',
    inlineBg: 'bg-[#FF5A36]/12 text-[#FFD4C9] border-b border-[#FF5A36]/45',
  },
  sky: {
    badge: 'bg-sky-500/20 text-sky-300 border-sky-400/35',
    border: 'border-sky-500/30',
    text: 'text-sky-300',
    pill: 'bg-sky-500/12 border-sky-400/30 text-sky-200',
    inlineBg: 'bg-sky-500/12 text-sky-100 border-b border-sky-400/45',
  },
  emerald: {
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/35',
    border: 'border-emerald-500/30',
    text: 'text-emerald-300',
    pill: 'bg-emerald-500/12 border-emerald-400/30 text-emerald-200',
    inlineBg: 'bg-emerald-500/12 text-emerald-100 border-b border-emerald-400/45',
  },
  violet: {
    badge: 'bg-violet-500/20 text-violet-300 border-violet-400/35',
    border: 'border-violet-500/30',
    text: 'text-violet-300',
    pill: 'bg-violet-500/12 border-violet-400/30 text-violet-200',
    inlineBg: 'bg-violet-500/12 text-violet-100 border-b border-violet-400/45',
  },
  amber: {
    badge: 'bg-amber-500/20 text-amber-300 border-amber-400/35',
    border: 'border-amber-500/30',
    text: 'text-amber-300',
    pill: 'bg-amber-500/12 border-amber-400/30 text-amber-200',
    inlineBg: 'bg-amber-500/12 text-amber-100 border-b border-amber-400/45',
  },
  rose: {
    badge: 'bg-rose-500/20 text-rose-300 border-rose-400/35',
    border: 'border-rose-500/30',
    text: 'text-rose-300',
    pill: 'bg-rose-500/12 border-rose-400/30 text-rose-200',
    inlineBg: 'bg-rose-500/12 text-rose-100 border-b border-rose-400/45',
  },
};

function assemblePrompt(slots: PromptSlotSpec[], values: Record<string, string>): string {
  const parts = slots
    .map((s) => (values[s.id] || '').trim())
    .filter(Boolean);
  if (parts.length === 0) return '';
  return parts
    .map((p, idx) => {
      const clean = p.replace(/[.,;\s]+$/, '');
      return idx === parts.length - 1 ? `${clean}.` : `${clean},`;
    })
    .join(' ');
}

export const PromptLayoutSection: React.FC = () => {
  const [mode, setMode] = useState<LayoutMode>('image');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [sampleDisplayMode, setSampleDisplayMode] = useState<'annotated' | 'plain'>('annotated');
  const [videoDuration, setVideoDuration] = useState<'4s' | '6s' | '8s'>('6s');
  const [imageDraft, setImageDraft] = useState<Record<string, string>>(() => ({
    ...IMAGE_MASTER_SAMPLES[0].slots,
  }));
  const [videoDraft, setVideoDraft] = useState<Record<string, string>>(() => ({
    ...VIDEO_MASTER_SAMPLES[0].slots,
  }));
  const [loadedSampleLabel, setLoadedSampleLabel] = useState<Record<'image' | 'video', string>>({
    image: IMAGE_MASTER_SAMPLES[0].title,
    video: VIDEO_MASTER_SAMPLES[0].title,
  });

  const builderRef = useRef<HTMLDivElement | null>(null);

  const activeSlots = mode === 'video' ? VIDEO_LAYOUT_SLOTS : IMAGE_LAYOUT_SLOTS;
  const activeSamples = mode === 'video' ? VIDEO_MASTER_SAMPLES : IMAGE_MASTER_SAMPLES;
  const activeDraft = mode === 'video' ? videoDraft : imageDraft;

  const setDraftValue = (slotId: string, val: string) => {
    if (mode === 'video') {
      setVideoDraft((prev) => ({ ...prev, [slotId]: val }));
    } else {
      setImageDraft((prev) => ({ ...prev, [slotId]: val }));
    }
  };

  const assembledText = useMemo(() => {
    const base = assemblePrompt(activeSlots, activeDraft);
    if (!base) return '';
    if (mode === 'video') {
      return `${base} [Duration target: ${videoDuration} · Veo 3.1 - Lite · 9:16]`;
    }
    return base;
  }, [activeSlots, activeDraft, mode, videoDuration]);

  const wordCount = useMemo(
    () => (assembledText.trim() ? assembledText.trim().split(/\s+/).length : 0),
    [assembledText]
  );

  const copyText = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const loadSampleIntoBuilder = (sample: SamplePromptItem) => {
    if (sample.mode === 'video') {
      setMode('video');
      setVideoDraft({ ...sample.slots });
      setLoadedSampleLabel((prev) => ({ ...prev, video: sample.title }));
    } else {
      setMode('image');
      setImageDraft({ ...sample.slots });
      setLoadedSampleLabel((prev) => ({ ...prev, image: sample.title }));
    }
    setTimeout(() => {
      builderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const resetBuilder = () => {
    if (mode === 'video') {
      setVideoDraft({ ...VIDEO_MASTER_SAMPLES[0].slots });
      setLoadedSampleLabel((prev) => ({ ...prev, video: VIDEO_MASTER_SAMPLES[0].title }));
    } else {
      setImageDraft({ ...IMAGE_MASTER_SAMPLES[0].slots });
      setLoadedSampleLabel((prev) => ({ ...prev, image: IMAGE_MASTER_SAMPLES[0].title }));
    }
  };

  const clearBuilder = () => {
    const empty: Record<string, string> = {};
    activeSlots.forEach((s) => {
      empty[s.id] = '';
    });
    if (mode === 'video') {
      setVideoDraft(empty);
      setLoadedSampleLabel((prev) => ({ ...prev, video: 'Custom Blank Draft' }));
    } else {
      setImageDraft(empty);
      setLoadedSampleLabel((prev) => ({ ...prev, image: 'Custom Blank Draft' }));
    }
  };

  const copyAsChatGptBrief = () => {
    const raw = assemblePrompt(activeSlots, activeDraft);
    const brief =
      mode === 'video'
        ? `Please refine this Veo 3.1 - Lite (${videoDuration}, 9:16 Start Frame) motion prompt while strictly preserving our 5-block video layout (Camera Move → Primary Motion → Secondary Physics → End Beat Hold → Stability Lock):\n\n${raw}`
        : `Please polish this Nano Banana (9:16 commercial) image prompt while strictly preserving our 6-block master layout (Shot & Angle → Subject & Action → Product Lock → Environment & Palette → Lighting & Optics → 9:16 Safe Zone):\n\n${raw}`;
    copyText(brief, 'builder-chatgpt');
  };

  return (
    <div className="space-y-6 pb-24">
      {/* HERO HEADER & MODE TABS */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#141829] via-[#0E121E] to-[#090B10] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF7D5F]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Prompt Architecture · Image & Video</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Master Sample Prompt Layout
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Standardized modular prompt formulas for{' '}
              <strong className="text-white">Image Generation (Nano Banana 2.1 / Pro · 9:16)</strong> and{' '}
              <strong className="text-white">Video Motion (Veo 3.1 - Lite [Lower Priority])</strong>. Study the
              block-by-block layout, customize directly in the interactive builder, or copy studio-tested samples
              across every brand category.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="https://chatgpt.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/35 text-xs font-semibold text-emerald-200 transition"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Open ChatGPT</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
            <a
              href="https://flow.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/35 text-xs font-semibold text-sky-200 transition"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Open Google Flow</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-white/10">
          <button
            onClick={() => setMode('image')}
            className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl border text-left transition cursor-pointer ${
              mode === 'image'
                ? 'bg-gradient-to-r from-[#FF5A36]/25 via-[#FF5A36]/12 to-amber-500/10 border-[#FF5A36]/60 text-white shadow-lg shadow-[#FF5A36]/10'
                : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  mode === 'image'
                    ? 'bg-[#FF5A36] text-white'
                    : 'bg-white/[0.06] text-slate-400'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <div className="text-sm font-bold truncate">Image Prompt Layout</div>
                <div className="text-[11px] text-slate-400 truncate">
                  Nano Banana · 6-Block Formula · {IMAGE_MASTER_SAMPLES.length} Samples
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/35 border border-white/10 text-amber-300 shrink-0">
              9:16
            </span>
          </button>

          <button
            onClick={() => setMode('video')}
            className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl border text-left transition cursor-pointer ${
              mode === 'video'
                ? 'bg-gradient-to-r from-sky-500/25 via-indigo-500/12 to-violet-500/10 border-sky-400/60 text-white shadow-lg shadow-sky-500/10'
                : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  mode === 'video'
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-white/[0.06] text-slate-400'
                }`}
              >
                <Video className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <div className="text-sm font-bold truncate">Video Prompt Layout</div>
                <div className="text-[11px] text-slate-400 truncate">
                  Veo 3.1 - Lite · 5-Block Formula · {VIDEO_MASTER_SAMPLES.length} Samples
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/35 border border-white/10 text-sky-300 shrink-0">
              24fps
            </span>
          </button>

          <button
            onClick={() => setMode('chatgpt')}
            className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl border text-left transition cursor-pointer ${
              mode === 'chatgpt'
                ? 'bg-gradient-to-r from-emerald-500/25 via-teal-500/12 to-sky-500/10 border-emerald-400/60 text-white shadow-lg shadow-emerald-500/10'
                : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  mode === 'chatgpt'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-white/[0.06] text-slate-400'
                }`}
              >
                <Terminal className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <div className="text-sm font-bold truncate">ChatGPT Master Prompts</div>
                <div className="text-[11px] text-slate-400 truncate">
                  System Prompts + Revision Cheat-Sheet
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/35 border border-white/10 text-emerald-300 shrink-0">
              AI
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================================
          MODE A & B: IMAGE / VIDEO MASTER LAYOUT + BUILDER + SAMPLES
         ===================================================================== */}
      {mode !== 'chatgpt' && (
        <>
          {/* 1. MODULAR FORMULA BLUEPRINT */}
          <section className="rounded-3xl border border-white/10 bg-[#0D111A] p-5 sm:p-6 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
                  {mode === 'image'
                    ? 'Blueprint · 6-Block Commercial Image Structure'
                    : 'Blueprint · 5-Block Image-to-Video Motion Structure'}
                </div>
                <h2 className="font-display text-xl font-bold text-white mt-0.5">
                  {mode === 'image'
                    ? 'Standard Image Prompt Anatomy (Nano Banana)'
                    : 'Standard Video Prompt Anatomy (Veo 3.1 - Lite)'}
                </h2>
              </div>

              {/* Default FlowAI Settings Pill Bar */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                {mode === 'image' ? (
                  <>
                    <span className="px-2.5 py-1 rounded-lg bg-[#FF5A36]/15 border border-[#FF5A36]/30 text-[#FFB4A3]">
                      Nano Banana 2.1 / Pro
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-200">
                      9:16 Vertical
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-200">
                      Thinking: High · x2
                    </span>
                  </>
                ) : (
                  <>
                    <span className="px-2.5 py-1 rounded-lg bg-sky-500/15 border border-sky-400/35 text-sky-200">
                      Veo 3.1 - Lite [Lower Priority]
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-200">
                      Video → Frames
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-200">
                      9:16 · 4s / 6s / 8s · x2
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Linear Formula Sequence Bar */}
            <div className="rounded-2xl bg-black/40 border border-white/10 p-3.5 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max">
                {activeSlots.map((slot, idx) => {
                  const st = ACCENT_STYLES[slot.accent];
                  return (
                    <React.Fragment key={slot.id}>
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold ${st.pill}`}
                      >
                        <span className="font-mono text-[10px] opacity-80">[{slot.order}]</span>
                        <span>{slot.shortLabel}</span>
                      </div>
                      {idx < activeSlots.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Slot Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {activeSlots.map((slot) => {
                const st = ACCENT_STYLES[slot.accent];
                return (
                  <div
                    key={slot.id}
                    className={`rounded-2xl border ${st.border} bg-gradient-to-b from-white/[0.03] to-black/30 p-4 flex flex-col justify-between gap-3.5`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded-md border text-[11px] font-mono font-bold ${st.badge}`}
                        >
                          {slot.order}
                        </span>
                        <h3 className="text-sm font-bold text-white">{slot.title}</h3>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">{slot.purpose}</p>

                      {/* Clickable Vocabulary Chips */}
                      <div className="space-y-1.5 pt-1">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          Click token to insert into builder
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {slot.tokens.map((tok) => (
                            <button
                              key={tok}
                              onClick={() => {
                                setDraftValue(slot.id, tok);
                                builderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                              }}
                              className="text-left px-2 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 text-[11px] text-slate-200 transition cursor-pointer"
                              title="Insert this phrase into the Prompt Builder"
                            >
                              + {tok}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2.5 border-t border-white/[0.08] text-[11px]">
                      <div className="flex items-start gap-1.5 text-emerald-300/95">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{slot.doRule}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-rose-300/90">
                        <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{slot.avoidRule}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 2. INTERACTIVE LIVE PROMPT BUILDER */}
          <section
            ref={builderRef}
            className="rounded-3xl border border-[#FF5A36]/25 bg-gradient-to-br from-[#141724] via-[#0D111A] to-[#0A0D15] p-5 sm:p-6 space-y-5 scroll-mt-20"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-[#FF5A36]/20 border border-[#FF5A36]/35 flex items-center justify-center text-[#FF8C72]">
                  <Sliders className="w-4 h-4" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-white">
                    Interactive {mode === 'image' ? 'Image' : 'Video'} Prompt Builder
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    Loaded preset:{' '}
                    <span className="text-amber-300 font-medium">
                      {loadedSampleLabel[mode]}
                    </span>{' '}
                    · Edit any slot below to assemble a live production prompt
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {mode === 'video' && (
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
                    {(['4s', '6s', '8s'] as const).map((d) => (
                      <button
                        key={d}
                        onClick={() => setVideoDuration(d)}
                        className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition cursor-pointer ${
                          videoDuration === d
                            ? 'bg-sky-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  onClick={resetBuilder}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-slate-300 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
                <button
                  onClick={clearBuilder}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-rose-500/20 border border-white/10 text-xs text-slate-300 hover:text-rose-200 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              {/* Left: Modular Slot Inputs */}
              <div className="lg:col-span-7 space-y-3">
                {activeSlots.map((slot) => {
                  const st = ACCENT_STYLES[slot.accent];
                  return (
                    <div
                      key={slot.id}
                      className="rounded-xl border border-white/10 bg-black/35 p-3 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <label
                          htmlFor={`slot-${mode}-${slot.id}`}
                          className="flex items-center gap-2 text-xs font-semibold text-white"
                        >
                          <span className={`px-1.5 py-0.5 rounded border text-[10px] font-mono ${st.badge}`}>
                            {slot.order}
                          </span>
                          <span>{slot.title}</span>
                        </label>
                        {activeDraft[slot.id] && (
                          <button
                            onClick={() => setDraftValue(slot.id, '')}
                            className="text-[10px] text-slate-500 hover:text-slate-200 cursor-pointer"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                      <textarea
                        id={`slot-${mode}-${slot.id}`}
                        rows={2}
                        value={activeDraft[slot.id] || ''}
                        onChange={(e) => setDraftValue(slot.id, e.target.value)}
                        placeholder={slot.placeholder}
                        className="w-full rounded-lg bg-[#090C13] border border-white/10 focus:border-[#FF5A36]/60 focus:outline-none px-3 py-2 text-xs text-slate-100 placeholder:text-slate-600 leading-relaxed resize-y"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Right: Live Assembled Color-Coded Preview */}
              <div className="lg:col-span-5 lg:sticky lg:top-20 rounded-2xl border border-white/15 bg-[#090C14] p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF8C72]">
                      Live Assembled Output
                    </div>
                    <h3 className="text-sm font-bold text-white">Ready-to-Paste FlowAI Prompt</h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-mono text-slate-300">
                    {wordCount} words
                  </span>
                </div>

                {/* Color-coded live paragraph */}
                <div className="rounded-xl bg-black/50 border border-white/10 p-4 min-h-[180px] text-xs leading-7 text-slate-200">
                  {activeSlots.some((s) => (activeDraft[s.id] || '').trim()) ? (
                    <div className="space-y-1">
                      <p className="leading-7">
                        {activeSlots.map((slot, idx) => {
                          const txt = (activeDraft[slot.id] || '').trim();
                          if (!txt) return null;
                          const st = ACCENT_STYLES[slot.accent];
                          const clean = txt.replace(/[.,;\s]+$/, '');
                          const isLastFilled =
                            idx ===
                            activeSlots
                              .map((s, i) => ((activeDraft[s.id] || '').trim() ? i : -1))
                              .filter((i) => i >= 0)
                              .pop();
                          return (
                            <React.Fragment key={slot.id}>
                              <span
                                className={`px-1 py-0.5 rounded ${st.inlineBg}`}
                                title={`[${slot.order}] ${slot.title}`}
                              >
                                {clean}
                                {isLastFilled ? '.' : ','}
                              </span>{' '}
                            </React.Fragment>
                          );
                        })}
                      </p>
                      {mode === 'video' && (
                        <div className="pt-2 text-[11px] font-mono text-sky-300">
                          Settings: Mode Video → Frames · 9:16 · Veo 3.1 - Lite [Lower Priority] · {videoDuration} · x2
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-slate-500 italic">
                      Fill in any layout slot on the left — or click “Load in Builder” on any sample card below.
                    </div>
                  )}
                </div>

                {/* Color Legend */}
                <div className="flex flex-wrap gap-1.5">
                  {activeSlots.map((slot) => {
                    const st = ACCENT_STYLES[slot.accent];
                    return (
                      <span
                        key={slot.id}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono border ${st.badge}`}
                      >
                        {slot.order} {slot.shortLabel}
                      </span>
                    );
                  })}
                </div>

                {/* Copy Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    disabled={!assembledText}
                    onClick={() => copyText(assemblePrompt(activeSlots, activeDraft), 'builder-copy')}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5A36] to-[#FF7648] hover:brightness-110 disabled:opacity-40 text-white text-xs font-bold transition cursor-pointer shadow-lg shadow-[#FF5A36]/20"
                  >
                    {copiedKey === 'builder-copy' ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied Prompt!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy for FlowAI</span>
                      </>
                    )}
                  </button>

                  <button
                    disabled={!assembledText}
                    onClick={copyAsChatGptBrief}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 disabled:opacity-40 border border-emerald-400/35 text-emerald-200 text-xs font-semibold transition cursor-pointer"
                  >
                    {copiedKey === 'builder-chatgpt' ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied Brief!</span>
                      </>
                    ) : (
                      <>
                        <MessageSquarePlus className="w-4 h-4" />
                        <span>Copy ChatGPT Brief</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 3. CURATED MASTER SAMPLE LIBRARY */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-sky-300">
                  Studio-Tested Reference Library · {activeSamples.length} Master Samples
                </div>
                <h2 className="font-display text-2xl font-bold text-white mt-0.5">
                  {mode === 'image'
                    ? 'Master Sample Image Prompts by Category'
                    : 'Master Sample Video Prompts by Motion Type'}
                </h2>
              </div>

              {/* Annotated vs Plain View Toggle */}
              <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#0D111A] border border-white/10 self-start">
                <button
                  onClick={() => setSampleDisplayMode('annotated')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    sampleDisplayMode === 'annotated'
                      ? 'bg-white text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Structured Layout</span>
                </button>
                <button
                  onClick={() => setSampleDisplayMode('plain')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    sampleDisplayMode === 'plain'
                      ? 'bg-white text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <AlignLeft className="w-3.5 h-3.5" />
                  <span>Single Paragraph</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {activeSamples.map((sample) => {
                const fullPrompt = assemblePrompt(activeSlots, sample.slots);
                const copyId = `sample-${sample.id}`;
                return (
                  <article
                    key={sample.id}
                    className="rounded-2xl border border-white/10 bg-[#0D111A] p-5 flex flex-col justify-between gap-4 hover:border-white/20 transition"
                  >
                    <div className="space-y-3.5">
                      {/* Header Meta */}
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/10 text-slate-200">
                            {sample.category}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${
                              mode === 'image'
                                ? 'bg-[#FF5A36]/15 text-[#FFB4A3] border-[#FF5A36]/30'
                                : 'bg-sky-500/15 text-sky-200 border-sky-400/30'
                            }`}
                          >
                            {sample.beatTag}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-bold text-white">{sample.title}</h3>
                        <div className="text-[11px] text-slate-400">
                          <strong className="text-slate-300">Brand Fit:</strong> {sample.brandFit}
                        </div>
                      </div>

                      {/* Prompt Display (Structured Layout OR Single Paragraph) */}
                      {sampleDisplayMode === 'annotated' ? (
                        <div className="space-y-2 rounded-xl bg-black/40 border border-white/10 p-3.5">
                          {activeSlots.map((slot) => {
                            const st = ACCENT_STYLES[slot.accent];
                            return (
                              <div key={slot.id} className="flex items-start gap-2.5 text-xs leading-relaxed">
                                <span
                                  className={`px-1.5 py-0.5 rounded border text-[10px] font-mono shrink-0 mt-0.5 ${st.badge}`}
                                  title={slot.title}
                                >
                                  {slot.order} {slot.shortLabel}
                                </span>
                                <span className="text-slate-200">{sample.slots[slot.id]}</span>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="rounded-xl bg-black/45 border border-white/10 p-4 text-xs text-slate-200 leading-relaxed font-mono">
                          {fullPrompt}
                        </div>
                      )}

                      {/* Setup + Tip */}
                      <div className="space-y-2 text-[11px]">
                        <div className="rounded-lg bg-white/[0.03] border border-white/[0.08] px-3 py-2 space-y-1">
                          <div className="text-slate-300">
                            <strong className="text-sky-300 font-mono">FlowAI:</strong> {sample.flowSetup}
                          </div>
                          <div className="text-slate-400">
                            <strong className="text-emerald-300">
                              {mode === 'image' ? 'Ingredients (+):' : 'Anti-Artifact Fallback:'}
                            </strong>{' '}
                            {sample.ingredientsOrFallback}
                          </div>
                        </div>

                        <div className="flex items-start gap-2 rounded-lg bg-amber-500/[0.07] border border-amber-500/20 px-3 py-2 text-amber-100/90">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                          <span>{sample.negativeOrNote}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10">
                      <button
                        onClick={() => copyText(fullPrompt, copyId)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 text-xs font-semibold text-white transition cursor-pointer"
                      >
                        {copiedKey === copyId ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-300">Copied Full Prompt</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Full Prompt</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => loadSampleIntoBuilder(sample)}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FF5A36]/15 hover:bg-[#FF5A36]/25 border border-[#FF5A36]/35 text-xs font-semibold text-[#FFB4A3] transition cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Load in Builder</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </>
      )}

      {/* =====================================================================
          MODE C: CHATGPT MASTER SYSTEM PROMPTS + REVISION CHEAT-SHEET
         ===================================================================== */}
      {mode === 'chatgpt' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Image Master System Prompt */}
            <section className="rounded-3xl border border-[#FF5A36]/30 bg-[#0D111A] p-5 sm:p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#FF5A36]/15 text-[#FF8C72] border border-[#FF5A36]/30">
                      <ImageIcon className="w-3 h-3" /> CHATGPT → NANO BANANA
                    </span>
                    <h2 className="font-display text-lg font-bold text-white mt-2">
                      Image System Master Prompt
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Paste once at the start of a ChatGPT thread so ChatGPT writes and iteratively updates prompts in
                      our 6-block Image Layout.
                    </p>
                  </div>
                  <button
                    onClick={() => copyText(IMAGE_MASTER_PROMPT, 'sys-img')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FF5A36] hover:bg-[#ff6d4d] text-white text-xs font-bold shrink-0 transition cursor-pointer"
                  >
                    {copiedKey === 'sys-img' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'sys-img' ? 'Copied!' : 'Copy Master'}</span>
                  </button>
                </div>

                <pre className="rounded-2xl bg-black/50 border border-white/10 p-4 text-[11px] font-mono text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[380px] overflow-y-auto">
                  {IMAGE_MASTER_PROMPT}
                </pre>
              </div>
            </section>

            {/* Video Master System Prompt */}
            <section className="rounded-3xl border border-sky-500/30 bg-[#0D111A] p-5 sm:p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sky-500/15 text-sky-300 border border-sky-400/30">
                      <Video className="w-3 h-3" /> CHATGPT → VEO 3.1 - LITE
                    </span>
                    <h2 className="font-display text-lg font-bold text-white mt-2">
                      Video System Master Prompt
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Paste once in ChatGPT, then upload your generated 9:16 Start Frame to get anti-morphing Veo 3.1 -
                      Lite prompts in our 5-block Motion Layout.
                    </p>
                  </div>
                  <button
                    onClick={() => copyText(VIDEO_MASTER_PROMPT, 'sys-vid')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold shrink-0 transition cursor-pointer"
                  >
                    {copiedKey === 'sys-vid' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'sys-vid' ? 'Copied!' : 'Copy Master'}</span>
                  </button>
                </div>

                <pre className="rounded-2xl bg-black/50 border border-white/10 p-4 text-[11px] font-mono text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[380px] overflow-y-auto">
                  {VIDEO_MASTER_PROMPT}
                </pre>
              </div>
            </section>
          </div>

          {/* Quick Follow-Up Revision Prompts */}
          <section className="rounded-3xl border border-white/10 bg-[#0D111A] p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                <BookOpen className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-white">
                  Fast ChatGPT Revision Phrases (1-Click Copy)
                </h3>
                <p className="text-[11px] text-slate-400">
                  Reply directly inside your active ChatGPT Master Prompt session to fix common generation issues in
                  seconds.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-[#FF8C72] uppercase font-mono tracking-wider">
                  Image Prompt Updates (Nano Banana)
                </div>
                {CHATGPT_REVISION_CHEATSHEET.image.map((item) => (
                  <div
                    key={item.goal}
                    className="rounded-xl border border-white/10 bg-black/35 p-3.5 flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-white">{item.goal}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.prompt}</p>
                    </div>
                    <button
                      onClick={() => copyText(item.prompt, `rev-img-${item.goal}`)}
                      className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white shrink-0 cursor-pointer"
                      title="Copy phrase"
                    >
                      {copiedKey === `rev-img-${item.goal}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-bold text-sky-300 uppercase font-mono tracking-wider">
                  Video Motion Updates (Veo 3.1 - Lite)
                </div>
                {CHATGPT_REVISION_CHEATSHEET.video.map((item) => (
                  <div
                    key={item.goal}
                    className="rounded-xl border border-white/10 bg-black/35 p-3.5 flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-white">{item.goal}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.prompt}</p>
                    </div>
                    <button
                      onClick={() => copyText(item.prompt, `rev-vid-${item.goal}`)}
                      className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white shrink-0 cursor-pointer"
                      title="Copy phrase"
                    >
                      {copiedKey === `rev-vid-${item.goal}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
