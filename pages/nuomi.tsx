import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '@utils/HeadMeta';
import { webPage } from '@utils/schema/webPage';

import { globalCss } from 'stitches.config';

import { Container, FullBlock } from '@components/layout';
import { HeadingLayout, Heading } from '@components/headings';
import Cover from '@projects/nuomi/Cover';
import Meta from '@projects/nuomi/Meta';
import Content from '@projects/nuomi/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=nuomi]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($themeNuomi)'
  }
});

export default function ProjectNuomi() {
  const router = useRouter();

  const { t } = useTranslation(['home', 'nav']);

  const pageInfo = {
    name: t('home:project.nuomi.title', { retrospect: t('home:verb.retrospect') }),
    description: t('home:project.nuomi.description'),
    datePublished: '2020-08-29',
    dateModified: '2022-01-04'
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
      </Head>
      <HeadMeta
        title={pageInfo.name}
        description={pageInfo.description}
        ogCover="/projects/nuomi/ogCover.jpg"
        canonical={router.pathname}
      />
      <FullBlock as="header" project="nuomi" context="cover">
        <HeadingLayout as="h1" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} sibling="cover">
          <Heading as="span" position="itemName" scheme="monoBlack">
            {pageInfo.name}
          </Heading>
        </HeadingLayout>
        <Cover />
      </FullBlock>
      <FullBlock as="article" context="layout">
        <Container as="section" responsive={{'@m768': 'max640'}}>
          <Meta />
        </Container>
        <Content />
      </FullBlock>
      <Nav
        hasNext={t('nav:intersection')}
        nextSlug="intersection"
        nextBg="generic"
        hasPrev={t('nav:moment')}
        prevSlug="moment"
        prevBg="moment"
      />
      <Footer responsive={{'@m768': 'max640'}} inproject={{'@m992': true}} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['nuomi', 'home', 'meta', 'nav']),
  },
});
