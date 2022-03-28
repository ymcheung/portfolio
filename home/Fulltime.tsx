import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Container, ListItem } from '@components/layout';
import { Heading } from '@components/headings';
import { HomeItemsLayout, HomeItemLink } from '@home/HomeItems';
import IconHyphen from './icons/IconHyphen';
import IconArrow from '@elements/IconArrow';

export default function Fulltime() {
  const { t, i18n } = useTranslation('home');
  const isEng = i18n.language === 'en';

  return(
    <Container as="main" responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} space="homeSection">
      <Heading position="homeSection" isitalic={isEng} dangerouslySetInnerHTML={{__html: t('fulltime.title')}} />
      <HomeItemsLayout tri={{ '@m768': 'tablet'}}>
        <ListItem nomark>
          <Link href="/icook/a-b-test" passHref>
            <HomeItemLink asminor={{ '@initial': 'mobile', '@m768': 'tablet', '@mHover': 'hover' }}>
              <IconHyphen purpose="activity" hideintablet={{ '@m768': true }} />
              <Heading position="homeItemName">
                {t('fulltime.abtest.title')}
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
