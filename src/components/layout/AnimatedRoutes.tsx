import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "@/components/layout/AnimatedPage";

// Pages
import Index from "@/pages/Index";
import Shop from "@/pages/Shop";
import Worlds from "@/pages/Worlds";
import WorldPage from "@/pages/WorldPage";
import PieceDetail from "@/pages/PieceDetail";
import CampaignLanding from "@/pages/CampaignLanding";
import ProductDetail from "@/pages/ProductDetail";
import DreamFund from "@/pages/DreamFund";
import About from "@/pages/About";
import FindYourLine from "@/pages/FindYourLine";
import Quiz from "@/pages/Quiz";
import Result from "@/pages/Result";
import Journal from "@/pages/Journal";
import EarlyAccess from "@/pages/EarlyAccess";
import Notify from "@/pages/Notify";
import Admin from "@/pages/Admin";
import SizeGuide from "@/pages/SizeGuide";
import Shipping from "@/pages/Shipping";
import Returns from "@/pages/Returns";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
};

// Redirect /collections/:slug → /worlds/:slug
function CollectionRedirect() {
  const slug = window.location.pathname.split('/').pop();
  return <Navigate to={`/worlds/${slug}`} replace />;
}

export default AnimatedRoutes;
