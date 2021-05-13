import { useEffect } from 'react';
import Head from 'next/head';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TITLE, AUTHOR, DESCRIPTION } from '../constant';
import SEO from '../utils/seo';

import { styled, global } from '../stitches.config';

import { globalStyles } from '../utils/globalStyles';
import { Container } from '../components/Layout';
import { Heading } from '../components/Headings';
import Projects from '../composition/Projects';
import Activity from '../composition/Activity';
import ExternalLinks from '../composition/ExternalLinks';
import Footer from '../components/Footer';

const pageBody = global({
  'body[data-body-style=home]': {
    minHeight: '100vh',
    paddingTop: '$4',
    backgroundColor: '$shade1600',

    '@m768': {
      paddingTop: '$12'
    }
  }
});

const NameDescription = styled('span', {
  color: '$shade700',
  fontFamily: '$default',
  fontSize: '$14'
});

export default function Home() {
  useEffect(() => {
    document.body.setAttribute('data-body-style', 'home');
  });

  globalStyles();
  pageBody();

  const { t } = useTranslation('index');
  
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@graph':
    [{
      '@type': 'WebPage',
      name: TITLE,
      description: DESCRIPTION,
      publisher: {
        '@type': 'ProfilePage',
        name: AUTHOR,
        sameAs: [
          'https://www.linkedin.com/in/ymcheungtw/',
          'https://intersection.tw'
        ]
      }
    },
    {
      '@type': 'ItemList',
      itemListElement:
      [
        {
          '@type':'ListItem',
          position: 1,
          url: 'https://ymcheung.tw/pie-clockin'
        },
        {
          '@type':'ListItem',
          position: 2,
          url: 'https://ymcheung.tw/moment'
        },
        {
          '@type':'ListItem',
          position: 3,
          url:' https://ymcheung.tw/intersection'
        },
        {
          '@type':'ListItem',
          position: 4,
          url:' https://ymcheung.tw/translate-design-process'
        }
      ]
    }
    ]
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <link href="https://fonts.googleapis.com/css?family=Overpass:300,400,400i,600,700i,800,800i&display=swap" rel="stylesheet" />
      </Head>
      <SEO />
      <Container as="header" responsive={{'@initial': 'full', '@m992': 'max960', '@m1200': 'max1168'}} hasSibling>
        <Heading as="h1" nameTag="index">{AUTHOR}</Heading>
        <NameDescription>{DESCRIPTION}</NameDescription>
      </Container>
      <Projects />
      <Activity />
      <ExternalLinks />
      <Footer responsive={{'@initial': 'full', '@m992': 'max960', '@m1200': 'max1168'}} scheme="light" />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['index']),
  },
});
