import { global } from '../stitches.config';

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
