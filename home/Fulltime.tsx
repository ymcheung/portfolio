import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';
import IconAbTest from '@elements/IconAbTest';
import { Container, ListItem } from '@components/layout';
import { Heading } from '@components/headings';
import { HomeItemsLayout, HomeItemLink } from '@home/HomeItems';

export default function Fulltime() {
  const { t, i18n } = useTranslation('home');
  const isEng = i18n.language === 'en';

  return(
    <Container as="main" responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} space="homeSection">
      <Heading position="homeSection" isitalic={isEng} dangerouslySetInnerHTML={{__html: t('fulltime.title')}} />
      <HomeItemsLayout responsive={{'@initial': 'mobile', '@m768': 'tablet'}}>
        <ListItem nomark>
          <Link href="/icook/a-b-test" passHref>
            <HomeItemLink asfulltime={{ '@initial': 'mobile', '@mHover': 'hover' }}>
              <IconAbTest />
              <Heading position="homeItemName" dangerouslySetInnerHTML={{__html: t('fulltime.abtest.title')}} />
            </HomeItemLink>
          </Link>
        </ListItem>
      </HomeItemsLayout>
    </Container>
  );
}
