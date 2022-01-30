import { styled } from 'stitches.config';

export const HomeItemsLayout = styled('ul', {
  display: 'grid',
  margin: '0 -16px',
  paddingX: '$16',

  variants: {
    responsive: {
      mobile: {
        rowGap: '14px'
      },
      tablet: {
        grid: 'auto / repeat(3, 1fr)',
        columnGap: '32px',
      }
    }
  }
});

export const HomeItemLink = styled('a', {
  display: 'grid',
  textDecoration: 'none',

  variants: {
    asfulltime: {
      mobile: {
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
        grid: `auto
               auto / 52px 1fr`,
        alignItems: 'center',
        gap: '$16 $8',
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
    asactivity: {
      mobile: {
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

export const HomeItemDescription = styled('span', {
  gridArea: 'description',
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$14',
  fontWeight: 400
});
