import { styled } from 'stitches.config';

export const Bar = styled('path', {
  variants: {
    scheme: {
      default: {
        fill: 'hsl($pie700)'
      },
      mono: {

      }
    }
  },
  defaultVariants: {
    scheme: 'default'
  }
});

export const TabIcon = styled('rect', {
  size: '$12',
  borderRadius: '2px',

  variants: {
    scheme: {
      default: {
        fill: 'hsl($pie700)'
      },
      mono: {

      }
    }
  },
  defaultVariants: {
    scheme: 'default'
  }
});
