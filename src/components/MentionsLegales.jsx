import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, Building2 } from 'lucide-react';
import config from '../config';

function MentionsLegales() {
    return (
        <>
            <Helmet>
                <title>Mentions Légales - {config.site.name}</title>
                <meta name="description" content="Mentions légales de ClaudeTech - Réparation de téléphones mobiles à Bobo-Dioulasso" />
            </Helmet>
            
            <section id="mentions-legales" className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* En-tête */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                <Scale className="w-8 h-8 text-blue-600" />
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Mentions Légales
                            </h1>
                            <p className="text-gray-600">
                                Conformément aux dispositions légales en vigueur au Burkina Faso
                            </p>
                        </div>

                        {/* Contenu */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                            
                            {/* Éditeur du site */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Building2 className="w-6 h-6 text-blue-600 mr-2" />
                                    1. Éditeur du site
                                </h2>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>Raison sociale :</strong> {config.site.name}</p>
                                    <p><strong>Adresse :</strong> {config.contact.address}, {config.contact.city}, {config.contact.country}</p>
                                    <p><strong>Téléphone :</strong> <a href={`tel:${config.contact.phone}`} className="text-blue-600 hover:underline">{config.contact.phone}</a></p>
                                    <p><strong>Email :</strong> <a href={`mailto:${config.contact.email}`} className="text-blue-600 hover:underline">{config.contact.email}</a></p>
                                    <p><strong>Site web :</strong> <a href={config.site.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{config.site.url}</a></p>
                                </div>
                            </article>

                            {/* Directeur de publication */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    2. Directeur de publication
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Le directeur de publication est le représentant légal de {config.site.name}.
                                </p>
                            </article>

                            {/* Hébergement */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    3. Hébergement du site
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Ce site est hébergé par :
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-gray-700">
                                        <strong>Vercel Inc.</strong><br />
                                        340 S Lemon Ave #4133<br />
                                        Walnut, CA 91789<br />
                                        États-Unis<br />
                                        Site web : <a href="https://vercel.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
                                    </p>
                                </div>
                            </article>

                            {/* Propriété intellectuelle */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    4. Propriété intellectuelle
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété 
                                    exclusive de {config.site.name} ou de ses partenaires et est protégé par les lois sur la propriété 
                                    intellectuelle.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
                                    éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation 
                                    écrite préalable de {config.site.name}.
                                </p>
                            </article>

                            {/* Données personnelles */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    5. Données personnelles
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Conformément à la loi sur la protection des données personnelles, vous disposez d'un droit d'accès, 
                                    de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : 
                                    <a href={`mailto:${config.contact.email}`} className="text-blue-600 hover:underline ml-1">{config.contact.email}</a>
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    Pour plus d'informations, consultez notre 
                                    <a href="/politique-confidentialite" className="text-blue-600 hover:underline ml-1">Politique de Confidentialité</a>.
                                </p>
                            </article>

                            {/* Cookies */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    6. Cookies
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic du site.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à notre 
                                    politique de confidentialité.
                                </p>
                            </article>

                            {/* Liens externes */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    7. Liens externes
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Ce site peut contenir des liens vers d'autres sites web. {config.site.name} n'exerce aucun contrôle 
                                    sur ces sites et décline toute responsabilité quant à leur contenu ou leur accessibilité.
                                </p>
                            </article>

                            {/* Limitation de responsabilité */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    8. Limitation de responsabilité
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    {config.site.name} s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées 
                                    sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Toutefois, {config.site.name} ne peut garantir l'exactitude, la précision ou l'exhaustivité des 
                                    informations mises à disposition sur ce site. En conséquence, {config.site.name} décline toute 
                                    responsabilité pour toute imprécision, inexactitude ou omission concernant les informations 
                                    disponibles sur ce site.
                                </p>
                            </article>

                            {/* Droit applicable */}
                            <article>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    9. Droit applicable et juridiction compétente
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Les présentes mentions légales sont régies par le droit burkinabé.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents 
                                    de {config.contact.city}, {config.contact.country}.
                                </p>
                            </article>

                            {/* Contact */}
                            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Contact
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                                </p>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>Email :</strong> <a href={`mailto:${config.contact.email}`} className="text-blue-600 hover:underline">{config.contact.email}</a></p>
                                    <p><strong>Téléphone :</strong> <a href={`tel:${config.contact.phone}`} className="text-blue-600 hover:underline">{config.contact.phone}</a></p>
                                    <p><strong>Adresse :</strong> {config.contact.address}, {config.contact.city}, {config.contact.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MentionsLegales;

