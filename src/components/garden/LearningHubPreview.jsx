
import React from 'react';
import {
  BookOpen,
  Microscope,
  FlaskConical,
  Sparkles,
  Leaf,
  ArrowRight
} from 'lucide-react';
import { LEARNING_MODULES } from '../../data/plantsData';

export default function LearningHubPreview({
  onOpenModule,
  onOpenSidebar
}) {
  const iconMap = {
    Microscope,
    FlaskConical,
    Sparkles,
    Leaf
  };

  return (
    <section
      id="learning-hub"
      style={{
        padding: '4rem 1.5rem',
        maxWidth: '1400px',
        margin: '0 auto',
        color: 'var(--color-forest)'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span
          style={{
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '0.8rem',
            fontWeight: 700
          }}
        >
          Learn · Explore · Discover
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            margin: '0.75rem 0'
          }}
        >
          Herbal Learning Hub Modules
        </h2>

        <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
          Designed for students of botany, AYUSH medicine, and pharmacology
          to master traditional plant identification and phytochemical science.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.75rem'
        }}
      >
        {LEARNING_MODULES.map((module, index) => {
          const Icon = iconMap[module.icon] || BookOpen;

          return (
            <article
              key={module.id || module.title || index}
              style={{
                background: '#fff',
                border: '1px solid var(--color-cream-border)',
                borderRadius: '22px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '300px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.04)'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: '#edf5ef',
                  display: 'grid',
                  placeItems: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Icon size={24} />
              </div>

              <div style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
                <strong>{module.level || 'ALL LEVELS'}</strong>
                {' · '}
                {module.duration || '20 mins'}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  margin: '0 0 1rem'
                }}
              >
                {module.title}
              </h3>

              <p style={{ lineHeight: 1.6, flex: 1 }}>
                {module.description}
              </p>

              <button
                type="button"
                onClick={() => {
                  if (typeof onOpenModule === 'function') {
                    onOpenModule(module);
                  } else {
                    console.error(
                      'Module theory handler is missing in App.jsx'
                    );
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'transparent',
                  border: 'none',
                  padding: '0.5rem 0',
                  marginTop: '1rem',
                  cursor: 'pointer',
                  font: 'inherit',
                  fontWeight: 600,
                  color: 'var(--color-forest)',
                  textAlign: 'left'
                }}
              >
                Read Module Theory <ArrowRight size={17} />
              </button>
            </article>
          );
        })}
      </div>

      <div
        style={{
          marginTop: '3.75rem',
          background:
            'linear-gradient(135deg, var(--color-forest-deep), var(--color-emerald-deep))',
          borderRadius: '28px',
          padding: '2.5rem',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div style={{ flex: '1 1 300px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              margin: '0 0 0.5rem'
            }}
          >
            Expand into the Student Learning Dashboard
          </h3>

          <p style={{ color: '#d0e0d6', lineHeight: 1.7, margin: 0 }}>
            Track completed botanical specimens, take 3D structure quizzes,
            and bookmark Ayurvedic formulas in your personal notebook.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenSidebar}
          className="btn-primary"
          style={{
            background: '#fff',
            color: 'var(--color-forest-deep)',
            border: 'none'
          }}
        >
          <Sparkles size={16} /> Launch Dashboard Sidebar
        </button>
      </div>
    </section>
  );
}
