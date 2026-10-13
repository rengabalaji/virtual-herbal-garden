import React, { useState } from 'react';
import { X, Sparkles, BookOpen, Layers, Check, Box, ArrowLeft } from 'lucide-react';
import PlantViewer3D from './PlantViewer3D';

export default function PlantDetailModal({ herb, initialTab = 'dossier', onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [imgSrc, setImgSrc] = useState(herb?.imageUrl);
  const [hasError, setHasError] = useState(false);

  if (!herb) return null;

  const handleImageError = () => {
    if (!hasError && herb.fallbackUrl && imgSrc !== herb.fallbackUrl) {
      setImgSrc(herb.fallbackUrl);
      setHasError(true);
    } else {
      setImgSrc('/plants/fallback-botanical.svg');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-herb-title"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 24, 17, 0.65)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)'
        }}
      />

      {/* Modal Content Window */}
      <div
        style={{
          position: 'relative',
          background: 'var(--color-cream-bg)',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '820px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          border: '1.5px solid var(--color-cream-border)',
          zIndex: 10
        }}
      >
        {/* Modal Header Media Banner */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
          <img
            src={imgSrc}
            alt={herb.imageAlt || `Botanical specimen of ${herb.commonName}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={handleImageError}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(14, 36, 25, 0.88) 0%, transparent 65%)'
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.88)',
              color: 'var(--color-forest-deep)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              cursor: 'pointer'
            }}
            aria-label="Close plant dossier"
          >
            <X size={20} />
          </button>

          {/* Title on Media Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '24px',
              right: '24px',
              color: '#ffffff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(4px)',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}
              >
                {herb.heroTag}
              </span>
              <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                {herb.sanskritName}
              </span>
            </div>
            <h2 id="modal-herb-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#fff' }}>
              {herb.commonName}
            </h2>
            <p style={{ fontStyle: 'italic', color: '#b8d4c3', fontSize: '0.92rem' }}>
              {herb.scientificName} • {herb.family}
            </p>
          </div>
        </div>

        {/* Tab Switcher Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.75rem',
            background: 'var(--color-cream-surface)',
            borderBottom: '1px solid var(--color-cream-border)'
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setActiveTab('dossier')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontWeight: 600,
                background: activeTab === 'dossier' ? 'var(--color-forest)' : 'transparent',
                color: activeTab === 'dossier' ? '#ffffff' : 'var(--color-text-secondary)',
                border: activeTab === 'dossier' ? '1px solid var(--color-forest)' : '1px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <BookOpen size={15} />
              <span>Botanical Dossier</span>
            </button>

            <button
              onClick={() => setActiveTab('3d-inspect')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontWeight: 600,
                background: activeTab === '3d-inspect' ? 'var(--color-forest)' : 'var(--color-sage-soft)',
                color: activeTab === '3d-inspect' ? '#ffffff' : 'var(--color-forest-deep)',
                border: '1px solid var(--color-sage-tint)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Box size={15} />
              <span>Interactive 3D Anatomy</span>
            </button>
          </div>

          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            AYUSH Monograph Standard
          </span>
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {activeTab === '3d-inspect' ? (
            /* 3D Anatomy View Mode */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-forest-deep)' }}>
                    3D Structural Anatomy: {herb.commonName}
                  </h4>
                  <button
                    onClick={() => setActiveTab('dossier')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.82rem',
                      color: 'var(--color-emerald)',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <ArrowLeft size={14} />
                    <span>Return to Dossier</span>
                  </button>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Interact with this botanical mesh specimen. Use your mouse or touch gestures to rotate, inspect from different angles, and zoom in on morphological structures.
                </p>
              </div>

              {/* R3F 3D Canvas Specimen */}
              <PlantViewer3D plant={herb} />

              {/* Botanical Specimen Notes */}
              <div
                style={{
                  background: 'var(--color-cream-surface)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.25rem',
                  border: '1px solid var(--color-cream-border)',
                  fontSize: '0.82rem',
                  color: 'var(--color-text-secondary)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px'
                }}
              >
                <Sparkles size={16} color="var(--color-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Anatomical Reference:</strong> This 3D visualization accurately models the characteristic morphological habit of {herb.commonName} ({herb.scientificName}), including key diagnostic features such as {herb.medicinalParts.join(', ')}.
                </span>
              </div>
            </div>
          ) : (
            /* Standard Botanical Dossier View Mode */
            <>
              {/* Detailed Narrative */}
              <div>
                <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--color-emerald)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                  Botanical Overview & History
                </h4>
                <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--color-text-primary)' }}>
                  {herb.detailedDescription}
                </p>
              </div>

              {/* Ayurvedic Dravyaguna Matrix */}
              <div
                style={{
                  background: 'var(--color-cream-surface)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  border: '1px solid var(--color-cream-border)'
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.05rem',
                    color: 'var(--color-forest)',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Sparkles size={16} color="var(--color-emerald)" />
                  <span>Ayurvedic Dravyaguna Energetics</span>
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    fontSize: '0.85rem'
                  }}
                >
                  <div>
                    <strong style={{ color: 'var(--color-text-title)' }}>Rasa (Taste):</strong>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                      {herb.ayurvedicProfile.taste}
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-text-title)' }}>Virya (Potency):</strong>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                      {herb.ayurvedicProfile.energy}
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-text-title)' }}>Dosha Balance:</strong>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                      {herb.ayurvedicProfile.doshaEffect}
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-text-title)' }}>Classical Recipe:</strong>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                      {herb.ayurvedicProfile.traditionalFormulation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phytochemical Breakdown */}
              <div>
                <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--color-emerald)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  Bioactive Phytochemicals
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                  {herb.activePhytochemicals.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--color-cream-card)',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-cream-border)'
                      }}
                    >
                      <strong style={{ color: 'var(--color-forest)', fontSize: '0.88rem' }}>{c.name}</strong>
                      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                        {c.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Habitat & Medicinal Parts */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid var(--color-cream-border)'
                }}
              >
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                    Medicinal Harvest Parts
                  </span>
                  <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-forest)', marginTop: '4px' }}>
                    {herb.medicinalParts.join(' • ')}
                  </p>
                </div>
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                    Native Habitat & Growth
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    {herb.habitat}
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Modal Action Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--color-cream-border)'
            }}
          >
            <button
              onClick={onClose}
              className="btn-secondary"
            >
              Close Dossier
            </button>

            {activeTab === 'dossier' ? (
              <button
                onClick={() => setActiveTab('3d-inspect')}
                className="btn-primary"
              >
                <Box size={16} />
                <span>Inspect 3D Anatomy</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveTab('dossier')}
                className="btn-primary"
              >
                <BookOpen size={16} />
                <span>View Full Dossier</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
