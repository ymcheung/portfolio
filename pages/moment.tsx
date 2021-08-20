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
import Cover from '@projects/moment/Cover';
import Meta from '@projects/moment/Meta';
import Content from '@projects/moment/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = global({
  'body[data-body-style=moment]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($themeMoment)'
  }
});

export default function ProjectMoment() {
  const router = useRouter();

  const pageInfo = {
    name: 'Explore the moment when hearing a song in the movies/dramas',
    description: 'How might we display the moment when hearing the songs you like in the movies/dramas?',
    datePublished: '2020-08-29',
    dateModified: '2021-08-20'
  }

  useEffect(() => {
    document.body.setAttribute('data-body-style', 'moment');
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <HeadMeta
        title={pageInfo.name}
        description={pageInfo.description}
        ogCover="/project/moment/og-cover.jpg"
        canonical={router.pathname}
      />
      <Cover />
      <Container as="article" responsive={{'@m768': 'max640'}} space="isGroupEnd">
        <Section as="section">
          <Heading as="h1" position="itemName">{pageInfo.name}</Heading>
          <Meta />
        </Section>
        <Content />
      </Container>
      <Nav
        hasNext="Nuomi&rsquo;s Portfolio"
        nextSlug="nuomi"
        nextBg="nuomi"
        hasPrev="Redesign a Clock-In App"
        prevSlug="pie-clockin"
        prevBg="pie"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['moment']),
  },
});
