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
        'space-dark': '#0E0F1B',
        'paper-white': '#F4F7FA',
        'hacker-bg': '#0B0F0C',
        'hacker-green': '#00FF41',
        'hacker-text': '#C9FCD4',
        'hacker-secondary': '#6CF18B',
        'hacker-accent': '#3EFF70',
        'hacker-card': '#142D14',
        'neon-cyan': '#00FFFF',
        'aqua-accent': '#00BCD4',
        'blue-gradient': '#2196F3',
        'text-primary': '#1B1B1B',
        'text-secondary': '#4A4A4A',
        'text-title': '#111111',
        'soft-cyan': '#E0F7FA',
        'pink-cta': '#FF4081',
        'card-dark': 'rgba(255, 255, 255, 0.03)',
        'card-light': 'rgba(255, 255, 255, 0.85)',
        'card-hacker': 'rgba(0, 255, 64, 0.05)',
        'border-dark': 'rgba(255, 255, 255, 0.1)',
        'border-light': 'rgba(0, 0, 0, 0.05)',
        'border-hacker': 'rgba(0, 255, 64, 0.2)',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'hacker': ['Source Code Pro', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'skill-fill': 'skill-fill 2s ease-out forwards',
      },
      keyframes: {
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(255, 64, 129, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 64, 129, 0.5)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(0, 255, 255, 0.4)' },
          '50%': { boxShadow: '0 0 24px rgba(0, 255, 255, 0.8)' },
        },
        'skill-fill': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--skill-width)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 12px rgba(0, 188, 212, 0.4)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'neon-dark': '0 0 12px rgba(0, 255, 255, 0.4)',
        'hacker-glow': '0 0 10px rgba(0, 255, 64, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}