import React, { useState, useEffect } from 'react';
import {
  ClipboardList,
  SearchCheck,
  Wand2,
  Video,
  Scissors,
  Copy,
  Check,
  ExternalLink,
  ZoomIn,
  Download,
  Upload,
  Eye,
  CheckSquare,
  Square,
  RotateCcw,
  BookOpenCheck,
  SlidersHorizontal,
  ArrowLeft,
  ArrowRight,
  MessageSquarePlus,
  Terminal,
  LayoutList,
  Layers,
  ShieldCheck,
  Sparkles,
  FileSpreadsheet,
} from 'lucide-react';
import {
  LARK_TRACKER_URL,
  IMAGE_MASTER_PROMPT,
  IMAGE_CHATGPT_EXAMPLES,
  VIDEO_MASTER_PROMPT,
  VIDEO_CHATGPT_EXAMPLES,
} from '../data/teamAndProcessData';
import { BRAND_DRIVE_ROOT_URL } from '../data/brandsData';
import type { LightboxPayload } from './ImageLightbox';

interface ProcessSectionProps {
  focusStep: number | null;
  onClearFocusStep: () => void;
  onOpenLightbox: (item: LightboxPayload) => void;
  onOpenBrandGuidelines: () => void;
}

const CHECKLIST_STORAGE_KEY = 'onpoint-video-process-checklist-v2';

