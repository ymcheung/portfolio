import React from 'react';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config'; 

import LangSwitch from '@projects/LangSwitch';

import IconPie from '@elements/IconPie';

import { Container, FullBlock } from '@components/layout';
import { ContentTitle, Section, Paragraph } from '@components/contentStyles';

import Graph from './Graph';
import Gallery from './Gallery';

const BriefPieLayout = styled('div', {
  display: 'grid',

  variants: {
    responsive: {
      mobile: {
        grid: `52px
               auto / 100%`,
        rowGap: '$8'
      },
      tablet: {
        grid: 'auto / 52px 1fr',
        columnGap: '$16'
      }
    }
  }
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
        <LangSwitch />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('brief.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('brief.description')}} indent />
          <BriefPieLayout responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
            <div>
              <IconPie />
            </div>
            <Paragraph dangerouslySetInnerHTML={{__html: t('brief.pie')}} sectionend />
          </BriefPieLayout>
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('why.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('why.problem')}} indent sectionend />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('question.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('question.content')}} purpose="question" italic={isItalic} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('document.title')}} />
          {t<string, itemProps>('document.items', { returnObjects: true }).map(({ name, description }: itemProps, index: number) => (
            <React.Fragment key={`doc-${index}`}>
              <ContentTitle as="h3" purpose="paragraph" dangerouslySetInnerHTML={{__html: name}} />
              <Paragraph dangerouslySetInnerHTML={{__html: description}} indent />
            </React.Fragment>
          ))}
        </Section>
      </Container>
      <FullBlock project="pie">
        <Graph />
        <Gallery />
      </FullBlock>
      <Container as="section" responsive={{'@m768': 'max640'}}>
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
