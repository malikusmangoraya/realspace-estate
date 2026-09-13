/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#06b6d4', foreground: '#ffffff' },
        secondary: { DEFAULT: '#8b5cf6', foreground: '#ffffff' },
        accent: { DEFAULT: '#f59e0b', foreground: '#000000' },
        muted: { DEFAULT: '#1e293b', foreground: '#94a3b8' },
        card: { DEFAULT: '#0f172a', foreground: '#e2e8f0' },
        border: '#1e293b',
      },
    },
  },
  plugins: [],
};
