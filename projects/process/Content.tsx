import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';

import { ListItem, IconList, IconListItem } from '@components/layout';

import LangSwitch from '@components/LangSwitch';

import { ContentTitle, Section, Paragraph, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';
import { FeaturedNumberMark } from '@projects/featured';

const FeatureList = styled('ul', {
  margin: 0,
  padding: 0,

  variants: {
    space: {
      mobile: {
        rowGap: '$12'
      },
      normal: {
        columnGap: '32px'
      },
      wide: {
        columnGap: '48px'
      }
    }
  }
});

const FeatureItem = styled(ListItem, {
  display: 'grid',
  grid: 'auto / 60px 1fr',

  variants: {
    responsive: {
      tablet: {
        grid: 'auto-flow auto / minmax(120px, 320px)'
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
    <>
      <LangSwitch position="articleStart" responsive={{ '@mHover': 'hover' }} />
      <Section as="section">
        <Paragraph dangerouslySetInnerHTML={{__html: t('intro')}} indent sectionend />
      </Section>
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('worth.title')}} />
        <FeatureList space={{ '@initial': 'mobile', '@m768': itemSpace }}>
          <FeatureItem nomark responsive={{ '@m768': 'tablet' }}>
            <ContentTitle as="strong" featurednumber="large">
              3.2
              <FeaturedNumberMark>&nbsp;*</FeaturedNumberMark>
            </ContentTitle>
            <div>
              <Paragraph dangerouslySetInnerHTML={{__html: t('worth.position')}} />
            </div>
          </FeatureItem>
        </FeatureList>
      </Section>
      <Section as="section" has="postmarks">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('retro.title')}} />
        <IconList>
          <IconListItem prefixwidth="48" purpose="noTitle">
            <div><RetroIcon src="/projects/process/bubbleGit.svg" alt={t('retro.knowledge.alt')} /></div>
            <IconListDescription sectionend dangerouslySetInnerHTML={{__html: t('retro.knowledge.description')}} />
          </IconListItem>
          <IconListItem prefixwidth="48" purpose="noTitle">
            <div><RetroIcon src="/projects/process/bubbleObstacle.svg" alt={t('retro.obstacle.alt')} /></div>
            <div>
              <IconListDescription sectionend dangerouslySetInnerHTML={{__html: t('retro.obstacle.description')}} />
              <ParagraphPostmark dangerouslySetInnerHTML={{__html: t('retro.obstacle.by')}} />
            </div>
          </IconListItem>
        </IconList>
      </Section>
      <Section as="section" isgroupend>
        <PostMarksHr />
        <ParagraphPostmark dangerouslySetInnerHTML={{__html: t('worth.asof')}} />
      </Section>
    </>
  );
}
