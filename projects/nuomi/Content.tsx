import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';
import { Container, ListItem } from '../../components/layout';

import { ContentTitle, Section, Paragraph } from '../../components/contentStyles';
import IconAccessibility from './IconAccessibility';
import IconLock from './IconLock';
import IconStructured from './IconStructured';

import Gallery from './Gallery';

const IconList = styled('ul', {
  display: 'grid',
  rowGap: '$12',
  margin: 0,
  padding: 0
});

const IconListItem = styled(ListItem, {
  display: 'grid',
  grid: `"prefix title" auto
        ". description" auto / 32px 1fr`,
  rowGap: '$4',
  alignItems: 'center',
  margin: '0',
  fontFamily: '$default'
});

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
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('experience.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('experience.featured')}} indent sectionend />
      </Section>
      <Section>
        <Gallery galleryItemAlt={galleryItemAlt} />
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('retrospect.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('retrospect.description')}} indent />
        <IconList>
          <IconListItem>
            <div><IconAccessibility /></div>
            <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('retrospect.https.title')}} />
            <IconListDescription dangerouslySetInnerHTML={{__html: t('retrospect.https.description')}} />
          </IconListItem>
          <IconListItem>
            <div><IconLock /></div>
            <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('retrospect.structured.title')}} />
            <IconListDescription dangerouslySetInnerHTML={{__html: t('retrospect.structured.description')}} />
          </IconListItem>
          <IconListItem>
            <div><IconStructured /></div>
            <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('retrospect.accessibility.title')}} />
            <IconListDescription dangerouslySetInnerHTML={{__html: t('retrospect.accessibility.description')}} />
          </IconListItem>
        </IconList>
      </Section>
    </Container>
  );
}
