import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '@utils/HeadMeta';
import { webPage } from '@utils/schema/webPage';

import { global } from 'stitches.config';

import { Container } from '@components/layout';
import { Heading } from '@components/headings';
import { Section } from '@components/contentStyles';
import Meta from '@projects/intersection/Meta';
import Content from '@projects/intersection/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = global({
  'body[data-body-style=intersection]': {
    minHeight: '100vh',
    paddingTop: '$16',
    backgroundColor: 'hsl($shade1600)'
  }
});

export default function ProjectIntersection() {
  const router = useRouter();

  const pageInfo = {
    name: 'Intersection: A Publication of Translating Articles & Websites',
    description: 'Explore SEO and internationalization by translations.',
    datePublished: '2020-08-29',
    dateModified: '2021-08-16'
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
        title={pageInfo.name}
        description={pageInfo.description}
        ogCover="/project/intersection/og-cover.jpg"
        canonical={router.pathname}
      />
      <Container as="article" responsive={{'@m768': 'max640'}} space="isGroupEnd">
        <Section as="section">
          <Heading as="h1" position="itemName">{pageInfo.name}</Heading>
          <Meta />
        </Section>
        <Content />
      </Container>
      <Nav
        hasNext="Translating Design Process for Pros"
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
    ...await serverSideTranslations(locale, ['intersection']),
  },
});
