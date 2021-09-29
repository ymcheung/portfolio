import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';

import { ListItem } from '@components/layout';
import { ContentTitle, GraphCaption } from '@components/contentStyles';

import IconArrowThen from '@projects/pie/IconArrowThen';
import IconFinish from '@projects/pie/IconFinish';

const graphInUseMainMenu = '/projects/pie/graph/mainmenu.svg';
const graphInUseClockInScreen = '/projects/pie/graph/clockinScreen.svg';
const graphInUseConfirmScreen = '/projects/pie/graph/confirmScreen.svg';
const graphInUseConfirmNone = '/projects/pie/graph/confirmNone.svg';

const GraphGrid = styled('ul', {
  display: 'grid',
  overflowX: 'auto',
  marginTop: 0,
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
    floor: {
      first: {
        marginBottom: '$16'
      },
      ground: {
        marginBottom: 0
      }
    },
    responsive: {
      desktop: {
        marginRight: '-64px'
      }
    }
  }
});

const GraphFigure = styled('figure', {
  margin: 0,
  padding: 0
});

const ImgInUse = styled('img', {
  width: '64px',
  height: '75px',
});

export default function Graph() {
  const { t, i18n } = useTranslation('pie');

  const lang = i18n.language === 'en' ? 'en' : 'tw';

  return(
    <>
      <ContentTitle as="h3" purpose="paragraph" dangerouslySetInnerHTML={{__html: t('flows.clockin')}} />
      <GraphGrid inuse={lang} floor="first">
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseMainMenu} alt="" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseClockInScreen} alt="" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              {view: t('flows.clockin')}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseClockInScreen} alt="" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.clockin',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconFinish />
        </ListItem>
      </GraphGrid>
      <ContentTitle as="h3" purpose="paragraph" dangerouslySetInnerHTML={{__html: t('flows.clockin',
        {context: 'withConfirm', clockin: t('flows.clockin'), confirmform: t('flows.confirmform')}
      )}} />
      <GraphGrid inuse={lang} floor="ground" responsive={{ '@m992': 'desktop' }}>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseMainMenu} alt="" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseClockInScreen} alt="" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              {view: t('flows.clockin')}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseClockInScreen} alt="" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.clockin',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseMainMenu} alt="" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseConfirmScreen} alt="" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              {view: t('flows.confirmform')}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <ImgInUse src={graphInUseConfirmNone} alt="" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.confirmform',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconFinish />
        </ListItem>
      </GraphGrid>
    </>
  )
}
