import { createCss } from '@stitches/react'

export const { css, styled, global, theme, getCssString } = createCss({
  theme: {
    colors: {
      laurel: 'hsl(162,57%,62%)',

      shade1600: 'hsl(162,2%,99%)',
      shade1500: 'hsl(162,2%,92%)',
      shade1200: 'hsl(162,2%,72%)',
      shade1000: 'hsl(162,2%,64%)',
      shade800: 'hsl(162,2%,56%)',
      shade700: 'hsl(162,2%,48%)',
      shade600: 'hsl(162,2%,40%)',
      shade300: 'hsl(162,2%,24%)',
      shade0: 'hsl(162,2%,6%)'
    },
    space: {
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      18: '18px',
      20: '24px',
    },
    fontSizes: {
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2.0rem',
      24: '2.4rem',
      32: '3.2rem',
    },
    fonts: {
      default: '\'Overpass\', -apple-system, BlinkMacSystemFont, \'Segoe UI\'',
      slab: '\'Crete Round\', sans-serif',
      mono: '\'Inconsolata\', monospace'
    },
  },
  utils: {
    marginX: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    m768: '(min-width: 768px)',
    m992: '(min-width: 992px)',
    m1200: '(min-width: 1200px)'
  },
})
