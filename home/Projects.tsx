import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';

import { styled } from 'stitches.config';

import { Container, ListItem } from '@components/layout';
import { Heading } from '@components/headings';
import { HomeItemsLayout, HomeItemLink, HomeItemType } from '@home/HomeItems';

const ProjectScreen = styled('figure', {
  position: 'relative',
  margin: '-$8 0 0 -$8',
  padding: '0 $24 0 0',

  variants: {
    responsive: {
      tablet: {
        gridArea: 'screen',
        padding: '0 $16 0 0',
      }
    }
  },

  '&::after': {
    display: 'block',
    height: '$80',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    content: '',
    background: `linear-gradient(to bottom,
                 hsla($shade1500, 0) 0%,
                 hsla($shade1500, 0.013) 18.2%,
                 hsla($shade1500, 0.049) 33%,
                 hsla($shade1500, 0.104) 44.8%,
                 hsla($shade1500, 0.175) 54%,
                 hsla($shade1500, 0.259) 61%,
                 hsla($shade1500, 0.352) 66.3%,
                 hsla($shade1500, 0.45) 70.2%,
                 hsla($shade1500, 0.55) 73.1%,
                 hsla($shade1500, 0.648) 75.5%,
                 hsla($shade1500, 0.741) 77.6%,
                 hsla($shade1500, 0.825) 80%,
                 hsla($shade1500, 0.896) 83.1%,
                 hsla($shade1500, 0.951) 87.1%,
                 hsla($shade1500, 0.987) 92.7%,
                 hsl($shade1500) 100%)`
  }
});

const ProjectScreenImg = styled('img', {
  maxWidth: '100%',
  borderRadius: '12px',

  variants: {
    scheme: {
      dark: {
        boxShadow: 'none'
      },
      light: {
        boxShadow: `0.3px 0.2px 0.4px hsla($colors$shade1400,0.36),
                    1.1px 0.5px 1.4px -0.8px hsla($colors$shade1400,0.36),
                    2.7px 1.3px 3.4px -1.7px hsla($colors$shade1400,0.36),
                    6.5px 3.2px 8.2px -2.5px hsla($colors$shade1400,0.36)`
      }
    }
  }
});

export default function Projects() {
  const { t } = useTranslation('home');
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  const screenLang = router.locale === 'en' ? 'en' : 'tw';
  const screenScheme = resolvedTheme === 'light' ? 'light' : 'dark';

  return(
    <Container as="main" responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} space="homeSection">
      <Heading position="homeSection" isitalic={router.locale === 'en'} dangerouslySetInnerHTML={{__html: t('project.title')}} />
      <HomeItemsLayout duo={{ '@m768': 'tablet' }}>
        <ListItem nomark>
          <Link href="/carrier-express" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@m768': 'tablet', '@mHover': 'hover' }}>
              <ProjectScreen responsive={{ '@m768': 'tablet' }}>
                <ProjectScreenImg scheme={screenScheme} src={`/home/screen/carrier/${screenLang}/${screenScheme}.webp`} alt="" loading="lazy" />
              </ProjectScreen>
              <HomeItemType responsive={{ '@m768': 'tablet' }} dangerouslySetInnerHTML={{__html: t('project.type.app')}} />
              <Heading position="homeItemName" dangerouslySetInnerHTML={{__html: t('project.carrier.title')}} />
            </HomeItemLink>
          </Link>
        </ListItem>
        <ListItem nomark>
          <Link href="/moment" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@m768': 'tablet', '@mHover': 'hover' }}>
              <ProjectScreen responsive={{ '@m768': 'tablet' }}>
                <ProjectScreenImg scheme={screenScheme} src={`/home/screen/moment/${screenLang}/${screenScheme}.webp`} alt="" loading="lazy" />
              </ProjectScreen>
              <HomeItemType  responsive={{ '@m768': 'tablet' }} dangerouslySetInnerHTML={{__html: t('project.type.web')}} />
              <Heading position="homeItemName" dangerouslySetInnerHTML={{__html: t('project.moment.title')}} />
            </HomeItemLink>
          </Link>
        </ListItem>
        <ListItem nomark>
          <Link href="/pie-clockin" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@m768': 'tablet', '@mHover': 'hover' }}>
              <ProjectScreen responsive={{ '@m768': 'tablet' }}>
                <ProjectScreenImg scheme={screenScheme} src={`/home/screen/pie/en/${screenScheme}.webp`} alt="" loading="lazy" />
              </ProjectScreen>
              <HomeItemType  responsive={{ '@m768': 'tablet' }} dangerouslySetInnerHTML={{__html: t('project.type.app')}} />
              <Heading position="homeItemName" dangerouslySetInnerHTML={{__html: t('project.pie.title', { redesign: t('verb.redesign') })}} />
            </HomeItemLink>
          </Link>
        </ListItem>
      </HomeItemsLayout>
    </Container>
  );
}
