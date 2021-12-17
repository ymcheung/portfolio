import Link from 'next/link';
import { MetaList, MetaItem, MetaItemTitle, MetaStatusList, MetaItemValue } from "@projects/meta";

import IconHasDeliverable from '@projects/IconHasDeliverable';
import IconNotReady from '@projects/IconNotReady';

export default function Meta() {
  const statusItems = [
    {
      name: 'Document',
      link: 'https://www.craft.do/s/ID02aukYb1wMuR',
      isReady: true,
      sbevent: 'Carrier/Meta: Document Link'
    },
    {
      name: 'UI',
      link: '',
      isReady: true,
      sbevent: ''
    },
    {
      name: 'Prototype',
      link: '',
      isReady: false,
      sbevent: ''
    },
    {
      name: 'Web App',
      link: '',
      isReady: false,
      sbevent: ''
    },
    {
      name: 'Landing Page',
      link: '',
      isReady: false,
      sbevent: ''
    }
  ];

  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="carrier">Role</MetaItemTitle>
        <MetaItemValue>User Research, UI Design, Web Front-End</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="carrier">Languages</MetaItemTitle>
        <MetaItemValue>
          English, 正體中文
        </MetaItemValue>
      </MetaItem>
      <MetaItem itemspan={{ '@m768': 'full' }}>
        <MetaItemTitle project="carrier">Status</MetaItemTitle>
        <MetaStatusList responsive={{ '@m768': 'tablet' }}>
          {
            statusItems.map(({ name, isReady, link, sbevent }, index) =>
              <MetaItem key={`statusItems-${index}`}>
                {
                  isReady &&
                  <IconHasDeliverable project="carrier" />
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
