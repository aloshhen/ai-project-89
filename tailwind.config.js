/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Playfair Display', 'serif']
      },
      colors: {
        'bar-primary': '#1A1A2E',
        'bar-secondary': '#16213E',
        'bar-accent': '#E94560',
        'bar-text': '#F5F5F5'
      },
      backgroundImage: {
        'bar-gradient': 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)'
      }
    }
  },
  plugins: []
}