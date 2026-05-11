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
          DEFAULT: '#07070A',
          raised:  '#0C0C10',
          card:    '#111116',
          deep:    '#050508',
        },
        gold: {
          DEFAULT: '#C9A447',
          light:   '#D4B55A',
          dim:     'rgba(201,164,71,0.55)',
          glow:    'rgba(201,164,71,0.07)',
          border:  'rgba(201,164,71,0.20)',
        },
        blue: {
          DEFAULT: '#5B9BD5',
          dim:     'rgba(91,155,213,0.5)',
          glow:    'rgba(91,155,213,0.07)',
          border:  'rgba(91,155,213,0.18)',
        },
        emerald: {
          DEFAULT: '#2ECC8A',
          dim:     'rgba(46,204,138,0.5)',
          glow:    'rgba(46,204,138,0.07)',
          border:  'rgba(46,204,138,0.18)',
        },
        ink: {
          DEFAULT:   '#F0EDE6',
          secondary: '#7C7A76',
          muted:     '#3C3A36',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.3em',
        widest4: '0.4em',
      },
      animation: {
        'fade-up':     'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':     'fadeIn 0.7s ease forwards',
        'pulse-slow':  'pulseSlow 5s ease-in-out infinite',
        'pulse-dot':   'pulseDot 2.4s ease-in-out infinite',
        'grid-drift':  'gridDrift 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        pulseSlow: {
          '0%,100%': { opacity: '0.35' },
          '50%':     { opacity: '0.8' },
        },
        pulseDot: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(46,204,138,0.6)' },
          '60%':     { boxShadow: '0 0 0 5px rgba(46,204,138,0)' },
        },
        gridDrift: {
          from: { backgroundPosition: '0 0' },
          to:   { backgroundPosition: '72px 72px' },
        },
      },
    },
  },
  plugins: [],
}

export default config
