/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        sacco: {
          blue: '#1a56db',
          indigo: '#4338ca',
          purple: '#7c3aed',
          gold: '#d97706',
          dark: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #1a56db 0%, #4338ca 50%, #7c3aed 100%)',
        'gradient-hero': 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #ede9fe 100%)',
        'gradient-card': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      },
      boxShadow: {
        'premium': '0 20px 60px -15px rgba(26, 86, 219, 0.3)',
        'card': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}