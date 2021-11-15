import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { screenMobile, screenTablet } from '@utils/screens';
import { styled } from 'stitches.config';

import { Container, FullBlock, ListItem } from '@components/layout';

import LangSwitch from '@components/LangSwitch';

import { ContentTitle, Section, Paragraph, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';
import { FeatureList, FeaturedNumberMark } from '@projects/featured';

import IconSearch from './IconSearch';

const BubbleSearch = styled('span', {
  display: 'inline-block',
  margin: '0 8px 8px 0',
  padding: '8px 12px',
  color: 'hsl($shade300)',
  fontSize: '$14',
  lineHeight: '24px',
  backgroundColor: 'hsl($searchBubble)',
  borderRadius: '12px',

  variants: {
    responsive: {
      mobile: {
        maxWidth: 'fit-content'
      },
      tablet: {
        maxWidth: 'max-content'
      }
    }
  } 
});

const WhatList = styled('ul', {
 display: 'grid',
 grid: 'auto / repeat(3, 1fr)',
 columnGap: '12px',
 margin: 0,
 padding: 0
});

const WhatFigure = styled('figure', {
  margin: 0,
  textAlign: 'center'
});

const WhatFigureCover = styled('div', {
  color: 'hsl($shade100)',
  fontSize: '$24',
  lineHeight: '48px'
});

const WhatFigcaption = styled('div', {
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$16',
  lineHeight: '20px'
});

const WhatScreenshot = styled('figure', {
  margin: 0,
  textAlign: 'center'
});

interface ItemProps {
  name: string;
}

interface WhatProps extends ItemProps {
  symbol: string;
}

export default function Content() {
  const { t, i18n } = useTranslation('moment');

  const isItalic = i18n.language === 'en';
  const itemSpace = i18n.language === 'en' ? 'normal' : 'wide';

  const screenshotMobile = '/projects/moment/mobile.webp';
  const screenshotDesktop = '/projects/moment/desktop.webp';

  const keywordLyric = [
    'we can be heroes just for one day',
    'lawrence of arabia british beatlemania',
    '200 degrees that&apos;s why they call me mr fahrenheit'
  ];

  const keywordLyricWithMovie = [
    'the umbrella academy i think we re alone now',
    'sing movie under pressure',
    'jojo walk like an egyptian'
  ];

  return(
    <>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <LangSwitch position="articleStart" />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('intro.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('intro.description')}} purpose="question" italic={isItalic} indent sectionend />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('obstacle.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('obstacle.description')}} indent />
          <Paragraph dangerouslySetInnerHTML={{__html: t('obstacle.conclusion')}} indent sectionend />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('what.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('what.description')}} indent />
          <WhatList>
            {t<string, WhatProps[]>('what.items', { returnObjects: true }).map(({ symbol, name }, index: number) => (
              <ListItem nomark key={`what-${index}`}>
                <WhatFigure>
                  <WhatFigureCover>
                    {symbol}
                  </WhatFigureCover>
                  <WhatFigcaption dangerouslySetInnerHTML={{__html: name}} />
                </WhatFigure>
              </ListItem>
            ))}
          </WhatList>
        </Section>
      </Container>
      <FullBlock project="moment">
        <Container responsive={{'@m768': 'max640'}}>
          <Section isgroupend>
            <WhatScreenshot>
              {screenMobile &&
                <Image src={screenshotMobile} width={300} height={500} quality={100} alt={t('what.screenshot.mobile')} />
              }
              {screenTablet &&
                <Image src={screenshotDesktop} width={640} height={480} quality={100} alt={t('what.screenshot.tablet')} />
              }
            </WhatScreenshot>
          </Section>
        </Container>
      </FullBlock>
      <Container as="section" responsive={{'@m768': 'max640'}} space="isGroupEnd">
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('gather.title')}} />
          <FeatureList space={itemSpace}>
            <ListItem nomark>
              <ContentTitle as="strong" featurednumber="normal">
                6,800+
                <FeaturedNumberMark>&nbsp;*</FeaturedNumberMark>
              </ContentTitle>
              <Paragraph dangerouslySetInnerHTML={{__html: t('gather.count')}} purpose="suffix" sectionend />
            </ListItem>
          </FeatureList>
        </Section>
        <Section>
          <Paragraph dangerouslySetInnerHTML={{__html: t('gather.description')}} indent />
          <ContentTitle purpose="paragraph">
            <IconSearch />
            {t('gather.byLyric')}
          </ContentTitle>
          <Paragraph as="div">
            {
              keywordLyric.map((keyword, index) => (
                <BubbleSearch responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} dangerouslySetInnerHTML={{__html: keyword}} key={`keywordlyric-${index}`} />
            ))}
          </Paragraph>
          <ContentTitle purpose="paragraph">
            <IconSearch />
            {t('gather.byLyricWithName')}
          </ContentTitle>
          <Paragraph as="div">
            {
              keywordLyricWithMovie.map((keyword, index) => (
                <BubbleSearch responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} dangerouslySetInnerHTML={{__html: keyword}} key={`keywordlyricwithname-${index}`} />
            ))}
          </Paragraph>
          <Paragraph dangerouslySetInnerHTML={{__html: t('gather.question')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('prompt.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('prompt.description')}} indent sectionend />
        </Section>
        <Section has="postmarks">
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('learned.title')}} />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('learned.fairuse.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('learned.fairuse.description')}} indent />
        </Section>
        <Section isgroupend>
          <PostMarksHr />
          <ParagraphPostmark dangerouslySetInnerHTML={{__html: t('gather.asof')}} />
        </Section>
      </Container>
    </>
  );
}
