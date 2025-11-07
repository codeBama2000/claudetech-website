import React, { useState } from 'react';
import { Calendar, Clock, User, Search, Tag, ArrowRight } from 'lucide-react';
import { logEvent } from '../utils/analytics';

function Blog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    // [PERSONNALISABLE] - Modifier les articles selon vos besoins
    const articles = [
        {
            id: 1,
            title: "Comment protéger votre téléphone de l'eau ?",
            excerpt: "Découvrez les meilleures pratiques pour protéger votre téléphone des dégâts des eaux et que faire en cas d'immersion accidentelle.",
            content: "Contenu complet de l'article...",
            author: "ClaudeTech",
            date: "2025-01-15",
            readTime: "5 min",
            category: "Conseils",
            tags: ["Protection", "Eau", "Prévention"],
            image: "/images/services/water-damage.webp",
            featured: true
        },
        {
            id: 2,
            title: "Quand changer la batterie de votre téléphone ?",
            excerpt: "Signes avant-coureurs d'une batterie défectueuse et quand il est temps de la remplacer pour éviter les pannes soudaines.",
            content: "Contenu complet de l'article...",
            author: "ClaudeTech",
            date: "2025-01-10",
            readTime: "4 min",
            category: "Maintenance",
            tags: ["Batterie", "Entretien", "Diagnostic"],
            image: "/images/services/battery.webp",
            featured: false
        },
        {
            id: 3,
            title: "Écran cassé : réparation ou remplacement ?",
            excerpt: "Guide complet pour savoir si votre écran peut être réparé ou s'il doit être remplacé, et les options disponibles.",
            content: "Contenu complet de l'article...",
            author: "ClaudeTech",
            date: "2025-01-05",
            readTime: "6 min",
            category: "Réparation",
            tags: ["Écran", "Réparation", "Guide"],
            image: "/images/services/screen-repair.webp",
            featured: false
        },
        {
            id: 4,
            title: "Formation en réparation mobile : par où commencer ?",
            excerpt: "Guide pour débuter dans la réparation mobile : compétences nécessaires, outils requis, et formations disponibles.",
            content: "Contenu complet de l'article...",
            author: "ClaudeTech",
            date: "2024-12-28",
            readTime: "7 min",
            category: "Formation",
            tags: ["Formation", "Carrière", "Débutant"],
            image: "/images/services/software.webp",
            featured: false
        },
        {
            id: 5,
            title: "Problèmes de charge : diagnostic et solutions",
            excerpt: "Comment identifier et résoudre les problèmes de charge de votre téléphone : port de charge, câble, ou batterie.",
            content: "Contenu complet de l'article...",
            author: "ClaudeTech",
            date: "2024-12-20",
            readTime: "5 min",
            category: "Réparation",
            tags: ["Charge", "Diagnostic", "Dépannage"],
            image: "/images/services/charging-port.webp",
            featured: false
        },
        {
            id: 6,
            title: "Choisir entre écran LCD et OLED : guide complet",
            excerpt: "Comparaison entre écrans LCD et OLED : avantages, inconvénients, et quel type choisir pour votre téléphone.",
            content: "Contenu complet de l'article...",
            author: "ClaudeTech",
            date: "2024-12-15",
            readTime: "6 min",
            category: "Conseils",
            tags: ["Écran", "LCD", "OLED", "Comparaison"],
            image: "/images/services/screen-repair.webp",
            featured: false
        }
    ];

    const categories = ['Tous', ...new Set(articles.map(article => article.category))];

    // Filtrer les articles
    const filteredArticles = articles.filter(article => {
        const matchesSearch = 
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    const featuredArticle = articles.find(article => article.featured);
    const regularArticles = filteredArticles.filter(article => !article.featured || article.id !== featuredArticle?.id);

    const handleArticleClick = (articleId) => {
        logEvent('Blog', 'Article Click', `Article ${articleId}`);
        // Ici vous pouvez ajouter la navigation vers la page d'article
        // Pour l'instant, on affiche juste l'article dans une modal ou on scroll
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    return (
        <section id="blog" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block glass px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-lg border border-white/20">
                <span className="gradient-text-blue">Blog & Actualités</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Nos <span className="gradient-text-blue">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conseils, guides et actualités sur la réparation mobile et l'entretien de vos appareils
            </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 glass rounded-xl border border-white/20 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-lg"
                />
                </div>
                
                {/* Category Filter */}
                <div className="relative">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none glass px-6 py-4 rounded-xl border border-white/20 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-lg cursor-pointer pr-10"
                >
                    {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <Tag className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
            </div>
            </div>

            {/* Featured Article */}
            {featuredArticle && !searchQuery && selectedCategory === 'Tous' && (
            <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
            <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-white/20 group card-hover">
                <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                    <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                        if (e.currentTarget.src !== `${window.location.origin}/images/placeholder.webp`) {
                            e.currentTarget.src = '/images/placeholder.webp';
                        } else {
                            e.currentTarget.style.display = 'none';
                        }
                    }}
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Article à la une
                    </div>
                </div>
                <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredArticle.date)}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                    </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {featuredArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                    {featuredArticle.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {featuredArticle.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {tag}
                        </span>
                    ))}
                    </div>
                    <button
                    onClick={() => handleArticleClick(featuredArticle.id)}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold group-hover:translate-x-1 transition-all"
                    >
                    Lire l'article <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
                </div>
            </div>
            </div>
            )}

            {/* Articles Grid */}
            <div className="max-w-6xl mx-auto">
            {regularArticles.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map((article, index) => (
                    <article
                    key={article.id}
                    className="glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-white/20 group card-hover animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    >
                    <div className="relative h-48 overflow-hidden">
                        <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                            if (e.currentTarget.src !== `${window.location.origin}/images/placeholder.webp`) {
                                e.currentTarget.src = '/images/placeholder.webp';
                            } else {
                                e.currentTarget.style.display = 'none';
                            }
                        }}
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                        {article.category}
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-4 mb-3 text-xs text-gray-600">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                        </span>
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {article.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                            {tag}
                            </span>
                        ))}
                        </div>
                        <button
                        onClick={() => handleArticleClick(article.id)}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold group-hover:translate-x-1 transition-all"
                        >
                        Lire plus <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    </article>
                ))}
                </div>
            ) : (
                <div className="text-center py-12 animate-fade-in-up">
                <p className="text-gray-600 text-lg mb-4">
                    Aucun article trouvé pour "{searchQuery}" dans la catégorie "{selectedCategory}"
                </p>
                <button
                    onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Tous');
                    }}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                    Réinitialiser les filtres
                </button>
                </div>
            )}
            </div>
            </div>
        </section>
    );
}

export default Blog;

