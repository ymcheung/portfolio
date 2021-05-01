import { global } from '@stitches/react';

const globalStyles = global({
  'html': {
    boxSizing: 'border-box'
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },
  'body': {
    margin: 0
  }
});

export { globalStyles };
