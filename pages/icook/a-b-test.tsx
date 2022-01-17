import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HeadMeta from '@utils/HeadMeta';
import { webPage } from '@utils/schema/webPage';

import { TITLE_AFFIX } from 'constant';

import { globalCss } from 'stitches.config';

import IconAbTest from '@elements/IconAbTest';
import { Container, FullBlock } from '@components/layout';
import { HeadingLayout, Heading } from '@components/headings';
import Meta from '@projects/icook/abtest/Meta'
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=icook-abtest]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($shade1600)'
  }
});

export default function FulltimeABTest() {
  const router = useRouter();

  const { t } = useTranslation('home');

  useEffect(() => {
    document.body.setAttribute('data-body-style', 'icook-abtest');
  }, []);

  pageBody();

  const pageInfo = {
    name: t('home:fulltime.abtest.title'),
    description: t('home:fulltime.abtest.description'),
    datePublished: '2020-12-09',
    dateModified: '2022-01-04'
  };

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
      </Head>
      <HeadMeta
        title={`${pageInfo.name}${TITLE_AFFIX}`}
        description={pageInfo.description}
        ogCover="/projects/carrier/ogCover.jpg"
        canonical={router.pathname}
      />
      <FullBlock as="header" context="cover">
        <HeadingLayout as="h1" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} sibling="cover" iconl={{ '@initial': 'mobile', '@m768': 'tablet' }}>
          <span>
            <IconAbTest />
          </span>
          <Heading as="span" position="itemName">
            {pageInfo.name}
          </Heading>
        </HeadingLayout>
      </FullBlock>
      <FullBlock as="article" context="layout">
        <Container as="section" responsive={{'@m768': 'max640'}}>
          <Meta />
        </Container>
        {/* <Content /> */}
      </FullBlock>
      <Nav
        hasNext="Carrier Express"
        nextSlug="carrier-express"
        nextBg="generic"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['icook-abtest', 'home', 'meta']),
  },
});

