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
    asproject: {
      mobile: {
        grid: `auto
               auto / 52px 1fr`,
        alignItems: 'center',
        gap: '$16',
        margin: '0 -10px',
        padding: '10px',
        backgroundColor: 'hsla($shade1500, 0.5)',
        borderRadius: '12px'
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
