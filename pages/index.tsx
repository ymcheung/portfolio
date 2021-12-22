import { useEffect } from 'react';
import Head from 'next/head';
import splitbee from '@splitbee/web';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TITLE, AUTHOR, DESCRIPTION } from 'constant';
import HeadMeta from '@utils/HeadMeta';

import { styled, globalCss, keyframes } from 'stitches.config';

import NameHeader from '@home/NameHeader';
import Projects from '@home/Projects';
import Activity from '@home/Activity';
import ExternalLinks from '@home/ExternalLinks';
import Footer from '@components/Footer';
import { GetStaticProps } from 'next';

const pageBody = globalCss({
  'body[data-body-style=home]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($shade1600)',
  }
});

const Header = styled('header', {
  position: 'relative',
  marginBottom: '32px',
  borderBottom: '2px solid hsl($shade1400)',

  variants: {
    responsive: {
      mobile: {
        paddingTop: '48px',
        minHeight: '224px'
      },
      tablet: {
        minHeight: '216px'
      }
    }
  }
});

const floatingCans = keyframes({
  '0%': { backgroundPositionY: '0' },
  '100%': { backgroundPositionY: '-360px' },
});

const Cans = styled('div', {
  height: '140px',
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1,
  background: 'url(/home/cans.svg) 0 0 / 120px 120px transparent',
  animation: `${floatingCans} 36s linear infinite`,

  '&::after': {
    height: '140px',
    content: '',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
    backgroundImage: `linear-gradient(
      to top,
      hsla($shade1600, 0) 0%,
      hsla($shade1600, 0.013) 8.1%,
      hsla($shade1600, 0.049) 15.5%,
      hsla($shade1600, 0.104) 22.5%,
      hsla($shade1600, 0.175) 29%,
      hsla($shade1600, 0.259) 35.3%,
      hsla($shade1600, 0.352) 41.2%,
      hsla($shade1600, 0.45) 47.1%,
      hsla($shade1600, 0.55) 52.9%,
      hsla($shade1600, 0.648) 58.8%,
      hsla($shade1600, 0.741) 64.7%,
      hsla($shade1600, 0.825) 71%,
      hsla($shade1600, 0.896) 77.5%,
      hsla($shade1600, 0.951) 84.5%,
      hsla($shade1600, 0.987) 91.9%,
      hsl($shade1600) 100%)`
  },

  variants: {
    animation: {
      reduced: {
        animation: 'none'
      }
    }
  }
});

export default function Home() {
  useEffect(() => {
    document.body.setAttribute('data-body-style', 'home');

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      splitbee.track('Scheme', {
        scheme: 'Dark'
      });
    }
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
      dateModified: '2021-12-10',
      publisher: {
        '@type': 'ProfilePage',
        name: AUTHOR,
        sameAs: [
          'https://www.linkedin.com/in/ymcheungtw/',
          'https://github.com/ymcheung'
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
          url: 'https://ymcheung.tw/carrier-express'
        },
        {
          '@type':'ListItem',
          position: 2,
          url: 'https://ymcheung.tw/pie-clockin'
        },
        {
          '@type':'ListItem',
          position: 3,
          url: 'https://ymcheung.tw/moment'
        },
        {
          '@type':'ListItem',
          position: 4,
          url:' https://ymcheung.tw/intersection'
        },
        {
          '@type':'ListItem',
          position: 5,
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
        <Cans animation={{ '@mReduced': 'reduced' }} />
      </Header>
      <Projects />
      <Activity />
      <ExternalLinks />
      <Footer responsive={{'@m992': 'max960', '@m1200': 'max1168'}} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['home']),
  },
});
