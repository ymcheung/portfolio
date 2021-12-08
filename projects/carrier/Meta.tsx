// import Link from 'next/link';
import { MetaList, MetaItem, MetaItemTitle, MetaStatusList, MetaItemValue } from "@projects/meta";

import IconHasDeliverable from '@projects/IconHasDeliverable';
import IconNotReady from '@projects/IconNotReady';

export default function Meta() {
  const statusItems = [
    {
      name: 'Document',
      link: '',
      isReady: false
    },
    {
      name: 'UI',
      link: '',
      isReady: true
    },
    {
      name: 'Prototype',
      link: '',
      isReady: false
    },
    {
      name: 'Web App',
      link: '',
      isReady: false
    },
    {
      name: 'Landing Page',
      link: '',
      isReady: false
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
            statusItems.map(({ name, isReady, link }, index) => 
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
