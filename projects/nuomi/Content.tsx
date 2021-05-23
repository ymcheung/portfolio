import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';
import { Container, IconList, IconListItem } from '../../components/layout';

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
    <Container as="article" responsive={{'@m768': 'max640'}} isgroupend>
      <Section>
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('experience.title')}} />
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('experience.featured')}} indent sectionend />
      </Section>
      <Section>
        <Gallery galleryItemAlt={galleryItemAlt} />
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('retrospect.title')}} />
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('retrospect.description')}} indent />
        <IconList>
          <IconListItem nomark="true">
            <div><IconLock /></div>
            <ContentTitle as="h3" purpose="iconListItem" scheme="dark" dangerouslySetInnerHTML={{__html: t('retrospect.https.title')}} />
            <IconListDescription scheme="dark" sectionend="true" dangerouslySetInnerHTML={{__html: t('retrospect.https.description')}} />
          </IconListItem>
          <IconListItem nomark="true">
            <div><IconStructured /></div>
            <ContentTitle as="h3" purpose="iconListItem" scheme="dark" dangerouslySetInnerHTML={{__html: t('retrospect.structured.title')}} />
            <IconListDescription scheme="dark" sectionend="true" dangerouslySetInnerHTML={{__html: t('retrospect.structured.description')}} />
          </IconListItem>
          <IconListItem nomark="true">
            <div><IconAccessibility /></div>
            <ContentTitle as="h3" purpose="iconListItem" scheme="dark" dangerouslySetInnerHTML={{__html: t('retrospect.accessibility.title')}} />
            <IconListDescription scheme="dark" sectionend="true" dangerouslySetInnerHTML={{__html: t('retrospect.accessibility.description')}} />
          </IconListItem>
        </IconList>
      </Section>
    </Container>
  );
}
