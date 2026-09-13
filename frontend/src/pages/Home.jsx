import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Globe, Zap, Shield, Palette, Layers, Star, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingTable from '../components/ecommerce/PricingTable';
import FAQAccordion from '../components/common/FAQAccordion';
import TestimonialGrid from '../components/common/TestimonialGrid';

const features = [
  { icon: Sparkles, title: 'AI-Powered Intelligence', desc: 'Accelerate productivity with cutting-edge automated pipelines.' },
  { icon: Globe, title: 'Global Scale Ready', desc: 'Engineered for internationalization, multi-currency, and edge routing.' },
  { icon: Zap, title: 'Sub-Second Speeds', desc: 'Ultra-optimized bundle architecture with React 19 and Vite.' },
  { icon: Shield, title: 'Bank-Grade Security', desc: 'Built-in security audits, CSP headers, and enterprise encryption.' },
  { icon: Palette, title: 'Adaptive Design System', desc: 'Bespoke UI styling with fluid typography and smooth micro-interactions.' },
  { icon: Layers, title: 'Modular Architecture', desc: 'Scalable component design ready for rapid expansion and maintenance.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-400">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-24 pb-20 text-center lg:pt-32 lg:pb-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0,transparent_70%)]" />
          
          <div className="max-w-4xl mx-auto">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 shadow-inner">
              <Sparkles className="h-3.5 w-3.5" /> Next-Generation Platform
            </span>
            <h1 className="mb-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Elevate Your Digital Experience with <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-500 bg-clip-text text-transparent">generated-website-005</span>
            </h1>
            <p className="mb-10 max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
              Experience unparalleled performance, bespoke design aesthetics, and enterprise reliability all unified into one seamless ecosystem.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/25 transition-all active:scale-95"
              >
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-700 hover:bg-slate-800 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Bento Feature Grid */}
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Engineered for Excellence</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">Discover the core capabilities designed to drive high-impact results.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-7 hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialGrid />

        {/* Pricing Section */}
        <PricingTable />

        {/* FAQ Section */}
        <FAQAccordion />

        {/* Final Commercial CTA */}
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-900 via-slate-900/80 to-cyan-950/40 p-10 sm:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Ready to Accelerate with <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">generated-website-005</span>?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              Join thousands of creators, founders, and engineering teams building high-impact digital experiences.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-3.5 text-sm font-bold text-slate-950 hover:bg-cyan-400 shadow-xl shadow-cyan-500/20 active:scale-95 transition-all"
              >
                Get Started Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
