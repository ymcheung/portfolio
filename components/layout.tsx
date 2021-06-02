import { styled } from '../stitches.config';

export const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$16',

  variants: {
    responsive: {
      max640: {
        maxWidth: '640px'
      },
      max960: {
        maxWidth: '960px'
      },
      max1168: {
        maxWidth: '1168px'
      }
    },
    hassibling: {
      true: {
        marginBottom: '$18'
      }
    },
    isgroupend: {
      true: {
        marginBottom: '64px'
      }
    },
    footerend: {
      true: {
        paddingBottom: '64px'
      }
    }
  }
});

export const ArticleBackground = styled('div', {
  position: 'relative',
  zIndex: 2,
  paddingBottom: '64px',

  '&::before': {
    width: '100%',
    height: '36px',
    position: 'absolute',
    top: '-36px',
    right: 0,
    left: 0,
    content: `''`
  },

  variants: {
    project: {
      pie: {
        backgroundColor: 'hsla($pie0, 0.92)',

        '&::before': {
          backgroundImage: `
            linear-gradient(
              to bottom,
              hsla($pie0, 0) 0%,
              hsla($pie0, 0.012) 8.1%,
              hsla($pie0, 0.045) 15.5%,
              hsla($pie0, 0.096) 22.5%,
              hsla($pie0, 0.161) 29%,
              hsla($pie0, 0.239) 35.3%,
              hsla($pie0, 0.324) 41.2%,
              hsla($pie0, 0.414) 47.1%,
              hsla($pie0, 0.506) 52.9%,
              hsla($pie0, 0.596) 58.8%,
              hsla($pie0, 0.681) 64.7%,
              hsla($pie0, 0.759) 71%,
              hsla($pie0, 0.824) 77.5%,
              hsla($pie0, 0.875) 84.5%,
              hsla($pie0, 0.908) 91.9%,
              hsla($pie0, 0.92) 100%
            )`
        }
      },
      nuomi: {
        backgroundColor: 'hsla($nuomiBlack0, 0.92)',

        '&::before': {
          backgroundImage: `
            linear-gradient(
              to bottom,
              hsla($nuomiBlack0, 0) 0%,
              hsla($nuomiBlack0, 0.012) 8.1%,
              hsla($nuomiBlack0, 0.045) 15.5%,
              hsla($nuomiBlack0, 0.096) 22.5%,
              hsla($nuomiBlack0, 0.161) 29%,
              hsla($nuomiBlack0, 0.239) 35.3%,
              hsla($nuomiBlack0, 0.324) 41.2%,
              hsla($nuomiBlack0, 0.414) 47.1%,
              hsla($nuomiBlack0, 0.506) 52.9%,
              hsla($nuomiBlack0, 0.596) 58.8%,
              hsla($nuomiBlack0, 0.681) 64.7%,
              hsla($nuomiBlack0, 0.759) 71%,
              hsla($nuomiBlack0, 0.824) 77.5%,
              hsla($nuomiBlack0, 0.875) 84.5%,
              hsla($nuomiBlack0, 0.908) 91.9%,
              hsla($nuomiBlack0, 0.92) 100%
            )`
        }
      }
    }
  }
});

export const ListItem = styled('li', {
  fontFamily: '$default',

  variants: {
    nomark: {
      true: {
        listStyleType: 'none'
      }
    },
    square: {
      true: {
        listStyleType: 'square'
      }
    }
  }
});

export const IconList = styled('ul', {
  display: 'grid',
  rowGap: '$16',
  margin: 0,
  padding: 0
});

export const IconListItem = styled(ListItem, {
  display: 'grid',
  rowGap: '$4',
  margin: '0',

  variants: {
    prefixwidth: {
      32: {
        gridTemplateColumns: '32px 1fr'
      },
      48: {
        gridTemplateColumns: '48px 1fr'
      }
    },
    purpose: {
      default: {
        gridTemplateRows: 'auto auto',
        gridTemplateAreas: `"prefix title"
                            ". description"`
      },
      noTitle: {
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"prefix description"`
      },
      timestamp: {
        gridTemplateRows: 'auto auto auto',
        gridTemplateAreas: `"prefix title"
                            ". description"
                            ". timestamp"`
      }
    },
    vertical: {
      middle: {
        alignItems: 'center'
      }
    }
  },

  defaultVariants: {
    prefixwidth: '32',
    purpose: 'default'
  },
});
