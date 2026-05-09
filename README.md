# UNVLD Brand Studio

Welcome to the Master Command Center for **UNVLD** — a premium streetwear house built on four emotional worlds: Ascend, Japanese, Streetwear, and Subtle.

This repository serves as the unified frontend application, consolidating the Line Finder quiz, Worlds Preview, Access Portal, and the main e-commerce Godly-tier interface.

## 🚀 Features

- **Four Worlds Architecture**: Distinct visual and emotional aesthetics unified under one brand.
- **Godly-Tier UI/UX**:
  - Smooth scrolling powered by `lenis`
  - Fluid page transitions and spring animations via `framer-motion`
  - Cinematic hero video backgrounds and ambient audio toggles
  - Interactive e-commerce components including a slide-out cart drawer and lookbook hotspots
- **Centralized Routing**: A seamless single-page application orchestrating the entire user journey.

## 🛠️ Tech Stack

- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)

## 📦 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShadowGene12/unvld-clothing.git
   cd unvld-clothing
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   bun dev
   ```

## 🏗️ Project Structure

- `/src/pages` - Core views (Home, Shop, Worlds, Dream Fund, etc.)
- `/src/components` - Reusable UI, Layout, Product, and Cart elements
- `/src/context` - Global state management (e.g., CartContext)
- `/src/data` - Mock data for products and collections (Ready for backend integration)

## 🔮 Next Steps
- Integrate User Authentication (Supabase)
- Implement functional Checkout Flow (Stripe)
- Build out Wishlist and Search Functionality
