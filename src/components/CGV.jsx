import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, CheckCircle } from 'lucide-react';
import config from '../config';

function CGV() {
    return (
        <>
            <Helmet>
                <title>Conditions Générales de Vente - {config.site.name}</title>
                <meta name="description" content="Conditions Générales de Vente de ClaudeTech - Réparation de téléphones mobiles à Bobo-Dioulasso" />
            </Helmet>
            
            <section id="cgv" className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* En-tête */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                <FileText className="w-8 h-8 text-blue-600" />
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Conditions Générales de Vente
                            </h1>
                            <p className="text-gray-600">
                                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>

                        {/* Contenu */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                            
                            {/* Article 1 - Objet */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 1 - Objet
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Les présentes Conditions Générales de Vente (CGV) régissent les relations entre {config.site.name}, 
                                    situé au {config.contact.address}, {config.contact.city}, {config.contact.country}, 
                                    et tout client souhaitant bénéficier de nos services de réparation de téléphones mobiles.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    Toute commande ou prestation de service implique l'acceptation sans réserve des présentes CGV.
                                </p>
                            </article>

                            {/* Article 2 - Services */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 2 - Services proposés
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    {config.site.name} propose les services suivants :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Réparation d'écrans de téléphones mobiles</li>
                                    <li>Changement de batteries</li>
                                    <li>Réparation de dégâts des eaux</li>
                                    <li>Réparation de connectiques (port de charge, écouteurs, etc.)</li>
                                    <li>Résolution de problèmes logiciels</li>
                                    <li>Réparation de caméras</li>
                                    <li>Autres services de réparation mobile</li>
                                </ul>
                            </article>

                            {/* Article 3 - Devis et acceptation */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 3 - Devis et acceptation
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Un devis gratuit et sans engagement est établi pour chaque intervention. Le devis est valable 
                                    pendant 30 jours à compter de sa date d'émission.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    L'acceptation du devis par le client vaut commande ferme et définitive. Toute modification 
                                    ou annulation après acceptation peut entraîner des frais supplémentaires.
                                </p>
                            </article>

                            {/* Article 4 - Prix */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 4 - Prix
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Les prix sont indiqués en francs CFA (FCFA) et sont valables pour les services décrits dans le devis.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Les prix peuvent être modifiés à tout moment, mais restent fermes pour les devis acceptés. 
                                    Toute intervention supplémentaire non prévue dans le devis initial fera l'objet d'un nouveau devis.
                                </p>
                            </article>

                            {/* Article 5 - Modalités de paiement */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 5 - Modalités de paiement
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Le paiement s'effectue selon les modalités suivantes :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Espèces (Cash)</li>
                                    <li>Mobile Money (Orange Money, Moov Money, etc.)</li>
                                    <li>Carte bancaire (selon disponibilité)</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    Le paiement est exigible à la livraison du téléphone réparé, sauf accord contraire écrit.
                                </p>
                            </article>

                            {/* Article 6 - Garantie */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 6 - Garantie
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    {config.site.name} garantit ses réparations pendant une période de 6 mois à compter de la date 
                                    de remise du téléphone réparé.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    La garantie couvre :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Les défauts de pièces détachées utilisées</li>
                                    <li>Les défauts de main-d'œuvre</li>
                                    <li>Les dysfonctionnements liés à la réparation effectuée</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    La garantie ne couvre pas :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Les dommages causés par une mauvaise utilisation</li>
                                    <li>Les dommages dus à une chute ou un choc</li>
                                    <li>Les dommages causés par l'eau ou l'humidité (sauf si c'est l'objet de la réparation)</li>
                                    <li>Les réparations effectuées par un tiers</li>
                                </ul>
                            </article>

                            {/* Article 7 - Délais */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 7 - Délais de réparation
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Les délais de réparation sont indiqués à titre indicatif et peuvent varier selon :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>La disponibilité des pièces détachées</li>
                                    <li>La complexité de la réparation</li>
                                    <li>Le volume de commandes en cours</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    En cas de retard, {config.site.name} s'engage à informer le client dans les plus brefs délais.
                                </p>
                            </article>

                            {/* Article 8 - Responsabilité */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 8 - Responsabilité
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    {config.site.name} s'engage à effectuer les réparations avec le plus grand soin et en utilisant 
                                    des pièces détachées de qualité.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    La responsabilité de {config.site.name} est limitée au montant de la prestation effectuée. 
                                    En aucun cas, {config.site.name} ne pourra être tenu responsable des dommages indirects 
                                    (perte de données, perte d'exploitation, etc.).
                                </p>
                            </article>

                            {/* Article 9 - Données personnelles */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 9 - Protection des données
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Les données personnelles collectées dans le cadre de nos services sont traitées conformément 
                                    à notre politique de confidentialité. Le client dispose d'un droit d'accès, de rectification 
                                    et de suppression de ses données personnelles.
                                </p>
                            </article>

                            {/* Article 10 - Litiges */}
                            <article className="border-b border-gray-200 pb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 10 - Litiges et médiation
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute 
                                    action judiciaire.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    À défaut d'accord amiable, tout litige relève de la compétence des tribunaux de 
                                    {config.contact.city}, {config.contact.country}.
                                </p>
                            </article>

                            {/* Article 11 - Droit applicable */}
                            <article>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    Article 11 - Droit applicable
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Les présentes CGV sont régies par le droit burkinabé. Toute clause déclarée nulle ne 
                                    remet pas en cause la validité des autres clauses.
                                </p>
                            </article>

                            {/* Contact */}
                            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Questions concernant nos CGV ?
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Pour toute question relative à nos Conditions Générales de Vente, n'hésitez pas à nous contacter :
                                </p>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>Email :</strong> <a href={`mailto:${config.contact.email}`} className="text-blue-600 hover:underline">{config.contact.email}</a></p>
                                    <p><strong>Téléphone :</strong> <a href={`tel:${config.contact.phone}`} className="text-blue-600 hover:underline">{config.contact.phone}</a></p>
                                    <p><strong>Adresse :</strong> {config.contact.address}, {config.contact.city}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CGV;

