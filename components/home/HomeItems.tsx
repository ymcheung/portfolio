import { styled } from '../../stitches.config';

export const HomeItemsLayout = styled('section', {
    display: 'grid',
    grid: 'auto / auto-flow 288px',
    gridColumnGap: '16px',
    overflowX: 'auto',
    marginX: '-16px',
    paddingX: '$16'
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

export const HomeItemDescription = styled('span', {
  color: '$shade800',
  fontFamily: '$default',
  fontSize: '1.4rem',
  fontWeight: 400
});
