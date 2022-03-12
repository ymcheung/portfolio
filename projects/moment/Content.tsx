import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import { Container, FullBlock } from '@components/layout';

import LangSwitch from '@components/LangSwitch';

import { ContentTitle, ContentTitlePrefix, Section, Paragraph, ContentList, ContentListItem, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';

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

const IterationScreenshot = styled('figure', {
  margin: '0 -$16',
  textAlign: 'center'
});

const IterationScreenshotImg = styled('img', {
  maxWidth: '100%',

  variants: {
    responsive: {
      none: {
        display: 'none'
      },
      show: {
        display: 'inline-block'
      }
    },
    screenshot: {
      mobile: {
        minHeight: '500px'
      },
      tablet: {
        minHeight: '480px'
      }
    }
  }
});

interface DescriptionProps {
  description: string;
}

interface LearnedProps {
  title: string;
  description: string;
}

export default function Content() {
  const router = useRouter();
  const { t } = useTranslation('moment');

  const lang = router.locale === 'en' ? 'en' : 'tw';

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
          <Paragraph dangerouslySetInnerHTML={{__html: t('question.description')}} purpose="question" italic={router.locale === 'en'} indent sectionend />
        </Section>
      </Container>
      <FullBlock project="moment" context="section">
        <Container responsive={{'@m768': 'max640'}}>
          <Section>
            <ContentTitle purpose="section" scheme="mono" dangerouslySetInnerHTML={{__html: t('idea.title')}} />
            <ContentTitlePrefix scheme="mono" dangerouslySetInnerHTML={{__html: t('idea.iteration.first')}} />
            <ContentTitle purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('idea.byMedia.title')}} />
            <ContentList>
            {t<string, DescriptionProps[]>('idea.byMedia.items', { returnObjects: true }).map(({ description }, index: number) => (
                <ContentListItem dangerouslySetInnerHTML={{__html: description}} scheme="mono" square key={`byMedia-${index}`} />
              ))}
            </ContentList>
            <ContentTitlePrefix scheme="mono" dangerouslySetInnerHTML={{__html: t('idea.iteration.second')}} />
            <ContentTitle purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('idea.bySong.title')}} />
            <ContentList>
              <ContentListItem dangerouslySetInnerHTML={{__html: t('idea.bySong.description')}} scheme="mono" square />
            </ContentList>
          </Section>
          <IterationScreenshot>
            <IterationScreenshotImg src={`/projects/moment/mobile/${lang}.webp`} screenshot="mobile" responsive={{ '@m768': 'none' }} loading="lazy" alt={t('what.screenshot.mobile')} />
            <IterationScreenshotImg src={`/projects/moment/desktop/${lang}.webp`} screenshot="tablet" responsive={{ '@initial': 'none', '@m768': 'show' }} loading="lazy" alt={t('what.screenshot.tablet')} />
          </IterationScreenshot>
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
