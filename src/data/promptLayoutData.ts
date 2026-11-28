export interface PromptSlotSpec {
  id: string;
  order: string;
  title: string;
  shortLabel: string;
  accent: 'orange' | 'sky' | 'emerald' | 'violet' | 'amber' | 'rose';
  placeholder: string;
  purpose: string;
  tokens: string[];
  doRule: string;
  avoidRule: string;
}

export interface SamplePromptItem {
  id: string;
  mode: 'image' | 'video';
  title: string;
  category: string;
  beatTag: string;
  brandFit: string;
  flowSetup: string;
  ingredientsOrFallback: string;
  slots: Record<string, string>;
  negativeOrNote: string;
}

export const IMAGE_LAYOUT_SLOTS: PromptSlotSpec[] = [
  {
    id: 'shot',
    order: '01',
    title: 'Shot Type & Camera Angle',
    shortLabel: 'Shot & Angle',
    accent: 'orange',
    placeholder: 'Medium close-up vertical 9:16 commercial shot at eye level, slightly angled 15 degrees',
    purpose: 'Sets exact framing scale, camera height, and viewer perspective before describing the subject.',
    tokens: [
      'Vertical 9:16 medium close-up',
      'Macro tabletop hero shot, 15° high angle',
      'Waist-up lifestyle portrait, eye level',
      'Over-the-shoulder POV shot',
      'Low-angle heroic commercial frame',
    ],
    doRule: 'Always open with framing + aspect feel (9:16 vertical) so FlowAI centers the composition properly.',
    avoidRule: 'Avoid vague openings like "A nice photo of..." or conflicting angles ("bird-eye close-up").',
  },
  {
    id: 'subject',
    order: '02',
    title: 'Subject / Locked Character & Action',
    shortLabel: 'Subject & Action',
    accent: 'sky',
    placeholder: 'a warm Vietnamese mother in her late 20s with shoulder-length dark brown hair in a neat half-up style, wearing a soft cream linen blouse, smiling naturally while holding the product at chest level',
    purpose: 'Locks ethnicity, age, hair, outfit, and ONE clear natural pose so faces stay consistent across scenes.',
    tokens: [
      'Vietnamese woman late 20s, natural glowing skin, cream knit top',
      'Cheerful Vietnamese 4-year-old child in pastel cotton outfit',
      'Clean manicured female hands gently cradling the bottle',
      'No human subject — pure hero product composition',
    ],
    doRule: 'Reuse the exact Character Anchor verbatim across every scene of the same script.',
    avoidRule: 'Avoid complex multi-hand actions or extreme facial expressions that distort anatomy.',
  },
  {
    id: 'product',
    order: '03',
    title: 'Exact Product Reference Lock',
    shortLabel: 'Product Lock',
    accent: 'emerald',
    placeholder: 'featuring the exact [Product SKU] from the attached reference image, preserving 100% authentic packaging proportions, crisp original logo typography, label layout, and cap geometry with zero text warping',
    purpose: 'Forces Nano Banana to preserve 100% real label spelling, cap shape, and SKU proportions from the (+) asset.',
    tokens: [
      'exact product from attached reference image, 100% authentic label typography & proportions',
      'zero text warping, zero hallucinated text, crisp readable front label',
      'positioned as the sharp focal hero on a clean stone plinth',
    ],
    doRule: 'Always attach the official transparent PNG packshot in FlowAI (+) alongside this lock clause.',
    avoidRule: 'Never ask AI to invent new words on a bottle/can — for strict brands (Aptamil, Bonzon), composite static packshot in CapCut.',
  },
  {
    id: 'setting',
    order: '04',
    title: 'Environment & Brand Color Props',
    shortLabel: 'Environment & Palette',
    accent: 'violet',
    placeholder: 'inside a sunlit modern Vietnamese apartment kitchen with pale wood counters, soft sage-green foliage accents, and subtle brand-matched pastel props softly blurred in the background',
    purpose: 'Grounds the scene in a believable setting aligned with brand palette without stealing attention from the SKU.',
    tokens: [
      'Bright modern kitchen with warm oak counter & morning greenery',
      'Minimalist clinical white vanity with frosted glass & water droplets',
      'Scandinavian minimalist living room, clean neutral palette',
      'Dark matte gaming desk with subtle cyan rim accents',
    ],
    doRule: 'Echo 1–2 official brand accent colors subtly in props, surfaces, or background depth.',
    avoidRule: 'Avoid busy cluttered shelves, random readable signs, or noisy background text.',
  },
  {
    id: 'lighting',
    order: '05',
    title: 'Lighting, Lens Optics & Mood',
    shortLabel: 'Lighting & Optics',
    accent: 'amber',
    placeholder: 'bathed in soft golden-hour morning sunlight streaming from side window, photographed on a 50mm f/1.8 cinema lens with creamy natural bokeh, authentic skin texture, grounded physical shadows, editorial commercial color grade',
    purpose: 'Replaces generic "AI plastic glow" with authentic lens physics, skin pores, specular highlights, and contact shadows.',
    tokens: [
      '50mm f/1.8 natural lifestyle bokeh',
      '85mm macro lens, crisp studio rim light & softbox fill',
      '35mm editorial daylight, realistic shadows & natural skin pores',
      'Soft diffused morning window light, warm commercial color grade',
    ],
    doRule: 'Match lighting mood to category (warm daylight for Mom & Baby; crisp clinical softbox for Derma/Skincare).',
    avoidRule: 'Avoid buzzwords like "8K hyperrealistic unreal engine neon cyberpunk" which cause glossy AI skin.',
  },
  {
    id: 'safezone',
    order: '06',
    title: '9:16 Safe Zone & Guardrails',
    shortLabel: 'Safe Zone & Guardrails',
    accent: 'rose',
    placeholder: 'composed cleanly inside the vertical 9:16 center safe zone with generous clean uncluttered negative space in the top 15% and bottom 25% for text supers and TikTok UI; no on-screen text, no watermarks, no extra fingers, photorealistic commercial quality',
    purpose: 'Guarantees headlines, brand logos, and TikTok buttons never overlap faces or product labels.',
    tokens: [
      'Top 15% clean negative space for brand logo & 2-line headline',
      'Bottom 25% uncluttered area clear of TikTok captions',
      'No on-screen text, no watermarks, no deformed fingers, natural physics',
    ],
    doRule: 'Always check final framing against the TikTok Safe Zone overlay in CapCut (Step 05).',
    avoidRule: 'Never put faces or SKU logos in the top 12% or right edge (where Like/Comment/Share buttons sit).',
  },
];

