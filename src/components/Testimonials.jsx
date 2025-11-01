import React from 'react';
import { Star, Quote } from 'lucide-react';

function Testimonials() {
  // [PERSONNALISABLE] - Remplacer par vos vrais témoignages clients
    const testimonials = [
        {
        name: "Amadou K.",
        imageUrl: "/images/testimonials/client-1.webp",
        role: "Client depuis 2024",
        comment: "Réparation rapide et professionnelle. Mon iPhone fonctionne comme neuf. Je recommande vivement ClaudeTech pour leur sérieux et leur expertise.",
        rating: 5,
        service: "Réparation écran iPhone 13"
        },
        {
        name: "Fatou S.",
        imageUrl: "/images/testimonials/client-4.webp",
        role: "Cliente depuis 2023",
        comment: "Excellent service, tarifs honnêtes et garantie respectée. Mon Samsung est réparé en 30 minutes chrono. L'équipe est très accueillante.",
        rating: 5,
        service: "Changement batterie Samsung S21"
        },
        {
        name: "Ibrahim T.",
        imageUrl: "/images/testimonials/client-2.webp",
        role: "Client depuis 2024",
        comment: "Équipe compétente et accueillante. Mon téléphone tombé dans l'eau a été sauvé. Merci ClaudeTech pour votre professionnalisme !",
        rating: 5,
        service: "Réparation dégât des eaux"
        },
        {
            name: "Bama S.",
            imageUrl: "/images/testimonials/client-3.jpg",
            role: "Client depuis 2023",
            comment: "Réparation rapide et fiable. Mes appareils sont toujours en parfait fonctionnement. Je recommande ClaudeTech pour leurs services de haute qualité.",
            rating: 5,
            service: "Cours circuits iPhone 12"
        }
    ];

    return (
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Témoignages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Avis de nos Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Plus de 500 clients satisfaits nous font confiance
            </p>
            
            {/* Rating Summary */}
            <div className="flex items-center justify-center mt-6 space-x-2">
                <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-gray-600">(127 avis)</span>
            </div>
            </div>
            
            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
                <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 relative"
                >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
                
                {/* Stars */}
                <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                </div>
                
                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.comment}"
                </p>
                
                {/* Service */}
                <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    {testimonial.service}
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                    {/* Avatar (initiales) */}
                    <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200"
                    />
                    
                    <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
            
            {/* CTA */}
            <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
                Rejoignez nos clients satisfaits
            </p>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
                <Star className="w-5 h-5" />
                <span>Laisser un avis</span>
            </a>
            </div>
        </div>
        </section>
    );
    }

    export default Testimonials;