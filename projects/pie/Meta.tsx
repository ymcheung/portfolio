import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { MetaList, MetaItem, MetaItemTitle, MetaStatusList, MetaItemValue } from "@projects/meta";

import IconHasDeliverable from '@projects/IconHasDeliverable';
import IconNotReady from '@projects/IconNotReady';

export default function Meta() {
  const { t, i18n } = useTranslation('meta');

  const statusItems = [
    {
      name: t('status.doc'),
      link: i18n.language === 'en' ? 'https://www.craft.do/s/ID02aukYb1wMuR' : 'https://www.craft.do/s/te59NNr9aafSzq',
      isReady: true,
      sbevent: 'Pie/Meta: Onboarding Document Link'
    },
    {
      name: 'UI',
      link: '',
      isReady: true
    },
    {
      name: 'Prototype',
      link: 'https://www.figma.com/proto/eYB3QoL6f97bLBgZ5oJEbM/pie-en?page-id=1099%3A1135&node-id=1099%3A1140&viewport=258%2C235%2C0.17815665900707245&scaling=scale-down&starting-point-node-id=1099%3A1140&show-proto-sidebar=1',
      isReady: true,
      sbevent: 'Pie/Meta: Prototype Link'
    },
    {
      name: t('status.landing'),
      link: '',
      isReady: false
    }
  ];

  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="pie">{t('role.title')}</MetaItemTitle>
        <MetaItemValue>{t('role.ui')}</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="pie">{t('lang.title')}</MetaItemTitle>
        <MetaItemValue>
          English, 正體中文
        </MetaItemValue>
      </MetaItem>
      <MetaItem itemspan={{ '@m768': 'full' }}>
        <MetaItemTitle project="pie">{t('status.title')}</MetaItemTitle>
        <MetaStatusList responsive={{ '@m768': 'tablet' }}>
          {
            statusItems.map(({ name, link, isReady, sbevent }, index) =>
              <MetaItem key={`statusItems-${index}`}>
                {
                  isReady &&
                  <IconHasDeliverable project="pie" />
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
