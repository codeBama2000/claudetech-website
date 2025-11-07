import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { initGA, logPageView } from './utils/analytics';
import config from './config';

// Composants critiques (chargés immédiatement)
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Composants lazy-loaded (chargés à la demande)
const Services = lazy(() => import('./components/Services'));
const Pricing = lazy(() => import('./components/Pricing'));
const Formations = lazy(() => import('./components/Formations'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const FAQ = lazy(() => import('./components/FAQ'));
const Blog = lazy(() => import('./components/Blog'));

// Composant de chargement pour les sections lazy
const SectionLoader = () => (
    <div className="py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialiser Google Analytics
    initGA();
    logPageView();

    // Simuler le chargement initial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>{config.site.name} - Réparation Téléphone {config.contact.city}</title>
        <meta name="description" content={config.site.description} />
        <link rel="canonical" href={config.site.url} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <Header />
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Pricing />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Formations />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Blog />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
        
        <Footer />
        
        {/* Éléments flottants */}
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;