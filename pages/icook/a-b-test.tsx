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

import FloatingNav from '@components/FloatingNav';
import Meta from '@projects/icook/abtest/Meta'
import Content from '@projects/icook/abtest/Content';
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

  const { t } = useTranslation(['home', 'nav']);

  useEffect(() => {
    document.body.setAttribute('data-body-style', 'icook-abtest');
  }, []);

  pageBody();

  const pageInfo = {
    name: t('home:fulltime.abtest.title'),
    description: t('home:fulltime.abtest.description'),
    datePublished: '2022-01-29',
    dateModified: '2022-03-25'
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
        <meta name="robots" content="noindex" />
      </Head>
      <HeadMeta
        title={`${pageInfo.name}${TITLE_AFFIX}`}
        description={pageInfo.description}
        ogCover="/projects/icook/ogCover.jpg"
        canonical={router.pathname}
      />
      <FloatingNav />
      <FullBlock as="header" context="cover">
        <HeadingLayout as="h1" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} sibling="cover" iconm={{ '@initial': 'mobile', '@m768': 'tablet' }}>
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
        <Content />
      </FullBlock>
      <Nav
        hasPrev={t('nav:pie')}
        prevSlug="pie-clockin"
        prevBg="pie"
        hasNext={t('nav:intersection')}
        nextSlug="intersection"
        nextBg="generic"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['icook', 'home', 'meta', 'nav']),
  },
});

