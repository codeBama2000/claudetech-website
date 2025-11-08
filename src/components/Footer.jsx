import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';
import {FaTiktok,FaTelegram, FaYoutube } from 'react-icons/fa';
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
        { name: "Formations", id: "formations" },
        { name: "À propos", id: "apropos" },
        { name: "FAQ", id: "faq" },
        { name: "Blog", id: "blog" },
        { name: "Contact", id: "contact" }
        ],
        legal: [
        { name: "Mentions légales", href: "/mentions-legales" },
        { name: "Politique de confidentialité", href: "/politique-confidentialite" },
        { name: "CGV", href: "/cgv" }
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
        name: "Tiktok", 
        url: config.social.tiktok, 
        icon: FaTiktok,
        color: "hover:bg-pink-600"
        },
        { 
        name: "Telegram", 
        url: config.social.telegram, 
        icon: FaTelegram,
        color: "hover:bg-blue-600"
        },
        { 
        name: "Youtube", 
        url: config.social.youtube, 
        icon: FaYoutube,
        color: "hover:bg-red-600"
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
        }
    ];

    const handleSocialClick = (platform) => {
        logEvent('Footer', 'Social Click', platform);
    };

    return (
        <footer className="bg-gray-900 text-white">
        {/* Newsletter Section avec image de fond */}
        <div className="relative border-b border-gray-800">
            {/* Image de fond subtile */}
            <div className="absolute inset-0 opacity-5">
            <img 
                src="/images/placeholder.webp"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                }}
            />
            </div>
            
            {/* Contenu Newsletter */}
            <div className="relative container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-2">Restez informés</h3>
                <p className="text-gray-400 mb-6">
                Recevez nos offres spéciales et promotions par email
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-sm"
                />
                <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition whitespace-nowrap"
                >
                    S'inscrire
                </button>
                </form>
            </div>
            </div>
        </div>

        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* À propos avec logo */}
            <div>
                <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                    src="/images/logo.png" 
                    alt="Logo ClaudeTech" 
                    className="w-full h-full object-cover"
                />
                </div>
                <span className="text-2xl font-bold">{config.site.name}</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {config.site.description}
                </p>
                
                {/* Contact rapide avec icônes */}
                <div className="space-y-3">
                <a 
                    href={`tel:${config.contact.phone}`}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition text-sm group"
                    onClick={() => logEvent('Footer', 'Phone Click', 'Quick Contact')}
                >
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition">
                    <Phone className="w-4 h-4" />
                    </div>
                    <span>{config.contact.phone}</span>
                </a>
                <a 
                    href={`mailto:${config.contact.email}`}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition text-sm group"
                    onClick={() => logEvent('Footer', 'Email Click', 'Quick Contact')}
                >
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600 transition">
                    <Mail className="w-4 h-4" />
                    </div>
                    <span>{config.contact.email}</span>
                </a>
                <div className="flex items-start text-gray-300 text-sm">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                    <MapPin className="w-4 h-4" />
                    </div>
                    <span className="leading-relaxed">{config.contact.address}</span>
                </div>
                </div>
            </div>

            {/* Services */}
            <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                Nos Services
                </h4>
                <ul className="space-y-2">
                {footerLinks.services.map((service, index) => (
                    <li key={index}>
                    <button 
                        onClick={() => scrollToSection('services')}
                        className="text-gray-400 hover:text-blue-400 transition text-sm hover:translate-x-1 inline-block duration-300"
                    >
                        → {service}
                    </button>
                    </li>
                ))}
                </ul>
            </div>

            {/* Liens rapides */}
            <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                Liens Rapides
                </h4>
                <ul className="space-y-2">
                {footerLinks.quickLinks.map((link, index) => (
                    <li key={index}>
                    <button 
                        onClick={() => scrollToSection(link.id)} 
                        className="text-gray-400 hover:text-blue-400 transition text-sm hover:translate-x-1 inline-block duration-300"
                    >
                        → {link.name}
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
                        onClick={() => logEvent('Footer', 'Legal Link Click', link.name)}
                        className="text-gray-400 hover:text-blue-400 transition text-xs"
                        >
                        {link.name}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            {/* Suivez-nous et Horaires */}
            <div>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                Suivez-nous
                </h4>
                <div className="flex space-x-3 mb-6">
                {socialLinks.map((social, index) => (
                    <a 
                    key={index}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick(social.name)}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.color} transition-all transform hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                    >
                    <social.icon className="w-5 h-5" />
                    </a>
                ))}
                </div>
                
                {/* Horaires avec icône */}
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 text-blue-400 mr-2" />
                    <h5 className="font-semibold text-gray-300 text-sm">Horaires</h5>
                </div>
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
                    <span className="bg-gray-800 px-3 py-1 rounded text-xs">💵 Cash</span>
                    <span className="bg-gray-800 px-3 py-1 rounded text-xs">📱 Mobile Money</span>
                    <span className="bg-gray-800 px-3 py-1 rounded text-xs">💳 Carte</span>
                </div>
                </div>
            </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                {/* Copyright */}
                <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; {currentYear} {config.site.name}. Tous droits réservés. 
                <span className="hidden md:inline"> | Réparation mobile professionnelle à {config.contact.city}</span>
                </p>
                
                {/* Made with love */}
                <div className="flex items-center space-x-2 text-gray-500 text-xs">
                <span>Conçu avec</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>au {config.contact.country}</span>
                </div>
            </div>
            
            {/* Badges/Certifications */}
            <div className="flex flex-wrap justify-center gap-3 opacity-60">
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-xs flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Pièces certifiées
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-xs flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Garantie 6 mois
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-xs flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                SAV réactif
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-xs flex items-center">
                <span className="text-blue-400 mr-2">🔒</span>
                Paiement sécurisé
                </div>
            </div>
            </div>
        </div>

        {/* Trust Banner Final */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-3">
            <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-4 text-white text-xs">
                <span className="flex items-center">
                <span className="mr-2">⚡</span> Service rapide
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center">
                <span className="mr-2">✓</span> Satisfaction garantie
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center">
                <span className="mr-2">📞</span> Support 6j/7
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center">
                <span className="mr-2">⭐</span> 4.9/5 - 127 avis
                </span>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;