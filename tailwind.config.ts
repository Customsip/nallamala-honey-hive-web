import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        border: '#EDEDED',
        input: '#FFFFFF',
        ring: '#FFC107',
        background: '#FFF8E1',
        foreground: '#212121',
        primary: {
          DEFAULT: '#FFC107',
          foreground: '#212121'
        },
        secondary: {
          DEFAULT: '#F5F0E6',
          foreground: '#212121'
        },
        destructive: {
          DEFAULT: '#B00020',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#EDEDED',
          foreground: '#5C4033'
        },
        accent: {
          DEFAULT: '#F5F0E6',
          foreground: '#212121'
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#212121'
        },
        card: {
          DEFAULT: '#EDEDED',
          foreground: '#212121'
        },
        sidebar: {
          DEFAULT: '#FFF8E1',
          foreground: '#212121',
          primary: '#1B5E20',
          'primary-foreground': '#FFFFFF',
          accent: '#F5F0E6',
          'accent-foreground': '#212121',
          border: '#EDEDED',
          ring: '#FFC107'
        },
        honey: {
          gold: '#FFC107',
          light: '#FFD54F',
          cream: '#FFF8E1',
        },
        forest: {
          green: '#1B5E20',
          light: '#2E7D32',
        },
        cream: {
          white: '#FFF8E1',
          beige: '#F5F0E6',
        },
        charcoal: '#212121',
        softGray: '#EDEDED',
        warmBrown: '#5C4033',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in': 'slide-in 0.3s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
