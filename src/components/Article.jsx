import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { logEvent } from '../utils/analytics';

function Article({ article }) {
    // Pour l'instant, on utilise un système simple sans React Router
    // Vous pouvez l'adapter selon vos besoins

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.excerpt,
                url: window.location.href
            });
        } else {
            // Fallback : copier le lien
            navigator.clipboard.writeText(window.location.href);
            alert('Lien copié dans le presse-papiers !');
        }
        logEvent('Blog', 'Share Article', article.title);
    };

    return (
        <article className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
            >
            <ArrowLeft className="w-5 h-5" />
            Retour au blog
            </button>

            {/* Article Header */}
            <header className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
                </span>
                <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
                </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                {article.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                {tag}
                </span>
            ))}
            </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover"
                loading="eager"
                onError={(e) => {
                    if (e.currentTarget.src !== `${window.location.origin}/images/placeholder.webp`) {
                        e.currentTarget.src = '/images/placeholder.webp';
                    } else {
                        e.currentTarget.style.display = 'none';
                    }
                }}
            />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg">
                {/* Ici vous pouvez ajouter le contenu complet de l'article */}
                <p className="text-xl text-gray-600 mb-6 font-semibold">
                {article.excerpt}
                </p>
                
                <p className="mb-4">
                {article.content || "Contenu complet de l'article à venir..."}
                </p>
                
                {/* Vous pouvez ajouter plus de contenu ici */}
            </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
                <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                <Share2 className="w-5 h-5" />
                Partager l'article
                </button>
            </div>
            </div>
        </div>
        </article>
    );
}

export default Article;

