const defaultTheme = require('tailwindcss/defaultTheme')
const { typography } = require('./styles/tailwind.typography')
const { radixToTailwind } = require('./lib/utils/radixToTailwind')
const { olive, oliveDark, lime, limeDark, blackA } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        black: '#10110E',
        brand: radixToTailwind(lime),
        brandDark: radixToTailwind(limeDark),
        neutral: radixToTailwind(olive),
        neutralDark: radixToTailwind(oliveDark),
        overlay: radixToTailwind(blackA),
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-heading),var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
    typography,
  },
}
