/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        // Sakshi Yadav & Co. — Ink & Antique Gold
        ink: {
          50:  '#F3F5F9',
          100: '#E3E8F0',
          200: '#C3CCDA',
          300: '#94A2B8',
          400: '#5F7190',
          500: '#3B4D6B',
          600: '#22355A',
          700: '#142847',
          800: '#0D1F3A',   // PRIMARY
          900: '#08162B',
          950: '#050E1C',
        },
        gold: {
          50:  '#FBF7EF',
          100: '#F4EBD8',
          200: '#E8D5B0',
          300: '#D9BC85',
          400: '#C9A465',
          500: '#B08D57',   // PRIMARY ACCENT
          600: '#957443',
          700: '#775B35',   // accessible gold text on light backgrounds
          800: '#5A4429',
          900: '#3E2F1D',
        },
        ivory: '#F8F5EF',
        paper: '#FFFDF9',
        line:  '#E8E1D4',
        muted: '#5B6577',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans:  ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      boxShadow: {
        'soft':  '0 1px 2px rgba(13,31,58,0.04), 0 8px 24px -12px rgba(13,31,58,0.12)',
        'lift':  '0 2px 4px rgba(13,31,58,0.04), 0 24px 48px -20px rgba(13,31,58,0.28)',
        'gold':  '0 10px 30px -12px rgba(176,141,87,0.55)',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
