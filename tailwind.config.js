/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors from logo
        navy: '#0B3D5F',       // Deep blue - main brand
        'navy-deep': '#050D1A', // Darkest background
        'navy-mid': '#0A2540', // Mid dark navy
        blue: '#1565C0',       // Bright blue - primary
        cyan: '#4FC3F7',       // Light blue accent
        'cyan-bright': '#00D4FF', // Electric cyan
        paper: '#050D1A',      // Dark background (modernized)
        'paper-light': '#FFFFFF', // Pure white
        ink: '#E2E8F0',        // Light text on dark bg
        gold: '#D4AF37',       // Premium gold accent
        'gold-light': '#FFD700', // Bright gold
        gray: '#F5F5F5',       // Light gray backgrounds
        'gray-dark': '#1E293B', // Dark gray for cards
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Montserrat"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(79,195,247,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.07) 1px, transparent 1px)',
        'hero-gradient':
          'linear-gradient(135deg, #050D1A 0%, #0A2540 50%, #0B3D5F 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(21,101,192,0.1) 0%, rgba(79,195,247,0.05) 100%)',
        'shine-gradient':
          'linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent)',
      },
      backgroundSize: {
        grid: '60px 60px',
        'grid-sm': '30px 30px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(79, 195, 247, 0.3)',
        'glow-md': '0 0 20px rgba(79, 195, 247, 0.4), 0 0 40px rgba(21, 101, 192, 0.2)',
        'glow-lg': '0 0 40px rgba(79, 195, 247, 0.5), 0 0 80px rgba(21, 101, 192, 0.3)',
        'blue-sm': '0 4px 20px rgba(21, 101, 192, 0.3)',
        'blue-md': '0 8px 40px rgba(21, 101, 192, 0.4)',
        'blue-lg': '0 15px 60px rgba(21, 101, 192, 0.5)',
        'dark-xl': '0 25px 80px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'gradient-shift': 'gradientShift 4s linear infinite',
        'shimmer-move': 'shimmerMove 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'bounce-arrow': 'bounceArrow 1.5s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'spin-slow': 'rotate 20s linear infinite',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth-in': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
}
