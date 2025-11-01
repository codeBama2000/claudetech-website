import React from 'react';
import { MessageCircle } from 'lucide-react';
import { logWhatsAppClick } from '../utils/analytics';
import config from '../config';

function WhatsAppButton() {
  // [PERSONNALISABLE] - Message WhatsApp par défaut
    const message = encodeURIComponent(
        `Bonjour ${config.site.name}, je souhaite un devis pour une réparation de téléphone.`
    );

    const handleClick = () => {
        logWhatsAppClick();
    };

    return (
        <a 
        href={`${config.social.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50 group animate-bounce"
        aria-label="Contactez-nous sur WhatsApp"
        >
        <MessageCircle className="w-7 h-7" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Discutez avec nous
        </span>
        
        {/* Notification badge (optionnel) */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
        </span>
        </a>
    );
    }

    export default WhatsAppButton;