export const VIDEO_LAYOUT_SLOTS: PromptSlotSpec[] = [
  {
    id: 'camera',
    order: '01',
    title: 'Camera Trajectory (Single Smooth Move)',
    shortLabel: 'Camera Move',
    accent: 'orange',
    placeholder: 'Smooth, steady slow dolly-in camera movement starting at medium framing and gently gliding closer toward the subject and hero product',
    purpose: 'Defines ONE deliberate cinema camera move — preventing jitter, dizzying pans, or frame morphing in Veo 3.1 - Lite.',
    tokens: [
      'Smooth slow dolly-in toward the hero product',
      'Gentle handheld cinema micro-drift (natural breathing feel)',
      'Slow 10-degree horizontal parallax arc around the packshot',
      'Locked tripod frame with subtle rack focus to the bottle',
      'Smooth continuous push-in transition from Start Frame to End Frame',
    ],
    doRule: 'Stick to ONE continuous camera direction per 4s–6s clip.',
    avoidRule: 'Never combine fast zoom + 360 orbit + tilt in a single Veo 3.1 - Lite generation.',
  },
  {
    id: 'action',
    order: '02',
    title: 'Primary Subject / Product Motion (0s–2s)',
    shortLabel: 'Primary Motion',
    accent: 'sky',
    placeholder: 'The subject looks warmly toward the camera with a gentle nod while steadily holding the product slightly forward at chest height in a calm, confident commercial presentation',
    purpose: 'Animates the existing Start Frame with ONE focused physical action without inventing new objects.',
    tokens: [
      'Subject smiles gently and subtly tilts the product 10° toward lens',
      'Hands steadily hold bottle still while a single serum drop glistens',
      'Clean slow macro glide over crisp textures with rising soft steam',
      'Subject turns head warmly toward camera with natural eye contact',
    ],
    doRule: 'Describe only movement of elements ALREADY visible in the Start Frame.',
    avoidRule: 'Avoid rapid hand waving, walking across multiple rooms, or complex finger twisting over product labels.',
  },
  {
    id: 'physics',
    order: '03',
    title: 'Micro-Expression & Secondary Physics (2s–4s)',
    shortLabel: 'Secondary Physics',
    accent: 'violet',
    placeholder: 'Natural eye blink, soft authentic smile progression, subtle wisps of hair drifting gently in morning breeze, delicate dust motes floating through warm sunlight rays, soft fabric shift on shoulder',
    purpose: 'Adds subtle real-world life so the shot feels filmed on a real cinema camera instead of a frozen AI morph.',
    tokens: [
      'Natural eye blink & subtle authentic smile progression',
      'Gentle breeze moving loose hair strands & sheer window curtains',
      'Soft specular light reflection gliding across glossy packaging',
      'Delicate warm steam curling upward in slow motion',
    ],
    doRule: 'Layer 2–3 subtle physical cues (eyes, hair, light glint, steam, fabric).',
    avoidRule: 'Avoid sudden wind gusts, water splashes covering the label, or exaggerated cartoon expressions.',
  },
  {
    id: 'hold',
    order: '04',
    title: 'End Beat & Settling Pose (Final Second)',
    shortLabel: 'End Beat Hold',
    accent: 'amber',
    placeholder: 'Motion gently eases into a balanced, poised hero hold in the final second, keeping subject and product centered cleanly inside the 9:16 safe zone ready for CapCut cut',
    purpose: 'Gives the editor a clean, steady tail frame to land text supers or cut smoothly to the next beat.',
    tokens: [
      'Settles smoothly into a steady hero product hold on the final beat',
      'Eases gently to a warm eye-contact pause for clean edit point',
      'Completes seamless glide landing squarely on End Frame composition',
    ],
    doRule: 'Leave a calm 0.5s–1s settling beat at the end for clean CapCut transitions.',
    avoidRule: 'Avoid abrupt cutoffs mid-gesture or sudden jump cuts at the end of the clip.',
  },
  {
    id: 'stability',
    order: '05',
    title: 'Product / Anatomy Stability & 24fps Lock',
    shortLabel: 'Stability Lock',
    accent: 'emerald',
    placeholder: 'The product packaging, logo, and label typography remain completely rigid, razor-sharp, and undistorted throughout the entire clip; consistent natural lighting, stable hands and facial identity, smooth cinematic 24fps motion, zero flicker, zero on-screen text',
    purpose: 'Explicitly prevents label melting, finger morphing, lighting flicker, and accidental AI subtitles.',
    tokens: [
      'Product packaging, logo & label text remain completely rigid and crisp',
      'Stable facial identity and natural hand anatomy throughout',
      'Consistent exposure & color temperature, smooth 24fps cinema motion, zero flicker, zero text',
    ],
    doRule: 'Always end every commercial product video prompt with a strict packaging & flicker lock.',
    avoidRule: 'Never omit the stability lock when hands or camera move close to a brand logo.',
  },
];

