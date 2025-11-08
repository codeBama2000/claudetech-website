import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initGA, logPageView } from './utils/analytics';
import LoadingScreen from './components/LoadingScreen';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import CGVPage from './pages/CGVPage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage';

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
    <Router>
      <Routes>
        {/* Page d'accueil avec toutes les sections principales */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        
        {/* Pages légales (accessibles via liens dans le footer) */}
        <Route path="/cgv" element={<CGVPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
      </Routes>
    </Router>
  );
}

export default App;
