import React, { Suspense } from 'react';
import { Compass, BookOpen, Sparkles, Layers, Box } from 'lucide-react';
import BotanicalScene from './BotanicalScene';
import '../../styles/hero.css';

export default function HeroSection({ onExploreClick, onOpenModulesClick }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-backdrop-pattern" />

      <div className="container hero-grid">
        {/* Left Text & CTA Column */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} color="#245e43" />
            <span>Interactive 3D Botanical Education Hub</span>
          </div>

          <h1 className="hero-title">
            Step into the Living Sanctuary of <span className="title-accent">Medicinal Herbs</span>
          </h1>

          <p className="hero-description">
            Experience high-fidelity 3D botanical specimens, uncover timeless Ayurvedic
            wisdom, and analyze verified phytomedicinal data in a responsive, research-grade
            virtual herbal garden.
          </p>

          <div className="hero-actions">
            <button
              onClick={onExploreClick}
              className="btn-primary"
              aria-label="Explore Virtual Herbarium"
            >
              <Compass size={18} />
              <span>Explore 3D Herbarium</span>
            </button>

            <button
              onClick={onOpenModulesClick}
              className="btn-secondary"
              aria-label="View Learning Modules"
            >
              <BookOpen size={18} />
              <span>Browse Learning Hub</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-value">4+</span>
              <span className="stat-label">Featured Classical Herbs</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">3D</span>
              <span className="stat-label">Real-time WebGL Models</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Botanical Taxonomy Accuracy</span>
            </div>
          </div>
        </div>

        {/* Right 3D Botanical Canvas Specimen */}
        <div className="hero-visual-card">
          <div className="visual-header-bar">
            <div className="visual-tag-group">
              <span className="live-dot" />
              <span>Live 3D Plant Specimen</span>
            </div>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-sage-deep)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)'
              }}
            >
              Ocimum sanctum (Sprout Stage)
            </span>
          </div>

          <div className="canvas-container">
            <Suspense
              fallback={
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-sage)'
                  }}
                >
                  Loading 3D Specimen...
                </div>
              }
            >
              <BotanicalScene />
            </Suspense>
          </div>

          <div className="visual-footer-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Box size={14} color="#245e43" />
              <span>Interactive Viewport</span>
            </div>
            <span className="specimen-tag">Three.js + React Three Fiber</span>
          </div>
        </div>
      </div>
    </section>
  );
}