const STEPS_META = [
  {
    num: 1,
    code: '01',
    title: 'Task Intake & Script',
    shortTitle: 'Checklist & Script',
    tools: 'Lark Docs · Google Sheets',
    objective: 'Locate your assigned video in Master Tracker and open its exact linked Script range.',
    icon: <ClipboardList className="w-4 h-4" />,
  },
  {
    num: 2,
    code: '02',
    title: 'Script Analysis & Assets',
    shortTitle: 'Analyze & Assets',
    tools: 'Script Sheet · Brand Guide',
    objective: 'Deconstruct scenes, VO, supers, and gather SKU packshots, logos, font, and voiceover.',
    icon: <SearchCheck className="w-4 h-4" />,
  },
  {
    num: 3,
    code: '03',
    title: 'Scene Image Generation',
    shortTitle: 'Image · Nano Banana',
    tools: 'ChatGPT · FlowAI (Nano Banana)',
    objective: 'Use the Image Master Prompt in ChatGPT to build & iterate prompts for Nano Banana (9:16).',
    icon: <Wand2 className="w-4 h-4" />,
  },
  {
    num: 4,
    code: '04',
    title: 'Scene Video Generation',
    shortTitle: 'Video · Veo 3.1 Lite',
    tools: 'ChatGPT · Veo 3.1 - Lite',
    objective: 'Animate approved frames via Video Master Prompt using Veo 3.1 - Lite [Lower Priority].',
    icon: <Video className="w-4 h-4" />,
  },
  {
    num: 5,
    code: '05',
    title: 'CapCut Assembly & Safe Zone',
    shortTitle: 'CapCut & Safe Zone',
    tools: 'CapCut · TikTok Safe Zone',
    objective: 'Compound video, logo, brand supers, VO, BGM & SFX, pass Safe Zone QA, and deliver.',
    icon: <Scissors className="w-4 h-4" />,
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  focusStep,
  onClearFocusStep,
  onOpenLightbox,
  onOpenBrandGuidelines,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'focused' | 'all'>('focused');

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(checkedItems));
    } catch {
      // ignore storage errors
    }
  }, [checkedItems]);

  useEffect(() => {
    if (focusStep && focusStep >= 1 && focusStep <= 5) {
      setActiveStep(focusStep);
      onClearFocusStep();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [focusStep, onClearFocusStep]);

  const toggleCheck = (key: string) =>
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));

  // Step 3 visual switcher & copy state
  const [step3Shot, setStep3Shot] = useState<'nanobanana' | 'chatgpt' | 'flowhome'>('nanobanana');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Step 5 TikTok Safe Zone interactive state
  const [safeZoneOpacity, setSafeZoneOpacity] = useState(85);
  const [showTikTokUi, setShowTikTokUi] = useState(true);
  const [customFrameUrl, setCustomFrameUrl] = useState<string | null>(null);

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
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleFrameUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (customFrameUrl) URL.revokeObjectURL(customFrameUrl);
    setCustomFrameUrl(URL.createObjectURL(file));
  };

  const allChecklistKeys = [
    's1-1', 's1-2', 's1-3', 's1-4',
    's2-1', 's2-2', 's2-3', 's2-4', 's2-5',
    's5-1', 's5-2', 's5-3', 's5-4', 's5-5',
  ];
  const completedCount = allChecklistKeys.filter((k) => checkedItems[k]).length;

  const step3Images = {
    nanobanana: {
      src: './assets/screenshots/step3-flow-nanobanana.png',
      title: 'FlowAI — Image Mode · Nano Banana 2.1 (9:16)',
      caption: 'Mode: Image · Aspect Ratio: 9:16 · Model: Nano Banana 2.1 / Pro · Thinking: High · Output: x2.',
      url: 'https://flow.google.com',
    },
    chatgpt: {
      src: './assets/screenshots/step3-chatgpt.png',
      title: 'ChatGPT — Master Prompt Session',
      caption: 'Paste the Image Master Prompt once, then drop your script rows or rough idea to generate & iteratively update Nano Banana prompts.',
      url: 'https://chatgpt.com',
    },
    flowhome: {
      src: './assets/screenshots/step3-flow-dashboard.png',
      title: 'Google Flow — Project Workspace',
      caption: 'Open flow.google.com and click "+ New project" to organize all generated frames and clips per campaign.',
      url: 'https://flow.google.com',
    },
  };

  const selectStep = (n: number) => {
    setActiveStep(n);
    if (viewMode === 'all') {
      setTimeout(() => {
        document.getElementById(`sop-stage-${n}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 40);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const shouldRenderStep = (n: number) => viewMode === 'all' || activeStep === n;

  // Reusable Master Prompt Studio Console
  const renderMasterPromptConsole = (opts: {
    idKey: string;
    badge: string;
    title: string;
    subtitle: string;
    promptText: string;
    examples: string[];
    accentBorder: string;
    accentText: string;
    accentBtn: string;
    targetToolUrl: string;
    targetToolLabel: string;
  }) => (
    <div className={`rounded-2xl border ${opts.accentBorder} bg-[#0A0D14] overflow-hidden`}>
      {/* Console Header */}
      <div className="px-6 py-4 border-b border-white/10 bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider ${opts.accentText}`}>
            <Terminal className="w-3.5 h-3.5" />
            <span>{opts.badge}</span>
          </div>
          <h3 className="font-display text-base sm:text-lg font-bold text-white mt-1">{opts.title}</h3>
          <p className="text-xs text-slate-400 mt-0.5">{opts.subtitle}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://chatgpt.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-slate-200 transition"
          >
            <span>Open ChatGPT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => copyText(opts.promptText, opts.idKey)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
              copiedKey === opts.idKey ? 'bg-emerald-500 text-white' : opts.accentBtn
            }`}
          >
            {copiedKey === opts.idKey ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copiedKey === opts.idKey ? 'Copied Master Prompt' : 'Copy Master Prompt'}</span>
          </button>
        </div>
      </div>

      {/* 3-Step Usage Strip */}
      <div className="px-6 py-3 border-b border-white/[0.07] bg-black/30 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-slate-300">
          <span className="w-5 h-5 rounded-full bg-white/10 text-white font-mono text-[10px] flex items-center justify-center shrink-0">
            1
          </span>
          <span>
            <strong className="text-white">Paste once</strong> into a new ChatGPT chat to lock studio rules.
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-slate-300">
          <span className="w-5 h-5 rounded-full bg-white/10 text-white font-mono text-[10px] flex items-center justify-center shrink-0">
            2
          </span>
          <span>
            <strong className="text-white">Send your idea / script</strong> (or reference image) in VN or EN.
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-slate-300">
          <span className="w-5 h-5 rounded-full bg-white/10 text-white font-mono text-[10px] flex items-center justify-center shrink-0">
            3
          </span>
          <span>
            <strong className="text-white">Reply with tweaks</strong> — ChatGPT updates the prompt for{' '}
            <a href={opts.targetToolUrl} target="_blank" rel="noreferrer" className="underline text-sky-300">
              {opts.targetToolLabel}
            </a>
            .
          </span>
        </div>
      </div>

      {/* Master Prompt Text */}
      <pre className="p-6 text-[12px] font-mono text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[340px] overflow-y-auto bg-[#07090F] selection:bg-[#FF5A36]/30">
        {opts.promptText}
      </pre>

      {/* Iterative Follow-Up Examples */}
      <div className="px-6 py-4 border-t border-white/10 bg-[#0C1019] space-y-2.5">
        <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
          <MessageSquarePlus className="w-3.5 h-3.5 text-[#FF8C72]" />
          <span>How to Update Prompts with Your Idea in ChatGPT (Click to Copy Example)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {opts.examples.map((ex, idx) => {
            const exKey = `${opts.idKey}-ex-${idx}`;
            return (
              <button
                key={exKey}
                onClick={() => copyText(ex, exKey)}
                className="text-left p-3 rounded-xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/20 transition group cursor-pointer"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                  <span>{idx === 0 ? 'INITIAL IDEA' : idx === 1 ? 'REVISION UPDATE' : 'NEXT SHOT'}</span>
                  <span className="text-slate-400 group-hover:text-white">
                    {copiedKey === exKey ? 'Copied ✓' : 'Copy'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">{ex}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 pb-24">
      {/* Executive SOP Header */}
      <section className="border-b border-white/10 pb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-5">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-[#FF8C72]">
            <span>Standard Operating Procedure</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">OnPoint Video Production</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
            Video Production Process
          </h1>
          <p className="text-sm text-slate-400 mt-1.5 max-w-2xl">
            Five standardized stages from Lark task intake to TikTok Safe-Zone verified CapCut export.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2 self-start lg:self-end">
          <div className="inline-flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10">
            <button
              onClick={() => setViewMode('focused')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                viewMode === 'focused'
                  ? 'bg-white text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Focused Step</span>
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                viewMode === 'all'
                  ? 'bg-white text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span>Full SOP</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main 2-Column Executive SOP Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT STICKY TIMELINE RAIL */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-5">
          <div className="rounded-2xl border border-white/10 bg-[#0C1018] p-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-500 px-2 mb-3">
              Pipeline Stages
            </div>

            <nav className="relative space-y-1">
              {/* Vertical rail connector */}
              <div className="hidden lg:block absolute left-[22px] top-6 bottom-6 w-px bg-white/10 pointer-events-none" />

              {STEPS_META.map((st) => {
                const isActive = activeStep === st.num;
                return (
                  <button
                    key={st.num}
                    onClick={() => selectStep(st.num)}
                    className={`relative w-full text-left flex items-start gap-3 px-2.5 py-3 rounded-xl transition cursor-pointer ${
                      isActive
                        ? 'bg-[#FF5A36]/12 border border-[#FF5A36]/35 text-white'
                        : 'border border-transparent hover:bg-white/[0.04] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span
                      className={`relative z-10 w-6 h-6 rounded-lg font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 transition ${
                        isActive
                          ? 'bg-[#FF5A36] text-white shadow shadow-[#FF5A36]/40'
                          : 'bg-[#151B29] text-slate-400 border border-white/10'
                      }`}
                    >
                      {st.code}
                    </span>
                    <div className="min-w-0">
                      <div className={`text-xs font-semibold leading-snug ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {st.shortTitle}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 truncate mt-0.5">{st.tools}</div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Compact QA Progress Tracker */}
          <div className="rounded-2xl border border-white/10 bg-[#0C1018] p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">Session QA</span>
              <button
                onClick={() => setCheckedItems({})}
                className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-white transition cursor-pointer"
                title="Reset all checkboxes"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF5A36] to-emerald-400 transition-all duration-300"
                  style={{ width: `${Math.round((completedCount / allChecklistKeys.length) * 100)}%` }}
                />
              </div>
              <span className="font-mono text-[11px] text-slate-300">
                {completedCount}/{allChecklistKeys.length}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Interactive verification boxes inside Steps 01, 02 & 05 save locally as you edit.
            </p>
          </div>
        </aside>

        {/* RIGHT EDITORIAL STAGE WORKSPACE */}
        <div className="lg:col-span-9 space-y-12">
          {/* ======================== STAGE 01 ======================== */}
          {shouldRenderStep(1) && (
            <article
              id="sop-stage-1"
              className="scroll-mt-24 rounded-3xl border border-white/10 bg-[#0C1018] overflow-hidden"
            >
              {/* Stage Header */}
              <div className="px-6 sm:px-8 py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white/15 leading-none select-none">
                    01
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-sky-400">
                      Stage 01 · Task Intake
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                      Locate Task in Checklist & Open Script
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">
                      Start in Lark Master Tracker to verify your assignment, then open the linked Google Sheet script range.
                    </p>
                  </div>
                </div>
                <a
                  href={LARK_TRACKER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold text-white transition shrink-0"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-sky-400" />
                  <span>Open Lark Tracker</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              <div className="p-6 sm:p-8 space-y-7">
                {/* Concise Procedure Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      n: '1.1',
                      t: 'Check Master Tracker',
                      d: 'Open Team video V2 → Master Tracker (or your editor tab) and check Mã video, Brand, Video Type, and Deadline.',
                    },
                    {
                      n: '1.2',
                      t: 'Open Linked Script',
                      d: 'Click the blue Script ID or Link Script cell to jump directly to your exact row block inside Google Sheets.',
                    },
                    {
                      n: '1.3',
                      t: 'Confirm Scope & Notes',
                      d: 'Check Content Owner, revision status (Số lần Revise), and PMO notes before collecting assets.',
                    },
                  ].map((s) => (
                    <div key={s.n} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <div className="font-mono text-[11px] text-[#FF8C72] font-semibold">{s.n}</div>
                      <h3 className="text-sm font-semibold text-white mt-1">{s.t}</h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>

                {/* Annotated Visual Pair */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <figure className="rounded-2xl border border-white/10 bg-[#080A0F] overflow-hidden group">
                    <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-200">1A · Lark Master Tracker Video</span>
                      <button
                        onClick={() =>
                          onOpenLightbox({
                            src: './assets/screenshots/step1-lark-tracker.jpg',
                            title: 'Stage 01A: Lark Docs — Master Tracker Video',
                            subtitle: 'Verify Mã video, Brand, Video Type, Script link, and Deadline.',
                            externalUrl: LARK_TRACKER_URL,
                          })
                        }
                        className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white cursor-pointer"
                      >
                        <ZoomIn className="w-3.5 h-3.5" /> Zoom
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        onOpenLightbox({
                          src: './assets/screenshots/step1-lark-tracker.jpg',
                          title: 'Stage 01A: Lark Docs — Master Tracker Video',
                          subtitle: 'Verify Mã video, Brand, Video Type, Script link, and Deadline.',
                          externalUrl: LARK_TRACKER_URL,
                        })
                      }
                      className="block w-full cursor-zoom-in overflow-hidden"
                    >
                      <img
                        src="./assets/screenshots/step1-lark-tracker.jpg"
                        alt="Lark Master Tracker Checklist"
                        className="w-full h-56 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </button>
                    <figcaption className="px-4 py-3 text-[11px] text-slate-400 border-t border-white/10">
                      Key fields: <code className="text-slate-200">Mã video</code> · <code className="text-slate-200">Video Type</code> ·{' '}
                      <code className="text-sky-300">Link Script</code> · <code className="text-rose-300">Deadline</code>
                    </figcaption>
                  </figure>

                  <figure className="rounded-2xl border border-white/10 bg-[#080A0F] overflow-hidden group">
                    <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-200">1B · Linked Script Sheet (VDA2610016)</span>
                      <button
                        onClick={() =>
                          onOpenLightbox({
                            src: './assets/screenshots/step1-script-sheet.jpg',
                            title: 'Stage 01B: Google Sheet Video Script (VDA2610016)',
                            subtitle: 'Inspect INTRO / BODY / OUTRO rows across PRODUCT, ANGLE, SCENE, VO, TEXT/SUPERS, NOTE.',
                          })
                        }
                        className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white cursor-pointer"
                      >
                        <ZoomIn className="w-3.5 h-3.5" /> Zoom
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        onOpenLightbox({
                          src: './assets/screenshots/step1-script-sheet.jpg',
                          title: 'Stage 01B: Google Sheet Video Script (VDA2610016)',
                          subtitle: 'Inspect INTRO / BODY / OUTRO rows across PRODUCT, ANGLE, SCENE, VO, TEXT/SUPERS, NOTE.',
                        })
                      }
                      className="block w-full cursor-zoom-in overflow-hidden"
                    >
                      <img
                        src="./assets/screenshots/step1-script-sheet.jpg"
                        alt="Video Script Sheet"
                        className="w-full h-56 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </button>
                    <figcaption className="px-4 py-3 text-[11px] text-slate-400 border-t border-white/10">
                      Open every clickable blue <span className="underline text-sky-400">ref</span> link inside SCENE before creating visuals.
                    </figcaption>
                  </figure>
                </div>

                {/* Verification Checklist */}
                <div className="pt-5 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Stage 01 Gate Checklist
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { k: 's1-1', t: 'Confirmed Mã video, Brand & Video Type (AI Basic / AI Premium / Special)' },
                      { k: 's1-2', t: 'Noted Deadline date and checked Revision / PMO notes' },
                      { k: 's1-3', t: 'Opened linked Script range & verified Content Owner' },
                      { k: 's1-4', t: 'Reviewed brand specifications in Guideline of Brands' },
                    ].map((item) => (
                      <button
                        key={item.k}
                        onClick={() => toggleCheck(item.k)}
                        className="flex items-start gap-2.5 text-left p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] transition cursor-pointer"
                      >
                        {checkedItems[item.k] ? (
                          <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <span className={`text-xs ${checkedItems[item.k] ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                          {item.t}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* ======================== STAGE 02 ======================== */}
          {shouldRenderStep(2) && (
            <article
              id="sop-stage-2"
              className="scroll-mt-24 rounded-3xl border border-white/10 bg-[#0C1018] overflow-hidden"
            >
              <div className="px-6 sm:px-8 py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white/15 leading-none select-none">
                    02
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                      Stage 02 · Pre-Production
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                      Analyze Script & Collect Production Assets
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">
                      Audit every script column and lock your asset folder before opening ChatGPT or FlowAI.
                    </p>
                  </div>
                </div>
                <button
                  onClick={onOpenBrandGuidelines}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold text-white transition shrink-0 cursor-pointer"
                >
                  <BookOpenCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Open Brand Guidelines</span>
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-7">
                {/* Clean Structured Script Matrix Table */}
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#080A0F]">
                  <div className="px-5 py-3 border-b border-white/10 bg-white/[0.02] text-xs font-semibold text-white">
                    Script Column Audit Matrix (INTRO → BODY → OUTRO)
                  </div>
                  <div className="divide-y divide-white/[0.06]">
                    {[
                      {
                        col: 'PRODUCT',
                        action: 'Lock exact SKU & volume',
                        detail: 'Verify weight/size (e.g. 400g vs 800g, 110ml vs 180ml) so packshot matches the offer.',
                      },
                      {
                        col: 'ANGLE',
                        action: 'Set hook & emotional pacing',
                        detail: 'Identify the core tension (quiz, problem/solution, comparison) to guide music energy & cut speed.',
                      },
                      {
                        col: 'SCENE',
                        action: 'Draft shot list & open refs',
                        detail: 'Map AI shots vs motion UI graphics (e.g. quiz pop-ups), match cuts, and inspect every blue ref link.',
                      },
                      {
                        col: 'VO',
                        action: 'Generate voiceover FIRST',
                        detail: 'Use the brand’s designated Voice Model so clip lengths and beat timings match real speech duration.',
                      },
                      {
                        col: 'TEXT / SUPERS',
                        action: 'Apply brand font & color rules',
                        detail: 'Copy exact claims verbatim; apply the brand’s required Font, HEX colors, and Stroke/Background rules.',
                      },
                      {
                        col: 'NOTE',
                        action: 'Catch mandatory client rules',
                        detail: 'Check special instructions such as Outro KV layout, packshot layering ("Nhớ layer packshot lên"), or claims.',
                      },
                    ].map((row) => (
                      <div key={row.col} className="px-5 py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline">
                        <div className="md:col-span-3 font-mono text-xs font-semibold text-[#FF8C72]">{row.col}</div>
                        <div className="md:col-span-3 text-xs font-semibold text-white">{row.action}</div>
                        <div className="md:col-span-6 text-xs text-slate-400 leading-relaxed">{row.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Asset Collection Checklist */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Asset Collection Gate
                    </span>
                    <a
                      href={BRAND_DRIVE_ROOT_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                    >
                      <span>BRAND NEW 2026 Drive</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { k: 's2-1', t: 'Transparent PNG Packshots for every SKU mentioned in PRODUCT' },
                      { k: 's2-2', t: 'Official Brand Logo, Font installed, and Color HEX palette ready' },
                      { k: 's2-3', t: 'Voiceover MP3 rendered in brand Voice Model & trimmed' },
                      { k: 's2-4', t: 'Character refs, Outro Key Visual, and nutritional/feature badges' },
                      { k: 's2-5', t: 'Watched the Brand’s Best Reference Video for pacing benchmark' },
                    ].map((item) => (
                      <button
                        key={item.k}
                        onClick={() => toggleCheck(item.k)}
                        className="flex items-start gap-2.5 text-left p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] transition cursor-pointer"
                      >
                        {checkedItems[item.k] ? (
                          <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <span className={`text-xs ${checkedItems[item.k] ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                          {item.t}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* ======================== STAGE 03 ======================== */}
          {shouldRenderStep(3) && (
            <article
              id="sop-stage-3"
              className="scroll-mt-24 rounded-3xl border border-white/10 bg-[#0C1018] overflow-hidden"
            >
              <div className="px-6 sm:px-8 py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white/15 leading-none select-none">
                    03
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                      Stage 03 · Visual Generation
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                      Scene Image Generation (ChatGPT → Nano Banana)
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">
                      Paste the Image Master Prompt into ChatGPT to craft & update scene prompts from your idea, then render 9:16 frames with Nano Banana in FlowAI.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://chatgpt.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-white transition"
                  >
                    <span>ChatGPT</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a
                    href="https://flow.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/35 text-xs font-semibold text-amber-200 transition"
                  >
                    <span>FlowAI</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                {/* Visual Reference + Settings Spec */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                  <div className="xl:col-span-7 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {(
                        [
                          { id: 'nanobanana', label: 'FlowAI · Nano Banana 2.1' },
                          { id: 'chatgpt', label: 'ChatGPT · Prompt Session' },
                          { id: 'flowhome', label: 'FlowAI · New Project' },
                        ] as const
                      ).map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setStep3Shot(tab.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
                            step3Shot === tab.id
                              ? 'bg-white text-slate-950 border-white font-semibold'
                              : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-[#07090F] overflow-hidden">
                      <div className="px-4 py-2 bg-[#111520] border-b border-white/10 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400 truncate">
                          {step3Images[step3Shot].url}
                        </span>
                        <button
                          onClick={() =>
                            onOpenLightbox({
                              src: step3Images[step3Shot].src,
                              title: step3Images[step3Shot].title,
                              subtitle: step3Images[step3Shot].caption,
                              externalUrl: step3Images[step3Shot].url,
                            })
                          }
                          className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white cursor-pointer"
                        >
                          <ZoomIn className="w-3.5 h-3.5" /> Inspect
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          onOpenLightbox({
                            src: step3Images[step3Shot].src,
                            title: step3Images[step3Shot].title,
                            subtitle: step3Images[step3Shot].caption,
                            externalUrl: step3Images[step3Shot].url,
                          })
                        }
                        className="block w-full cursor-zoom-in"
                      >
                        <img
                          src={step3Images[step3Shot].src}
                          alt={step3Images[step3Shot].title}
                          className="w-full h-auto max-h-[380px] object-contain bg-black"
                        />
                      </button>
                      <div className="px-4 py-3 border-t border-white/10 bg-[#0D111A] text-xs text-slate-300">
                        {step3Images[step3Shot].caption}
                      </div>
                    </div>
                  </div>

                  {/* Specs & Operating Notes */}
                  <div className="xl:col-span-5 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-[#080B12] p-5 space-y-3">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                        FlowAI Image Specification
                      </div>
                      <dl className="divide-y divide-white/[0.07] text-xs">
                        <div className="py-2 flex justify-between gap-2">
                          <dt className="text-slate-400">Mode</dt>
                          <dd className="font-mono font-semibold text-white">Image</dd>
                        </div>
                        <div className="py-2 flex justify-between gap-2">
                          <dt className="text-slate-400">Model Family</dt>
                          <dd className="font-mono font-semibold text-amber-300">Nano Banana 2.1 / Pro</dd>
                        </div>
                        <div className="py-2 flex justify-between gap-2">
                          <dt className="text-slate-400">Aspect Ratio</dt>
                          <dd className="font-mono font-semibold text-emerald-300">9:16 Vertical</dd>
                        </div>
                        <div className="py-2 flex justify-between gap-2">
                          <dt className="text-slate-400">Thinking / Outputs</dt>
                          <dd className="font-mono font-semibold text-white">High · x2 Variations</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2.5 text-xs text-slate-300 leading-relaxed">
                      <div className="font-semibold text-white">Quality Rules Before Animating</div>
                      <p>
                        <strong className="text-amber-300">1.</strong> Always attach official transparent Product PNG &
                        Character Ref via <code className="text-white">+ Ingredients</code> in FlowAI.
                      </p>
                      <p>
                        <strong className="text-amber-300">2.</strong> Keep faces & packaging inside the center safe area
                        (top 15% and bottom 25% visually clean).
                      </p>
                      <p>
                        <strong className="text-amber-300">3.</strong> Fix any label distortion at the image stage by
                        replying to ChatGPT to refine the prompt — never try to fix broken text in video.
                      </p>
                    </div>
                  </div>
                </div>

                {/* IMAGE MASTER PROMPT CONSOLE */}
                {renderMasterPromptConsole({
                  idKey: 'img-master',
                  badge: 'System Master Prompt · Image (ChatGPT → Nano Banana)',
                  title: 'Image Master Prompt for ChatGPT',
                  subtitle: 'Paste this Master Prompt into ChatGPT once — then share your idea/script to generate and update Nano Banana prompts.',
                  promptText: IMAGE_MASTER_PROMPT,
                  examples: IMAGE_CHATGPT_EXAMPLES,
                  accentBorder: 'border-amber-400/30',
                  accentText: 'text-amber-300',
                  accentBtn: 'bg-amber-400 hover:bg-amber-300 text-slate-950',
                  targetToolUrl: 'https://flow.google.com',
                  targetToolLabel: 'Nano Banana (FlowAI)',
                })}
              </div>
            </article>
          )}

          {/* ======================== STAGE 04 ======================== */}
          {shouldRenderStep(4) && (
            <article
              id="sop-stage-4"
              className="scroll-mt-24 rounded-3xl border border-white/10 bg-[#0C1018] overflow-hidden"
            >
              <div className="px-6 sm:px-8 py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white/15 leading-none select-none">
                    04
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400">
                        Stage 04 · Motion Generation
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-violet-500/20 text-violet-200 border border-violet-400/35">
                        Default: Veo 3.1 - Lite [Lower Priority]
                      </span>
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                      Image-to-Video Generation (ChatGPT → FlowAI)
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">
                      Upload your approved Step 3 scene image to ChatGPT with the Video Master Prompt, then drop the image
                      into FlowAI Frames (<code className="text-violet-300">Veo 3.1 - Lite [Lower Priority]</code>).
                    </p>
                  </div>
                </div>
                <a
                  href="https://flow.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-500/15 hover:bg-violet-500/25 border border-violet-400/35 text-xs font-semibold text-violet-200 transition shrink-0"
                >
                  <span>Open FlowAI Video</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                  {/* Live Veo 3.1 - Lite Screenshot */}
                  <div className="xl:col-span-7 rounded-2xl border border-white/15 bg-[#07090F] overflow-hidden">
                    <div className="px-4 py-2 bg-[#111520] border-b border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-violet-300 truncate">
                        flow.google.com · Video → Frames → Veo 3.1 - Lite [Lower Priority]
                      </span>
                      <button
                        onClick={() =>
                          onOpenLightbox({
                            src: './assets/screenshots/step4-flow-veo31.png',
                            title: 'Stage 04: Google Flow — Video · Frames · Veo 3.1 - Lite [Lower Priority]',
                            subtitle: 'Drop generated image into Start slot, lock 9:16, and use Veo 3.1 - Lite [Lower Priority].',
                            externalUrl: 'https://flow.google.com',
                          })
                        }
                        className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white cursor-pointer"
                      >
                        <ZoomIn className="w-3.5 h-3.5" /> Inspect
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        onOpenLightbox({
                          src: './assets/screenshots/step4-flow-veo31.png',
                          title: 'Stage 04: Google Flow — Video · Frames · Veo 3.1 - Lite [Lower Priority]',
                          subtitle: 'Drop generated image into Start slot, lock 9:16, and use Veo 3.1 - Lite [Lower Priority].',
                          externalUrl: 'https://flow.google.com',
                        })
                      }
                      className="block w-full cursor-zoom-in"
                    >
                      <img
                        src="./assets/screenshots/step4-flow-veo31.png"
                        alt="FlowAI Video composer set to Veo 3.1 - Lite [Lower Priority]"
                        className="w-full h-auto max-h-[390px] object-contain bg-black"
                      />
                    </button>
                    <div className="px-4 py-3 border-t border-white/10 bg-[#0D111A] text-xs text-slate-300">
                      Switch to <code className="text-white">Video → Frames</code>, drop your scene image into{' '}
                      <code className="text-white">Start</code>, and confirm{' '}
                      <code className="text-violet-300">Veo 3.1 - Lite [Lower Priority]</code>.
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="xl:col-span-5 space-y-4">
                    <div className="rounded-2xl border border-violet-400/25 bg-violet-500/[0.06] p-5 space-y-3">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-violet-300">
                        Default FlowAI Video Spec
                      </div>
                      <dl className="divide-y divide-white/[0.07] text-xs">
                        <div className="py-2 flex justify-between gap-2">
                          <dt className="text-slate-400">Default Model</dt>
                          <dd className="font-mono font-semibold text-violet-200 text-right">
                            Veo 3.1 - Lite [Lower Priority]
                          </dd>
                        </div>
                        <div className="py-2 flex justify-between gap-2">
                          <dt className="text-slate-400">Video Mode</dt>
                          <dd className="font-mono font-semibold text-white">Frames (Start / End)</dd>
                        </div>
                        <div className="py-2 flex justify-between gap-2">
                          <dt className="text-slate-400">Aspect Ratio</dt>
                          <dd className="font-mono font-semibold text-emerald-300">9:16 Vertical</dd>
                        </div>
                        <div className="py-2 flex justify-between gap-2">
                          <dt className="text-slate-400">Duration / Batch</dt>
                          <dd className="font-mono font-semibold text-white">4s / 6s / 8s · x2 (0 credits)</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2.5 text-xs text-slate-300 leading-relaxed">
                      <div className="font-semibold text-white">Directing Clean Motion in Lite Mode</div>
                      <p>
                        <strong className="text-violet-300">• Motion Only:</strong> Describe camera trajectory, eye gaze,
                        hand movement, and physics — never re-describe static clothing/room colors from the Start Frame.
                      </p>
                      <p>
                        <strong className="text-violet-300">• One Focused Beat:</strong> Pair 1 gentle camera move with 1
                        clear subject motion to prevent label warping.
                      </p>
                      <p>
                        <strong className="text-violet-300">• Match-Cut Transitions:</strong> Drop both{' '}
                        <code className="text-white">Start</code> and <code className="text-white">End</code> frames for
                        seamless scene-to-scene transitions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* VIDEO MASTER PROMPT CONSOLE */}
                {renderMasterPromptConsole({
                  idKey: 'vid-master',
                  badge: 'System Master Prompt · Video (ChatGPT → Veo 3.1 - Lite)',
                  title: 'Video Master Prompt for ChatGPT',
                  subtitle: 'Paste this Master Prompt into ChatGPT once — then upload your Step 3 image + motion idea to generate and refine Veo 3.1 - Lite prompts.',
                  promptText: VIDEO_MASTER_PROMPT,
                  examples: VIDEO_CHATGPT_EXAMPLES,
                  accentBorder: 'border-violet-400/30',
                  accentText: 'text-violet-300',
                  accentBtn: 'bg-violet-500 hover:bg-violet-400 text-white',
                  targetToolUrl: 'https://flow.google.com',
                  targetToolLabel: 'Veo 3.1 - Lite (FlowAI)',
                })}
              </div>
            </article>
          )}

          {/* ======================== STAGE 05 ======================== */}
          {shouldRenderStep(5) && (
            <article
              id="sop-stage-5"
              className="scroll-mt-24 rounded-3xl border border-white/10 bg-[#0C1018] overflow-hidden"
            >
              <div className="px-6 sm:px-8 py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white/15 leading-none select-none">
                    05
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#FF8C72]">
                      Stage 05 · Post-Production & QA
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                      CapCut Compound Assembly & TikTok Safe Zone
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">
                      Combine video clips, brand supers, logo, VO, BGM & SFX in CapCut, then verify layout safety before
                      exporting and delivering to Lark.
                    </p>
                  </div>
                </div>
                <a
                  href="./assets/screenshots/safe-zone.png"
                  download="Safe-zone-TikTok-OnPoint.png"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/35 text-xs font-semibold text-emerald-200 transition shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Safe Zone PNG</span>
                </a>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                  {/* Left: Track Blueprint + CapCut + QA */}
                  <div className="xl:col-span-7 space-y-6">
                    {/* Clean Track Architecture Table */}
                    <div className="rounded-2xl border border-white/10 bg-[#080B12] overflow-hidden">
                      <div className="px-5 py-3 border-b border-white/10 bg-white/[0.02] flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">CapCut Multi-Track Architecture</span>
                        <span className="font-mono text-slate-400">1080 × 1920 · 9:16</span>
                      </div>
                      <div className="divide-y divide-white/[0.06] text-xs">
                        {[
                          { t: 'T5 · SFX', v: 'Whoosh, pop, ding, sparkle, countdown ticks synced to cuts & supers.' },
                          { t: 'T4 · BGM', v: 'Brand-matched background music ducked cleanly to -22dB ~ -28dB under VO.' },
                          { t: 'T3 · VO', v: 'Brand Voice Model trimmed tight (no dead air), leveled at -6dB ~ -10dB.' },
                          { t: 'T2 · Supers & Logo', v: 'Brand Font, HEX colors, Stroke/BG rule, Logo coordinates, SKU packshots & Outro KV.' },
                          { t: 'T1 · Video Clips', v: 'Veo 3.1 / Shooting clips trimmed briskly (1.5–2.5s hook cadence) with match cuts.' },
                        ].map((row) => (
                          <div key={row.t} className="px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4">
                            <span className="font-mono font-semibold text-sky-300 sm:w-36 shrink-0">{row.t}</span>
                            <span className="text-slate-300 leading-relaxed">{row.v}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CapCut Reference Frame */}
                    <div className="rounded-2xl border border-white/10 bg-[#080A0F] overflow-hidden">
                      <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">CapCut Desktop / Web Workspace</span>
                        <button
                          onClick={() =>
                            onOpenLightbox({
                              src: './assets/screenshots/step5-capcut.png',
                              title: 'Stage 05: CapCut Assembly',
                              subtitle: 'Place Safe zone.png on the top track at 40–50% opacity during layout, then HIDE it before exporting.',
                              externalUrl: 'https://www.capcut.com',
                            })
                          }
                          className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white cursor-pointer"
                        >
                          <ZoomIn className="w-3.5 h-3.5" /> Zoom
                        </button>
                      </div>
                      <img
                        src="./assets/screenshots/step5-capcut.png"
                        alt="CapCut Editor"
                        className="w-full h-44 object-cover object-top"
                      />
                      <div className="px-4 py-3 text-xs text-slate-400 border-t border-white/10">
                        Overlay <code className="text-white">Safe zone.png</code> at 40% opacity on your top CapCut track
                        while positioning supers — <strong className="text-rose-300">mute/delete it before export.</strong>
                      </div>
                    </div>

                    {/* Final QA Gate */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-2.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Export & Delivery QA Checklist</span>
                      </div>
                      {[
                        { k: 's5-1', t: 'All Text/Supers, Logo & Packshots stay inside Level 1 / Level 2 Safe Zone' },
                        { k: 's5-2', t: 'Hidden/removed Safe zone.png overlay layer before exporting' },
                        { k: 's5-3', t: 'Verified VO loudness vs BGM ducking and zero copy/claim typos' },
                        { k: 's5-4', t: 'Exported 1080×1920 MP4 named strictly with Mã video (e.g. ELE2610018.mp4)' },
                        { k: 's5-5', t: 'Uploaded to BRAND NEW 2026 Drive & pasted Link Video in Lark Master Tracker' },
                      ].map((item) => (
                        <button
                          key={item.k}
                          onClick={() => toggleCheck(item.k)}
                          className="w-full flex items-start gap-2.5 text-left p-2 rounded-lg hover:bg-white/[0.04] transition cursor-pointer"
                        >
                          {checkedItems[item.k] ? (
                            <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                          )}
                          <span className={`text-xs ${checkedItems[item.k] ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                            {item.t}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right: Interactive TikTok Safe Zone Simulator */}
                  <div className="xl:col-span-5 rounded-2xl border border-emerald-500/25 bg-[#080C12] p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                          Layout Verification
                        </div>
                        <h3 className="font-display text-base font-bold text-white">TikTok 9:16 Safe Zone</h3>
                      </div>
                      <button
                        onClick={() =>
                          onOpenLightbox({
                            src: './assets/screenshots/safe-zone.png',
                            title: 'OnPoint Official TikTok 9:16 Safe Zone Overlay',
                            subtitle: 'Keep critical text, logos, and product packshots inside Level 1 (Green) or Level 2 (Yellow).',
                            downloadName: 'Safe-zone-TikTok-OnPoint.png',
                          })
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-slate-300 hover:text-white cursor-pointer"
                      >
                        <ZoomIn className="w-3.5 h-3.5" /> Full
                      </button>
                    </div>

                    {/* 9:16 Phone Canvas */}
                    <div className="mx-auto max-w-[270px] w-full aspect-[9/16] relative rounded-[26px] overflow-hidden border-4 border-slate-800 bg-[#0F1523] shadow-2xl">
                      {customFrameUrl ? (
                        <img
                          src={customFrameUrl}
                          alt="Uploaded test frame"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
                          <Upload className="w-6 h-6 text-slate-500 mb-2" />
                          <p className="text-xs font-semibold text-slate-200">Test Your Frame</p>
                          <p className="text-[11px] text-slate-400 mt-1">
                            Upload a 9:16 export screenshot to inspect layout safety live.
                          </p>
                        </div>
                      )}

                      <img
                        src="./assets/screenshots/safe-zone.png"
                        alt="TikTok Safe Zone Guide Overlay"
                        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                        style={{ opacity: safeZoneOpacity / 100 }}
                      />

                      {showTikTokUi && (
                        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3">
                          <div className="flex items-center justify-center gap-4 pt-2 text-[10px] font-semibold text-white/85 drop-shadow">
                            <span className="opacity-65">Following</span>
                            <span className="border-b-2 border-white pb-0.5">For You</span>
                          </div>
                          <div className="flex items-end justify-between gap-2 pb-2">
                            <div className="space-y-1 max-w-[72%] text-left drop-shadow">
                              <div className="text-[11px] font-bold text-white">@brand.official</div>
                              <div className="text-[9px] text-white/90 leading-snug">
                                TikTok caption & CTA area — keep subtitles and logos clear above this zone.
                              </div>
                            </div>
                            <div className="flex flex-col items-center gap-2 pb-1">
                              <div className="w-7 h-7 rounded-full bg-white/85 border-2 border-[#FF5A36]" />
                              <div className="text-[9px] text-white font-semibold">❤️ 12K</div>
                              <div className="text-[9px] text-white font-semibold">💬 342</div>
                              <div className="text-[9px] text-white font-semibold">🔖 1.8K</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Controls */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" /> Overlay Opacity
                          </span>
                          <span className="font-mono text-emerald-300">{safeZoneOpacity}%</span>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={safeZoneOpacity}
                          onChange={(e) => setSafeZoneOpacity(Number(e.target.value))}
                          className="w-full accent-emerald-400 cursor-pointer"
                        />
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setShowTikTokUi((v) => !v)}
                          className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition cursor-pointer ${
                            showTikTokUi
                              ? 'bg-white/10 border-white/25 text-white'
                              : 'bg-white/[0.03] border-white/10 text-slate-400'
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{showTikTokUi ? 'Hide UI' : 'TikTok UI'}</span>
                        </button>
                        <label className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#FF5A36] hover:bg-[#ff6d4d] text-white transition cursor-pointer">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Test Frame</span>
                          <input type="file" accept="image/*" onChange={handleFrameUpload} className="hidden" />
                        </label>
                      </div>

                      {customFrameUrl && (
                        <button
                          onClick={() => {
                            URL.revokeObjectURL(customFrameUrl);
                            setCustomFrameUrl(null);
                          }}
                          className="w-full text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
                        >
                          Clear uploaded test frame
                        </button>
                      )}

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[10px]">
                        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                          <span className="font-semibold text-emerald-300 block">Level 1 · Critical Safe</span>
                          <span className="text-slate-400">Supers, CTA & product</span>
                        </div>
                        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                          <span className="font-semibold text-amber-300 block">Level 2 · Comfort Safe</span>
                          <span className="text-slate-400">Brand logo & badges</span>
                        </div>
                        <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                          <span className="font-semibold text-orange-300 block">Level 3 · Caution</span>
                          <span className="text-slate-400">Edge clipping risk</span>
                        </div>
                        <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20">
                          <span className="font-semibold text-rose-300 block">Level 4 · UI Risk</span>
                          <span className="text-slate-400">Blocked by TikTok UI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Focused Mode Step-by-Step Pagination Footer */}
          {viewMode === 'focused' && (
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <button
                disabled={activeStep <= 1}
                onClick={() => selectStep(activeStep - 1)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 text-xs font-semibold text-white transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>
                  {activeStep > 1 ? `Previous: 0${activeStep - 1} ${STEPS_META[activeStep - 2].shortTitle}` : 'Start'}
                </span>
              </button>

              <span className="hidden sm:inline font-mono text-xs text-slate-500">
                Stage 0{activeStep} of 05
              </span>

              {activeStep < 5 ? (
                <button
                  onClick={() => selectStep(activeStep + 1)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF5A36] hover:bg-[#ff6d4d] text-xs font-semibold text-white transition cursor-pointer shadow-lg shadow-[#FF5A36]/20"
                >
                  <span>Next: 0{activeStep + 1} {STEPS_META[activeStep].shortTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={onOpenBrandGuidelines}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-xs font-semibold text-slate-950 transition cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Open Guideline of Brands</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
