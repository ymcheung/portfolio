import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';

import { Container, ListItem, IconList, IconListItem } from '../../components/layout';
import { ContentTitle, Section, Paragraph } from '../../components/contentStyles';

const FeatureList = styled('ul', {
  display: 'grid',
  grid: 'auto / auto-flow max-content',
  margin: 0,
  padding: 0,

  variants: {
    space: {
      normal: {
        columnGap: '32px'
      },
      wide: {
        columnGap: '48px'
      }
    }
  }
});

const RetroIcon = styled('img', {
  width: '36px',
  height: '30px'
});

const IconListDescription = styled(Paragraph, {
  gridArea: 'description'
});

export default function Content() {
  const { t, i18n } = useTranslation('process');

  const itemSpace = i18n.language === 'en' ? 'normal' : 'wide';

  return(
    <Container as="article" responsive={{'@m768': 'max640'}} isgroupend>
      <Section>
        <Paragraph scheme="light" dangerouslySetInnerHTML={{__html: t('intro')}} indent sectionend />
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="light" dangerouslySetInnerHTML={{__html: t('worth.title')}} />
        <FeatureList space={itemSpace}>
          <ListItem nomark>
            <ContentTitle purpose="featuredNumber" scheme="light">40+</ContentTitle>
          </ListItem>
        </FeatureList>
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="light" dangerouslySetInnerHTML={{__html: t('retro.title')}} />
        <IconList>
          <IconListItem prefixwidth="48" purpose="noTitle">
            <div><RetroIcon src="/projects/process/bubbleGit.svg" alt={t('retro.knowledge.alt')} /></div>
            <IconListDescription scheme="light" sectionend="true" dangerouslySetInnerHTML={{__html: t('retro.knowledge.description')}} />
          </IconListItem>
          <IconListItem prefixwidth="48" purpose="noTitle">
            <div><RetroIcon src="/projects/process/bubbleObstacle.svg" alt={t('retro.obstacle.alt')} /></div>
            <IconListDescription scheme="light" sectionend="true" dangerouslySetInnerHTML={{__html: t('retro.obstacle.description')}} />
          </IconListItem>
        </IconList>
      </Section>
    </Container>
  );
}
