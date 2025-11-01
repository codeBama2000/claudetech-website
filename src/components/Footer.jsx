import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter} from 'lucide-react';
import { FaTiktok, FaYoutube, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { logEvent } from '../utils/analytics';
import config from '../config';

function Footer() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        logEvent('Footer', 'Navigation Click', id);
        }
    };

    const currentYear = new Date().getFullYear();

    // [PERSONNALISABLE] - Liens du footer
    const footerLinks = {
        services: [
        "Réparation écran",
        "Changement batterie",
        "Dégât des eaux",
        "Réparation connectique",
        "Problèmes logiciels",
        "Réparation caméra"
        ],
        quickLinks: [
        { name: "Accueil", id: "accueil" },
        { name: "Services", id: "services" },
        { name: "Tarifs", id: "tarifs" },
        { name: "À propos", id: "apropos" },
        { name: "Contact", id: "contact" }
        ],
        legal: [
        { name: "Mentions légales", href: "#" },
        { name: "Politique de confidentialité", href: "#" },
        { name: "CGV", href: "#" }
        ]
    };

    const socialLinks = [
        { 
        name: "Facebook", 
        url: config.social.facebook, 
        icon: Facebook,
        color: "hover:bg-blue-600"
        },
        { 
        name: "Instagram", 
        url: config.social.instagram, 
        icon: Instagram,
        color: "hover:bg-pink-600"
        },
        { 
        name: "Twitter", 
        url: config.social.twitter, 
        icon: Twitter,
        color: "hover:bg-blue-400"
        },
        { 
        name: "Tiktok", 
        url: config.social.tiktok, 
        icon: FaTiktok,
        color: "hover:bg-black"
        },
        { 
        name: "Youtube", 
        url: config.social.youtube, 
        icon: FaYoutube,
        color: "hover:bg-red-600"
        },
        { 
        name: "WhatsApp", 
        url: config.social.whatsapp, 
        icon: FaWhatsapp,
        color: "hover:bg-green-600"
        },
        { 
        name: "Telegram", 
        url: config.social.telegram, 
        icon: FaTelegram,
        color: "hover:bg-blue-600"
        }
    ];

    const handleSocialClick = (platform) => {
        logEvent('Footer', 'Social Click', platform);
    };

    return (
        <footer className="bg-gray-900 text-white">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* À propos */}
            <div>
                <div className="flex items-center space-x-2 mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">{config.site.name}</span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                {config.site.description}
                </p>
                
                {/* Contact rapide */}
                <div className="space-y-2">
                <a 
                    href={`tel:${config.contact.phone}`}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition text-sm"
                    onClick={() => logEvent('Footer', 'Phone Click', 'Quick Contact')}
                >
                    <Phone className="w-4 h-4 mr-2" />
                    {config.contact.phone}
                </a>
                <a 
                    href={`mailto:${config.contact.email}`}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition text-sm"
                    onClick={() => logEvent('Footer', 'Email Click', 'Quick Contact')}
                >
                    <Mail className="w-4 h-4 mr-2" />
                    {config.contact.email}
                </a>
                </div>
            </div>

            {/* Services */}
            <div>
                <h4 className="text-lg font-bold mb-4">Nos Services</h4>
                <ul className="space-y-2">
                {footerLinks.services.map((service, index) => (
                    <li key={index}>
                    <button 
                        onClick={() => scrollToSection('services')}
                        className="text-gray-400 hover:text-blue-400 transition text-sm"
                    >
                        {service}
                    </button>
                    </li>
                ))}
                </ul>
            </div>

            {/* Liens rapides */}
            <div>
                <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
                <ul className="space-y-2">
                {footerLinks.quickLinks.map((link, index) => (
                    <li key={index}>
                    <button 
                        onClick={() => scrollToSection(link.id)} 
                        className="text-gray-400 hover:text-blue-400 transition text-sm"
                    >
                        {link.name}
                    </button>
                    </li>
                ))}
                </ul>
                
                {/* Liens légaux */}
                <div className="mt-6">
                <h5 className="font-semibold text-gray-300 mb-2 text-sm">Informations</h5>
                <ul className="space-y-1">
                    {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                        <a 
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition text-xs"
                        >
                        {link.name}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            {/* Suivez-nous */}
            <div>
                <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
                <div className="flex space-x-3 mb-6">
                {socialLinks.map((social, index) => (
                    <a 
                    key={index}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick(social.name)}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all transform hover:scale-110`}
                    aria-label={social.name}
                    >
                    <social.icon className="w-5 h-5" />
                    </a>
                ))}
                </div>
                
                {/* Horaires - [PERSONNALISABLE] */}
                <div className="mb-4">
                <h5 className="font-semibold text-gray-300 mb-2 text-sm">Horaires d'ouverture</h5>
                <div className="space-y-1 text-gray-400 text-xs">
                    <p>{config.hours.weekdays}</p>
                    <p>{config.hours.saturday}</p>
                    <p className="text-red-400">{config.hours.sunday}</p>
                </div>
                </div>
                
                {/* Paiements */}
                <div>
                <h5 className="font-semibold text-gray-300 mb-2 text-sm">Paiements acceptés</h5>
                <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-800 px-3 py-1 rounded text-xs">Cash</span>
                    <span className="bg-gray-800 px-3 py-1 rounded text-xs">Mobile Money</span>
                    <span className="bg-gray-800 px-3 py-1 rounded text-xs">Carte</span>
                </div>
                </div>
            </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; {currentYear} {config.site.name}. Tous droits réservés. 
                <span className="hidden md:inline"> | Réparation mobile professionnelle à {config.contact.city}</span>
                </p>
                
                {/* Credits */}
                <div className="flex items-center space-x-4 text-gray-500 text-xs">
                <span>Conçu avec ❤️ au {config.contact.country}</span>
                </div>
            </div>
            
            {/* Badges/Certifications */}
            <div className="flex justify-center mt-6 space-x-4 opacity-60">
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-xs">
                ✓ Pièces certifiées
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-xs">
                ✓ Garantie 6 mois
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-xs">
                ✓ SAV réactif
                </div>
            </div>
            </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-gray-950 py-4">
            <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 text-xs">
                <span>🔒 Paiement sécurisé</span>
                <span>•</span>
                <span>⚡ Service rapide</span>
                <span>•</span>
                <span>✓ Satisfaction garantie</span>
                <span>•</span>
                <span>📞 Support 6j/7</span>
            </div>
            </div>
        </div>
        </footer>
    );
    }

    export default Footer;