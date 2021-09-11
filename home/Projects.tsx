import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Container, ListItem } from '@components/layout';
import { Heading } from '@components/headings';
import { HomeItemsLayout, HomeItemLink } from '@home/HomeItems';

import IconPie from '@elements/IconPie';
import IconMoment from '@elements/IconMoment';

export default function Projects() {
  const { t, i18n } = useTranslation('home');

  const isEng = i18n.language === 'en';

  return(
    <Container as="main" responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} space="hasSibling">
      <Heading position="homeSection" isitalic={isEng} dangerouslySetInnerHTML={{__html: t('project.title')}} />
      <HomeItemsLayout responsive={{'@initial': 'mobile', '@m768': 'tablet'}}>
        <ListItem nomark>
          <Link href="/pie-clockin" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@m768': 'tablet' }}>
              <IconPie />
              <Heading position="homeItemName">
                <span dangerouslySetInnerHTML={{__html: t('project.pie.title', { redesign: t('verb.redesign') })}} />
              </Heading>
            </HomeItemLink>
          </Link>
        </ListItem>
        <ListItem nomark>
          <Link href="/moment" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@m768': 'tablet' }}>
              <IconMoment />
              <Heading position="homeItemName">
                <span dangerouslySetInnerHTML={{__html: t('project.moment.title', { explore: t('verb.explore') })}} />
              </Heading>
            </HomeItemLink>
          </Link>
        </ListItem>
      </HomeItemsLayout>
    </Container>
  );
}
