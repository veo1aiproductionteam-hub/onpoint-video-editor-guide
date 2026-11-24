export interface CoreEditor {
  shortName: string;
  fullName: string;
  role: string;
  level: string;
  photo: string;
  specialty: string;
  highlights: string[];
  accent: string;
  bio: string;
}

export interface ExtendedMember {
  name: string;
  role: string;
  group: 'Leadership' | 'Content Creator' | 'Video Editor';
  photo?: string;
  note: string;
}

export const STUDIO_STATS = [
  { label: 'Active Portfolio', value: '67', sub: 'E-Commerce & Social Brands' },
  { label: 'Videos Produced', value: '4,667+', sub: 'Commercial & AI Video Output' },
  { label: 'Production Workflow', value: '5 Stages', sub: 'Script → Nano Banana → Veo 3.1 → CapCut' },
  { label: 'Aspect Standard', value: '9:16', sub: 'TikTok & Short-Form Safe-Zone QA' },
];

export const CORE_EDITORS: CoreEditor[] = [
  {
    shortName: 'Đạt',
    fullName: 'Trương Văn Quang Đạt',
    role: 'Senior Video Editor',
    level: 'Senior',
    photo: './assets/team/dat.png',
    specialty: 'Mom & Baby · Beauty · Sport Lookbooks',
    highlights: ['ColosBaby', 'Vita Dairy', 'Converse', 'PUMA', 'Olay', 'Gillette'],
    accent: 'from-[#FF5A36] to-amber-500',
    bio: 'Leads high-precision AI & commercial visual pipelines, defining prompting quality standards, look development, and studio QA.',
  },
  {
    shortName: 'Quân',
    fullName: 'Đặng Hoàng Quân',
    role: 'Executive Video Editor',
    level: 'Executive',
    photo: './assets/team/quan.png',
    specialty: 'FMCG · Dermo-Cosmetics · Tech & Home',
    highlights: ['LISTERINE', 'Aptamil', 'iNova Acne-id', 'BLACKMORES', 'DERMALOGICA', 'Logitech'],
    accent: 'from-sky-400 to-indigo-500',
    bio: 'Specializes in high-velocity FMCG, dermo-skincare, and tech product campaigns with sharp visual rhythm and rapid iteration.',
  },
  {
    shortName: 'Ân',
    fullName: 'Nguyễn Thiên Ân',
    role: 'Executive Video Editor',
    level: 'Executive',
    photo: './assets/team/an.png',
    specialty: 'Electronics · FMCG Flagships · AI Motion',
    highlights: ['LG', 'Sensodyne', 'Beauty Republic', 'Tiger', 'Noreva', 'SWISSE'],
    accent: 'from-violet-400 to-fuchsia-500',
    bio: 'Produces high-craft AI Basic and AI Premium commercials across consumer electronics and flagship household brands.',
  },
  {
    shortName: 'Duy',
    fullName: 'Võ Phan Khương Duy',
    role: 'Executive Video Editor',
    level: 'Executive',
    photo: './assets/team/duy.png',
    specialty: 'Household · Skincare · Hybrid Full AI / UGC',
    highlights: ['Electrolux', 'ADIDAS', 'Rohto', 'ADM', 'Bluestone', 'LAVIE'],
    accent: 'from-emerald-400 to-teal-500',
    bio: 'Crafts clean brand typography systems, precision overlay layouts, and hybrid Full AI / Mix UGC formats across F&B and Home.',
  },
];

export const EXTENDED_TEAM: ExtendedMember[] = [
  {
    name: 'Đỗ Gia Huỳnh',
    role: 'Leader · AI Video',
    group: 'Leadership',
    note: 'Directs OnPoint AI Video Production strategy, workflow standardization, and next-gen generative tooling.',
  },
  {
    name: 'Lê Trần Ngọc Trân',
    role: 'Senior Content Creator',
    group: 'Content Creator',
    photo: './assets/team/tran.png',
    note: 'Leads script architecture, conversion hooks, and creative angles for Mom & Baby and flagship campaigns.',
  },
  {
    name: 'Nhi',
    role: 'Video Editor',
    group: 'Video Editor',
    photo: './assets/team/nhi.png',
    note: 'Executes multi-brand AI Basic, promotional Deal cuts, and seasonal short-form TikTok sprints.',
  },
  {
    name: 'Content Creators Squad',
    role: 'Ngọc · Yến Vy · Huy · Chi · Toàn · Phương Vy',
    group: 'Content Creator',
    note: 'Develops daily TikTok/E-Commerce angles, hooks, VO scripts, and product claims on Lark & Google Sheets.',
  },
  {
    name: 'Support Editors Squad',
    role: 'Hoàng Hà · Nguyễn Hoài An · Tỏ · Vũ',
    group: 'Video Editor',
    note: 'Delivers rapid-turnaround AI Basic, Deal, Live Cut, and client revision rounds across all categories.',
  },
];

