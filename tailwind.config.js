/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eva: {
          purple: {
            dark: '#4A148C',
            DEFAULT: '#7B1FA2',
            light: '#B388FF',
            neon: '#E1BEE7',
          },
          green: {
            DEFAULT: '#00E676',
            dark: '#00C853',
            neon: '#69F0AE',
          },
          orange: {
            DEFAULT: '#FF6D00',
            light: '#FF9E40',
          },
          bg: {
            dark: '#0A0A0A',
            card: '#1A1A2E',
            hover: '#16213E',
          },
          text: {
            primary: '#E0E0E0',
            secondary: '#9E9E9E',
          }
        }
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      boxShadow: {
        'neon-purple': '0 0 10px rgba(179, 136, 255, 0.5), 0 0 20px rgba(179, 136, 255, 0.3)',
        'neon-green': '0 0 10px rgba(0, 230, 118, 0.5), 0 0 20px rgba(0, 230, 118, 0.3)',
      }
    },
  },
  plugins: [],
}
