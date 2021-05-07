import { styled } from '../../stitches.config';

export const HomeItemsLayout = styled('section', {
  '@m768': {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 320px)',
    gridColumnGap: '16px'
  }
});

export const HomeItemLink = styled('a', {
  display: 'block'
});
