import React from 'react';
import { Monitor, Battery, Droplet, Wrench, Phone, Shield, CheckCircle, Camera } from 'lucide-react';
import { logButtonClick } from '../utils/analytics';

function Services() {
  // [PERSONNALISABLE] - Modifier les services selon vos besoins
    const services = [
        {
        icon: Monitor,
        imageUrl: "/images/services/screen-repair.webp",
        title: "Écran cassé",
        description: "Remplacement d'écran LCD/OLED avec pièces d'origine. Test complet du tactile et de l'affichage.",
        features: ["Écran d'origine", "30 minutes", "Garantie 6 mois"],
        price: "À partir de 25 000 FCFA"
        },
        {
        icon: Battery,
        imageUrl: "/images/services/battery.webp",
        title: "Batterie",
        description: "Remplacement de batterie défectueuse. Batteries certifiées haute capacité pour une autonomie optimale.",
        features: ["Batterie certifiée", "20 minutes", "Test capacité"],
        price: "À partir de 15 000 FCFA"
        },
        {
        icon: Droplet,
        imageUrl: "/images/services/water-damage.webp",
        title: "Oxydation",
        description: "Nettoyage professionnel après contact avec l'eau. Traitement anti-oxydation et séchage complet.",
        features: ["Diagnostic gratuit", "Nettoyage complet", "24-48h"],
        price: "Sur devis"
        },
        {
        icon: Wrench,
        imageUrl: "/images/services/charging-port.webp",
        title: "Connectique",
        description: "Réparation port de charge, boutons, haut-parleur, micro et connecteurs audio.",
        features: ["Port USB-C/Lightning", "45 minutes", "Test fonctionnel"],
        price: "À partir de 18 000 FCFA"
        },
        {
        icon: Camera,
        imageUrl: "/images/services/camera.webp",
        title: "Caméra",
        description: "Remplacement caméra avant/arrière défectueuse. Calibrage et test qualité photo/vidéo.",
        features: ["Caméra d'origine", "40 minutes", "Test qualité"],
        price: "À partir de 20 000 FCFA"
        },
        {
        icon: Shield,
        imageUrl: "/images/services/software.webp",
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
        <section id="services" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block glass px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-lg border border-white/20">
                <span className="gradient-text-blue">Nos Prestations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Services de <span className="gradient-text-blue">Réparation</span>
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
                className="card-hover glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-white/20 group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
                >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300 z-10 rounded-2xl"></div>
                
                {/* Icône */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 flex items-center justify-center overflow-hidden">
                <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                        if (e.currentTarget.src !== `${window.location.origin}/images/placeholder.webp`) {
                            console.error(`Erreur de chargement pour ${service.imageUrl}`);
                            e.currentTarget.src = '/images/placeholder.webp';
                        } else {
                            e.currentTarget.style.display = 'none';
                        }
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Contenu */}
                <div className="p-6 relative z-10">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center group-hover:text-blue-600 transition-colors">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl mr-3 shadow-lg group-hover:scale-110 transition-transform">
                        <service.icon className="w-5 h-5 text-white" />
                    </div>
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
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                    <span className="gradient-text-blue font-extrabold text-base">{service.price}</span>
                    <button
                        onClick={scrollToContact}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl group-hover:translate-x-1 transform"
                    >
                        Devis <span className="ml-1">→</span>
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 glass-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-pink-600/50 opacity-50"></div>
            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                    Vous ne trouvez pas votre panne ?
                </h3>
                <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                    Nous réparons également les problèmes de carte mère, Face ID, Touch ID et bien plus encore.
                </p>
                <button
                    onClick={scrollToContact}
                    className="btn-modern bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-flex items-center transform hover:-translate-y-1"
                >
                    <Phone className="w-5 h-5 mr-2" />
                    Contactez-nous pour un diagnostic
                </button>
            </div>
            </div>
        </div>
        </section>
    );
    }

    export default Services;