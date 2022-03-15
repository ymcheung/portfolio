import { useTranslation } from 'next-i18next';
import { styled } from '@stitches/react';
import { ContentTitle, Paragraph } from '@components/contentStyles';

const Video = styled('video', {
  display: 'block',
  maxWidth: '288px',
  minHeight: '512px'
});

export default function GraphRedesigned() {
  const { t } = useTranslation('pie');

  return(
    <>
      <ContentTitle as="h3" purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockin',
        { context: 'titleWithTabBar', title: t('flows.clockin',
          { context: 'withConfirm', clockin: t('flows.clockin'), confirmform: t('flows.confirmform') }
        )}
      )}} />
      <Paragraph scheme="mono" indent dangerouslySetInnerHTML={{__html: t('nav.convenience')}} />
      <Video controls controlsList="nodownload nofullscreen" muted disablePictureInPicture>
        <source src="/projects/pie/graph/clockinWithConfirm.webm" type="video/webm" />
        <source src="/projects/pie/graph/clockinWithConfirm.mp4" type="video/mp4" />
      </Video>
    </>
  )
}
