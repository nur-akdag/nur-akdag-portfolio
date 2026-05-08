/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Genel Renkler
        'brand-pink': '#EA2678',
        'brand-blue': '#1769FF',
        
        // Light Mode Renkleri
        'light-bg': '#F4F4F4',
        'light-card': '#FFFFFF',
        'light-text': '#0A0A14',
        'light-secondary': '#525252',
        'soft-blue': '#DDEEFE',
        'soft-green': '#D9F6F1',
        'neutral-gray': '#D9D9D9',
        
        // Dark Mode Renkleri 
        'dark-bg': '#2A262B',
        'dark-card': '#484148',
        'dark-accent': '#82BBFF',
        'dark-navy': '#2D3235',
        'dark-green': '#495351',
        'dark-blue': '#419CCB',
      }
    },
  },
  plugins: [],
}