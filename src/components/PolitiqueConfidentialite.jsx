import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';
import config from '../config';

function PolitiqueConfidentialite() {
    return (
        <>
            <Helmet>
                <title>Politique de Confidentialité - {config.site.name}</title>
                <meta name="description" content="Politique de confidentialité de ClaudeTech - Protection des données personnelles" />
            </Helmet>
            
            <section id="politique-confidentialite" className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* En-tête */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                <Shield className="w-8 h-8 text-blue-600" />
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Politique de Confidentialité
                            </h1>
                            <p className="text-gray-600">
                                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>

                        {/* Contenu */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                            
                            {/* Introduction */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Lock className="w-6 h-6 text-blue-600 mr-2" />
                                    Introduction
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    {config.site.name} s'engage à protéger la confidentialité et la sécurité des données personnelles 
                                    de ses clients et visiteurs. Cette politique de confidentialité explique comment nous collectons, 
                                    utilisons, stockons et protégeons vos informations personnelles.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    En utilisant notre site web ou nos services, vous acceptez les pratiques décrites dans cette 
                                    politique de confidentialité.
                                </p>
                            </article>

                            {/* Données collectées */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Eye className="w-6 h-6 text-blue-600 mr-2" />
                                    1. Données personnelles collectées
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Nous collectons les données personnelles suivantes :
                                </p>
                                <div className="space-y-3">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Données d'identification :</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                                            <li>Nom et prénom</li>
                                            <li>Adresse email</li>
                                            <li>Numéro de téléphone</li>
                                            <li>Adresse postale (si nécessaire pour la livraison)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Données techniques :</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                                            <li>Adresse IP</li>
                                            <li>Type de navigateur</li>
                                            <li>Pages visitées</li>
                                            <li>Date et heure de connexion</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Données de réparation :</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                                            <li>Type d'appareil</li>
                                            <li>Problème rencontré</li>
                                            <li>Historique des réparations</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>

                            {/* Utilisation des données */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    2. Utilisation des données personnelles
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Vos données personnelles sont utilisées pour les finalités suivantes :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Traiter vos demandes de réparation et vous fournir nos services</li>
                                    <li>Vous contacter concernant vos réparations (devis, statut, livraison)</li>
                                    <li>Améliorer nos services et votre expérience client</li>
                                    <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                                    <li>Respecter nos obligations légales et réglementaires</li>
                                    <li>Prévenir la fraude et assurer la sécurité de nos services</li>
                                    <li>Analyser l'utilisation de notre site web pour l'améliorer</li>
                                </ul>
                            </article>

                            {/* Base légale */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    3. Base légale du traitement
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Le traitement de vos données personnelles est basé sur :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li><strong>Votre consentement</strong> : pour les communications marketing et les cookies non essentiels</li>
                                    <li><strong>L'exécution d'un contrat</strong> : pour la fourniture de nos services de réparation</li>
                                    <li><strong>Notre intérêt légitime</strong> : pour améliorer nos services et prévenir la fraude</li>
                                    <li><strong>Les obligations légales</strong> : pour respecter la réglementation en vigueur</li>
                                </ul>
                            </article>

                            {/* Conservation des données */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    4. Conservation des données
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités 
                                    pour lesquelles elles ont été collectées :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li><strong>Données clients actifs</strong> : pendant la durée de la relation commerciale</li>
                                    <li><strong>Données de réparation</strong> : 3 ans après la dernière intervention (garantie légale)</li>
                                    <li><strong>Données de prospection</strong> : 3 ans à compter du dernier contact</li>
                                    <li><strong>Données de connexion</strong> : 12 mois maximum</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    Passé ces délais, vos données sont supprimées ou anonymisées.
                                </p>
                            </article>

                            {/* Partage des données */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    5. Partage et communication des données
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Vos données personnelles ne sont pas vendues, louées ou partagées avec des tiers à des fins commerciales.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Nous pouvons partager vos données uniquement dans les cas suivants :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li><strong>Prestataires de services</strong> : avec nos partenaires techniques (hébergement, email) sous contrat strict</li>
                                    <li><strong>Obligations légales</strong> : si la loi l'exige ou en réponse à une demande judiciaire</li>
                                    <li><strong>Protection de nos droits</strong> : pour protéger nos droits, notre propriété ou notre sécurité</li>
                                </ul>
                            </article>

                            {/* Sécurité */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    6. Sécurité des données
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                                    vos données personnelles contre :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>L'accès non autorisé</li>
                                    <li>La perte ou la destruction accidentelle</li>
                                    <li>La modification ou la divulgation non autorisée</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est 
                                    totalement sécurisée. Bien que nous nous efforcions d'utiliser des moyens commercialement 
                                    acceptables pour protéger vos données, nous ne pouvons garantir leur sécurité absolue.
                                </p>
                            </article>

                            {/* Vos droits */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <UserCheck className="w-6 h-6 text-blue-600 mr-2" />
                                    7. Vos droits
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Conformément à la réglementation sur la protection des données, vous disposez des droits suivants :
                                </p>
                                <div className="space-y-3">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Droit d'accès</h3>
                                        <p className="text-gray-700 text-sm">Vous pouvez demander une copie de vos données personnelles.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Droit de rectification</h3>
                                        <p className="text-gray-700 text-sm">Vous pouvez demander la correction de données inexactes ou incomplètes.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Droit à l'effacement</h3>
                                        <p className="text-gray-700 text-sm">Vous pouvez demander la suppression de vos données dans certains cas.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Droit d'opposition</h3>
                                        <p className="text-gray-700 text-sm">Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Droit à la portabilité</h3>
                                        <p className="text-gray-700 text-sm">Vous pouvez demander la transmission de vos données à un autre prestataire.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Droit de retirer votre consentement</h3>
                                        <p className="text-gray-700 text-sm">Vous pouvez retirer votre consentement à tout moment pour les traitements basés sur le consentement.</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    Pour exercer ces droits, contactez-nous à l'adresse : 
                                    <a href={`mailto:${config.contact.email}`} className="text-blue-600 hover:underline ml-1">{config.contact.email}</a>
                                </p>
                            </article>

                            {/* Cookies */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    8. Cookies et technologies similaires
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont 
                                    de petits fichiers texte stockés sur votre appareil.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Types de cookies utilisés :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li><strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
                                    <li><strong>Cookies analytiques</strong> : pour analyser l'utilisation du site (Google Analytics)</li>
                                    <li><strong>Cookies de préférences</strong> : pour mémoriser vos choix</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                                </p>
                            </article>

                            {/* Modifications */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    9. Modifications de la politique
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                                    Les modifications seront publiées sur cette page avec une mise à jour de la date de dernière 
                                    modification. Nous vous encourageons à consulter régulièrement cette page pour rester informé 
                                    de la façon dont nous protégeons vos données.
                                </p>
                            </article>

                            {/* Contact */}
                            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Contact - Délégué à la protection des données
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                                    contactez-nous :
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

export default PolitiqueConfidentialite;

