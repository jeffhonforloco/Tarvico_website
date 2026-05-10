import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#070707',
          raised: '#0C0C0B',
          card:   '#111110',
          deep:   '#181817',
        },
        gold: {
          DEFAULT: '#C9A447',
          light:   '#D4B55A',
          dim:     'rgba(201,164,71,0.6)',
          glow:    'rgba(201,164,71,0.07)',
          border:  'rgba(201,164,71,0.12)',
        },
        ink: {
          DEFAULT: '#EDE9E0',
          secondary: '#7A776F',
          muted:     '#3A3834',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.3em',
      },
      animation: {
        'fade-up':       'fadeUp 0.7s ease forwards',
        'pulse-slow':    'pulseSlow 3s ease-in-out infinite',
        'scroll-line':   'scrollLine 2s ease-in-out infinite',
        'grid-drift':    'gridDrift 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1' },
        },
        scrollLine: {
          '0%,100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%':     { opacity: '1',   transform: 'scaleY(1.2)' },
        },
        gridDrift: {
          from: { backgroundPosition: '0 0' },
          to:   { backgroundPosition: '80px 80px' },
        },
      },
    },
  },
  plugins: [],
}

export default config
