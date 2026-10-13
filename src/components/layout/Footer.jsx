import React from 'react';
import { Sprout, GraduationCap, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="about-garden"
      style={{
        background: '#0d1f16',
        color: '#d6e5dc',
        padding: '4.5rem 0 2.5rem',
        borderTop: '1px solid rgba(82, 140, 106, 0.2)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Brand & Project Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #245e43, #16382b)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Sprout size={22} />
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>
                Herbal<span style={{ color: '#74c69d' }}>Edu</span>
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#9bb8a8', lineHeight: 1.6 }}>
              A college digital botany and AYUSH project combining real-time 3D graphics, classical taxonomy, and phytomedicinal science to modernize herbal education.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#74c69d' }}>
              <GraduationCap size={15} />
              <span>College Capstone Project Initiative</span>
            </div>
          </div>

          {/* Featured Flora Quick Nav */}
          <div>
            <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '1.1rem' }}>
              Documented Herbs
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.86rem' }}>
              <li>
                <a href="#featured-herbs" style={{ color: '#b2cec0', transition: 'color 0.2s' }}>
                  Tulsi (Ocimum sanctum)
                </a>
              </li>
              <li>
                <a href="#featured-herbs" style={{ color: '#b2cec0', transition: 'color 0.2s' }}>
                  Neem (Azadirachta indica)
                </a>
              </li>
              <li>
                <a href="#featured-herbs" style={{ color: '#b2cec0', transition: 'color 0.2s' }}>
                  Aloe Vera (Aloe barbadensis)
                </a>
              </li>
              <li>
                <a href="#featured-herbs" style={{ color: '#b2cec0', transition: 'color 0.2s' }}>
                  Turmeric (Curcuma longa)
                </a>
              </li>
            </ul>
          </div>

          {/* Project Architecture */}
          <div>
            <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '1.1rem' }}>
              Project Tech Stack
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.86rem', color: '#b2cec0' }}>
              <li>• React 19 + Vite Frontend</li>
              <li>• Three.js & React Three Fiber (3D)</li>
              <li>• @react-three/drei & WebGL Canvas</li>
              <li>• Botanical CSS Design Tokens</li>
              <li>• Lucide Modern Iconography</li>
            </ul>
          </div>

          {/* Research & Compliance */}
          <div>
            <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '1.1rem' }}>
              Educational Integrity
            </h4>
            <p style={{ fontSize: '0.84rem', color: '#9bb8a8', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              Specimen data is compiled from peer-reviewed ethnobotanical publications and Ayurvedic Pharmacopoeia guidelines.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#a4c7b3' }}>
              <ShieldCheck size={16} />
              <span>Academic Reference Standards</span>
            </div>
          </div>
        </div>

        {/* Sub-footer copyright */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#7a9f8b'
          }}
        >
          <p>© {new Date().getFullYear()} HerbalEdu - Virtual Herbal Garden & Learning Hub.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Crafted for Botanical & Ayurvedic Learning
          </p>
        </div>
      </div>
    </footer>
  );
}
