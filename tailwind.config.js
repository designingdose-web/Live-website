
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'brand-primary': '#020204',  /* Deepest Midnight Black */
        'brand-secondary': '#0A0A0C', /* Slightly lighter black for contrast */
        'brand-accent-start': '#8B5CF6', 
        'brand-accent-middle': '#EC4899',
        'brand-accent-end': '#22D3EE', 
        'brand-light': '#E6EDF3', 
        'brand-muted': '#8D96A0', 
      },
      animation: { 
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards', 
        'dropdown-enter': 'dropdown-enter 0.3s ease-out forwards', 
        'dropdown-leave': 'dropdown-leave 0.3s ease-in forwards', 
        'gradient-pan': 'gradient-pan 3s ease infinite', 
        'dropdown-enter-up': 'dropdown-enter-up 0.3s ease-out forwards', 
      },
      keyframes: {
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' }, },
        'dropdown-enter': { '0%': { opacity: '0', transform: 'scale(0.95) translateY(-10px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }, },
        'dropdown-leave': { '0%': { opacity: '1', transform: 'scale(1) translateY(0)' }, '100%': { opacity: '0', transform: 'scale(0.95) translateY(-10px)' }, },
        'gradient-pan': { '0%': { 'background-position': '0% 50%' }, '50%': { 'background-position': '100% 50%' }, '100%': { 'background-position': '0% 50%' }, },
        'dropdown-enter-up': { '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }, },
      }
    }
  },
  plugins: [],
}
