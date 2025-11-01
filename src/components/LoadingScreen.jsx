import React from 'react';
import { Phone } from 'lucide-react';
import config from '../config';

function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center">
            {/* Logo animé */}
            <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-20"></div>
            <div className="relative bg-blue-100 p-6 rounded-full">
                <Phone className="w-16 h-16 text-blue-600 animate-pulse" />
            </div>
            </div>
            
            {/* Nom de l'entreprise */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{config.site.name}</h2>
            <p className="text-gray-600 mb-6">Réparation de téléphones</p>
            
            {/* Loader points */}
            <div className="flex space-x-2 justify-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
        </div>
        </div>
    );
    }

    export default LoadingScreen;