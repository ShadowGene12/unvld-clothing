import React, { Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "@/components/layout/AnimatedPage";

// Pages
const Index = React.lazy(() => import("@/pages/Index"));
const Shop = React.lazy(() => import("@/pages/Shop"));
const Worlds = React.lazy(() => import("@/pages/Worlds"));
const WorldPage = React.lazy(() => import("@/pages/WorldPage"));
const PieceDetail = React.lazy(() => import("@/pages/PieceDetail"));
const CampaignLanding = React.lazy(() => import("@/pages/CampaignLanding"));
const ProductDetail = React.lazy(() => import("@/pages/ProductDetail"));
const DreamFund = React.lazy(() => import("@/pages/DreamFund"));
const About = React.lazy(() => import("@/pages/About"));
const FindYourLine = React.lazy(() => import("@/pages/FindYourLine"));
const Quiz = React.lazy(() => import("@/pages/Quiz"));
const Result = React.lazy(() => import("@/pages/Result"));
const Journal = React.lazy(() => import("@/pages/Journal"));
const EarlyAccess = React.lazy(() => import("@/pages/EarlyAccess"));
const Notify = React.lazy(() => import("@/pages/Notify"));
const Admin = React.lazy(() => import("@/pages/Admin"));
const SizeGuide = React.lazy(() => import("@/pages/SizeGuide"));
const Shipping = React.lazy(() => import("@/pages/Shipping"));
const Returns = React.lazy(() => import("@/pages/Returns"));
const FAQ = React.lazy(() => import("@/pages/FAQ"));
const Contact = React.lazy(() => import("@/pages/Contact"));
const Terms = React.lazy(() => import("@/pages/Terms"));
const Privacy = React.lazy(() => import("@/pages/Privacy"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/*
        ⚡ Bolt Optimization: Implemented route-level code splitting using React.lazy and Suspense.
        This reduces the initial bundle size and speeds up the initial page load time.
        Note: The unique key MUST be placed on the Suspense wrapper for AnimatePresence to properly
        detect page changes and trigger exit animations.
      */}
      <Suspense key={location.pathname} fallback={<div className="h-screen w-full flex items-center justify-center bg-background"><span className="text-muted-foreground text-sm tracking-widest uppercase">Loading...</span></div>}>
        <Routes location={location}>
        <Route path="/" element={<AnimatedPage><Index /></AnimatedPage>} />
        <Route path="/shop" element={<AnimatedPage><Shop /></AnimatedPage>} />
        <Route path="/worlds" element={<AnimatedPage><Worlds /></AnimatedPage>} />
        <Route path="/worlds/:slug" element={<AnimatedPage><WorldPage /></AnimatedPage>} />
        <Route path="/pieces/:slug" element={<AnimatedPage><PieceDetail /></AnimatedPage>} />
        <Route path="/preview/:slug" element={<AnimatedPage><CampaignLanding /></AnimatedPage>} />
        <Route path="/find-your-line" element={<AnimatedPage><FindYourLine /></AnimatedPage>} />
        <Route path="/find-your-line/quiz" element={<AnimatedPage><Quiz /></AnimatedPage>} />
        <Route path="/find-your-line/result" element={<AnimatedPage><Result /></AnimatedPage>} />
        <Route path="/journal" element={<AnimatedPage><Journal /></AnimatedPage>} />
        <Route path="/early-access" element={<AnimatedPage><EarlyAccess /></AnimatedPage>} />
        <Route path="/notify" element={<AnimatedPage><Notify /></AnimatedPage>} />
        <Route path="/admin" element={<AnimatedPage><Admin /></AnimatedPage>} />
        <Route path="/collections" element={<Navigate to="/worlds" replace />} />
        <Route path="/collections/:slug" element={<CollectionRedirect />} />
        <Route path="/product/:slug" element={<AnimatedPage><ProductDetail /></AnimatedPage>} />
        <Route path="/dream-fund" element={<AnimatedPage><DreamFund /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/size-guide" element={<AnimatedPage><SizeGuide /></AnimatedPage>} />
        <Route path="/shipping" element={<AnimatedPage><Shipping /></AnimatedPage>} />
        <Route path="/returns" element={<AnimatedPage><Returns /></AnimatedPage>} />
        <Route path="/faq" element={<AnimatedPage><FAQ /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
        <Route path="/terms" element={<AnimatedPage><Terms /></AnimatedPage>} />
        <Route path="/privacy" element={<AnimatedPage><Privacy /></AnimatedPage>} />
        <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
      </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

// Redirect /collections/:slug → /worlds/:slug
function CollectionRedirect() {
  const slug = window.location.pathname.split('/').pop();
  return <Navigate to={`/worlds/${slug}`} replace />;
}

export default AnimatedRoutes;
