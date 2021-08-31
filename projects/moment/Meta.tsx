import Link from 'next/link';
import { MetaList, MetaItem, MetaItemTitle, MetaStatusList, MetaItemValue } from "@projects/meta";
import IconHasDeliverable from '@projects/IconHasDeliverable';
import IconNotReady from '@projects/IconNotReady';

export default function Meta() {
  const statusItems = [
    {
      name: 'UI',
      isReady: true
    },
    {
      name: 'Website',
      link: 'https://moment.intersection.tw',
      isReady: true,
      sbevent: 'Moment/Meta: Website Link'
    }
  ];

  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="moment">Role</MetaItemTitle>
        <MetaItemValue>Organizer, UI Design, Web Front-End</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="moment">Team Size</MetaItemTitle>
        <MetaItemValue>1 UI Design</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="moment">Languages</MetaItemTitle>
        <MetaItemValue>Mostly English</MetaItemValue>
      </MetaItem>
      <MetaItem itemspan="full">
        <MetaItemTitle project="moment">Status</MetaItemTitle>
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
