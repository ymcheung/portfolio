import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';
import { Container, FullBlock, IconList, IconListItem } from '../../components/layout';

import LangSwitch from '../LangSwitch';

import { ContentTitle, Section, Paragraph } from '../../components/contentStyles';
import IconAccessibility from './IconAccessibility';
import IconLock from './IconLock';
import IconStructured from './IconStructured';

import Gallery from './Gallery';

const IconListDescription = styled(Paragraph, {
  gridArea: 'description'
});

export default function Content() {
  const { t } = useTranslation('nuomi');

  const galleryItemAlt = {
    all: t('gallery.all'),
    detail: t('gallery.detail'),
    course: t('gallery.course')
  }

  return(
    <>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <LangSwitch />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('experience.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('experience.featured')}} indent sectionend />
        </Section>
      </Container>
      <FullBlock project="nuomi">
        <Gallery galleryItemAlt={galleryItemAlt} />
      </FullBlock>
      <Container as="section" responsive={{'@m768': 'max640'}} isgroupend>
        <Section isgroupend>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('retrospect.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('retrospect.description')}} indent />
          <IconList>
            <IconListItem nomark="true">
              <div><IconLock /></div>
              <ContentTitle as="h3" purpose="iconListItem" dangerouslySetInnerHTML={{__html: t('retrospect.https.title')}} />
              <IconListDescription sectionend="true" dangerouslySetInnerHTML={{__html: t('retrospect.https.description')}} />
            </IconListItem>
            <IconListItem nomark="true">
              <div><IconStructured /></div>
              <ContentTitle as="h3" purpose="iconListItem" dangerouslySetInnerHTML={{__html: t('retrospect.structured.title')}} />
              <IconListDescription sectionend="true" dangerouslySetInnerHTML={{__html: t('retrospect.structured.description')}} />
            </IconListItem>
            <IconListItem nomark="true">
              <div><IconAccessibility /></div>
              <ContentTitle as="h3" purpose="iconListItem" dangerouslySetInnerHTML={{__html: t('retrospect.accessibility.title')}} />
              <IconListDescription sectionend="true" dangerouslySetInnerHTML={{__html: t('retrospect.accessibility.description')}} />
            </IconListItem>
          </IconList>
        </Section>
      </Container>
    </>
  );
}
