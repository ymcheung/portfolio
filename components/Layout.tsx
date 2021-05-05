import { styled } from '../stitches.config';

export const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$16',

  variants: {
    asHome: {
      true: {
        '@m992': {
          maxWidth: '960px'
        },
        '@m1200': {
          maxWidth: '1168px'
        }
      }
    },
    asProjects: {
      true: {
        '@m992': {
          maxWidth: '640px'
        }
      }
    },
    hasSibling: {
      true: {
        marginBottom: '$18'
      }
    },
    isGroupEnd: {
      true: {
        marginBottom: '64px'
      }
    }
  }
});
