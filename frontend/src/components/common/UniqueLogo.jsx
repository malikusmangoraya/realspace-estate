import React from 'react';
import { Link } from 'react-router-dom';

export default function UniqueLogo({ name = 'LuminaCore', size = 'md' }) {
  const sz = { sm: 24, md: 32, lg: 40 }[size] || 32;
  const words = name.split(/(?=[A-Z])|\s+/).filter(Boolean);
  const primaryWord = words[0] || name;
  const accentWord = words.slice(1).join('') || '';

  return (
    <Link to="/" className="inline-flex items-center gap-2.5 select-none transition-opacity hover:opacity-90">
      <svg viewBox="0 0 48 48" width={sz} height={sz} className="shrink-0" fill="none">
        <defs>
          <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" />
          </linearGradient>
        </defs>
        <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="url(#brand-grad)" opacity="0.95" />
        <polygon points="24,12 34,18 34,30 24,36 14,30 14,18" fill="white" opacity="0.9" />
        <polygon points="24,18 29,21 29,27 24,30 19,27 19,21" fill="url(#brand-grad)" />
      </svg>
      <span className="font-extrabold text-xl tracking-tight text-white font-sans">
        {primaryWord}
        {accentWord && <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent ml-0.5">{accentWord}</span>}
      </span>
    </Link>
  );
}