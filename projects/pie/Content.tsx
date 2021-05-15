import { useTranslation } from 'next-i18next';
import { Container } from '../../components/Layout';

import { ContentTitle, Section, Paragraph } from '../../components/contentStyles';
import React from 'react';

type itemProps = {
  [x: string]: any;
  name: string;
  description: string;
};

export default function Content() {
  const { t } = useTranslation('pie');

  return(
    <Container as="article" responsive={{'@m768': 'max640'}}>
      <Section>
        <Paragraph dangerouslySetInnerHTML={{__html: t('intro')}} indent sectionEnd  />
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('why.title')}} />
        <Paragraph indent dangerouslySetInnerHTML={{__html: t('why.problem')}} />
        <Paragraph indent dangerouslySetInnerHTML={{__html: t('why.opinion')}} sectionEnd />
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('questions.title')}} />
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('document.title')}} />
        {t<string, itemProps>('document.items', { returnObjects: true }).map(({ name, description }: itemProps, index: number) => (
          <React.Fragment key={`doc-${index}`}>
            <ContentTitle as="strong" purpose="paragraph" dangerouslySetInnerHTML={{__html: name}} />
            <Paragraph dangerouslySetInnerHTML={{__html: description}} indent />
          </React.Fragment>
        ))}
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('note.title')}} />
        {t<string, itemProps>('note.items', { returnObjects: true }).map(({ name, description }: itemProps, index: number) => (
          <React.Fragment key={`note-${index}`}>
            <ContentTitle as="strong" purpose="paragraph" dangerouslySetInnerHTML={{__html: name}} />
            <Paragraph dangerouslySetInnerHTML={{__html: description}} indent />
          </React.Fragment>
        ))}
      </Section>
    </Container>
  );
}
