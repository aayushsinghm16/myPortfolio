/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Dynamic theme colors using CSS variables
        primary: {
          DEFAULT: 'var(--primary)',
          50: 'rgba(var(--primary-rgb), 0.05)',
          100: 'rgba(var(--primary-rgb), 0.1)',
          200: 'rgba(var(--primary-rgb), 0.2)',
          300: 'rgba(var(--primary-rgb), 0.3)',
          400: 'var(--primary-light)',
          500: 'var(--primary)',
          600: 'var(--primary-dark)',
          700: 'rgba(var(--primary-rgb), 0.7)',
          800: 'rgba(var(--primary-rgb), 0.8)',
          900: 'rgba(var(--primary-rgb), 0.9)',
        },
        // Sophisticated Charcoal/Slate for text and backgrounds
        slate: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        // Glass morphism backgrounds
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.1)',
        },
        // Dynamic badge colors
        'primary-badge': {
          light: 'rgba(var(--primary-rgb), 0.1)',
          dark: 'rgba(var(--primary-rgb), 0.2)',
        }
      },
      backgroundImage: {
        // Professional gradients with dynamic theme
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-professional': 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.05) 0%, rgba(var(--primary-rgb), 0.1) 100%)',
        'gradient-dark': 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
        // Subtle patterns
        'dots-pattern': 'radial-gradient(circle, rgba(var(--primary-rgb), 0.05) 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(rgba(var(--primary-rgb), 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--primary-rgb), 0.03) 1px, transparent 1px)',
      },
      animation: {
        // Professional subtle animations
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-down': 'fadeDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -15px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 20px 50px -15px rgba(0, 0, 0, 0.15)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.15)',
        'glow-lg': '0 0 40px rgba(14, 165, 233, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
}