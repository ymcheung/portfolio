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
    footerend: {
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

export const IconList = styled('ul', {
  display: 'grid',
  rowGap: '$12',
  margin: 0,
  padding: 0
});

export const IconListItem = styled(ListItem, {
  display: 'grid',
  grid: `"prefix title" auto
        ". description" auto / 32px 1fr`,
  rowGap: '$4',
  alignItems: 'center',
  margin: '0',
  fontFamily: '$default'
});
