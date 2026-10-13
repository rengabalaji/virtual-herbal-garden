
import React from 'react';
import { ArrowLeft, BookOpen, Clock, GraduationCap } from 'lucide-react';

const theoryContent = {
  anatomy: {
    introduction:
      'Plant anatomy studies the internal and external structures of plants. Microscopy helps us observe details that cannot be seen clearly with the naked eye.',
    sections: [
      {
        title: '1. Leaf Venation',
        body: 'Leaf venation is the arrangement of veins in a leaf. Reticulate venation forms a network of veins, commonly seen in many dicot plants. Parallel venation has veins that run alongside one another, commonly seen in many monocots.'
      },
      {
        title: '2. Stomata',
        body: 'Stomata are small pores on plant surfaces, especially leaves. Guard cells regulate their opening and closing. They are important for gas exchange and transpiration.'
      },
      {
        title: '3. Trichomes',
        body: 'Trichomes are hair-like outgrowths on plant surfaces. They may help protect plants from insects, reduce water loss, or secrete substances.'
      },
      {
        title: '4. Rhizome Cross-sections',
        body: 'A rhizome is a modified underground stem. Examining a cross-section under a microscope can reveal tissues and vascular structures useful for botanical identification.'
      }
    ]
  },

  phytochemistry: {
    introduction:
      'Phytochemistry is the study of chemical compounds produced by plants. These compounds can contribute to colour, aroma, defence, and biological activity.',
    sections: [
      {
        title: '1. Primary and Secondary Metabolites',
        body: 'Primary metabolites support basic growth and survival. Secondary metabolites include phenolics, terpenoids, and alkaloids that often contribute to ecological interactions.'
      },
      {
        title: '2. Curcuminoids',
        body: 'Curcuminoids are compounds found in turmeric. Curcumin is the best-known example and is widely studied in laboratory and clinical research.'
      },
      {
        title: '3. Eugenol',
        body: 'Eugenol is an aromatic compound found in clove and other plants. It has been studied for biological activities, including antimicrobial and analgesic effects in specific experimental contexts.'
      },
      {
        title: '4. Understanding the Evidence',
        body: 'Laboratory findings do not automatically establish that a compound treats a disease in humans. Safety, concentration, interactions, and clinical evidence all matter.'
      }
    ]
  },

  ayurveda: {
    introduction:
      'Dravyaguna is a branch of Ayurveda concerned with the properties and traditional uses of medicinal substances.',
    sections: [
      {
        title: '1. Rasa — Taste',
        body: 'Rasa describes the taste of a substance. Classical Ayurveda describes six tastes: sweet, sour, salty, pungent, bitter, and astringent.'
      },
      {
        title: '2. Virya — Potency',
        body: 'Virya refers to the principal potency of a substance, traditionally described mainly through heating and cooling effects.'
      },
      {
        title: '3. Vipaka — Post-digestive Effect',
        body: 'Vipaka describes the post-digestive effect of a substance within Ayurvedic theory. It is traditionally classified into sweet, sour, and pungent categories.'
      },
      {
        title: '4. Doshas',
        body: 'Vata, Pitta, and Kapha are the three doshas in Ayurvedic theory. They are used in traditional frameworks to describe physiological tendencies and balance.'
      }
    ]
  },

  formulation: {
    introduction:
      'Herbal preparation involves selecting, handling, processing, and storing plant materials. Correct identification, hygiene, quality control, and safety are important throughout the process.',
    sections: [
      {
        title: '1. Ethical Harvesting',
        body: 'Harvesting should avoid damaging vulnerable plant populations or removing more plant material than a population can replace. Correct species identification is essential.'
      },
      {
        title: '2. Drying and Storage',
        body: 'Drying reduces moisture and can help limit spoilage. Suitable temperature, airflow, cleanliness, and storage conditions help preserve material quality.'
      },
      {
        title: '3. Extraction Methods',
        body: 'Different methods extract different plant constituents. Infusion, decoction, solvent extraction, and steam distillation each have different uses and limitations.'
      },
      {
        title: '4. Safety and Quality',
        body: 'Plant preparations can vary in strength and purity. Contamination, incorrect identification, dosage, and interactions with medicines can create risks. Herbal preparations should not replace professional medical care.'
      }
    ]
  }
};

export default function ModuleTheory({ module, onBack }) {
  const content = theoryContent[module?.id];

  if (!module || !content) {
    return (
      <main style={{ maxWidth: 850, margin: '50px auto', padding: 24 }}>
        <p>Theory for this module is not available yet.</p>
        <button type="button" onClick={onBack}>
          <ArrowLeft size={16} /> Back to modules
        </button>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '48px 24px 72px',
        color: 'var(--color-forest, #294c35)'
      }}
    >
      <button
        type="button"
        onClick={onBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 0',
          marginBottom: 28,
          border: 0,
          background: 'transparent',
          color: 'inherit',
          cursor: 'pointer',
          font: 'inherit',
          fontWeight: 600
        }}
      >
        <ArrowLeft size={18} />
        Back to Learning Modules
      </button>

      <article
        style={{
          padding: 'clamp(24px, 5vw, 48px)',
          border: '1px solid #e2e9df',
          borderRadius: 24,
          background: '#fff',
          boxShadow: '0 12px 36px rgba(27, 52, 32, 0.06)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#648568' }}>
          <BookOpen size={20} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5 }}>
            LEARNING MODULE
          </span>
        </div>

        <h1
          style={{
            margin: '18px 0 14px',
            fontFamily: 'var(--font-serif, Georgia, serif)',
            fontSize: 'clamp(30px, 5vw, 44px)',
            lineHeight: 1.2
          }}
        >
          {module.title}
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, color: '#748174', fontSize: 13 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Clock size={16} />
            {module.duration || '20 mins'}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <GraduationCap size={16} />
            {module.level || 'All Levels'}
          </span>
        </div>

        <p style={{ marginTop: 30, fontSize: 16, lineHeight: 1.9 }}>
          {content.introduction}
        </p>

        {content.sections.map((section) => (
          <section key={section.title} style={{ marginTop: 32 }}>
            <h2 style={{ fontSize: 21, marginBottom: 12 }}>
              {section.title}
            </h2>
            <p style={{ color: '#59665b', lineHeight: 1.9, margin: 0 }}>
              {section.body}
            </p>
          </section>
        ))}

        <div
          style={{
            marginTop: 36,
            padding: 16,
            borderRadius: 12,
            background: '#f2f7ef',
            color: '#4c684e',
            fontSize: 13,
            lineHeight: 1.7
          }}
        >
          Educational content only. Traditional uses and preliminary research do not establish that a plant or preparation is safe or effective for treating a medical condition.
        </div>

        <button
          type="button"
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginTop: 28,
            padding: '12px 18px',
            border: 0,
            borderRadius: 10,
            background: '#315c3c',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          <ArrowLeft size={16} />
          Back to modules
        </button>
      </article>
    </main>
  );
}
