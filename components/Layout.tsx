import { styled } from '../stitches.config';

export const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$16',

  variants: {
    responsive: {
      max640: {
        maxWidth: '640px'
      },
      max960: {
        maxWidth: '960px'
      },
      max1168: {
        maxWidth: '1168px'
      }
    },
    hasSibling: {
      true: {
        marginBottom: '$18'
      }
    },
    isgroupend: {
      true: {
        marginBottom: '64px'
      }
    },
    footerEnd: {
      true: {
        paddingBottom: '64px'
      }
    }
  }
});

export const ListItem = styled('li', {
  variants: {
    nomark: {
      true: {
        listStyleType: 'none'
      }
    },
    square: {
      true: {
        listStyleType: 'square'
      }
    }
  }
});
