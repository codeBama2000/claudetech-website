import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { initGA, logPageView } from './utils/analytics';
import config from './config';

// Composants
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

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

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
        
        {/* Éléments flottants */}
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;