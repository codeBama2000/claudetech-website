import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { logEvent } from '../utils/analytics';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
        logEvent('UX', 'Scroll to Top', 'Button Click');
    };

    return (
        <>
        {isVisible && (
            <button
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 hover:scale-110 group"
            aria-label="Retour en haut"
            >
            <ArrowUp className="w-6 h-6" />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Haut de page
            </span>
            </button>
        )}
        </>
    );
    }

    export default ScrollToTop;