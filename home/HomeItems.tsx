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
    asmajor: {
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
    asminor: {
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
        margin: '-$8',
        padding: '$8'
      },
      hover: {
        backgroundColor: 'hsl($shade1600)',
        borderRadius: '12px',
        transition: 'box-shadow 0.15s ease-out',

        '&:hover': {
          boxShadow: `0 0.1px 2.2px hsla($colors$shade0, 0.014),
                      0 0.3px 5.3px hsla($colors$shade0, 0.02),
                      0 0.5px 10px hsla($colors$shade0, 0.025),
                      0 0.9px 17.9px hsla($colors$shade0, 0.03),
                      0 1.7px 33.4px hsla($colors$shade0, 0.036),
                      0 4px 80px hsla($colors$shade0, 0.05)`,
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
