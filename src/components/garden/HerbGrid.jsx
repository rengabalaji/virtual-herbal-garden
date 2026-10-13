import React, { useState, useMemo } from 'react';
import { Sprout, Filter, Search } from 'lucide-react';
import { FEATURED_HERBS } from '../../data/plantsData';
import HerbCard from './HerbCard';
import '../../styles/herbs.css';

export default function HerbGrid({ onSelectHerb }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Featured Herbs' },
    { id: 'immunity', label: 'Immunity & Respiratory' },
    { id: 'skin', label: 'Dermatology & Detox' },
    { id: 'digestion', label: 'Digestion & Tissue' },
    { id: 'inflammation', label: 'Joints & Inflammation' }
  ];

  const filteredHerbs = useMemo(() => {
    return FEATURED_HERBS.filter((herb) => {
      const matchesSearch =
        herb.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        herb.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        herb.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        herb.keyBenefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (activeCategory === 'all') return true;
      if (activeCategory === 'immunity') return herb.id === 'tulsi';
      if (activeCategory === 'skin') return herb.id === 'neem' || herb.id === 'aloe-vera';
      if (activeCategory === 'digestion') return herb.id === 'aloe-vera' || herb.id === 'turmeric';
      if (activeCategory === 'inflammation') return herb.id === 'turmeric';

      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="featured-herbs" className="herbs-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="section-eyebrow">
            <Sprout size={16} />
            <span>Living Botanical Herbarium</span>
          </div>
          <h2 className="section-title">Featured Medicinal Flora</h2>
          <p className="section-subtitle">
            Study the morphological characteristics, pharmacological profiles, and classical
            Ayurvedic applications of revered restorative botanicals.
          </p>
        </div>

        {/* Filter Pills and Search */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          <div className="filter-tabs-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-tab-pill ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Bar */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px'
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-sage-deep)',
                pointerEvents: 'none'
              }}
            />
            <input
              type="text"
              placeholder="Search by herb name, benefit, or phytocompound..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.5rem',
                borderRadius: 'var(--radius-full)',
                border: '1.5px solid var(--color-cream-border)',
                background: 'var(--color-cream-card)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                color: 'var(--color-text-primary)',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
          </div>
        </div>

        {/* 4 Cards Grid: Tulsi, Neem, Aloe Vera, Turmeric */}
        <div className="herbs-cards-grid">
          {filteredHerbs.map((herb) => (
            <HerbCard
              key={herb.id}
              herb={herb}
              onSelectHerb={onSelectHerb}
            />
          ))}
        </div>

        {filteredHerbs.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              color: 'var(--color-text-muted)'
            }}
          >
            <p>No medicinal herbs matched your search. Try resetting the filter.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="btn-secondary"
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
