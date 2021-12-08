import { styled } from 'stitches.config';

export const FeatureList = styled('ul', {
  display: 'grid',
  grid: 'auto / repeat(auto-fill, minmax(120px, 180px))',
  padding: 0,

  variants: {
    space: {
      normal: {
        gap: '16px 24px'
      },
      wide: {
        gap: '16px 32px'
      }
    },
    siblings: {
      hasSiblings: {
        margin: '0 0 $12'
      },
      sectionEnd: {
        margin: 0
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
