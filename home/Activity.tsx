import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Container, ListItem } from '@components/layout';
import { Heading } from '@components/headings';
import { HomeItemsLayout, HomeItemLink, HomeItemDescription } from './HomeItems';
import IconHyphen from './icons/IconHyphen';
import IconArrow from '@elements/IconArrow';

export default function Activity() {
  const { t, i18n } = useTranslation('home');

  const isEng = i18n.language === 'en';

  return(
    <Container responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} space="isGroupEnd">
      <Heading position="homeSection" isitalic={isEng} dangerouslySetInnerHTML={{__html: t('activity.title')}} />
      <HomeItemsLayout responsive={{'@initial': 'mobile', '@m768': 'tablet'}}>
        <ListItem nomark>
          <Link href="/intersection" passHref>
            <HomeItemLink asactivity={{ '@initial': 'mobile', '@m768': 'tablet' }}>
              <IconHyphen hideintablet={{ '@m768': true }} />
              <Heading position="homeItemName">
                {t('activity.intersection.title', { translate: t('verb.translate')})}
                &nbsp;
                <IconArrow wh="sq20" purpose="next" background="generic" gotoText="Go" />
              </Heading>
              <HomeItemDescription dangerouslySetInnerHTML={{__html: t('activity.intersection.description', { explore: t('verb.explore') })}} />
            </HomeItemLink>
          </Link>
          </ListItem>
        <ListItem nomark>
          <Link href="/translate-design-process" passHref>
            <HomeItemLink asactivity={{ '@initial': 'mobile', '@m768': 'tablet' }}>
              <IconHyphen hideintablet={{ '@m768': true }} />
              <Heading position="homeItemName">
                {t('activity.process.title', { translate: t('verb.translate')})}
                <IconArrow wh="sq20" purpose="next" background="generic" gotoText="Go" />
              </Heading>
              <HomeItemDescription dangerouslySetInnerHTML={{__html: t('activity.process.description', { retrospect: t('verb.retrospect') })}} />
            </HomeItemLink>
          </Link>
        </ListItem>
      </HomeItemsLayout>
    </Container>
  );
}
