import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';

import LangSwitch from '@components/LangSwitch';

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
