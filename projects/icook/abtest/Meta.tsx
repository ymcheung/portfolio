import { useTranslation } from 'next-i18next';
import { MetaList, MetaItem, MetaItemTitle, MetaItemValue } from "@projects/meta";

export default function Meta() {
  const { t, i18n } = useTranslation('meta');

  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="abtest">{t('role.title')}</MetaItemTitle>
        <MetaItemValue>
        {
          t('role.combined.abtest',
            { ui: t('role.ui'), fe: t('role.fe') })
        }
        </MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="abtest">{t('team.title')}</MetaItemTitle>
        <MetaItemValue>
        {
          t('team.abtest')
        }
        </MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="abtest">{t('time.title')}</MetaItemTitle>
        <MetaItemValue>
        {
          t('time.abtest')
        }
        </MetaItemValue>
      </MetaItem>
    </MetaList>
  );
}
