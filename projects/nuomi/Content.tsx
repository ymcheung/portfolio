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
        grid: 'auto / auto-flow 1fr'
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
  const { t } = useTranslation('nuomi');

  return(
    <Container as="article" responsive={{'@m768': 'max640'}} isgroupend>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('experience.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('experience.featured')}} indent sectionend />
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('retrospect.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('retrospect.description')}} indent sectionend />
      </Section>
    </Container>
  );
}
