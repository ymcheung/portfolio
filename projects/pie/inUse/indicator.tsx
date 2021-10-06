import { styled, keyframes } from 'stitches.config';

const scaleUp = keyframes({
  '0%': { opacity: 0.75 },
  '100%': { opacity: 0.5 }
});

export const Indicator = styled('circle', {
  fill: 'hsl($pie700)',
  animation: `${scaleUp} 10s alternate ease-in-out infinite`,

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
