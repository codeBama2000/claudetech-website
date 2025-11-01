import React from 'react';
import { Monitor, Battery, Droplet, Wrench, Phone, Shield, CheckCircle, Camera } from 'lucide-react';
import { logButtonClick } from '../utils/analytics';

function Services() {
  // [PERSONNALISABLE] - Modifier les services selon vos besoins
    const services = [
        {
        icon: Monitor,
        imageUrl: "../../public/images/services/screen-repair.webp",
        title: "Écran cassé",
        description: "Remplacement d'écran LCD/OLED avec pièces d'origine. Test complet du tactile et de l'affichage.",
        features: ["Écran d'origine", "30 minutes", "Garantie 6 mois"],
        price: "À partir de 25 000 FCFA"
        },
        {
        icon: Battery,
        imageUrl: "../../public/images/services/battery.webp",
        title: "Batterie",
        description: "Remplacement de batterie défectueuse. Batteries certifiées haute capacité pour une autonomie optimale.",
        features: ["Batterie certifiée", "20 minutes", "Test capacité"],
        price: "À partir de 15 000 FCFA"
        },
        {
        icon: Droplet,
        imageUrl: "../../public/images/services/water-damage.webp",
        title: "Oxydation",
        description: "Nettoyage professionnel après contact avec l'eau. Traitement anti-oxydation et séchage complet.",
        features: ["Diagnostic gratuit", "Nettoyage complet", "24-48h"],
        price: "Sur devis"
        },
        {
        icon: Wrench,
        imageUrl: "../../public/images/services/charging-port.webp",
        title: "Connectique",
        description: "Réparation port de charge, boutons, haut-parleur, micro et connecteurs audio.",
        features: ["Port USB-C/Lightning", "45 minutes", "Test fonctionnel"],
        price: "À partir de 18 000 FCFA"
        },
        {
        icon: Camera,
        imageUrl: "../../public/images/services/camera.webp",
        title: "Caméra",
        description: "Remplacement caméra avant/arrière défectueuse. Calibrage et test qualité photo/vidéo.",
        features: ["Caméra d'origine", "40 minutes", "Test qualité"],
        price: "À partir de 20 000 FCFA"
        },
        {
        icon: Shield,
        imageUrl: "../../public/images/services/software.webp",
        title: "Logiciel",
        description: "Déblocage, réinitialisation, mise à jour système et suppression virus.",
        features: ["Sauvegarde données", "1-2 heures", "Optimisation"],
        price: "À partir de 10 000 FCFA"
        }
    ];

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        logButtonClick('Service Card - Contact');
        }
    };

    return (
        <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Nos Prestations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Services de Réparation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Toutes marques : iPhone, Samsung, Huawei, Xiaomi, Oppo, Tecno et plus
            </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div 
                key={index} 
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                {/* Icône */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
                </div>
                
                {/* Contenu */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <service.icon className="w-6 h-6 text-blue-600 mr-2" />
                    {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                        </li>
                    ))}
                    </ul>
                    
                    {/* Prix et CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-blue-600 font-bold text-sm">{service.price}</span>
                    <button
                        onClick={scrollToContact}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group-hover:translate-x-1 transition"
                    >
                        Demander un devis →
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Vous ne trouvez pas votre panne ?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Nous réparons également les problèmes de carte mère, Face ID, Touch ID et bien plus encore.
            </p>
            <button
                onClick={scrollToContact}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg inline-flex items-center"
            >
                <Phone className="w-5 h-5 mr-2" />
                Contactez-nous pour un diagnostic
            </button>
            </div>
        </div>
        </section>
    );
    }

    export default Services;