import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";

// Pages
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Worlds from "./pages/Worlds";
import WorldPage from "./pages/WorldPage";
import PieceDetail from "./pages/PieceDetail";
import CampaignLanding from "./pages/CampaignLanding";
import ProductDetail from "./pages/ProductDetail";
import DreamFund from "./pages/DreamFund";
import About from "./pages/About";
import FindYourLine from "./pages/FindYourLine";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Journal from "./pages/Journal";
import EarlyAccess from "./pages/EarlyAccess";
import Notify from "./pages/Notify";
import Admin from "./pages/Admin";
import SizeGuide from "./pages/SizeGuide";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/worlds" element={<Worlds />} />
                <Route path="/worlds/:slug" element={<WorldPage />} />
                <Route path="/pieces/:slug" element={<PieceDetail />} />
                <Route path="/preview/:slug" element={<CampaignLanding />} />
                <Route path="/find-your-line" element={<FindYourLine />} />
                <Route path="/find-your-line/quiz" element={<Quiz />} />
                <Route path="/find-your-line/result" element={<Result />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/early-access" element={<EarlyAccess />} />
                <Route path="/notify" element={<Notify />} />
                <Route path="/admin" element={<Admin />} />
                {/* Legacy collection routes redirect to worlds */}
                <Route path="/collections" element={<Navigate to="/worlds" replace />} />
                <Route path="/collections/:slug" element={<CollectionRedirect />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/dream-fund" element={<DreamFund />} />
                <Route path="/about" element={<About />} />
                <Route path="/size-guide" element={<SizeGuide />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

// Redirect /collections/:slug → /worlds/:slug
function CollectionRedirect() {
  const slug = window.location.pathname.split('/').pop();
  return <Navigate to={`/worlds/${slug}`} replace />;
}

export default App;
