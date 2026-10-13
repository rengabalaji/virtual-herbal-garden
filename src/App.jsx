
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import HerbGrid from './components/garden/HerbGrid';
import LearningHubPreview from './components/garden/LearningHubPreview';
import ModuleTheory from './components/garden/ModuleTheory';
import BotanicalQuiz from './components/quiz/BotanicalQuiz';
import PlantDetailModal from './components/garden/PlantDetailModal';
import AuthPage from './pages/authpage';

import { auth } from './firebase/config';
import { logOut } from './firebase/auth';

import './styles/main.css';

export default function App() {
  const [activePage, setActivePage] = useState(() => {
    const requestedPage = window.location.hash.replace('#', '');
    return requestedPage || 'auth';
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedHerb, setSelectedHerb] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [modalInitialTab, setModalInitialTab] = useState('dossier');
  const [activeSidebarTab, setActiveSidebarTab] = useState('virtual-garden');

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setAuthLoading(false);

        if (currentUser && window.location.hash.replace('#', '') === '') {
          setActivePage('home');
        }
      },
      (error) => {
        console.error('Authentication state error:', error);
        setAuthError('Unable to check your account. Please refresh the page.');
        setAuthLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    window.history.replaceState(null, '', `#${page}`);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleLogin = () => {
    setAuthError('');
    navigateTo('auth');
  };

  const handleOpenProfile = () => {
    navigateTo(user ? 'profile' : 'auth');
  };

  const handleLogout = async () => {
    try {
      await logOut();
      setUser(null);
      setAuthError('');
      setSelectedModule(null);
      navigateTo('auth');
    } catch (error) {
      console.error('Logout error:', error);
      window.alert('Unable to log out. Please try again.');
    }
  };

  const handleAuthSuccess = (signedInUser) => {
    setUser(signedInUser);
    setAuthError('');
    navigateTo('home');
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

  const handleOpenModule = (module) => {
    setSelectedModule(module);
    navigateTo('module-theory');
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
    navigateTo('learning-modules');
  };

  const profileName =
    user?.displayName || user?.email?.split('@')[0] || 'Garden Explorer';

  const navigationUser = user
    ? {
        ...user,
        name: profileName,
        displayName: profileName,
        email: user.email || ''
      }
    : null;

  if (authLoading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: '#f8faf5',
          color: '#315c3c',
          fontFamily: 'sans-serif'
        }}
      >
        Preparing your garden...
      </div>
    );
  }

  if (activePage === 'auth') {
    return (
      <AuthPage
        onSuccess={handleAuthSuccess}
        onBack={() => navigateTo('home')}
      />
    );
  }

  return (
    <div className="app-layout">
      {authError && (
        <div
          role="alert"
          style={{
            padding: '10px 16px',
            background: '#fff5f4',
            color: '#a5362c',
            textAlign: 'center',
            fontSize: '13px'
          }}
        >
          {authError}
          <button
            onClick={() => setAuthError('')}
            style={{
              marginLeft: '12px',
              border: 0,
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer'
            }}
          >
            Dismiss
          </button>
        </div>
      )}

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeSidebarTab}
        onSelectTab={handleSidebarSelect}
        user={navigationUser}
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
          user={navigationUser}
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
            onOpenModule={handleOpenModule}
            onOpenSidebar={() => setIsSidebarOpen(true)}
          />
        )}

        {activePage === 'module-theory' && (
          <ModuleTheory
            module={selectedModule}
            onBack={handleBackToModules}
          />
        )}

        {activePage === 'quiz' && <BotanicalQuiz />}

        {activePage === 'profile' && (
          <main
            style={{
              maxWidth: '720px',
              margin: '60px auto',
              padding: '24px',
              color: '#26392b'
            }}
          >
            <section
              style={{
                padding: '32px',
                border: '1px solid #e1e7de',
                borderRadius: '18px',
                background: '#fff'
              }}
            >
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: '50%',
                  background: '#e7f0e2',
                  color: '#315c3c',
                  fontSize: '26px',
                  fontWeight: 700
                }}
              >
                {profileName.charAt(0).toUpperCase()}
              </div>

              <h1>My Profile</h1>
              <p>Your Virtual Herbal Garden account.</p>

              <div style={{ margin: '24px 0', lineHeight: 2 }}>
                <strong>Name</strong>
                <div>{profileName}</div>

                <strong>Email</strong>
                <div>{user?.email || 'Not available'}</div>

                <strong>Sign-in method</strong>
                <div>
                  {user?.providerData?.some(
                    (provider) => provider.providerId === 'google.com'
                  )
                    ? 'Google'
                    : 'Email and password'}
                </div>
              </div>

              <button
                onClick={handleLogout}
                style={{
                  padding: '12px 20px',
                  border: 0,
                  borderRadius: '9px',
                  background: '#315c3c',
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Log out
              </button>
            </section>
          </main>
        )}

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
