import { useTranslation } from 'next-i18next';
import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "@projects/meta";

export default function Meta() {
  const { t } = useTranslation('meta');

  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="nuomi">{t('role.title')}</MetaItemTitle>
        <MetaItemValue>WordPress Theme Design &amp; Front-End</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="nuomi">{t('date.title')}</MetaItemTitle>
        <MetaItemValue>November, 2017</MetaItemValue>
      </MetaItem>
    </MetaList>
  );
}
