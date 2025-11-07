import React from 'react';
import { GraduationCap, Users, Clock, Award, BookOpen, CheckCircle, Star } from 'lucide-react';
import { logButtonClick } from '../utils/analytics';
import config from '../config';

function Formations() {
  // [PERSONNALISABLE] - Modifier les formations selon vos offres
    const formations = [
        {
        icon: BookOpen,
        title: "Formation Complète en Réparation Mobile",
        duration: "4 semaines",
        level: "Débutant à Avancé",
        description: "Formation complète couvrant tous les aspects de la réparation de téléphones portables : écrans, batteries, connectique, logiciel et diagnostic.",
        modules: [
            "Introduction à la réparation mobile",
            "Démontage et remontage",
            "Remplacement d'écran LCD/OLED",
            "Changement de batterie",
            "Réparation de connectique",
            "Diagnostic et dépannage logiciel",
            "Gestion d'atelier et relation client"
        ],
        price: "150 000 FCFA",
        popular: true,
        badge: "POPULAIRE"
        },
        {
        icon: Award,
        title: "Formation Spécialisée Écrans",
        duration: "1 semaine",
        level: "Intermédiaire",
        description: "Formation intensive spécialisée dans le remplacement et la réparation d'écrans pour toutes marques (iPhone, Samsung, Huawei, etc.).",
        modules: [
            "Types d'écrans et technologies",
            "Techniques de démontage",
            "Remplacement écran LCD",
            "Remplacement écran OLED",
            "Test et calibrage",
            "Gestion des pièces détachées"
        ],
        price: "75 000 FCFA",
        popular: false,
        badge: "SPÉCIALISÉ"
        },
        {
        icon: Users,
        title: "Formation Batteries et Connectique",
        duration: "1 semaine",
        level: "Débutant",
        description: "Apprenez à diagnostiquer et réparer les problèmes de batterie et de connectique (ports de charge, boutons, haut-parleurs).",
        modules: [
            "Diagnostic de batterie",
            "Remplacement de batterie",
            "Réparation port de charge",
            "Réparation boutons et switches",
            "Test de connectivité",
            "Outils et équipements"
        ],
        price: "60 000 FCFA",
        popular: false,
        badge: null
        },
        {
        icon: Star,
        title: "Formation Avancée - Carte Mère",
        duration: "2 semaines",
        level: "Avancé",
        description: "Formation expert pour la réparation de cartes mères, microsoudure et réparation de composants électroniques complexes.",
        modules: [
            "Électronique de base",
            "Microsoudure et dessoudage",
            "Diagnostic carte mère",
            "Réparation composants",
            "Utilisation d'oscilloscope",
            "Cas pratiques complexes"
        ],
        price: "200 000 FCFA",
        popular: false,
        badge: "EXPERT"
        }
    ];

    const advantages = [
        {
        icon: Users,
        title: "Formateurs Experts",
        description: "Techniciens certifiés avec plus de 10 ans d'expérience"
        },
        {
        icon: Award,
        title: "Certificat de Formation",
        description: "Attestation reconnue à la fin de chaque formation"
        },
        {
        icon: Clock,
        title: "Horaires Flexibles",
        description: "Formations en journée, soirée ou week-end selon vos besoins"
        },
        {
        icon: CheckCircle,
        title: "Support Continu",
        description: "Accès à un groupe d'entraide et support après formation"
        }
    ];

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        logButtonClick('Formation CTA - Contact');
        }
    };

    return (
        <section id="formations" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Nos Formations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Formations en Réparation Mobile
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Devenez technicien expert en réparation de téléphones. Formations pratiques avec matériel professionnel et certificat à la clé.
            </p>
            </div>
            
            {/* Formations Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
            {formations.map((formation, index) => (
                <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                    formation.popular ? 'border-4 border-blue-600 md:scale-105 relative' : 'border-2 border-gray-200 hover:border-blue-300'
                }`}
                >
                {/* Badge */}
                {formation.badge && (
                    <div className={`text-center py-2 text-sm font-bold text-white ${
                    formation.popular ? 'bg-blue-600' : formation.badge === 'EXPERT' ? 'bg-purple-600' : 'bg-gray-600'
                    }`}>
                    {formation.badge}
                    </div>
                )}
                
                {/* Content */}
                <div className="p-8">
                    <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <formation.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {formation.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {formation.duration}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {formation.level}
                        </span>
                        </div>
                    </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                    {formation.description}
                    </p>
                    
                    {/* Modules */}
                    <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                        Modules de formation :
                    </h4>
                    <ul className="space-y-2">
                        {formation.modules.map((module, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{module}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                    
                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                        <span className="text-2xl font-bold text-blue-600">{formation.price}</span>
                        <p className="text-xs text-gray-500">Matériel inclus</p>
                    </div>
                    <button
                        onClick={scrollToContact}
                        className={`px-6 py-3 rounded-lg font-semibold transition ${
                        formation.popular
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                    >
                        S'inscrire
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Advantages Section */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Pourquoi choisir nos formations ?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, index) => (
                <div key={index} className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{advantage.title}</h4>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
                ))}
            </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Prêt à devenir technicien expert ?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Rejoignez nos formations et lancez votre carrière dans la réparation mobile. 
                Formations pratiques, certificat reconnu et support continu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                onClick={scrollToContact}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg inline-flex items-center justify-center"
                >
                <GraduationCap className="w-5 h-5 mr-2" />
                Demander plus d'informations
                </button>
                <a
                href={`tel:${config.contact.phone}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition inline-flex items-center justify-center"
                >
                <Users className="w-5 h-5 mr-2" />
                Appeler maintenant
                </a>
            </div>
            </div>
        </div>
        </section>
    );
}

export default Formations;

