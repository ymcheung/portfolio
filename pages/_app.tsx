import { globalStyles } from '../utils/globalStyles';

function Portfolio({ Component, pageProps }) {
  globalStyles();

  return <Component {...pageProps} />
}

export default Portfolio;
