import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '../utils/HeadMeta';
import { webPage } from '../utils/schema/webPage';

import { global } from '../stitches.config';

import { Container, ArticleBackground } from '../components/layout';
import { Heading } from '../components/headings';
import Cover from '../projects/nuomi/Cover';
import Meta from '../projects/nuomi/Meta';
import Content from '../projects/nuomi/Content';
import Nav from '../projects/Nav';
import Footer from '../components/Footer';

const pageBody = global({
  'body[data-body-style=nuomi]': {
    minHeight: '100vh',
    paddingTop: '560px',
    backgroundColor: 'hsl($nuomiBlack0)'
  }
});

export default function ProjectNuomi() {
  const router = useRouter();

  const pageInfo = {
    name: 'Retrospect Nuomi’s Portfolio',
    description: 'Nuomi’s Portfolio with hand-drawn VR experience',
    datePublished: '2020-08-29',
    dateModified: '2021-05-20'
  }

  useEffect(() => {
    document.body.setAttribute('data-body-style', 'nuomi');
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
        ogCover="/project/nuomi/og-cover.jpg"
        canonical={router.pathname}
      />
      <Cover />
      <ArticleBackground as="main" project="nuomi">
        <Container responsive={{'@m768': 'max640'}}>
          <Heading as="h1" position="itemName">{pageInfo.name}</Heading>
          <Meta />
          <Content />
        </Container>
      </ArticleBackground>
      <Nav
        scheme="dark"
        hasNext="Intersection"
        nextSlug="intersection"
        nextBg="dark"
        hasPrev="The Moment"
        prevSlug="moment"
        prevBg="moment"
        project="nuomi"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['nuomi']),
  },
});
