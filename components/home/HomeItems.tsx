import { styled } from '../../stitches.config';

export const HomeItemsLayout = styled('section', {
    display: 'grid',
    grid: 'auto / auto-flow 288px',
    gridColumnGap: '16px',
    overflowX: 'auto',
    marginX: '-16px',
    marginBottom: '$4',
    paddingX: '$16',
    paddingBottom: '$8'
});

export const HomeItemLink = styled('a', {
  display: 'block',
  textDecoration: 'none',

  variants: {
    hasSibling: {
      true: {
        marginBottom: '$18'
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
