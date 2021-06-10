import { useEffect } from 'react';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TITLE, AUTHOR, DESCRIPTION } from '../constant';
import HeadMeta from '../utils/HeadMeta';

import { global } from '../stitches.config';

import NameHeader from '../home/NameHeader';
import Projects from '../home/Projects';
import Activity from '../home/Activity';
import ExternalLinks from '../home/ExternalLinks';
import Footer from '../components/Footer';

const pageBody = global({
  'body[data-body-style=home]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($shade1600)',
  }
});

export default function Home() {
  useEffect(() => {
    document.body.setAttribute('data-body-style', 'home');
  });

  pageBody();

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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,400;0,600;0,800;1,400;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <HeadMeta />
      <NameHeader />
      <Projects />
      <Activity />
      <ExternalLinks />
      <Footer responsive={{'@m992': 'max960', '@m1200': 'max1168'}} />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['home']),
  },
});
