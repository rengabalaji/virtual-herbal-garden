/**
 * Botanical & medicinal data for HerbalEdu Virtual Garden
 * Comprehensive Collection: 12 Revered Medicinal Flora
 */

export const FEATURED_HERBS = [
  {
    id: 'tulsi',
    commonName: 'Tulsi',
    scientificName: 'Ocimum tenuiflorum (syn. Ocimum sanctum)',
    family: 'Lamiaceae (Mint family)',
    sanskritName: 'तुलसी (Surasa / Holy Basil)',
    category: 'Adaptogens & Vitality',
    heroTag: 'The Queen of Herbs',
    shortDescription:
      'Revered across Indian traditional medicine as an elixir of life, Tulsi is a sacred aromatic adaptogen traditionally used in herbal teas and respiratory steam inhalations.',
    detailedDescription:
      'Tulsi has been cultivated across South Asia for millennia. In classical Ayurvedic literature, it is categorized as a Rasayana (rejuvenator). Ethnobotanical documentation records its traditional preparation in morning decoctions and herbal teas for calming the spirit and supporting seasonal resilience.',
    growingConditions: {
      sunlight: 'Full sunlight (6–8 hours daily)',
      soil: 'Rich, moist, well-draining loamy soil with neutral pH',
      climate: 'Warm tropical and subtropical environments; frost-sensitive',
      water: 'Moderate regular watering; avoid waterlogging'
    },
    partsTraditionallyUsed: ['Leaves', 'Seeds', 'Tender Stems', 'Inflorescence'],
    traditionalUses: [
      'Traditionally brewed into warm decoctions (Kadha) during seasonal weather shifts',
      'Historically used in steam inhalations for throat and upper respiratory comfort',
      'Utilized in traditional folk practices as a calming adaptogenic morning beverage',
      'Valued in household remedies for supporting oral and digestive freshness'
    ],
    keyBenefits: [
      'Traditional Seasonal Respiratory Comfort',
      'Classical Adaptogenic Calming Brew',
      'Natural Essential Oil Profile (Eugenol)',
      'Rich Traditional Rasayana Heritage'
    ],
    medicinalParts: ['Leaves', 'Seeds', 'Tender Stems', 'Inflorescence'],
    activePhytochemicals: [
      { name: 'Eugenol', role: 'Aromatic phenylpropanoid contributing to characteristic scent' },
      { name: 'Ursolic Acid', role: 'Pentacyclic triterpenoid under pharmacological study' },
      { name: 'Rosmarinic Acid', role: 'Natural phenolic antioxidant compound' },
      { name: 'Caryophyllene', role: 'Bicyclic sesquiterpene found in essential oil' }
    ],
    ayurvedicProfile: {
      taste: 'Pungent (Katu), Bitter (Tikta)',
      energy: 'Warming (Ushna)',
      doshaEffect: 'Traditionally regarded as balancing for Kapha and Vata',
      traditionalFormulation: 'Tulsi Swarasa (Fresh Leaf Juice), Herbal Decoction (Kadha)'
    },
    habitat: 'Tropical and subtropical plains across the Indian subcontinent',
    growthType: 'Perennial aromatic branched shrub (30–60 cm tall)',
    colorTheme: {
      accent: '#2d6a4f',
      badgeBg: '#d8f3dc',
      badgeText: '#1b4332'
    },
    imageUrl: '/plants/tulsi.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1665479754958-1a8bdc47cc0d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Authentic Tulsi (Ocimum tenuiflorum) Holy Basil plant with fragrant green leaves and purple inflorescence',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-tulsi'
  },
  {
    id: 'neem',
    commonName: 'Neem',
    scientificName: 'Azadirachta indica',
    family: 'Meliaceae (Mahogany family)',
    sanskritName: 'निम्ब (Nimba / Arishta)',
    category: 'Skin & Topical Care',
    heroTag: 'The Village Dispensary',
    shortDescription:
      'Known in Indian folklore as a protective village tree, Neem is traditionally valued for topical paste applications, oral hygiene twigs, and purifying herbal washes.',
    detailedDescription:
      'The Neem tree is an enduring cornerstone of rural Indian ethnobotany. Every morphological segment—bark, leaves, twigs, and seed oil—carries a bitter principle. Classical Ayurvedic texts describe topical applications of pounded leaves as soothing for irritated skin.',
    growingConditions: {
      sunlight: 'Full sun; thrives in open outdoor spaces',
      soil: 'Wide tolerance; prefers deep sandy, loamy, or stony soils',
      climate: 'Subtropical to tropical arid/semi-arid; highly drought-resistant',
      water: 'Low water requirement once established; avoid standing water'
    },
    partsTraditionallyUsed: ['Leaves', 'Inner Bark', 'Twigs (Datun)', 'Seed Oil'],
    traditionalUses: [
      'Traditionally applied as a fresh leaf paste (Lepa) for soothing irritated skin',
      'Fresh young twigs historically chewed as natural toothbrushes (Datun) for oral freshness',
      'Leaves traditionally placed in stored grains and linens as a natural deterrent',
      'Diluted seed oil historically utilized in traditional external scalp applications'
    ],
    keyBenefits: [
      'Traditional Topical Skin Comfort Paste',
      'Classical Bitter Purifying Herbal Profile',
      'Folk Oral Hygiene Twig Application',
      'Drought-Tolerant Evergreen Heritage'
    ],
    medicinalParts: ['Leaves', 'Bark', 'Twigs (Datun)', 'Seed Oil'],
    activePhytochemicals: [
      { name: 'Azadirachtin', role: 'Complex tetranortriterpenoid limonoid' },
      { name: 'Nimbin', role: 'Bitter triterpenoid isolated from neem seed oil' },
      { name: 'Nimbidin', role: 'Sulfur-containing compound under academic study' },
      { name: 'Quercetin', role: 'Naturally occurring flavonol compound' }
    ],
    ayurvedicProfile: {
      taste: 'Bitter (Tikta), Astringent (Kashaya)',
      energy: 'Cooling (Sheeta)',
      doshaEffect: 'Traditionally viewed as pacifying for Pitta and Kapha',
      traditionalFormulation: 'Nimba Taila (Infused Oil), Nimba Kwatha (Leaf Wash)'
    },
    habitat: 'Dry, arid plains and open woodlands of South Asia',
    growthType: 'Large, hardy evergreen tree reaching 15–20 metres in height',
    colorTheme: {
      accent: '#3a7d44',
      badgeBg: '#e8f5e9',
      badgeText: '#1e4620'
    },
    imageUrl: '/plants/neem.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1687945906634-25c66199d941?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Authentic Neem tree (Azadirachta indica) with dense green medicinal foliage and compound pinnate leaves',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-neem'
  },
  {
    id: 'aloe-vera',
    commonName: 'Aloe Vera',
    scientificName: 'Aloe vera (syn. Aloe barbadensis)',
    family: 'Asphodelaceae',
    sanskritName: 'घृतकुमारी (Ghrita Kumari)',
    category: 'Skin & Topical Care',
    heroTag: 'The Plant of Immortality',
    shortDescription:
      'A resilient succulent famous for cooling mucilaginous inner gel that is traditionally applied to sun-exposed skin and used in folk digestive preparations.',
    detailedDescription:
      'Aloe vera stores nutrient-dense water gel loaded with complex polysaccharides (acemannan). In classical traditions, the inner fillet is praised for its cooling and soothing attributes, historically used topically for minor burns and dry skin hydration.',
    growingConditions: {
      sunlight: 'Bright indirect to direct sunlight; tolerates arid heat',
      soil: 'Sandy, gravelly, well-draining cactus/succulent potting mix',
      climate: 'Dry, subtropical desert scrublands; frost-tender',
      water: 'Low; soak thoroughly only when soil is completely dry'
    },
    partsTraditionallyUsed: ['Inner Leaf Mucilaginous Gel', 'Outer Leaf Latex (Bitter)'],
    traditionalUses: [
      'Traditionally applied topically as a cooling gel for sun-exposed or dry skin',
      'Fresh inner gel historically consumed in small quantities in folk tonics',
      'Used in traditional hair rinses and scalp conditioning applications',
      'Classical ingredient in Ayurvedic fermented formulations like Kumaryasava'
    ],
    keyBenefits: [
      'Cooling Topical Skin Hydration',
      'Traditional Digestive Tonic Fillet',
      'Rich in Polysaccharide Mucilage',
      'Hardy Low-Water Succulent Nature'
    ],
    medicinalParts: ['Inner Leaf Parenchyma Gel', 'Outer Leaf Latex (Aloin)'],
    activePhytochemicals: [
      { name: 'Acemannan', role: 'D-galactosyl-rich storage polysaccharide' },
      { name: 'Aloin', role: 'Anthraquinone glycoside found in outer leaf latex' },
      { name: 'Bradykinase', role: 'Naturally present plant enzyme' },
      { name: 'Salicylic Acid', role: 'Trace organic acid present in parenchyma' }
    ],
    ayurvedicProfile: {
      taste: 'Bitter (Tikta), Sweet (Madhura)',
      energy: 'Cooling (Sheeta)',
      doshaEffect: 'Traditionally regarded as balancing for all three doshas (Tridoshic)',
      traditionalFormulation: 'Kumaryasava, Fresh leaf pulp, Topical Lepa'
    },
    habitat: 'Arid desert scrublands and dry tropical zones',
    growthType: 'Stemless or short-stemmed succulent with fleshy rosettes',
    colorTheme: {
      accent: '#2a9d8f',
      badgeBg: '#e0f2f1',
      badgeText: '#004d40'
    },
    imageUrl: '/plants/aloe-vera.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Authentic Aloe Vera (Aloe vera) succulent rosette with thick, serrated, gel-filled leaves',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-aloe'
  },
  {
    id: 'turmeric',
    commonName: 'Turmeric',
    scientificName: 'Curcuma longa',
    family: 'Zingiberaceae (Ginger family)',
    sanskritName: 'हरिद्रा (Haridra / Golden Herb)',
    category: 'Digestive & Metabolic',
    heroTag: 'The Golden Rhizome',
    shortDescription:
      'The sacred golden rhizome prized across South Asia for curcumin, traditionally used in Golden Milk, culinary seasoning, and ceremonial skin pastes.',
    detailedDescription:
      'Turmeric forms the backbone of traditional Indian culinary pharmacology and Ayurvedic home care. The bright orange underground rhizome is dried and ground into powder, traditionally boiled with milk or fats for holistic daily vitality and radiant skin pastes.',
    growingConditions: {
      sunlight: 'Filtered sunlight or light partial shade',
      soil: 'Loose, fertile, humus-rich loamy soil with excellent drainage',
      climate: 'Warm, humid tropical climates (20°C to 30°C); requires moisture',
      water: 'Regular, consistent watering throughout active growing season'
    },
    partsTraditionallyUsed: ['Underground Rhizomes (Fresh & Cured Powder)'],
    traditionalUses: [
      'Traditionally simmered with milk and spices as Golden Milk (Haridra Dugdha)',
      'Applied externally as an auspicious ceremonial paste (Ubtan) for glowing skin',
      'Central culinary spice traditionally utilized to support everyday digestion',
      'Classical Ayurvedic ingredient for soothing throat and oral rinses'
    ],
    keyBenefits: [
      'Golden Curcuminoid Phytochemical Profile',
      'Classical Digestive Culinary Heritage',
      'Traditional Warm Milk Nighttime Tonic',
      'Celebrated Ayurvedic Beauty Herb (Ubtan)'
    ],
    medicinalParts: ['Underground Rhizomes (Tubers)', 'Rhizome Essential Oil'],
    activePhytochemicals: [
      { name: 'Curcumin', role: 'Principal curcuminoid polyphenol giving yellow pigment' },
      { name: 'Demethoxycurcumin', role: 'Secondary curcuminoid compound' },
      { name: 'Turmerone', role: 'Sesquiterpene constituent of volatile essential oil' },
      { name: 'Zingiberene', role: 'Aromatic sesquiterpene shared with ginger family' }
    ],
    ayurvedicProfile: {
      taste: 'Bitter (Tikta), Pungent (Katu)',
      energy: 'Warming (Ushna)',
      doshaEffect: 'Traditionally viewed as balancing for Kapha and Vata',
      traditionalFormulation: 'Haridra Khanda, Golden Milk (Haridra Dugdha), Churna'
    },
    habitat: 'Warm, rainfed tropical forests of South Asia',
    growthType: 'Perennial herbaceous plant with broad leaves and aromatic rhizomes',
    colorTheme: {
      accent: '#c97a14',
      badgeBg: '#fef3c7',
      badgeText: '#92400e'
    },
    imageUrl: '/plants/turmeric.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1666818398897-381dd5eb9139?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Authentic Turmeric (Curcuma longa) freshly harvested medicinal rhizomes and roots with golden interior',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-turmeric'
  },
  {
    id: 'mint',
    commonName: 'Mint (Spearmint)',
    scientificName: 'Mentha spicata',
    family: 'Lamiaceae (Mint family)',
    sanskritName: 'पुदीना (Pudina)',
    category: 'Digestive & Metabolic',
    heroTag: 'The Cooling Digestive Leaf',
    shortDescription:
      'A refreshing aromatic herb celebrated in traditional culinary drinks, chutneys, and soothing teas for its crisp menthol fragrance and pleasant digestive cooling.',
    detailedDescription:
      'Pudina (Mint) has a long history of domestic and classical medicinal use throughout Asia and the Mediterranean. Ethnobotanical traditions value fresh crushed mint leaves added to warm teas or cool infusions for soothing mild stomach fullness and refreshing the breath.',
    growingConditions: {
      sunlight: 'Full sun to partial shade',
      soil: 'Moist, rich, well-drained soil; spreads vigorously through runners',
      climate: 'Temperate to tropical; highly resilient in garden beds or pots',
      water: 'Prefers consistently moist soil; water regularly'
    },
    partsTraditionallyUsed: ['Leaves', 'Tender Aerial Shoots', 'Essential Oil'],
    traditionalUses: [
      'Traditionally brewed into fresh digestive infusions following hearty meals',
      'Crushed with lime, ginger, and cumin in folk cooling digestive drinks',
      'Historically inhaled as steam with mint leaves for a refreshing nasal sensation',
      'Used as a staple traditional culinary garnish for soothing digestion'
    ],
    keyBenefits: [
      'Crisp Menthol & Carvone Aroma Profile',
      'Traditional Post-Meal Digestive Comfort',
      'Natural Cooling Oral Sensation',
      'Fast-Growing Hardy Kitchen Shrub'
    ],
    medicinalParts: ['Leaves', 'Stems', 'Volatile Distillate'],
    activePhytochemicals: [
      { name: 'Carvone', role: 'Primary monoterpene providing spearmint flavor' },
      { name: 'Limonene', role: 'Citrus-toned monoterpene hydrocarbon' },
      { name: 'Rosmarinic Acid', role: 'Antioxidant ester common to mint family' },
      { name: 'Menthol (trace)', role: 'Cooling monoterpene sensory compound' }
    ],
    ayurvedicProfile: {
      taste: 'Pungent (Katu), Sweet (Madhura)',
      energy: 'Mildly cooling (Sheeta virya after digestion)',
      doshaEffect: 'Pacifies Pitta and Kapha; stimulates digestive fire (Agni)',
      traditionalFormulation: 'Pudina Swarasa (Fresh Juice), Mint Phanta (Hot Infusion)'
    },
    habitat: 'Moist garden beds, riverbanks, and shaded cultivated fields',
    growthType: 'Perennial creeping herbaceous plant (30–60 cm tall)',
    colorTheme: {
      accent: '#10b981',
      badgeBg: '#d1fae5',
      badgeText: '#065f46'
    },
    imageUrl: '/plants/mint.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Mentha_spicata_Jammu_India.jpg',
    imageAlt: 'Authentic Spearmint (Mentha spicata) plant with serrated aromatic green leaves',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-mint'
  },
  {
    id: 'lemongrass',
    commonName: 'Lemongrass',
    scientificName: 'Cymbopogon citratus',
    family: 'Poaceae (Grass family)',
    sanskritName: 'रोहिश (Rohisha / Bhustrina)',
    category: 'Daily Wellness & Infusions',
    heroTag: 'The Citrus Herbal Grass',
    shortDescription:
      'A tall, fragrant tropical grass with a bright lemon aroma, traditionally brewed into herbal teas for seasonal comfort and relaxing evening infusions.',
    detailedDescription:
      'Lemongrass forms dense, arching grassy clumps. Rich in citral, its stalks and leaves release a refreshing citrus bouquet when bruised. In folk traditions across tropical Asia, lemongrass tea is prepared with honey or ginger for a comforting, warming beverage.',
    growingConditions: {
      sunlight: 'Full, direct sunlight (at least 6 hours daily)',
      soil: 'Rich, fertile, well-draining loamy soil',
      climate: 'Warm tropical and subtropical; frost sensitive',
      water: 'Moderate to high water; prefers evenly moist conditions'
    },
    partsTraditionallyUsed: ['Fibrous Basal Stalks', 'Elongated Leaf Blades', 'Essential Oil'],
    traditionalUses: [
      'Traditionally brewed with ginger and jaggery as a comforting seasonal tea',
      'Used in aromatic herbal steams for home fragrance and sensory relaxation',
      'Infused into hot water as a traditional folk digestive after-dinner drink',
      'Used as an essential culinary aromatic in Southeast Asian traditional soups'
    ],
    keyBenefits: [
      'High Natural Citral Essential Oil Content',
      'Traditional Uplifting Citrus Tea Brew',
      'Folk Seasonal Warmth & Comfort',
      'Lush Fountain-Like Grassy Growth'
    ],
    medicinalParts: ['Stems', 'Leaf blades', 'Distilled oil'],
    activePhytochemicals: [
      { name: 'Citral (Geranial & Neral)', role: 'Primary aldehyde providing lemon fragrance' },
      { name: 'Myrcene', role: 'Monoterpene constituent with calming scent notes' },
      { name: 'Geraniol', role: 'Monoterpenoid alcohol found in floral essential oils' },
      { name: 'Luteolin', role: 'Naturally occurring flavone antioxidant' }
    ],
    ayurvedicProfile: {
      taste: 'Pungent (Katu), Bitter (Tikta)',
      energy: 'Warming (Ushna)',
      doshaEffect: 'Pacifies Vata and Kapha; stimulates mild sweating (Swedana)',
      traditionalFormulation: 'Rohisha Chaya (Herbal Tea), Medicated Taila'
    },
    habitat: 'Tropical plains and sunny open cultivated fields',
    growthType: 'Perennial clump-forming tropical grass reaching 1–1.5 metres',
    colorTheme: {
      accent: '#84cc16',
      badgeBg: '#ecfccb',
      badgeText: '#3f6212'
    },
    imageUrl: '/plants/lemongrass.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Cymbopogon_citratus_leaves.jpg',
    imageAlt: 'Authentic Lemongrass (Cymbopogon citratus) clumping grass with aromatic arching blades',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-lemongrass'
  },
  {
    id: 'ashwagandha',
    commonName: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    family: 'Solanaceae (Nightshade family)',
    sanskritName: 'अश्वगंधा (Ashwagandha / Balya)',
    category: 'Adaptogens & Vitality',
    heroTag: 'The Renowned Indian Ginseng',
    shortDescription:
      'A cornerstone Ayurvedic adaptogenic root historically revered as a Rasayana tonic to nourish physical endurance, calm the mind, and promote deep restful sleep.',
    detailedDescription:
      'Ashwagandha translates to "smell of the horse", symbolic of traditional beliefs regarding the vitality and stamina it imparts. The plant is a small woody shrub with pale green leaves and papery calyces enclosing red berries. Its root has been prepared in warm milk with ghee for centuries.',
    growingConditions: {
      sunlight: 'Full direct sunlight',
      soil: 'Sandy, dry, slightly alkaline soil with sharp drainage',
      climate: 'Subtropical to arid climates; highly drought-tolerant',
      water: 'Low water requirement; dry conditions promote root quality'
    },
    partsTraditionallyUsed: ['Tuberous Roots', 'Leaves (rarely)', 'Seeds'],
    traditionalUses: [
      'Traditionally taken as root powder with warm milk and honey before sleep',
      'Classical Rasayana formulation for supporting vitality in older individuals',
      'Historically used in traditional lifestyle practices for managing mental fatigue',
      'Prepared in medicated ghees and classical jams (Ashwagandhadi Lehya)'
    ],
    keyBenefits: [
      'Classical Adaptogenic Root Heritage',
      'Traditional Evening Rest & Calming Brew',
      'Rich in Bioactive Withanolides',
      'Hardy Arid Solanaceae Botanical'
    ],
    medicinalParts: ['Dried tuberous roots', 'Whole root powder'],
    activePhytochemicals: [
      { name: 'Withaferin A', role: 'Steroidal lactone under significant scientific study' },
      { name: 'Withanolide D', role: 'Key characteristic secondary metabolite' },
      { name: 'Sominone', role: 'Glycoside derivative investigated for neuro-support' },
      { name: 'Anaferine', role: 'Piperidine alkaloid isolated from roots' }
    ],
    ayurvedicProfile: {
      taste: 'Bitter (Tikta), Astringent (Kashaya), Sweet (Madhura)',
      energy: 'Warming (Ushna)',
      doshaEffect: 'Pacifies Vata and Kapha; classical Balya and Rasayana tonic',
      traditionalFormulation: 'Ashwagandha Churna, Ashwagandharishta, Ksheerapaka'
    },
    habitat: 'Dry stony soils, arid plains, and waste lands across northwestern India',
    growthType: 'Stout evergreen woody sub-shrub (35–75 cm height)',
    colorTheme: {
      accent: '#b45309',
      badgeBg: '#fef3c7',
      badgeText: '#78350f'
    },
    imageUrl: '/plants/ashwagandha.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Withania_somnifera.jpg',
    imageAlt: 'Authentic Ashwagandha (Withania somnifera) shrub with green leaves and lantern calyces',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-ashwagandha'
  },
  {
    id: 'brahmi',
    commonName: 'Indian Brahmi',
    scientificName: 'Bacopa monnieri',
    family: 'Plantaginaceae (Plantain family)',
    sanskritName: 'ब्राह्मी (Brahmi / Medhya Rasayana)',
    category: 'Adaptogens & Vitality',
    heroTag: 'The Memory Herb of Wisdom',
    shortDescription:
      'A delicate creeping water herb celebrated in Ayurvedic medicine as a Medhya Rasayana, traditionally used by scholars to foster concentration, memory, and calm reflection.',
    detailedDescription:
      'Bacopa monnieri is a small, succulent aquatic herb that thrives in marshy margins and damp wetlands. In classical Ayurvedic texts like Charaka Samhita, it holds paramount esteem as a Medhya herb (intellect-promoting), traditionally clarified in ghee (Brahmi Ghrita) for learners.',
    growingConditions: {
      sunlight: 'Full sun to partial shade',
      soil: 'Wet, boggy, muddy or damp soil; can grow semi-submerged in water',
      climate: 'Warm tropical and subtropical wetlands',
      water: 'High; requires constant moisture or standing shallow water'
    },
    partsTraditionallyUsed: ['Whole Aerial Herb', 'Fresh Leaves and Stems'],
    traditionalUses: [
      'Traditionally prepared in clarified butter (Brahmi Ghrita) for student focus',
      'Infused in calming hair oils (Brahmi Taila) for cooling the head in warm seasons',
      'Fresh leaf juices historically taken in traditional morning wellness rituals',
      'Folk remedy for promoting calm mental clarity during demanding tasks'
    ],
    keyBenefits: [
      'Classical Medhya Rasayana (Intellect) Heritage',
      'Contains Bacosides A & B Triterpenoid Saponins',
      'Traditional Calming Ghee Formulation',
      'Lush Creeping Water-Loving Succulent'
    ],
    medicinalParts: ['Whole succulent plant', 'Leaves', 'Stems'],
    activePhytochemicals: [
      { name: 'Bacoside A & B', role: 'Dammarane-type triterpenoid saponins' },
      { name: 'Bacopaside I–XII', role: 'Bioactive saponin fractions under research' },
      { name: 'Betulinic Acid', role: 'Pentacyclic triterpene compound' },
      { name: 'Luteolin', role: 'Flavonoid antioxidant supporting vascular integrity' }
    ],
    ayurvedicProfile: {
      taste: 'Bitter (Tikta), Astringent (Kashaya), Sweet (Madhura)',
      energy: 'Cooling (Sheeta)',
      doshaEffect: 'Balances all three doshas, especially pacifying Pitta and Vata',
      traditionalFormulation: 'Brahmi Ghrita, Saraswatarishta, Brahmi Taila'
    },
    habitat: 'Wetlands, shallow marshes, river margins, and paddy field borders',
    growthType: 'Perennial creeping succulent herb forming rooting mats',
    colorTheme: {
      accent: '#0284c7',
      badgeBg: '#e0f2fe',
      badgeText: '#0369a1'
    },
    imageUrl: '/plants/brahmi.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Bacopa_monnieri_W_IMG_1612.jpg',
    imageAlt: 'Authentic Indian Brahmi (Bacopa monnieri) succulent water herb with small fleshy leaves',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-brahmi'
  },
  {
    id: 'ginger',
    commonName: 'Ginger',
    scientificName: 'Zingiber officinale',
    family: 'Zingiberaceae (Ginger family)',
    sanskritName: 'आर्द्रक / शुण्ठी (Ardraka / Shunthi)',
    category: 'Digestive & Metabolic',
    heroTag: 'The Universal Medicine',
    shortDescription:
      'The pungent warming rhizome hailed in Ayurveda as "Vishwabhesaj" (universal remedy), traditionally used in morning teas for digestion, warmth, and motion comfort.',
    detailedDescription:
      'Ginger is cultivated throughout tropical Asia for its aromatic, pungent underground stem. Classical texts distinguish fresh ginger (Ardraka) for stimulating digestion and dry ginger (Shunthi) for deeper systemic warmth. It remains a ubiquitous household remedy across the globe.',
    growingConditions: {
      sunlight: 'Partial shade or dappled sunlight; sensitive to harsh afternoon sun',
      soil: 'Rich, loose, well-draining loam packed with organic compost',
      climate: 'Warm, humid tropical climates with ample annual rainfall',
      water: 'Consistent regular moisture; avoid soggy stagnant water'
    },
    partsTraditionallyUsed: ['Fresh Underground Rhizome', 'Dried Rhizome Powder'],
    traditionalUses: [
      'Traditionally brewed with honey and black pepper as an invigorating morning tea',
      'Crushed with rock salt before meals to gently kindle digestive fire (Agni)',
      'Chewed in folk practices for soothing occasional travel motion uneasiness',
      'Applied externally in warm poultices for joint comfort in cold weather'
    ],
    keyBenefits: [
      'Bioactive Gingerols & Shogaols Profile',
      'Classical Digestive Kindler (Deepana)',
      'Traditional Cold-Weather Warming Brew',
      'Universal Folk Household Remedy Heritage'
    ],
    medicinalParts: ['Rhizome', 'Essential oil', 'Dry powder'],
    activePhytochemicals: [
      { name: 'Gingerols', role: 'Pungent phenolic compounds in fresh rhizome' },
      { name: 'Shogaols', role: 'Dehydration products formed during drying' },
      { name: 'Zingiberene', role: 'Dominant monocyclic sesquiterpene hydrocarbon' },
      { name: 'Paradols', role: 'Related phenolic constituent under study' }
    ],
    ayurvedicProfile: {
      taste: 'Pungent (Katu), Sweet post-digestive (Madhura Vipaka for dry)',
      energy: 'Warming (Ushna)',
      doshaEffect: 'Pacifies Vata and Kapha; stimulates Agni without aggravating Pitta',
      traditionalFormulation: 'Shunthi Churna, Trikatu, Ginger Tea (Ardraka Chaya)'
    },
    habitat: 'Warm tropical rainfed hills and shaded cultivated plots',
    growthType: 'Perennial herbaceous reed-like plant with leafy stems (60–100 cm)',
    colorTheme: {
      accent: '#d97706',
      badgeBg: '#fef3c7',
      badgeText: '#92400e'
    },
    imageUrl: '/plants/ginger.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Zingiber_officinale_fresh_rhizome.JPG',
    imageAlt: 'Authentic Ginger (Zingiber officinale) fresh aromatic rhizome with knobby segments',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-ginger'
  },
  {
    id: 'amla',
    commonName: 'Indian Gooseberry (Amla)',
    scientificName: 'Phyllanthus emblica',
    family: 'Phyllanthaceae',
    sanskritName: 'आमलकी (Amalaki / Dhatri)',
    category: 'Daily Wellness & Infusions',
    heroTag: 'The Sustainer of Youth',
    shortDescription:
      'A sacred sour-sweet green fruit renowned as one of nature’s most concentrated sources of polyphenolic vitamin C, anchoring the premier Ayurvedic jam Chyawanprash.',
    detailedDescription:
      'Amalaki holds exceptional prestige in classical Ayurvedic pharmacology as a premier Dhatri (nurse/sustainer) and Rasayana. Uniquely possessing five of the six classical tastes (all except salty), the fruit is traditionally dried, powdered, or eaten fresh for lifelong vitality.',
    growingConditions: {
      sunlight: 'Full, open sunlight',
      soil: 'Adaptable to poor, stony, or alkaline soils; thrives in light loams',
      climate: 'Subtropical to tropical; tolerant of light frost and summer drought',
      water: 'Low to moderate once established; hardy deciduous tree'
    },
    partsTraditionallyUsed: ['Fresh Fruits', 'Dried Fruit Pericarp', 'Seeds'],
    traditionalUses: [
      'Central foundational ingredient of the classical revitalizing jam Chyawanprash',
      'Key third constituent of the celebrated bowel-balancing blend Triphala',
      'Infused in traditional herbal hair tonics for lustrous natural hair conditioning',
      'Traditional seasonal preserve (Murabba) eaten for refreshing digestive tone'
    ],
    keyBenefits: [
      'Dense Complex Vitamin C & Emblicanins',
      'Premier Triphala & Chyawanprash Foundation',
      'Classical Five-Taste Nutritional Harmony',
      'Hardy Deciduous Medicinal Tree'
    ],
    medicinalParts: ['Pericarp', 'Fruit pulp', 'Seeds', 'Leaves'],
    activePhytochemicals: [
      { name: 'Ascorbic Acid (Vitamin C)', role: 'Naturally stabilized by tannins' },
      { name: 'Emblicanin A & B', role: 'Low-molecular-weight hydrolyzable gallotannins' },
      { name: 'Ellagic Acid', role: 'Polyphenol antioxidant compound' },
      { name: 'Gallic Acid', role: 'Simple phenolic organic acid' }
    ],
    ayurvedicProfile: {
      taste: 'Sour (Amla), Sweet (Madhura), Bitter, Pungent, Astringent',
      energy: 'Cooling (Sheeta)',
      doshaEffect: 'Balances all three Doshas (Tridoshahara, especially pacifies Pitta)',
      traditionalFormulation: 'Chyawanprash, Triphala Churna, Dhatri Lauha'
    },
    habitat: 'Dry deciduous forests and open hillsides of tropical South Asia',
    growthType: 'Small to medium deciduous tree (8–18 metres tall)',
    colorTheme: {
      accent: '#65a30d',
      badgeBg: '#ecfccb',
      badgeText: '#365314'
    },
    imageUrl: '/plants/amla.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1676043966983-f5bd22435e64?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Authentic Indian Gooseberry (Phyllanthus emblica) Amla green fruits on branch',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-amla'
  },
  {
    id: 'curry-leaves',
    commonName: 'Curry Leaves',
    scientificName: 'Murraya koenigii',
    family: 'Rutaceae (Citrus family)',
    sanskritName: 'सुरभिनिम्ब (Girinimba / Kattrina)',
    category: 'Skin & Topical Care',
    heroTag: 'The Fragrant Kitchen Healer',
    shortDescription:
      'A treasured aromatic tropical tree whose pungent, glossy compound leaves are traditionally used in daily cooking, digestive buttermilk, and folk hair nourishment oils.',
    detailedDescription:
      'Murraya koenigii is native to India and Sri Lanka. Belonging to the citrus family, its dark green pinnate leaves release an unmistakable warm, spicy aroma when crushed. In traditional South Indian culture, it is consumed daily in tempered dishes and boiled into coconut oil for healthy scalp care.',
    growingConditions: {
      sunlight: 'Full sun to light partial shade; thrives in warm spots',
      soil: 'Rich, fertile, slightly acidic to neutral well-drained loam',
      climate: 'Tropical to warm subtropical; sensitive to freezing temperatures',
      water: 'Moderate regular watering; allow topsoil to dry between waterings'
    },
    partsTraditionallyUsed: ['Aromatic Leaves', 'Bark', 'Roots', 'Berries'],
    traditionalUses: [
      'Tempered daily in mustard oil or ghee to support healthy meal digestion',
      'Boiled with coconut oil into traditional hair oils to nourish roots and shine',
      'Crushed in spiced buttermilk (Chaas) as a traditional cooling midday digestive',
      'Folk application of pounded leaves for minor external skin soothing'
    ],
    keyBenefits: [
      'Carbazole Alkaloids (Mahanimbine)',
      'Traditional Scalp Oil Infusion Heritage',
      'Daily Culinary Digestive Flavor Base',
      'Aromatic Compound Foliage Citrus Shrub'
    ],
    medicinalParts: ['Leaves', 'Leaf essential oil', 'Root bark'],
    activePhytochemicals: [
      { name: 'Mahanimbine', role: 'Carbazole alkaloid extensively studied in botany' },
      { name: 'Koenigine', role: 'Unique antioxidant carbazole alkaloid' },
      { name: 'Girimbine', role: 'Naturally present heterocyclic compound' },
      { name: 'Beta-Caryophyllene', role: 'Sesquiterpene providing peppery aroma' }
    ],
    ayurvedicProfile: {
      taste: 'Bitter (Tikta), Astringent (Kashaya), Pungent (Katu)',
      energy: 'Cooling (Sheeta)',
      doshaEffect: 'Pacifies Pitta and Kapha; stimulates salivary digestive Agni',
      traditionalFormulation: 'Girinimba Taila, Medicated Buttermilk (Takra), Chutneys'
    },
    habitat: 'Warm tropical slopes, evergreen forests, and household homesteads',
    growthType: 'Small semi-deciduous aromatic tree or shrub (4–6 metres tall)',
    colorTheme: {
      accent: '#15803d',
      badgeBg: '#dcfce7',
      badgeText: '#14532d'
    },
    imageUrl: '/plants/curry-leaves.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Murraya_koenigii_leaves_-_curry_leaves.jpg',
    imageAlt: 'Authentic Curry Leaf tree (Murraya koenigii) with aromatic compound pinnate leaves',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-curry-leaves'
  },
  {
    id: 'hibiscus',
    commonName: 'Hibiscus (Shoeblackplant)',
    scientificName: 'Hibiscus rosa-sinensis',
    family: 'Malvaceae (Mallow family)',
    sanskritName: 'जपा (Japa / Gudhal)',
    category: 'Daily Wellness & Infusions',
    heroTag: 'The Crimson Flower of Radiance',
    shortDescription:
      'A magnificent crimson-petaled tropical bloom traditionally steeped into cooling antioxidant teas and infused into botanical oils for hair luster and heart serenity.',
    detailedDescription:
      'Japa (Hibiscus) is admired both for its ornamental beauty and extensive traditional medicine footprint. In Ayurvedic treatises, its bright mucilaginous red petals are recognized for cooling excess bodily heat, traditionally steeped as a tart crimson infusion or macerated for hair vitality.',
    growingConditions: {
      sunlight: 'Full direct sunlight (at least 6 hours daily for blooming)',
      soil: 'Rich, moist, loamy soil enriched with organic matter; well-drained',
      climate: 'Tropical and frost-free subtropical environments',
      water: 'High during active blooming season; keep soil evenly moist'
    },
    partsTraditionallyUsed: ['Vibrant Red Flower Petals', 'Floral Calyces', 'Leaves'],
    traditionalUses: [
      'Traditionally brewed into a tart crimson herbal tea (Karkadeh) for cooling',
      'Petals cooked in coconut or sesame oil for traditional lustrous hair masks',
      'Folk beverage prepared in hot summer months to refresh and hydrate the body',
      'Utilized in traditional temple ceremonies and cooling herbal lepas'
    ],
    keyBenefits: [
      'Rich Anthocyanin & Flavonoid Red Pigment',
      'Traditional Tart Floral Cooling Brew',
      'Classical Hair Softening Oil Heritage',
      'Vibrant Five-Petaled Ornamental Bloom'
    ],
    medicinalParts: ['Flower petals', 'Epicalyx', 'Leaves'],
    activePhytochemicals: [
      { name: 'Cyanidin-3-sophoroside', role: 'Anthocyanin delivering rich crimson color' },
      { name: 'Hibiscic Acid', role: 'Organic floral acid providing refreshing tartness' },
      { name: 'Quercetin', role: 'Flavonoid antioxidant compound' },
      { name: 'Mucilage Polysaccharides', role: 'Natural plant water-binding hydrocolloids' }
    ],
    ayurvedicProfile: {
      taste: 'Sweet (Madhura), Astringent (Kashaya)',
      energy: 'Cooling (Sheeta)',
      doshaEffect: 'Pacifies Pitta and Kapha; traditional cooling tonic (Raktapitta)',
      traditionalFormulation: 'Japa Taila, Hibiscus Phanta (Cool Petal Infusion)'
    },
    habitat: 'Tropical gardens, sunny courtyard beds, and coastal landscapes',
    growthType: 'Bushy evergreen flowering tropical shrub (2.5–5 metres tall)',
    colorTheme: {
      accent: '#e11d48',
      badgeBg: '#ffe4e6',
      badgeText: '#9f1239'
    },
    imageUrl: '/plants/hibiscus.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1517162028430-9fec801e1a6b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Authentic Red Hibiscus (Hibiscus rosa-sinensis) blossom with vibrant crimson petals and long stamen',
    threeDStatus: 'Interactive 3D Ready',
    modelType: 'procedural-hibiscus'
  }
];

