import { ThemeProvider } from 'next-themes';
import { dark } from '../stitches.config';

import { appWithTranslation } from 'next-i18next';
import { globalStyles } from '../utils/globalStyles';

function Portfolio({ Component, pageProps }) {
  globalStyles();

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      value={{
        dark: dark.className,
        light: 'light',
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(Portfolio);
