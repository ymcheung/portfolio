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
      link: i18n.language === 'en' ? 'https://www.craft.do/s/WPp0S5oPecqEPc' : 'https://www.craft.do/s/kRGlFyjpSWAKUh',
      isReady: true,
      newTab: true,
      sbevent: 'Pie/Meta: Onboarding Document Link'
    },
    {
      name: 'Prototype',
      link: '#sectionPrototype',
      isReady: true,
      newTab: false,
      sbevent: 'Jump to Prototype'
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
            statusItems.map(({ name, link, isReady, newTab, sbevent }, index) =>
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
                  link && newTab &&
                  <Link href={link} passHref>
                    <MetaItemValue as="a" data-splitbee-event={`Pie/Meta: ${sbevent}`} target="_blank" rel="noopener">{name}</MetaItemValue>
                  </Link>
                }
                {
                  link && !newTab &&
                  <Link href={link} passHref>
                    <MetaItemValue as="a" data-splitbee-event={`Pie/Meta: ${sbevent}`}>{name}</MetaItemValue>
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
