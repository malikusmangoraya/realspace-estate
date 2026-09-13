import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Megaphone, BarChart3, Cloud, Lock, Headphones, ArrowRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingTable from '../components/ecommerce/PricingTable';
import FAQAccordion from '../components/common/FAQAccordion';
import TestimonialGrid from '../components/common/TestimonialGrid';

const services = [
  { icon: Code, title: 'Fullstack Engineering', desc: 'Custom enterprise web platforms built with React 19, Vite, and high-performance backends.', perks: ['React 19 Architecture', 'Micro-interactions', 'Sub-second Loading'] },
  { icon: Megaphone, title: 'Growth & Marketing', desc: 'Comprehensive SEO automation, conversion optimization, and analytics tracking.', perks: ['Automated Meta SEO', 'OpenGraph Cards', 'Conversion Funnels'] },
  { icon: BarChart3, title: 'Data Analytics', desc: 'Actionable real-time intelligence and interactive data visualization suites.', perks: ['Interactive Charts', 'Custom Metrics', 'Automated Reports'] },
  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Zero-downtime deployment pipelines with edge CDN optimization and autoscaling.', perks: ['Global CDN', 'Automated Backups', '99.99% SLA'] },
  { icon: Lock, title: 'Security & Compliance', desc: 'Full audits including GDPR, HIPAA, SOC2 readiness, and encryption hardening.', perks: ['Penetration Testing', 'JWT Rotation', 'Access Control'] },
  { icon: Headphones, title: '24/7 Dedicated Support', desc: 'Continuous health monitoring, proactive patching, and rapid SLA assistance.', perks: ['Live Telemetry', 'Priority Response', 'Scheduled Audits'] },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-16 max-w-6xl mx-auto w-full">
        <section className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Capabilities</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Tailored Solutions for Your Growth</h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Every service is meticulously crafted to give your business an undeniable competitive edge in modern markets.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
              <div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mb-6 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                  {s.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                Inquire Now <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
