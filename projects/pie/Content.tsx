import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';

import LangSwitch from '@components/LangSwitch';

import IconCheck from './IconCheck';
import IconHyphen from '@home/icons/IconHyphen';

import { Container, FullBlock } from '@components/layout';
import { ContentTitle, Section, Paragraph, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';

import GraphProblem from './graph/Problem';
import GraphRedesigned from './graph/Redesigned';

import Gallery from './Gallery';

import { PrototypeIframe } from '@elements/prototypeIframe';

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
            <Paragraph scheme="mono" dangerouslySetInnerHTML={{__html: t('nav.description', {
                amI: t('nav.questions.whereAmI'),
                else: t('nav.questions.whereElse'),
                there: t('nav.questions.whatThere')
            })}} indent />
          </Section>
          <Section>
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
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('prototype.title')}} />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('flows.clockin',
            { context: 'withConfirm', clockin: t('flows.clockin'), confirmform: t('flows.confirmform') }
          )}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('prototype.clockInAndConfirm.description')}} />
          <PrototypeIframe src="https://www.figma.com/embed?embed_host=ymcheung&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FeYB3QoL6f97bLBgZ5oJEbM%2Fpie-en%3Fpage-id%3D1099%253A1135%26node-id%3D1099%253A1140%26viewport%3D295%252C48%252C0.32%26scaling%3Dscale-down%26starting-point-node-id%3D1099%253A1140%26show-proto-sidebar%3D1" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} allowFullScreen loading="lazy" />
        </Section>
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
