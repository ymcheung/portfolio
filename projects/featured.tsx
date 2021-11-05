import { styled } from 'stitches.config';

export const FeatureList = styled('ul', {
  display: 'grid',
  grid: 'auto / repeat(auto-fill, minmax(120px, 180px))',
  margin: 0,
  padding: 0,

  variants: {
    space: {
      normal: {
        gap: '16px 24px'
      },
      wide: {
        gap: '16px 32px'
      }
    }
  }
});

export const FeaturedNumberMark = styled('sup', {
  fontFamily: 'inherit',
  color: 'hsl($shade1200)',
  fontSize: '$16',
  fontStyle: 'normal',
  fontWeight: 400
});
