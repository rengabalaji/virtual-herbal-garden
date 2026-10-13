
import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import HerbGrid from './components/garden/HerbGrid';
import LearningHubPreview from './components/garden/LearningHubPreview';
import BotanicalQuiz from './components/quiz/BotanicalQuiz';
import PlantDetailModal from './components/garden/PlantDetailModal';
import './styles/main.css';

export default function App() {
  const [activePage, setActivePage] = useState(
    window.location.hash.replace('#', '') || 'home'
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedHerb, setSelectedHerb] = useState(null);
  const [modalInitialTab, setModalInitialTab] = useState('dossier');
  const [activeSidebarTab, setActiveSidebarTab] = useState('virtual-garden');

  const navigateTo = (page) => {
    setActivePage(page);
    window.history.replaceState(null, '', `#${page}`);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleSidebarSelect = (tabId) => {
    setActiveSidebarTab(tabId);

    const pageMap = {
      'virtual-garden': 'home',
      herbarium: 'featured-herbs',
      anatomy: 'featured-herbs',
      ayurveda: 'learning-modules',
      phytochemistry: 'learning-modules',
      formulations: 'learning-modules',
      'learning-modules': 'learning-modules',
      quiz: 'quiz',
      saved: 'featured-herbs',
      faq: 'learning-modules'
    };

    navigateTo(pageMap[tabId] || 'home');
  };

  const handleSelectHerb = (herb, tab = 'dossier') => {
    setSelectedHerb(herb);
    setModalInitialTab(tab);
  };

  const handleLogin = () => {
    window.alert('Login and Sign Up will be connected in the next step.');
  };

  const handleOpenProfile = () => {
    window.alert('Profile details will be connected after authentication is implemented.');
  };

  const handleLogout = () => {
    window.alert('No account is currently connected.');
  };

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeSidebarTab}
        onSelectTab={handleSidebarSelect}
        onLogin={handleLogin}
        onOpenProfile={handleOpenProfile}
        onLogout={handleLogout}
      />

      <div className="main-content-wrapper">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          onNavigate={navigateTo}
          onExploreGardenClick={() => navigateTo('featured-herbs')}
          onLogin={handleLogin}
          onOpenProfile={handleOpenProfile}
          onLogout={handleLogout}
        />

        {activePage === 'home' && (
          <LandingPage
            onSelectHerb={handleSelectHerb}
            onExploreGardenClick={() => navigateTo('featured-herbs')}
            onOpenSidebar={() => setIsSidebarOpen(true)}
          />
        )}

        {activePage === 'featured-herbs' && (
          <HerbGrid onSelectHerb={handleSelectHerb} />
        )}

        {activePage === 'learning-modules' && (
          <LearningHubPreview
            onOpenSidebar={() => setIsSidebarOpen(true)}
          />
        )}

        {activePage === 'quiz' && <BotanicalQuiz />}

        <Footer />
      </div>

      {selectedHerb && (
        <PlantDetailModal
          herb={selectedHerb}
          initialTab={modalInitialTab}
          onClose={() => setSelectedHerb(null)}
        />
      )}
    </div>
  );
}
