// ===================================
// GOOGLE ANALYTICS - Configuration
// ===================================

import ReactGA from 'react-ga4';
import config from '../config';

const TRACKING_ID = config.analytics.trackingId;

// Initialiser Google Analytics
export const initGA = () => {
    if (TRACKING_ID && TRACKING_ID !== '') {
        try {
        ReactGA.initialize(TRACKING_ID);
        console.log('✅ Google Analytics initialisé');
        } catch (error) {
        console.log('⚠️ Erreur initialisation Analytics:', error);
        }
    } else {
        console.log('ℹ️ Google Analytics non configuré (mode développement)');
    }
    };

    // Logger une page vue
    export const logPageView = () => {
    if (TRACKING_ID && TRACKING_ID !== '') {
        try {
        ReactGA.send({ 
            hitType: 'pageview', 
            page: window.location.pathname + window.location.search
        });
        } catch (error) {
        console.log('Erreur pageview:', error);
        }
    }
    };

    // Logger un événement
    export const logEvent = (category, action, label) => {
    if (TRACKING_ID && TRACKING_ID !== '') {
        try {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
        } catch (error) {
        console.log('Erreur event:', error);
        }
    }
    };

    // Logger soumission formulaire
    export const logFormSubmit = (formName) => {
    logEvent('Form', 'Submit', formName);
    };

    // Logger clic bouton
    export const logButtonClick = (buttonName) => {
    logEvent('Button', 'Click', buttonName);
    };

    // Logger appel téléphonique
    export const logPhoneCall = () => {
    logEvent('Contact', 'Phone Call', 'Header Phone Button');
    };

    // Logger clic WhatsApp
    export const logWhatsAppClick = () => {
    logEvent('Contact', 'WhatsApp Click', 'Floating Button');
    };
    