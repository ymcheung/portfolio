import { styled } from '../stitches.config';

export const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$4',

  variants: {
    size: {
      '1': {
        width: '100%'
      },
      '2': {
        maxWidth: '960px'
      },
      '3': {
        maxWidth: '1168px'
      },
    },
  },
});
