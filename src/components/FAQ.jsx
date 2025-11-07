import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { logEvent } from '../utils/analytics';
import config from '../config';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // [PERSONNALISABLE] - Modifier les questions/réponses selon vos besoins
    const faqs = [
        {
            category: "Général",
            questions: [
                {
                    question: "Quels types de téléphones réparez-vous ?",
                    answer: "Nous réparons tous les types de téléphones portables : iPhone, Samsung, Huawei, Xiaomi, Oppo, Tecno, et toutes les autres marques. Nous sommes spécialisés dans toutes les marques et modèles."
                },
                {
                    question: "Combien de temps prend une réparation ?",
                    answer: "La plupart des réparations sont effectuées en 30 minutes à 1 heure. Pour les réparations plus complexes (carte mère, dégât des eaux), cela peut prendre 24 à 48 heures. Nous vous donnons toujours un délai précis lors du diagnostic."
                },
                {
                    question: "Offrez-vous une garantie sur vos réparations ?",
                    answer: "Oui, nous offrons une garantie de 6 mois sur toutes nos réparations. Cette garantie couvre les défauts de pièces et de main-d'œuvre. Si un problème survient dans les 6 mois, nous réparons gratuitement."
                },
                {
                    question: "Dois-je prendre rendez-vous ?",
                    answer: "Non, vous pouvez venir directement à notre atelier pendant les heures d'ouverture. Cependant, pour les réparations urgentes ou complexes, nous recommandons d'appeler à l'avance pour garantir une prise en charge rapide."
                }
            ]
        },
        {
            category: "Services",
            questions: [
                {
                    question: "Combien coûte le remplacement d'un écran ?",
                    answer: "Le prix varie selon le modèle de téléphone. Pour un écran standard, comptez entre 25 000 et 45 000 FCFA. Les écrans OLED ou pour les modèles récents peuvent être plus chers. Nous proposons toujours un devis gratuit avant toute intervention."
                },
                {
                    question: "Pouvez-vous récupérer mes données si mon téléphone ne s'allume plus ?",
                    answer: "Oui, dans la plupart des cas, nous pouvons récupérer vos données même si le téléphone ne s'allume plus. Cela dépend de l'état de la carte mère. Nous effectuons un diagnostic gratuit pour évaluer les possibilités de récupération."
                },
                {
                    question: "Réparerez-vous mon téléphone tombé dans l'eau ?",
                    answer: "Oui, nous sommes spécialisés dans la réparation de dégâts des eaux. Plus vous agissez rapidement, meilleures sont les chances de récupération. Éteignez immédiatement le téléphone, ne le chargez pas, et apportez-le-nous le plus vite possible."
                },
                {
                    question: "Utilisez-vous des pièces d'origine ?",
                    answer: "Oui, nous utilisons exclusivement des pièces d'origine ou certifiées de haute qualité. Nous ne mettons jamais de pièces de contrefaçon qui pourraient endommager votre appareil."
                }
            ]
        },
        {
            category: "Formations",
            questions: [
                {
                    question: "Qui peut suivre vos formations ?",
                    answer: "Nos formations sont ouvertes à tous : débutants complets, personnes souhaitant se reconvertir, ou techniciens voulant se perfectionner. Aucun prérequis n'est nécessaire pour la formation complète."
                },
                {
                    question: "Combien de temps dure une formation ?",
                    answer: "Nous proposons plusieurs formats : formation complète (4 semaines), formations spécialisées (1-2 semaines), et formations intensives. Les horaires sont flexibles : journée, soirée ou week-end selon vos besoins."
                },
                {
                    question: "Recevrai-je un certificat ?",
                    answer: "Oui, à la fin de chaque formation, vous recevez une attestation de formation reconnue. Ce certificat atteste de vos compétences en réparation mobile et peut être un atout pour votre CV."
                },
                {
                    question: "Le matériel est-il fourni ?",
                    answer: "Oui, tout le matériel nécessaire est fourni pendant la formation. Vous n'avez pas besoin d'apporter quoi que ce soit. Nous mettons à disposition tous les outils professionnels nécessaires."
                }
            ]
        },
        {
            category: "Tarifs et Paiement",
            questions: [
                {
                    question: "Quels modes de paiement acceptez-vous ?",
                    answer: "Nous acceptons le paiement en espèces, par carte bancaire, et par Mobile Money (Orange Money, Moov Money). Le paiement s'effectue après la réparation, une fois que vous avez vérifié que tout fonctionne correctement."
                },
                {
                    question: "Le diagnostic est-il payant ?",
                    answer: "Non, le diagnostic est toujours gratuit. Nous examinons votre téléphone et vous donnons un devis détaillé sans engagement. Vous n'êtes pas obligé de faire réparer si le prix ne vous convient pas."
                },
                {
                    question: "Proposez-vous des facilités de paiement ?",
                    answer: "Oui, pour les réparations importantes, nous proposons des facilités de paiement. Vous pouvez payer en plusieurs fois selon un plan convenu ensemble. Contactez-nous pour discuter des modalités."
                }
            ]
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        logEvent('FAQ', 'Toggle Question', `Question ${index + 1}`);
    };

    // Filtrer les FAQs selon la recherche
    const filteredFAQs = faqs.map(category => ({
        ...category,
        questions: category.questions.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    // Compter toutes les questions
    let questionIndex = 0;

    return (
        <section id="faq" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block glass px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-lg border border-white/20">
                <span className="gradient-text-blue">Questions Fréquentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                FAQ - <span className="gradient-text-blue">Réponses à vos Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trouvez rapidement les réponses à vos questions sur nos services, tarifs et formations
            </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 glass rounded-xl border border-white/20 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-lg"
                />
            </div>
            </div>

            {/* FAQ Categories */}
            <div className="max-w-4xl mx-auto space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <HelpCircle className="w-6 h-6 text-blue-600 mr-3" />
                    {category.category}
                </h3>
                
                <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                    const currentIndex = questionIndex++;
                    const isOpen = openIndex === currentIndex;
                    
                    return (
                        <div
                        key={faqIndex}
                        className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-white/20"
                        >
                        <button
                            onClick={() => toggleFAQ(currentIndex)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50/50 transition-all group"
                        >
                            <span className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors pr-4">
                            {faq.question}
                            </span>
                            <ChevronDown
                            className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                                isOpen ? 'transform rotate-180 text-blue-600' : ''
                            }`}
                            />
                        </button>
                        
                        {isOpen && (
                            <div className="px-6 pb-5 animate-fade-in">
                            <div className="pt-4 border-t border-gray-200/50">
                                <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                                </p>
                            </div>
                            </div>
                        )}
                        </div>
                    );
                    })}
                </div>
                </div>
            ))}
            </div>

            {/* CTA Section */}
            {filteredFAQs.length === 0 && searchQuery && (
            <div className="text-center py-12 animate-fade-in-up">
            <p className="text-gray-600 text-lg mb-4">
                Aucune question trouvée pour "{searchQuery}"
            </p>
            <button
                onClick={() => setSearchQuery('')}
                className="text-blue-600 hover:text-blue-700 font-semibold"
            >
                Réinitialiser la recherche
            </button>
            </div>
            )}

            {/* Contact CTA */}
            <div className="mt-16 glass-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-pink-600/50 opacity-50"></div>
            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                    Vous avez d'autres questions ?
                </h3>
                <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                    Notre équipe est là pour vous aider. Contactez-nous directement par téléphone, WhatsApp ou email.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href={`tel:${config.contact.phone}`}
                    className="btn-modern bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center transform hover:-translate-y-1"
                    onClick={() => logEvent('FAQ', 'Phone Call', 'CTA')}
                >
                    Appeler maintenant
                </a>
                <button
                    onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                    }}
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center"
                >
                    Envoyer un message
                </button>
                </div>
            </div>
            </div>
            </div>
        </section>
    );
}

export default FAQ;

