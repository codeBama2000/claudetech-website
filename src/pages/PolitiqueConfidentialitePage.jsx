import React, { Suspense, lazy } from 'react';
import Layout from '../components/Layout';

const PolitiqueConfidentialite = lazy(() => import('../components/PolitiqueConfidentialite'));

const PageLoader = () => (
    <div className="py-20 flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
);

function PolitiqueConfidentialitePage() {
    return (
        <Layout>
            <Suspense fallback={<PageLoader />}>
                <PolitiqueConfidentialite />
            </Suspense>
        </Layout>
    );
}

export default PolitiqueConfidentialitePage;

