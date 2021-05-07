import Head from 'next/head';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TITLE, AUTHOR, DESCRIPTION } from '../constant';
import { styled, global } from '../stitches.config';
import { globalStyles } from '../utils/globalStyles';

import { Container } from '../components/Layout';
import { Heading } from '../components/Headings';
import Projects from '../components/home/Projects';
import Activity from '../components/home/Activity';
import ExternalLinks from '../components/home/ExternalLinks';
import Footer from '../components/Footer';

const indexBody = global({
  'body': {
    minHeight: '100vh',
    paddingTop: '$4',
    backgroundColor: '$shade1600',

    '@m768': {
      paddingTop: '$12'
    }
  }
});

const NameDescription = styled('span', {
  color: '$shade700',
  fontFamily: '$default',
  fontSize: '$14'
});

export default function Home() {
  const { t } = useTranslation('index');
  globalStyles();
  indexBody();

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <link href="https://fonts.googleapis.com/css?family=Overpass:300,400,400i,600,700i,800,800i&display=swap" rel="stylesheet" />
      </Head>
      <Container as="header" atHome hasSibling>
        <Heading as="h1" nameTag="index">{AUTHOR}</Heading>
        <NameDescription>{DESCRIPTION}</NameDescription>
      </Container>
      <Projects />
      <Activity />
      <ExternalLinks />
      <Footer atHome />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['index']),
  },
});
