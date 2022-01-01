import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "@projects/meta";

export default function Meta() {
  const { t } = useTranslation('meta');

  return(
    <MetaList as="section" responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="intersection">{t('role.title')}</MetaItemTitle>
        <MetaItemValue>
        {
          t('role.combined.intersection', {
            org: t('role.org'), translate: t('role.translate')
          })
        }
        </MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="intersection">{t('link.title')}</MetaItemTitle>
        <Link href="https://intersection.tw" passHref>
          <MetaItemValue as="a" data-splitbee-event="Intersection: Meta Link" target="_blank" rel="noopener">Intersection</MetaItemValue>
        </Link>
      </MetaItem>
    </MetaList>
  );
}
