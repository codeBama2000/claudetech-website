import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { logEvent } from '../utils/analytics';

function Pricing() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePlanClick = (planName) => {
        logEvent('Pricing', 'Click Plan', planName);
        scrollToSection('contact');
    };

    // [PERSONNALISABLE] - Modifier les tarifs selon vos prix
    const pricingPlans = [
        {
        name: "Écran Standard",
        subtitle: "Pour les budgets serrés",
        price: "25 000",
        features: [
            "Écran LCD compatible",
            "Garantie 3 mois",
            "Installation 30 minutes",
            "Installation incluse",
            "Nettoyage complet"
        ],
        popular: false,
        badge: null
        },
        {
        name: "Écran Premium",
        subtitle: "Notre best-seller",
        price: "45 000",
        features: [
            "Écran OLED origine",
            "Garantie 6 mois",
            "Installation 30 minutes",
            "Protection verre offerte",
            "Nettoyage + désinfection",
            "Support prioritaire"
        ],
        popular: true,
        badge: "POPULAIRE"
        },
        {
        name: "Batterie",
        subtitle: "Autonomie retrouvée",
        price: "15 000",
        features: [
            "Batterie certifiée",
            "Garantie 6 mois",
            "Installation 20 minutes",
            "Test de capacité",
            "Calibrage inclus"
        ],
        popular: false,
        badge: "ÉCONOMIQUE"
        },
        {
            name: "Incassable",
            subtitle: "Garantie incassable",
            price: "30 000",
            features: [
                "Garantie incassable",
                "Garantie 6 mois",
                "Installation 30 minutes",
                "Nettoyage complet",
                "Support prioritaire"
            ],
            popular: false,
            badge: null
        },
        {
            name: "Fourreaux",
            subtitle: "Pour les budgets serrés",
            price: "25 000",
            features: [
                "Fourreaux",
                "Garantie 3 mois",
                "Installation 30 minutes",
                "Installation incluse",
                "Nettoyage complet"
            ],
            popular: false,
            badge: null
        },
        {
            name: "Autres services",
            subtitle: "Autres services",
            price: "Contactez-nous",
            features: [
                "Autres services",
                "Garantie 3 mois",
                "Installation 30 minutes",
                "Installation incluse",
                "Nettoyage complet"
            ]
        }
    ];

    return (
        <section id="tarifs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Tarifs Transparents
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos Tarifs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Prix indicatifs pour les réparations les plus courantes. 
                Devis gratuit et sans engagement en boutique.
            </p>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {pricingPlans.map((plan, index) => (
                <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                    plan.popular 
                    ? 'border-4 border-blue-600 transform md:scale-105 relative' 
                    : 'border-2 border-gray-200 hover:border-blue-300'
                }`}
                >
                {/* Badge */}
                {plan.badge && (
                    <div className={`text-center py-2 text-sm font-bold text-white ${
                    plan.popular ? 'bg-blue-600' : 'bg-gray-600'
                    }`}>
                    {plan.badge}
                    </div>
                )}
                
                {/* Content */}
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.subtitle}</p>
                    
                    {/* Price */}
                    <div className="mb-6">
                    <div className="flex items-end justify-center mb-2">
                        <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                        <span className="text-xl text-gray-600 ml-2 mb-2">FCFA</span>
                    </div>
                    {plan.popular && (
                        <div className="flex items-center justify-center text-yellow-500 text-sm">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span>Meilleur rapport qualité/prix</span>
                        </div>
                    )}
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <button
                    onClick={() => handlePlanClick(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    >
                    {plan.popular ? 'Choisir ce plan' : 'Commander'}
                    </button>
                </div>
                </div>
            ))}
            </div>

            {/* Additional Info */}
            <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    Inclus dans tous nos tarifs
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Diagnostic gratuit</li>
                    <li>• Main d'œuvre incluse</li>
                    <li>• Test complet après réparation</li>
                    <li>• Conseils d'entretien</li>
                </ul>
                </div>
                <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    Nos engagements
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Pièces certifiées</li>
                    <li>• Garantie jusqu'à 6 mois</li>
                    <li>• Pas de frais cachés</li>
                    <li>• Devis gratuit avant intervention</li>
                </ul>
                </div>
            </div>
            </div>

            {/* Note */}
            <div className="text-center mt-8">
            <p className="text-gray-600">
                💡 <span className="font-semibold">Prix variables selon le modèle.</span> Diagnostic gratuit en boutique pour un devis précis.
            </p>
            </div>
        </div>
        </section>
    );
    }

    export default Pricing;