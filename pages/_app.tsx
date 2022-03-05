import { ThemeProvider } from 'next-themes';
import { theme, darkTheme } from 'stitches.config';
import splitbee from '@splitbee/web';

import { appWithTranslation } from 'next-i18next';
import { globalStyles } from '@utils/globalStyles';

function Portfolio({ Component, pageProps }) {
  globalStyles();
  splitbee.init();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      value={{
        light: 'light',
        dark: darkTheme
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(Portfolio);
