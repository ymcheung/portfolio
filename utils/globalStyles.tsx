import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  html: {
    boxSizing: 'border-box',
    fontSize: '62.5%'
  },

  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },

  body: {
    margin: 0,
    transition: 'background-color 0.1s ease-in',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  }
});
