import { styled } from '../../stitches.config';

export const HomeItemsLayout = styled('section', {
  display: 'grid',
  overflowX: 'auto',
  marginX: '-16px',

  variants: {
    forProjects: {
      mobile: {
        grid: 'auto / auto-flow 304px',
        gridColumnGap: '$8',
        marginBottom: '$4',
        paddingX: '$8',
        paddingBottom: '$8'
      }
    },
    forActivity: {
      mobile: {
        grid: 'auto / 100%',
        gridRowGap: '$18',
        marginY: 0,
        paddingX: '$16',
      }
    }
  }
});

export const HomeItem = styled('li', {
  display: 'grid',
  grid: 'auto / 24px 1fr',
  alignItems: 'start',
  gridColumnGap: '$8'
});

export const HomeItemLink = styled('a', {
  display: 'block',
  textDecoration: 'none',

  variants: {
    forProjects: {
      true: {
        paddingX: '$8'
      }
    }
  }
});

export const HomeItemContainer = styled('figure', {
  margin: 0
});

export const HomeItemImage = styled('img', {
  size: '288px'
});

export const HomeItemDescription = styled('span', {
  color: '$shade800',
  fontFamily: '$default',
  fontSize: '1.4rem',
  fontWeight: 400
});
