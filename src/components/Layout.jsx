import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
            <Header />
            {children}
            <Footer />
            
            {/* Éléments flottants */}
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
}

export default Layout;

