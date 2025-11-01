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
            isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
        }`}
        >
        <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
            {/* Logo */}
            <img 
                src="../../public/images/logo.png" 
                alt="mon entreprise" 
                className="w-10 h-10 mr-2 md:w-12 md:h-12 hover:animate-spin transition duration-300"
            />  
            <span className="text-2xl font-roboto font-bold text-gray-600">{config.site.name}</span>
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8 pt-2">
                <button 
                onClick={() => scrollToSection('accueil')} 
                className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                Accueil
                </button>
                <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                Services
                </button>
                <button 
                onClick={() => scrollToSection('tarifs')} 
                className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                Tarifs
                </button>
                <button 
                onClick={() => scrollToSection('apropos')} 
                className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                À propos
                </button>
                
                {/* Bouton téléphone */}
                <a 
                href={`tel:${config.contact.phone}`}
                onClick={handlePhoneClick}
                className="hidden lg:flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition font-medium"
                >
                <Phone className="w-4 h-4" />
                <span>{config.contact.phone}</span>
                </a>
                
                <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md"
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
                onClick={() => scrollToSection('apropos')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition font-medium"
                >
                À propos
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