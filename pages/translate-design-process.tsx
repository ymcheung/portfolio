import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '../utils/HeadMeta';
import { webPage } from '../utils/schema/webPage';

import { global } from '../stitches.config';

import { Container } from '../components/layout';
import { Heading } from '../components/headings';
import { Section } from '../components/contentStyles';
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
    dateModified: '2021-07-09'
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
        ogCover="/project/process/og-cover.jpg"
        canonical={router.pathname}
      />
      <Container as="article" responsive={{'@m768': 'max640'}} isgroupend>
        <Section as="section">
          <Heading as="h1" position="itemName">{pageInfo.name}</Heading>
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
    ...await serverSideTranslations(locale, ['process']),
  },
});
