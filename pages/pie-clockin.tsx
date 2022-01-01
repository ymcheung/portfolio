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
import Cover from '@projects/pie/Cover';

import IconPie from '@elements/IconPie';

import Meta from '@projects/pie/Meta';
import Content from '@projects/pie/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=pie]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($themePie)'
  }
});

export default function ProjectPie() {
  const router = useRouter();

  const { t } = useTranslation('home');

  const pageInfo = {
    name: t('home:project.pie.title', { redesign: t('home:verb.redesign') }),
    description: t('home:project.pie.description'),
    datePublished: '2020-08-29',
    dateModified: '2022-01-01'
  };

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
        title={`${pageInfo.name}${TITLE_AFFIX}`}
        description={pageInfo.description}
        ogCover="/projects/pie/og-cover.jpg"
        canonical={router.pathname}
      />
      <Cover />
      <FullLayout as="article">
        <Container as="section" responsive={{'@m768': 'max640'}}>
          <HeadingLayout responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} iconl={{ '@initial': 'mobile', '@m768': 'tablet' }}>
            <div>
              <IconPie />
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
        hasPrev="Carrier Express"
        prevSlug="carrier-express"
        prevBg="generic"
        hasNext="The Moment"
        nextSlug="moment"
        nextBg="moment"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['pie', 'home', 'meta']),
  },
});
