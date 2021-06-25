import Link from 'next/link';
import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "../meta";

export default function Meta() {
  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="moment">Role</MetaItemTitle>
        <MetaItemValue>Organizer, UI Design, Web Front-End</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="moment">Status</MetaItemTitle>
        <MetaItemValue>First Release</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="moment">Languages</MetaItemTitle>
        <MetaItemValue>Mostly English</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="moment">Link</MetaItemTitle>
        <Link href="https://moment.intersection.tw" passHref>
          <MetaItemValue as="a" data-splitbee-event="External Link: Moment" target="_blank" rel="noopener">The Moment</MetaItemValue>
        </Link>
      </MetaItem>
    </MetaList>
  );
}
