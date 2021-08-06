import { styled } from 'stitches.config';
import { Verb } from '../components/headings';

export const HomeItemsLayout = styled('ul', {
  display: 'grid',
  margin: '0 -16px',
  paddingX: '$16',

  variants: {
    responsive: {
      mobile: {
        rowGap: '$18'
      },
      tablet: {
        grid: 'auto / repeat(3, 1fr)',
        columnGap: '$16',
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
        grid: 'auto / 52px 1fr',
        alignItems: 'center',
        columnGap: '$16'
      },
      tablet: {
        grid: 'auto / 100%',
        alignItems: 'unset',
        rowGap: '$8',
        columnGap: 'unset',
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
    },
    hover: {
      pie: {
        '&:hover': {
          [`& ${Verb}`]: {
            color: 'hsl($pie700)'
          }
        }
      },
      moment: {
        '&:hover': {
          [`& ${Verb}`]: {
            color: 'hsl($mtDawn)'
          }
        }
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
