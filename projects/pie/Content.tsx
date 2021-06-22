import React from 'react';
import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';

import LangSwitch from '../LangSwitch';

import { Container, ArticleBody, GalleryContainer, ListItem } from '../../components/layout';
import { ContentTitle, Section, Paragraph, GraphCaption } from '../../components/contentStyles';

import Image from 'next/image';
const svgThenArrow = '/projects/pie/graph/thenArrow.svg';
const graphInUseMainMenu = '/projects/pie/graph/mainmenu.svg';
const graphInUseClockInScreen = '/projects/pie/graph/clockinScreen.svg';

const graphPieClockIn = '/projects/pie/graph/clockInNone.jpg';
const graphPieClockedIn = '/projects/pie/graph/clockedIn.jpg';

type itemProps = {
  [x: string]: any;
  name: string;
  description: string;
};

const GraphGrid = styled('ul', {
  display: 'grid',
  overflowX: 'auto',
  margin: '0 0 $4',
  padding: '0 0 $12',

  variants: {
    inuse: {
      en: {
        grid: 'auto / auto-flow 84px 24px'
      },
      tw: {
        grid: 'auto / auto-flow 80px 24px'
      }
    },
    pie: {
      true: {
        grid: 'auto / auto-flow 144px 24px'
      }
    }
  }
});

const GraphFigure = styled('figure', {
  margin: 0,
  paddiing: 0
});

const ImgInUse = styled('img', {
  width: '64px',
  height: '75px',
  marginBottom: '$4'
});

const ImgPie = styled(Image, {
  marginBottom: '$4',
  borderRadius: '12px'
});

const ImgThen = styled('img', {
  width: '6px',
  height: '10px',

  variants: {
    graph: {
      inuse: {
        marginTop: '32px'
      },
      pie: {
        marginTop: '96px'
      }
    }
  }
});

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
  const { t, i18n } = useTranslation('pie');

  const lang = i18n.language === 'en' ? 'en' : 'tw';

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
          <Paragraph indent scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.description')}} />
          <ContentTitle as="h3" purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockinout',
            {clock: t('flows.clock'), inout: t('flows.inout')}
          )}} />
          <ContentTitle as="strong" purpose="graph" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.inuse')}} />
          <GraphGrid inuse={lang}>
            <ListItem nomark>
              <GraphFigure>
                <ImgInUse src={graphInUseMainMenu} alt="" />
                <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
              </GraphFigure>
            </ListItem>
            <ListItem nomark>
              <ImgThen src={svgThenArrow} graph="inuse" aria-hidden="true" />
            </ListItem>
            <ListItem nomark>
              <GraphFigure>
                <ImgInUse src={graphInUseClockInScreen} alt="" />
                <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.screen',
                  {clock: t('flows.clock'), inout: t('flows.inout')}
                )}} />
              </GraphFigure>
            </ListItem>
            <ListItem nomark>
              <ImgThen src={svgThenArrow} graph="inuse" aria-hidden="true" />
            </ListItem>
            <ListItem nomark>
              <GraphFigure>
                <ImgInUse src={graphInUseClockInScreen} alt="" />
                <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockedinout',
                  {clock: t('flows.clock'), inout: t('flows.inout')}
                )}} />
              </GraphFigure>
            </ListItem>
            <ListItem nomark>

            </ListItem>
          </GraphGrid>
          <ContentTitle as="strong" purpose="graph" scheme="mono">Pie</ContentTitle>
          <GraphGrid pie>
            <ListItem nomark>
              <GraphFigure>
                <ImgPie src={graphPieClockIn} width={128} height={221} alt="" />
                <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.screen',
                  {clock: t('flows.clock'), inout: t('flows.inout')}
                )}} />
              </GraphFigure>
            </ListItem>
            <ListItem nomark>
              <ImgThen src={svgThenArrow} graph="pie" aria-hidden="true" />
            </ListItem>
            <ListItem nomark>
              <GraphFigure>
                <ImgPie src={graphPieClockedIn} width={128} height={221} alt="" />
                <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockedinout',
                  {clock: t('flows.clock'), inout: t('flows.inout')}
                )}} />
              </GraphFigure>
            </ListItem>
          </GraphGrid>
          <Paragraph indent scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.another')}} />
        </Container>
      </GalleryContainer>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('document.title')}} />
          {t<string, itemProps>('document.items', { returnObjects: true }).map(({ name, description }: itemProps, index: number) => (
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
    </ArticleBody>
  );
}
