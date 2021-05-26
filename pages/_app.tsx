import { appWithTranslation } from 'next-i18next';
import { globalStyles } from '../utils/globalStyles';

function Portfolio({ Component, pageProps }) {
  globalStyles();

  return <Component {...pageProps} />
}

export default appWithTranslation(Portfolio);
