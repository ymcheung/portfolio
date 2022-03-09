import { Fragment } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { screenMobile, screenTablet } from '@utils/screens';
import { styled } from 'stitches.config';

import { Container, FullBlock } from '@components/layout';

import LangSwitch from '@components/LangSwitch';

import { ContentTitle, ContentTitlePrefix, Section, Paragraph, ContentList, ContentListItem, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';

import IconSearch from './IconSearch';

import screenshotMobileEn from '@public/projects/moment/mobile/en.webp';
import screenshotMobileTw from '@public/projects/moment/mobile/tw.webp';
import screenshotDesktopEn from '@public/projects/moment/desktop/en.webp';
import screenshotDesktopTw from '@public/projects/moment/desktop/tw.webp';

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

const WhatScreenshot = styled('figure', {
  margin: 0,
  textAlign: 'center'
});

interface DescriptionProps {
  description: string;
}

interface LearnedProps {
  title: string;
  description: string;
}

export default function Content() {
  const { t, i18n } = useTranslation('moment');

  const isItalic = i18n.language === 'en';

  const screenshotMobile = i18n.language === 'en' ? screenshotMobileEn : screenshotMobileTw;
  const screenshotDesktop = i18n.language === 'en' ? screenshotDesktopEn : screenshotDesktopTw ;

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

  const keywordSongName = [
    'never gonna give you up',
    'uptown girl',
    'take on me'
  ];

  return(
    <>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <LangSwitch position="articleStart" responsive={{ '@mHover': 'hover' }} />
        <Section>
          <Paragraph dangerouslySetInnerHTML={{__html: t('intro.description')}} indent />
          <Paragraph dangerouslySetInnerHTML={{__html: t('intro.if')}} indent sectionend />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('question.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('question.description')}} purpose="question" italic={isItalic} indent sectionend />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('idea.title')}} />
          <ContentTitlePrefix dangerouslySetInnerHTML={{__html: t('idea.iteration.first')}} />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('idea.byMedia.title')}} />
          <ContentList>
          {t<string, DescriptionProps[]>('idea.byMedia.items', { returnObjects: true }).map(({ description }, index: number) => (
              <ContentListItem dangerouslySetInnerHTML={{__html: description}} square key={`byMedia-${index}`} />
            ))}
          </ContentList>
          <ContentTitlePrefix dangerouslySetInnerHTML={{__html: t('idea.iteration.second')}} />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('idea.bySong.title')}} />
          <ContentList>
            <ContentListItem dangerouslySetInnerHTML={{__html: t('idea.bySong.description')}} square />
          </ContentList>
        </Section>
      </Container>
      <FullBlock project="moment" context="section">
        <Container responsive={{'@m768': 'max640'}}>
          <WhatScreenshot>
            {screenMobile &&
              <Image src={screenshotMobile} width={300} height={500} quality={100} alt={t('what.screenshot.mobile')} />
            }
            {screenTablet &&
              <Image src={screenshotDesktop} width={640} height={480} quality={100} alt={t('what.screenshot.tablet')} />
            }
          </WhatScreenshot>
        </Container>
      </FullBlock>
      <Container as="section" responsive={{'@m768': 'max640'}} space="isGroundFloor">
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('gather.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('gather.description')}} indent />
        </Section>
        <Section>
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
          <ContentTitle purpose="paragraph">
            <IconSearch />
            {t('gather.byName')}
          </ContentTitle>
          <Paragraph as="div">
            {
              keywordSongName.map((keyword, index) => (
                <BubbleSearch responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} dangerouslySetInnerHTML={{__html: keyword}} key={`keywordsongname-${index}`} />
            ))}
          </Paragraph>
          <Paragraph dangerouslySetInnerHTML={{__html: t('gather.total')}} indent />
        </Section>
        <Section has="postmarks">
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('learned.title')}} />
          {t<string, LearnedProps[]>('learned.items', { returnObjects: true }).map(({ title, description }, index: number) => (
            <Fragment key={`learned-${index}`}>
              <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: title}} />
              <Paragraph dangerouslySetInnerHTML={{__html: description}} indent />
            </Fragment>
          ))}
        </Section>
        <Section isgroupend>
          <PostMarksHr />
          <ParagraphPostmark dangerouslySetInnerHTML={{__html: t('gather.asof')}} />
        </Section>
      </Container>
    </>
  );
}
