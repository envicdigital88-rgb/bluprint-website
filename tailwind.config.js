/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors from logo
        navy: '#0B3D5F',      // Deep blue - main brand
        blue: '#1565C0',      // Bright blue - primary
        cyan: '#4FC3F7',      // Light blue accent
        paper: '#FFFFFF',     // Pure white background
        ink: '#1A1A1A',       // Dark text
        amber: '#1565C0',     // Logo blue - primary accent
        orange: '#0B3D5F',    // Deep navy blue for emphasis
        gray: '#F5F5F5',      // Light gray backgrounds
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Montserrat"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(94,168,217,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(94,168,217,0.14) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
        'grid-sm': '20px 20px',
      },
    },
  },
  plugins: [],
}
