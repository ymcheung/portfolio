import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const { css, styled, globalCss, createTheme, keyframes, getCssText } = createStitches({
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

      carrierNeon: '236,92%,64%',

      pie800: '240,62%,72%',
      pie700: '240,62%,64%',
      pie400: '240,62%,52%',
      pie100: '240,62%,18%',
      pie0: '240,62%,5%',

      mtDawn: '16,68%,67%',
      mtMidnight700: '225,26%,56%',
      mtMidnight500: '225,26%,45%',
      mtMidnight300: '225,26%,32%',
      mtMidnight200: '225,26%,18%',
      mtMidnight100: '225,26%,12%',
      mtMidnight0: '225,26%,6%',

      nuomiBlack300: '180,1%,20%',
      nuomiBlack100: '180,1%,12%',
      nuomiBlack0:   '180,1%,6%',
      nuomiGold1200: '32,55%,54%',
      nuomiGold400:  '32,55%,20%',

      intersection1500: '11,71%,61%',
      intersection300: '11,71%,12%',

      homeSectionTitle: '$shade600',

      iconCarrierBackground: '$shade800',
      iconCarrierForeground: '$shade1600',

      iconPieBackground: '$shade800',
      iconPieForeground: '$shade1600',
      iconMtBackground: '$shade800',
      iconMtForeground: '$shade1600',

      activityHyphen: '$shade1200',

      homeLoveUIText: '$shade100',
      footerSeparate: '$shade1500',
      schemeIconDarkBg: '$shade1500',
      schemeIconLightBg: '$shade300',

      mockupDesktopScreenMono: '$shade100',
      mockupDesktopScreenBorderMono: '$shade600',
      mockupDesktopKeyboardSideMono: '$shade300',
      mockupDesktopConcaveDuo: '$shade1000',
      mockupDesktopConcaveMono: '$shade100',
      mockupDesktopBrowserTabMono: '$shade300',

      themeCarrier: '$shade1600',

      themePie: '$shade1600',
      metaTitlePie: '$pie400',

      themeNuomi: '$shade1600',

      monoContentTitle: '$shade1500',
      monoContentGradient: '$shade100',
      monoContentParagraph: '$shade1200',
      monoContentLink: '$shade1200',
      monoGraphDevice: '$shade300',
      monoGraphTabBar: '$shade600',
      monoGraphComponent: '$shade700',
      monoGraphIcon: '$shade300',

      themeMoment: '$shade1600',
      mtCoverSing: '$shade1200',
      mtCoverHeard: '$shade1500',
      searchBubble: '$shade1500',

      navGenericIconBg: '$shade1500',
      navPieIconBg:     '$shade1500',
      navMomentIconBg:  '$shade1500',
      navNuomiIconBg:   '$shade1500'
    },
    space: {
      auto: 'auto',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
    },
    sizes: {
      12: '12px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      36: '36px',
      48: '48px',
      52: '52px',
      60: '60px',
      80: '80px',
      96: '96px'
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
      inter: '\'Inter\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif',
      slab: '\'Crete Round\', serif',
      mono: '\'Inconsolata\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', monospace'
    },
    transitions: {
      easeIn: '0.2s ease-in',
      easeOut: '0.12s ease-out'
    }
  },
  utils: {
    marginX: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    size: (value: Stitches.ScaleValue<'sizes'>) => ({
      width: value,
      height: value
    }),
    fullAbsolute: () => ({
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
    m1200: '(min-width: 1200px)',
    mHover: '(hover: hover) and (pointer: fine)',
    mReduced: '(prefers-reduced-motion)'
  },
})

export const dark = createTheme({
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

    homeSectionTitle: '$laurel',

    iconCarrierBackground: '$carrierNeon',
    iconCarrierForeground: '$shade1600',

    iconPieBackground: '$pie700',
    iconPieForeground: '$shade1500',
    iconMtBackground: '$mtMidnight300',
    iconMtForeground: '$mtDawn',

    activityHyphen: '$shade1000',

    homeLoveUIText: '$shade1500',
    footerSeparate: '$shade1400',
    schemeIconDarkBg: '$shade1500',
    schemeIconLightBg: '$shade1400',

    mockupDesktopScreenMono: '$shade1600',
    mockupDesktopScreenBorderMono: '$shade1200',
    mockupDesktopKeyboardSideMono: '$shade1400',
    mockupDesktopConcaveDuo: '$shade1500',
    mockupDesktopConcaveMono: '$shade1500',
    mockupDesktopBrowserTabMono: '$shade1400',

    themeCarrier: '$shade0',

    themePie: '$pie0',
    metaTitlePie: '$pie800',

    themeNuomi: '$nuomiBlack0',

    monoContentTitle: '$shade100',
    monoContentGradient: '$shade1500',
    monoContentParagraph: '$shade600',
    monoContentLink: '$shade600',
    monoGraphDevice: '$shade1400',
    monoGraphTabBar: '$shade1200',
    monoGraphComponent: '$shade1000',
    monoGraphIcon: '$shade1400',

    themeMoment: '$mtMidnight0',
    mtCoverSing: '$shade600',
    mtCoverHeard: '$shade100',
    searchBubble: '$shade1400',

    navGenericIconBg: '$shade1400',
    navPieIconBg:     '$pie100',
    navMomentIconBg:  '$mtMidnight200',
    navNuomiIconBg:  '$nuomiGold400'
  }
});
