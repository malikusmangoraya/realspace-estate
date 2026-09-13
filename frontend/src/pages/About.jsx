import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Target, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingTable from '../components/ecommerce/PricingTable';
import FAQAccordion from '../components/common/FAQAccordion';
import TestimonialGrid from '../components/common/TestimonialGrid';

const values = [
  { icon: Heart, title: 'Client-Centric', desc: 'We place your mission and customer satisfaction at the heart of everything we build.' },
  { icon: Target, title: 'Data Driven', desc: 'Precision-crafted strategies supported by real-world metrics and analytics.' },
  { icon: Users, title: 'Collaborative Spirit', desc: 'Transparent partnership fostering innovation and rapid iteration.' },
  { icon: Award, title: 'Craftsmanship', desc: 'Pixel-perfect UI design, accessible markup, and uncompromising quality.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-16 max-w-6xl mx-auto w-full">
        <section className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Dedicated to Building the Future</h1>
          <p className="text-slate-400 text-base leading-relaxed">
            generated-website-005 combines technical precision with thoughtful design to deliver digital products that scale reliably and inspire trust.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">Our Guiding Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">{v.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
