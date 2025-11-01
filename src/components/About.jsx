import React from 'react';
import { Award, Users, Zap, Shield, CheckCircle } from 'lucide-react';
import config from '../config';

function About() {
  // [PERSONNALISABLE] - Modifier les statistiques selon vos données réelles
    const stats = [
        { number: "500+", label: "Clients satisfaits", icon: Users },
        { number: "15 ans", label: "D'expérience", icon: Award },
        { number: "98%", label: "Taux de réussite", icon: Zap },
        { number: "6 mois", label: "Garantie", icon: Shield }
    ];

    const values = [
        {
        title: "Expertise",
        description: "Techniciens certifiés et formés aux dernières technologies mobiles",
        icon: Award
        },
        {
        title: "Rapidité",
        description: "Réparation express en moyenne 30 minutes pour la plupart des pannes",
        icon: Zap
        },
        {
        title: "Qualité",
        description: "Pièces d'origine ou certifiées avec garantie jusqu'à 6 mois",
        icon: Shield
        },
        {
        title: "Transparence",
        description: "Devis gratuit et détaillé avant toute intervention",
        icon: Users
        }
    ];

    // Images d'equipes et services [PERSONNALISABLE]
    const teamMembers = [
        {
        name: "Claude O",
        role: "Technicien",
        imageUrl: "../../public/images/team/claudie.jpg"
        },
        {
        name: "Aboubakar S",
        role: "Technicien",
        imageUrl: "../../public/images/team/aboubacar.jpg"
        },
        {
        name: "Nanica",
        role: "Technicien",
        imageUrl: "../../public/images/team/nanica.jpeg"
        }
    ];
    

    return (
        <section id="apropos" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Qui sommes-nous ?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                À Propos de {config.site.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Votre partenaire de confiance depuis 2020
            </p>
            </div>
            
            {/* Main Content */}
            <div className="max-w-6xl mx-auto">
            {/* Story Section avec image */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Histoire</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                    Fondée en 2020 à {config.contact.city}, {config.site.name} est née de la passion pour la technologie mobile et du désir d'offrir un service de réparation de qualité accessible à tous.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                    Nous sommes spécialisés dans la réparation de téléphones portables de toutes marques avec un engagement fort envers la satisfaction client.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Notre équipe de techniciens certifiés dispose d'une expertise pointue et utilise exclusivement des pièces détachées d'origine ou certifiées.
                    </p>
                    
                    {/* Certifications */}
                    <div className="mt-6 flex flex-wrap gap-3">
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Certifié ISO
                    </div>
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Agréé Apple
                    </div>
                    <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Expert Samsung
                    </div>
                    </div>
                </div>
                
                {/* Atelier avec image réelle */}
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        src="../../public/images/team/atelier.webp"
                        alt="Atelier de réparation ClaudeTech"
                        className="w-full h-80 object-cover hover:scale-105 transition duration-500"
                    />
                    
                    {/* Badge sur l'image */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-xl">
                        <div className="flex items-center justify-between">
                        <div>
                            <p className="font-bold text-gray-900">Atelier professionnel</p>
                            <p className="text-sm text-gray-600">Équipement de pointe</p>
                        </div>
                        <Award className="w-10 h-10 text-blue-600" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                    </div>
                    <p className="text-gray-700 text-sm font-medium">{stat.label}</p>
                </div>
                ))}
            </div>

            {/* Values Section */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Nos Valeurs
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                    <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
                    >
                    <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <value.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {value.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            {value.description}
                        </p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Team Photos Gallery */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Notre Équipe
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <div 
                    key={index}
                    className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                    >
                    <img 
                        src={member.imageUrl}
                        alt={'${member.name} - ${member.role}'}
                        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div className="text-white">
                        <p className="font-bold">{member.name}</p>
                        <p className="text-sm opacity-90">{member.role}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Team CTA avec design moderne */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
                {/* Patterns décoratifs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Une équipe passionnée à votre service
                </h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                    Nos techniciens suivent une formation continue pour rester à la pointe des nouvelles technologies et vous offrir le meilleur service possible.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-white/20 backdrop-blur px-8 py-4 rounded-xl">
                    <p className="font-bold text-3xl">100%</p>
                    <p className="text-sm opacity-90">Satisfaction</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur px-8 py-4 rounded-xl">
                    <p className="font-bold text-3xl">30min</p>
                    <p className="text-sm opacity-90">Temps moyen</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur px-8 py-4 rounded-xl">
                    <p className="font-bold text-3xl">6 mois</p>
                    <p className="text-sm opacity-90">Garantie</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    }

    export default About;