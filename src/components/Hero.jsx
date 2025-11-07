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
        <section id="accueil" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Texte */}
            <div className="md:w-1/2 z-10 animate-fade-in-up">
                <div className="inline-block glass px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-down shadow-lg">
                <span className="text-blue-600 font-bold">⚡</span> <span className="gradient-text-blue font-bold">Réparation Express</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Réparation de Téléphones à <span className="gradient-text-blue">{config.contact.city}</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experts certifiés en réparation mobile. Intervention rapide, pièces d'origine, garantie 6 mois. 
                Toutes marques : iPhone, Samsung, Huawei, Xiaomi et plus.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                    onClick={() => scrollToSection('contact')}
                    className="btn-modern bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300 relative overflow-hidden"
                >
                    <span className="relative z-10">Demander un devis gratuit</span>
                </button>
                <button 
                    onClick={() => scrollToSection('services')}
                    className="glass border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                    Découvrir nos services
                </button>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                <div className="card-hover glass p-5 rounded-2xl shadow-lg hover:shadow-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                        <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 text-lg">30 minutes</p>
                        <p className="text-sm text-gray-600">Réparation rapide</p>
                    </div>
                    </div>
                </div>
                
                <div className="card-hover glass p-5 rounded-2xl shadow-lg hover:shadow-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 text-lg">6 mois</p>
                        <p className="text-sm text-gray-600">Garantie incluse</p>
                    </div>
                    </div>
                </div>
                
                <div className="card-hover glass p-5 rounded-2xl shadow-lg hover:shadow-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 text-lg">Certifiés</p>
                        <p className="text-sm text-gray-600">Techniciens experts</p>
                    </div>
                    </div>
                </div>
                
                <div className="card-hover glass p-5 rounded-2xl shadow-lg hover:shadow-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-xl shadow-lg">
                        <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 text-lg">500+</p>
                        <p className="text-sm text-gray-600">Clients satisfaits</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Image avec effet 3D */}
            <div className="md:w-1/2 flex justify-center relative animate-fade-in-up">
                <div className="relative">
                {/* Image principale avec effet moderne */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <img 
                    src="/images/hero.jpg"
                    alt="Réparation de téléphones professionnelle"
                    className="w-full h-96 md:h-[500px] object-cover"
                    loading="eager"
                    onError={(e) => {
                        if (e.currentTarget.src !== `${window.location.origin}/images/placeholder.webp`) {
                            console.error('Erreur de chargement de l\'image hero');
                            e.currentTarget.src = '/images/placeholder.webp';
                        } else {
                            e.currentTarget.style.display = 'none';
                        }
                    }}
                    />
                    
                    {/* Overlay gradient moderne */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Cercles décoratifs animés */}
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Badges flottants modernes */}
                <div className="absolute -top-4 -right-4 glass-dark px-6 py-3 rounded-full text-sm font-bold shadow-2xl animate-float border border-green-400/30">
                    <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                    <span className="text-white font-bold">En ligne</span>
                    </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl font-bold shadow-2xl border border-white/30 animate-float">
                    <div className="flex items-center space-x-2">
                    <span className="text-3xl animate-bounce">⭐</span>
                    <div>
                        <p className="text-xl font-extrabold gradient-text-blue">4.9/5</p>
                        <p className="text-xs text-gray-600 font-semibold">127 avis</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-20 pt-8 border-t border-gray-200/50">
            <p className="text-center text-gray-600 mb-8 font-semibold text-lg">
                Nous réparons toutes les marques
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Tecno'].map((brand, index) => (
                <div 
                    key={brand}
                    className="glass px-6 py-3 rounded-xl text-xl font-bold text-gray-700 hover:text-blue-600 transition-all cursor-default transform hover:scale-110 hover:shadow-lg duration-300 border border-white/20"
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