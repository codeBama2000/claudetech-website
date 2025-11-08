import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import config from '../config';

// Composants lazy-loaded
const Services = lazy(() => import('../components/Services'));
const Pricing = lazy(() => import('../components/Pricing'));
const Formations = lazy(() => import('../components/Formations'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));
const FAQ = lazy(() => import('../components/FAQ'));
const Blog = lazy(() => import('../components/Blog'));
const Hero = lazy(() => import('../components/Hero'));

// Composant de chargement
const SectionLoader = () => (
    <div className="py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
);

function Home() {
    return (
        <>
            <Helmet>
                <title>{config.site.name} - Réparation Téléphone {config.contact.city}</title>
                <meta name="description" content={config.site.description} />
                <link rel="canonical" href={config.site.url} />
            </Helmet>

            <Suspense fallback={<SectionLoader />}>
                <Hero />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <Services />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <Pricing />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <Formations />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <Testimonials />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <About />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <FAQ />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <Blog />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <Contact />
            </Suspense>
        </>
    );
}

export default Home;

