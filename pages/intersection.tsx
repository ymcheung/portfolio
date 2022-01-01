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
import { HeadingLayout, Heading } from '@components/headings';
import { Section } from '@components/contentStyles';

import IconIntersection from '@elements/IconIntersection';

import Meta from '@projects/intersection/Meta';
import Content from '@projects/intersection/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=intersection]': {
    minHeight: '100vh',
    paddingTop: '$16',
    backgroundColor: 'hsl($shade1600)'
  }
});

export default function ProjectIntersection() {
  const router = useRouter();

  const { t } = useTranslation('home');

  const pageInfo = {
    name: t('home:activity.intersection.fullTitle'),
    description: t('home:activity.intersection.description', { explore: t('home:verb.explore') }),
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
        ogCover="/projects/intersection/og-cover.jpg"
        canonical={router.pathname}
      />
      <Container as="article" responsive={{'@m768': 'max640'}} space="isGroundFloor">
        <Section as="section">
          <HeadingLayout responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} iconm={{ '@initial': 'mobile', '@m768': 'tablet' }}>
            <div>
              <IconIntersection />
            </div>
            <Heading as="h1" position="itemName">
              {pageInfo.name}
            </Heading>
          </HeadingLayout>
          <Meta />
        </Section>
        <Content />
      </Container>
      <Nav
        hasNext="Translate “Design Process for Pros”"
        nextSlug="translate-design-process"
        nextBg="generic"
        hasPrev="Nuomi’s Portfolio"
        prevSlug="nuomi"
        prevBg="nuomi"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['intersection', 'home']),
  },
});
