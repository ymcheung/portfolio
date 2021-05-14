import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '../utils/HeadMeta';
import { webPage } from '../utils/schema/webPage';

import { global } from '../stitches.config';

import { globalStyles } from '../utils/globalStyles';
import { Container } from '../components/Layout';
import { Heading } from '../components/Headings';
import Meta from '../projects/pie/Meta';
import Footer from '../components/Footer';

const pageBody = global({
  'body[data-body-style=pie]': {
    minHeight: '100vh',
    backgroundColor: '$pie0'
  }
});

export default function ProjectPie() {
  const pageInfo = {
    name: 'Explore UI of a Clock-In Web App',
    description: 'A side project exploring fluent UI design.',
    datePublished: '2020-08-29',
    dateModified: '2021-05-20'
  }

  useEffect(() => {
    document.body.setAttribute('data-body-style', 'pie');
  });
  globalStyles();
  pageBody();

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      webPage(pageInfo)
    ]
  };

  return(
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&family=Overpass:ital,wght@0,300;0,400;0,600;0,800;1,400;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <HeadMeta
        title={pageInfo.name}
        description={pageInfo.description}
      />
      <Container responsive={{'@m768': 'max640'}} hasSibling>
        <Heading itemName="dark">{pageInfo.name}</Heading>
        <Meta />
      </Container>
      <Footer responsive={{'@m768': 'max640'}} inProject={{'@m992': true}} scheme="dark" />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['pie']),
  },
});
