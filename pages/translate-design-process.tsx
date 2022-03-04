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
import { Heading, HeadingLayout } from '@components/headings';
import { Section } from '@components/contentStyles';
import Cover from '@projects/process/Cover';

import FloatingNav from '@components/FloatingNav';
import Meta from '@projects/process/Meta';
import Content from '@projects/process/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=intersection]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($shade1600)'
  }
});

export default function ProjectProcess() {
  const router = useRouter();

  const { t } = useTranslation(['home', 'nav']);

  const pageInfo = {
    name: t('home:activity.process.title', { translate: t('home:verb.translate') }),
    description: t('home:activity.process.description', { retrospect: t('home:verb.retrospect') }),
    datePublished: '2020-08-29',
    dateModified: '2022-01-04'
  }

  useEffect(() => {
    document.body.setAttribute('data-body-style', 'intersection');
  });
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
        ogCover="/projects/process/ogCover.jpg"
        canonical={router.pathname}
      />
      <FloatingNav />
      <FullBlock as="header" context="cover">
        <HeadingLayout as="h1" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} sibling="cover">
          <Heading as="span" position="itemName">
            {pageInfo.name}
          </Heading>
        </HeadingLayout>
        <Cover />
      </FullBlock>
      <Container as="article" responsive={{'@m768': 'max640'}} space="isGroundFloor">
        <Section as="section">
          <Meta />
        </Section>
        <Content />
      </Container>
      <Nav
        hasPrev={t('nav:intersection')}
        prevSlug="intersection"
        prevBg="generic"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['process', 'home', 'meta', 'nav']),
  },
});
