import { useTranslation } from 'next-i18next';
import { ContentTitle, Paragraph } from '@components/contentStyles';
import { PrototypeIframe } from '@elements/prototypeIframe';

export default function GraphRedesigned() {
  const { t } = useTranslation('pie');

  return(
    <>
      <ContentTitle purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('flows.clockin',
        { context: 'withConfirm', clockin: t('flows.clockin'), confirmform: t('flows.confirmform') }
      )}} />
      <Paragraph  scheme="mono" dangerouslySetInnerHTML={{__html: t('prototype.clockInAndConfirm.description')}} />
      <PrototypeIframe src="https://www.figma.com/embed?embed_host=ymcheung&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FeYB3QoL6f97bLBgZ5oJEbM%2Fpie-en%3Fpage-id%3D1099%253A1135%26node-id%3D1099%253A1140%26viewport%3D295%252C48%252C0.32%26scaling%3Dscale-down%26starting-point-node-id%3D1099%253A1140%26show-proto-sidebar%3D1" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} allowFullScreen loading="lazy" />
    </>
  )
}
