import { styled } from 'stitches.config';

export const HomeItemsLayout = styled('ul', {
  display: 'grid',
  rowGap: '14px',
  margin: '0 -16px',
  paddingX: '$16',

  variants: {
    duo: {
      tablet: {
        grid: 'auto / repeat(2, 1fr)',
        columnGap: '32px'
      }
    },
    tri: {
      tablet: {
        grid: 'auto / repeat(3, 1fr)',
        columnGap: '32px'
      }
    }
  }
});

export const HomeItemLink = styled('a', {
  textDecoration: 'none',

  variants: {
    asfulltime: {
      mobile: {
        display: 'grid',
        grid: `auto / 52px 1fr`,
        alignItems: 'center',
        columnGap: '$8',
        margin: '0 -10px',
        padding: '$8',
        backgroundColor: 'hsl($shade1500)',
        border: '2px solid transparent',
        borderRadius: '12px',
        boxSizing: 'content-box'
      },
      hover: {
        transition: 'border-color $easeIn',

        '&:hover': {
          borderColor: 'hsl($shade1400)',
          transition: 'border-color $easeOut'
        }
      }
    },
    asproject: {
      mobile: {
        display: 'grid',
        overflow: 'hidden',
        margin: '0 -10px',
        padding: '$8',
        position: 'relative',
        backgroundColor: 'hsl($shade1500)',
        border: '2px solid transparent',
        borderRadius: '12px'
      },
      tablet: {
        grid: `"screen type" 24px
               "screen name" auto / minmax(296px, 1fr) 2fr`,
        padding: '$8 $8 0'
      },
      hover: {
        transition: 'border-color $easeIn',

        '&:hover': {
          borderColor: 'hsl($shade1400)',
          transition: 'border-color $easeOut'
        }
      }
    },
    asactivity: {
      mobile: {
        display: 'grid',
        grid: `"icon title" auto
               ". description" auto / 24px 1fr`,
        alignItems: 'start',
        columnGap: '$8'
      },
      tablet: {
        grid: `"title" auto
               "description" auto / 100%`,
        columnGap: 'unset',
        margin: '-$12',
        padding: '$12'
      },
      hover: {
        backgroundColor: 'hsl($shade1600)',
        borderRadius: '12px',
        transition: 'box-shadow 0.15s ease-out',

        '&:hover': {
          transition: 'box-shadow 0.15s ease-in'
        }
      }
    }
  }
});

export const HomeItemType = styled('span', {
  marginBottom: '$4',
  color: 'hsl($shade800)',
  fontSize: '$14',
  lineHeight: '18px',

  variants: {
    responsive: {
      tablet: {
        gridArea: 'type'
      }
    }
  }
});

export const HomeItemDescription = styled('span', {
  gridArea: 'description',
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$14',
  fontWeight: 400
});
