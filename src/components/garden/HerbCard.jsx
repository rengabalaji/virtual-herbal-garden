import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Box } from 'lucide-react';

export default function HerbCard({ herb, onSelectHerb }) {
  const [imgSrc, setImgSrc] = useState(herb.imageUrl);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (!hasError && herb.fallbackUrl && imgSrc !== herb.fallbackUrl) {
      setImgSrc(herb.fallbackUrl);
      setHasError(true);
    } else {
      setImgSrc('/plants/fallback-botanical.svg');
    }
  };

  return (
    <article className="herb-card" aria-labelledby={`herb-title-${herb.id}`}>
      {/* Visual Header & Media */}
      <div className="card-media-wrapper">
        <img
          src={imgSrc}
          alt={herb.imageAlt || `Botanical specimen of ${herb.commonName}`}
          className="card-image"
          loading="lazy"
          onError={handleImageError}
        />
        <div className="card-image-gradient" />

        {/* Top Floating Badges */}
        <div className="card-top-badges">
          <span className="card-hero-tag">{herb.heroTag}</span>
          <button
            type="button"
            className="card-3d-indicator"
            onClick={(e) => {
              e.stopPropagation();
              onSelectHerb(herb, '3d-inspect');
            }}
            title={`Inspect 3D Anatomy of ${herb.commonName}`}
            aria-label={`Inspect 3D Anatomy of ${herb.commonName}`}
            style={{ cursor: 'pointer', border: 'none' }}
          >
            <Box size={12} />
            <span>3D Ready</span>
          </button>
        </div>

        {/* Traditional Sanskrit name badge */}
        <div className="card-sanskrit-overlay">
          <span className="sanskrit-name">{herb.sanskritName}</span>
        </div>
      </div>

      {/* Card Content Information */}
      <div className="card-content-body">
        <div className="card-title-group">
          <h3 id={`herb-title-${herb.id}`} className="herb-title">
            {herb.commonName}
          </h3>
          <p className="herb-scientific">{herb.scientificName}</p>
        </div>

        <p className="herb-short-desc">{herb.shortDescription}</p>

        {/* Key Health Benefits */}
        <div style={{ marginBottom: '1rem' }}>
          <span className="benefits-section-title">Primary Therapeutic Uses</span>
          <ul className="benefits-list">
            {herb.keyBenefits.slice(0, 3).map((benefit, idx) => (
              <li key={idx} className="benefit-bullet">
                <CheckCircle2 size={14} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Phytochemical Compounds */}
        <div>
          <span className="benefits-section-title">Active Phytocompounds</span>
          <div className="phytochemical-chips">
            {herb.activePhytochemicals.map((phyto, idx) => (
              <span key={idx} className="phyto-chip" title={phyto.role}>
                {phyto.name}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Action */}
        <div className="card-action-bar" style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => onSelectHerb(herb, 'dossier')}
            className="inspect-specimen-btn"
            aria-label={`Inspect ${herb.commonName} specimen details`}
            style={{ flex: 1 }}
          >
            <span>Botanical Dossier</span>
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => onSelectHerb(herb, '3d-inspect')}
            className="inspect-specimen-btn"
            aria-label={`Inspect 3D model for ${herb.commonName}`}
            title="Inspect 3D Specimen"
            style={{ width: '44px', padding: 0, justifyContent: 'center', flexShrink: 0 }}
          >
            <Box size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}
