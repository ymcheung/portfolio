import { styled, css } from 'stitches.config';

export const OutlinedBox = css({
  margin: '0 0 $8',
  padding: 0,
  fontFamily: '$default',
  border: '2px solid hsl($monoGraphDevice)',
  borderRadius: '8px',

  variants: {
    purpose: {
      stats: {
        display: 'grid',
        grid: `"total child" auto
               ". child" auto / 96px 1fr`
      }
    }
  }
});

export const OutlinedBoxTitle = css({
  color: 'hsl($monoTitleLight)',
  backgroundColor: 'hsl($monoGraphDevice)',

  variants: {
    purpose: {
      lyric: {
        padding: '$8 $12',
        fontSize: '$16',
        lineHeight: '16px',
      }
    }
  }
});


export const OutlinedBoxItem = css({
  margin: 0,
  padding: '$12',
  color: 'hsl($monoContentParagraph)',
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
    }
  }
});
