import { useEffect } from 'react';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TITLE, AUTHOR, DESCRIPTION } from '../constant';
import HeadMeta from '../utils/HeadMeta';

import { styled, global } from '../stitches.config';

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

const Header = styled('header', {
  position: 'relative',
  marginBottom: '$12',
  borderBottom: '2px solid hsl($shade1400)',

  variants: {
    responsive: {
      mobile: {
        minHeight: '300px',
        paddingTop: '48px'
      },
      tablet: {
        minHeight: '225px'
      }
    }
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
      datePublished: '2016-04-16',
      dateModified: '2021-07-07',
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
      </Head>
      <HeadMeta />
      <Header responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
        <NameHeader />
      </Header>
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
