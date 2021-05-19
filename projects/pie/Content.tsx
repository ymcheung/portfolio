import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';
import { Container } from '../../components/layout';

import { ContentTitle, Section, Paragraph } from '../../components/contentStyles';
import React from 'react';

type itemProps = {
  [x: string]: any;
  name: string;
  description: string;
};

const Gallery = styled('ul', {
  display: 'grid',
  grid: 'auto / auto-flow 288px',
  columnGap: '$16',
  overflowX: 'auto',
  margin: '0 -16px',
  padding: '0 0 $8',

  variants: {
    responsive: {
      desktop: {
        grid: 'auto / auto-flow 1fr',
        // margin: '0 -64px'
      }
    }
  }
});

const GalleryItem = styled('li', {
  padding: '0 $8',
  listStyle: 'none'
});

const GalleryFigure = styled('figure', {
  position: 'relative',
  margin: 0,
  padding: '0 $8',

  '&::before': {
    width: '100%',
    height: '464px',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
    content: '',
    background: 'linear-gradient(to bottom, transparent 0%, $shadeMockup50 50%, $shadeMockup75 75%, transparent 100%) top center / cover no-repeat',
  }
});

const GalleryCover = styled('img', {
  maxWidth: '100%',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 1,
  marginBottom: '$8',
  borderRadius: '16px'
});

export default function Content() {
  const { t } = useTranslation('pie');

  return(
    <Container as="article" responsive={{'@m768': 'max640'}} isgroupend>
      <Section>
        <Paragraph dangerouslySetInnerHTML={{__html: t('intro')}} indent sectionend />
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('why.title')}} />
        <Paragraph indent dangerouslySetInnerHTML={{__html: t('why.problem')}} />
        <Paragraph indent dangerouslySetInnerHTML={{__html: t('why.opinion')}} sectionend />
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('questions.title')}} />
        <Gallery responsive={{'@m992': 'desktop'}}>
          <GalleryItem>
            <GalleryFigure>
              <GalleryCover src="/projects/pie/gallery-full.jpg" alt={t('questions.flat.question')} />
              <figcaption>
                <ContentTitle as="strong" purpose="paragraph" dangerouslySetInnerHTML={{__html: t('questions.flat.title')}} />
                <Paragraph dangerouslySetInnerHTML={{__html: t('questions.flat.question')}} sectionend />
              </figcaption>
            </GalleryFigure>
          </GalleryItem>
          <GalleryItem>
            <GalleryFigure>
              <figcaption>
              <GalleryCover src="/projects/pie/gallery-statistics.jpg" alt={t('questions.back.question')} />
                <ContentTitle as="strong" purpose="paragraph" dangerouslySetInnerHTML={{__html: t('questions.back.title')}} />
                <Paragraph dangerouslySetInnerHTML={{__html: t('questions.back.question')}} sectionend />
              </figcaption>
            </GalleryFigure>
          </GalleryItem>
        </Gallery>
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