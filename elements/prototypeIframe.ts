import { styled } from 'stitches.config';

export const PrototypeIframe = styled('iframe', {
  width: '100%',
  border: 0,

  variants: {
    responsive: {
      mobile: {
        height: '720px'
      },
      tablet: {
        height: '600px'
      }
    }
  }
});
