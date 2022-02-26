import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';

import { styled } from 'stitches.config';

import { Container, ListItem } from '@components/layout';
import { Heading } from '@components/headings';
import { HomeItemsLayout, HomeItemLink, HomeItemType } from '@home/HomeItems';

export default function Projects() {
  const { t, i18n } = useTranslation('home');
  const isEng = i18n.language === 'en';

  return(
    <Container as="main" responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} space="homeSection">
      <Heading position="homeSection" isitalic={isEng} dangerouslySetInnerHTML={{__html: t('project.title')}} />
      <HomeItemsLayout duo={{ '@m768': 'tablet' }}>
        <ListItem nomark>
          <Link href="/carrier-express" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@mHover': 'hover' }}>
              <HomeItemType dangerouslySetInnerHTML={{__html: t('project.type.app')}} project="carrier" />
              <Heading position="homeItemName" dangerouslySetInnerHTML={{__html: t('project.carrier.title')}} />
            </HomeItemLink>
          </Link>
        </ListItem>
        <ListItem nomark>
          <Link href="/moment" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@mHover': 'hover' }}>
              <HomeItemType dangerouslySetInnerHTML={{__html: t('project.type.web')}} project="moment" />
              <Heading position="homeItemName" dangerouslySetInnerHTML={{__html: t('project.moment.title')}} />
            </HomeItemLink>
          </Link>
        </ListItem>
        <ListItem nomark>
          <Link href="/pie-clockin" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@mHover': 'hover' }}>
              <HomeItemType dangerouslySetInnerHTML={{__html: t('project.type.app')}} project="pie" />
              <Heading position="homeItemName" dangerouslySetInnerHTML={{__html: t('project.pie.title', { redesign: t('verb.redesign') })}} />
            </HomeItemLink>
          </Link>
        </ListItem>
      </HomeItemsLayout>
    </Container>
  );
}
