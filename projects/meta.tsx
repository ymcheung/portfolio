import { styled } from '../stitches.config';

export const MetaList = styled('ul', {
  display: 'grid',
  rowGap: '$12',
  margin: '0 0 64px',
  padding: 0,

  variants: {
    responsive: {
      half: {
        grid: 'auto / repeat(2, 1fr)',
        columnGap: '$12'
      }
    }
  }
});

export const MetaItem = styled('li', {
  listStyle: 'none'
});

export const MetaItemTitle = styled('strong', {
  display: 'block',
  fontFamily: '$mono',
  fontSize: '$14',
  fontWeight: 500,
  lineHeight: '20px',

  variants: {
    project: {
      pie: {
        color: '$pie800'
      },
      moment: {
        color: '$mtDawn'
      },
      nuomi: {
        color: '$nuomiGold1200'
      },
      intersection: {
        color: '$intersection1500'
      }
    }
  }
});

export const MetaItemValue = styled('span', {
  display: 'inline-block',
  fontFamily: '$mono',
  fontSize: '$14',
  fontWeight: 500,

  variants: {
    scheme: {
      dark: {
        color: 'hsl(hsl($shade100)0)'
      },
      light: {
        color: 'hsl($shade300)'
      }
    }
  }
});
