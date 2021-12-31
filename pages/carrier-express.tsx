import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '@utils/HeadMeta';
import { webPage } from '@utils/schema/webPage';

import { TITLE_AFFIX } from 'constant';
import { globalCss } from 'stitches.config';

import { Container, FullLayout } from '@components/layout';
import { HeadingLayout, Heading } from '@components/headings';
import Cover from '@projects/carrier/Cover';

import IconCarrier from '@elements/IconCarrier';

import Meta from '@projects/carrier/Meta';
import Content from '@projects/carrier/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=carrier]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($shade1600)'
  }
});

export default function ProjectCarrier() {
  const router = useRouter();

  const { t } = useTranslation('home');

  const pageInfo = {
    name: t('home:project.carrier.title'),
    description: t('home:project.carrier.description'),
    datePublished: '2020-12-09',
    dateModified: '2021-12-22'
  };

  useEffect(() => {
    document.body.setAttribute('data-body-style', 'carrier');
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
        title={`${pageInfo.name}${TITLE_AFFIX}`}
        description={pageInfo.description}
        ogCover="/projects/carrier/og-cover.jpg"
        canonical={router.pathname}
      />
      <Cover />
      <FullLayout as="article">
        <Container as="section" responsive={{'@m768': 'max640'}}>
          <HeadingLayout responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} iconl={{ '@initial': 'mobile', '@m768': 'tablet' }}>
            <div>
              <IconCarrier />
            </div>
            <Heading as="h1" position="itemName">
              {pageInfo.name}
            </Heading>
          </HeadingLayout>
          <Meta />
        </Container>
        <Content />
      </FullLayout>
      <Nav
        hasNext="Redesign a Clock-In App"
        nextSlug="pie-clockin"
        nextBg="pie"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['carrier', 'home', 'meta']),
  },
});
