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
  guidelineDocs: GuidelineDoc[];
  driveFolderUrl: string | null;
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    "id": 6,
    "slug": "nordic-naturals",
    "name": "Nordic Naturals",
    "category": "Supplement",
    "totalVideos": 70,
    "completeness": "partial",
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
    "refVideo": null
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
    }
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
    }
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
    }
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
    }
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
    "refVideo": null
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
    }
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
    "refVideo": null
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
    }
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
    "refVideo": null
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
    "refVideo": null
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
    "refVideo": null
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
    "logos": [],
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
    }
  },
  {
    "id": 19,
    "slug": "aptamil",
    "name": "Aptamil",
    "category": "Mom & Baby",
    "totalVideos": 241,
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
    }
  },
  {
    "id": 20,
    "slug": "inova-acne-id",
    "name": "iNova Acne-id",
    "category": "Beauty",
    "totalVideos": 213,
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
    }
  },
  {
    "id": 21,
    "slug": "an-phong",
    "name": "An Phong",
    "category": "Household Electronic",
    "totalVideos": 130,
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
    }
  },
  {
    "id": 22,
    "slug": "blackmores",
    "name": "BLACKMORES",
    "category": "Supplement",
    "totalVideos": 103,
    "completeness": "complete",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Thực phẩm chức năng Blackmores. Tham khảo tài liệu BLACKMORES | BRAND GUIDELINE trên Google Drive.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "BLACKMORES | BRAND GUIDELINE (Google Doc)",
        "url": "https://docs.google.com/document/d/1JKRmHS7S2rBp0ipj0Zrlh98bXOaqXxNd2oP0_RUY-9k/edit",
        "type": "drive"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1uqdOy4CzksfOst70loEdSOBZNL5-_wJ9",
    "refVideo": {
      "id": "1i7wA9-yPnPkF7w6DbuDV_LlnmGBitJ2w",
      "name": "BAL2610001.mp4",
      "path": "2026/Tháng 9/BAL2610001.mp4",
      "modified": "2026-10-01",
      "sizeMb": 45.1,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1i7wA9-yPnPkF7w6DbuDV_LlnmGBitJ2w/view",
      "previewUrl": "https://drive.google.com/file/d/1i7wA9-yPnPkF7w6DbuDV_LlnmGBitJ2w/preview",
      "poolSize": 45
    }
  },
  {
    "id": 23,
    "slug": "dermalogica",
    "name": "DERMALOGICA",
    "category": "Beauty",
    "totalVideos": 94,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/1UPZFm-XvaKKqapvgX9HpaFYREhfrSuHW",
    "refVideo": {
      "id": "1xcFcCrDfWi1QCmUqNX25tTSpYGQ9UN0X",
      "name": "DER2610012.mp4",
      "path": "2026/THÁNG 10/DER2610012.mp4",
      "modified": "2026-10-29",
      "sizeMb": 47.2,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1xcFcCrDfWi1QCmUqNX25tTSpYGQ9UN0X/view",
      "previewUrl": "https://drive.google.com/file/d/1xcFcCrDfWi1QCmUqNX25tTSpYGQ9UN0X/preview",
      "poolSize": 55
    }
  },
  {
    "id": 24,
    "slug": "logitech",
    "name": "Logitech",
    "category": "Household Electronic",
    "totalVideos": 93,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/1hHcR6DPN8NA83lzeRePyFbeClr0uBBPh",
    "refVideo": {
      "id": "1knbmF6NWGkNwdYnUTo-QPOk-72C4Oh3_",
      "name": "LOA2610002.mp4",
      "path": "2026/Tháng 10/LOA2610002.mp4",
      "modified": "2026-11-12",
      "sizeMb": 86.5,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1knbmF6NWGkNwdYnUTo-QPOk-72C4Oh3_/view",
      "previewUrl": "https://drive.google.com/file/d/1knbmF6NWGkNwdYnUTo-QPOk-72C4Oh3_/preview",
      "poolSize": 47
    }
  },
  {
    "id": 25,
    "slug": "ui-mass",
    "name": "UI MASS",
    "category": "Beauty",
    "totalVideos": 81,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/1YJ5UNROYPqFC8U4qx9TGQcGk0xzRM5aa",
    "refVideo": {
      "id": "1Z353Y8FNEuGw5R0dlA5w8rolxLQN12Et",
      "name": "UI2610004.mp4",
      "path": "Tháng 10/UI2610004.mp4",
      "modified": "2026-10-07",
      "sizeMb": 20.2,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1Z353Y8FNEuGw5R0dlA5w8rolxLQN12Et/view",
      "previewUrl": "https://drive.google.com/file/d/1Z353Y8FNEuGw5R0dlA5w8rolxLQN12Et/preview",
      "poolSize": 29
    }
  },
  {
    "id": 26,
    "slug": "bonzon",
    "name": "Bonzon",
    "category": "FMCG",
    "totalVideos": 67,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/1WcmR63ukvN0_Si6aqe8w5yTVzctxKrX3",
    "refVideo": {
      "id": "1Hx8ruhX3KyGnHWZWxe9S3aBGpg-skRRx",
      "name": "BZ2611015.mp4",
      "path": "Tháng 11/BZ2611015.mp4",
      "modified": "2026-11-19",
      "sizeMb": 28.8,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1Hx8ruhX3KyGnHWZWxe9S3aBGpg-skRRx/view",
      "previewUrl": "https://drive.google.com/file/d/1Hx8ruhX3KyGnHWZWxe9S3aBGpg-skRRx/preview",
      "poolSize": 42
    }
  },
  {
    "id": 27,
    "slug": "groupe-bel",
    "name": "Groupe Bel",
    "category": "F&B",
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
    }
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
    }
  },
  {
    "id": 29,
    "slug": "issy",
    "name": "ISSY",
    "category": "Beauty",
    "totalVideos": 3,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/1rV8SP39ItDNAxhkyf7vyOquGsv4K4t7G",
    "refVideo": {
      "id": "1g-4k8aLL7PjHtz1u18-rf-9yO99I1iBv",
      "name": "ISY300635.mp4",
      "path": "2026/THÁNG 7/ISY300635.mp4",
      "modified": "2026-07-13",
      "sizeMb": 19.7,
      "reasons": [],
      "url": "https://drive.google.com/file/d/1g-4k8aLL7PjHtz1u18-rf-9yO99I1iBv/view",
      "previewUrl": "https://drive.google.com/file/d/1g-4k8aLL7PjHtz1u18-rf-9yO99I1iBv/preview",
      "poolSize": 4
    }
  },
  {
    "id": 30,
    "slug": "centrum",
    "name": "Centrum",
    "category": "Supplement",
    "totalVideos": 2,
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
    "refVideo": null
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
    "refVideo": null
  },
  {
    "id": 32,
    "slug": "biofemin",
    "name": "Biofemin",
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
    "refVideo": null
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
    "refVideo": null
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
    "refVideo": null
  },
  {
    "id": 35,
    "slug": "lg",
    "name": "LG",
    "category": "Household Electronic",
    "totalVideos": 509,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/1-ytvTmtghubRiXnlf7xNNO_dYGdEqeC2",
    "refVideo": {
      "id": "1hX0c7zc45AhAQqNum12rNbDh_Fys8vdg",
      "name": "LGA2611004.mp4",
      "path": "2026/THÁNG 11/LGA2611004.mp4",
      "modified": "2026-11-17",
      "sizeMb": 25.1,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1hX0c7zc45AhAQqNum12rNbDh_Fys8vdg/view",
      "previewUrl": "https://drive.google.com/file/d/1hX0c7zc45AhAQqNum12rNbDh_Fys8vdg/preview",
      "poolSize": 104
    }
  },
  {
    "id": 36,
    "slug": "sensodyne",
    "name": "Sensodyne",
    "category": "FMCG",
    "totalVideos": 393,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/1VjlH1r35CxO7A7fI1wgfdHunHNGNMekX",
    "refVideo": {
      "id": "16gLnpnLjWOTrYv9zqGMH63w0QajWf1yW",
      "name": "SSD2611012.mp4",
      "path": "SENSODYNE/2026/THÁNG 11/SSD2611012.mp4",
      "modified": "2026-11-16",
      "sizeMb": 51.9,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/16gLnpnLjWOTrYv9zqGMH63w0QajWf1yW/view",
      "previewUrl": "https://drive.google.com/file/d/16gLnpnLjWOTrYv9zqGMH63w0QajWf1yW/preview",
      "poolSize": 100
    }
  },
  {
    "id": 37,
    "slug": "beauty-republic",
    "name": "Beauty Republic",
    "category": "Beauty",
    "totalVideos": 180,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/1PwTO6uQQ5FnAqjg0jh5P_6RbYG8uqbt_",
    "refVideo": {
      "id": "10WdkNzFW1W6OnbKNT-eIxkpjds80W6MY",
      "name": "BRP0001866 - Ý.mp4",
      "path": "2026/THÁNG 8/BRP0001866 - Ý.mp4",
      "modified": "2026-08-21",
      "sizeMb": 27.0,
      "reasons": [],
      "url": "https://drive.google.com/file/d/10WdkNzFW1W6OnbKNT-eIxkpjds80W6MY/view",
      "previewUrl": "https://drive.google.com/file/d/10WdkNzFW1W6OnbKNT-eIxkpjds80W6MY/preview",
      "poolSize": 33
    }
  },
  {
    "id": 38,
    "slug": "tiger",
    "name": "Tiger",
    "category": "Household Electronic",
    "totalVideos": 57,
    "completeness": "complete",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
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
      "id": "1LzpiK-ap7cuW172itP5Qd-LDXp3VtumZ",
      "name": "TG2610005.mp4",
      "path": "2026/THÁNG 10/TG2610005.mp4",
      "modified": "2026-10-30",
      "sizeMb": 28.3,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1LzpiK-ap7cuW172itP5Qd-LDXp3VtumZ/view",
      "previewUrl": "https://drive.google.com/file/d/1LzpiK-ap7cuW172itP5Qd-LDXp3VtumZ/preview",
      "poolSize": 23
    }
  },
  {
    "id": 39,
    "slug": "noreva",
    "name": "Noreva",
    "category": "Beauty",
    "totalVideos": 46,
    "completeness": "complete",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
    },
    "guidelineSummary": "Dược mỹ phẩm Pháp Noreva. Tham khảo trực tiếp tài liệu GUIDELINE NOREVA 2026 trên Google Drive.",
    "dos": [],
    "donts": [],
    "guidelineDocs": [
      {
        "label": "GUIDELINE NOREVA 2026.pdf (Google Drive)",
        "url": "https://drive.google.com/file/d/1a2xip-AtBgAs3rP2eGCpDLTbJgrUYuM5/view",
        "type": "drive"
      }
    ],
    "driveFolderUrl": "https://drive.google.com/drive/folders/1YyvucLKb6nJAYZR8NbDEMRi4QA8t4jq4",
    "refVideo": {
      "id": "18zqet92yp3E1ccaha8Vy5pjGg8ZcBCEA",
      "name": "NRV2610012.mp4",
      "path": "2026/Tháng 10/NRV2610012.mp4",
      "modified": "2026-10-29",
      "sizeMb": 39.9,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/18zqet92yp3E1ccaha8Vy5pjGg8ZcBCEA/view",
      "previewUrl": "https://drive.google.com/file/d/18zqet92yp3E1ccaha8Vy5pjGg8ZcBCEA/preview",
      "poolSize": 36
    }
  },
  {
    "id": 40,
    "slug": "yuwell",
    "name": "Yuwell",
    "category": "Household Electronic",
    "totalVideos": 37,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/18q-wH0Tp26T6BPxWHnsswVG7dA9XYgtc",
    "refVideo": {
      "id": "105se68rMT-xLxk8X4a2bWmTPz4CdG5ky",
      "name": "YUA2610006.mp4",
      "path": "THÁNG 10/YUA2610006.mp4",
      "modified": "2026-11-11",
      "sizeMb": 34.4,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/105se68rMT-xLxk8X4a2bWmTPz4CdG5ky/view",
      "previewUrl": "https://drive.google.com/file/d/105se68rMT-xLxk8X4a2bWmTPz4CdG5ky/preview",
      "poolSize": 20
    }
  },
  {
    "id": 41,
    "slug": "swisse",
    "name": "SWISSE",
    "category": "Supplement",
    "totalVideos": 35,
    "completeness": "complete",
    "voiceModel": null,
    "font": null,
    "logos": [],
    "logoPosition": {
      "status": "tbd",
      "note": "Vị trí logo trong video sẽ được cập nhật sau"
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
      "id": "1eDN560UCQ7Vy0fh-uceSeA5Pkcqe62Qd",
      "name": "SWI2610001.mp4",
      "path": "Tháng 10/SWI2610001.mp4",
      "modified": "2026-10-08",
      "sizeMb": 104.9,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/1eDN560UCQ7Vy0fh-uceSeA5Pkcqe62Qd/view",
      "previewUrl": "https://drive.google.com/file/d/1eDN560UCQ7Vy0fh-uceSeA5Pkcqe62Qd/preview",
      "poolSize": 20
    }
  },
  {
    "id": 42,
    "slug": "aqua",
    "name": "AQUA",
    "category": "Household Electronic",
    "totalVideos": 30,
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
    "refVideo": null
  },
  {
    "id": 43,
    "slug": "kewpie",
    "name": "Kewpie",
    "category": "F&B",
    "totalVideos": 27,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/15rpjgszGtneUXNl98Po3TGUvW1cCEgVv",
    "refVideo": {
      "id": "1gEraC-X_YozQdNHqTH67yBMqSFz-eICw",
      "name": "KAE2610005.mp4",
      "path": "2026/Tháng 10/KAE2610005.mp4",
      "modified": "2026-11-06",
      "sizeMb": 69.7,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Nov 2026"
      ],
      "url": "https://drive.google.com/file/d/1gEraC-X_YozQdNHqTH67yBMqSFz-eICw/view",
      "previewUrl": "https://drive.google.com/file/d/1gEraC-X_YozQdNHqTH67yBMqSFz-eICw/preview",
      "poolSize": 13
    }
  },
  {
    "id": 44,
    "slug": "braun",
    "name": "Braun",
    "category": "Household Electronic",
    "totalVideos": 6,
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
    "refVideo": null
  },
  {
    "id": 45,
    "slug": "asics",
    "name": "ASICS",
    "category": "Fashion & Sport",
    "totalVideos": 2,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/1iGLLKmAlUjyS93Q9O3hb1BZCdRaoapga",
    "refVideo": {
      "id": "16D_w9_X9pXXGNO8KKzw2FwjqdqGOcPLt",
      "name": "ASICS DEMO.mp4",
      "path": "DEMO/ASICS DEMO.mp4",
      "modified": "2026-10-28",
      "sizeMb": 32.4,
      "reasons": [
        "Done",
        "0 Revise",
        "AI Basic",
        "Oct 2026"
      ],
      "url": "https://drive.google.com/file/d/16D_w9_X9pXXGNO8KKzw2FwjqdqGOcPLt/view",
      "previewUrl": "https://drive.google.com/file/d/16D_w9_X9pXXGNO8KKzw2FwjqdqGOcPLt/preview",
      "poolSize": 4
    }
  },
  {
    "id": 46,
    "slug": "bao-xuan",
    "name": "Bao Xuan",
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
    "refVideo": null
  },
  {
    "id": 47,
    "slug": "bioderma",
    "name": "Bioderma",
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
    "refVideo": null
  },
  {
    "id": 48,
    "slug": "crocs",
    "name": "Crocs",
    "category": "Fashion & Sport",
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
    "refVideo": null
  },
  {
    "id": 49,
    "slug": "obagi",
    "name": "OBAGI",
    "category": "Beauty",
    "totalVideos": 1,
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
    "driveFolderUrl": "https://drive.google.com/drive/folders/1qgG8lE45sLfDEEbJfCSIO740piCmY8o-",
    "refVideo": {
      "id": "1pl3xLs1o3E139Ns04Z5UfYqhO91t6H9s",
      "name": "MOTION - INGREDIENTS .mp4",
      "path": "2026/THÁNG 7/MOTION - INGREDIENTS .mp4",
      "modified": "2026-07-04",
      "sizeMb": 24.6,
      "reasons": [],
      "url": "https://drive.google.com/file/d/1pl3xLs1o3E139Ns04Z5UfYqhO91t6H9s/view",
      "previewUrl": "https://drive.google.com/file/d/1pl3xLs1o3E139Ns04Z5UfYqhO91t6H9s/preview",
      "poolSize": 14
    }
  },
  {
    "id": 50,
    "slug": "rihair",
    "name": "RiHair",
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
    "refVideo": null
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    "refVideo": null
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
    }
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
    "refVideo": null
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
    "refVideo": null
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
    }
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
    }
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
    "refVideo": null
  }
];
