import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { MetaList, MetaItem, MetaItemTitle, MetaStatusList, MetaItemValue } from "@projects/meta";
import IconHasDeliverable from '@projects/IconHasDeliverable';
import IconNotReady from '@projects/IconNotReady';

export default function Meta() {
  const { t } = useTranslation('meta');

  const statusItems = [
    {
      name: t('role.research'),
      isReady: true
    },
    {
      name: t('role.ui'),
      isReady: true
    },
    {
      name: t('link.title'),
      link: 'https://moment.intersection.tw',
      isReady: true,
      sbevent: 'Moment/Meta: Website Link'
    }
  ];

  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="moment">{t('role.title')}</MetaItemTitle>
        <MetaItemValue>
        {
          t('role.combined.all',
            { research: t('role.research'), ui: t('role.ui'), fe: t('role.fe') })
        }
        </MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="moment">{t('lang.title')}</MetaItemTitle>
        <MetaItemValue>English &amp; 正體中文</MetaItemValue>
      </MetaItem>
      <MetaItem itemspan={{ '@m768': 'full' }}>
        <MetaItemTitle project="moment">{t('status.title')}</MetaItemTitle>
        <MetaStatusList responsive={{ '@m768': 'tablet' }}>
        {
          statusItems.map(({ name, link, isReady, sbevent }, index) =>
            <MetaItem key={`statusItems-${index}`}>
            {
              isReady &&
              <IconHasDeliverable project="moment" />
            }
            {
              !isReady &&
              <IconNotReady />
            }
            {
              link &&
              <Link href={link} passHref>
                <MetaItemValue as="a" data-splitbee-event={sbevent} target="_blank" rel="noopener">{name}</MetaItemValue>
              </Link>
            }
            {
              !link &&
              <MetaItemValue>
                {name}
              </MetaItemValue>
            }
            </MetaItem>
          )
        }
        </MetaStatusList>
      </MetaItem>
    </MetaList>
  );
}
