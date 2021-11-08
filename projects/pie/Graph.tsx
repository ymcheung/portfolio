import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';

import { ListItem } from '@components/layout';
import { ContentTitle, GraphCaption } from '@components/contentStyles';

import IconArrowThen from '@projects/pie/IconArrowThen';
import IconCheck from '@projects/pie/IconCheck';

import IconMainMenu from '@projects/pie/inUse/IconMainMenu';
import IconFunctions from '@projects/pie/inUse/IconFunctions';

const GraphGrid = styled('ul', {
  display: 'grid',
  overflowX: 'auto',
  marginTop: 0,

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
      mobile: {
        padding: '0 0 $12'
      },
      desktop: {
        marginRight: '-64px',
        padding: 0
      }
    }
  }
});

const GraphFigure = styled('figure', {
  margin: 0,
  padding: 0
});

export default function Graph() {
  const { t, i18n } = useTranslation('pie');

  const lang = i18n.language === 'en' ? 'en' : 'tw';

  return(
    <>
      <ContentTitle as="h3" purpose="paragraph" dangerouslySetInnerHTML={{__html: t('flows.clockin')}} />
      <GraphGrid inuse={lang} floor="first" responsive={{ '@initial': 'mobile' }}>
        <ListItem nomark>
          <GraphFigure>
            <IconMainMenu indicateForms="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IconFunctions confirmItem="none" indicateGoingBack="none" indicateConfirm="none" />
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
            <IconFunctions confirmItem="none" indicateGoingBack="none" indicateClockIn="none" indicateConfirm="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.clockin',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconCheck purpose="finish" />
        </ListItem>
      </GraphGrid>
      <ContentTitle as="h3" purpose="paragraph" dangerouslySetInnerHTML={{__html: t('flows.clockin',
        {context: 'withConfirm', clockin: t('flows.clockin'), confirmform: t('flows.confirmform')}
      )}} />
      <GraphGrid inuse={lang} floor="ground" responsive={{ '@initial': 'mobile', '@m992': 'desktop' }}>
        <ListItem nomark>
          <GraphFigure>
            <IconMainMenu indicateForms="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IconFunctions confirmItem="none"  indicateGoingBack="none" indicateConfirm="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              { view: t('flows.clockin') }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IconFunctions confirmItem="none" indicateClockIn="none" indicateConfirm="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.clockin',
              { context: 'done' }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IconMainMenu indicateClockIn="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
          <IconFunctions clockInCta="none" indicateGoingBack="none" indicateClockIn="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              { view: t('flows.confirmform') }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
          <IconFunctions clockInCta="none" confirmItem="none" indicateGoingBack="none" indicateConfirm="none" indicateClockIn="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.confirmform',
              { context: 'done' }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconCheck purpose="finish" />
        </ListItem>
      </GraphGrid>
    </>
  )
}
