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
            <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Texte */}
            <div className="md:w-1/2 mb-10 md:mb-0 z-10">
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
                <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                    <p className="font-semibold text-gray-900">30 minutes</p>
                    <p className="text-sm text-gray-600">Réparation rapide</p>
                    </div>
                </div>
                
                <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                    <p className="font-semibold text-gray-900">6 mois</p>
                    <p className="text-sm text-gray-600">Garantie incluse</p>
                    </div>
                </div>
                
                <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                    <p className="font-semibold text-gray-900">Certifiés</p>
                    <p className="text-sm text-gray-600">Techniciens experts</p>
                    </div>
                </div>
                
                <div className="flex items-center space-x-3">
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

            {/* Image/Illustration */}
            <div className="md:w-1/2 flex justify-center relative">
                <div className="relative">
                    <img 
                        src="../../public/images/hero.jpg" 
                        alt="Reparation de telephones à Bobo-Dioulasso"
                        className="rounded-2xl shadow-2xl w-full max-w-lg object-cover h-96"
                        loading="eager"
                    />
                
                {/* Icône principale */}
                <div className="relative bg-white p-12 rounded-3xl shadow-2xl">
                    <Phone className="w-64 h-64 text-blue-600" strokeWidth={1.5} />
                    
                    {/* Badges flottants */}
                    <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                    En ligne
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    4.9 ⭐ (127 avis)
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6 font-medium">
                Nous réparons toutes les marques
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                <span className="text-2xl font-bold text-gray-600">Apple</span>
                <span className="text-2xl font-bold text-gray-600">Samsung</span>
                <span className="text-2xl font-bold text-gray-600">Huawei</span>
                <span className="text-2xl font-bold text-gray-600">Xiaomi</span>
                <span className="text-2xl font-bold text-gray-600">Oppo</span>
                <span className="text-2xl font-bold text-gray-600">Tecno</span>
            </div>
            </div>
        </div>
        </section>
    );
    }

    export default Hero;