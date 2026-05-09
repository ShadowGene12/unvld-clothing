// Types
export interface World {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  manifesto: string;
  moodImage: string;
  moodImages: string[];
  traits: string[];
  isActive: boolean;
}

export interface Piece {
  id: string;
  slug: string;
  title: string;
  worldId: string;
  status: 'draft' | 'live' | 'archived' | 'coming_soon';
  sortOrder: number;
  heroImage: string;
  images: string[];
  description: string;
  fabricNotes?: string;
  stylingNotes?: string;
  tags: string[];
}

// Static Data
export const worlds: World[] = [
  {
    id: "ascend",
    slug: "ascend",
    name: "Ascend",
    tagline: "For those in motion",
    manifesto: "Movement is meaning. Every stride forward, every push beyond yesterday's limit, every quiet victory earned alone in the early hours. Ascend is for those who understand that progress is personal, discipline is freedom, and the only competition that matters is with who you were before.",
    moodImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    moodImages: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    ],
    traits: ["Discipline", "Motion", "Progress", "Performance", "Intention"],
    isActive: true,
  },
  {
    id: "japanese",
    slug: "japanese",
    name: "Japanese",
    tagline: "For those who wear meaning carefully",
    manifesto: "Beauty lives in restraint. In the weight of a single symbol, the breath between movements, the respect for craft passed through generations. Japanese is for those who understand that what you wear speaks before you do, that elegance is earned through attention, and that true style carries cultural memory.",
    moodImage: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
    moodImages: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
    ],
    traits: ["Symbolism", "Refinement", "Restraint", "Heritage", "Craft"],
    isActive: true,
  },
  {
    id: "streetwear",
    slug: "streetwear",
    name: "Streetwear",
    tagline: "For those whose presence speaks first",
    manifesto: "The city is your gallery. Every corner, every crowd, every moment of being seen is a statement. Streetwear is for those who understand that confidence is visible, that culture is currency, and that your presence should arrive before your introduction.",
    moodImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    moodImages: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80",
    ],
    traits: ["Presence", "Expression", "Urban", "Bold", "Cultural"],
    isActive: true,
  },
  {
    id: "subtle",
    slug: "subtle",
    name: "Subtle",
    tagline: "For those who prefer quiet precision",
    manifesto: "True confidence needs no announcement. It lives in the perfect cut, the considered palette, the garment that elevates without effort. Subtle is for those who understand that the highest form of style is invisible architecture, that less reveals more, and that premium is felt before it is seen.",
    moodImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    moodImages: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    ],
    traits: ["Composure", "Precision", "Minimal", "Versatile", "Ease"],
    isActive: true,
  },
];

