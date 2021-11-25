import { styled } from 'stitches.config';

export const GraphGrid = styled('ul', {
  display: 'grid',
  overflowX: 'auto',
  marginTop: 0,

  variants: {
    inuse: {
      en: {
        grid: 'auto / auto-flow 84px 24px'
      },
      tw: {
        grid: 'auto / auto-flow 80px 24px'
      }
    },
    redesigned: {
      true: {
        grid: 'auto / auto-flow 128px 24px'
      }
    },
    floor: {
      first: {
        marginBottom: '$16'
      },
      ground: {
        marginBottom: 0
      }
    },
    responsive: {
      mobile: {
        padding: '0 0 $12'
      },
      desktop: {
        marginRight: '-64px',
        padding: 0
      }
    }
  }
});

export const GraphFigure = styled('figure', {
  margin: 0,
  padding: 0
});
