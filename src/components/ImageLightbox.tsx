import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

export interface LightboxPayload {
  src: string;
  title: string;
  subtitle?: string;
  downloadName?: string;
  externalUrl?: string;
}

interface ImageLightboxProps {
  item: LightboxPayload | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-[#0F131C] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-white/10 bg-[#131824]">
          <div className="min-w-0">
            <h3 className="text-sm md:text-base font-semibold text-white truncate">{item.title}</h3>
            {item.subtitle && <p className="text-xs text-slate-400 truncate mt-0.5">{item.subtitle}</p>}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {item.externalUrl && (
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open
              </a>
            )}
            {item.downloadName && (
              <a
                href={item.src}
                download={item.downloadName}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FF5A36] hover:bg-[#ff6d4d] text-white transition"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4 md:p-6 flex items-center justify-center bg-[#090B10]">
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[78vh] w-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
