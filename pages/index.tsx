import Head from 'next/head';
import { styled, global } from '../stitches.config';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { globalStyles } from '../utils/globalStyles';
import StitchesLogo from '../components/StitchesLogo';

const indexBody = global({
  'body': {
    backgroundColor: '$shade1600'
  }
});

const Text = styled('p', {
  fontFamily: '$default',
  color: '$hiContrast',
})

const Link = styled('a', {
  fontFamily: '$default',
  textDecoration: 'none',
  color: '$purple600',
})

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      '1': {
        maxWidth: '300px',
      },
      '2': {
        maxWidth: '585px',
      },
      '3': {
        maxWidth: '865px',
      },
    },
  },
})

export default function Home() {
  const { t } = useTranslation('index');
  globalStyles();
  indexBody();

  return (
    <>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <StitchesLogo />
        <Text as="h1">Hello, from Stitches.</Text>
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