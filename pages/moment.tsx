import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeadMeta from '@utils/HeadMeta';
import { webPage } from '@utils/schema/webPage';

import { TITLE_AFFIX } from 'constant';
import { globalCss } from 'stitches.config';

import { Container } from '@components/layout';
import { HeadingLayout, Heading } from '@components/headings';
import { Section } from '@components/contentStyles';
import Cover from '@projects/moment/Cover';

import IconMoment from '@elements/IconMoment';

import Meta from '@projects/moment/Meta';
import Content from '@projects/moment/Content';
import Nav from '@projects/Nav';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=moment]': {
    minHeight: '100vh',
    backgroundColor: 'hsl($themeMoment)'
  }
});

export default function ProjectMoment() {
  const router = useRouter();

  const { t } = useTranslation('home');

  const pageInfo = {
    name: t('home:project.moment.title', { explore: t('home:verb.explore') }),
    description: t('home:project.moment.description'),
    datePublished: '2020-08-29',
    dateModified: '2021-10-22'
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
        title={`${pageInfo.name}${TITLE_AFFIX}`}
        description={pageInfo.description}
        ogCover="/projects/moment/og-cover.jpg"
        canonical={router.pathname}
      />
      <Cover />
      <Container as="article" responsive={{'@m768': 'max640'}} space="isGroupEnd">
        <Section as="section">
          <HeadingLayout responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} iconl={{ '@initial': 'mobile', '@m768': 'tablet' }}>
            <div>
              <IconMoment />
            </div>
            <Heading as="h1" position="itemName">
              {pageInfo.name}
            </Heading>
          </HeadingLayout>
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
    ...await serverSideTranslations(locale, ['moment', 'home']),
  },
});
