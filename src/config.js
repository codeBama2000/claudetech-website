// ===================================
// CONFIGURATION GLOBALE - À PERSONNALISER
// ===================================

const config = {
  // Informations du site
    site: {
        name: import.meta.env.VITE_SITE_NAME || 'ClaudeTech',
        url: import.meta.env.VITE_SITE_URL || 'http://localhost:3000',
        description: 'Expert en réparation de téléphones mobiles à Bobo-Dioulasso',
        keywords: 'réparation téléphone, Bobo-Dioulasso, iPhone, Samsung, écran cassé'
    },

    // Coordonnées de contact - [À REMPLACER]
    contact: {
        email: import.meta.env.VITE_CONTACT_EMAIL || 'contact@claudetech.bf',
        phone: import.meta.env.VITE_CONTACT_PHONE || '+226 72 68 81 03',
        phoneSecondary: import.meta.env.VITE_CONTACT_PHONE_SECONDARY || '+226 72 68 81 03',
        address: import.meta.env.VITE_CONTACT_ADDRESS || 'Rue 25.115, Secteur 25',
        city: import.meta.env.VITE_CONTACT_CITY || 'Bobo-Dioulasso',
        country: import.meta.env.VITE_CONTACT_COUNTRY || 'Burkina Faso',
        // Coordonnées GPS - [À REMPLACER PAR VOS COORDONNÉES]
        coordinates: {
        lat: 11.162638,
        lng: -4.246431
        }
    },

    // Configuration EmailJS (optionnel)
    emailJS: {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
    },

    // Configuration Google Analytics (optionnel)
    analytics: {
        trackingId: import.meta.env.VITE_GA_TRACKING_ID || ''
    },

    // Réseaux sociaux - [À REMPLACER PAR VOS LIENS]
    social: {
        facebook: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com/claudetech',
        instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/claudetech',
        twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/claudetech',
        tiktok: import.meta.env.VITE_TIKTOK_URL || 'https://tiktok.com/@claudetech',
        youtube: import.meta.env.VITE_YOUTUBE_URL || 'https://youtube.com/@claudetech',
        telegram: import.meta.env.VITE_TELEGRAM_URL || 'https://t.me/claudetech',
        whatsapp: `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '22672688103'}`
    },

    // Horaires d'ouverture - [À PERSONNALISER]
    hours: {
        weekdays: 'Lundi - Vendredi : 8h - 18h',
        saturday: 'Samedi : 9h - 17h',
        sunday: 'Dimanche : Fermé'
    }
};

export default config;