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
      },
      tablet: {
        grid: 'auto / repeat(3, 1fr)'
      }
    },
    forActivity: {
      mobile: {
        grid: 'auto / 100%',
        gridRowGap: '$18',
        marginY: 0,
        paddingX: '$16',
      },
      tablet: {
        grid: 'auto / repeat(3, 1fr)',
        gridColumnGap: '$16',
      }
    }
  }
});

export const HomeItem = styled('li', {
  display: 'grid',
  grid: 'auto / 24px 1fr',
  alignItems: 'start',
  gridColumnGap: '$8',

  variants: {
    removeIcon: {
      true: {
        grid: 'auto / 1fr'
      }
    }
  }
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

export const HomeItemCover = styled('div', {
  position: 'relative',
  marginBottom: '$8',
  paddingTop: '100%'
});

export const HomeItemImage = styled('img', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  objectFit: 'cover'
});

export const HomeItemDescription = styled('span', {
  color: '$shade800',
  fontFamily: '$default',
  fontSize: '1.4rem',
  fontWeight: 400
});
