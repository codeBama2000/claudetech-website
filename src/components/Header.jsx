import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { logButtonClick, logPhoneCall } from '../utils/analytics';
import config from '../config';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
        logButtonClick(`Navigation - ${id}`);
        }
    };

    const handlePhoneClick = () => {
        logPhoneCall();
    };

    return (
        <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'glass shadow-xl border-b border-white/20 backdrop-blur-xl' 
                : 'glass shadow-lg border-b border-white/10 backdrop-blur-lg'
        }`}
        >
        <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
            {/* Logo avec image */}
            
            <div 
                className="flex items-center space-x-3 cursor-pointer group" 
                onClick={() => scrollToSection('accueil')}
            >
                {/* Logo circulaire avec dégradé */}
                <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden">
                <img 
                    src="/images/logo.png" 
                    alt="Logo ClaudeTech" 
                    className="w-full h-full object-cover"
                />
                </div>
                {/* Point vert "en ligne" */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
                </div>
                
                <div>
                <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {config.site.name}
                </span>
                <p className="text-xs text-gray-500">Réparation Express</p>
                </div>
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
                <button 
                onClick={() => scrollToSection('accueil')} 
                className="text-gray-700 hover:text-blue-600 transition-all font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 relative group"
                >
                <span className="relative z-10">Accueil</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
                <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-blue-600 transition-all font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 relative group"
                >
                <span className="relative z-10">Services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
                <button 
                onClick={() => scrollToSection('tarifs')} 
                className="text-gray-700 hover:text-blue-600 transition-all font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 relative group"
                >
                <span className="relative z-10">Tarifs</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
                <button 
                onClick={() => scrollToSection('formations')} 
                className="text-gray-700 hover:text-blue-600 transition-all font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 relative group"
                >
                <span className="relative z-10">Formations</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
                <button 
                onClick={() => scrollToSection('apropos')} 
                className="text-gray-700 hover:text-blue-600 transition-all font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 relative group"
                >
                <span className="relative z-10">À propos</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
                
                <button 
                onClick={() => scrollToSection('faq')} 
                className="text-gray-700 hover:text-blue-600 transition-all font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 relative group"
                >
                <span className="relative z-10">FAQ</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
                
                <button 
                onClick={() => scrollToSection('blog')} 
                className="text-gray-700 hover:text-blue-600 transition-all font-semibold px-3 py-2 rounded-lg hover:bg-blue-50 relative group"
                >
                <span className="relative z-10">Blog</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
                
                <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                Contact
                </button>
            </div>

            {/* Bouton Menu Mobile */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition"
                aria-label="Menu"
            >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
                <button 
                onClick={() => scrollToSection('accueil')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition font-medium"
                >
                Accueil
                </button>
                <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition font-medium"
                >
                Services
                </button>
                <button 
                onClick={() => scrollToSection('tarifs')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition font-medium"
                >
                Tarifs
                </button>
                <button 
                onClick={() => scrollToSection('formations')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition font-medium"
                >
                Formations
                </button>
                <button 
                onClick={() => scrollToSection('apropos')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition font-medium"
                >
                À propos
                </button>
                
                <button 
                onClick={() => scrollToSection('faq')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition font-medium"
                >
                FAQ
                </button>
                
                <button 
                onClick={() => scrollToSection('blog')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition font-medium"
                >
                Blog
                </button>
                
                {/* Lien téléphone mobile */}
                <a 
                href={`tel:${config.contact.phone}`}
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition font-medium"
                >
                <Phone className="w-5 h-5" />
                <span>{config.contact.phone}</span>
                </a>
                
                <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full font-semibold shadow-md"
                >
                Demander un devis
                </button>
            </div>
            )}
        </nav>
        </header>
    );
}

export default Header;