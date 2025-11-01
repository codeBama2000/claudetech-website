import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, Send, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { logFormSubmit, logEvent } from '../utils/analytics';
import config from '../config';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        device: '',
        issue: '',
        message: '',
        honeypot: '' // Anti-spam
    });
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
        ...prevData,
        [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
        setErrorMessage('Le nom est obligatoire');
        return false;
        }
        
        if (!formData.email.trim()) {
        setErrorMessage('L\'email est obligatoire');
        return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
        setErrorMessage('Format d\'email invalide');
        return false;
        }

        if (!formData.phone.trim()) {
        setErrorMessage('Le téléphone est obligatoire');
        return false;
        }

        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(formData.phone)) {
        setErrorMessage('Format de téléphone invalide');
        return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        
        // Protection anti-spam
        if (formData.honeypot) {
        console.log('🚫 Spam détecté');
        return;
        }

        // Validation
        if (!validateForm()) {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 4000);
        return;
        }

        setIsSubmitting(true);

        try {
        // Vérifier si EmailJS est configuré
        const isEmailJSConfigured = config.emailJS.serviceId && 
                                    config.emailJS.templateId && 
                                    config.emailJS.publicKey;

        if (!isEmailJSConfigured) {
            // MODE DÉMO - Simuler l'envoi
            console.log('📧 MODE DÉMO - EmailJS non configuré');
            console.log('📝 Données du formulaire:', {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            device: formData.device,
            issue: formData.issue,
            message: formData.message
            });
            
            // Simuler délai réseau
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setFormStatus('success');
            logFormSubmit('Contact Form - Demo Mode');
            
            // Réinitialiser après 3 secondes
            setTimeout(() => {
            setFormData({
                name: '', email: '', phone: '', 
                device: '', issue: '', message: '', honeypot: ''
            });
            setFormStatus('');
            }, 3000);
            
            return;
        }

        // MODE PRODUCTION - Envoi réel avec EmailJS
        await emailjs.send(
            config.emailJS.serviceId,
            config.emailJS.templateId,
            {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            device: formData.device,
            issue: formData.issue,
            message: formData.message,
            to_email: config.contact.email
            },
            config.emailJS.publicKey
        );

        console.log('✅ Email envoyé avec succès');
        setFormStatus('success');
        logFormSubmit('Contact Form');
        logEvent('Contact', 'Form Submit', 'Success');

        // Réinitialiser après 3 secondes
        setTimeout(() => {
            setFormData({
            name: '', email: '', phone: '', 
            device: '', issue: '', message: '', honeypot: ''
            });
            setFormStatus('');
        }, 3000);

        } catch (error) {
        console.error('❌ Erreur lors de l\'envoi:', error);
        setFormStatus('error');
        setErrorMessage('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.');
        logEvent('Contact', 'Form Submit', 'Error');
        setTimeout(() => {
            setFormStatus('');
            setErrorMessage('');
        }, 4000);
        } finally {
        setIsSubmitting(false);
        }
    };

    // [PERSONNALISABLE] - Coordonnées de contact
    const contactInfo = [
        {
        icon: MapPin,
        title: "Adresse",
        content: [config.contact.address, `${config.contact.city}, ${config.contact.country}`],
        link: `https://www.google.com/maps/search/?api=1&query=${config.contact.coordinates.lat},${config.contact.coordinates.lng}`
        },
        {
        icon: Phone,
        title: "Téléphone",
        content: [config.contact.phone, config.contact.phoneSecondary],
        link: `tel:${config.contact.phone}`
        },
        {
        icon: Mail,
        title: "Email",
        content: [config.contact.email],
        link: `mailto:${config.contact.email}`
        },
        {
        icon: Clock,
        title: "Horaires d'ouverture",
        content: [config.hours.weekdays, config.hours.saturday, config.hours.sunday],
        link: null
        }
    ];

    const advantages = [
        "Diagnostic gratuit en 15 minutes",
        "Pièces d'origine certifiées",
        "Garantie 6 mois sur toutes réparations",
        "Intervention rapide (30 min en moyenne)",
        "Équipe certifiée et expérimentée"
    ];

    const issueOptions = [
        { value: "", label: "Sélectionnez une option" },
        { value: "ecran", label: "Écran cassé" },
        { value: "batterie", label: "Problème de batterie" },
        { value: "eau", label: "Dégât des eaux" },
        { value: "charge", label: "Port de charge" },
        { value: "camera", label: "Caméra défectueuse" },
        { value: "logiciel", label: "Problème logiciel" },
        { value: "autre", label: "Autre" }
    ];

    return (
        <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Contactez-nous
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Demandez votre Devis Gratuit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Remplissez le formulaire ou appelez-nous directement. Réponse garantie en moins de 2 heures.
            </p>
            </div>

            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                {/* FORMULAIRE */}
                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Formulaire de contact
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Honeypot (caché - anti-spam) */}
                    <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                    />

                    {/* Nom */}
                    <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                        placeholder="Votre nom complet"
                        disabled={isSubmitting}
                    />
                    </div>

                    {/* Email */}
                    <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                        placeholder="votre.email@exemple.com"
                        disabled={isSubmitting}
                    />
                    </div>

                    {/* Téléphone */}
                    <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                        Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                        placeholder="+226 XX XX XX XX"
                        disabled={isSubmitting}
                    />
                    </div>

                    {/* Modèle d'appareil */}
                    <div>
                    <label htmlFor="device" className="block text-gray-700 font-semibold mb-2">
                        Modèle d'appareil
                    </label>
                    <input
                        type="text"
                        id="device"
                        name="device"
                        value={formData.device}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                        placeholder="Ex: iPhone 13, Samsung Galaxy S21"
                        disabled={isSubmitting}
                    />
                    </div>

                    {/* Type de panne */}
                    <div>
                    <label htmlFor="issue" className="block text-gray-700 font-semibold mb-2">
                        Type de panne
                    </label>
                    <select
                        id="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition appearance-none bg-white cursor-pointer"
                        disabled={isSubmitting}
                    >
                        {issueOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                        ))}
                    </select>
                    </div>

                    {/* Message */}
                    <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition resize-none"
                        placeholder="Décrivez votre problème en détail..."
                        disabled={isSubmitting}
                    ></textarea>
                    </div>

                    {/* Message de succès */}
                    {formStatus === 'success' && (
                    <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg flex items-start space-x-3 animate-fade-in">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <div>
                        <p className="font-semibold">Message envoyé avec succès !</p>
                        <p className="text-sm">Nous vous recontacterons dans les 2 heures.</p>
                        </div>
                    </div>
                    )}

                    {/* Message d'erreur */}
                    {formStatus === 'error' && (
                    <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg flex items-start space-x-3 animate-fade-in">
                        <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <div>
                        <p className="font-semibold">Erreur</p>
                        <p className="text-sm">{errorMessage || 'Veuillez vérifier tous les champs obligatoires.'}</p>
                        </div>
                    </div>
                    )}

                    {/* Bouton d'envoi */}
                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg font-semibold transition shadow-lg flex items-center justify-center space-x-2 ${
                        isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl'
                    }`}
                    >
                    {isSubmitting ? (
                        <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                            fill="none"
                            />
                            <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <span>Envoi en cours...</span>
                        </>
                    ) : (
                        <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer la demande</span>
                        </>
                    )}
                    </button>

                    {/* Note de confidentialité */}
                    <p className="text-xs text-gray-500 text-center">
                    🔒 Vos données sont protégées et ne seront jamais partagées avec des tiers.
                    </p>
                </form>
                </div>

                {/* INFORMATIONS DE CONTACT */}
                <div className="space-y-6">
                {/* Carte des informations */}
                <div className="bg-blue-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Informations de contact
                    </h3>
                    
                    <div className="space-y-5">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start space-x-4">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                            <info.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-gray-900 mb-1">
                            {info.title}
                            </p>
                            {info.link ? (
                            <a 
                                href={info.link}
                                target={info.icon === MapPin ? "_blank" : undefined}
                                rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                                className="text-gray-700 hover:text-blue-600 transition"
                            >
                                {info.content.map((line, idx) => (
                                <p key={idx} className="text-sm">
                                    {line}
                                </p>
                                ))}
                            </a>
                            ) : (
                            info.content.map((line, idx) => (
                                <p key={idx} className="text-gray-700 text-sm">
                                {line}
                                </p>
                            ))
                            )}
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Carte des avantages */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Pourquoi nous choisir ?
                    </h3>
                    <ul className="space-y-3">
                    {advantages.map((advantage, index) => (
                        <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{advantage}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Carte d'appel à l'action rapide */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-2xl shadow-xl">
                    <h3 className="text-xl font-bold mb-3">
                    Besoin d'une réparation urgente ?
                    </h3>
                    <p className="mb-4 opacity-90">
                    Appelez-nous directement pour une prise en charge immédiate.
                    </p>
                    <a 
                    href={`tel:${config.contact.phone}`}
                    onClick={() => logEvent('Contact', 'Phone Call', 'Urgent CTA')}
                    className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg w-full justify-center"
                    >
                    <Phone className="w-5 h-5" />
                    <span>{config.contact.phone}</span>
                    </a>
                </div>
                </div>
            </div>

            {/* Section carte Google Maps - [PERSONNALISER LES COORDONNÉES] */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Trouvez-nous facilement
                </h3>
                <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 shadow-xl">
                <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.1234567890!2d${config.contact.coordinates.lng}!3d${config.contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDEwJzQzLjUiTiA0wrAxNycxNS42Ilc!5e0!3m2!1sfr!2sbf!4v1234567890`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Localisation ${config.site.name}`}
                ></iframe>
                </div>
                <p className="text-center text-gray-600 mt-4">
                📍 {config.contact.address}, {config.contact.city}
                </p>
            </div>
            </div>
        </div>
        </section>
    );
    }

    export default Contact;