import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '../utils/HeadMeta';
import { webPage } from '../utils/schema/webPage';

import { global } from '../stitches.config';

import { Container, ArticleBackground } from '../components/layout';
import { Heading } from '../components/headings';
import Meta from '../projects/process/Meta';
import Content from '../projects/process/Content';
import Nav from '../projects/Nav';
import Footer from '../components/Footer';

const pageBody = global({
  'body[data-body-style=intersection]': {
    minHeight: '100vh',
    paddingTop: '$16',
    backgroundColor: 'hsl($shade1600)'
  }
});

export default function ProjectProcess() {
  const router = useRouter();

  const pageInfo = {
    name: 'Translate “Design Process for Pros”',
    description: 'Retrospect an event gathing 20 designers to translate an e-book. Co-Operated with Cosign.',
    datePublished: '2020-08-29',
    dateModified: '2021-05-24'
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&family=Overpass:ital,wght@0,300;0,400;0,600;0,800;1,400;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <HeadMeta
        title={pageInfo.name}
        description={pageInfo.description}
        ogCover="/project/process/og-cover.jpg"
        canonical={router.pathname}
      />
      <ArticleBackground>
        <Container responsive={{'@m768': 'max640'}}>
          <Heading as="h1" position="itemName">{pageInfo.name}</Heading>
          <Meta />
          <Content />
        </Container>
      </ArticleBackground>
      <Nav
        hasPrev="Intersection"
        prevSlug="intersection"
        prevBg="light"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['process']),
  },
});
