import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Clear any scroll lock styles
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1
      }));
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [position]);

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -50%)' }}
      />
      <div
        className="custom-cursor-trail hidden md:block"
        style={{ left: `${trail.x}px`, top: `${trail.y}px`, transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

const CursorPreferenceModal = ({ onChoice }: { onChoice: (useCustom: boolean) => void }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-8 max-w-md mx-4 shadow-2xl border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Custom Cursor</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Would you like to enable the custom cursor animation? It provides a unique visual experience but uses more resources.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => onChoice(true)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Enable
          </button>
          <button
            onClick={() => onChoice(false)}
            className="flex-1 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Use Default
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // Initialize theme on app mount
  useTheme();
  
  const [showCursorModal, setShowCursorModal] = useState(false);
  const [useCustomCursor, setUseCustomCursor] = useState(false);

  useEffect(() => {
    const preference = localStorage.getItem('customCursorPreference');
    if (preference === null) {
      setShowCursorModal(true);
      // Show system cursor until user decides
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    } else {
      setUseCustomCursor(preference === 'true');
      if (preference === 'false') {
        // Use system cursor
        document.documentElement.style.cursor = 'auto';
        document.body.style.cursor = 'auto';
      }
    }
  }, []);

  const handleCursorChoice = (useCustom: boolean) => {
    localStorage.setItem('customCursorPreference', String(useCustom));
    setUseCustomCursor(useCustom);
    setShowCursorModal(false);
    
    if (!useCustom) {
      // Use system cursor
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    } else {
      // Hide cursor for custom
      document.documentElement.style.cursor = 'none';
      document.body.style.cursor = 'none';
    }
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showCursorModal && <CursorPreferenceModal onChoice={handleCursorChoice} />}
        {useCustomCursor && <CustomCursor />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

