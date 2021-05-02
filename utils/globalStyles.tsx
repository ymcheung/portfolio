import { global } from '../stitches.config';

const globalStyles = global({
  'html': {
    boxSizing: 'border-box',
    fontSize: '62.5%'
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },
  'body': {
    margin: 0,
    fontSize: '$2'
  }
});

export { globalStyles };
