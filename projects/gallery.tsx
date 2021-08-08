import { styled } from 'stitches.config';
import { ListItem } from '@components/layout';

export const GalleryList = styled('ul', {
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '288px',
  columnGap: '24px',
  overflowX: 'auto',
  margin: '0 -$8 $16',
  padding: '0 0 $16',
  '--webkit-overflow-scrolling': 'touch',

  variants: {
    responsive: {
      tablet: {
        maxWidth: '640px',
        gridAutoFlow: 'row',
        gridAutoColumns: 'unset'
      }
    }
  }
});

export const GalleryItem = styled(ListItem, {
  position: 'relative',
  margin: 0,
  padding: '0 $8',

  '&::before': {
    fullAbsolute: '',
    zIndex: 0,
    content: `''`,
    backgroundImage: 'linear-gradient(to bottom, transparent 0%, hsla($shade600, 0.5) 50%, transparent 92%)'
  },

  variants: {
    responsive: {
      tablet: {
        marginBottom: '$24'
      }
    },
  }
});
