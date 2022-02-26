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
import { Section } from '@components/contentStyles';

import IconIntersection from '@elements/IconIntersection';

import Meta from '@projects/intersection/Meta';
import Content from '@projects/intersection/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=intersection]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($shade1600)'
  }
});

export default function ProjectIntersection() {
  const router = useRouter();

  const { t } = useTranslation(['home', 'nav']);

  const pageInfo = {
    name: t('home:activity.intersection.fullTitle'),
    description: t('home:activity.intersection.description', { explore: t('home:verb.explore') }),
    datePublished: '2020-08-29',
    dateModified: '2022-02-12'
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
        ogCover="/projects/intersection/ogCover.jpg"
        canonical={router.pathname}
      />
      <FullBlock as="header" context="cover">
        <HeadingLayout as="h1" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} sibling="none" iconm={{ '@initial': 'mobile', '@m768': 'tablet' }}>
          <span>
            <IconIntersection />
          </span>
          <Heading as="span" position="itemName">
            {pageInfo.name}
          </Heading>
        </HeadingLayout>
      </FullBlock>
      <Container as="article" responsive={{'@m768': 'max640'}} space="isGroundFloor">
        <Section as="section">
          <Meta />
        </Section>
        <Content />
      </Container>
      <Nav
        hasNext={t('nav:process')}
        nextSlug="translate-design-process"
        nextBg="generic"
        hasPrev={t('nav:pie')}
        prevSlug="pie-clockin"
        prevBg="pie"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['intersection', 'home', 'meta', 'nav']),
  },
});
