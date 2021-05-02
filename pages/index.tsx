import Head from 'next/head';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TITLE, AUTHOR } from '../constant';
import { styled, global } from '../stitches.config';
import { globalStyles } from '../utils/globalStyles';
import { Container } from '../components/Layout';

const indexBody = global({
  'body': {
    backgroundColor: '$shade1600'
  }
});

const Text = styled('p', {
  fontFamily: '$default',
  color: '$hiContrast'
})

const Link = styled('a', {
  fontFamily: '$default',
  textDecoration: 'none'
})

export default function Home() {
  const { t } = useTranslation('index');
  globalStyles();
  indexBody();

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Container size={{ '@initial': '1', '@m992': '2', '@m1200': '3' }}>
        <Text as="h1">{AUTHOR}</Text>
        <Text>
          For full documentation, visit{' '}
          <Link href="https://stitches.dev">stitches.dev</Link>.
        </Text>
      </Container>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['index']),
  },
})