import { lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "@/components/layout/AnimatedPage";

// Pages
const Index = lazy(() => import("@/pages/Index"));
const Shop = lazy(() => import("@/pages/Shop"));
const Worlds = lazy(() => import("@/pages/Worlds"));
const WorldPage = lazy(() => import("@/pages/WorldPage"));
const PieceDetail = lazy(() => import("@/pages/PieceDetail"));
const CampaignLanding = lazy(() => import("@/pages/CampaignLanding"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const DreamFund = lazy(() => import("@/pages/DreamFund"));
const About = lazy(() => import("@/pages/About"));
const FindYourLine = lazy(() => import("@/pages/FindYourLine"));
const Quiz = lazy(() => import("@/pages/Quiz"));
const Result = lazy(() => import("@/pages/Result"));
const Journal = lazy(() => import("@/pages/Journal"));
const EarlyAccess = lazy(() => import("@/pages/EarlyAccess"));
const Notify = lazy(() => import("@/pages/Notify"));
const Admin = lazy(() => import("@/pages/Admin"));
const SizeGuide = lazy(() => import("@/pages/SizeGuide"));
const Shipping = lazy(() => import("@/pages/Shipping"));
const Returns = lazy(() => import("@/pages/Returns"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Contact = lazy(() => import("@/pages/Contact"));
const Terms = lazy(() => import("@/pages/Terms"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* Optimization: Implemented route-based code splitting using React.lazy and Suspense to reduce initial JS bundle size. key prop on Suspense allows AnimatePresence to work correctly. */}
      <Suspense fallback={null} key={location.pathname}>
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
