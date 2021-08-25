import Link from 'next/link';
import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "@projects/meta";
 
export default function Meta() {
  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="pie">Role</MetaItemTitle>
        <MetaItemValue>Organizer, UI Designer</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="pie">Status</MetaItemTitle>
        <MetaItemValue>UI Design in Progress</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="pie">Languages</MetaItemTitle>
        <MetaItemValue>正體中文, English</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="pie">Link</MetaItemTitle>
        <Link href="https://www.figma.com/proto/eYB3QoL6f97bLBgZ5oJEbM/pie-en?page-id=1099%3A1135&node-id=1099%3A1140&viewport=258%2C235%2C0.17815665900707245&scaling=scale-down&starting-point-node-id=1099%3A1140&show-proto-sidebar=1" passHref>
          <MetaItemValue as="a" data-splitbee-event="Pie: Meta Link" target="_blank" rel="noopener">Prototype in Figma</MetaItemValue>
        </Link>
      </MetaItem>
    </MetaList>
  );
}
