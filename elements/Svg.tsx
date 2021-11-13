import { styled } from 'stitches.config';

export const Svg = styled('svg', {
  variants: {
    vertical: {
      sub: {
        verticalAlign: 'sub'
      },
      middle: {
        verticalAlign: 'middle'
      }
    }
  }
});
