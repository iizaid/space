import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: 'var(--color-orange)',
        green: 'var(--color-green)',
        cream: 'var(--color-cream)',
        charcoal: 'var(--color-charcoal)',
        brown: 'var(--color-brown)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(31, 58, 45, 0.12)',
        card: '0 18px 50px rgba(31, 58, 45, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
