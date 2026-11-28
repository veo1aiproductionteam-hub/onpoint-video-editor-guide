export interface BrandColor {
  name: string;
  hex: string;
}

export interface BrandFont {
  family: string;
  colors?: BrandColor[];
  colorNote?: string;
  styleRule?: string;
  downloadUrl?: string;
  downloadLabel?: string;
}

export interface BrandLogo {
  label: string;
  src: string;
}

export interface BrandAssetImage {
  label: string;
  src: string;
}

export interface BrandTemplateLink {
  label: string;
  url: string;
  kind: 'intro' | 'outro' | 'font' | 'folder' | 'doc';
}

export interface LogoPosition {
  size?: string;
  x?: number;
  y?: number;
  note?: string;
  status: 'confirmed' | 'na' | 'tbd';
}

export interface GuidelineDoc {
  label: string;
  url: string;
  type: 'pdf' | 'image' | 'drive';
}

export interface RefVideo {
  id: string;
  name: string;
  path: string;
  modified: string;
  sizeMb: number | null;
  reasons: string[];
  url: string;
  previewUrl: string;
  poolSize: number;
}

export interface BrandItem {
  id: number;
  slug: string;
  name: string;
  category: string;
  totalVideos: number;
  completeness: 'complete' | 'partial' | 'pending';
  voiceModel: string | null;
  font: BrandFont | null;
  logos: BrandLogo[];
  logoPosition: LogoPosition;
  guidelineSummary: string | null;
  dos: string[];
  donts: string[];
  notes: string[];
  guidelineDocs: GuidelineDoc[];
  templates: BrandTemplateLink[];
  styleRefs: BrandAssetImage[];
  assetImages: BrandAssetImage[];
  driveFolderUrl: string | null;
  editorCollectionUrl: string | null;
  refVideo: RefVideo | null;
}

export interface VoiceSample {
  group: string;
  name: string;
  id: string;
  url: string;
  previewUrl: string;
}

export const BRAND_DRIVE_ROOT_URL = 'https://drive.google.com/drive/folders/1jZlX_LBl-twE-OrKCEd6uNWOdl3lHevS';
export const EDITOR_COLLECTION_ROOT_URL = 'https://drive.google.com/drive/folders/1kmbEJVmEJ2sstknGS878MHPPODKJONUu';
export const VOICE_DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/1foL_k2uWJrIIuULAZEGGk-V1vanGU9Wb';

export const VOICE_SAMPLES: VoiceSample[] = [
  {
    "group": "VO Nữ",
    "name": "HƯƠNG.mp3",
    "id": "1EiR2XG2cy4nTslWIe-pJzo0lQ3CcTzAK",
    "url": "https://drive.google.com/file/d/1EiR2XG2cy4nTslWIe-pJzo0lQ3CcTzAK/view",
    "previewUrl": "https://drive.google.com/file/d/1EiR2XG2cy4nTslWIe-pJzo0lQ3CcTzAK/preview"
  },
  {
    "group": "VO Nữ",
    "name": "NHƯ THỦY.mp3",
    "id": "1J7rAeQR9pxXOMmleMf8Kgt2-Gwwb_SVK",
    "url": "https://drive.google.com/file/d/1J7rAeQR9pxXOMmleMf8Kgt2-Gwwb_SVK/view",
    "previewUrl": "https://drive.google.com/file/d/1J7rAeQR9pxXOMmleMf8Kgt2-Gwwb_SVK/preview"
  },
  {
    "group": "VO Nữ",
    "name": "SUNNY.mp3",
    "id": "1Gu7nu-vI76B_I--ywDvYK1504DJCAvHg",
    "url": "https://drive.google.com/file/d/1Gu7nu-vI76B_I--ywDvYK1504DJCAvHg/view",
    "previewUrl": "https://drive.google.com/file/d/1Gu7nu-vI76B_I--ywDvYK1504DJCAvHg/preview"
  },
  {
    "group": "VO Nữ",
    "name": "THÙY.mp3",
    "id": "1IyZlK6aZXkAl8vju1pEIjiRDj_BAKvw6",
    "url": "https://drive.google.com/file/d/1IyZlK6aZXkAl8vju1pEIjiRDj_BAKvw6/view",
    "previewUrl": "https://drive.google.com/file/d/1IyZlK6aZXkAl8vju1pEIjiRDj_BAKvw6/preview"
  },
  {
    "group": "VO Nữ",
    "name": "Mẫu Nữ 1.mp3",
    "id": "1RC5ZSSaDl019KgDVR1k-fg-LnawA_6Su",
    "url": "https://drive.google.com/file/d/1RC5ZSSaDl019KgDVR1k-fg-LnawA_6Su/view",
    "previewUrl": "https://drive.google.com/file/d/1RC5ZSSaDl019KgDVR1k-fg-LnawA_6Su/preview"
  },
  {
    "group": "VO Nữ",
    "name": "Mẫu Nữ 2.mp3",
    "id": "1A-PTKtAfbvh8t_0KzJ81fTVR8xnGFrgv",
    "url": "https://drive.google.com/file/d/1A-PTKtAfbvh8t_0KzJ81fTVR8xnGFrgv/view",
    "previewUrl": "https://drive.google.com/file/d/1A-PTKtAfbvh8t_0KzJ81fTVR8xnGFrgv/preview"
  },
  {
    "group": "VO Nữ",
    "name": "Mẫu Nữ 3.mp3",
    "id": "1QQ_o-HkCY-hhO-JZkZFjXkAk3QTpbhfK",
    "url": "https://drive.google.com/file/d/1QQ_o-HkCY-hhO-JZkZFjXkAk3QTpbhfK/view",
    "previewUrl": "https://drive.google.com/file/d/1QQ_o-HkCY-hhO-JZkZFjXkAk3QTpbhfK/preview"
  },
  {
    "group": "VO Baby",
    "name": "Bé An Nhiên.mp3",
    "id": "1lWTQaHNE0TWUS-Bd9HaRkesR8z6asG9P",
    "url": "https://drive.google.com/file/d/1lWTQaHNE0TWUS-Bd9HaRkesR8z6asG9P/view",
    "previewUrl": "https://drive.google.com/file/d/1lWTQaHNE0TWUS-Bd9HaRkesR8z6asG9P/preview"
  },
  {
    "group": "VO Baby",
    "name": "Bé An.mp3",
    "id": "1uVXDWVM-gV3LdiCjPWQ5qS4STfAzIrfF",
    "url": "https://drive.google.com/file/d/1uVXDWVM-gV3LdiCjPWQ5qS4STfAzIrfF/view",
    "previewUrl": "https://drive.google.com/file/d/1uVXDWVM-gV3LdiCjPWQ5qS4STfAzIrfF/preview"
  },
  {
    "group": "VO Baby",
    "name": "Bé Bắp.MP3",
    "id": "1C6XWpQB8uZAx7wFh2F9p9kZUpcQKgme3",
    "url": "https://drive.google.com/file/d/1C6XWpQB8uZAx7wFh2F9p9kZUpcQKgme3/view",
    "previewUrl": "https://drive.google.com/file/d/1C6XWpQB8uZAx7wFh2F9p9kZUpcQKgme3/preview"
  },
  {
    "group": "VO Baby",
    "name": "Bé Thái.mp3",
    "id": "1kDl4qePA0sbgO1Wuj0Jm01zcno7CvAsn",
    "url": "https://drive.google.com/file/d/1kDl4qePA0sbgO1Wuj0Jm01zcno7CvAsn/view",
    "previewUrl": "https://drive.google.com/file/d/1kDl4qePA0sbgO1Wuj0Jm01zcno7CvAsn/preview"
  }
];

