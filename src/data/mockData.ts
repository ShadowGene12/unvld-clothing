// UNVLD Mock Data - Ready for backend integration

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  worldSlug?: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  emotionalStatement: string;
  moodCaption: string;
  philosophy: string;
  keywords: string[];
  heroImage: string;
  accentWord: string;
  features: {
    title: string;
    description: string;
  }[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  collectionSlug: string;
  category: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  description: string;
  details: {
    fabric: string;
    fit: string;
    care: string[];
  };
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface DreamFundUpdate {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

// Collections / Worlds
export const collections: Collection[] = [
  {
    id: "1",
    slug: "japanese",
    name: "Japanese",
    description: "Inspired by the meticulous craftsmanship and minimalist philosophy of Japanese design. Each piece honors the tradition of wabi-sabi—finding beauty in imperfection and transience.",
    shortDescription: "Minimalist design meets Eastern philosophy",
    emotionalStatement: "Stillness is a practice. These pieces are how you wear it.",
    moodCaption: "Clean lines. Considered silence. The space between intention and action.",
    philosophy: "Rooted in wabi-sabi—the Japanese art of finding beauty in imperfection—this world rejects noise. Every seam is deliberate. Every silhouette, a meditation. We source from Japanese mills that have been refining their craft for generations. The result is clothing that doesn't shout. It breathes.",
    accentWord: "間 (Ma)",
    keywords: ["minimal", "zen", "crafted", "timeless"],
    heroImage: "/src/assets/collection-japanese.jpg",
    features: [
      { title: "Mill-Direct Fabrics", description: "Sourced from Osaka and Kyoto mills with decades of expertise in premium cotton and linen blends." },
      { title: "Relaxed Silhouettes", description: "Dropped shoulders, wide-leg cuts, and cocoon shapes that honor the body without constraining it." },
      { title: "Wabi-Sabi Details", description: "Imperfect dyes, raw hems, and intentional irregularity—every flaw is a signature." },
    ],
  },
  {
    id: "2",
    slug: "streetwear",
    name: "Streetwear",
    description: "Raw urban energy distilled into wearable art. Bold graphics, oversized fits, and unapologetic attitude define this collection for those who refuse to blend in.",
    shortDescription: "Urban energy, bold expression",
    emotionalStatement: "The street is your canvas. Wear your voice.",
    moodCaption: "Loud when it needs to be. Silent when it doesn't. Always itself.",
    philosophy: "This world was built on the corner, not the catwalk. We study culture before we design. Every graphic is a document—a record of what we saw, heard, and refused to ignore. Released in small batches. Once gone, it's gone. That's not a strategy. That's integrity.",
    accentWord: "Raw",
    keywords: ["bold", "urban", "graphic", "statement"],
    heroImage: "/src/assets/collection-streetwear.jpg",
    features: [
      { title: "300GSM Heavy Cotton", description: "Fabric that holds its shape, absorbs its color, and gets better with every wash and wear." },
      { title: "Oversized Architecture", description: "Built for the block. Generous shoulders, extended hems, and silhouettes that own their space." },
      { title: "Limited-Run Graphics", description: "Original artwork created with collaborators. Each drop is a document. No reprints. No apologies." },
    ],
  },
  {
    id: "3",
    slug: "ascend",
    name: "Ascend",
    description: "Elevated essentials for those climbing toward their goals. Technical fabrics meet refined aesthetics in pieces designed for movement and momentum.",
    shortDescription: "Technical elevation for modern ambition",
    emotionalStatement: "Movement is the message. These pieces keep up.",
    moodCaption: "Performance without performance. Built for what's next.",
    philosophy: "Ascend exists for the ones who don't stop moving. Not athletes—people with momentum. Designers, builders, founders, artists who work at pace. We engineered fabric systems that move like a second skin and look like a considered wardrobe decision. The gym. The meeting. The flight. Same piece. No compromise.",
    accentWord: "Velocity",
    keywords: ["technical", "elevated", "performance", "refined"],
    heroImage: "/src/assets/collection-ascend.jpg",
    features: [
      { title: "Technical Fabric Systems", description: "Four-way stretch, moisture-wicking, and temperature-regulating blends built for a full day in motion." },
      { title: "Articulated Construction", description: "Every panel positioned for range of motion. Every seam mapped to move with you, not against you." },
      { title: "Seamless Transition", description: "Refined enough for a presentation. Technical enough for the run after. One piece. Both lives." },
    ],
  },
  {
    id: "4",
    slug: "subtle",
    name: "Subtle",
    description: "Quiet luxury speaks volumes. Muted tones, impeccable construction, and understated details for those who know that true style needs no announcement.",
    shortDescription: "Quiet luxury, lasting impression",
    emotionalStatement: "The quietest voice in the room is often the one worth listening to.",
    moodCaption: "Understated. Irreplaceable. The kind of confidence that doesn't need to explain itself.",
    philosophy: "Subtle is for people who have already arrived. They don't need a logo to validate their taste. They wear Subtle because the fabric knows things most fabric doesn't—how to drape, how to age, how to hold its own beside anything. Earth tones, invisible construction, and silhouettes that improve with time.",
    accentWord: "Presence",
    keywords: ["quiet", "luxury", "understated", "refined"],
    heroImage: "/src/assets/collection-subtle.jpg",
    features: [
      { title: "Tonal Neutrals", description: "Earth tones and muted hues developed in-house—no off-the-shelf palettes, only considered color stories." },
      { title: "Invisible Craft", description: "French seams, hidden interfacing, and stitching that you can only feel, not see." },
      { title: "Investment Pieces", description: "Designed to outlive trends. Wear them in five years and they'll still be the most considered thing in the room." },
    ],
  },
];

// Journal Posts
export const journalPosts: JournalPost[] = [
  {
    id: "1",
    slug: "the-meaning-of-wabi-sabi",
    title: "The Meaning of Wabi-Sabi in Clothing",
    category: "World / Japanese",
    date: "February 2026",
    excerpt: "Why imperfection isn't a flaw in the Japanese World—it's the point. A look at how ancient philosophy shapes every piece we make.",
    image: "/placeholder.svg",
    worldSlug: "japanese",
  },
  {
    id: "2",
    slug: "movement-as-identity",
    title: "Movement as Identity",
    category: "World / Ascend",
    date: "January 2026",
    excerpt: "We tracked how people who move all day actually dress. Then we built Ascend around what we learned.",
    image: "/placeholder.svg",
    worldSlug: "ascend",
  },
  {
    id: "3",
    slug: "the-graphic-as-document",
    title: "The Graphic as Document",
    category: "World / Streetwear",
    date: "January 2026",
    excerpt: "Every graphic we release is a record of something we witnessed. Here's the story behind our most recent drop.",
    image: "/placeholder.svg",
    worldSlug: "streetwear",
  },
  {
    id: "4",
    slug: "quiet-luxury-isnt-minimalism",
    title: "Quiet Luxury Isn't Minimalism",
    category: "World / Subtle",
    date: "December 2025",
    excerpt: "There's a difference between fewer things and better things. The Subtle World is firmly in the second camp.",
    image: "/placeholder.svg",
    worldSlug: "subtle",
  },
  {
    id: "5",
    slug: "find-your-line",
    title: "How to Find Your Line",
    category: "Brand",
    date: "December 2025",
    excerpt: "Our four worlds were designed to feel like emotional frequencies, not product categories. Here's how to tune in.",
    image: "/placeholder.svg",
  },
];


// Products
export const products: Product[] = [
  {
    id: "1",
    slug: "kyoto-oversized-tee",
    name: "Kyoto Oversized Tee",
    price: 85,
    collectionSlug: "japanese",
    category: "tops",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Stone", hex: "#a8a29e" },
      { name: "Black", hex: "#1c1917" },
      { name: "Bone", hex: "#f5f5f4" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Relaxed silhouette crafted from premium Japanese cotton. Features dropped shoulders and a subtle embroidered logo at the chest.",
    details: {
      fabric: "100% Japanese Cotton, 240GSM",
      fit: "Oversized - size down for regular fit",
      care: ["Machine wash cold", "Tumble dry low", "Do not bleach"],
    },
    isNew: true,
  },
  {
    id: "2",
    slug: "shibuya-cargo-pants",
    name: "Shibuya Cargo Pants",
    price: 165,
    collectionSlug: "japanese",
    category: "bottoms",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Charcoal", hex: "#374151" },
      { name: "Olive", hex: "#4a5d23" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Utilitarian cargo pants with a tapered leg. Multiple pockets with hidden closures and adjustable waist tabs.",
    details: {
      fabric: "Cotton Ripstop with 2% Elastane",
      fit: "Relaxed through thigh, tapered leg",
      care: ["Machine wash cold", "Hang dry", "Iron low heat"],
    },
    isBestseller: true,
  },
  {
    id: "3",
    slug: "block-graphic-hoodie",
    name: "Block Graphic Hoodie",
    price: 145,
    collectionSlug: "streetwear",
    category: "outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1c1917" },
      { name: "Cream", hex: "#fef3c7" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Heavyweight hoodie featuring original UNVLD block graphic. Double-layered hood and kangaroo pocket.",
    details: {
      fabric: "100% Cotton Fleece, 400GSM",
      fit: "Oversized",
      care: ["Machine wash cold inside out", "Tumble dry low", "Do not iron print"],
    },
    isNew: true,
    isBestseller: true,
  },
  {
    id: "4",
    slug: "urban-runner-shorts",
    name: "Urban Runner Shorts",
    price: 95,
    collectionSlug: "streetwear",
    category: "bottoms",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1c1917" },
      { name: "Grey", hex: "#6b7280" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Mesh-lined athletic shorts with side splits. Elastic waist with internal drawcord and hidden zip pocket.",
    details: {
      fabric: "Nylon Taslan with Mesh Lining",
      fit: "Regular - true to size",
      care: ["Machine wash cold", "Hang dry"],
    },
  },
  {
    id: "5",
    slug: "summit-tech-jacket",
    name: "Summit Tech Jacket",
    price: 275,
    collectionSlug: "ascend",
    category: "outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Midnight", hex: "#1e293b" },
      { name: "Stone", hex: "#a8a29e" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Water-resistant technical jacket with sealed seams. Packable design with adjustable hood and hem.",
    details: {
      fabric: "Recycled Nylon with DWR Finish",
      fit: "Athletic - allows layering",
      care: ["Machine wash cold", "Tumble dry low to reactivate DWR", "Do not dry clean"],
    },
    isNew: true,
  },
  {
    id: "6",
    slug: "momentum-joggers",
    name: "Momentum Joggers",
    price: 125,
    collectionSlug: "ascend",
    category: "bottoms",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1c1917" },
      { name: "Graphite", hex: "#4b5563" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Performance joggers with four-way stretch. Zippered pockets and reflective details for low-light visibility.",
    details: {
      fabric: "Ponte with 4-Way Stretch",
      fit: "Slim tapered",
      care: ["Machine wash cold", "Hang dry", "Do not bleach"],
    },
    isBestseller: true,
  },
  {
    id: "7",
    slug: "essence-crew-neck",
    name: "Essence Crew Neck",
    price: 95,
    collectionSlug: "subtle",
    category: "tops",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Sand", hex: "#d6d3d1" },
      { name: "Fog", hex: "#e5e7eb" },
      { name: "Charcoal", hex: "#374151" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Essential crew neck in premium pima cotton. Ribbed collar and cuffs with tonal logo embroidery.",
    details: {
      fabric: "100% Pima Cotton, 200GSM",
      fit: "Regular - true to size",
      care: ["Machine wash cold", "Tumble dry low", "Iron low heat"],
    },
  },
  {
    id: "8",
    slug: "refined-trousers",
    name: "Refined Trousers",
    price: 185,
    collectionSlug: "subtle",
    category: "bottoms",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Charcoal", hex: "#374151" },
      { name: "Camel", hex: "#b89b7a" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Tailored trousers in wool-blend fabric. Single pleat front with side adjusters and clean finish hem.",
    details: {
      fabric: "Wool Blend with Stretch",
      fit: "Slim straight",
      care: ["Dry clean recommended", "Steam to refresh"],
    },
    isNew: true,
  },
  {
    id: "9",
    slug: "zen-wrap-cardigan",
    name: "Zen Wrap Cardigan",
    price: 195,
    collectionSlug: "japanese",
    category: "outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1c1917" },
      { name: "Natural", hex: "#fafaf9" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Kimono-inspired wrap cardigan in textured cotton. Features traditional ties and dropped shoulder seams.",
    details: {
      fabric: "100% Textured Cotton",
      fit: "Relaxed drape",
      care: ["Hand wash cold", "Lay flat to dry"],
    },
  },
  {
    id: "10",
    slug: "statement-logo-tee",
    name: "Statement Logo Tee",
    price: 65,
    collectionSlug: "streetwear",
    category: "tops",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#fafafa" },
      { name: "Black", hex: "#1c1917" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Bold UNVLD logo tee in heavyweight cotton. Boxy fit with dropped shoulders and ribbed neckline.",
    details: {
      fabric: "100% Cotton, 280GSM",
      fit: "Boxy oversized",
      care: ["Machine wash cold inside out", "Tumble dry low"],
    },
  },
  {
    id: "11",
    slug: "core-performance-tee",
    name: "Core Performance Tee",
    price: 75,
    collectionSlug: "ascend",
    category: "tops",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1c1917" },
      { name: "White", hex: "#fafafa" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Moisture-wicking performance tee with anti-odor technology. Seamless construction minimizes chafing.",
    details: {
      fabric: "Recycled Polyester Blend",
      fit: "Athletic - close to body",
      care: ["Machine wash cold", "Do not use fabric softener", "Hang dry"],
    },
  },
  {
    id: "12",
    slug: "quiet-luxury-polo",
    name: "Quiet Luxury Polo",
    price: 115,
    collectionSlug: "subtle",
    category: "tops",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Ecru", hex: "#f5f0e6" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Elevated polo in mercerized cotton. Mother-of-pearl buttons and tonal embroidered logo.",
    details: {
      fabric: "100% Mercerized Cotton",
      fit: "Slim - slightly fitted",
      care: ["Machine wash cold", "Hang dry", "Iron medium heat"],
    },
  },
];

// Dream Fund Updates
export const dreamFundUpdates: DreamFundUpdate[] = [
  {
    id: "1",
    title: "Marcus Opens His First Studio",
    date: "January 2026",
    excerpt: "After receiving support from the Dream Fund, Marcus finally opened his photography studio in Oakland. He's now mentoring young photographers in his community.",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Sarah's Fashion Line Launches",
    date: "December 2025",
    excerpt: "Dream Fund recipient Sarah debuted her sustainable fashion collection at LA Fashion Week, featuring upcycled materials and zero-waste patterns.",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Community Garden Project Complete",
    date: "November 2025",
    excerpt: "The Dream Fund helped the Martinez family transform an empty lot into a thriving community garden that now feeds 50 families weekly.",
    image: "/placeholder.svg",
  },
];

// Helper functions
export const getProductsByCollection = (collectionSlug: string): Product[] => {
  return products.filter(p => p.collectionSlug === collectionSlug);
};

export const getNewProducts = (): Product[] => {
  return products.filter(p => p.isNew);
};

export const getBestsellers = (): Product[] => {
  return products.filter(p => p.isBestseller);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find(c => c.slug === slug);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.id !== product.id && p.collectionSlug === product.collectionSlug)
    .slice(0, limit);
};
