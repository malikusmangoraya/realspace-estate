import React, { Suspense, lazy } from 'react';
import './lib/theme'; // LUMICORE_DESIGN
import AppProviders from './lib/AppProviders'; // LUMICORE_PLATFORM
import MotionCanvas from './components/common/MotionCanvas'; // LUMICORE_MATRIX

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CookieConsent from './components/common/CookieConsent';
import ThemeCustomizer from './components/common/ThemeCustomizer';
import BuyTemplateBanner from './components/ecommerce/BuyTemplateBanner';

const Home = lazy(() => import('./pages/Home'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
    </div>
  );
}

export default function AppWithProviders() {
  return (
    <AppProviders>
      <App />
    </AppProviders>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MotionCanvas />
      {/* LUMICORE_MATRIX */}
      <BuyTemplateBanner templateName="generated-website-005" price="$49" />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <CookieConsent />
      <ThemeCustomizer />
    </BrowserRouter>
  );
}