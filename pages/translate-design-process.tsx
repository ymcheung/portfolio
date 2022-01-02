import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '@utils/HeadMeta';
import { webPage } from '@utils/schema/webPage';

import { TITLE_AFFIX } from 'constant';
import { globalCss } from 'stitches.config';

import { Container } from '@components/layout';
import { Heading } from '@components/headings';
import { Section } from '@components/contentStyles';
import Cover from '@projects/process/Cover';
import Meta from '@projects/process/Meta';
import Content from '@projects/process/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=intersection]': {
    minHeight: '100vh',
    paddingTop: '$16',
    backgroundColor: 'hsl($shade1600)'
  }
});

export default function ProjectProcess() {
  const router = useRouter();

  const { t } = useTranslation('home');

  const pageInfo = {
    name: t('home:activity.process.title', { translate: t('home:verb.translate') }),
    description: t('home:activity.process.description', { retrospect: t('home:verb.retrospect') }),
    datePublished: '2020-08-29',
    dateModified: '2022-01-01'
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
      <Cover />
      <Container as="article" responsive={{'@m768': 'max640'}} space="isGroundFloor">
        <Section as="section">
          <Heading as="h1" position="itemName" ownmargin>{pageInfo.name}</Heading>
          <Meta />
        </Section>
        <Content />
      </Container>
      <Nav
        hasPrev="Intersection"
        prevSlug="intersection"
        prevBg="generic"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['process', 'home', 'meta']),
  },
});