export const IMAGE_MASTER_SAMPLES: SamplePromptItem[] = [
  {
    id: 'img-mombaby-hero',
    mode: 'image',
    title: 'Mom & Baby — Warm Lifestyle Hero',
    category: 'Mom & Baby',
    beatTag: 'BODY · Product Benefit',
    brandFit: 'ColosBaby · Aptamil · FatzBaby · Vita Dairy',
    flowSetup: 'Nano Banana 2.1 / Pro · 9:16 · Thinking: High · x2',
    ingredientsOrFallback: 'Attach (+) Official Product PNG + Locked Mom/Child Character Ref',
    slots: {
      shot: 'Vertical 9:16 medium close-up commercial lifestyle shot at eye level',
      subject: 'a warm Vietnamese mother in her late 20s with shoulder-length dark brown hair in a neat low ponytail, wearing a soft cream cotton blouse, smiling gently beside her cheerful 3-year-old child while holding the milk can naturally at chest height',
      product: 'featuring the exact ColosBaby Gold 800g milk can from the attached reference image, preserving 100% authentic metallic gold-and-green packaging proportions, crisp original logo typography, and readable label layout with zero text warping',
      setting: 'inside a bright, sunlit modern Vietnamese home dining area with light oak wood table, fresh green indoor leaves, and soft pastel cream tones blurred gently behind them',
      lighting: 'bathed in warm golden-hour morning window light from camera left, photographed on a 50mm f/1.8 lens with creamy natural bokeh, authentic skin pores, soft fabric texture, and grounded physical shadows',
      safezone: 'composed cleanly in the vertical 9:16 center safe zone with generous uncluttered bright negative space in the top 15% for brand logo and headline supers, and clear lower 25% for TikTok UI; no on-screen text, no watermarks, natural hands and fingers',
    },
    negativeOrNote: 'Brand Tip (Aptamil / ColosBaby): If text on the milk can shifts slightly, generate clean scene lighting first and overlay the static high-res PNG packshot cleanly in CapCut.',
  },
  {
    id: 'img-beauty-macro',
    mode: 'image',
    title: 'Derma Skincare — Clinical Studio Macro',
    category: 'Beauty & Skincare',
    beatTag: 'DEMO · Texture & Active Ingredient',
    brandFit: 'Dermalogica · Bioderma · Noreva · Olay · UI MASS · ISSY',
    flowSetup: 'Nano Banana Pro · 9:16 · Thinking: High · x2',
    ingredientsOrFallback: 'Attach (+) Official Bottle PNG + Brand Style Ref / Talent Sheet (e.g. Noreva)',
    slots: {
      shot: 'Vertical 9:16 macro editorial skincare commercial shot at a clean 15-degree elevated angle',
      subject: 'clean manicured female fingertips gently dispensing a single luminous crystal-clear serum droplet onto the back of a smooth radiant hand beside the hero bottle',
      product: 'featuring the exact skincare serum bottle from the attached reference image, preserving 100% authentic minimalist clinical label typography, dropper proportions, and matte bottle finish with zero hallucinated text',
      setting: 'resting on a cool frosted white travertine stone slab accented with fresh transparent water droplets and soft diffused clinical blue-white light reflections',
      lighting: 'illuminated by crisp diffused softbox studio lighting with a delicate rim highlight tracing the glass edge, shot on an 85mm macro lens with tack-sharp focus on the bottle label and creamy bokeh falloff',
      safezone: 'centered cleanly inside the 9:16 vertical safe zone leaving clean minimalist white negative space across the top 20% and bottom 25% for typography callouts and legal disclaimer; no generated text, no watermarks',
    },
    negativeOrNote: 'Brand Tip (UI MASS / Beauty Republic): Ensure 100% crisp text on packshot; remember to add mandatory AI claim in CapCut for UI MASS.',
  },
  {
    id: 'img-fnb-packshot',
    mode: 'image',
    title: 'F&B — Appetizing Food & Packaging Scene',
    category: 'F&B',
    beatTag: 'HOOK · Appetite Appeal',
    brandFit: 'Bonzon / Bamboo · Kewpie · Groupe Bel · TH true MILK',
    flowSetup: 'Nano Banana 2.1 · 9:16 · Thinking: High · x2',
    ingredientsOrFallback: 'Attach (+) Content-Approved Real Food Texture Photo + Official Packshot PNG',
    slots: {
      shot: 'Vertical 9:16 appetizing 45-degree tabletop commercial food photography shot',
      subject: 'freshly baked golden-brown cheese-filled dimsum and crispy garlic bread sliced open to showcase rich melted cheese pull and authentic golden crust texture matching the reference food photo',
      product: 'with the exact Bonzon product package from the attached reference image standing upright slightly behind the plate on the left third, preserving 100% authentic packaging colors, logo, and sharp typography with zero distortion',
      setting: 'styled on a rustic warm wooden dining table with ceramic matte plates, subtle fresh herb garnish, and clean soft-focused kitchen background',
      lighting: 'lit by warm directional side daylight with appetizing glossy highlights on the melted cheese, subtle wisps of natural steam, photographed on an 85mm f/2.8 commercial food lens with rich true-to-life colors',
      safezone: 'arranged cleanly inside the 9:16 center safe zone keeping the top 18% clean warm wall tone for bold Montserrat/CookieRun headline and bottom 25% uncluttered; no text overlays, no watermarks',
    },
    negativeOrNote: 'Brand Tip (Bonzon / Bamboo): Always get real food texture & filling reference from Content first; scale static packshot in CapCut if needed to prevent text errors.',
  },
  {
    id: 'img-supplement-wellness',
    mode: 'image',
    title: 'Health Supplement — Bright Nature Wellness',
    category: 'Supplement',
    beatTag: 'BODY · Healthy Lifestyle',
    brandFit: 'SWISSE · BLACKMORES · Nordic Naturals · Bao Xuan · Biofemin',
    flowSetup: 'Nano Banana 2.1 · 9:16 · Thinking: High · x2',
    ingredientsOrFallback: 'Attach (+) Official Supplement Bottle PNG + Brand Color Matrix / Talent Ref',
    slots: {
      shot: 'Vertical 9:16 waist-up healthy lifestyle commercial shot at natural eye level',
      subject: 'an energetic Vietnamese woman in her early 30s with natural glowing skin and relaxed dark hair, wearing a crisp breathable white linen shirt, smiling warmly in a bright morning wellness moment beside a clear glass of water',
      product: 'featuring the exact supplement bottle from the attached reference image resting cleanly in the foreground on a light travertine counter, preserving 100% authentic brand badge, bottle proportions, and readable front label with zero warping',
      setting: 'set inside an airy sunlit conservatory-style home space filled with lush green indoor plants, dappled morning leaf shadows, and clean natural wood textures',
      lighting: 'bathed in fresh, bright Australian-inspired morning sunlight with crisp natural shadows, photographed on a 50mm f/2.0 lens with healthy vibrant skin tones and clean commercial clarity',
      safezone: 'framed inside the 9:16 center safe zone with generous bright negative space in the top 15% for brand logo (Size 29–46%) and clean bottom 25% for mandatory non-medicine legal claim; no AI text, no watermarks',
    },
    negativeOrNote: 'Brand Tip (SWISSE / BLACKMORES): Prioritize lush greenery & bright healthy vibe; always include the mandatory non-medicine disclaimer at the bottom corner for SWISSE.',
  },
  {
    id: 'img-tech-gear',
    mode: 'image',
    title: 'Tech & Gear — Clean Product Studio (No Human)',
    category: 'Household Electronic & Tech',
    beatTag: 'HOOK / HERO · Zero-Human Showcase',
    brandFit: 'Logitech · Electrolux · LG · AQUA · Braun · Bluestone',
    flowSetup: 'Nano Banana Pro · 9:16 · Thinking: High · x2',
    ingredientsOrFallback: 'Attach (+) Official Product Gear PNG (Strictly NO human ref for Logitech)',
    slots: {
      shot: 'Vertical 9:16 low-angle heroic commercial studio product shot',
      subject: 'no human subject — pure precision product showcase focusing on the sleek matte silhouette, sculpted ergonomic contours, and tactile keycap/scroll-wheel craftsmanship',
      product: 'featuring the exact Logitech wireless gaming mouse and compact mechanical keyboard from the attached reference images, preserving 100% authentic hardware proportions, exact logo emblem, button layout, and surface texture with zero warping',
      setting: 'placed on a dark matte slate architectural desk surface with subtle cool cyan (#3DE7FF) geometric rim reflection and ultra-clean minimalist dark studio backdrop',
      lighting: 'sculpted by precision overhead softbox key light and crisp cyan edge rim lighting, photographed on an 85mm studio commercial lens with deep micro-contrast and razor-sharp product reflections',
      safezone: 'centered cleanly in the 9:16 middle third with clean dark negative space across the top 20% for SVN-GilroyXBold supers and bottom 25% clear for TikTok UI and AI Assisted badge; no generated text, no logos added',
    },
    negativeOrNote: 'Brand Tip (Logitech): Strictly NO AI human, NO AI voice, NO brand logo overlay, NO BGM (SFX only) + mandatory AI Assisted label.',
  },
  {
    id: 'img-hook-creative',
    mode: 'image',
    title: 'Creative Hook — Storyboard / Visual Metaphor',
    category: 'Special / Hook Concept',
    beatTag: 'INTRO · Scroll-Stopping Visual Hook',
    brandFit: 'All Brands · Interactive Quiz / Notebook / Before-After Concept',
    flowSetup: 'Nano Banana 2.1 / Pro · 9:16 · Thinking: High · x2',
    ingredientsOrFallback: 'Attach (+) Hero Product PNG + Mood/Concept Ref Image',
    slots: {
      shot: 'Vertical 9:16 top-down angled editorial storytelling shot at 35 degrees',
      subject: 'a handcrafted open cream-paper notebook lying flat on a sunlit wooden desk, its clean pages displaying subtle colorful illustrated icons and a neat visual layout without garbled letters',
      product: 'with the exact hero product from the attached reference image resting crisply beside the open notebook on the right side, preserving 100% authentic packaging proportions, colors, and original logo typography',
      setting: 'surrounded by minimalist brand-color stationery accents, soft botanical leaf shadow falling diagonally across the desk, and airy pastel daylight mood',
      lighting: 'illuminated by bright diffused morning window light creating soft editorial paper textures and realistic contact shadows, photographed on a 50mm f/2.8 commercial lens',
      safezone: 'composed cleanly inside the vertical 9:16 center safe zone leaving open clean desk space at the top 18% and bottom 25% for CapCut animated quiz/hook text overlays; zero hallucinated text on pages',
    },
    negativeOrNote: 'Pro Tip: Leave notebook pages or UI screens visually clean (no AI gibberish text) so you can composite razor-sharp Vietnamese supers in CapCut.',
  },
];

