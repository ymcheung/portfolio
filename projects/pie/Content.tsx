import React from 'react';
import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';

import LangSwitch from '../LangSwitch';

import { Container, ArticleBody, GalleryContainer } from '../../components/layout';
import { ContentTitle, Section, Paragraph } from '../../components/contentStyles';

type itemProps = {
  [x: string]: any;
  name: string;
  description: string;
};

// const Gallery = styled('ul', {
//   display: 'grid',
//   grid: 'auto / auto-flow 288px',
//   columnGap: '$16',
//   overflowX: 'auto',
//   margin: '0 auto',
//   padding: '0 0 $16',

//   variants: {
//     responsive: {
//       tablet: {
//         maxWidth: '640px',
//         grid: 'auto / auto-flow 1fr'
//       }
//     }
//   }
// });

// const GalleryItem = styled('li', {
//   padding: '0 $8',
//   listStyle: 'none'
// });

// const GalleryFigure = styled('figure', {
//   position: 'relative',
//   margin: 0,
//   padding: '0 $8',

//   '&::before': {
//     width: '100%',
//     height: '464px',
//     fullAbsolute: '',
//     content: `''`,
//     background: 'linear-gradient(to bottom, transparent 0%, hsla($shade800, 0.5) 50%, transparent 100%) top center / cover no-repeat',
//   }
// });

// const GalleryCover = styled('img', {
//   maxWidth: '100%',
//   minHeight: '455px',
//   overflow: 'hidden',
//   position: 'relative',
//   zIndex: 1,
//   marginBottom: '$8',
//   borderRadius: '16px'
// });

export default function Content() {
  const { t } = useTranslation('pie');

  return(
    <ArticleBody>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <LangSwitch />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('brief.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('brief.description')}} indent sectionend />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('why.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('why.problem')}} indent />
          <Paragraph dangerouslySetInnerHTML={{__html: t('why.opinion')}} indent sectionend />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('question.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('question.content')}} indent sectionend />
        </Section>
      </Container>
      <GalleryContainer project="pie">
        <Container as="section" responsive={{'@m768': 'max640'}}>
          <ContentTitle purpose="section" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.title')}} />
        </Container>
      </GalleryContainer>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('document.title')}} />
          {t<string, itemProps>('document.items', { returnObjects: true }).map(({ name, description }: itemProps, index: number) => (
            <React.Fragment key={`doc-${index}`}>
              <ContentTitle as="strong" purpose="paragraph" dangerouslySetInnerHTML={{__html: name}} />
              <Paragraph dangerouslySetInnerHTML={{__html: description}} indent />
            </React.Fragment>
          ))}
        </Section>
        <Section isgroupend>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('note.title')}} />
        {t<string, itemProps>('note.items', { returnObjects: true }).map(({ name, description }: itemProps, index: number) => (
          <React.Fragment key={`note-${index}`}>
            <ContentTitle as="strong" purpose="paragraph" dangerouslySetInnerHTML={{__html: name}} />
            <Paragraph dangerouslySetInnerHTML={{__html: description}} indent />
          </React.Fragment>
        ))}
      </Section>
      </Container>
    </ArticleBody>
  );
}
