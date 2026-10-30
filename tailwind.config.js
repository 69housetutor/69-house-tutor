/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070C18',
          card: '#0D1527',
          surface: '#131F38',
          border: '#1E2E4E',
          blue: '#2563EB',
          sky: '#0EA5E9',
          cyan: '#06B6D4',
          indigo: '#6366F1',
          purple: '#8B5CF6',
          violet: '#7C3AED',
          accent: '#38BDF8'
        }
      },
      fontFamily: {
        sans: ['Prompt', 'Kanit', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Kanit', 'Prompt', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.12) 35%, rgba(7, 12, 24, 0) 70%)',
        'card-glow': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
