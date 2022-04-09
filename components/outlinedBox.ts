import { css } from 'stitches.config';

export const outlinedBox = css({
  margin: '0 0 $8',
  padding: 0,
  fontFamily: '$default',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: '8px',

  variants: {
    purpose: {
      lyric: {
        borderColor: 'hsl($monoGraphDevice)'
      },
      stats: {
        display: 'grid',
        grid: `auto / 112px 1fr`,
        borderColor: 'hsl($shade1400)'
      }
    }
  }
});

export const outlinedBoxTitle = css({
  variants: {
    purpose: {
      lyric: {
        padding: '$8 $12',
        color: 'hsl($monoTitleLight)',
        fontSize: '$16',
        lineHeight: '16px',
        backgroundColor: 'hsl($monoGraphDevice)'
      },
      stats: {
        padding: '$16 $8',
        color: 'hsl($shade600)',
        backgroundColor: 'hsl($shade1400)'
      }
    }
  }
});


export const outlinedBoxItem = css({
  margin: 0,
  padding: '$12',
  fontSize: '$16',
  lineHeight: '16px',

  variants: {
    divide: {
      top: {
        borderTop: '2px solid hsl($monoGraphDevice)'
      },
      bottom: {
        borderBottom: '2px solid hsl($monoGraphDevice)'
      }
    },
    purpose: {
      lyric: {
        color: 'hsl($monoContentParagraph)'
      },
      stats: {
        padding: '$16 $8 $12',
        color: 'hsl($shade600)'
      }
    }
  }
});
