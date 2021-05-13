import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '../utils/seo';

import { styled, global } from '../stitches.config';

import { globalStyles } from '../utils/globalStyles';
import { Container } from '../components/Layout';
import Footer from '../components/Footer';

const pageBody = global({
  'body[data-body-style=pie]': {
    minHeight: '100vh',
    backgroundColor: '$pie0'
  }
});

export default function ProjectPie() {
  useEffect(() => {
    document.body.setAttribute('data-body-style', 'pie');
  });
  globalStyles();
  pageBody();

  return(
    <>
      <Head>
        <title>Pie</title>
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} /> */}
        <link href="https://fonts.googleapis.com/css?family=Overpass:300,400,400i,600,700i,800,800i&display=swap" rel="stylesheet" />
      </Head>
      <SEO />
      <Container responsive={{'@initial': 'full', '@m768': 'max640'}} hasSibling>
        <Link href="/">Home</Link>
      </Container>
      <Footer responsive={{'@initial': 'full', '@m768': 'max640'}} scheme="dark" />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['pie']),
  },
});
