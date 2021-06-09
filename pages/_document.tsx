import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { getCssString } from '../stitches.config';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
          </>
        ),
      };
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {
            process.env.NODE_ENV === 'production' &&
            <script async src="https://cdn.splitbee.io/sb.js" />
          }
          <link rel="icon" href="/favicon/ym.ico" />
          <link rel="icon" href="/favicon/ym.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
          <link rel="manifest" href="/favicon/manifest.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
