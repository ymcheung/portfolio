import { ThemeProvider } from 'next-themes';
import { dark } from 'stitches.config';
import splitbee from '@splitbee/web';

import { appWithTranslation } from 'next-i18next';
import { globalStyles } from '@utils/globalStyles';

function Portfolio({ Component, pageProps }) {
  globalStyles();
  splitbee.init();

  return (
    <ThemeProvider
      attribute='class'
      enableColorScheme
      value={{
        dark: dark,
        light: 'light',
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(Portfolio);
