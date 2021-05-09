import { styled } from '../../stitches.config';

export const HomeItemsLayout = styled('section', {
  '@m768': {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 320px)',
    gridColumnGap: '16px'
  }
});

export const HomeItemLink = styled('a', {
  display: 'block',
  textDecoration: 'none'
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
