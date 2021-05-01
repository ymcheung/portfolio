import Head from 'next/head';
import { styled } from '../stitches.config';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { globalStyles } from '../utils/globalStyles'
import StitchesLogo from '../components/StitchesLogo';

const Box = styled('div', {})

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
})

const Link = styled('a', {
  fontFamily: '$system',
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

  return (
    <Box css={{ paddingY: '$6' }}>
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
    </Box>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['index']),
  },
})