import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';

import LangSwitch from '@components/LangSwitch';

import { Container, FullBlock } from '@components/layout';
import { ContentTitle, Section, Paragraph } from '@components/contentStyles';

import Graph from './Graph';
import Gallery from './Gallery';

import tabBarDark from '/public/projects/pie/tabBarDark.jpg';

const TabBarRescue = styled('img', {
  width: '100%',
  minWidth: '288px',
  maxWidth: '395px'
});

type itemProps = {
  [x: string]: any;
  name: string;
  description: string;
};

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
        <Section isgroupend>
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
            <ContentTitle purpose="section" scheme="mono" dangerouslySetInnerHTML={{__html: t('rescue.title')}} />
            <Paragraph scheme="mono" dangerouslySetInnerHTML={{__html: t('rescue.description')}} indent />
            <TabBarRescue src={tabBarDark.src} alt="" />
          </Section>
          <Gallery />
        </Container>
      </FullBlock>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('implement.title')}} />
          {t<string, itemProps>('implement.items', { returnObjects: true }).map(({ name, description }: itemProps, index: number) => (
            <React.Fragment key={`doc-${index}`}>
              <ContentTitle as="h3" purpose="paragraph" dangerouslySetInnerHTML={{__html: name}} />
              <Paragraph dangerouslySetInnerHTML={{__html: description}} indent />
            </React.Fragment>
          ))}
        </Section>
        <Section isgroupend>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('note.title')}} />
          {t<string, itemProps>('note.items', { returnObjects: true }).map(({ name, description }: itemProps, index: number) => (
            <React.Fragment key={`note-${index}`}>
              <ContentTitle as="h3" purpose="paragraph" dangerouslySetInnerHTML={{__html: name}} />
              <Paragraph dangerouslySetInnerHTML={{__html: description}} indent />
            </React.Fragment>
          ))}
        </Section>
      </Container>
    </>
  );
}
