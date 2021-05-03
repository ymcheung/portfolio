import { styled } from '../stitches.config';

export const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$16',

  '@m992': {
    maxWidth: '960px'
  },
  '@m1200': {
    maxWidth: '1168px'
  },

  variants: {
    hasSibling: {
      true: {
        marginBottom: '$18'
      }
    },
    asProjectFooter: {
      true: {
        marginLeft: '-64px'
      }
    }
  }
});
