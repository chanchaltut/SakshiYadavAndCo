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
        // Sakshi Yadav & Co. — Corporate Red & White
        brand: {
          50:  '#FDF2F4',
          100: '#FBE3E7',
          200: '#F5C2CA',
          300: '#EC94A2',
          400: '#DD5A6F',
          500: '#C01530',   // PRIMARY — refined corporate crimson
          600: '#9E0E25',   // hover / deeper red
          700: '#860B1F',
          800: '#6B0A1A',
          900: '#4D0713',
        },
        navy: {
          50:  '#F5F6FA',
          100: '#E8EBF2',
          200: '#CDD3E0',
          300: '#9CA5BA',
          400: '#6B7489',
          500: '#4A5268',
          600: '#2F3850',
          700: '#1B2540',
          800: '#0A132B',   // PRIMARY text / headings
          900: '#070E21',
          950: '#040817',
        },
        ivory: '#FBFAF7',
        paper: '#FFFFFF',
        line:  '#EDE7E8',
        muted: '#667085',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.16em',
      },
      boxShadow: {
        'soft':  '0 1px 2px rgba(10,19,43,0.04), 0 8px 24px -12px rgba(10,19,43,0.10)',
        'lift':  '0 2px 4px rgba(10,19,43,0.04), 0 24px 48px -20px rgba(10,19,43,0.22)',
        'brand': '0 12px 32px -12px rgba(192,21,48,0.45)',
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