export const BRANDS: BrandItem[] = [
  {
    "id": 1,
    "slug": "converse",
    "name": "Converse",
    "category": "Fashion & Sport",
    "totalVideos": 204,
    "completeness": "complete",
    "voiceModel": null,
    "font": {
      "family": "Mono45 Headline Bold",
      "colors": [],
      "styleRule": "Clean bold headline styling matching Converse street aesthetic"
    },
    "logos": [
      {
        "label": "Converse Logo",
        "src": "./assets/logos/converse.webp"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Thương hiệu thời trang đường phố & sneaker Converse. Logo chính đã sẵn sàng trong thư mục ĐẠT; thông tin font, voice & vị trí logo video sẽ cập nhật chi tiết.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1dehvDEFiIHmVA1dXza5DCtZfNK6u_f_P",
    "refVideo": {
      "id": "1WRKvo2f8BdT7bzV9L4GtNjC1FxX42Lim",
      "name": "CV2610003.mp4",
      "path": "2026/THÁNG 10/CV2610003.mp4",
      "modified": "2026-11-04",
      "sizeMb": 26.4,
      "reasons": [
        "Done",
        "0 Revise",
        "Shooting",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1WRKvo2f8BdT7bzV9L4GtNjC1FxX42Lim/view",
      "previewUrl": "https://drive.google.com/file/d/1WRKvo2f8BdT7bzV9L4GtNjC1FxX42Lim/preview",
      "poolSize": 81
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 2,
    "slug": "inova-betadine",
    "name": "iNova Betadine",
    "category": "Mom & Baby",
    "totalVideos": 200,
    "completeness": "complete",
    "voiceModel": "Inova",
    "font": {
      "family": "Montserrat",
      "colors": [
        {
          "name": "Betadine Blue",
          "hex": "#005AAB"
        }
      ],
      "styleRule": "Sử dụng Stroke hoặc Background"
    },
    "logos": [
      {
        "label": "Betadine Logo",
        "src": "./assets/logos/betadine.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Dòng sản phẩm chăm sóc sức khỏe & sát khuẩn iNova Betadine. Logo PNG đã sẵn sàng từ kho ĐẠT.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Gg7YbdpOE-tNEQQf6JRA8dAyHpN750KH",
    "refVideo": {
      "id": "1jamYvf0iNHjC_m-s62abEnYKXjGHAP_L",
      "name": "BTD2611003.mp4",
      "path": "BTD/Tháng 11/BTD2611003.mp4",
      "modified": "2026-11-20",
      "sizeMb": 51.7,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1jamYvf0iNHjC_m-s62abEnYKXjGHAP_L/view",
      "previewUrl": "https://drive.google.com/file/d/1jamYvf0iNHjC_m-s62abEnYKXjGHAP_L/preview",
      "poolSize": 81
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 3,
    "slug": "puma",
    "name": "PUMA",
    "category": "Fashion & Sport",
    "totalVideos": 156,
    "completeness": "partial",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1hoF36MdObXFrZvv260Drt08Bwgk45v1M",
    "refVideo": {
      "id": "1gQqxbolACggfNgA5_XBsKbzfZRg6Jd4B",
      "name": "PMS2611001.mp4",
      "path": "Tháng 11/PMS2611001.mp4",
      "modified": "2026-11-10",
      "sizeMb": 26.2,
      "reasons": [
        "Done",
        "0 Revise",
        "Shooting",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1gQqxbolACggfNgA5_XBsKbzfZRg6Jd4B/view",
      "previewUrl": "https://drive.google.com/file/d/1gQqxbolACggfNgA5_XBsKbzfZRg6Jd4B/preview",
      "poolSize": 56
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 4,
    "slug": "fatzbaby",
    "name": "FatzBaby",
    "category": "Mom & Baby",
    "totalVideos": 78,
    "completeness": "complete",
    "voiceModel": "Giọng nữ miền Nam - trẻ trung sôi nổi",
    "font": {
      "family": "SVN-Gilroy",
      "colors": [
        {
          "name": "FatzBaby Orange",
          "hex": "#F68922"
        }
      ],
      "styleRule": "Sử dụng Background cho text/supers"
    },
    "logos": [
      {
        "label": "FatzBaby Logo",
        "src": "./assets/logos/fatzbaby.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Thiết bị chăm sóc Mẹ & Bé FatzBaby (máy tiệt trùng, hâm sữa, hút sữa). Logo cam nhận diện đã sẵn sàng.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1YwpzxNG0-llI1MzZ46BF3zV1plG8PXSy",
    "refVideo": {
      "id": "1VdeROPwh3bVpalRwRtErdkrto_ZPDAWu",
      "name": "FB06081054.mp4",
      "path": "2026/THÁNG 8/FB06081054.mp4",
      "modified": "2026-10-30",
      "sizeMb": 87.3,
      "reasons": [
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1VdeROPwh3bVpalRwRtErdkrto_ZPDAWu/view",
      "previewUrl": "https://drive.google.com/file/d/1VdeROPwh3bVpalRwRtErdkrto_ZPDAWu/preview",
      "poolSize": 29
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 5,
    "slug": "vita-dairy",
    "name": "Vita Dairy",
    "category": "Mom & Baby",
    "totalVideos": 71,
    "completeness": "complete",
    "voiceModel": null,
    "font": {
      "family": "Montserrat / SVN-Gotham Bold",
      "colors": [
        {
          "name": "Red Mojo",
          "hex": "#AC2019"
        },
        {
          "name": "ColosBaby Green",
          "hex": "#C7D842"
        },
        {
          "name": "VitaDairy Blue",
          "hex": "#0068B7"
        }
      ],
      "styleRule": "Đồng bộ bộ nhận diện VitaDairy / ColosBaby Masterbrand."
    },
    "logos": [
      {
        "label": "VitaDairy Logo",
        "src": "./assets/logos/vitadairy.png"
      },
      {
        "label": "ColosBaby Master",
        "src": "./assets/logos/colosbaby-main.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Kênh chính VitaDairy (bao gồm dòng ColosBaby Gold, Pedia, Lactoferrin). Tham khảo bộ Total Brand & TikTok Guideline ColosBaby cho màu sắc, packshot và claim dinh dưỡng.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "ColosBaby & VitaDairy TikTok Guideline (PDF)",
        "url": "./assets/guidelines/colosbaby-guideline.pdf",
        "type": "pdf"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1AA-C0PF9dKYDpYQ0V3vPaQ3UXVCgv65J",
    "refVideo": {
      "id": "1acrgW-q5bE787tkPV4AsU5mOgKVn48co",
      "name": "VDA2610009.mp4",
      "path": "2026/THÁNG 10/VDA2610009.mp4",
      "modified": "2026-11-16",
      "sizeMb": 57.8,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026",
        "VDA code"
      ],
      "url": "https://drive.google.com/file/d/1acrgW-q5bE787tkPV4AsU5mOgKVn48co/view",
      "previewUrl": "https://drive.google.com/file/d/1acrgW-q5bE787tkPV4AsU5mOgKVn48co/preview",
      "poolSize": 12
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/18l4L53ZRbvc8PkMigPili-tMxmXOY8yn"
  },
  {
    "id": 6,
    "slug": "nordic-naturals",
    "name": "Nordic Naturals",
    "category": "Supplement",
    "totalVideos": 70,
    "completeness": "complete",
    "voiceModel": null,
    "font": {
      "family": "Montserrat",
      "colors": [
        {
          "name": "Nordic Blue",
          "hex": "#055CC3"
        }
      ],
      "styleRule": "Sử dụng Background cho text/supers"
    },
    "logos": [
      {
        "label": "Nordic Naturals Logo",
        "src": "./assets/logos/nordic-naturals.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Thực phẩm bổ sung Omega-3 / DHA Nordic Naturals. Logo chính thức đã sẵn sàng từ kho ĐẠT.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 7,
    "slug": "gillette",
    "name": "Gillette",
    "category": "FMCG",
    "totalVideos": 54,
    "completeness": "complete",
    "voiceModel": "Gillette Mach 3 - TVC - Voice Talent Đức Huy",
    "font": {
      "family": "SFU Futura",
      "colors": [
        {
          "name": "Black",
          "hex": "#000000"
        },
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Dark Blue",
          "hex": "#0B2C5F"
        }
      ],
      "styleRule": "Có sử dụng Stroke"
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1HkaMzTDCD10qw8hcEkYsE6DYIoENgshe",
    "refVideo": {
      "id": "1tDSo-pueHHX-dfGVT_xDOE7-BlAocPRk",
      "name": "GLA2610003.mp4",
      "path": "GILLETTE/2026/THÁNG 10/GLA2610003.mp4",
      "modified": "2026-11-10",
      "sizeMb": 31.5,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1tDSo-pueHHX-dfGVT_xDOE7-BlAocPRk/view",
      "previewUrl": "https://drive.google.com/file/d/1tDSo-pueHHX-dfGVT_xDOE7-BlAocPRk/preview",
      "poolSize": 36
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 8,
    "slug": "mustela",
    "name": "Mustela",
    "category": "Mom & Baby",
    "totalVideos": 35,
    "completeness": "partial",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/12JvJZnAlL2mHzJCfoX9A5FUb1U2uvBOW",
    "refVideo": {
      "id": "1FmNwKRt3K6JD8HpY4BPfxduhJJwvA-hc",
      "name": "MTL0001839.mp4",
      "path": "MTL0001839.mp4",
      "modified": "2026-08-26",
      "sizeMb": 28.4,
      "reasons": [],
      "url": "https://drive.google.com/file/d/1FmNwKRt3K6JD8HpY4BPfxduhJJwvA-hc/view",
      "previewUrl": "https://drive.google.com/file/d/1FmNwKRt3K6JD8HpY4BPfxduhJJwvA-hc/preview",
      "poolSize": 9
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 9,
    "slug": "olay",
    "name": "Olay",
    "category": "Beauty",
    "totalVideos": 32,
    "completeness": "complete",
    "voiceModel": null,
    "font": {
      "family": "SVN-Didot",
      "colors": [
        {
          "name": "Charcoal Dark",
          "hex": "#2C2C2C"
        }
      ],
      "styleRule": "Elegant editorial serif — clean contrast"
    },
    "logos": [
      {
        "label": "Olay Logo",
        "src": "./assets/logos/olay.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Chăm sóc da cao cấp Olay (P&G Beauty — dòng AI Premium). Logo đen bản chuẩn đã sẵn sàng.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1jGD_6STBSQHgkS6k8CgS8hblvZs9Nk7C",
    "refVideo": {
      "id": "1TH9J4pPOeq7WFjXkSJLHUG8zFELY23J1",
      "name": "OLA2610001.mp4",
      "path": "2026/Tháng 10/OLA2610001.mp4",
      "modified": "2026-10-09",
      "sizeMb": 18.8,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Premium",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1TH9J4pPOeq7WFjXkSJLHUG8zFELY23J1/view",
      "previewUrl": "https://drive.google.com/file/d/1TH9J4pPOeq7WFjXkSJLHUG8zFELY23J1/preview",
      "poolSize": 8
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 10,
    "slug": "colosbaby",
    "name": "ColosBaby",
    "category": "Mom & Baby",
    "totalVideos": 31,
    "completeness": "complete",
    "voiceModel": "Như Thùy",
    "font": {
      "family": "Nunito / Montserrat",
      "colors": [
        {
          "name": "ColosBaby Red",
          "hex": "#A50034"
        },
        {
          "name": "ColosBaby Green",
          "hex": "#5D9441"
        },
        {
          "name": "Xanh Cốm (Gold KV)",
          "hex": "#C7D842"
        },
        {
          "name": "Milky Pistachio (Lacto)",
          "hex": "#DDEBB7"
        },
        {
          "name": "Nourished Gold",
          "hex": "#CDA053"
        },
        {
          "name": "White Stroke",
          "hex": "#FFFFFF"
        }
      ],
      "styleRule": "Sử dụng White stroke (viền trắng). Không đặt chữ vàng nhạt trên nền trời xanh.",
      "downloadUrl": "./assets/fonts/Montserrat-VariableFont.ttf",
      "downloadLabel": "Montserrat Font"
    },
    "logos": [
      {
        "label": "ColosBaby Master (Nhiều SKU)",
        "src": "./assets/logos/colosbaby-main.png"
      },
      {
        "label": "ColosBaby Gold (1 SKU)",
        "src": "./assets/logos/colosbaby-gold.png"
      },
      {
        "label": "ColosBaby Gold Pedia (1 SKU)",
        "src": "./assets/logos/colosbaby-pedia.png"
      },
      {
        "label": "ColosBaby Lactoferrin (1 SKU)",
        "src": "./assets/logos/colosbaby-lacto.png"
      },
      {
        "label": "VitaDairy Logo",
        "src": "./assets/logos/vitadairy.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí cụ thể trong video sẽ cập nhật sau. Quy tắc logo: 1 SKU dùng logo riêng của SKU; nhiều SKU dùng logo ColosBaby chung."
    },
    "guidelineSummary": "Tinh thần \"Có gốc đề kháng khỏe, cứ thế mà lớn thôi\". Bối cảnh thiên nhiên ngoài trời, ánh sáng bình minh pha vàng ấm áp. Luôn giữ màu xanh cốm (#C7D842) làm chủ đạo.",
    "dos": [
      "Bối cảnh ngoài trời mang ánh sáng bình minh pha vàng ấm, thiên nhiên, đồng cỏ.",
      "Em bé năng động, tươi vui, khám phá trên cánh đồng.",
      "Giữ màu xanh cốm (#C7D842) đặc trưng; kết hợp trắng sữa hoặc vàng Gold.",
      "Màu đỏ (#AC2019) chủ yếu cho logo ColosBaby và thông tin promotion quan trọng.",
      "Sản phẩm đặt trang trọng trên bục trắng / Gold / bục gỗ; nhớ đẩy layer packshot lên rõ nét ở Outro.",
      "Riêng Lactoferrin: luôn có cue đường nét đứt sinh mổ và nền xanh pastel (#DDEBB7)."
    ],
    "donts": [
      "Không phối màu chói/choẻ với xanh cốm (cam + xanh cốm, neon, gradient gắt).",
      "Không để text màu sáng (vàng gold nhạt) trên nền trời xanh gây khó đọc.",
      "Không lạm dụng xanh lá đậm (dễ nhầm sang Nutifood) — chỉ dùng highlight ngắn.",
      "Không dùng màu xám lạnh làm chân đế sản phẩm.",
      "Không dùng sai packshot SKU (kiểm tra kỹ 400g vs 800g, thùng 110ml vs 180ml)."
    ],
    "guidelineDocs": [
      {
        "label": "ColosBaby Total Brand & TikTok Guideline (PDF)",
        "url": "./assets/guidelines/colosbaby-guideline.pdf",
        "type": "pdf"
      },
      {
        "label": "ColosBaby Lactoferrin Brand Guideline Sheet (JPG)",
        "url": "./assets/guidelines/colosbaby-lacto-guideline.jpg",
        "type": "image"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1AA-C0PF9dKYDpYQ0V3vPaQ3UXVCgv65J",
    "refVideo": {
      "id": "1TthIOXN7pHlJfTvQEYW6ybflo2deAN4Y",
      "name": "CBB00011089_HD.mp4",
      "path": "2026/THÁNG 8/CBB00011089_HD.mp4",
      "modified": "2026-09-28",
      "sizeMb": 48.2,
      "reasons": [
        "HD Master",
        "ColosBaby SKU",
        "BRAND NEW 2026"
      ],
      "url": "https://drive.google.com/file/d/1TthIOXN7pHlJfTvQEYW6ybflo2deAN4Y/view",
      "previewUrl": "https://drive.google.com/file/d/1TthIOXN7pHlJfTvQEYW6ybflo2deAN4Y/preview",
      "poolSize": 18
    },
    "styleRefs": [],
    "assetImages": [
      {
        "label": "Character: Boy Lactoferrin",
        "src": "./assets/brand-assets/colosbaby/boy-lac.png"
      },
      {
        "label": "Character: Girl Gold",
        "src": "./assets/brand-assets/colosbaby/girl-gold.png"
      },
      {
        "label": "Character: Mom Lactoferrin",
        "src": "./assets/brand-assets/colosbaby/mom-lac.png"
      },
      {
        "label": "Icon: ColosIgG 24h",
        "src": "./assets/brand-assets/colosbaby/icon-colosigg.png"
      },
      {
        "label": "Icon: IgHM",
        "src": "./assets/brand-assets/colosbaby/icon-ighm.png"
      },
      {
        "label": "Icon: Lactoferrin",
        "src": "./assets/brand-assets/colosbaby/icon-lactoferrin.png"
      },
      {
        "label": "Icon: Synbiotic",
        "src": "./assets/brand-assets/colosbaby/icon-synbiotic.png"
      },
      {
        "label": "Packshot: Lactoferrin 3+ 800g",
        "src": "./assets/brand-assets/colosbaby/lacto-3plus-800g.png"
      },
      {
        "label": "KV: Lactoferrin Master",
        "src": "./assets/brand-assets/colosbaby/kv-lacto-master.png"
      },
      {
        "label": "Packshot: Pedia 110ml",
        "src": "./assets/brand-assets/colosbaby/pedia-110ml.png"
      },
      {
        "label": "Ref Layout: ColosBaby Gold",
        "src": "./assets/brand-assets/colosbaby/ref-gold.png"
      },
      {
        "label": "Ref Layout: ColosBaby Lactoferrin",
        "src": "./assets/brand-assets/colosbaby/ref-lacto.png"
      },
      {
        "label": "Ref Layout: ColosBaby Pedia",
        "src": "./assets/brand-assets/colosbaby/ref-pedia.png"
      }
    ],
    "templates": [
      {
        "label": "ColosBaby Characters Folder",
        "url": "https://drive.google.com/drive/folders/11valBaJbuuts_GA5iOHUua6uRNn98gur",
        "kind": "folder"
      },
      {
        "label": "ColosBaby Nutrient Icons Folder",
        "url": "https://drive.google.com/drive/folders/1OFUC5GQnFLov1ypEfngaUnoZoa1_vfxW",
        "kind": "folder"
      },
      {
        "label": "ColosBaby Outros & Packshots",
        "url": "https://drive.google.com/drive/folders/1gk3u0COIFg5JBPyIARUO3QugSm6OP03b",
        "kind": "outro"
      },
      {
        "label": "ColosBaby Ref Layouts & Clips",
        "url": "https://drive.google.com/drive/folders/1lRb0sNK_cYeVN3blmwdtZ4p82FCJtL6b",
        "kind": "folder"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1QjeJz43nNR7G2G8b4oIL5Er-XrFW7KN1"
  },
  {
    "id": 11,
    "slug": "ajmal",
    "name": "AJMAL",
    "category": "Beauty",
    "totalVideos": 25,
    "completeness": "partial",
    "voiceModel": null,
    "font": {
      "family": "SVN-Recoleta",
      "colors": [],
      "styleRule": "Luxury fragrance serif typography"
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 12,
    "slug": "oralb",
    "name": "OralB",
    "category": "FMCG",
    "totalVideos": 21,
    "completeness": "complete",
    "voiceModel": "OralB_BẢO NGỌC",
    "font": {
      "family": "SVN-Gotham",
      "colors": [
        {
          "name": "Black",
          "hex": "#000000"
        },
        {
          "name": "Oral-B Navy Blue",
          "hex": "#08378A"
        }
      ],
      "styleRule": "Clean clinical typography"
    },
    "logos": [
      {
        "label": "Oral-B #1 Nha Sĩ Khuyên Dùng",
        "src": "./assets/logos/oralb.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Chăm sóc răng miệng Oral-B (P&G). Đã có sẵn huy hiệu logo \"#1 Nha Sĩ Toàn Cầu Khuyên Dùng\".",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1HkaMzTDCD10qw8hcEkYsE6DYIoENgshe",
    "refVideo": {
      "id": "1M3bvDiyWX8jdHz1OIPfP4reMmVVQw8wJ",
      "name": "OBR2610007.mp4",
      "path": "ORAL B/2026/THÁNG 10/OBR2610007.mp4",
      "modified": "2026-10-21",
      "sizeMb": 30.6,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1M3bvDiyWX8jdHz1OIPfP4reMmVVQw8wJ/view",
      "previewUrl": "https://drive.google.com/file/d/1M3bvDiyWX8jdHz1OIPfP4reMmVVQw8wJ/preview",
      "poolSize": 15
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 13,
    "slug": "gillette---venus",
    "name": "Gillette - Venus",
    "category": "FMCG",
    "totalVideos": 15,
    "completeness": "pending",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 14,
    "slug": "sweety",
    "name": "Sweety",
    "category": "Mom & Baby",
    "totalVideos": 5,
    "completeness": "complete",
    "voiceModel": null,
    "font": {
      "family": "Nunito",
      "colors": [
        {
          "name": "Sweety Deep Indigo",
          "hex": "#1F0973"
        }
      ],
      "styleRule": "Có sử dụng Stroke"
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1pu_p7f5QjZULnN4x7bS5B6CHKAnzKsWB",
    "refVideo": {
      "id": "1hlbfuIZyz4dOMTNUxs4gsunxQcwyNRBN",
      "name": "STY2611005.mp4",
      "path": "2026/THÁNG 11/STY2611005.mp4",
      "modified": "2026-11-12",
      "sizeMb": 24.2,
      "reasons": [
        "Done",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1hlbfuIZyz4dOMTNUxs4gsunxQcwyNRBN/view",
      "previewUrl": "https://drive.google.com/file/d/1hlbfuIZyz4dOMTNUxs4gsunxQcwyNRBN/preview",
      "poolSize": 5
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 15,
    "slug": "lactacyd",
    "name": "Lactacyd",
    "category": "Beauty",
    "totalVideos": 3,
    "completeness": "partial",
    "voiceModel": null,
    "font": {
      "family": "SVN-Didot",
      "colors": [
        {
          "name": "Lactacyd Mint Teal",
          "hex": "#56A695"
        }
      ],
      "styleRule": "Soft feminine editorial serif"
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 16,
    "slug": "babé",
    "name": "Babé",
    "category": "Beauty",
    "totalVideos": 1,
    "completeness": "pending",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 17,
    "slug": "magnum",
    "name": "Magnum",
    "category": "F&B",
    "totalVideos": 1,
    "completeness": "partial",
    "voiceModel": null,
    "font": {
      "family": "Montserrat",
      "colors": [
        {
          "name": "Black",
          "hex": "#000000"
        }
      ],
      "styleRule": "Clean bold sans-serif"
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 18,
    "slug": "listerine",
    "name": "LISTERINE",
    "category": "FMCG",
    "totalVideos": 250,
    "completeness": "partial",
    "voiceModel": null,
    "font": null,
    "logos": [
      {
        "label": "Listerine Logo",
        "src": "./assets/logos/listerine.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ZyTKhVizRgIi5ogFBvVMAy3hJzAD8PoT",
    "refVideo": {
      "id": "1s3-Po9pHPpcatKpJaOT9xRt5Y_9r-a3j",
      "name": "Final_Kênh 2 clip 27.mp4",
      "path": "Final_Kênh 2 clip 27.mp4",
      "modified": "2026-03-16",
      "sizeMb": 38.5,
      "reasons": [
        "Final"
      ],
      "url": "https://drive.google.com/file/d/1s3-Po9pHPpcatKpJaOT9xRt5Y_9r-a3j/view",
      "previewUrl": "https://drive.google.com/file/d/1s3-Po9pHPpcatKpJaOT9xRt5Y_9r-a3j/preview",
      "poolSize": 18
    },
    "styleRefs": [],
    "assetImages": [
      {
        "label": "Cool Mint Zero",
        "src": "./assets/brand-assets/listerine/coolmint-zero.png"
      },
      {
        "label": "Healthy Bright",
        "src": "./assets/brand-assets/listerine/healthy-bright.png"
      },
      {
        "label": "Green Tea Zero",
        "src": "./assets/brand-assets/listerine/greentea-zero.png"
      },
      {
        "label": "Total Care Zero",
        "src": "./assets/brand-assets/listerine/totalcare-zero.png"
      },
      {
        "label": "Total Care",
        "src": "./assets/brand-assets/listerine/totalcare.png"
      }
    ],
    "templates": [
      {
        "label": "Listerine Packshots Folder",
        "url": "https://drive.google.com/drive/folders/1thVSITVS76aSb2osP28dgcggXmqmEZvi",
        "kind": "folder"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1iisWtX9VewXPPyXYLgzffBpV8ybELszl"
  },
  {
    "id": 19,
    "slug": "aptamil",
    "name": "Aptamil",
    "category": "Mom & Baby",
    "totalVideos": 241,
    "completeness": "complete",
    "voiceModel": null,
    "font": {
      "family": "SVN-Gilroy",
      "colors": [
        {
          "name": "Dark Blue",
          "hex": "#031E93"
        },
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Gold",
          "hex": "#FFDA64"
        }
      ],
      "styleRule": "Light stroke (stroke nhẹ)",
      "colorNote": "Màu xanh đậm (#031E93), trắng (#FFFFFF), và vàng (#FFDA64) có stroke nhẹ."
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Strict packshot typography and bear-scarf logo accuracy. Keep packshots static and always include the mandatory claim on every frame featuring the product.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Qv3DE-tOvoc8_ABQ4ESnHfsvts85mtwy",
    "refVideo": {
      "id": "1pEbeQPJmxaJVRt9nidoBQKEihyDdNozZ",
      "name": "DNA2610010.mp4",
      "path": "Tháng 10/DNA2610010.mp4",
      "modified": "2026-10-21",
      "sizeMb": 67.8,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1pEbeQPJmxaJVRt9nidoBQKEihyDdNozZ/view",
      "previewUrl": "https://drive.google.com/file/d/1pEbeQPJmxaJVRt9nidoBQKEihyDdNozZ/preview",
      "poolSize": 92
    },
    "styleRefs": [
      {
        "label": "Font & Color Style Reference 1",
        "src": "./assets/style-refs/aptamil-font-1.png"
      },
      {
        "label": "Brand Guideline Visual 1",
        "src": "./assets/style-refs/aptamil-guide-1.png"
      },
      {
        "label": "Brand Guideline Visual 2",
        "src": "./assets/style-refs/aptamil-guide-2.png"
      },
      {
        "label": "Packshot & Bear Scarf Note Ref 1",
        "src": "./assets/style-refs/aptamil-note-1.png"
      },
      {
        "label": "Packshot & Claim Note Ref 2",
        "src": "./assets/style-refs/aptamil-note-2.png"
      }
    ],
    "assetImages": [
      {
        "label": "Icon Infinity",
        "src": "./assets/brand-assets/aptamil/infinity.png"
      },
      {
        "label": "Stage 3 (Side 1)",
        "src": "./assets/brand-assets/aptamil/stage3-side1.png"
      },
      {
        "label": "Badge New Zealand",
        "src": "./assets/brand-assets/aptamil/new-zealand.png"
      },
      {
        "label": "Badge Trẻ Sinh Mổ",
        "src": "./assets/brand-assets/aptamil/tre-sinh-mo.png"
      },
      {
        "label": "Profutura Cesar Biotik Stage 3 (Front)",
        "src": "./assets/brand-assets/aptamil/stage3-front.png"
      }
    ],
    "templates": [
      {
        "label": "Aptamil Packshots Folder",
        "url": "https://drive.google.com/drive/folders/168HotM-Wagrd7n-_sFKNcmnH8j1HJzS1",
        "kind": "folder"
      },
      {
        "label": "Aptamil Materials & PSB Templates",
        "url": "https://drive.google.com/drive/folders/18M3gGe3K0fx4a1_HXSeoYlG-qwJ0DzSa",
        "kind": "folder"
      },
      {
        "label": "Aptamil Fonts Folder",
        "url": "https://drive.google.com/drive/folders/1J24Kj93uek9yLetGyHudQTtzbq-VdhP0",
        "kind": "font"
      }
    ],
    "notes": [
      "Brand rất kỹ phần chữ trên packshot và logo trên khăn con gấu.",
      "Packshot giữ đứng yên rồi add hình vào (không tạo chuyển động làm méo chữ).",
      "Logo khăn trên con gấu nên design nhẹ lại để khi chuyển động không bị sai nét.",
      "Bắt buộc: Frame nào có sản phẩm luôn phải có câu claim đi kèm."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1_ChH5-Db7klLSd4X11oJjT4Vz8OVnzad"
  },
  {
    "id": 20,
    "slug": "inova-acne-id",
    "name": "iNova Acne-id",
    "category": "Beauty",
    "totalVideos": 213,
    "completeness": "complete",
    "voiceModel": "iNOVA",
    "font": {
      "family": "SVN-Gotham",
      "colors": [
        {
          "name": "Acne-Aid Red",
          "hex": "#EC0113"
        },
        {
          "name": "Black",
          "hex": "#000000"
        }
      ],
      "styleRule": "Red (#EC0113) & Black (#000000)",
      "colorNote": "Font SVN-Gotham với bộ màu đỏ thương hiệu (#EC0113) và đen."
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1n_R60QgVTINZgIm5Ah6QW8qIJNcxAbm8",
    "refVideo": {
      "id": "1x7XF-FZxZcemc0So096X9q9EHGlz0EhT",
      "name": "ACI2610011.mp4",
      "path": "ACNE-AID/Tháng 10/ACI2610011.mp4",
      "modified": "2026-11-13",
      "sizeMb": 55.3,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1x7XF-FZxZcemc0So096X9q9EHGlz0EhT/view",
      "previewUrl": "https://drive.google.com/file/d/1x7XF-FZxZcemc0So096X9q9EHGlz0EhT/preview",
      "poolSize": 97
    },
    "styleRefs": [],
    "assetImages": [
      {
        "label": "Acne-Aid Packshot",
        "src": "./assets/brand-assets/inova-acne-id/acne-aid.png"
      },
      {
        "label": "Gentle Cleanser 100ml",
        "src": "./assets/brand-assets/inova-acne-id/gentle-cleanser.webp"
      },
      {
        "label": "Icon 12H",
        "src": "./assets/brand-assets/inova-acne-id/icon-12h.png"
      },
      {
        "label": "Liquid Cleanser 100ml",
        "src": "./assets/brand-assets/inova-acne-id/liquid-cleanser.png"
      },
      {
        "label": "Icon 3X Control",
        "src": "./assets/brand-assets/inova-acne-id/icon-3x.png"
      },
      {
        "label": "Icon Không Xà Phòng",
        "src": "./assets/brand-assets/inova-acne-id/icon-soapfree.png"
      },
      {
        "label": "Icon pH Cân Bằng",
        "src": "./assets/brand-assets/inova-acne-id/icon-ph.png"
      },
      {
        "label": "Gel Cleanser Sensitive Skin",
        "src": "./assets/brand-assets/inova-acne-id/gel-cleanser-sensitive.webp"
      },
      {
        "label": "Badge Acnes BIO",
        "src": "./assets/brand-assets/inova-acne-id/icon-acnes-bio.png"
      }
    ],
    "templates": [
      {
        "label": "Acne-Aid Packshots Folder",
        "url": "https://drive.google.com/drive/folders/1VKhy59R2UCruSWXCgom9HAiHjr40Lq4H",
        "kind": "folder"
      },
      {
        "label": "Acne-Aid Materials & Icons Folder",
        "url": "https://drive.google.com/drive/folders/1pUuDGe9vNB97S93m3kHvA_fjy_swlQWM",
        "kind": "folder"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1VDeluMltfXkLCzC3iELB1gRm7dW-d_Jl"
  },
  {
    "id": 21,
    "slug": "an-phong",
    "name": "An Phong",
    "category": "Household Electronic",
    "totalVideos": 130,
    "completeness": "complete",
    "voiceModel": "Miền Nam trẻ trung",
    "font": {
      "family": "Montserrat / BD StreetSign Sans",
      "colors": [
        {
          "name": "Black",
          "hex": "#000000"
        },
        {
          "name": "Red",
          "hex": "#DC2626"
        },
        {
          "name": "White Stroke",
          "hex": "#FFFFFF"
        }
      ],
      "styleRule": "Black & Red with White stroke (stroke trắng)",
      "colorNote": "Đen và đỏ (stroke trắng).",
      "downloadUrl": "https://drive.google.com/file/d/1CvUKEKGuq8wL_H05Co5Fo3INfvLqOii3/view",
      "downloadLabel": "BD StreetSign Sans Font"
    },
    "logos": [
      {
        "label": "An Phong Logo",
        "src": "./assets/logos/an-phong.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "High attention to exact physical product details across household SKUs.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1oO6QoINR4Jj201SR_JcZv5rx_lqiYQMg",
    "refVideo": {
      "id": "1oAC21zNfPw_QWJ2EHuP2pQXRTt3MBR2M",
      "name": "AP2610004.mp4",
      "path": "2026/Tháng 10/AP2610004.mp4",
      "modified": "2026-10-08",
      "sizeMb": 31.3,
      "reasons": [
        "Done",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1oAC21zNfPw_QWJ2EHuP2pQXRTt3MBR2M/view",
      "previewUrl": "https://drive.google.com/file/d/1oAC21zNfPw_QWJ2EHuP2pQXRTt3MBR2M/preview",
      "poolSize": 46
    },
    "styleRefs": [],
    "assetImages": [
      {
        "label": "Ly Con Thỏ (Xanh Dương)",
        "src": "./assets/brand-assets/an-phong/ly-tho-xd.jpg"
      },
      {
        "label": "Ly Con Thỏ (Hồng)",
        "src": "./assets/brand-assets/an-phong/ly-tho-h.jpg"
      },
      {
        "label": "Muỗng Đũa",
        "src": "./assets/brand-assets/an-phong/muong-dua.png"
      },
      {
        "label": "Ly Thủy Tinh",
        "src": "./assets/brand-assets/an-phong/ly-thuy-tinh.png"
      },
      {
        "label": "Móc Vàng Treo Tường",
        "src": "./assets/brand-assets/an-phong/moc-vang-1.jpg"
      },
      {
        "label": "Thau Rổ Vàng S-9225",
        "src": "./assets/brand-assets/an-phong/thau-ro-1.jpg"
      }
    ],
    "templates": [
      {
        "label": "An Phong Packshots & Motion Clips",
        "url": "https://drive.google.com/drive/folders/1Q8REQgSLuiOl9-Gi0-OnkYyVlWK-WlUy",
        "kind": "folder"
      },
      {
        "label": "Download BD StreetSign Sans Font",
        "url": "https://drive.google.com/file/d/1CvUKEKGuq8wL_H05Co5Fo3INfvLqOii3/view",
        "kind": "font"
      }
    ],
    "notes": [
      "Brand rất kỹ chi tiết sản phẩm — kiểm tra hình dáng, màu sắc và chi tiết vật lý của từng SKU."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/15MAVZg9j52JLr2b7E01ZdWXhd1pMZi8d"
  },
  {
    "id": 22,
    "slug": "blackmores",
    "name": "BLACKMORES",
    "category": "Supplement",
    "totalVideos": 103,
    "completeness": "complete",
    "voiceModel": "Diễm Tuyết",
    "font": {
      "family": "SVN-Gotham",
      "colors": [
        {
          "name": "Blackmores Teal",
          "hex": "#00A5B2"
        },
        {
          "name": "White",
          "hex": "#FFFFFF"
        }
      ],
      "styleRule": "Clean Teal (#00A5B2) & White",
      "colorNote": "Màu thương hiệu #00A5B2 (Blackmores Teal)."
    },
    "logos": [
      {
        "label": "Blackmores Badge",
        "src": "./assets/logos/blackmores-alt.png"
      },
      {
        "label": "Blackmores Logo",
        "src": "./assets/logos/blackmores.png"
      },
      {
        "label": "Blackmores Logo (White)",
        "src": "./assets/logos/blackmores-white.png"
      },
      {
        "label": "IQVIA Certification",
        "src": "./assets/logos/blackmores-iqvia.png"
      },
      {
        "label": "TGA Strip Logo",
        "src": "./assets/logos/blackmores-tga.png"
      }
    ],
    "logoPosition": {
      "size": "46%",
      "x": 0,
      "y": 1491,
      "status": "confirmed"
    },
    "guidelineSummary": "Thực phẩm chức năng Blackmores. Tham khảo tài liệu BLACKMORES | BRAND GUIDELINE trên Google Drive.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "BLACKMORES | BRAND GUIDELINE (Google Doc)",
        "url": "https://docs.google.com/document/d/1JKRmHS7S2rBp0ipj0Zrlh98bXOaqXxNd2oP0_RUY-9k/edit",
        "type": "drive"
      },
      {
        "label": "Blackmores Official Guideline Folder",
        "url": "https://drive.google.com/drive/folders/1qmeDLZvVCK7S5mKrT04j71OzufYafDGJ",
        "type": "drive"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1uqdOy4CzksfOst70loEdSOBZNL5-_wJ9",
    "refVideo": {
      "id": "1TNlR1I8b9nTcmAs6Os_g7uPT7FoBwtVx",
      "name": "BLM2802202.mp4",
      "path": "EDITOR COLLECTION / BLACKMORES / BLM2802202.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1TNlR1I8b9nTcmAs6Os_g7uPT7FoBwtVx/view",
      "previewUrl": "https://drive.google.com/file/d/1TNlR1I8b9nTcmAs6Os_g7uPT7FoBwtVx/preview",
      "poolSize": 45
    },
    "styleRefs": [],
    "assetImages": [
      {
        "label": "Omega Double (90)",
        "src": "./assets/brand-assets/blackmores/omega-double.png"
      },
      {
        "label": "Bio C 1000mg",
        "src": "./assets/brand-assets/blackmores/bio-c1000.jpg"
      },
      {
        "label": "CoQ10 150mg",
        "src": "./assets/brand-assets/blackmores/coq10.png"
      },
      {
        "label": "Evening Primrose Oil (190)",
        "src": "./assets/brand-assets/blackmores/epo.jpg"
      },
      {
        "label": "Ginkgoforte (40)",
        "src": "./assets/brand-assets/blackmores/ginkgoforte.jpg"
      },
      {
        "label": "Badge No.1 Australia",
        "src": "./assets/brand-assets/blackmores/no1.png"
      },
      {
        "label": "Milk Thistle (42)",
        "src": "./assets/brand-assets/blackmores/milk-thistle.png"
      },
      {
        "label": "13 Dưỡng Chất Icon",
        "src": "./assets/brand-assets/blackmores/13-duong-chat.png"
      },
      {
        "label": "DHA Icon",
        "src": "./assets/brand-assets/blackmores/dha.png"
      },
      {
        "label": "Background BLM HD",
        "src": "./assets/brand-assets/blackmores/bg-blm.jpg"
      }
    ],
    "templates": [
      {
        "label": "Blackmores Packshots Folder",
        "url": "https://drive.google.com/drive/folders/1WU2sgfAmpw4_QiNXxgOUMSFd9ql7-E7k",
        "kind": "folder"
      },
      {
        "label": "Blackmores Materials & Hoạt Chất Icons",
        "url": "https://drive.google.com/drive/folders/1CKJ2gT0JLwSVOrpt-B8gMR9lq4P0DL_X",
        "kind": "folder"
      },
      {
        "label": "People BLACKMORES (Brand Talent)",
        "url": "https://drive.google.com/drive/folders/1kxzhhbicCKUfJ-x-EC-WXqIHfpRqAN4C",
        "kind": "folder"
      }
    ],
    "notes": [
      "Hình ảnh tươi sáng, healthy, có cây cối / thiên nhiên càng tốt.",
      "Ưu tiên sử dụng source brand và talent brand cung cấp trong guideline."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1MAf7sALp_58YwyFj6lJWcV92_Av4Vv35"
  },
  {
    "id": 23,
    "slug": "dermalogica",
    "name": "DERMALOGICA",
    "category": "Beauty",
    "totalVideos": 94,
    "completeness": "complete",
    "voiceModel": "Chị Huyền IVC",
    "font": {
      "family": "Helvetica",
      "colors": [
        {
          "name": "Dermalogica Gray",
          "hex": "#5B6770"
        },
        {
          "name": "Clinical Blue",
          "hex": "#5E93DB"
        },
        {
          "name": "White",
          "hex": "#FFFFFF"
        }
      ],
      "styleRule": "Clean clinical Helvetica typography",
      "colorNote": "Xám #5B6770, xanh dương #5E93DB và trắng. Xem hình Style Ref cho layout typo product packshot."
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Clinical, clean skincare visual style using Helvetica with Dermalogica Gray (#5B6770), Clinical Blue (#5E93DB), and White. Refer to the official Brand Guidelines PDF and packshot typography callout.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "Dermalogica Brand Guidelines (PDF)",
        "url": "https://drive.google.com/file/d/1r3gUCOVOoR-YzXbQsILJIWK8aLQRdU8D/view",
        "type": "pdf"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1UPZFm-XvaKKqapvgX9HpaFYREhfrSuHW",
    "refVideo": {
      "id": "1nAl9ZM-aMVrELynJlNJPS5TDc17rrUok",
      "name": "Dermalogica 2.mp4",
      "path": "EDITOR COLLECTION / DERMALOGICA / Dermalogica 2.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1nAl9ZM-aMVrELynJlNJPS5TDc17rrUok/view",
      "previewUrl": "https://drive.google.com/file/d/1nAl9ZM-aMVrELynJlNJPS5TDc17rrUok/preview",
      "poolSize": 55
    },
    "styleRefs": [
      {
        "label": "Product Packshot Typography Callout",
        "src": "./assets/style-refs/dermalogica-packshot-typo.png"
      }
    ],
    "assetImages": [
      {
        "label": "Daily Milkfoliant 13g",
        "src": "./assets/brand-assets/dermalogica/milkfoliant.png"
      },
      {
        "label": "Biolumin-C Serum 59ml",
        "src": "./assets/brand-assets/dermalogica/biolumin-c-59ml.png"
      },
      {
        "label": "Biolumin-C Eye Serum 15ml",
        "src": "./assets/brand-assets/dermalogica/biolumin-c-eye-15ml.png"
      },
      {
        "label": "Circular Hydration Serum 30ml",
        "src": "./assets/brand-assets/dermalogica/circular-hydration-30ml.png"
      },
      {
        "label": "PreCleanse 295ml",
        "src": "./assets/brand-assets/dermalogica/precleanse-295ml.png"
      },
      {
        "label": "Dynamic Skin Retinol Serum",
        "src": "./assets/brand-assets/dermalogica/retinol-serum.png"
      },
      {
        "label": "Antioxidant Hydramist 10ml",
        "src": "./assets/brand-assets/dermalogica/hydramist-10ml.png"
      },
      {
        "label": "Magnetic Afterglow Cleanser 15ml",
        "src": "./assets/brand-assets/dermalogica/afterglow-cleanser.png"
      }
    ],
    "templates": [
      {
        "label": "Full 1. PACKSHOT Folder (All SKUs)",
        "url": "https://drive.google.com/drive/folders/1H06yVd2BrTFpVn-xQkvFY7o0HOqUph-Z",
        "kind": "folder"
      },
      {
        "label": "Dermalogica Fonts Folder",
        "url": "https://drive.google.com/drive/folders/139CQ5qQY-k4_MxNkpYX8esfAjCnVYS4M",
        "kind": "font"
      }
    ],
    "notes": [
      "Xem hình Product Packshot Typography Callout bên dưới để dàn chữ cạnh packshot đúng chuẩn Dermalogica."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1vtU6VsgEpVd5J4BreOVPsNkCOQmNeKmM"
  },
  {
    "id": 24,
    "slug": "logitech",
    "name": "Logitech",
    "category": "Household Electronic",
    "totalVideos": 93,
    "completeness": "complete",
    "voiceModel": "No voice (Không sử dụng giọng AI)",
    "font": {
      "family": "SVN-GilroyXBold (Cỡ chữ 15)",
      "colors": [
        {
          "name": "Logitech Cyan",
          "hex": "#3DE7FF"
        },
        {
          "name": "Black",
          "hex": "#000000"
        },
        {
          "name": "White",
          "hex": "#FFFFFF"
        }
      ],
      "styleRule": "Font size 15 · Cyan (#3DE7FF), Black & White",
      "colorNote": "Xanh ngọc bích (#3DE7FF), Đen và Trắng."
    },
    "logos": [],
    "logoPosition": {
      "status": "na",
      "note": "Không gắn Logo theo guideline Logitech."
    },
    "guidelineSummary": "Strict AI-transparency & audio rules: Label every video as AI Assisted, use NO AI human/voice, NO brand logo overlay, and NO background music — Sound Effects (SFX) only.",
    "dos": [
      "Dán label \"AI Assisted\" trên video (link label có sẵn trong script).",
      "Sử dụng Sound Effects (SFX) sắc nét thay cho nhạc nền."
    ],
    "donts": [
      "KHÔNG sử dụng người AI (no AI human talent).",
      "KHÔNG sử dụng giọng AI / Voiceover (No voice).",
      "KHÔNG gắn Logo và KHÔNG dùng nhạc nền (BGM)."
    ],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1hHcR6DPN8NA83lzeRePyFbeClr0uBBPh",
    "refVideo": {
      "id": "1uTMI9UvzVxB1PSo5LHJzxnIyb8R_Y-G-",
      "name": "LOA2611004.mp4",
      "path": "EDITOR COLLECTION / Logitech / LOA2611004.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1uTMI9UvzVxB1PSo5LHJzxnIyb8R_Y-G-/view",
      "previewUrl": "https://drive.google.com/file/d/1uTMI9UvzVxB1PSo5LHJzxnIyb8R_Y-G-/preview",
      "poolSize": 47
    },
    "styleRefs": [],
    "assetImages": [
      {
        "label": "G304 X Super",
        "src": "./assets/brand-assets/logitech/g304x-super.png"
      },
      {
        "label": "G304 X Trắng",
        "src": "./assets/brand-assets/logitech/g304x-white.png"
      },
      {
        "label": "Bàn Phím G163x",
        "src": "./assets/brand-assets/logitech/keyboard-g163x.png"
      },
      {
        "label": "Bàn Phím Hồng",
        "src": "./assets/brand-assets/logitech/keyboard-pink.png"
      },
      {
        "label": "Bàn Phím G163x Gaming",
        "src": "./assets/brand-assets/logitech/keyboard-g163x-game.png"
      },
      {
        "label": "Bàn Phím G163x Trắng",
        "src": "./assets/brand-assets/logitech/keyboard-g163x-white.png"
      },
      {
        "label": "Chuột G304 X Tím",
        "src": "./assets/brand-assets/logitech/g304x-purple.png"
      },
      {
        "label": "Logitech Gear Packshot 1",
        "src": "./assets/brand-assets/logitech/gear-1.png"
      }
    ],
    "templates": [
      {
        "label": "Logitech PACKSHOT TỔNG HỢP",
        "url": "https://drive.google.com/drive/folders/1hOU__RPQpF6B-Kbs3Ku_8A7QKhuguFL4",
        "kind": "folder"
      },
      {
        "label": "Logitech Materials Folder",
        "url": "https://drive.google.com/drive/folders/1fDk8QEJ3nA5eMft-PBmq--btjBKrvrzX",
        "kind": "folder"
      }
    ],
    "notes": [
      "Bắt buộc dán label AI Assisted (lấy link trong script).",
      "KHÔNG dùng người AI, KHÔNG dùng giọng AI, KHÔNG gắn Logo, KHÔNG nhạc nền — chỉ dùng Sound Effect."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1UBGjPifpXP6lveTkei4jXoj_jS3j_DA1"
  },
  {
    "id": 25,
    "slug": "ui-mass",
    "name": "UI MASS",
    "category": "Beauty",
    "totalVideos": 81,
    "completeness": "complete",
    "voiceModel": "Nữ beauty",
    "font": {
      "family": "SRN CookieRun (Cỡ chữ 15)",
      "colors": [
        {
          "name": "Dark Blue",
          "hex": "#1E3A8A"
        },
        {
          "name": "Beauty Pink",
          "hex": "#EC4899"
        }
      ],
      "styleRule": "Font size 15 · Thin stroke (stroke mỏng)",
      "colorNote": "Xanh đậm, hồng (stroke mỏng)."
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Visual beauty đẹp mắt, mềm mại. Kiểm soát chặt độ chính xác chữ trên packshot và luôn hiển thị câu claim AI ở góc dưới video.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1YJ5UNROYPqFC8U4qx9TGQcGk0xzRM5aa",
    "refVideo": {
      "id": "1lilW40cUhVojyeLCfbiD6sj6-7Fn5UmC",
      "name": "UI2610001.mp4",
      "path": "EDITOR COLLECTION / UI MASS / UI2610001.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1lilW40cUhVojyeLCfbiD6sj6-7Fn5UmC/view",
      "previewUrl": "https://drive.google.com/file/d/1lilW40cUhVojyeLCfbiD6sj6-7Fn5UmC/preview",
      "poolSize": 29
    },
    "styleRefs": [
      {
        "label": "Font Style Reference",
        "src": "./assets/style-refs/uimass-font.png"
      },
      {
        "label": "Beauty Visual Style Reference",
        "src": "./assets/style-refs/uimass-visual.png"
      }
    ],
    "assetImages": [],
    "templates": [],
    "notes": [
      "Đảm bảo hạn chế tối đa lỗi chữ trên packshot (chữ siêu nhỏ có thể bỏ qua).",
      "Bắt buộc luôn có câu claim ở dưới góc video: \"*Hình ảnh trong video được tạo bởi AI.\""
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1CYyOjVSRPclen6FCSOq5gjHyd8qOyexL"
  },
  {
    "id": 26,
    "slug": "bonzon",
    "name": "Bonzon",
    "category": "FMCG",
    "totalVideos": 67,
    "completeness": "complete",
    "voiceModel": "Nữ miền Nam",
    "font": {
      "family": "Montserrat (Cỡ chữ 15)",
      "colors": [
        {
          "name": "Bonzon Blue",
          "hex": "#0056A6"
        },
        {
          "name": "Bamboo Green",
          "hex": "#2E7D32"
        },
        {
          "name": "White",
          "hex": "#FFFFFF"
        }
      ],
      "styleRule": "BAMBOO: chữ xanh lá (chấm màu logo) stroke trắng & ngược lại · Bonzon: chữ xanh dương (chấm màu logo) stroke trắng & ngược lại",
      "colorNote": "Cỡ chữ 15. Chấm màu trực tiếp từ logo BAMBOO (xanh lá) hoặc Bonzon (xanh dương) kết hợp stroke trắng."
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Strict food visual accuracy (filling, color, texture) and static packshot scaling to avoid AI text distortion across Bonzon & Bamboo product lines.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "Bonzon Packaging & Products Drive",
        "url": "https://drive.google.com/drive/folders/1OVbHMjVfxyF25gYPW-dWKcdKQ39ATj_S",
        "type": "drive"
      },
      {
        "label": "Brand-Supplied Product Videos Drive",
        "url": "https://drive.google.com/drive/folders/1aYpFfxPqz0qHV3P0csC26M54Aj6UJuWN",
        "type": "drive"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1WcmR63ukvN0_Si6aqe8w5yTVzctxKrX3",
    "refVideo": {
      "id": "11R9Z5Cr8KPf5iMUgzLGJj3lDLVsyWI8A",
      "name": "BZ2611014.mp4",
      "path": "EDITOR COLLECTION / Bonzon / BZ2611014.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/11R9Z5Cr8KPf5iMUgzLGJj3lDLVsyWI8A/view",
      "previewUrl": "https://drive.google.com/file/d/11R9Z5Cr8KPf5iMUgzLGJj3lDLVsyWI8A/preview",
      "poolSize": 42
    },
    "styleRefs": [
      {
        "label": "Bonzon / Bamboo Typography Ref 1",
        "src": "./assets/style-refs/bonzon-typo-1.png"
      },
      {
        "label": "Bonzon / Bamboo Typography Ref 2",
        "src": "./assets/style-refs/bonzon-typo-2.png"
      }
    ],
    "assetImages": [
      {
        "label": "Bonzon Bánh Trứng",
        "src": "./assets/brand-assets/bonzon/banh-trung.png"
      },
      {
        "label": "Bonzon Bánh Mì Bơ Tỏi Phô Mai",
        "src": "./assets/brand-assets/bonzon/banh-mi-bo-toi.png"
      },
      {
        "label": "Bonzon Pizza 4 Loại Phô Mai",
        "src": "./assets/brand-assets/bonzon/pizza-4-cheese.png"
      },
      {
        "label": "Bonzon Mì Ý Bò Bằm",
        "src": "./assets/brand-assets/bonzon/mi-y-bo-bam.png"
      },
      {
        "label": "Bonzon Phô Mai Que",
        "src": "./assets/brand-assets/bonzon/pho-mai-que.png"
      },
      {
        "label": "Bamboo Há Cảo Hoa Hồng",
        "src": "./assets/brand-assets/bonzon/bamboo-ha-cao.png"
      },
      {
        "label": "Bamboo Dimsum Tam Hảo",
        "src": "./assets/brand-assets/bonzon/bamboo-dimsum.png"
      },
      {
        "label": "Bamboo Pad Thái Tôm",
        "src": "./assets/brand-assets/bonzon/bamboo-pad-thai.png"
      },
      {
        "label": "Bamboo Bánh Bao Kim Sa",
        "src": "./assets/brand-assets/bonzon/bamboo-kim-sa.png"
      },
      {
        "label": "Bamboo Miến Thịt Ghẹ",
        "src": "./assets/brand-assets/bonzon/bamboo-mien-ghe.png"
      }
    ],
    "templates": [
      {
        "label": "Bonzon & Bamboo Packshots Folder",
        "url": "https://drive.google.com/drive/folders/1umkwNnySgnKNJhysRB2DVi4f3Xv15HT0",
        "kind": "folder"
      }
    ],
    "notes": [
      "Rất kỹ phần đồ ăn và packshot: hỏi Content cung cấp đủ hình ảnh đồ ăn (nhân, màu sắc, texture) trước khi gen ảnh.",
      "Packshot nên để dạng ảnh tĩnh rồi scale phóng to lên — không gen chuyển động để tránh sai chữ bao bì."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1LIv5vUM8QcRgjp7OnqF0qpwYqru7hupu"
  },
  {
    "id": 27,
    "slug": "groupe-bel",
    "name": "Groupe Bel",
    "category": "F&B",
    "totalVideos": 30,
    "completeness": "partial",
    "voiceModel": null,
    "font": {
      "family": "Baloo",
      "styleRule": "Rounded playful Baloo typography",
      "colorNote": "Font Baloo theo màu từng vị sản phẩm."
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1A51BPTiCBrIHMCxjAa_HHarQZsi9wZm5",
    "refVideo": {
      "id": "1STJD9_5QGx9FSK5jk0Zxx-r1wd79NVGE",
      "name": "BEL0001952.mp4",
      "path": "2026/THÁNG 8/BEL0001952.mp4",
      "modified": "2026-11-18",
      "sizeMb": 50.4,
      "reasons": [
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1STJD9_5QGx9FSK5jk0Zxx-r1wd79NVGE/view",
      "previewUrl": "https://drive.google.com/file/d/1STJD9_5QGx9FSK5jk0Zxx-r1wd79NVGE/preview",
      "poolSize": 22
    },
    "styleRefs": [],
    "assetImages": [
      {
        "label": "Bel Plain 15C",
        "src": "./assets/brand-assets/groupe-bel/plain-15c.png"
      },
      {
        "label": "Bel Blueberry 15C",
        "src": "./assets/brand-assets/groupe-bel/blueberry-15c.png"
      },
      {
        "label": "Bel Strawberry 15C",
        "src": "./assets/brand-assets/groupe-bel/strawberry-15c.png"
      },
      {
        "label": "Bel Chocolate 15C",
        "src": "./assets/brand-assets/groupe-bel/chocolate-15c.png"
      },
      {
        "label": "Bubble Element",
        "src": "./assets/brand-assets/groupe-bel/bubble.png"
      },
      {
        "label": "Bel Mapa 15C",
        "src": "./assets/brand-assets/groupe-bel/mapa-15c.png"
      }
    ],
    "templates": [
      {
        "label": "Groupe Bel Packshots Folder",
        "url": "https://drive.google.com/drive/folders/17hln2RsObWRVykqCL4_VLZjRan1FeJL6",
        "kind": "folder"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1RJQdF-zxgAWGBoTk7Dx1TdYZvbEtj-6b"
  },
  {
    "id": 28,
    "slug": "hafele",
    "name": "Hafele",
    "category": "Household Electronic",
    "totalVideos": 10,
    "completeness": "complete",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Thiết bị bếp & gia dụng cao cấp Häfele. Tham khảo thư mục Hafele logo & guideline trên Google Drive.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "Hafele Logo & Guideline (Google Drive)",
        "url": "https://drive.google.com/drive/folders/1ZnHEfstZwRERoVFPnmORTJkU0haNFciq",
        "type": "drive"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1o0zGjB15mXR2VtrNeweJiPKb0Tgg8wJ0",
    "refVideo": {
      "id": "10vrufSeJmjzhthY9_erUxFzZA4_WLkUK",
      "name": "HFE0001242.mp4",
      "path": "2026/THÁNG 7/HFE0001242.mp4",
      "modified": "2026-08-19",
      "sizeMb": 20.5,
      "reasons": [],
      "url": "https://drive.google.com/file/d/10vrufSeJmjzhthY9_erUxFzZA4_WLkUK/view",
      "previewUrl": "https://drive.google.com/file/d/10vrufSeJmjzhthY9_erUxFzZA4_WLkUK/preview",
      "poolSize": 4
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/11RBcOouNYrOCbwb9mJR1RR6DTMptYqkr"
  },
  {
    "id": 29,
    "slug": "issy",
    "name": "ISSY",
    "category": "Beauty",
    "totalVideos": 3,
    "completeness": "complete",
    "voiceModel": "No voice",
    "font": {
      "family": "SFU Eurostile",
      "colors": [
        {
          "name": "Charcoal Gray",
          "hex": "#353535"
        }
      ],
      "styleRule": "Clean beauty monochrome typography",
      "colorNote": "Xám đen #353535.",
      "downloadUrl": "https://drive.google.com/file/d/1ut9HxX0BE_IOTvJgFeRQuA7DEKBtgGK4/view",
      "downloadLabel": "SFU-Eurostile.zip"
    },
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Clean beauty aesthetic following ISSY signature neutral gray tone & mood (#353535), no voiceover.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1rV8SP39ItDNAxhkyf7vyOquGsv4K4t7G",
    "refVideo": {
      "id": "13Fuad6FrgpvkN54CCDaxxH8hc-nb0Zgq",
      "name": "ISY300634.mp4",
      "path": "EDITOR COLLECTION / ISSY / ISY300634.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/13Fuad6FrgpvkN54CCDaxxH8hc-nb0Zgq/view",
      "previewUrl": "https://drive.google.com/file/d/13Fuad6FrgpvkN54CCDaxxH8hc-nb0Zgq/preview",
      "poolSize": 4
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [
      {
        "label": "Download SFU Eurostile Font",
        "url": "https://drive.google.com/file/d/1ut9HxX0BE_IOTvJgFeRQuA7DEKBtgGK4/view",
        "kind": "font"
      }
    ],
    "notes": [
      "Clean beauty theo tone mood màu xám của brand. Không sử dụng Voice."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/12R7x1lfSAGPGm1k1xDl_qtJUIgw5YX7o"
  },
  {
    "id": 30,
    "slug": "centrum",
    "name": "Centrum",
    "category": "Supplement",
    "totalVideos": 2,
    "completeness": "partial",
    "voiceModel": null,
    "font": null,
    "logos": [
      {
        "label": "Centrum Logo",
        "src": "./assets/logos/centrum.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [
      {
        "label": "Centrum Packshots (SharePoint)",
        "url": "https://onpointvn-my.sharepoint.com/:f:/g/personal/uyennhi_nguyen_onpoint_vn/IgCl2ibXXuMkTq-R1wlXDLsSAePiiZnrU7Woz6CW2jMDYII?e=dIEg8Y",
        "kind": "folder"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/14jisXoPkPSXNlpih1ZoQ9lO7Po9_EVW3"
  },
  {
    "id": 31,
    "slug": "alfe-collagen-beauty",
    "name": "ALFE Collagen Beauty",
    "category": "Supplement",
    "totalVideos": 1,
    "completeness": "pending",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1QNYhsbBryayASy0_PvK-qif6WTjJTvSV"
  },
  {
    "id": 32,
    "slug": "biofemin",
    "name": "Biofemin",
    "category": "Supplement",
    "totalVideos": 1,
    "completeness": "partial",
    "voiceModel": null,
    "font": null,
    "logos": [
      {
        "label": "Biofemin Logo",
        "src": "./assets/logos/biofemin.png"
      }
    ],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [
      {
        "label": "SKU Biofemin Packshot",
        "src": "./assets/brand-assets/biofemin/sku-bfm.png"
      },
      {
        "label": "Taisho Biofermin",
        "src": "./assets/brand-assets/biofemin/taisho-biofermin.png"
      },
      {
        "label": "Product Group 2",
        "src": "./assets/brand-assets/biofemin/group-2.png"
      },
      {
        "label": "Product Group 1",
        "src": "./assets/brand-assets/biofemin/group-1.png"
      },
      {
        "label": "Thumbnail KV",
        "src": "./assets/brand-assets/biofemin/thumbnail.png"
      },
      {
        "label": "Feature Callout Frame",
        "src": "./assets/brand-assets/biofemin/frame-497.png"
      }
    ],
    "templates": [
      {
        "label": "Biofemin Packshots Folder",
        "url": "https://drive.google.com/drive/folders/1m6BeurXm0UH2Lv0Z_DECevBz2CsWJpRG",
        "kind": "folder"
      },
      {
        "label": "Biofemin Materials & Motion Clips",
        "url": "https://drive.google.com/drive/folders/1R8Dv96rjTaDhff7yL6nMckIUCSzAdLWw",
        "kind": "folder"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1fGkL8qW1djo68BgCRxFLm3w1dAkeBrgW"
  },
  {
    "id": 33,
    "slug": "nivea",
    "name": "NIVEA",
    "category": "Beauty",
    "totalVideos": 1,
    "completeness": "pending",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1HPqhC45rIBRojPgtaORLpmIC8_4DGtin"
  },
  {
    "id": 34,
    "slug": "t-garden",
    "name": "T-Garden",
    "category": "Beauty",
    "totalVideos": 1,
    "completeness": "pending",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1jbXHleY11u-2FJdGguTVGjMrRN6iuHpM"
  },
  {
    "id": 35,
    "slug": "lg",
    "name": "LG",
    "category": "Household Electronic",
    "totalVideos": 509,
    "completeness": "complete",
    "voiceModel": "Giọng nữ miền Nam - Trẻ trung sôi nổi",
    "font": {
      "family": "LG EI Font",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Black",
          "hex": "#000000"
        }
      ],
      "styleRule": "Không stroke / Không background (No stroke or box)",
      "colorNote": "Trắng / Đen, không dùng stroke hay background.",
      "downloadUrl": "https://drive.google.com/file/d/1DydkdnHAiOtY-ZYxTamq9YngLKHKq4a-/view",
      "downloadLabel": "LG EI Font"
    },
    "logos": [],
    "logoPosition": {
      "status": "na",
      "note": "NONE — Không gắn Logo overlay; sử dụng Outro Template bắt buộc cuối video."
    },
    "guidelineSummary": "Clean modern typography using LG EI Font (White/Black, no stroke/background). Always append the official LG Outro Template on every video.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1-ytvTmtghubRiXnlf7xNNO_dYGdEqeC2",
    "refVideo": {
      "id": "1ua4vpARdrgMSKGTJS89p3glt2J8IYsWT",
      "name": "LGA2611034.mp4",
      "path": "EDITOR COLLECTION / LG / LGA2611034.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1ua4vpARdrgMSKGTJS89p3glt2J8IYsWT/view",
      "previewUrl": "https://drive.google.com/file/d/1ua4vpARdrgMSKGTJS89p3glt2J8IYsWT/preview",
      "poolSize": 104
    },
    "styleRefs": [
      {
        "label": "Typography & Layout Reference",
        "src": "./assets/style-refs/lg-typo.png"
      }
    ],
    "assetImages": [],
    "templates": [
      {
        "label": "OUTRO Template (Áp dụng toàn bộ Video)",
        "url": "https://drive.google.com/file/d/1pAVD9eusBdN8dFYRy0zP4uXMsHlzV5ss/view",
        "kind": "outro"
      },
      {
        "label": "Download LG EI Font",
        "url": "https://drive.google.com/file/d/1DydkdnHAiOtY-ZYxTamq9YngLKHKq4a-/view",
        "kind": "font"
      }
    ],
    "notes": [
      "Bắt buộc sử dụng OUTRO TEMPLATE cho toàn bộ video LG."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1UNvbpqmRSEeu44R51IaYwTnoVHi-tSvV"
  },
  {
    "id": 36,
    "slug": "sensodyne",
    "name": "Sensodyne",
    "category": "FMCG",
    "totalVideos": 393,
    "completeness": "complete",
    "voiceModel": "NHƯ THỦY",
    "font": {
      "family": "SVN-Gilroy / Shopee Display Font",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Sensodyne Blue",
          "hex": "#0419A6"
        },
        {
          "name": "Highlight Yellow",
          "hex": "#FFCF3B"
        }
      ],
      "styleRule": "Stroke Trắng / Xanh #0419A6",
      "colorNote": "Color: Trắng / Xanh #0419A6 / Vàng #FFCF3B · Stroke: Trắng / Xanh #0419A6.",
      "downloadUrl": "https://drive.google.com/drive/folders/1ROeNkykIok9zB83CYC7sqxFM69L0gX6z",
      "downloadLabel": "Sensodyne Fonts"
    },
    "logos": [
      {
        "label": "Aquafresh Logo",
        "src": "./assets/logos/sensodyne-aquafresh.png"
      },
      {
        "label": "Sensodyne Logo",
        "src": "./assets/logos/sensodyne.png"
      }
    ],
    "logoPosition": {
      "size": "47%",
      "x": 0,
      "y": 1739,
      "status": "confirmed"
    },
    "guidelineSummary": "Official oral-care standards with SVN-Gilroy & Shopee Display fonts, mandatory brand Intro template, Authenticity Claimer Tag, and monthly updated KV/Packshot repositories.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1VjlH1r35CxO7A7fI1wgfdHunHNGNMekX",
    "refVideo": {
      "id": "1AEvqL4s030XVIFXNOkkf0BWZQnMTwgzV",
      "name": "SSD2611036.mp4",
      "path": "EDITOR COLLECTION / Sensodyne / SSD2611036.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1AEvqL4s030XVIFXNOkkf0BWZQnMTwgzV/view",
      "previewUrl": "https://drive.google.com/file/d/1AEvqL4s030XVIFXNOkkf0BWZQnMTwgzV/preview",
      "poolSize": 100
    },
    "styleRefs": [
      {
        "label": "Typography & Stroke Reference",
        "src": "./assets/style-refs/sensodyne-typo.png"
      }
    ],
    "assetImages": [
      {
        "label": "Tag Claim Chính Hãng",
        "src": "./assets/brand-assets/sensodyne/claimer-tag.png"
      }
    ],
    "templates": [
      {
        "label": "INTRO: Sống Vui Đi - Ngại Chi Ê Buốt",
        "url": "https://drive.google.com/file/d/1GOTP6fzzUQlbVeVZFIa6jGq6EOWTvyLO/view",
        "kind": "intro"
      },
      {
        "label": "Tag Claim Chính Hãng (PNG)",
        "url": "https://drive.google.com/file/d/1v2YUwCHEgTAlcntZhhzU5F_5YdNKSDgG/view",
        "kind": "doc"
      },
      {
        "label": "Packshots Sensodyne (SharePoint)",
        "url": "https://onpointvn-my.sharepoint.com/:f:/g/personal/uyennhi_nguyen_onpoint_vn/IgA75-wvFeaWSqJQF7ExbDU-Afy-pErMrTbH7TL0TWjXV8U?e=EbIYlL",
        "kind": "folder"
      },
      {
        "label": "Packshots Centrum (SharePoint)",
        "url": "https://onpointvn-my.sharepoint.com/:f:/g/personal/uyennhi_nguyen_onpoint_vn/IgCl2ibXXuMkTq-R1wlXDLsSAePiiZnrU7Woz6CW2jMDYII?e=dIEg8Y",
        "kind": "folder"
      },
      {
        "label": "Gift Assets (SharePoint)",
        "url": "https://onpointvn-my.sharepoint.com/:f:/g/personal/nhan_truong_onpoint_vn/IgBCFq6AdysjRoK3b5ZhfGeyAcB45udm5TbKOAgT3Vxh8bo?e=hsIM0S",
        "kind": "folder"
      },
      {
        "label": "Download SVN-Gilroy Font",
        "url": "https://drive.google.com/file/d/1n_mRmPoXuG4h27Kue65zYomFctr32nZK/view",
        "kind": "font"
      },
      {
        "label": "Download Shopee Display Font",
        "url": "https://drive.google.com/file/d/1L5P7MrWYkAcwpdygUzDMpIbVEx7qwsvY/view",
        "kind": "font"
      }
    ],
    "notes": [
      "Sử dụng Intro chuẩn: \"SỐNG VUI ĐI - NGẠI CHI Ê BUỐT\".",
      "Gắn TAG CLAIM CHÍNH HÃNG khi cần xác thực sản phẩm.",
      "Các KV sẽ được cập nhật theo từng tháng (kiểm tra link SharePoint Packshots/Gift)."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1YFqohte8a12vKBCbpCaabK6Y1dkZHsB-"
  },
  {
    "id": 37,
    "slug": "beauty-republic",
    "name": "Beauty Republic",
    "category": "Beauty",
    "totalVideos": 180,
    "completeness": "complete",
    "voiceModel": "Nữ miền Nam - Beauty",
    "font": {
      "family": "ElectroluxSansVN",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Coral Orange",
          "hex": "#EA7A48"
        }
      ],
      "styleRule": "Stroke Trắng / Cam #EA7A48",
      "colorNote": "Color: Trắng / Cam #EA7A48 · Stroke: Trắng / Cam #EA7A48.",
      "downloadUrl": "https://drive.google.com/drive/folders/1GWD68CWDesRV9z-s0n4L4DwH_dJv87I0",
      "downloadLabel": "ElectroluxSansVN Font"
    },
    "logos": [
      {
        "label": "Beauty Republic Logo",
        "src": "./assets/logos/beauty-republic.png"
      }
    ],
    "logoPosition": {
      "size": "16%",
      "x": 0,
      "y": 1638,
      "status": "confirmed"
    },
    "guidelineSummary": "Beauty tone with ElectroluxSansVN font (White & #EA7A48 Coral Orange with matching stroke). Packshot text must be 100% accurate.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1PwTO6uQQ5FnAqjg0jh5P_6RbYG8uqbt_",
    "refVideo": {
      "id": "10WdkNzFW1W6OnbKNT-eIxkpjds80W6MY",
      "name": "BRP0001866 - Ý.mp4",
      "path": "EDITOR COLLECTION / Beauty Republic / BRP0001866 - Ý.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/10WdkNzFW1W6OnbKNT-eIxkpjds80W6MY/view",
      "previewUrl": "https://drive.google.com/file/d/10WdkNzFW1W6OnbKNT-eIxkpjds80W6MY/preview",
      "poolSize": 33
    },
    "styleRefs": [
      {
        "label": "Typography & Color Reference",
        "src": "./assets/style-refs/beauty-republic-typo.png"
      }
    ],
    "assetImages": [
      {
        "label": "3D Mockup Sả Chanh",
        "src": "./assets/brand-assets/beauty-republic/sa-chanh-3d.png"
      },
      {
        "label": "Brand Model Ref 2603",
        "src": "./assets/brand-assets/beauty-republic/model-2603.png"
      },
      {
        "label": "Summer Splash 3D",
        "src": "./assets/brand-assets/beauty-republic/summer-splash-3d.png"
      },
      {
        "label": "Earl Grey 3D",
        "src": "./assets/brand-assets/beauty-republic/earl-grey-3d.png"
      },
      {
        "label": "Quế Gừng 3D",
        "src": "./assets/brand-assets/beauty-republic/que-gung-3d.png"
      },
      {
        "label": "Toscana Glow 2D",
        "src": "./assets/brand-assets/beauty-republic/toscana-glow.png"
      }
    ],
    "templates": [
      {
        "label": "Beauty Republic Products (2D/3D)",
        "url": "https://drive.google.com/drive/folders/16hJwW2d_J9wlYIhGtEiz17WFJIs2hfMe",
        "kind": "folder"
      },
      {
        "label": "Download ElectroluxSansVN Font",
        "url": "https://drive.google.com/drive/folders/1GWD68CWDesRV9z-s0n4L4DwH_dJv87I0",
        "kind": "font"
      }
    ],
    "notes": [
      "Lưu ý quan trọng: Đúng 100% Text trên Packshot."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1UomzmuRBzhZqgXw_dQ7VheogEFiuvMvS"
  },
  {
    "id": 38,
    "slug": "tiger",
    "name": "Tiger",
    "category": "Household Electronic",
    "totalVideos": 57,
    "completeness": "complete",
    "voiceModel": "NONE (Không sử dụng Voice)",
    "font": {
      "family": "Montserrat Extra Bold / Regular",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Tiger Blue",
          "hex": "#005AAB"
        }
      ],
      "styleRule": "Không stroke / Không background",
      "colorNote": "Trắng / Xanh #005AAB, không stroke hoặc background.",
      "downloadUrl": "https://drive.google.com/file/d/1u0p9tm7gKzTNg1aSzSUDuwjGJgmMRdcF/view",
      "downloadLabel": "Montserrat Font"
    },
    "logos": [],
    "logoPosition": {
      "status": "na",
      "note": "NONE — Không gắn Logo overlay; dùng Outro Template bắt buộc."
    },
    "guidelineSummary": "Gia dụng Nhật Bản Tiger (nồi cơm điện, bình giữ nhiệt). Tham khảo TIGER BRAND GUIDELINE trên Google Drive.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "TIGER BRAND GUIDELINE.pdf (Google Drive)",
        "url": "https://drive.google.com/file/d/1cBwzvjQkeYdcCrE_zIaNd0C9gqm1jMb8/view",
        "type": "drive"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/15v6QtZd0uMzbUftq2tSSBk827ExNwfY0",
    "refVideo": {
      "id": "1rDSz3nVrRrzqIPwG3vVITVJwuZBwbjfX",
      "name": "TG2611002.mp4",
      "path": "EDITOR COLLECTION / Tiger / TG2611002.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1rDSz3nVrRrzqIPwG3vVITVJwuZBwbjfX/view",
      "previewUrl": "https://drive.google.com/file/d/1rDSz3nVrRrzqIPwG3vVITVJwuZBwbjfX/preview",
      "poolSize": 23
    },
    "styleRefs": [
      {
        "label": "Typography & Layout Reference",
        "src": "./assets/style-refs/tiger-typo.png"
      }
    ],
    "assetImages": [],
    "templates": [
      {
        "label": "OUTRO Template (Áp dụng toàn bộ Video)",
        "url": "https://drive.google.com/file/d/1ICKxz1t56Xe_of8C8Tj1tagim_kgUXhe/view",
        "kind": "outro"
      },
      {
        "label": "Download Montserrat Font",
        "url": "https://drive.google.com/file/d/1u0p9tm7gKzTNg1aSzSUDuwjGJgmMRdcF/view",
        "kind": "font"
      }
    ],
    "notes": [
      "Bắt buộc áp dụng OUTRO Template cho toàn bộ video Tiger."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1Pv3JK5jMDEdHHIzF7lozcBOmWTObC5sY"
  },
  {
    "id": 39,
    "slug": "noreva",
    "name": "Noreva",
    "category": "Beauty",
    "totalVideos": 46,
    "completeness": "complete",
    "voiceModel": "ADM-Nữ trẻ 2",
    "font": {
      "family": "SVN-Gilroy",
      "colors": [
        {
          "name": "Line Green",
          "hex": "#A1D560"
        },
        {
          "name": "Line Blue",
          "hex": "#227CE2"
        },
        {
          "name": "Line Coral",
          "hex": "#FD8189"
        },
        {
          "name": "Line Plum",
          "hex": "#5E366E"
        },
        {
          "name": "Line Crimson",
          "hex": "#B92530"
        },
        {
          "name": "Line Magenta",
          "hex": "#C8087A"
        },
        {
          "name": "Line Sand",
          "hex": "#E1C0A0"
        }
      ],
      "styleRule": "Màu chữ & Background tuỳ theo màu sản phẩm + Template màu",
      "colorNote": "Color & Background tuỳ theo từng dòng sản phẩm Noreva (xem bộ swatches & Guideline Noreva 2026).",
      "downloadUrl": "https://drive.google.com/file/d/1n_mRmPoXuG4h27Kue65zYomFctr32nZK/view",
      "downloadLabel": "SVN-Gilroy Font"
    },
    "logos": [
      {
        "label": "Noreva Logo",
        "src": "./assets/logos/noreva.png"
      }
    ],
    "logoPosition": {
      "size": "29%",
      "x": 0,
      "y": 1664,
      "status": "confirmed"
    },
    "guidelineSummary": "Dược mỹ phẩm Pháp Noreva. Tham khảo trực tiếp tài liệu GUIDELINE NOREVA 2026 trên Google Drive.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "GUIDELINE NOREVA 2026.pdf (Google Drive)",
        "url": "https://drive.google.com/file/d/1a2xip-AtBgAs3rP2eGCpDLTbJgrUYuM5/view",
        "type": "drive"
      },
      {
        "label": "GUIDELINE NOREVA 2026 (PDF)",
        "url": "https://drive.google.com/file/d/1GIO3S1jvUu1BwVnmvGcUeYadsM5grm3G/view",
        "type": "pdf"
      },
      {
        "label": "NOREVA Brand Guidelines -01 (PDF)",
        "url": "https://drive.google.com/file/d/14eOTc7rgqscEuwKruFaMiPeNAi_5voPK/view",
        "type": "pdf"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1YyvucLKb6nJAYZR8NbDEMRi4QA8t4jq4",
    "refVideo": {
      "id": "17qfP6oEVFi_zYVP8djK-oOiQhiRK2poC",
      "name": "NRV2610023.mp4",
      "path": "EDITOR COLLECTION / Noreva / NRV2610023.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/17qfP6oEVFi_zYVP8djK-oOiQhiRK2poC/view",
      "previewUrl": "https://drive.google.com/file/d/17qfP6oEVFi_zYVP8djK-oOiQhiRK2poC/preview",
      "poolSize": 36
    },
    "styleRefs": [
      {
        "label": "Typography & Color Reference",
        "src": "./assets/style-refs/noreva-typo.png"
      },
      {
        "label": "AI Talent Reference Sheet",
        "src": "./assets/style-refs/noreva-talent.png"
      }
    ],
    "assetImages": [],
    "templates": [
      {
        "label": "INTRO Template (Toàn bộ Video)",
        "url": "https://drive.google.com/file/d/1dqB4qU65nMjuVezy3ny8Wwm6qkH-CImh/view",
        "kind": "intro"
      },
      {
        "label": "OUTRO Template (Toàn bộ Video)",
        "url": "https://drive.google.com/file/d/19B91L8VenqrcD19s1IQP2uUDuX8JQbSE/view",
        "kind": "outro"
      },
      {
        "label": "Download SVN-Gilroy Font",
        "url": "https://drive.google.com/file/d/1n_mRmPoXuG4h27Kue65zYomFctr32nZK/view",
        "kind": "font"
      }
    ],
    "notes": [
      "Áp dụng INTRO và OUTRO chuẩn cho toàn bộ video Noreva.",
      "Tham khảo AI Talent Reference Sheet (10 góc mặt chuẩn) bên dưới khi tạo nhân vật AI."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1XqliKPRaG1866DqxEO8-MufylcR7RhkY"
  },
  {
    "id": 40,
    "slug": "yuwell",
    "name": "Yuwell",
    "category": "Household Electronic",
    "totalVideos": 37,
    "completeness": "complete",
    "voiceModel": "TVC - Ái Hạnh",
    "font": {
      "family": "Montserrat Bold / Regular",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Yuwell Red",
          "hex": "#DF0025"
        }
      ],
      "styleRule": "Không stroke / Không background",
      "colorNote": "Trắng / Đỏ #DF0025, không stroke hoặc background.",
      "downloadUrl": "https://drive.google.com/file/d/1u0p9tm7gKzTNg1aSzSUDuwjGJgmMRdcF/view",
      "downloadLabel": "Montserrat Font"
    },
    "logos": [
      {
        "label": "Yuwell Logo",
        "src": "./assets/logos/yuwell.png"
      }
    ],
    "logoPosition": {
      "size": "24%",
      "x": 0,
      "y": 1661,
      "status": "confirmed"
    },
    "guidelineSummary": "Medical-grade clean layout using Montserrat Bold/Regular in White & Yuwell Red (#DF0025) with no stroke or background box.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/18q-wH0Tp26T6BPxWHnsswVG7dA9XYgtc",
    "refVideo": {
      "id": "13UGPTAWlMzTcUXIW_BkNZoCYuJsEcbOB",
      "name": "YUA2611007.mp4",
      "path": "EDITOR COLLECTION / Yuwell / YUA2611007.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/13UGPTAWlMzTcUXIW_BkNZoCYuJsEcbOB/view",
      "previewUrl": "https://drive.google.com/file/d/13UGPTAWlMzTcUXIW_BkNZoCYuJsEcbOB/preview",
      "poolSize": 20
    },
    "styleRefs": [
      {
        "label": "Typography & Layout Reference",
        "src": "./assets/style-refs/yuwell-typo.png"
      }
    ],
    "assetImages": [],
    "templates": [
      {
        "label": "Download Montserrat Font",
        "url": "https://drive.google.com/file/d/1u0p9tm7gKzTNg1aSzSUDuwjGJgmMRdcF/view",
        "kind": "font"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1jk_VRysesGWBIHaKLcaF9T_S5-s04VOE"
  },
  {
    "id": 41,
    "slug": "swisse",
    "name": "SWISSE",
    "category": "Supplement",
    "totalVideos": 35,
    "completeness": "complete",
    "voiceModel": "SWISSE - Mỹ Linh",
    "font": {
      "family": "Montserrat",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Swisse Red",
          "hex": "#DA291C"
        },
        {
          "name": "Multivitamin Gold",
          "hex": "#F59E0B"
        },
        {
          "name": "Beauty Rose",
          "hex": "#D6336C"
        },
        {
          "name": "Detox Green",
          "hex": "#1E7A45"
        },
        {
          "name": "Mind & Sleep Navy",
          "hex": "#1D4E89"
        }
      ],
      "styleRule": "Màu chữ & Background tuỳ theo bảng màu từng dòng sản phẩm",
      "colorNote": "Trắng / Màu theo sản phẩm. Mở hình Swisse Category Color Matrix bên dưới để chọn đúng màu theo 17 nhóm sản phẩm.",
      "downloadUrl": "https://drive.google.com/file/d/1u0p9tm7gKzTNg1aSzSUDuwjGJgmMRdcF/view",
      "downloadLabel": "Montserrat Font"
    },
    "logos": [
      {
        "label": "Swisse Logo",
        "src": "./assets/logos/swisse.png"
      }
    ],
    "logoPosition": {
      "size": "29%",
      "x": 0,
      "y": 1472,
      "status": "confirmed"
    },
    "guidelineSummary": "Thực phẩm bảo vệ sức khỏe Swisse (Úc). Tham khảo thư mục Swisse Brand Guideline trên Google Drive.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "Swisse Brand Guideline Folder (Google Drive)",
        "url": "https://drive.google.com/drive/folders/14fJi0cA_QKhKXwDMHUjiC8RbPyRZlJso",
        "type": "drive"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/17RdgInpmvgUxiPPh1gM33STmIZa21WTd",
    "refVideo": {
      "id": "1U1A7yBr_URi798MMChjTyMfBpRWZyjaS",
      "name": "SW0807536.mp4",
      "path": "EDITOR COLLECTION / SWISSE / SW0807536.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1U1A7yBr_URi798MMChjTyMfBpRWZyjaS/view",
      "previewUrl": "https://drive.google.com/file/d/1U1A7yBr_URi798MMChjTyMfBpRWZyjaS/preview",
      "poolSize": 20
    },
    "styleRefs": [
      {
        "label": "Swisse Category Color Matrix",
        "src": "./assets/style-refs/swisse-color-matrix.png"
      },
      {
        "label": "Typography & Background Reference",
        "src": "./assets/style-refs/swisse-typo-1.png"
      },
      {
        "label": "Secondary Style Reference",
        "src": "./assets/style-refs/swisse-typo-2.png"
      }
    ],
    "assetImages": [
      {
        "label": "Liver Detox 120 Tabs (Mới)",
        "src": "./assets/brand-assets/swisse/liver-detox-new.png"
      },
      {
        "label": "Calcium + Vitamin D 150 Tabs (Mới)",
        "src": "./assets/brand-assets/swisse/calcium-d-new.png"
      },
      {
        "label": "Sleep 100 Tabs (Mới)",
        "src": "./assets/brand-assets/swisse/sleep-new.png"
      },
      {
        "label": "Wild Fish Oil 400 Caps (Mới)",
        "src": "./assets/brand-assets/swisse/fish-oil-new.png"
      },
      {
        "label": "High Strength Cranberry 30s",
        "src": "./assets/brand-assets/swisse/cranberry.png"
      },
      {
        "label": "Vitamin C Effervescent",
        "src": "./assets/brand-assets/swisse/vitamin-c.png"
      },
      {
        "label": "Evening Primrose Oil 200s",
        "src": "./assets/brand-assets/swisse/epo.png"
      }
    ],
    "templates": [
      {
        "label": "OUTRO Template (Toàn bộ Video)",
        "url": "https://drive.google.com/file/d/1pRS_sBtvoe6kQR1bxpsrr5_RDHA5bAYn/view",
        "kind": "outro"
      },
      {
        "label": "Swisse Full PACKSHOTS Folder",
        "url": "https://drive.google.com/drive/folders/1jaPF7MROM2EsvkyPH4AELiklU01kPLq-",
        "kind": "folder"
      },
      {
        "label": "Download Montserrat Font",
        "url": "https://drive.google.com/file/d/1u0p9tm7gKzTNg1aSzSUDuwjGJgmMRdcF/view",
        "kind": "font"
      }
    ],
    "notes": [
      "BẮT BUỘC luôn có câu CLAIM ở góc dưới video: \"Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh\".",
      "Áp dụng OUTRO Template chuẩn cho toàn bộ video Swisse.",
      "Đối chiếu Swisse Category Color Matrix để chọn đúng màu chủ đạo & màu phụ cho từng dòng sản phẩm."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1AVAN49QlO-xyyEoq9RmK7-DlQTuB2SpJ"
  },
  {
    "id": 42,
    "slug": "aqua",
    "name": "AQUA",
    "category": "Household Electronic",
    "totalVideos": 30,
    "completeness": "complete",
    "voiceModel": "TVC - Diễm Tuyết",
    "font": {
      "family": "Montserrat",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "AQUA Blue",
          "hex": "#004184"
        }
      ],
      "styleRule": "Không stroke / Không background",
      "colorNote": "Trắng / Xanh #004184, không stroke hoặc background.",
      "downloadUrl": "https://drive.google.com/file/d/1u0p9tm7gKzTNg1aSzSUDuwjGJgmMRdcF/view",
      "downloadLabel": "Montserrat Font"
    },
    "logos": [
      {
        "label": "AQUA Logo",
        "src": "./assets/logos/aqua.png"
      }
    ],
    "logoPosition": {
      "size": "26%",
      "x": 0,
      "y": 1555,
      "status": "confirmed"
    },
    "guidelineSummary": "Clean home-appliance look using Montserrat in White & AQUA Blue (#004184) without text stroke or background box.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": {
      "id": "1V4bq102IuQrsZgIbwuokyWqU1MTqwnNv",
      "name": "AQUA180231 Go - R1.mp4",
      "path": "EDITOR COLLECTION / AQUA / AQUA180231 Go - R1.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1V4bq102IuQrsZgIbwuokyWqU1MTqwnNv/view",
      "previewUrl": "https://drive.google.com/file/d/1V4bq102IuQrsZgIbwuokyWqU1MTqwnNv/preview",
      "poolSize": 1
    },
    "styleRefs": [
      {
        "label": "Typography & Layout Reference",
        "src": "./assets/style-refs/aqua-typo.png"
      }
    ],
    "assetImages": [],
    "templates": [
      {
        "label": "Download Montserrat Font",
        "url": "https://drive.google.com/file/d/1u0p9tm7gKzTNg1aSzSUDuwjGJgmMRdcF/view",
        "kind": "font"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1Mm3BhbXjLlLBUgA9Zi4ZLoHFwBe18yxr"
  },
  {
    "id": 43,
    "slug": "kewpie",
    "name": "Kewpie",
    "category": "F&B",
    "totalVideos": 27,
    "completeness": "complete",
    "voiceModel": "Kewpie - Bel - Nữ",
    "font": {
      "family": "SRN CookieRun",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Kewpie Red",
          "hex": "#E63040"
        }
      ],
      "styleRule": "Stroke Trắng / Đỏ #E63040",
      "colorNote": "Color: Trắng / Đỏ #E63040 · Stroke: Trắng / Đỏ #E63040.",
      "downloadUrl": "https://drive.google.com/file/d/1wF0d1pvhg0IyXluoTvBcAeE8u7dYq3hj/view",
      "downloadLabel": "SRN CookieRun Font"
    },
    "logos": [
      {
        "label": "Kewpie Logo",
        "src": "./assets/logos/kewpie.png"
      }
    ],
    "logoPosition": {
      "status": "na",
      "note": "NONE — Không gắn Logo góc trên (sử dụng Outro Template cuối video)."
    },
    "guidelineSummary": "Warm, appetizing culinary style using SRN CookieRun in White & Kewpie Red (#E63040) with matching stroke. Always append the official Kewpie Outro.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/15rpjgszGtneUXNl98Po3TGUvW1cCEgVv",
    "refVideo": {
      "id": "1gEraC-X_YozQdNHqTH67yBMqSFz-eICw",
      "name": "KAE2610005.mp4",
      "path": "EDITOR COLLECTION / Kewpie / KAE2610005.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1gEraC-X_YozQdNHqTH67yBMqSFz-eICw/view",
      "previewUrl": "https://drive.google.com/file/d/1gEraC-X_YozQdNHqTH67yBMqSFz-eICw/preview",
      "poolSize": 13
    },
    "styleRefs": [
      {
        "label": "Typography & Stroke Reference",
        "src": "./assets/style-refs/kewpie-typo.png"
      }
    ],
    "assetImages": [],
    "templates": [
      {
        "label": "OUTRO Template (Mọi Video)",
        "url": "https://drive.google.com/file/d/130d6WKLJY-_Dy726sZojxItMaQAoHtAN/view",
        "kind": "outro"
      },
      {
        "label": "Download SRN CookieRun Font",
        "url": "https://drive.google.com/file/d/1wF0d1pvhg0IyXluoTvBcAeE8u7dYq3hj/view",
        "kind": "font"
      }
    ],
    "notes": [
      "Bắt buộc áp dụng OUTRO Template cho mọi video Kewpie."
    ],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1LJeuj09VX9alx2b_G9q8u7FGHeI-_APX"
  },
  {
    "id": 44,
    "slug": "braun",
    "name": "Braun",
    "category": "Household Electronic",
    "totalVideos": 6,
    "completeness": "complete",
    "voiceModel": "N/A",
    "font": {
      "family": "SVN-Gilroy",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Braun Gold",
          "hex": "#F7A400"
        }
      ],
      "styleRule": "Không stroke / Không background",
      "colorNote": "Trắng / Vàng #F7A400, không stroke hoặc background.",
      "downloadUrl": "https://drive.google.com/file/d/1n_mRmPoXuG4h27Kue65zYomFctr32nZK/view",
      "downloadLabel": "SVN-Gilroy Font"
    },
    "logos": [
      {
        "label": "Braun Logo (White)",
        "src": "./assets/logos/braun-white.png"
      },
      {
        "label": "Braun Logo (Dark)",
        "src": "./assets/logos/braun.png"
      }
    ],
    "logoPosition": {
      "size": "29%",
      "x": 0,
      "y": 1601,
      "status": "confirmed"
    },
    "guidelineSummary": "Sleek German engineering aesthetic using SVN-Gilroy in White & Braun Gold (#F7A400) with no stroke or background.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": {
      "id": "1aGBMTGywMPymm9SjFQU9j1rmlYLwKweP",
      "name": "BR0203116.mp4",
      "path": "EDITOR COLLECTION / Braun / BR0203116.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1aGBMTGywMPymm9SjFQU9j1rmlYLwKweP/view",
      "previewUrl": "https://drive.google.com/file/d/1aGBMTGywMPymm9SjFQU9j1rmlYLwKweP/preview",
      "poolSize": 1
    },
    "styleRefs": [
      {
        "label": "Typography & Layout Reference",
        "src": "./assets/style-refs/braun-typo.png"
      }
    ],
    "assetImages": [],
    "templates": [
      {
        "label": "Download SVN-Gilroy Font",
        "url": "https://drive.google.com/file/d/1n_mRmPoXuG4h27Kue65zYomFctr32nZK/view",
        "kind": "font"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1ejAFUkKA-msRl1FfSltO7Up82wCWyRmm"
  },
  {
    "id": 45,
    "slug": "asics",
    "name": "ASICS",
    "category": "Fashion & Sport",
    "totalVideos": 2,
    "completeness": "complete",
    "voiceModel": "NONE (Không sử dụng Voice)",
    "font": {
      "family": "SVN-Gilroy",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "ASICS Teal",
          "hex": "#018499"
        }
      ],
      "styleRule": "Không stroke / Không background",
      "colorNote": "Trắng / Xanh #018499, không stroke hoặc background.",
      "downloadUrl": "https://drive.google.com/file/d/1n_mRmPoXuG4h27Kue65zYomFctr32nZK/view",
      "downloadLabel": "SVN-Gilroy Font"
    },
    "logos": [
      {
        "label": "ASICS Logo",
        "src": "./assets/logos/asics.png"
      }
    ],
    "logoPosition": {
      "size": "30%",
      "x": 0,
      "y": 1563,
      "status": "confirmed"
    },
    "guidelineSummary": "Dynamic sport visual style using SVN-Gilroy in White & ASICS Teal (#018499), clean typography without stroke/background, no voiceover.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1iGLLKmAlUjyS93Q9O3hb1BZCdRaoapga",
    "refVideo": {
      "id": "16D_w9_X9pXXGNO8KKzw2FwjqdqGOcPLt",
      "name": "ASICS DEMO.mp4",
      "path": "EDITOR COLLECTION / ASICS / ASICS DEMO.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/16D_w9_X9pXXGNO8KKzw2FwjqdqGOcPLt/view",
      "previewUrl": "https://drive.google.com/file/d/16D_w9_X9pXXGNO8KKzw2FwjqdqGOcPLt/preview",
      "poolSize": 4
    },
    "styleRefs": [
      {
        "label": "Typography & Layout Reference",
        "src": "./assets/style-refs/asics-typo.png"
      }
    ],
    "assetImages": [],
    "templates": [
      {
        "label": "Download SVN-Gilroy Font",
        "url": "https://drive.google.com/file/d/1n_mRmPoXuG4h27Kue65zYomFctr32nZK/view",
        "kind": "font"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1aszUBig-STqZandfI2Qh-gpPavXk7JFW"
  },
  {
    "id": 46,
    "slug": "bao-xuan",
    "name": "Bao Xuan",
    "category": "Supplement",
    "totalVideos": 1,
    "completeness": "complete",
    "voiceModel": "Mẹ - Aptamil",
    "font": {
      "family": "Avenir Rounded Pro Bold",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        }
      ],
      "styleRule": "Không stroke / Không background",
      "colorNote": "Trắng (#FFFFFF), không stroke hoặc background.",
      "downloadUrl": "https://drive.google.com/file/d/1HEk82e_At8Tl49pQwRKD0srq5WzvuZxT/view",
      "downloadLabel": "Avenir Rounded Pro Bold"
    },
    "logos": [
      {
        "label": "Bảo Xuân Logo 1",
        "src": "./assets/logos/baoxuan-1.png"
      },
      {
        "label": "Bảo Xuân Logo 2",
        "src": "./assets/logos/baoxuan-2.png"
      }
    ],
    "logoPosition": {
      "size": "28%",
      "x": 0,
      "y": 1634,
      "status": "confirmed"
    },
    "guidelineSummary": "Soft, feminine wellness tone using clean white Avenir Rounded Pro Bold typography without stroke or background.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": {
      "id": "15hHL139wzdoY-xsJNZ3ABZzIFiCpVkkK",
      "name": "BX0001126.mp4",
      "path": "EDITOR COLLECTION / Bao Xuan / BX0001126.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/15hHL139wzdoY-xsJNZ3ABZzIFiCpVkkK/view",
      "previewUrl": "https://drive.google.com/file/d/15hHL139wzdoY-xsJNZ3ABZzIFiCpVkkK/preview",
      "poolSize": 1
    },
    "styleRefs": [
      {
        "label": "Typography & Layout Reference",
        "src": "./assets/style-refs/baoxuan-typo.png"
      }
    ],
    "assetImages": [],
    "templates": [
      {
        "label": "Download Avenir Rounded Pro Bold",
        "url": "https://drive.google.com/file/d/1HEk82e_At8Tl49pQwRKD0srq5WzvuZxT/view",
        "kind": "font"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/13aBCTLr2gbTTj08QqEQig2Ur3ZRd6kBq"
  },
  {
    "id": 47,
    "slug": "bioderma",
    "name": "Bioderma",
    "category": "Beauty",
    "totalVideos": 1,
    "completeness": "complete",
    "voiceModel": "Giọng nữ miền Nam - Trẻ trung sôi nổi",
    "font": {
      "family": "SVN-Gilroy",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Bioderma Navy",
          "hex": "#003A70"
        }
      ],
      "styleRule": "Background Trắng / Xanh #003A70",
      "colorNote": "Color: Trắng / Xanh #003A70 · Background: Trắng / Xanh #003A70.",
      "downloadUrl": "https://drive.google.com/file/d/1n_mRmPoXuG4h27Kue65zYomFctr32nZK/view",
      "downloadLabel": "SVN-Gilroy Font"
    },
    "logos": [
      {
        "label": "Bioderma Logo",
        "src": "./assets/logos/bioderma.webp"
      }
    ],
    "logoPosition": {
      "size": "30%",
      "x": 0,
      "y": 1599,
      "status": "confirmed"
    },
    "guidelineSummary": "Dermatological skincare style using SVN-Gilroy with solid White or Bioderma Navy (#003A70) text background boxes.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": {
      "id": "1wgace3-BXPWvv0D1NdWxL36xm543bF3m",
      "name": "BIO22051705-1.mp4",
      "path": "EDITOR COLLECTION / Bioderma / BIO22051705-1.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1wgace3-BXPWvv0D1NdWxL36xm543bF3m/view",
      "previewUrl": "https://drive.google.com/file/d/1wgace3-BXPWvv0D1NdWxL36xm543bF3m/preview",
      "poolSize": 1
    },
    "styleRefs": [
      {
        "label": "Typography & Background Reference",
        "src": "./assets/style-refs/bioderma-typo.png"
      }
    ],
    "assetImages": [],
    "templates": [
      {
        "label": "Download SVN-Gilroy Font",
        "url": "https://drive.google.com/file/d/1n_mRmPoXuG4h27Kue65zYomFctr32nZK/view",
        "kind": "font"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1HhozBGP3rTlZil8CLcUT7m5Idj-8livC"
  },
  {
    "id": 48,
    "slug": "crocs",
    "name": "Crocs",
    "category": "Fashion & Sport",
    "totalVideos": 1,
    "completeness": "complete",
    "voiceModel": "NONE (Không sử dụng Voice)",
    "font": {
      "family": "NONE (No on-screen text)",
      "styleRule": "Không sử dụng chữ / text overlay",
      "colorNote": "Visual-only format (no font / no voice)."
    },
    "logos": [
      {
        "label": "Crocs Logo",
        "src": "./assets/logos/crocs.png"
      }
    ],
    "logoPosition": {
      "size": "43%",
      "x": 0,
      "y": 1386,
      "status": "confirmed"
    },
    "guidelineSummary": "Purely visual product-showcase format: Crocs logo at Size 43% (X:0, Y:1386), no text overlay and no voiceover.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": {
      "id": "1hlq097dGu6mw8sS6fZ74liff9QkO1QsH",
      "name": "CRS2801332.mp4",
      "path": "EDITOR COLLECTION / Crocs / CRS2801332.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1hlq097dGu6mw8sS6fZ74liff9QkO1QsH/view",
      "previewUrl": "https://drive.google.com/file/d/1hlq097dGu6mw8sS6fZ74liff9QkO1QsH/preview",
      "poolSize": 1
    },
    "styleRefs": [
      {
        "label": "Logo & Visual Reference",
        "src": "./assets/style-refs/crocs-ref.png"
      }
    ],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1R0gSDqDFZJtE0_jtTM3dKB9WNa4mTxIg"
  },
  {
    "id": 49,
    "slug": "obagi",
    "name": "OBAGI",
    "category": "Beauty",
    "totalVideos": 1,
    "completeness": "complete",
    "voiceModel": "NONE (Không sử dụng Voice)",
    "font": {
      "family": "N/A (Visual Reference Style)",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Obagi Clinical Blue",
          "hex": "#004A99"
        }
      ],
      "styleRule": "White & Clinical Blue (theo Visual Ref)",
      "colorNote": "Trắng / Xanh dương. Không sử dụng Voice."
    },
    "logos": [
      {
        "label": "Obagi Approved Logo",
        "src": "./assets/logos/obagi.webp"
      }
    ],
    "logoPosition": {
      "status": "na",
      "note": "Logo placement N/A (xem Visual Ref & Approved Logo 2023)."
    },
    "guidelineSummary": "Premium clinical skincare style in White & Blue tones, no voiceover. Refer to the approved 2023 logo and visual style reference.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1qgG8lE45sLfDEEbJfCSIO740piCmY8o-",
    "refVideo": {
      "id": "1lj3p78CG36Qv2i63BAeBQ4jOTa-MA60p",
      "name": "OBG1103165.mp4",
      "path": "EDITOR COLLECTION / OBAGI / OBG1103165.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1lj3p78CG36Qv2i63BAeBQ4jOTa-MA60p/view",
      "previewUrl": "https://drive.google.com/file/d/1lj3p78CG36Qv2i63BAeBQ4jOTa-MA60p/preview",
      "poolSize": 14
    },
    "styleRefs": [
      {
        "label": "Visual & Color Reference",
        "src": "./assets/style-refs/obagi-ref.png"
      }
    ],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1G-2kceee0P4EzGzFxao6i2qn47RPa9k0"
  },
  {
    "id": 50,
    "slug": "rihair",
    "name": "RiHair",
    "category": "Beauty",
    "totalVideos": 1,
    "completeness": "complete",
    "voiceModel": "NONE (Không sử dụng Voice)",
    "font": {
      "family": "Montserrat",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "RiHair Crimson",
          "hex": "#B9121F"
        }
      ],
      "styleRule": "White & Crimson #B9121F",
      "colorNote": "Trắng / Đỏ #B9121F.",
      "downloadUrl": "https://drive.google.com/file/d/1u0p9tm7gKzTNg1aSzSUDuwjGJgmMRdcF/view",
      "downloadLabel": "Montserrat Font"
    },
    "logos": [
      {
        "label": "RiHair Logo",
        "src": "./assets/logos/rihair.png"
      }
    ],
    "logoPosition": {
      "size": "15%",
      "x": 434,
      "y": 1435,
      "status": "confirmed",
      "note": "Offset top-right (X:434, Y:1435) — xem Logo Position Reference."
    },
    "guidelineSummary": "Japanese hair-care visual aesthetic using Montserrat in White & Crimson (#B9121F), top-right logo placement (Size 15%, X:434, Y:1435), and official ingredient Elements (B5, Senburi, Vitamin E, Japan Logo).",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": {
      "id": "1Wa9LdngbAH7mPyZ52Y6k9tNm8TdWnYym",
      "name": "RH0704676.mp4",
      "path": "EDITOR COLLECTION / RiHair / RH0704676.mp4",
      "modified": "2026",
      "sizeMb": null,
      "reasons": [
        "Editor Curated Demo (EDITOR COLLECTION)"
      ],
      "url": "https://drive.google.com/file/d/1Wa9LdngbAH7mPyZ52Y6k9tNm8TdWnYym/view",
      "previewUrl": "https://drive.google.com/file/d/1Wa9LdngbAH7mPyZ52Y6k9tNm8TdWnYym/preview",
      "poolSize": 1
    },
    "styleRefs": [
      {
        "label": "Logo Position Reference (X:434, Y:1435)",
        "src": "./assets/style-refs/rihair-logo-pos.png"
      },
      {
        "label": "Typography & Color Reference",
        "src": "./assets/style-refs/rihair-typo.png"
      }
    ],
    "assetImages": [
      {
        "label": "Element B5",
        "src": "./assets/brand-assets/rihair/b5.png"
      },
      {
        "label": "Element Japan Logo",
        "src": "./assets/brand-assets/rihair/japan-logo.png"
      },
      {
        "label": "Element Senburi",
        "src": "./assets/brand-assets/rihair/senburi.png"
      },
      {
        "label": "Element Tóc",
        "src": "./assets/brand-assets/rihair/toc.png"
      },
      {
        "label": "Element Vitamin E",
        "src": "./assets/brand-assets/rihair/vitamin-e.png"
      },
      {
        "label": "Product Thumbnail",
        "src": "./assets/brand-assets/rihair/thumbnail.png"
      }
    ],
    "templates": [
      {
        "label": "RiHair Elements Folder",
        "url": "https://drive.google.com/drive/folders/1gysEMLxKR3TrthYadrjrWiVirbCPtbgm",
        "kind": "folder"
      },
      {
        "label": "Download Montserrat Font",
        "url": "https://drive.google.com/file/d/1u0p9tm7gKzTNg1aSzSUDuwjGJgmMRdcF/view",
        "kind": "font"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1AAibceNmxkPVFpfEP_tDbqXcpdVSmD0k"
  },
  {
    "id": 51,
    "slug": "electrolux",
    "name": "Electrolux",
    "category": "Household Electronic",
    "totalVideos": 213,
    "completeness": "complete",
    "voiceModel": "Nữ miền Nam - trẻ trung sôi nổi",
    "font": {
      "family": "Electrolux",
      "colors": [
        {
          "name": "White",
          "hex": "#FFFFFF"
        },
        {
          "name": "Black",
          "hex": "#111827"
        }
      ],
      "styleRule": "Không stroke / không background — clean minimalist Scandinavian typography"
    },
    "logos": [],
    "logoPosition": {
      "size": "45%",
      "x": 0,
      "y": 1495,
      "status": "confirmed"
    },
    "guidelineSummary": "Phong cách tối giản chuẩn Bắc Âu (Scandinavian clean). Chỉ dùng text trắng/đen sắc nét, không dùng viền stroke hay hộp nền sau chữ.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Qepf2766T3ziY-gCYUsBKyIlNEysgB9B",
    "refVideo": {
      "id": "1VEsNFihioyVHAx1LKD1iQQTJHJZRPxPl",
      "name": "ELE2610018.mp4",
      "path": "2026/Tháng 10/ELE2610018.mp4",
      "modified": "2026-10-26",
      "sizeMb": 47.8,
      "reasons": [
        "Curated Demo",
        "Done",
        "0 Revise",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1VEsNFihioyVHAx1LKD1iQQTJHJZRPxPl/view",
      "previewUrl": "https://drive.google.com/file/d/1VEsNFihioyVHAx1LKD1iQQTJHJZRPxPl/preview",
      "poolSize": 88
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1HEZjFv8o_XdqgHht5xaex8unaHinZOl8"
  },
  {
    "id": 52,
    "slug": "adidas",
    "name": "ADIDAS",
    "category": "Fashion & Sport",
    "totalVideos": 124,
    "completeness": "partial",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "size": "N/A",
      "note": "Không gắn logo cố định (N/A)",
      "status": "na"
    },
    "guidelineSummary": "Nhóm Fashion & Sport — phong cách năng động, chuyển động dứt khoát (shooting / AI sport lookbook). Thông tin font & voice sẽ được cập nhật bổ sung.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1S8dfHlZNaDYGVNCKgoxGDAybMi0pEuKo",
    "refVideo": {
      "id": "1dXIKhtN8iqJavS2GzMjSauDPkuwwO-Sd",
      "name": "ADD2611009.mp4",
      "path": "2026/THÁNG 11/ADD2611009.mp4",
      "modified": "2026-11-19",
      "sizeMb": 54.6,
      "reasons": [
        "Done",
        "0 Revise",
        "Shooting",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1dXIKhtN8iqJavS2GzMjSauDPkuwwO-Sd/view",
      "previewUrl": "https://drive.google.com/file/d/1dXIKhtN8iqJavS2GzMjSauDPkuwwO-Sd/preview",
      "poolSize": 45
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  },
  {
    "id": 53,
    "slug": "hectors",
    "name": "Hectors",
    "category": "Supplement",
    "totalVideos": 90,
    "completeness": "partial",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1uMV7xPY1kWlb1tdOjP1WnR3qKiFps7Bm",
    "refVideo": {
      "id": "1SU59Rme8FnzMTZvGUYxp80UE5GsEIsu9",
      "name": "HT10061650.mp4",
      "path": "HT10061650.mp4",
      "modified": "2026-08-04",
      "sizeMb": 32.0,
      "reasons": [
        "In VIDEO SAMPLE"
      ],
      "url": "https://drive.google.com/file/d/1SU59Rme8FnzMTZvGUYxp80UE5GsEIsu9/view",
      "previewUrl": "https://drive.google.com/file/d/1SU59Rme8FnzMTZvGUYxp80UE5GsEIsu9/preview",
      "poolSize": 3
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1OKBz0YzQ2zCXRa0eGNdoFf9EFcHMf3Bk"
  },
  {
    "id": 54,
    "slug": "rohto-sc",
    "name": "Rohto SC",
    "category": "Beauty",
    "totalVideos": 86,
    "completeness": "complete",
    "voiceModel": "Nữ miền Nam - trẻ trung sôi nổi",
    "font": {
      "family": "Montserrat",
      "colors": [],
      "colorNote": "Adapt theo logo / màu sản phẩm (Sunplay, Melano CC, Acnes, Hada Labo, Blossomy, ScarZ)",
      "styleRule": "Có sử dụng stroke"
    },
    "logos": [
      {
        "label": "Sunplay",
        "src": "./assets/logos/rohto/1200_x_1200_Sunplay_.png"
      },
      {
        "label": "Sunplay Skin Aqua",
        "src": "./assets/logos/rohto/1200_x_12000_Sunplay_Skin_Aqua_.png"
      },
      {
        "label": "Sunplay Skin Aqua (Dark)",
        "src": "./assets/logos/rohto/1200_x_12000_Sunplay_Skin_Aqua_B.png"
      },
      {
        "label": "Melano CC",
        "src": "./assets/logos/rohto/1200_x_300_Melano_CC.png"
      },
      {
        "label": "Acnes (White)",
        "src": "./assets/logos/rohto/Acnes_2_W.png"
      },
      {
        "label": "Acnes",
        "src": "./assets/logos/rohto/Acnes_2.png"
      },
      {
        "label": "Acnes (Dark)",
        "src": "./assets/logos/rohto/Acnes_B.png"
      },
      {
        "label": "Blossomy",
        "src": "./assets/logos/rohto/Blossomy.jpg"
      },
      {
        "label": "Hada Labo (Color)",
        "src": "./assets/logos/rohto/HDLB_Color.png"
      },
      {
        "label": "Acnes Lab",
        "src": "./assets/logos/rohto/LOGO_ACNES_LAB.png"
      },
      {
        "label": "Blossomy",
        "src": "./assets/logos/rohto/Logo_Blossomy.png"
      },
      {
        "label": "ScarZ Intensive Gel",
        "src": "./assets/logos/rohto/ScarZ_Intensive_Gel_-_Logo.png"
      },
      {
        "label": "Blossomy Premium",
        "src": "./assets/logos/rohto/image-removebg-preview.png"
      }
    ],
    "logoPosition": {
      "size": "32%",
      "x": 0,
      "y": 1594,
      "status": "confirmed"
    },
    "guidelineSummary": "Rohto Skincare (Sunplay, Skin Aqua, Melano CC, Acnes, Hada Labo, Blossomy, ScarZ). Chọn đúng logo sub-brand tương ứng với SKU trong kịch bản và adapt màu chữ theo bao bì sản phẩm.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ome1wqkyQjnqI4FUTpKHfHZXedw8vzEc",
    "refVideo": {
      "id": "10D4xe_liW8Z4TkURUL11JUzL1xtzWs9c",
      "name": "RSC000163 - R1.mp4",
      "path": "2026/THÁNG 8/RSC000163 - R1.mp4",
      "modified": "2026-08-13",
      "sizeMb": 41.8,
      "reasons": [
        "Curated Demo"
      ],
      "url": "https://drive.google.com/file/d/10D4xe_liW8Z4TkURUL11JUzL1xtzWs9c/view",
      "previewUrl": "https://drive.google.com/file/d/10D4xe_liW8Z4TkURUL11JUzL1xtzWs9c/preview",
      "poolSize": 37
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1ytEAF-3tE4reeAEKI_jRs7c3um7qEm6r"
  },
  {
    "id": 55,
    "slug": "rohto-hb",
    "name": "Rohto HB",
    "category": "Beauty",
    "totalVideos": 85,
    "completeness": "complete",
    "voiceModel": "Nữ miền Nam - trẻ trung sôi nổi",
    "font": {
      "family": "Montserrat",
      "colors": [],
      "colorNote": "Adapt theo logo / màu sản phẩm (LipIce, Lip On Lip, Liptician, Remos, 50 Megumi, Refre, Rohto V5, Selsun)",
      "styleRule": "Có sử dụng stroke"
    },
    "logos": [
      {
        "label": "LIP ON LIP",
        "src": "./assets/logos/rohto/LIP_ON_LIP.png"
      },
      {
        "label": "Lip Ice Sheer Color",
        "src": "./assets/logos/rohto/Lip_Ice_Sheer_Color.png"
      },
      {
        "label": "Liptician (White)",
        "src": "./assets/logos/rohto/Liptician_Logo_W.png"
      },
      {
        "label": "Liptician",
        "src": "./assets/logos/rohto/Liptician_Logo.png"
      },
      {
        "label": "Remos",
        "src": "./assets/logos/rohto/Logo__Remos.png"
      },
      {
        "label": "50 Megumi",
        "src": "./assets/logos/rohto/Logo_50_Megumi.png"
      },
      {
        "label": "Refre",
        "src": "./assets/logos/rohto/Logo_Refre.png"
      },
      {
        "label": "Rohto V5",
        "src": "./assets/logos/rohto/Logo_RohtoV5.png"
      },
      {
        "label": "Selsun (Dark)",
        "src": "./assets/logos/rohto/Logo_Selsun_B.png"
      },
      {
        "label": "Selsun",
        "src": "./assets/logos/rohto/Logo_Selsun.png"
      },
      {
        "label": "LipBalm",
        "src": "./assets/logos/rohto/lipbalm_logo-01.png"
      },
      {
        "label": "Mentholatum Remos",
        "src": "./assets/logos/rohto/unnamed-removebg-preview.png"
      }
    ],
    "logoPosition": {
      "size": "32%",
      "x": 0,
      "y": 1594,
      "status": "confirmed"
    },
    "guidelineSummary": "Rohto Health & Beauty (LipIce, Lip On Lip, Liptician, Selsun, 50 Megumi, Refre, Remos, Rohto V5). Giữ chung vị trí logo chuẩn Rohto (32%, y:1594) và adapt màu chữ theo sub-brand.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ome1wqkyQjnqI4FUTpKHfHZXedw8vzEc",
    "refVideo": {
      "id": "1wGdxLL6QlOtFzxi6s1wictCQGVMYY4-A",
      "name": "RHBA2611005.mp4",
      "path": "2026/THÁNG 11/RHBA2611005.mp4",
      "modified": "2026-11-16",
      "sizeMb": 82.8,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1wGdxLL6QlOtFzxi6s1wictCQGVMYY4-A/view",
      "previewUrl": "https://drive.google.com/file/d/1wGdxLL6QlOtFzxi6s1wictCQGVMYY4-A/preview",
      "poolSize": 40
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1ytEAF-3tE4reeAEKI_jRs7c3um7qEm6r"
  },
  {
    "id": 56,
    "slug": "adm",
    "name": "ADM",
    "category": "FMCG",
    "totalVideos": 80,
    "completeness": "complete",
    "voiceModel": "ADM nam 1 / ADM nữ trẻ / ADM chó mèo",
    "font": {
      "family": "Paytone One",
      "colors": [],
      "colorNote": "Adapt theo logo / sản phẩm (Ganador, Minino)",
      "styleRule": "Có sử dụng stroke"
    },
    "logos": [
      {
        "label": "Ganador New Logo",
        "src": "./assets/logos/adm-ganador.png"
      },
      {
        "label": "Minino Color",
        "src": "./assets/logos/adm-minino.png"
      },
      {
        "label": "Minino Black",
        "src": "./assets/logos/adm-minino-black.png"
      }
    ],
    "logoPosition": {
      "size": "34%",
      "x": 0,
      "y": 1598,
      "status": "confirmed"
    },
    "guidelineSummary": "Thương hiệu dinh dưỡng thú cưng ADM (Ganador cho chó, Minino cho mèo). Chọn voice phù hợp góc nhìn kịch bản (Nam, Nữ trẻ, hoặc giọng thú cưng). Dùng asset chén chó / chén mèo đồng bộ.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/10veL7bGaij8TOUBUfEGDodndmzaKkIAr",
    "refVideo": {
      "id": "1Dy34OYLyxraglacoBiaiSjuUlP2qw_IQ",
      "name": "ADM2610015.mp4",
      "path": "2026/Tháng 10/ADM2610015.mp4",
      "modified": "2026-11-10",
      "sizeMb": 39.9,
      "reasons": [
        "Curated Demo",
        "Done",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1Dy34OYLyxraglacoBiaiSjuUlP2qw_IQ/view",
      "previewUrl": "https://drive.google.com/file/d/1Dy34OYLyxraglacoBiaiSjuUlP2qw_IQ/preview",
      "poolSize": 73
    },
    "styleRefs": [],
    "assetImages": [
      {
        "label": "Chén Chó (Ganador)",
        "src": "./assets/brand-assets/adm/chen-cho.png"
      },
      {
        "label": "Chén Ăn Mèo (Minino)",
        "src": "./assets/brand-assets/adm/chen-meo.png"
      }
    ],
    "templates": [
      {
        "label": "ADM Logo & Pet Bowls Folder",
        "url": "https://drive.google.com/drive/folders/10oPus3vOhtwY-1dWRJvMMn3Ixev2GcRT",
        "kind": "folder"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/10oPus3vOhtwY-1dWRJvMMn3Ixev2GcRT"
  },
  {
    "id": 57,
    "slug": "bluestone",
    "name": "Bluestone",
    "category": "Household Electronic",
    "totalVideos": 70,
    "completeness": "complete",
    "voiceModel": "Nữ miền Nam - trẻ trung sôi nổi",
    "font": {
      "family": "Momo Trust Display",
      "colors": [],
      "colorNote": "Adapt theo sản phẩm gia dụng BlueStone",
      "styleRule": "Dùng background cho text/supers",
      "downloadUrl": "./assets/fonts/Momo_Trust_Display.zip",
      "downloadLabel": "Momo_Trust_Display.zip"
    },
    "logos": [
      {
        "label": "Logo BlueStone-08",
        "src": "./assets/logos/bluestone.png"
      }
    ],
    "logoPosition": {
      "size": "40%",
      "x": 0,
      "y": 1503,
      "status": "confirmed"
    },
    "guidelineSummary": "Đồ gia dụng hiện đại BlueStone. Bắt buộc sử dụng font Momo Trust Display có background box phía sau text để đảm bảo độ tương phản trên cảnh bếp/gia dụng.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/175VOpj1FCx2XDPhiPiUiafJA4EyTZ7fC",
    "refVideo": {
      "id": "1sooRLd1rZUfwZ5pY-_fsnWagMvQXMp7X",
      "name": "BSA2611019.mp4",
      "path": "Tháng 11/BSA2611019.mp4",
      "modified": "2026-11-19",
      "sizeMb": 93.8,
      "reasons": [
        "Curated Demo",
        "Done",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1sooRLd1rZUfwZ5pY-_fsnWagMvQXMp7X/view",
      "previewUrl": "https://drive.google.com/file/d/1sooRLd1rZUfwZ5pY-_fsnWagMvQXMp7X/preview",
      "poolSize": 22
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [
      {
        "label": "Momo Trust Display Font (Drive)",
        "url": "https://drive.google.com/file/d/1Pw5INUXmzk5jOhCa5ZFYf_oqAru_H2La/view",
        "kind": "font"
      }
    ],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1rxxdZHpJqiiF00PTfNa4AtDzFme_EvAR"
  },
  {
    "id": 58,
    "slug": "ogg---mbb",
    "name": "OGG - MBB",
    "category": "FMCG",
    "totalVideos": 58,
    "completeness": "complete",
    "voiceModel": "Hope",
    "font": {
      "family": "Full AI: SVN-Gotham Ultra | UGC: Montserrat",
      "colors": [
        {
          "name": "Sleep Spray",
          "hex": "#622DAA"
        },
        {
          "name": "Hair & Body Lotion",
          "hex": "#893615"
        },
        {
          "name": "JeMYU",
          "hex": "#D9182A"
        }
      ],
      "styleRule": "Có sử dụng stroke"
    },
    "logos": [],
    "logoPosition": {
      "size": "N/A",
      "note": "Không gắn logo cố định (N/A)",
      "status": "na"
    },
    "guidelineSummary": "Phân biệt rõ format: Video Full AI dùng font SVN-Gotham Ultra; video Mix UGC/AI dùng font Montserrat. Tuân thủ đúng mã màu hex cho từng dòng sản phẩm (Sleep Spray, Hair & Body Lotion, JeMYU).",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/15Tepb_j4vkNuM5S_5A1zoWT6PYMDNtCY",
    "refVideo": {
      "id": "18vrkQ-yt3Q93vivPBQLMqIIdgRqzdmkt",
      "name": "OMA2611009.mp4",
      "path": "THÁNG 11/OMA2611009.mp4",
      "modified": "2026-11-18",
      "sizeMb": 41.9,
      "reasons": [
        "Curated Demo",
        "0 Revise",
        "Special",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/18vrkQ-yt3Q93vivPBQLMqIIdgRqzdmkt/view",
      "previewUrl": "https://drive.google.com/file/d/18vrkQ-yt3Q93vivPBQLMqIIdgRqzdmkt/preview",
      "poolSize": 34
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1kJh2FkeBe0oQDlUlMgSGCKa_TyVRx1YB"
  },
  {
    "id": 59,
    "slug": "lavie",
    "name": "LAVIE",
    "category": "F&B",
    "totalVideos": 42,
    "completeness": "complete",
    "voiceModel": null,
    "font": {
      "family": "Royce LaVie",
      "colors": [],
      "colorNote": "Adapt theo logo / sản phẩm La Vie",
      "styleRule": "Có sử dụng stroke"
    },
    "logos": [],
    "logoPosition": {
      "size": "39%",
      "x": 0,
      "y": 1437,
      "status": "confirmed"
    },
    "guidelineSummary": "Nước khoáng thiên nhiên La Vie. Sử dụng font riêng Royce LaVie kèm stroke rõ nét và kiểm tra Master Brand Guidelines trước khi lên layout.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "La Vie | Master Brand Guidelines (Google Sheet)",
        "url": "https://docs.google.com/spreadsheets/d/1xhXQmnpbdDxxYiN_GqR8hh3MxVe7WsDChD8XLn4rdug/edit",
        "type": "drive"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1006dF72vVljzvRFoZ-xXNR_OxCxHd0Ci",
    "refVideo": {
      "id": "1j0ru2p3ErwfDb1GIyr3Y3HMGf_NvrM3d",
      "name": "LAA2611001.mp4",
      "path": "Tháng 10/LAA2611001.mp4",
      "modified": "2026-11-09",
      "sizeMb": 23.3,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1j0ru2p3ErwfDb1GIyr3Y3HMGf_NvrM3d/view",
      "previewUrl": "https://drive.google.com/file/d/1j0ru2p3ErwfDb1GIyr3Y3HMGf_NvrM3d/preview",
      "poolSize": 67
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/17Mqx2aCSH3hF04BbNgV-XBbWCa0xaqYT"
  },
  {
    "id": 60,
    "slug": "paseo",
    "name": "Paseo",
    "category": "FMCG",
    "totalVideos": 39,
    "completeness": "partial",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": {
      "id": "1ytF-1AnQBys9kYM93v-rLLCdbQBmN_gA",
      "name": "PSO14013132.mp4",
      "path": "PSO14013132.mp4",
      "modified": "2026-01-22",
      "sizeMb": 21.2,
      "reasons": [
        "In VIDEO SAMPLE"
      ],
      "url": "https://drive.google.com/file/d/1ytF-1AnQBys9kYM93v-rLLCdbQBmN_gA/view",
      "previewUrl": "https://drive.google.com/file/d/1ytF-1AnQBys9kYM93v-rLLCdbQBmN_gA/preview",
      "poolSize": 1
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1wq2O-INdUebKo_2DnY7bkNlXjod5XAp8"
  },
  {
    "id": 61,
    "slug": "swat",
    "name": "SWAT",
    "category": "FMCG",
    "totalVideos": 37,
    "completeness": "pending",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1r8G2xLMUgKlf4k8gauIKRB0W0z7PFWwU"
  },
  {
    "id": 62,
    "slug": "bông-bạch-tuyết",
    "name": "Bông Bạch Tuyết",
    "category": "Beauty",
    "totalVideos": 30,
    "completeness": "partial",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Uy3g9N4kJoE3BLec-MBqVe8Wu8uGPkeb",
    "refVideo": {
      "id": "1Se2KtYxQVIY1-KMr1OJ71gyzygrjcl2S",
      "name": "BTA2611003.mp4",
      "path": "THÁNG 11/BTA2611003.mp4",
      "modified": "2026-11-17",
      "sizeMb": 38.8,
      "reasons": [
        "Done",
        "0 Revise",
        "UGC",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1Se2KtYxQVIY1-KMr1OJ71gyzygrjcl2S/view",
      "previewUrl": "https://drive.google.com/file/d/1Se2KtYxQVIY1-KMr1OJ71gyzygrjcl2S/preview",
      "poolSize": 15
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/17JpEute5Fsxq-7BZx6ZZaiz9wHWNfzeG"
  },
  {
    "id": 63,
    "slug": "ogg---thecartparty",
    "name": "OGG - TheCartParty",
    "category": "FMCG",
    "totalVideos": 20,
    "completeness": "partial",
    "voiceModel": "Hope",
    "font": {
      "family": "SVN-Gilroy Heavy",
      "colors": [
        {
          "name": "White (Primary)",
          "hex": "#FFFFFF"
        }
      ],
      "colorNote": "#FFFFFF kết hợp 1 màu liên quan trực tiếp với bao bì sản phẩm",
      "styleRule": "Có sử dụng stroke"
    },
    "logos": [],
    "logoPosition": {
      "size": "N/A",
      "note": "Không gắn logo cố định (N/A)",
      "status": "na"
    },
    "guidelineSummary": "Dùng voice Hope, typography SVN-Gilroy Heavy màu trắng (#FFFFFF) kết hợp màu điểm nhấn theo sản phẩm, có viền stroke.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1kJh2FkeBe0oQDlUlMgSGCKa_TyVRx1YB"
  },
  {
    "id": 64,
    "slug": "th-true-milk",
    "name": "TH true MILK",
    "category": "F&B",
    "totalVideos": 17,
    "completeness": "partial",
    "voiceModel": "Nữ TH true milk",
    "font": {
      "family": "Roboto Bold",
      "colors": [],
      "colorNote": "Adapt theo logo / sản phẩm TH true MILK",
      "styleRule": "Có sử dụng stroke"
    },
    "logos": [],
    "logoPosition": {
      "size": "N/A",
      "note": "Không gắn logo cố định (N/A)",
      "status": "na"
    },
    "guidelineSummary": "Sử dụng đúng giọng Nữ TH true milk riêng biệt, font Roboto Bold với viền stroke và màu sắc hài hòa với bao bì từng dòng sữa.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/107A7Pvl9PoxL2FWY8YMaIEivcvAC8oeO"
  },
  {
    "id": 65,
    "slug": "ogg---nutifood---nestart",
    "name": "OGG - Nutifood + NestArt",
    "category": "F&B",
    "totalVideos": 11,
    "completeness": "complete",
    "voiceModel": "Hope",
    "font": {
      "family": "SVN-Gilroy Heavy",
      "colors": [
        {
          "name": "Cà Phê Ông Bầu (Dark)",
          "hex": "#563000"
        },
        {
          "name": "Cà Phê Ông Bầu (Gold)",
          "hex": "#FED926"
        },
        {
          "name": "Yến Sào Nha Trang",
          "hex": "#C12019"
        },
        {
          "name": "Yến Sào Cà Phê / Original",
          "hex": "#BD1215"
        },
        {
          "name": "Yến Sào Mật Ong",
          "hex": "#F29D24"
        },
        {
          "name": "White",
          "hex": "#FFFFFF"
        }
      ],
      "styleRule": "Có sử dụng stroke"
    },
    "logos": [],
    "logoPosition": {
      "size": "N/A",
      "note": "Không gắn logo cố định (N/A)",
      "status": "na"
    },
    "guidelineSummary": "Gồm các dòng Cà Phê Ông Bầu & Yến Sào Nha Trang (Cà phê, Original, Mật ong). Tuân thủ chính xác bộ mã màu hex từng SKU và voice Hope.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1cKaqLQ4QMzIX6fmELsJq04pocdNW76Rv",
    "refVideo": {
      "id": "10CfZUlgNQgF_OYSlayh2u1zXmsqZ4w3u",
      "name": "ONUM2611001.mp4",
      "path": "THÁNG 11/ONUM2611001.mp4",
      "modified": "2026-11-19",
      "sizeMb": 46.7,
      "reasons": [
        "Curated Demo",
        "0 Revise",
        "Special",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/10CfZUlgNQgF_OYSlayh2u1zXmsqZ4w3u/view",
      "previewUrl": "https://drive.google.com/file/d/10CfZUlgNQgF_OYSlayh2u1zXmsqZ4w3u/preview",
      "poolSize": 32
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1kJh2FkeBe0oQDlUlMgSGCKa_TyVRx1YB"
  },
  {
    "id": 66,
    "slug": "detechbio",
    "name": "DetechBio",
    "category": "Mom & Baby",
    "totalVideos": 10,
    "completeness": "complete",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Sữa dinh dưỡng PureLac / DetechBio. Tham khảo tài liệu Purelac Brand Guidelines trên Google Drive.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "Purelac Brand Guidelines 2024 (Google Drive PDF)",
        "url": "https://drive.google.com/file/d/1XgdX8Dw5XBGog1V8NmITCT2TJDADPpL8/view",
        "type": "drive"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1yWgO9I1US76c4eS38iHjwLRSxWgLwcIZ",
    "refVideo": {
      "id": "1JkAYdfTdWTLdrophurryDYUSnOBVXL4f",
      "name": "DTB0001227.mp4",
      "path": "2026/THÁNG 7/DTB0001227.mp4",
      "modified": "2026-07-14",
      "sizeMb": 66.8,
      "reasons": [],
      "url": "https://drive.google.com/file/d/1JkAYdfTdWTLdrophurryDYUSnOBVXL4f/view",
      "previewUrl": "https://drive.google.com/file/d/1JkAYdfTdWTLdrophurryDYUSnOBVXL4f/preview",
      "poolSize": 11
    },
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": "https://drive.google.com/drive/folders/1bL-sHjTR4GAri__S51rACdHXe2gK8ORK"
  },
  {
    "id": 67,
    "slug": "sheenycos",
    "name": "Sheenycos",
    "category": "Beauty",
    "totalVideos": 5,
    "completeness": "pending",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": null,
    "dos": [],
    "donts": [],
    "guidelineDocs": [],
    "driveFolderUrl": null,
    "refVideo": null,
    "styleRefs": [],
    "assetImages": [],
    "templates": [],
    "notes": [],
    "editorCollectionUrl": null
  }
];
