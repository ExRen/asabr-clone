/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'asabri-blue': '#003B7E',
        'asabri-navy': '#001F3F',
        'asabri-gold': '#FFD700',
        'asabri-light': '#F5F9FF',
        'asabri-dark': '#00152B',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 59, 126, 0.1)',
        'custom-lg': '0 10px 40px rgba(0, 59, 126, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}