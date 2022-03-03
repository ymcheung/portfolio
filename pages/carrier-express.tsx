import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '@utils/HeadMeta';
import { webPage } from '@utils/schema/webPage';

import { TITLE_AFFIX } from 'constant';
import { globalCss } from 'stitches.config';

import { Container, FullBlock } from '@components/layout';
import { HeadingLayout, Heading } from '@components/headings';
import Cover from '@projects/carrier/Cover';

import IconCarrier from '@elements/IconCarrier';

import Meta from '@projects/carrier/Meta';
import Content from '@projects/carrier/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=carrier]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($shade1600)'
  }
});

export default function ProjectCarrier() {
  const router = useRouter();

  const { t } = useTranslation(['home', 'nav']);

  const pageInfo = {
    name: t('home:project.carrier.title'),
    description: t('home:project.carrier.description'),
    datePublished: '2021-12-09',
    dateModified: '2022-01-04'
  };

  useEffect(() => {
    document.body.setAttribute('data-body-style', 'carrier');
  }, []);

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
      </Head>
      <HeadMeta
        title={`${pageInfo.name}${TITLE_AFFIX}`}
        description={pageInfo.description}
        ogCover="/projects/carrier/ogCover.jpg"
        canonical={router.pathname}
      />
      <FullBlock as="header" context="cover">
        <HeadingLayout as="h1" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} sibling="cover">
          <Heading as="span" position="itemName">
            {pageInfo.name}
          </Heading>
        </HeadingLayout>
        <Cover />
      </FullBlock>
      <FullBlock as="article" context="layout">
        <Container as="section" responsive={{'@m768': 'max640'}}>
          <Meta />
        </Container>
        <Content />
      </FullBlock>
      <Nav
        hasPrev={t('nav:abtest')}
        prevSlug="icook/a-b-test"
        prevBg="generic"
        hasNext={t('nav:moment')}
        nextSlug="moment"
        nextBg="moment"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['carrier', 'home', 'meta', 'nav']),
  },
});
