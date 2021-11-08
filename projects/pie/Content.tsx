import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';

import LangSwitch from '@components/LangSwitch';

import IconCheck from './IconCheck';

import { Container, FullBlock } from '@components/layout';
import { ContentTitle, Section, Paragraph, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';

import Graph from './Graph';
import Gallery from './Gallery';

import tabBarDark from '/public/projects/pie/tabBarDark.jpg';

const TabBarRescue = styled('img', {
  width: '100%',
  minWidth: '288px',
  maxWidth: '395px'
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
        maxWidth: '520px'
      }
    }
  }
});

const CompareRow = styled('tr', {
  whiteSpace: 'nowrap'
  // variants: {
  //   position: {
  //     thead: {

  //     },
  //     tbody: {
        
  //     }
  //   }
  // }
});

const CompareCell = styled('td', {
  paddingTop: '$4',
  paddingBottom: '$12',
  paddingLeft: 0,
  fontFamily: '$default',
  lineHeight: '20px',

  variants: {
    purpose: {
      title: {
        color: 'hsl($monoContentTitle)',
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
        paddingRight: '$16',
        fontWeight: 400
      },
      tablet: {
        width: '200px'
      }
    },
    answer: {
      mobile: {
        width: '100px',
        paddingRight: '$16'
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
        <LangSwitch position="articleStart" />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('brief.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('brief.description')}} indent />
          <Paragraph dangerouslySetInnerHTML={{__html: t('brief.size')}} indent sectionend />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('why.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('why.problem')}} indent />
          <Graph />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('question.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('question.content')}} purpose="question" italic={isItalic} indent />
        </Section>
      </Container>
      <FullBlock project="pie">
        <Container responsive={{'@m768': 'max640'}}>
          <Section>
            <ContentTitle purpose="section" scheme="mono" dangerouslySetInnerHTML={{__html: t('nav.title')}} />
            <Paragraph scheme="mono" dangerouslySetInnerHTML={{__html: t('nav.description', {
                amI: t('nav.questions.whereAmI'),
                else: t('nav.questions.whereElse'),
                there: t('nav.questions.whatThere')
            })}} indent />
            <TabBarRescue src={tabBarDark.src} alt={t('nav.image')} />
          </Section>
          <Section>
            <CompareTable responsive={{'@initial': 'mobile', '@m768': 'tablet'}}>
              <tr>
                <CompareCell as="th" purpose="title" question={{'@initial': 'mobile', '@m768': 'tablet'}} />
                <CompareCell as="th" purpose="title" answer={{'@initial': 'mobile'}}>Tab Bar</CompareCell>
                <CompareCell as="th" purpose="title" answer={{'@initial': 'mobile'}} dangerouslySetInnerHTML={{__html: t('nav.mainMenu')}} />
              </tr>
              <tr>
                <CompareCell as="th" purpose="title" question={{'@initial': 'mobile', '@m768': 'tablet'}} dangerouslySetInnerHTML={{__html: t('nav.questions.whereAmI')}} />
                <CompareCell purpose="description"><IconCheck purpose="yes" /></CompareCell>
                <CompareCell purpose="description"><IconCheck purpose="yes" /></CompareCell>
              </tr>
              <tr>
                <CompareCell as="th" purpose="title" question={{'@initial': 'mobile', '@m768': 'tablet'}} dangerouslySetInnerHTML={{__html: t('nav.questions.whereElse')}} />
                <CompareCell purpose="description"><IconCheck purpose="yes" />{t('nav.primary')}</CompareCell>
                <CompareCell purpose="description">{t('nav.goBack', { mainMenu: t('nav.mainMenu') })}</CompareCell>
              </tr>
              <tr>
                <CompareCell as="th" purpose="title" question={{'@initial': 'mobile', '@m768': 'tablet'}} dangerouslySetInnerHTML={{__html: t('nav.questions.whatThere')}} />
                <CompareCell purpose="description"><IconCheck purpose="yes" /></CompareCell>
                <CompareCell purpose="description">{t('nav.mainMenu')}</CompareCell>
              </tr>
            </CompareTable>
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
