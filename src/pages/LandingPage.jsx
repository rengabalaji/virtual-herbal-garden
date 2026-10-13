import React from 'react';
import HeroSection from '../components/garden/HeroSection';
import HerbGrid from '../components/garden/HerbGrid';
import LearningHubPreview from '../components/garden/LearningHubPreview';

export default function LandingPage({ onSelectHerb, onExploreGardenClick, onOpenSidebar }) {
  const handleScrollToHerbs = () => {
    const el = document.getElementById('featured-herbs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToModules = () => {
    const el = document.getElementById('learning-hub');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* Hero Section with Botanical 3D Specimen */}
      <HeroSection
        onExploreClick={handleScrollToHerbs}
        onOpenModulesClick={handleScrollToModules}
      />

      {/* Featured Botanical Specimens (Tulsi, Neem, Aloe Vera, Turmeric) */}
      <HerbGrid onSelectHerb={onSelectHerb} />

      {/* Learning Hub Curriculum & Dashboard Preview */}
      <LearningHubPreview onOpenSidebar={onOpenSidebar} />
    </main>
  );
}
