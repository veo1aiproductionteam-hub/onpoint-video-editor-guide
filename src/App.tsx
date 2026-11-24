import React, { useState, useEffect } from 'react';
import { Navbar, type NavTab } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { BrandGuidelineSection } from './components/BrandGuidelineSection';
import { ImageLightbox, type LightboxPayload } from './components/ImageLightbox';
import { QuickBrandSearchModal } from './components/QuickBrandSearchModal';
import { BRANDS } from './data/brandsData';

// Flip to true whenever you want to bring the About page back
const SHOW_ABOUT_TAB = false;

export function App() {
  const [activeTab, setActiveTab] = useState<NavTab>(SHOW_ABOUT_TAB ? 'about' : 'process');
  const [focusProcessStep, setFocusProcessStep] = useState<number | null>(null);
  const [selectedBrandSlug, setSelectedBrandSlug] = useState<string>('colosbaby');
  const [lightboxItem, setLightboxItem] = useState<LightboxPayload | null>(null);
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setQuickSearchOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJumpToProcessStep = (stepNumber: number) => {
    setActiveTab('process');
    setFocusProcessStep(stepNumber);
  };

  const handleOpenBrandByName = (brandName: string) => {
    const q = brandName.toLowerCase();
    const match = BRANDS.find(
      (b) => b.name.toLowerCase() === q || b.name.toLowerCase().includes(q)
    );
    if (match) setSelectedBrandSlug(match.slug);
    setActiveTab('brands');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickPickBrand = (slug: string) => {
    setSelectedBrandSlug(slug);
    setActiveTab('brands');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080A0F] bg-studio-grid text-slate-100 flex flex-col">
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onOpenQuickSearch={() => setQuickSearchOpen(true)}
        brandCount={BRANDS.length}
        showAbout={SHOW_ABOUT_TAB}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {SHOW_ABOUT_TAB && activeTab === 'about' && (
          <AboutSection
            onNavigate={handleTabChange}
            onJumpToProcessStep={handleJumpToProcessStep}
            onOpenBrandByName={handleOpenBrandByName}
          />
        )}

        {activeTab === 'process' && (
          <ProcessSection
            focusStep={focusProcessStep}
            onClearFocusStep={() => setFocusProcessStep(null)}
            onOpenLightbox={setLightboxItem}
            onOpenBrandGuidelines={() => handleTabChange('brands')}
          />
        )}

        {activeTab === 'brands' && (
          <BrandGuidelineSection
            selectedBrandSlug={selectedBrandSlug}
            onSelectBrandSlug={setSelectedBrandSlug}
            onOpenLightbox={setLightboxItem}
          />
        )}
      </main>

      <footer className="border-t border-white/10 bg-[#07090E]/90 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            <strong className="text-slate-300">OnPoint Video Production Team</strong> · Studio Process & Brand Guidelines (2026)
          </div>
          <div className="flex items-center gap-4">
            {SHOW_ABOUT_TAB && (
              <button onClick={() => handleTabChange('about')} className="hover:text-slate-200 cursor-pointer">
                About
              </button>
            )}
            <button onClick={() => handleTabChange('process')} className="hover:text-slate-200 cursor-pointer">
              Process
            </button>
            <button onClick={() => handleTabChange('brands')} className="hover:text-slate-200 cursor-pointer">
              Guideline of Brands ({BRANDS.length})
            </button>
          </div>
        </div>
      </footer>

      <ImageLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      <QuickBrandSearchModal
        open={quickSearchOpen}
        onClose={() => setQuickSearchOpen(false)}
        onPickBrand={handleQuickPickBrand}
      />
    </div>
  );
}

export default App;
