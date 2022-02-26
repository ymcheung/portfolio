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
        backgroundColor: 'hsla($shade1500, 0.5)',
        border: '2px solid transparent',
        borderRadius: '12px'
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
        display: 'block',
        margin: '0 -10px',
        padding: '$8',
        position: 'relative',
        backgroundColor: 'hsla($shade1500, 0.5)',
        border: '2px solid transparent',
        borderRadius: '12px'
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
        columnGap: 'unset'
      }
    }
  }
});

export const HomeItemType = styled('span', {
  display: 'inline-block',
  marginBottom: '$4',
  fontSize: '$14',
  lineHeight: '18px',

  variants: {
    project: {
      carrier: {
        color: 'hsl($carrierNeon)'
      },
      moment: {
        color: 'hsl($mtDawn)'
      },
      pie: {
        color: 'hsl($pie400)'
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
