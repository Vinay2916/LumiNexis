/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#dce8ff',
          200: '#b9d0ff',
          300: '#84adff',
          400: '#4d7fff',
          500: '#1a52ff',
          600: '#0033f5',
          700: '#0026d6',
          800: '#0020ae',
          900: '#001c8a',
          950: '#000d52',
        },
        accent: '#00d4ff',
        'accent-2': '#7c3aed',
        surface: {
          dark:  '#050a14',
          darkAlt: '#0a1628',
          light: '#f8fafc',
          lightAlt: '#eef2f7',
        },
      },
      animation: {
        'fade-in':    'fadeIn 0.8s ease forwards',
        'slide-up':   'slideUp 0.8s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:    { from: { opacity: '0' },                  to: { opacity: '1' } },
        slideUp:   { from: { opacity: '0', transform: 'translateY(40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        glowPulse: { '0%,100%': { opacity: '0.4' },           '50%': { opacity: '1' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      backgroundImage: {
        'grid-dark':  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(26,82,255,0.08)' stroke-width='1'/%3E%3C/svg%3E\")",
        'grid-light': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(26,82,255,0.12)' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