export const VIDEO_MASTER_SAMPLES: SamplePromptItem[] = [
  {
    id: 'vid-lifestyle-dolly',
    mode: 'video',
    title: 'Lifestyle Hero — Warm Slow Dolly-In (6s)',
    category: 'Mom & Baby · Wellness',
    beatTag: 'BODY · Emotional Trust Beat',
    brandFit: 'ColosBaby · Aptamil · SWISSE · BLACKMORES · Bao Xuan',
    flowSetup: 'Mode: Video → Frames (Start Frame) · 9:16 · Veo 3.1 - Lite [Lower Priority] · 6s · x2',
    ingredientsOrFallback: 'Safe Fallback: Keep hands completely stationary; use slow 5% camera dolly-in + warm nod & blink only.',
    slots: {
      camera: 'Smooth, steady slow dolly-in camera movement starting at medium framing and gently gliding closer toward the smiling mother and hero product',
      action: 'She holds the product steadily and confidently at chest height with a subtle, natural micro-turn of her shoulders while giving a warm welcoming nod toward the lens',
      physics: 'Authentic natural eye blink, soft genuine smile progression, delicate strands of hair shifting gently in warm morning air, subtle floating sunlight dust motes through window rays',
      hold: 'Movement eases smoothly into a balanced, heartwarming eye-contact hold during the final second inside the 9:16 center safe zone',
      stability: 'The product packaging, brand logo, and label typography remain completely rigid, sharp, and undistorted throughout the motion; stable facial features and natural fingers, consistent warm exposure, smooth cinematic 24fps motion, zero flicker, zero on-screen text',
    },
    negativeOrNote: 'Anti-Morphing Check: If fingers warp during hand rotation, remove hand turning and let ONLY the camera dolly in while the hands stay rock-steady.',
  },
  {
    id: 'vid-skincare-macro',
    mode: 'video',
    title: 'Skincare Macro — Bottle Glint & Serum Drop (4s)',
    category: 'Beauty & Skincare',
    beatTag: 'DEMO · Hero Texture Shot',
    brandFit: 'Dermalogica · Bioderma · Noreva · Olay · UI MASS · Beauty Republic',
    flowSetup: 'Mode: Video → Frames (Start Frame) · 9:16 · Veo 3.1 - Lite [Lower Priority] · 4s · x2',
    ingredientsOrFallback: 'Safe Fallback: Pure slow horizontal parallax arc across the stationary bottle with gliding light reflection.',
    slots: {
      camera: 'Ultra-smooth slow horizontal parallax glide moving gently from left to right across the macro tabletop setup',
      action: 'A single luminous serum droplet slowly swells and glisteningly settles on the glass dropper tip beside the stationary upright skincare bottle',
      physics: 'Soft specular studio light slowly sweeps across the frosted glass bottle surface and tiny water droplets shimmer subtly on the stone plinth',
      hold: 'Camera decelerates cleanly to rest on a razor-sharp straight-on hero view of the bottle label in the final beat',
      stability: 'The bottle silhouette, dropper proportions, and clinical label typography remain 100% rigid, crisp, and completely undistorted; consistent studio exposure, silky 24fps macro commercial motion, zero flicker, zero generated text',
    },
    negativeOrNote: 'Best Practice: 4s duration keeps macro glass and fine label typography noticeably sharper than 8s.',
  },
  {
    id: 'vid-tech-reveal',
    mode: 'video',
    title: 'Tech & Appliance — Precision Parallax Reveal (4s)',
    category: 'Tech & Home Electronics',
    beatTag: 'HOOK / HERO · SFX-Driven Motion',
    brandFit: 'Logitech · LG · Electrolux · AQUA · Braun · Tiger',
    flowSetup: 'Mode: Video → Frames (Start Frame) · 9:16 · Veo 3.1 - Lite [Lower Priority] · 4s · x2',
    ingredientsOrFallback: 'Safe Fallback: Steady slow pull-back reveal keeping the entire product silhouette locked in center frame.',
    slots: {
      camera: 'Controlled cinematic low-angle slow push-in combined with a minimal 8-degree precision arc across the hero hardware',
      action: 'The product remains anchored firmly on the studio surface while crisp cyan-and-white overhead rim highlights glide smoothly across its matte contours and metallic accents',
      physics: 'Subtle ambient light shimmer across beveled edges and micro-textured matte surface with zero dust or unwanted particles',
      hold: 'Settles sharply into a bold symmetrical center hero hold primed for crisp SFX hit and CapCut headline pop',
      stability: 'Product geometry, buttons, edges, and brand emblem stay 100% solid, geometrically rigid, and undistorted; crisp 24fps studio motion, consistent contrast, zero morphing, zero on-screen text',
    },
    negativeOrNote: 'Logitech Rule: Pair with crisp mechanical click / whoosh SFX in CapCut — zero voiceover and zero background music.',
  },
  {
    id: 'vid-fnb-steam',
    mode: 'video',
    title: 'F&B Appetite — Slow Steam & Table Glide (4s)',
    category: 'F&B',
    beatTag: 'HOOK · Sensory Food Motion',
    brandFit: 'Bonzon / Bamboo · Kewpie · Groupe Bel · LAVIE',
    flowSetup: 'Mode: Video → Frames (Start Frame) · 9:16 · Veo 3.1 - Lite [Lower Priority] · 4s · x2',
    ingredientsOrFallback: 'Safe Fallback: Locked tripod frame animating ONLY delicate rising steam and glossy warm light shimmer.',
    slots: {
      camera: 'Gentle slow forward glide moving closer over the sunlit tabletop toward the freshly plated hero dish',
      action: 'Delicate wisps of warm translucent steam rise slowly and continuously from the freshly cooked food while glossy sauce and golden crust catch natural daylight',
      physics: 'Soft natural window light shifts slightly across the ceramic rim and fresh herb leaves gently sway in the warm kitchen air',
      hold: 'Camera eases smoothly into a mouth-watering close hero hold centered cleanly in the 9:16 frame',
      stability: 'Food shape, authentic filling texture, and background colors remain appetizingly realistic and stable; no unnatural melting or warping, smooth 24fps food-commercial motion, zero flicker, zero on-screen text',
    },
    negativeOrNote: 'Bonzon Tip: Keep the packaged bag out of AI video motion — animate ONLY the appetizing plated food, then layer the crisp static PNG packshot with scale-in animation in CapCut.',
  },
  {
    id: 'vid-start-end-transition',
    mode: 'video',
    title: 'Start → End Frame — Seamless Scene Transition (4s)',
    category: 'Transitions & Hooks',
    beatTag: 'INTRO → BODY · Match-Cut Bridge',
    brandFit: 'All Brands · Quiz Hook / Page Flip / Before → After',
    flowSetup: 'Mode: Video → Frames (Start Frame + End Frame) · 9:16 · Veo 3.1 - Lite [Lower Priority] · 4s · x2',
    ingredientsOrFallback: 'Safe Fallback: Keep camera axis aligned straight forward (pure zoom-in) between Start and End Frames.',
    slots: {
      camera: 'Continuous, fluid forward zoom-in camera transition starting smoothly from the Start Frame composition and accelerating gently through the midpoint before landing cleanly onto the End Frame',
      action: 'The open notebook page turns smoothly in one natural motion as the focal center seamlessly transforms into the clean End Frame visual layout',
      physics: 'Soft realistic paper shadow sweep, subtle natural motion blur during the brief mid-transition glide, clean balanced daylight throughout',
      hold: 'Lands squarely and steadily on the exact End Frame composition during the final 0.8 seconds with crisp settling stillness',
      stability: 'Clean geometric continuity from Start Frame to End Frame with zero chaotic morphing, zero hallucinated letters, consistent color temperature, smooth 24fps motion, zero flicker',
    },
    negativeOrNote: 'Workflow Tip: Upload BOTH Start Frame and End Frame inside FlowAI → Video → Frames so Veo 3.1 - Lite bridges the two exact images cleanly.',
  },
  {
    id: 'vid-problem-reaction',
    mode: 'video',
    title: 'Problem Hook — Expressive Human Micro-Story (6s)',
    category: 'Hook · Storytelling',
    beatTag: 'INTRO · Relatable Pain Point',
    brandFit: 'Sensodyne · Listerine · Acne-id · RiHair · Dermalogica',
    flowSetup: 'Mode: Video → Frames (Start Frame) · 9:16 · Veo 3.1 - Lite [Lower Priority] · 6s · x2',
    ingredientsOrFallback: 'Safe Fallback: Subtle head tilt + brief concerned glance toward mirror/camera without hand touching face.',
    slots: {
      camera: 'Intimate subtle handheld documentary-style camera drift gently pushing closer at eye level',
      action: 'The subject pauses mid-routine with a brief, relatable expression of slight concern, gently glancing toward the mirror and letting out a soft natural sigh',
      physics: 'Authentic micro-expressions around eyes and brow, natural blinking, soft breathing shoulder rise, realistic room ambient light with subtle window shadow shift',
      hold: 'Expression softens into a thoughtful pause on the final beat, creating an ideal hook tension cut into the product solution',
      stability: 'Consistent Vietnamese facial identity, natural skin texture, stable hair and wardrobe details throughout; smooth 24fps filmic motion, zero facial warping, zero flicker, zero on-screen text',
    },
    negativeOrNote: 'Pacing Tip: Trim to the strongest 2.5s–3.5s beat in CapCut to maximize 3-second TikTok hook retention.',
  },
];

