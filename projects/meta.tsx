import { styled } from 'stitches.config';

export const MetaList = styled('ul', {
  display: 'grid',
  grid: 'auto / 1fr',
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
  listStyle: 'none',

  variants: {
    itemspan: {
      full: {
        gridColumn: '1 / span 2'
      }
    }
  }
});

export const MetaItemTitle = styled('strong', {
  display: 'block',
  fontFamily: '$mono',
  fontSize: '$14',
  fontWeight: 500,
  lineHeight: 1,

  variants: {
    project: {
      carrier: {
        color: 'hsl($carrierNeon)'
      },
      pie: {
        color: 'hsl($metaTitlePie)'
      },
      moment: {
        color: 'hsl($mtDawn)'
      },
      nuomi: {
        color: 'hsl($nuomiGold1200)'
      },
      intersection: {
        color: 'hsl($intersection1500)'
      }
    }
  }
});

export const MetaStatusList = styled('ul', {
  display: 'grid',
  grid: 'auto / repeat(2, 1fr)',
  columnGap: '$12',
  margin: '0 0 $8',
  padding: 0,

  variants: {
    responsive: {
      tablet: {
        grid: 'auto / repeat(3, 1fr)'
      }
    }
  }
});

export const MetaItemValue = styled('span', {
  display: 'inline-block',
  marginBottom: '$8',
  color: 'hsl($shade600)',
  fontFamily: '$mono',
  fontSize: '$14',
  fontWeight: 500,
  lineHeight: '24px'
});
