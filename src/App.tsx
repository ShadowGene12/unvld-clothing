import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ReactLenis } from "lenis/react";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import AnimatedRoutes from "@/components/layout/AnimatedRoutes";
import BrandCurtain from "@/components/layout/BrandCurtain";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <ReactLenis root>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <BrandCurtain />
              <Layout>
                <AnimatedRoutes />
              </Layout>
            </BrowserRouter>
          </ReactLenis>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