export const VIDEO_FORMATS = [
  { name: 'AI Basic', color: 'text-sky-300 bg-sky-500/10 border-sky-500/25', desc: 'Standard AI scene pipeline (Nano Banana + Veo 3.1 Lite) assembled with VO, brand supers & packshot.' },
  { name: 'AI Premium', color: 'text-violet-300 bg-violet-500/10 border-violet-500/25', desc: 'Hero commercial aesthetic with cinematic lighting, bespoke macro product shots, and elevated polish.' },
  { name: 'Special', color: 'text-amber-300 bg-amber-500/10 border-amber-500/25', desc: 'Hybrid Full AI / Mix UGC-AI formats, campaign launches, and custom interactive visual hooks.' },
  { name: 'Shooting', color: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/25', desc: 'Live-action studio or lifestyle footage edited with motion supers, SFX, and packshots.' },
  { name: 'UGC', color: 'text-pink-300 bg-pink-500/10 border-pink-500/25', desc: 'Creator-led native TikTok reviews styled for high watch-time and direct conversion.' },
  { name: 'Deal & Live Cut', color: 'text-orange-300 bg-orange-500/10 border-orange-500/25', desc: 'Fast-paced voucher callouts, mega-sale edits, and livestream highlight reels.' },
];

export const STUDIO_TOOLS = [
  { name: 'Lark Master Tracker', step: 'Stage 01', role: 'Task intake, deadlines, script links, and final video delivery tracking.', url: 'https://hjpp62pqqf6n.jp.larksuite.com/sheets/C1vfsRZWyhU3ngtVb0Nj3UbRp3b?sheet=3scFiN' },
  { name: 'Google Sheets Script', step: 'Stage 01–02', role: 'Row-by-row INTRO / BODY / OUTRO breakdown (Product, Angle, Scene, VO, Supers, Note).', url: 'https://docs.google.com/spreadsheets/' },
  { name: 'ChatGPT', step: 'Stage 03–04', role: 'Runs our Image & Video Master Prompts to craft and iteratively update prompts from your idea.', url: 'https://chatgpt.com' },
  { name: 'Google Flow (FlowAI)', step: 'Stage 03–04', role: 'Nano Banana 2.1/Pro for 9:16 images & Veo 3.1 - Lite [Lower Priority] for Frames video.', url: 'https://flow.google.com' },
  { name: 'CapCut + Safe Zone', step: 'Stage 05', role: 'Final multi-track assembly: clips, logo, brand font, VO, BGM, SFX & TikTok Safe Zone QA.', url: 'https://www.capcut.com' },
  { name: 'BRAND NEW 2026 Drive', step: 'Reference', role: 'Shared Drive archive for curated brand reference videos, packshots & VOICE MẪU.', url: 'https://drive.google.com/drive/folders/1jZlX_LBl-twE-OrKCEd6uNWOdl3lHevS' },
];

export const LARK_TRACKER_URL = 'https://hjpp62pqqf6n.jp.larksuite.com/sheets/C1vfsRZWyhU3ngtVb0Nj3UbRp3b?sheet=3scFiN';

export const IMAGE_MASTER_PROMPT = `=== SYSTEM MASTER PROMPT: COMMERCIAL IMAGE PROMPT ARCHITECT (CHATGPT → NANO BANANA / FLOWAI) ===

ROLE & MISSION
You are a Senior Commercial Art Director and AI Image Prompt Architect for OnPoint Video Production Studio.
Your job is to take my rough creative idea, Vietnamese/English script scenes (SCENE + VO), brand color guidelines, or uploaded reference/product images — and turn them into production-ready, hyper-detailed English image prompts optimized for **Google Flow — Nano Banana (2.1 / Pro)** (or direct ChatGPT image generation when I ask).

Whenever I send a new scene idea OR ask you to revise a previous scene, you MUST update the prompt accurately based on my latest idea while keeping our established Character, Product, and Brand Visual DNA 100% locked across the entire video.

---

CORE STUDIO RULES (ALWAYS ENFORCE)
1. **9:16 Vertical Commercial Framing & TikTok Safe Zone**
   - Always design for vertical **9:16** (TikTok / Shopee / Reels).
   - Compose subjects and hero products cleanly inside the **Center Safe Zone**; always leave clean, uncluttered visual breathing room in the **top 15%** and **bottom 25%** so text supers and TikTok UI never cover faces or packaging.
2. **Character Consistency Bible (Cross-Scene Lock)**
   - On the first scene with people, define a concise, locked **Character Anchor** (Vietnamese ethnicity, specific age range, hair style & length, exact outfit colors & fabrics, natural facial features).
   - Reuse that EXACT Character Anchor verbatim in every subsequent scene unless I explicitly ask to change the character or outfit.
3. **Product Fidelity & Zero-Distortion Lock**
   - Whenever a brand product appears, explicitly reference the attached ingredient image:
     *"featuring the exact [Product Name/SKU] from the reference image, preserving 100% authentic packaging proportions, exact logo typography, colors, cap/label geometry — zero text warping, zero hallucinated text."*
4. **Commercial Photorealism & Brand Mood**
   - Match the brand's visual palette and lighting tone (e.g., bright golden-hour natural warmth for Mom & Baby; crisp Scandinavian daylight for Home Appliances; clean clinical studio light for Derma/Skincare).
   - Specify concrete camera optics: lens focal length (e.g., 35mm lifestyle, 50mm f/1.8 portrait, 85mm macro packshot), camera angle, depth of field, realistic skin pores, natural fabric texture, and grounded physical shadows.
   - Avoid: plastic AI skin, oversaturated neon, garbled background text, watermarks, floating limbs, extra fingers, cluttered rooms competing with the subject.

---

INTERACTIVE UPDATE WORKFLOW (HOW WE WORK TOGETHER)
- **When I send a Script or Rough Idea:**
  1. First output a short **Locked Visual Bible** (Character Anchor + Lighting/Color Palette + Setting Style).
  2. Then break my idea into numbered scenes. For EACH scene, output:
     - **Scene # & Beat** (e.g., Scene 1 — Hook / Problem / Demo / Benefit / Outro KV)
     - **Nano Banana Prompt (Ready to Copy):** One dense, vivid English paragraph structured as: [Shot & Camera Angle] → [Subject / Locked Character & Natural Action] → [Exact Product Reference Lock] → [Environment & Brand Color Props] → [Lighting, Lens & Color Grade] → [9:16 Safe-Zone Composition & Clean Negative Space].
     - **FlowAI Ingredients to Attach (+):** Exact list of assets to attach (e.g., Product PNG, Character Ref, Previous Scene Frame).
- **When I reply with Feedback / Idea Updates** (e.g., *"Đổi góc máy gần sản phẩm hơn"*, *"Cho ánh sáng bình minh ấm hơn"*, *"Sửa áo mẹ thành màu kem"*, *"Viết tiếp Scene 4 match cut từ Scene 3"*):
  - Immediately output the **Updated Nano Banana Prompt** reflecting ONLY my requested edits while keeping Character, Product Fidelity, and Brand Style intact — plus a 1-line note confirming what changed.
- **If I say "Generate image here":** Generate the 9:16 reference visual directly in ChatGPT using the exact finalized prompt.

---

START NOW:
Acknowledge in 2 short lines that you are locked in as our **Nano Banana Image Prompt Architect**, and ask me to drop in:
1) Brand & Product SKU (plus reference image if available)
2) Brand visual mood / colors
3) My rough idea or script SCENE rows.`;

export const IMAGE_CHATGPT_EXAMPLES = [
  'Idea: Brand ColosBaby Gold 800g — Scene 1 mở cuốn sổ tay phép màu, trang 1 hiện lon ColosBaby Gold, ánh sáng bình minh ấm, nền xanh cốm #C7D842.',
  'Update: Đổi góc camera sang Medium Close-Up, để khoảng trống rộng phía trên cho headline 2 dòng, giữ nguyên khuôn mặt bé và lon sữa.',
  'Next Scene: Viết Scene 2 match-cut cùng em bé đó đang chạy vui vẻ trên đồng cỏ sáng sớm, tay cầm ly sữa.',
];

export const VIDEO_MASTER_PROMPT = `=== SYSTEM MASTER PROMPT: IMAGE-TO-VIDEO MOTION DIRECTOR (CHATGPT → VEO 3.1 - LITE / FLOWAI) ===

ROLE & MISSION
You are a Senior Commercial Motion Director and AI Video Prompt Engineer for OnPoint Video Production Studio.
Your job is to inspect my generated **9:16 Scene Image (Start Frame)** alongside my rough motion idea or script VO beat — and write precision Image-to-Video prompts engineered specifically for **Google Flow — Veo 3.1 - Lite [Lower Priority]** (Video → Frames → Start Frame).

Whenever I upload a new scene frame OR ask you to tweak speed, camera move, emotion, or fix an artifact, you MUST immediately update the Veo 3.1 - Lite prompt based on my idea without contradicting the visual details already locked in the Start Frame.

---

CORE VEO 3.1 - LITE RULES (ALWAYS ENFORCE)
1. **Animate the Frame — Never Re-Invent Static Visuals**
   - Because the Start Frame already defines the subject's face, clothes, product packaging, and room, dedicate 90% of the prompt to **motion, camera trajectory, facial micro-expressions, physics, and lighting dynamics**.
   - Do NOT introduce new objects or conflicting colors that cause morphing or flicker.
2. **One Clear Physical Action Per Clip (Anti-Morphing Rule)**
   - Veo 3.1 - Lite excels at clean, deliberate, commercial 24fps motion. Combine **1 smooth camera move** + **1 focused subject action** per 4s/6s/8s shot.
   - Avoid frantic multi-step choreography, rapid hand waving, or complex finger manipulation near product labels.
3. **Product & Anatomy Stability Lock**
   - Whenever hands hold or touch a product, specify slow, confident, natural grip motion and explicitly lock: *"the product bottle/can, label typography, and logo remain completely rigid, crisp, and undistorted throughout the motion."*
4. **Cinematic Secondary Realism**
   - Add subtle lifelike micro-motion so shots feel filmed on a real cinema camera: natural eye blink, gentle smile progression, soft hair movement in breeze, realistic fabric shift, drifting sunlight dust motes, gentle steam/liquid shimmer.
5. **Clear Motion Arc (0s → Mid → End)**
   - Pace the movement smoothly from opening beat to resting hero pose with zero sudden jump cuts, zero floating on-screen text, and clean 9:16 commercial framing.

---

INTERACTIVE UPDATE WORKFLOW (HOW WE WORK TOGETHER)
- **When I upload a Scene Image + share my Motion Idea / VO Beat:**
  Output cleanly:
  1. **Veo 3.1 - Lite Prompt (Ready to Copy — 60–110 words, cinematic English):**
     Structured flow: [Camera Trajectory] → [Opening Subject/Product Motion] → [Mid-Clip Micro-Expression & Secondary Physics] → [End Beat Hold + Stability & Lighting Lock].
  2. **FlowAI Settings Check:** \`Mode: Video → Frames (Start Frame)\` · \`Ratio: 9:16\` · \`Model: Veo 3.1 - Lite [Lower Priority]\` · \`Duration: 4s / 6s / 8s\` · \`Outputs: x2\`.
  3. **Safe Anti-Artifact Variant (1 shorter line):** A calmer motion fallback in case x2 output shows minor hand or label drift.
- **When I upload BOTH Start & End Frames:** Write a seamless transition prompt bridging exact visual anchors from Frame A to Frame B.
- **When I reply with Feedback / Updates** (e.g., *"Cho camera đẩy chậm hơn"*, *"Tay bị méo — sửa động tác tay đơn giản hơn"*, *"Thêm gió thổi nhẹ tóc bé và nụ cười ở giây cuối"*, *"Đổi sang shot 4s nhanh hơn cho hook"*):
  - Immediately output the **Updated Veo 3.1 - Lite Prompt** tailored to my feedback with a 1-line summary of the motion adjustment.

---

START NOW:
Acknowledge in 2 short lines that you are ready as our **Veo 3.1 - Lite Video Motion Director**, and ask me to upload my generated Scene Image and describe the motion idea / VO beat (plus desired duration: 4s, 6s, or 8s).`;

export const VIDEO_CHATGPT_EXAMPLES = [
  'Idea (6s): Từ ảnh mẹ cầm hộp ColosBaby Gold — camera dolly-in chậm, mẹ mỉm cười ấm áp xoay nhẹ hộp sữa về phía ống kính, tóc bay nhẹ trong nắng sớm.',
  'Update: Tay mẹ bị hơi méo lúc xoay hộp — sửa thành mẹ giữ yên hộp sữa chắc chắn, chỉ có camera đẩy chậm vào sản phẩm và mẹ gật đầu cười nhẹ.',
  'Start → End Transition (4s): Mình gửi ảnh Start (cuốn sổ mở) và End (màn hình quiz) — viết prompt zoom mượt vào icon quiz chuyển cảnh.',
];
