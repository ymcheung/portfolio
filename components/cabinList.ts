import Image from 'next/image';
import { styled } from 'stitches.config';

export const CabinList = styled('ul', {
  display: 'grid',
  margin: 0,
  padding: '0 0 $12',

  variants: {
    responsive: {
      mobile: {
        grid: 'auto / auto-flow minmax(280px, 50%)',
        columnGap: '$16',
        overflowY: 'auto'
      },
      tablet: {
        overflowY: 'initial'
      }
    }
  }
});

export const PrototypeLink = styled('a', {
  display: 'block',
  position: 'relative',
  padding: '$16',
  backgroundColor: 'hsl($shade1500)',
  borderRadius: '24px',

  variants: {
    nth: {
      odd: {
        margin: '0 0 0 -$16'
      },
      even: {
        margin: '0 -$16 0 0'
      }
    }
  }
});

export const PrototypeItemCover = styled('figure', {
  margin: 0,
  padding: 0
});

export const PrototypeItemCoverImg = styled(Image, {
  borderRadius: '16px'
});
