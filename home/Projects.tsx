import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Container, ListItem } from '@components/layout';
import { Heading, Verb } from '@components/headings';
import { HomeItemsLayout, HomeItemLink } from '@home/HomeItems';

import IconPie from '@elements/IconPie';
import IconMoment from '@elements/IconMoment';
import IconArrow from '@elements/IconArrow';

export default function Projects() {
  const { t, i18n } = useTranslation('home');

  const isEng = i18n.language === 'en';

  return(
    <Container as="main" responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} space="hasSibling">
      <Heading position="homeSection" isitalic={isEng} dangerouslySetInnerHTML={{__html: t('project.title')}} />
      <HomeItemsLayout responsive={{'@initial': 'mobile', '@m768': 'tablet'}}>
        <ListItem nomark>
          <Link href="/pie-clockin" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@m768': 'tablet' }} hover={{ '@mHover': 'pie' }}>
              <IconPie />
              <Heading position="homeItemName">
                <Verb foreng={isEng}>
                  {t('verb.redesign')}
                </Verb>
                <span dangerouslySetInnerHTML={{__html: t('project.pie.title')}} />
                &nbsp;
                <IconArrow wh="sq20" purpose="next" background="generic" gotoText="Go" />
              </Heading>
            </HomeItemLink>
          </Link>
        </ListItem>
        <ListItem nomark>
          <Link href="/moment" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@m768': 'tablet' }} hover={{ '@mHover': 'moment' }}>
              <IconMoment />
              <Heading position="homeItemName">
                <Verb foreng={isEng}>
                  {t('verb.explore')}
                </Verb>
                <span dangerouslySetInnerHTML={{__html: t('project.moment.title')}} />
                &nbsp;
                <IconArrow wh="sq20" purpose="next" background="generic" gotoText="Go" />
              </Heading>
            </HomeItemLink>
          </Link>
        </ListItem>
      </HomeItemsLayout>
    </Container>
  );
}
