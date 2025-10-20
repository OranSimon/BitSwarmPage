import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { PainPoints } from './components/PainPoints';
import { UseCases } from './components/UseCases';
import { TechSection } from './components/TechSection';
import { Subscribe } from './components/Subscribe';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Add dark class to html element
    document.documentElement.classList.add('dark');

    // Set document title
    document.title = 'AI-Driven 3D Reconstruction Drones | Fast Terrain Mapping';

    // Set meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // SEO Meta Tags
    setMetaTag('description', 'Revolutionary AI-powered multi-drone system for instant 3D reconstruction. Perfect for off-road mapping, signal relay placement, and search & rescue operations—even offline.');
    setMetaTag('keywords', '3D reconstruction, drones, off-road mapping, SAR, signal relay, instant mapping, AI drones, terrain mapping, disaster response');
    
    // Open Graph Tags
    setMetaTag('og:title', 'AI-Driven 3D Reconstruction Drones | Fast Terrain Mapping', true);
    setMetaTag('og:description', 'Revolutionary AI-powered multi-drone system for instant 3D reconstruction. From flight to full 3D—in minutes.', true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:image', 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070', true);
    
    // Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'AI-Driven 3D Reconstruction Drones');
    setMetaTag('twitter:description', 'Full 3D in Minutes, Not Hours. AI-driven multi-drone reconstruction with edge inference.');
    setMetaTag('twitter:image', 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070');
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="overflow-x-hidden">
        <Hero />
        <PainPoints />
        <UseCases />
        <TechSection />
        <Subscribe />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
