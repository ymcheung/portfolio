import { createCss } from '@stitches/react'

export const { css, styled, global, theme, getCssString } = createCss({
  theme: {
    colors: {
      laurel: '162,57%,62%',
      sun: '50,50%,70%',

      shade1600: '162,2%,99%',
      shade1500: '162,2%,92%',
      shade1400: '162,2%,84%',
      shade1200: '162,2%,72%',
      shade1000: '162,2%,64%',
      shade800:  '162,2%,56%',
      shade700:  '162,2%,48%',
      shade600:  '162,2%,40%',
      shade300:  '162,2%,24%',
      shade100:  '162,2%,10%',
      shade0:    '162,2%, 6%',

      pie800: 'hsl(240,62%,72%)',
      pie700: 'hsl(240,62%,64%)',
      pie400: 'hsl(240,62%,52%)',
      pie100: 'hsl(240,62%,18%)',
      pie0: '240,62%,5%',

      mtDawn: 'hsl(16,68%,67%)',
      mtMidnight700: 'hsl(225,26%,56%)',
      mtMidnight500: 'hsl(225,26%,45%)',
      mtMidnight200: 'hsl(225,26%,18%)',
      mtMidnight100: 'hsl(225,26%,12%)',
      mtMidnight0: 'hsl(225,26%,6%)',

      nuomiBlack300: 'hsl(180,1%,20%)',
      nuomiBlack100: 'hsl(180,1%,12%)',
      nuomiBlack0: '180,1%,6%',
      nuomiGold1200: 'hsl(32,55%,54%)',
      nuomiGold400: 'hsl(32,55%,20%)',

      intersection1500: 'hsl(11,71%,61%)',
      intersection300: 'hsl(11,71%,12%)',

      activityHyphen: '$shade1200',

      footerSeparate: '$shade1500',
      schemeIconDarkBg: '$shade1500',
      schemeIconLightBg: '$shade300'
    },
    space: {
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
    },
    sizes: {
      18: '18px',
      24: '24px',
      48: '48px'
    },
    fontSizes: {
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2rem',
      24: '2.4rem',
      32: '3.2rem',
    },
    fonts: {
      default: '\'Overpass\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif',
      slab: '\'Crete Round\', serif',
      mono: '\'Inconsolata\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', monospace'
    },
    transitions: {
      easeIn: '0.16s ease-in',
      easeOut: '0.16s ease-out'
    }
  },
  utils: {
    marginX: (config) => (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (config) => (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    size: (config) => (value) => ({
      width: value,
      height: value
    }),
    fullAbsolute: (config) => () => ({
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    })
  },
  media: {
    m768: '(min-width: 768px)',
    m992: '(min-width: 992px)',
    m1200: '(min-width: 1200px)'
  },
})

export const dark = theme({
  colors: {
    shade0:    '162,2%,99%',
    shade100:  '162,2%,92%',
    shade300:  '162,2%,84%',
    shade600:  '162,2%,72%',
    shade700:  '162,2%,64%',
    shade800:  '162,2%,56%',
    shade1000: '162,2%,48%',
    shade1200: '162,2%,40%',
    shade1400: '162,2%,24%',
    shade1500: '162,2%,10%',
    shade1600: '162,2%, 6%',

    activityHyphen: '$shade1000',

    footerSeparate: '$shade1200',
    schemeIconDarkBg: '$shade300',
    schemeIconLightBg: '$shade1400'
  }
});
