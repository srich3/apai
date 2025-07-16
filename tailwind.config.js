/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#18181b',
        surface: '#23272e',
        accent: '#7ee787', // soft green, Grafana-like
        'accent-muted': '#3fb950',
        border: '#2d323b',
        text: {
          primary: '#e5e7eb',
          secondary: '#9ca3af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        card: '0.75rem',
      },
      boxShadow: {
        card: '0 2px 8px 0 #00000020',
      },
      spacing: {
        'card': '2rem',
      },
    },
  },
  plugins: [],
}; 