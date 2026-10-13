
import React from 'react';
import {
  X,
  Home,
  Trees,
  BookOpen,
  Award,
  UserRound,
  LogIn,
  LogOut
} from 'lucide-react';
import '../../styles/sidebar.css';

export default function Sidebar({
  isOpen,
  onClose,
  activeTab,
  onSelectTab,
  user,
  onOpenProfile,
  onLogin,
  onLogout
}) {
  const navItems = [
    {
      id: 'virtual-garden',
      label: 'Home',
      icon: Home
    },
    {
      id: 'herbarium',
      label: 'Medicinal Herbarium',
      icon: Trees
    },
    {
      id: 'learning-modules',
      label: 'Learning Modules',
      icon: BookOpen
    },
    {
      id: 'quiz',
      label: 'Botanical Quiz',
      icon: Award
    }
  ];

  const handleNavigation = (id) => {
    onSelectTab?.(id);
    onClose?.();
  };

  return (
    <>
      <div
        className={`sidebar-backdrop ${isOpen ? 'is-visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`herbal-sidebar ${isOpen ? 'is-open' : ''}`}
        aria-label="Learning Hub"
      >
        <div className="sidebar-header">
          <div className="sidebar-brand-box">
            <div className="sidebar-brand-icon">
              <BookOpen size={20} />
            </div>

            <div>
              <h2 className="sidebar-title">Learning Hub</h2>
              <span className="sidebar-subtitle">
                HerbalEdu Dashboard
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="sidebar-close-btn"
            aria-label="Close Sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <h3 className="sidebar-nav-section-title">
            Explore
          </h3>

          <ul className="sidebar-nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <li
                  key={item.id}
                  className={`sidebar-nav-item ${
                    isActive ? 'active' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className="sidebar-item-inner">
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-footer">
          {user ? (
            <div>
              <button
                type="button"
                onClick={() => {
                  onOpenProfile?.();
                  onClose?.();
                }}
                className="sidebar-account-button"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  border: 'none',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'inherit',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <UserRound size={20} />

                <span style={{ minWidth: 0, flex: 1 }}>
                  <strong style={{ display: 'block' }}>
                    {user.name || 'My Account'}
                  </strong>
                  <small>{user.email}</small>
                </span>
              </button>

              <button
                type="button"
                onClick={onLogout}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  padding: '0.5rem',
                  border: 'none',
                  background: 'transparent',
                  color: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <LogOut size={17} />
                Logout
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                onLogin?.();
                onClose?.();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.8rem',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
            >
              <LogIn size={18} />
              Login / Sign Up
            </button>
          )}

          <p style={{ fontSize: '0.75rem', marginTop: '1rem' }}>
            🌿 HerbalEdu · Learning Garden
          </p>
        </div>
      </aside>
    </>
  );
}
