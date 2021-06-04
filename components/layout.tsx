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
        paddingBottom: '32px'
      }
    }
  }
});

export const GalleryContainer = styled('section', {
  marginBottom: '$16',
  padding: '$16 0',

  variants: {
    project: {
      pie: {
        backgroundColor: 'hsl($pie0)'
      },
      nuomi: {
        backgroundColor: 'hsl($nuomiBlack0)'
      }
    }
  }
});

export const ArticleBackground = styled('div', {
  position: 'relative',
  zIndex: 2,
  paddingBottom: '64px',
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
