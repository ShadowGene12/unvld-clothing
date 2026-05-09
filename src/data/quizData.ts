export const quizQuestions = [
  {
    id: "q1",
    question: "How do you prefer to move through the city?",
    options: [
      { text: "With purpose and momentum. Every step is calculated.", scores: { ascend: 3, japanese: 0, streetwear: 0, subtle: 1 } },
      { text: "Observing the details most people miss.", scores: { ascend: 0, japanese: 3, streetwear: 0, subtle: 1 } },
      { text: "Making my presence known. I am part of the energy.", scores: { ascend: 0, japanese: 0, streetwear: 3, subtle: 0 } },
      { text: "Quietly. I prefer to blend in but remain distinct.", scores: { ascend: 1, japanese: 1, streetwear: 0, subtle: 3 } }
    ]
  },
  {
    id: "q2",
    question: "What dictates your wardrobe choices?",
    options: [
      { text: "Performance and function. It must keep up with me.", scores: { ascend: 3, japanese: 0, streetwear: 0, subtle: 1 } },
      { text: "The story behind the garment and its construction.", scores: { ascend: 0, japanese: 3, streetwear: 0, subtle: 0 } },
      { text: "Boldness and cultural relevance.", scores: { ascend: 0, japanese: 0, streetwear: 3, subtle: 0 } },
      { text: "Versatility and minimal friction. Clean lines always.", scores: { ascend: 0, japanese: 1, streetwear: 0, subtle: 3 } }
    ]
  },
  {
    id: "q3",
    question: "When you enter a room, you want to project...",
    options: [
      { text: "Discipline and ambition.", scores: { ascend: 3, japanese: 0, streetwear: 0, subtle: 0 } },
      { text: "Refinement and artistic sensibility.", scores: { ascend: 0, japanese: 3, streetwear: 0, subtle: 1 } },
      { text: "Confidence and raw attitude.", scores: { ascend: 0, japanese: 0, streetwear: 3, subtle: 0 } },
      { text: "Composure and quiet confidence.", scores: { ascend: 1, japanese: 0, streetwear: 0, subtle: 3 } }
    ]
  },
  {
    id: "q4",
    question: "Choose a visual detail.",
    options: [
      { text: "Technical fabrics and articulated seams.", scores: { ascend: 3, japanese: 0, streetwear: 1, subtle: 0 } },
      { text: "Complex dyeing techniques and symbolic embroidery.", scores: { ascend: 0, japanese: 3, streetwear: 0, subtle: 0 } },
      { text: "Heavyweight cotton and striking graphics.", scores: { ascend: 0, japanese: 0, streetwear: 3, subtle: 0 } },
      { text: "Hidden hardware and perfect draping.", scores: { ascend: 0, japanese: 1, streetwear: 0, subtle: 3 } }
    ]
  }
];

export const worlds = {
  ascend: {
    id: "ascend",
    title: "Ascend",
    descriptor: "For those in motion.",
    description: "You are driven by progress and momentum. Your aesthetic reflects a life of discipline, ambition, and self-construction. You need garments that perform and keep up with your pace.",
    traits: ["Discipline", "Ambition", "Momentum", "Performance"]
  },
  japanese: {
    id: "japanese",
    title: "Japanese",
    descriptor: "For those who wear meaning carefully.",
    description: "You appreciate the art of restraint and the depth of the story. Your style is defined by refinement, symbolism, and a deep appreciation for the craft behind the garment.",
    traits: ["Symbolism", "Refinement", "Restraint", "Story"]
  },
  streetwear: {
    id: "streetwear",
    title: "Streetwear",
    descriptor: "For those whose presence speaks first.",
    description: "You are bold, visible, and deeply connected to cultural energy. Your wardrobe is an expression of confidence and raw attitude, designed to stand out in the urban landscape.",
    traits: ["Confidence", "Attitude", "Visibility", "Expression"]
  },
  subtle: {
    id: "subtle",
    title: "Subtle",
    descriptor: "For those who prefer quiet precision.",
    description: "You find power in simplicity. Your style is versatile, composed, and defined by clean lines. You don't need to shout to be heard; your presence is felt through quiet confidence.",
    traits: ["Composure", "Quiet Confidence", "Versatility", "Ease"]
  }
};