export const GARDEN_METRICS = [
  { label: 'Documented Species', value: '12', detail: 'Authentic verified medicinal flora' },
  { label: '3D Plant Meshes', value: 'Real-time', detail: 'Curved organic Three.js & Fiber models' },
  { label: 'Phytocompounds', value: '45+', detail: 'Documented secondary metabolites' },
  { label: 'Ayurvedic Formulations', value: '25+', detail: 'Classical traditional recipes' }
];

export const LEARNING_MODULES = [
  {
    id: 'anatomy',
    title: 'Plant Anatomy & Microscopy',
    icon: 'Microscope',
    description: 'Explore leaf venation, stomata, trichomes, and rhizome cross-sections in full 3D interactive view.',
    duration: '15 mins',
    level: 'Beginner'
  },
  {
    id: 'phytochemistry',
    title: 'Phytochemical Synergy',
    icon: 'FlaskConical',
    description: 'Unpack how bioactive secondary metabolites like curcuminoids and eugenol interact with human receptors.',
    duration: '25 mins',
    level: 'Intermediate'
  },
  {
    id: 'ayurveda',
    title: 'Ayurvedic Dravyaguna Science',
    icon: 'Sparkles',
    description: 'Master the fundamental concepts of Rasa (taste), Virya (energy), Vipaka (digestive effect), and Doshas.',
    duration: '20 mins',
    level: 'All Levels'
  },
  {
    id: 'formulation',
    title: 'Herbal Extraction & Kadhas',
    icon: 'Leaf',
    description: 'Learn ethical harvesting, solar drying, steam distillation, and medicinal preparation principles.',
    duration: '30 mins',
    level: 'Hands-on'
  }
];
