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
    ashomeheader: {
      mobile: {
        marginTop: '$8'
      },
      tablet: {
        marginTop: '$16'
      }
    },
    ascover: {
      mobile: {
        marginTop: '520px'
      },
      tablet: {
        marginTop: '640px'
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
