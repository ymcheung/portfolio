import { styled } from 'stitches.config';

export const Container = styled('div', {
  marginX: '$auto',
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
    space: {
      beforeDivide: {
        marginBottom: '$8'
      },
      hasSibling: {
        marginBottom: '$24'
      },
      isGroupEnd: {
        marginBottom: '64px'
      },
      isFooterEnd: {
        paddingBottom: '32px'
      }
    },
    momentcover: {
      true: {
        height: '224px',
        position: 'relative',
        marginY: '$0',
        paddingTop: '$24'
      }
    }
  }
});

export const FullBlock = styled('section', {
  marginBottom: '$16',
  padding: '$24 0 $8',

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

export const FullLayout = styled('div', {
  marginBottom: '64px',
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
