import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "@projects/meta";

export default function Meta() {
  const { t } = useTranslation('meta');

  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="intersection">{t('role.title')}</MetaItemTitle>
        <MetaItemValue>
        {
          t('role.combined.process', {
            org: t('role.org'), fe: t('role.fe')
          })
        }
        </MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="intersection">{t('link.title')}</MetaItemTitle>
        <Link href="https://thecosignstudio.github.io/process" passHref>
          <MetaItemValue as="a" data-splitbee-event="Design Process: Meta Link" target="_blank" rel="noopener">專業人士的設計流程</MetaItemValue>
        </Link>
      </MetaItem>
    </MetaList>
  );
}
