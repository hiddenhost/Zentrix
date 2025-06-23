
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import WebDevelopment from "./pages/WebDevelopment";
import UiUx from "./pages/UiUx";
import LogoBranding from "./pages/LogoBranding";
import DigitalMarketing from "./pages/DigitalMarketing";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import CloudSolutions from "./pages/CloudSolutions";
import ComingSoon from "./pages/ComingSoon";
import ContactUs from "./pages/ContactUs";
import Support from "./pages/Support";
import ProjectsPage from "./pages/ProjectsPage"
import BlogPostPage from "./pages/BlogPostPage";
import BlogPage from "./pages/BlogPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/ui-ux-design" element={<UiUx />} />
          <Route path="/logo-branding" element={<LogoBranding />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/portfolio" element={<ProjectsPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
