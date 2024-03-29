import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';

import LangSwitch from '@components/LangSwitch';

import IconCheck from './IconCheck';
import IconHyphen from '@home/icons/IconHyphen';

import { Container, FullBlock } from '@components/layout';
import { ContentTitle, ContentTitlePrefix, Section, Paragraph, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';

import GraphProblem from './graph/Problem';
import GraphRedesigned from './graph/Redesigned';

import tabBarDark from '@public/projects/pie/tabBarDark.jpg';
import Gallery from './Gallery';

const TabBarRescue = styled('img', {
  width: '100%',
  minWidth: '288px',
  maxWidth: '395px',
  marginBottom: '$16'
});

const CompareTable = styled('table', {
  tableLayout: 'fixed',
  overflowX: 'auto',
  borderCollapse: 'collapse',

  variants: {
    responsive: {
      mobile: {
        width: '100%'
      },
      tablet: {
        width: '560px'
      }
    }
  }
});

const CompareRow = styled('tr', {
  background: `linear-gradient(
    to left,
    hsl($monoContentGradient) 0%,
    hsla($monoContentGradient, 0.987) 8.1%,
    hsla($monoContentGradient, 0.951) 15.5%,
    hsla($monoContentGradient, 0.896) 22.5%,
    hsla($monoContentGradient, 0.825) 29%,
    hsla($monoContentGradient, 0.741) 35.3%,
    hsla($monoContentGradient, 0.648) 41.2%,
    hsla($monoContentGradient, 0.55) 47.1%,
    hsla($monoContentGradient, 0.45) 52.9%,
    hsla($monoContentGradient, 0.352) 58.8%,
    hsla($monoContentGradient, 0.259) 64.7%,
    hsla($monoContentGradient, 0.175) 71%,
    hsla($monoContentGradient, 0.104) 77.5%,
    hsla($monoContentGradient, 0.049) 84.5%,
    hsla($monoContentGradient, 0.013) 91.9%,
    hsla($monoContentGradient, 0) 100%
  ) center left / 100% 100% no-repeat`
});

const CompareCell = styled('td', {
  paddingTop: '$8',
  paddingBottom: '$8',
  fontFamily: '$default',
  lineHeight: '20px',
  verticalAlign: 'center',

  variants: {
    purpose: {
      title: {
        color: 'hsl($monoTitleLight)',
        fontSize: '$16',
        textAlign: 'left'
      },
      description: {
        color: 'hsl($monoContentParagraph)',
        fontSize: '$14'
      }
    },
    question: {
      mobile: {
        width: '144px',
        paddingRight: '$8',
        paddingLeft: 0,
        fontWeight: 400
      },
      tablet: {
        width: '200px'
      }
    },
    answer: {
      mobile: {
        width: '100px',
        paddingRight: 0,
        paddingLeft: '$8'
      },
      tablet: {
        width: '132px'
      }
    }
  }
});

export default function Content() {
  const { t, i18n } = useTranslation('pie');

  const isItalic = i18n.language === 'en';

  return(
    <>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <LangSwitch position="articleStart" responsive={{ '@mHover': 'hover' }} />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('brief.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('brief.description')}} indent />
          <Paragraph dangerouslySetInnerHTML={{__html: t('brief.size')}} indent sectionend />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('why.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('why.problem')}} indent />
          <GraphProblem />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('question.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('question.content')}} purpose="question" italic={isItalic} indent />
        </Section>
      </Container>
      <FullBlock project="pie" context="section">
        <Container responsive={{'@m768': 'max640'}}>
          <Section>
            <ContentTitle purpose="section" scheme="mono" dangerouslySetInnerHTML={{__html: t('nav.title')}} />
            <ContentTitlePrefix scheme="mono" dangerouslySetInnerHTML={{__html: t('nav.iteration.first')}} />
            <ContentTitle purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('nav.byDashboard.title')}} />
            <Paragraph scheme="mono" dangerouslySetInnerHTML={{__html: t('nav.byDashboard.description', )}} indent />
            <ContentTitle purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('nav.byDashboard.feedback.title')}} />
            <Paragraph dangerouslySetInnerHTML={{__html: t('nav.byDashboard.feedback.description')}} purpose="question" italic={isItalic} indent scheme="mono" />
            <ContentTitlePrefix scheme="mono" dangerouslySetInnerHTML={{__html: t('nav.iteration.second')}} />
            <ContentTitle purpose="paragraph" scheme="mono">Tab Bar</ContentTitle>
            <TabBarRescue src={tabBarDark.src} loading="lazy" alt={t('gallery.tabBar')} />
            <Paragraph scheme="mono" dangerouslySetInnerHTML={{__html: t('nav.byTab.description', {
                amI: t('nav.questions.whereAmI'),
                else: t('nav.questions.whereElse'),
                there: t('nav.questions.whatThere')
            })}} indent />
          </Section>
          <Section id="sectionPrototype">
            <CompareTable responsive={{'@initial': 'mobile', '@m768': 'tablet'}}>
              <thead>
                <CompareRow>
                  <CompareCell as="th" purpose="title" question={{'@initial': 'mobile', '@m768': 'tablet'}} />
                  <CompareCell as="th" purpose="title" answer={{'@initial': 'mobile', '@m768': 'tablet'}}>Tab Bar</CompareCell>
                  <CompareCell as="th" purpose="title" answer={{'@initial': 'mobile', '@m768': 'tablet'}} dangerouslySetInnerHTML={{__html: t('nav.mainMenu')}} />
                </CompareRow>
              </thead>
              <tbody>
                <tr>
                  <CompareCell as="th" purpose="title" question={{'@initial': 'mobile', '@m768': 'tablet'}} dangerouslySetInnerHTML={{__html: t('nav.questions.whereAmI')}} />
                  <CompareCell answer={{'@initial': 'mobile', '@m768': 'tablet'}} purpose="description"><IconCheck purpose="yes" /></CompareCell>
                  <CompareCell answer={{'@initial': 'mobile', '@m768': 'tablet'}} purpose="description"><IconCheck purpose="yes" /></CompareCell>
                </tr>
                <tr>
                  <CompareCell as="th" purpose="title" question={{'@initial': 'mobile', '@m768': 'tablet'}} dangerouslySetInnerHTML={{__html: t('nav.questions.whereElse')}} />
                  <CompareCell answer={{'@initial': 'mobile', '@m768': 'tablet'}} purpose="description"><IconCheck purpose="yes" />{t('nav.primary')}</CompareCell>
                  <CompareCell answer={{'@initial': 'mobile', '@m768': 'tablet'}} purpose="description"><IconHyphen purpose="yes" />{t('nav.goBack')}</CompareCell>
                </tr>
                <tr>
                  <CompareCell as="th" purpose="title" question={{'@initial': 'mobile', '@m768': 'tablet'}} dangerouslySetInnerHTML={{__html: t('nav.questions.whatThere')}} />
                  <CompareCell answer={{'@initial': 'mobile', '@m768': 'tablet'}} purpose="description"><IconCheck purpose="yes" /></CompareCell>
                  <CompareCell answer={{'@initial': 'mobile', '@m768': 'tablet'}} purpose="description">{t('nav.last')}</CompareCell>
                </tr>
              </tbody>
            </CompareTable>
          </Section>
          <Section>
            <GraphRedesigned />
          </Section>
          <Gallery />
        </Container>
      </FullBlock>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <Section has="postmarks">
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('document.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('document.description')}} indent />
        </Section>
        <Section isgroupend>
          <PostMarksHr />
          <ParagraphPostmark dangerouslySetInnerHTML={{__html: t('nav.postmark')}} />
        </Section>
      </Container>
    </>
  );
}
