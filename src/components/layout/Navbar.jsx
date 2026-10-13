
import React, { useState } from 'react';
import {
  Sprout,
  LayoutDashboard,
  Menu,
  X,
  UserRound,
  ChevronDown,
  LogIn,
  UserCircle,
  LogOut
} from 'lucide-react';
import '../../styles/navbar.css';

export default function Navbar({
  onToggleSidebar,
  isSidebarOpen,
  onNavigate,
  user,
  onLogin,
  onOpenProfile,
  onLogout
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const navigate = (page) => {
    setMobileMenuOpen(false);
    setProfileMenuOpen(false);
    onNavigate?.(page);
  };

  const links = [
    { label: 'Home', page: 'home' },
    { label: 'Featured Herbs', page: 'featured-herbs' },
    { label: 'Learning Modules', page: 'learning-modules' }
  ];

  return (
    <header className="herbal-header">
      <div className="header-container">
        <button
          type="button"
          className="brand-wrapper"
          onClick={() => navigate('home')}
          style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            textAlign: 'left'
          }}
        >
          <div className="brand-icon-box">
            <Sprout size={24} strokeWidth={2.2} />
          </div>

          <div className="brand-text-block">
            <span className="brand-title">
              Herbal<span>Edu</span>
            </span>
            <span className="brand-tagline">
              Virtual Garden & Hub
            </span>
          </div>
        </button>

        <nav aria-label="Main Navigation">
          <ul className="nav-links-desktop">
            {links.map((link) => (
              <li key={link.page}>
                <a
                  href={`#${link.page}`}
                  className="nav-item-link"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(link.page);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            onClick={onToggleSidebar}
            className={`sidebar-toggle-btn ${isSidebarOpen ? 'active' : ''}`}
            aria-label="Toggle Learning Hub"
            title="Learning Hub"
          >
            <LayoutDashboard size={17} />
            <span>Learning Hub</span>
          </button>

          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setProfileMenuOpen((open) => !open)}
              className="sidebar-toggle-btn"
              aria-label="Account menu"
              aria-expanded={profileMenuOpen}
              title="Account"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                minWidth: '44px',
                justifyContent: 'center'
              }}
            >
              <UserRound size={20} />
              {user?.name && (
                <span>{user.name.split(' ')[0]}</span>
              )}
              <ChevronDown size={14} />
            </button>

            {profileMenuOpen && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 'calc(100% + 10px)',
                  width: '230px',
                  padding: '0.5rem',
                  borderRadius: '14px',
                  background: '#fff',
                  color: 'var(--color-forest)',
                  border: '1px solid var(--color-cream-border)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.14)',
                  zIndex: 1000
                }}
              >
                {user ? (
                  <>
                    <div
                      style={{
                        padding: '0.75rem',
                        borderBottom: '1px solid #eee',
                        marginBottom: '0.35rem'
                      }}
                    >
                      <strong style={{ display: 'block' }}>
                        {user.name || 'My Account'}
                      </strong>
                      <small>{user.email}</small>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setProfileMenuOpen(false);
                        onOpenProfile?.();
                      }}
                      style={menuButtonStyle}
                    >
                      <UserCircle size={17} />
                      My Profile
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setProfileMenuOpen(false);
                        onLogout?.();
                      }}
                      style={menuButtonStyle}
                    >
                      <LogOut size={17} />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <p style={{ padding: '0.5rem 0.75rem', margin: 0 }}>
                      Welcome to HerbalEdu
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setProfileMenuOpen(false);
                        onLogin?.('login');
                      }}
                      style={menuButtonStyle}
                    >
                      <LogIn size={17} />
                      Login
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setProfileMenuOpen(false);
                        onLogin?.('signup');
                      }}
                      style={menuButtonStyle}
                    >
                      <UserRound size={17} />
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--color-cream-bg)',
            borderBottom: '1px solid var(--color-cream-border)',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {links.map((link) => (
            <a
              key={link.page}
              href={`#${link.page}`}
              onClick={(event) => {
                event.preventDefault();
                navigate(link.page);
              }}
              style={{
                fontWeight: 600,
                color: 'var(--color-forest)'
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onToggleSidebar?.();
            }}
            className="btn-primary"
          >
            Open Learning Hub
          </button>
        </div>
      )}
    </header>
  );
}

const menuButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.65rem',
  width: '100%',
  padding: '0.75rem',
  border: 'none',
  borderRadius: '8px',
  background: 'transparent',
  color: 'inherit',
  cursor: 'pointer',
  textAlign: 'left',
  fontSize: '0.95rem'
};
