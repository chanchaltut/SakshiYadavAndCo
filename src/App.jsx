import React, { lazy, Suspense, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DisclaimerModal from './components/DisclaimerModal';
import FloatingActions from './components/FloatingActions';
import LogoLoader from './components/LogoLoader';
import Home from './pages/Home';

// Lazy load non-critical pages
const AboutUs         = lazy(() => import('./pages/AboutUs'));
const Contact         = lazy(() => import('./pages/Contact'));
const Insights        = lazy(() => import('./pages/Insights'));
const BlogPost        = lazy(() => import('./pages/BlogPost'));
const PrivacyPolicy   = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const ServicePage     = lazy(() => import('./pages/services/ServicePage'));
const NotFound        = lazy(() => import('./pages/NotFound'));

const LOADER_KEY = 'syc_loader_seen';

const loaderSeen = () => {
  try { return sessionStorage.getItem(LOADER_KEY) === '1'; } catch { return true; }
};

// Fallback for lazy-loaded routes
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-ink-900">
    <span className="h-10 w-10 animate-spin rounded-full border-2 border-gold-400 border-t-transparent" role="status" aria-label="Loading" />
  </div>
);

function App() {
  const [showLoader, setShowLoader] = useState(() => !loaderSeen());

  const handleLoaderDone = () => {
    setShowLoader(false);
    try { sessionStorage.setItem(LOADER_KEY, '1'); } catch { /* storage unavailable */ }
  };

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[400] focus:rounded-full focus:bg-paper focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:shadow-lift">
        Skip to content
      </a>
      {showLoader && <LogoLoader onDone={handleLoaderDone} />}
      {!showLoader && <DisclaimerModal />}
      <ScrollToTop />
      <Navbar />

      <main id="main">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                  element={<Home />} />
            <Route path="/about"             element={<AboutUs />} />
            <Route path="/contact"           element={<Contact />} />
            <Route path="/blog"              element={<Insights />} />
            <Route path="/blog/:slug"        element={<BlogPost />} />
            <Route path="/insights"          element={<Navigate to="/blog" replace />} />
            <Route path="/services/:slug"    element={<ServicePage />} />
            <Route path="/privacy-policy"    element={<PrivacyPolicy />} />
            <Route path="/terms-conditions"  element={<TermsConditions />} />
            <Route path="*"                  element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

export default App;
