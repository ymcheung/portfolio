import { styled, keyframes } from 'stitches.config';

const scaleUp = keyframes({
  '0%': {
    opacity: 0.8,
    transform: 'scale(1)'
  },
  '100%': {
    opacity: 0.48,
    transform: 'scale(1.2)'
  }
});

export const Indicator = styled('circle', {
  fill: 'hsl($pie700)',
  transformBox: 'fill-box',
  transformOrigin: 'center',
  animation: `${scaleUp} 5s alternate ease-in-out infinite`,

  variants: {
    display: {
      none: {
        display: 'none'
      }
    },
    animation: {
      reduced: {
        animation: 'none'
      }
    }
  }
});
