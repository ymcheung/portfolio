import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '../utils/HeadMeta';
import { webPage } from '../utils/schema/webPage';

import { global } from '../stitches.config';

import { Container, FullLayout } from '@components/layout';
import { Heading } from '@components/headings';
import Cover from '../projects/pie/Cover';
import Meta from '../projects/pie/Meta';
import Content from '../projects/pie/Content';
import Nav from '../projects/Nav';
import Footer from '@components/Footer';

const pageBody = global({
  'body[data-body-style=pie]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($backgroundPie)'
  }
});

export default function ProjectPie() {
  const pageInfo = {
    name: 'Redesign UI of a Clock-In App',
    description: 'A side project exploring fluent UI design.',
    datePublished: '2020-08-29',
    dateModified: '2021-07-31'
  };

  const router = useRouter();

  useEffect(() => {
    document.body.setAttribute('data-body-style', 'pie');
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
        title={pageInfo.name}
        description={pageInfo.description}
        ogCover="/project/pie/og-cover.jpg"
        canonical={router.pathname}
      />
      <Cover />
      <FullLayout as="article">
        <Container as="section" responsive={{'@m768': 'max640'}}>
          <Heading as="h1" position="itemName">{pageInfo.name}</Heading>
          <Meta />
        </Container>
        <Content />
      </FullLayout>
      <Nav hasNext="The Moment" nextSlug="moment" nextBg="moment" />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['pie']),
  },
});