export const pieces: Piece[] = [
  // Ascend pieces
  {
    id: "ascend-motion-tee",
    slug: "motion-tee",
    title: "Motion Tee",
    worldId: "ascend",
    status: "coming_soon",
    sortOrder: 1,
    heroImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
    ],
    description: "Engineered for movement. A technical tee that bridges the gap between performance and everyday wear, featuring moisture-wicking fabric and articulated seams.",
    fabricNotes: "87% Performance Polyester, 13% Elastane. Four-way stretch. Moisture-wicking finish.",
    stylingNotes: "Pairs seamlessly with training gear or elevated with tailored joggers for a street-to-studio transition.",
    tags: ["Technical", "Breathable", "Movement"],
  },
  {
    id: "ascend-discipline-hoodie",
    slug: "discipline-hoodie",
    title: "Discipline Hoodie",
    worldId: "ascend",
    status: "coming_soon",
    sortOrder: 2,
    heroImage: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    ],
    description: "The post-workout ritual. Heavyweight cotton-blend construction with a refined silhouette that transitions from gym to street without compromise.",
    fabricNotes: "80% Cotton, 20% Polyester. 400gsm heavyweight fleece. Ribbed cuffs and hem.",
    stylingNotes: "Layer over the Motion Tee for recovery days. Works equally well with technical pants or clean denim.",
    tags: ["Heavyweight", "Recovery", "Essential"],
  },
  // Japanese pieces
  {
    id: "japanese-kanji-tee",
    slug: "kanji-tee",
    title: "Kanji Heritage Tee",
    worldId: "japanese",
    status: "coming_soon",
    sortOrder: 1,
    heroImage: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    ],
    description: "Meaning woven into fabric. Features hand-drawn kanji symbolizing perseverance, rendered in traditional indigo tones on premium Japanese cotton.",
    fabricNotes: "100% Japanese Cotton. Suvin Gold yarn. Pre-shrunk and garment-dyed.",
    stylingNotes: "Let the symbol speak. Pair with wide-leg trousers and minimal footwear for contemplative ease.",
    tags: ["Symbolic", "Indigo", "Heritage"],
  },
  {
    id: "japanese-shrine-jacket",
    slug: "shrine-jacket",
    title: "Shrine Jacket",
    worldId: "japanese",
    status: "coming_soon",
    sortOrder: 2,
    heroImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    ],
    description: "Ritual outerwear. A modern interpretation of traditional Japanese workwear, featuring a relaxed silhouette and hand-finished details.",
    fabricNotes: "100% Cotton canvas. Washed for softness. Hidden snap closure.",
    stylingNotes: "The outer layer for contemplation. Works over any base layer, from technical to traditional.",
    tags: ["Workwear", "Relaxed", "Ritual"],
  },
  // Streetwear pieces
  {
    id: "streetwear-statement-tee",
    slug: "statement-tee",
    title: "Statement Tee",
    worldId: "streetwear",
    status: "coming_soon",
    sortOrder: 1,
    heroImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    ],
    description: "Your presence, printed. Bold graphic placement and oversized fit designed to command attention in any environment.",
    fabricNotes: "100% Cotton. 220gsm. Boxy oversized fit. Screen-printed graphics.",
    stylingNotes: "Let it lead. Pair with cargo pants and bold footwear. Confidence required.",
    tags: ["Graphic", "Oversized", "Bold"],
  },
  {
    id: "streetwear-urban-cargo",
    slug: "urban-cargo",
    title: "Urban Cargo",
    worldId: "streetwear",
    status: "coming_soon",
    sortOrder: 2,
    heroImage: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    ],
    description: "Functional attitude. Multi-pocket construction meets refined tailoring in a cargo pant built for the city.",
    fabricNotes: "98% Cotton, 2% Elastane. Ripstop weave. YKK hardware throughout.",
    stylingNotes: "The foundation for street looks. Top with graphic tees and statement outerwear.",
    tags: ["Utility", "Tailored", "Essential"],
  },
  // Subtle pieces
  {
    id: "subtle-essential-tee",
    slug: "essential-tee",
    title: "Essential Tee",
    worldId: "subtle",
    status: "coming_soon",
    sortOrder: 1,
    heroImage: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80",
    ],
    description: "The perfect foundation. Precisely cut from premium pima cotton, finished with invisible details that reveal themselves over time.",
    fabricNotes: "100% Pima Cotton. 180gsm. Reinforced shoulder seams. Blind-stitched hem.",
    stylingNotes: "The base layer that elevates everything. Works alone or under any layer.",
    tags: ["Foundation", "Pima", "Refined"],
  },
  {
    id: "subtle-quiet-trouser",
    slug: "quiet-trouser",
    title: "Quiet Trouser",
    worldId: "subtle",
    status: "coming_soon",
    sortOrder: 2,
    heroImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    ],
    description: "Effortless structure. Tailored relaxation in a trouser that moves between contexts without asking for attention.",
    fabricNotes: "67% Wool, 31% Polyester, 2% Elastane. Half-lined. Natural stretch.",
    stylingNotes: "The versatile bottom. Works with any top from the Essential Tee to a crisp button-down.",
    tags: ["Tailored", "Versatile", "Structured"],
  },
];

// Helper functions
export const getWorldBySlug = (slug: string): World | undefined => {
  return worlds.find(w => w.slug === slug);
};

export const getWorldById = (id: string): World | undefined => {
  return worlds.find(w => w.id === id);
};

export const getPiecesByWorld = (worldId: string): Piece[] => {
  return pieces.filter(p => p.worldId === worldId && p.status !== 'draft' && p.status !== 'archived');
};

export const getPieceBySlug = (slug: string): Piece | undefined => {
  return pieces.find(p => p.slug === slug);
};

export const getPieceById = (id: string): Piece | undefined => {
  return pieces.find(p => p.id === id);
};
