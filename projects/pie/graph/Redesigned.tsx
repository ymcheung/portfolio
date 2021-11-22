import { useTranslation } from 'next-i18next';

import { ListItem } from '@components/layout';
import { ContentTitle, GraphCaption } from '@components/contentStyles';

import IconArrowThen from '@projects/pie/IconArrowThen';
import IconCheck from '@projects/pie/IconCheck';

import { GraphGrid, GraphFigure } from './grid';
import IllustrateClockings from './redesigned/IllustrateClockings';
import IllustrateForms from './redesigned/IllustrateForms';

export default function GraphRedesigned() {
  const { t, i18n } = useTranslation('pie');

  return(
    <>
      <ContentTitle as="h3" purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockin')}} />
      <GraphGrid redesigned floor="first" responsive={{ '@initial': 'mobile' }}>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateClockings />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              { view: t('flows.clockin') }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="redesigned" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateClockings />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.clockin',
              {context: 'done'}
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconCheck purpose="finish" asfinish="redesigned" />
        </ListItem>
      </GraphGrid>
      <ContentTitle as="h3" purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockin',
        {context: 'withConfirm', clockin: t('flows.clockin'), confirmform: t('flows.confirmform')}
      )}} />
      <GraphGrid redesigned floor="ground" responsive={{ '@initial': 'mobile', '@m992': 'desktop' }}>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateForms />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              { view: t('flows.clockin') }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="redesigned" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
            <IllustrateForms />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.clockin',
              { context: 'done' }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="redesigned" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
          <IllustrateForms />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.screen',
              { view: t('flows.confirmform') }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconArrowThen asfinish="redesigned" />
        </ListItem>
        <ListItem nomark>
          <GraphFigure>
          <IllustrateForms />
            <GraphCaption dangerouslySetInnerHTML={{__html: t('flows.confirmform',
              { context: 'done' }
            )}} />
          </GraphFigure>
        </ListItem>
        <ListItem nomark>
          <IconCheck purpose="finish" asfinish="redesigned" />
        </ListItem>
      </GraphGrid>
    </>
  )
}
