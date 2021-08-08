import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';

import { Container, ListItem } from '../../components/layout';
import { ContentTitle, Paragraph, GraphCaption } from '../../components/contentStyles';

import Image from 'next/image';
const svgThenArrow = '/projects/pie/graph/thenArrow.svg';
const svgFinish = '/projects/pie/graph/finish.svg';
const graphInUseMainMenu = '/projects/pie/graph/mainmenu.svg';
const graphInUseClockInScreen = '/projects/pie/graph/clockinScreen.svg';
const graphInUseConfirmScreen = '/projects/pie/graph/confirmScreen.svg';
const graphInUseConfirmNone = '/projects/pie/graph/confirmNone.svg';

const graphPieClockIn = '/projects/pie/graph/clockingNone.webp';
const graphPieClockedIn = '/projects/pie/graph/clockedIn.webp';
const graphPieConfirm = '/projects/pie/graph/confirm.webp';
const graphPieApplying = '/projects/pie/graph/applying.webp';

const GraphGrid = styled('ul', {
  display: 'grid',
  overflowX: 'auto',
  marginTop: 0,
  padding: '0 0 $12',

  variants: {
    inuse: {
      en: {
        grid: 'auto / auto-flow 84px 24px',
        marginBottom: '$4',
      },
      tw: {
        grid: 'auto / auto-flow 80px 24px',
        marginBottom: '$4'
      }
    },
    pie: {
      true: {
        grid: 'auto / auto-flow 144px 24px'
      }
    },
    responsive: {
      mobile: {
        marginBottom: '$24'
      },
      desktop: {
        marginRight: '-64px'
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
});

const ImgPie = styled(Image, {
  borderRadius: '12px'
});

const ImgIndicator = styled('img', {
  variants: {
    purpose: {
      then: {
        width: '6px',
        height: '16px'
      },
      finish: {
        size: '16px'
      }
    },
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

export default function Graph() {
  const { t, i18n } = useTranslation('pie');

  const lang = i18n.language === 'en' ? 'en' : 'tw';

  return(
    <Container responsive={{'@m768': 'max640'}}>
      <ContentTitle purpose="section" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.title')}} />
      <Paragraph indent scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.description')}} />
      <ContentTitle as="h3" purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockin')}} />
      <ContentTitle as="strong" purpose="graph" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.inuse')}} />
      <GraphGrid inuse={lang}>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseMainMenu} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="inuse" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseClockInScreen} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.screen',
              {view: t('flows.clockin')}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="inuse" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseClockInScreen} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockin',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgFinish} purpose="finish" graph="inuse" aria-hidden="true" />
        </ListItem>
      </GraphGrid>
      <ContentTitle as="strong" purpose="graph" scheme="mono">Pie</ContentTitle>
      <GraphGrid pie responsive={{ '@initial': 'mobile' }}>
        <ListItem nomark>
          <GraphFigure>
            <ImgPie src={graphPieClockIn} width={128} height={221} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.screen',
              {view: t('flows.clockin')}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="pie" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgPie src={graphPieClockedIn} width={128} height={221} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockin',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgFinish} purpose="finish" graph="pie" aria-hidden="true" />
        </ListItem>
      </GraphGrid>
      <ContentTitle as="h3" purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockin',
        {context: 'withConfirm', clockin: t('flows.clockin'), confirmform: t('flows.confirmform')}
      )}} />
      <ContentTitle as="strong" purpose="graph" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.inuse')}} />
      <GraphGrid inuse={lang} responsive={{ '@m992': 'desktop' }}>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseMainMenu} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="inuse" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseClockInScreen} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.screen',
              {view: t('flows.clockin')}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="inuse" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseClockInScreen} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockin',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="inuse" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseMainMenu} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="inuse" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseConfirmScreen} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.screen',
              {view: t('flows.confirmform')}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="inuse" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseConfirmNone} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.confirmform',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgFinish} purpose="finish" graph="inuse" aria-hidden="true" />
        </ListItem>
      </GraphGrid>
      <ContentTitle as="strong" purpose="graph" scheme="mono">Pie</ContentTitle>
      <GraphGrid pie responsive={{ '@initial': 'mobile', '@m992': 'desktop' }}>
        <ListItem nomark>
          <GraphFigure>
            <ImgPie src={graphPieClockIn} width={128} height={221} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.screen',
              {view: t('flows.clockin')}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="pie" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgPie src={graphPieClockedIn} width={128} height={221} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockin',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="pie" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgPie src={graphPieConfirm} width={128} height={221} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.screen',
              {view: t('flows.confirmform')}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgThenArrow} purpose="then" graph="pie" aria-hidden="true" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgPie src={graphPieApplying} width={128} height={221} alt="" />
            <GraphCaption scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.confirmform',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <ImgIndicator src={svgFinish} purpose="finish" graph="pie" aria-hidden="true" />
        </ListItem>
      </GraphGrid>
    </Container>
  )
}
