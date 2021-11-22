import { useTranslation } from 'next-i18next';

import { ListItem } from '@components/layout';
import { ContentTitle, GraphCaption } from '@components/contentStyles';

import IconArrowThen from '@projects/pie/IconArrowThen';
import IconCheck from '@projects/pie/IconCheck';

import { GraphGrid, GraphFigure } from './grid';
import IllustrateMainMenu from '@projects/pie/graph/problem/IllustrateMainMenu';
import IllustrateFunctions from '@projects/pie/graph/problem/IllustrateFunctions';

export default function GraphProblem() {
  const { t, i18n } = useTranslation('pie');

  const lang = i18n.language === 'en' ? 'en' : 'tw';

  return(
    <>
      <ContentTitle as="h3" purpose="paragraph" dangerouslySetInnerHTML={{__html: t('flows.clockin')}} />
      <GraphGrid inuse={lang} floor="first" responsive={{ '@initial': 'mobile' }}>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateMainMenu indicateForms="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="problem" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateFunctions confirmItem="none" indicateGoingBack="none" indicateConfirm="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              { view: t('flows.clockin') }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="problem" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateFunctions confirmItem="none" indicateGoingBack="none" indicateClockIn="none" indicateConfirm="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.clockin',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconCheck purpose="finish" asfinish="problem" />
        </ListItem>
      </GraphGrid>
      <ContentTitle as="h3" purpose="paragraph" dangerouslySetInnerHTML={{__html: t('flows.clockin',
        { context: 'withConfirm', clockin: t('flows.clockin'), confirmform: t('flows.confirmform') }
      )}} />
      <GraphGrid inuse={lang} floor="ground" responsive={{ '@initial': 'mobile', '@m992': 'desktop' }}>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateMainMenu indicateForms="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="problem" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateFunctions confirmItem="none"  indicateGoingBack="none" indicateConfirm="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              { view: t('flows.clockin') }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="problem" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateFunctions confirmItem="none" indicateClockIn="none" indicateConfirm="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.clockin',
              { context: 'done' }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="problem" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateMainMenu indicateClockIn="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.mainmenu')}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="problem" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
          <IllustrateFunctions clockInCta="none" indicateGoingBack="none" indicateClockIn="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              { view: t('flows.confirmform') }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="problem" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
          <IllustrateFunctions clockInCta="none" confirmItem="none" indicateGoingBack="none" indicateConfirm="none" indicateClockIn="none" />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.confirmform',
              { context: 'done' }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconCheck purpose="finish" asfinish="problem" />
        </ListItem>
      </GraphGrid>
    </>
  )
}