export const CHATGPT_REVISION_CHEATSHEET = {
  image: [
    {
      goal: 'Adjust Framing / Safe Zone',
      prompt: 'Update: Đổi sang Medium Shot rộng hơn một chút, chừa trống 20% phía trên để đặt headline 2 dòng, giữ nguyên khuôn mặt và lon sản phẩm.',
    },
    {
      goal: 'Fix Product / Label Fidelity',
      prompt: 'Update: Đặt sản phẩm hướng thẳng 100% về phía ống kính, ánh sáng mềm không bị lóa chữ trên nhãn, giữ đúng tỷ lệ packshot gốc.',
    },
    {
      goal: 'Change Mood / Brand Color',
      prompt: 'Update: Đổi ánh sáng sang bình minh ấm nhẹ, thêm điểm nhấn màu thương hiệu (#00A5B2) tinh tế ở phông nền mờ phía sau.',
    },
    {
      goal: 'Match-Cut Next Scene',
      prompt: 'Next Scene: Viết tiếp Scene 3 giữ nguyên 100% Character Anchor và trang phục từ Scene 2, chuyển góc sang close-up tay rót sản phẩm.',
    },
  ],
  video: [
    {
      goal: 'Fix Warped Hand / Label',
      prompt: 'Update: Tay và nhãn bị méo lúc xoay sản phẩm — sửa thành giữ yên tay và sản phẩm cố định, chỉ cho camera dolly-in chậm và nhân vật cười gật đầu nhẹ.',
    },
    {
      goal: 'Slow Down Camera',
      prompt: 'Update: Giảm tốc độ chuyển động camera chậm hơn 40% theo phong cách TVC premium, mượt ở 24fps, thêm giữ tĩnh 1 giây cuối.',
    },
    {
      goal: 'Boost Natural Realism',
      prompt: 'Update: Thêm chuyển động vi mô tự nhiên (chớp mắt, gió nhẹ làm bay vài sợi tóc, nắng lấp lánh nhẹ trên mặt bàn) nhưng không đổi bố cục Start Frame.',
    },
    {
      goal: 'Convert to 4s Fast Hook',
      prompt: 'Update: Rút gọn nhịp chuyển động cho clip 4s hook nhanh, dứt khoát từ giây 0 để giữ người xem trong 3 giây đầu TikTok.',
    },
  ],
};
