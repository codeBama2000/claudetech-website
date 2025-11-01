import React from 'react';
import { Phone, Clock, Shield, Award } from 'lucide-react';
import { logButtonClick } from '../utils/analytics';
import config from '../config';

function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        logButtonClick(`Hero CTA - ${id}`);
        }
    };

    return (
        <section id="accueil" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Texte */}
            <div className="md:w-1/2 z-10">
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce">
                ⚡ Réparation Express
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Réparation de Téléphones à <span className="text-blue-600">{config.contact.city}</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experts certifiés en réparation mobile. Intervention rapide, pièces d'origine, garantie 6 mois. 
                Toutes marques : iPhone, Samsung, Huawei, Xiaomi et plus.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                    Demander un devis gratuit
                </button>
                <button 
                    onClick={() => scrollToSection('services')}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                    Découvrir nos services
                </button>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                    <p className="font-semibold text-gray-900">30 minutes</p>
                    <p className="text-sm text-gray-600">Réparation rapide</p>
                    </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                    <p className="font-semibold text-gray-900">6 mois</p>
                    <p className="text-sm text-gray-600">Garantie incluse</p>
                    </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                    <p className="font-semibold text-gray-900">Certifiés</p>
                    <p className="text-sm text-gray-600">Techniciens experts</p>
                    </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                    <p className="font-semibold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Clients satisfaits</p>
                    </div>
                </div>
                </div>
            </div>

            {/* Image avec effet 3D */}
            <div className="md:w-1/2 flex justify-center relative">
                <div className="relative">
                {/* Image principale depuis Unsplash */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <img 
                    src="../../public/images/hero.jpg"
                    alt="Réparation de téléphones professionnelle"
                    className="w-full h-96 md:h-[500px] object-cover"
                    loading="eager"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>
                
                {/* Cercles décoratifs en arrière-plan */}
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Badges flottants */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl animate-bounce">
                    <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>En ligne</span>
                    </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 px-6 py-4 rounded-2xl font-bold shadow-2xl">
                    <div className="flex items-center space-x-2">
                    <span className="text-2xl">⭐</span>
                    <div>
                        <p className="text-lg">4.9/5</p>
                        <p className="text-xs text-gray-500">127 avis</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-20 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6 font-medium">
                Nous réparons toutes les marques
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Tecno'].map((brand, index) => (
                <div 
                    key={brand}
                    className="text-2xl font-bold text-gray-400 hover:text-gray-700 transition cursor-default transform hover:scale-110 duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    {brand}
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
}

export default Hero;