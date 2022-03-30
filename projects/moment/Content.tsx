import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import { Container, FullBlock, ListItem } from '@components/layout';

import LangSwitch from '@components/LangSwitch';

import { ContentTitle, ContentTitlePrefix, Section, Paragraph, ContentList, ContentListItem, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';
import { CabinList } from '@components/cabinList';

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

const IterationMappingList = styled('dl', {
  margin: '0 0 $8',
  padding: 0,
  fontFamily: '$default',
  border: '2px solid hsl($monoGraphDevice)',
  borderRadius: '8px'
});

const IterationMappingTitle = styled('dt', {
  padding: '$8 $12',
  color: 'hsl($monoTitleLight)',
  fontSize: '$16',
  lineHeight: '16px',
  backgroundColor: 'hsl($monoGraphDevice)'
});


const IterationMappingItems = styled('dd', {
  margin: 0,
  padding: '$12',
  color: 'hsl($monoContentParagraph)',
  fontSize: '$16',
  lineHeight: '16px',

  variants: {
    divide: {
      top: {
        borderTop: '2px solid hsl($monoGraphDevice)'
      },
      bottom: {
        borderBottom: '2px solid hsl($monoGraphDevice)'
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
    },
    divide: {
      true: {
        borderWidth: '1px 0',
        borderStyle: 'solid',
        borderColor: 'hsl($shade1400)'
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
  const { resolvedTheme } = useTheme();
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
            <CabinList responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
              <ListItem nomark>
                <IterationMappingList>
                  <IterationMappingTitle dangerouslySetInnerHTML={{__html: t('idea.iteration.media.lala')}} />
                  <IterationMappingItems>I Ran (So Far Away)</IterationMappingItems>
                  <IterationMappingItems>Take on Me</IterationMappingItems>
                </IterationMappingList>
              </ListItem>
              <ListItem nomark>
                <IterationMappingList>
                  <IterationMappingTitle dangerouslySetInnerHTML={{__html: t('idea.iteration.media.ready')}} />
                  <IterationMappingItems>Jump</IterationMappingItems>
                  <IterationMappingItems>Take on Me</IterationMappingItems>
                  <IterationMappingItems>Stayin’ Alive</IterationMappingItems>
                  <IterationMappingItems>Everybody Wants to Rule the World</IterationMappingItems>
                </IterationMappingList>
              </ListItem>
            </CabinList>
            <ContentTitlePrefix scheme="mono" dangerouslySetInnerHTML={{__html: t('idea.iteration.second')}} />
            <ContentTitle purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('idea.bySong.title')}} />
            <Paragraph dangerouslySetInnerHTML={{__html: t('idea.bySong.description')}} indent scheme="mono" />
            <CabinList responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
              <ListItem nomark>
                <IterationMappingList>
                  <IterationMappingTitle>Starman</IterationMappingTitle>
                  <IterationMappingItems divide="bottom" dangerouslySetInnerHTML={{__html: t('idea.iteration.artist', { name: 'David Bowie' })}} />
                  <IterationMappingItems dangerouslySetInnerHTML={{__html: t('idea.iteration.media.lightyear')}} />
                  <IterationMappingItems dangerouslySetInnerHTML={{__html: t('idea.iteration.media.zero')}} />
                  <IterationMappingItems dangerouslySetInnerHTML={{__html: t('idea.iteration.media.martian')}} />
                  <IterationMappingItems dangerouslySetInnerHTML={{__html: t('idea.iteration.media.crown')}} />
                  <IterationMappingItems dangerouslySetInnerHTML={{__html: t('idea.iteration.media.simpson')}} />
                  <IterationMappingItems divide="top" dangerouslySetInnerHTML={{__html: t('idea.iteration.lyric')}} />
                </IterationMappingList>
              </ListItem>
              <ListItem nomark>
                <IterationMappingList>
                  <IterationMappingTitle>Everybody Wants to Rule the World</IterationMappingTitle>
                  <IterationMappingItems divide="bottom" dangerouslySetInnerHTML={{__html: t('idea.iteration.artist', { name: 'Tears For Fears' })}} />
                  <IterationMappingItems dangerouslySetInnerHTML={{__html: t('idea.iteration.media.bee')}} />
                  <IterationMappingItems dangerouslySetInnerHTML={{__html: t('idea.iteration.media.ready')}} />
                  <IterationMappingItems dangerouslySetInnerHTML={{__html: t('idea.iteration.media.click')}} />
                  <IterationMappingItems dangerouslySetInnerHTML={{__html: t('idea.iteration.media.glee')}} />
                  <IterationMappingItems divide="top" dangerouslySetInnerHTML={{__html: t('idea.iteration.lyric')}} />
                </IterationMappingList>
              </ListItem>
            </CabinList>
            <Paragraph dangerouslySetInnerHTML={{__html: t('idea.bySong.then')}} indent sectionend scheme="mono" />
          </Section>
          <IterationScreenshot>
            <IterationScreenshotImg src={`/projects/moment/mobile/${lang}.webp`} screenshot="mobile" responsive={{ '@m768': 'none' }} divide={resolvedTheme === 'dark'} loading="lazy" alt={t('what.screenshot.mobile')} />
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
