import Link from 'next/link';
import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "../meta";

export default function Meta() {
  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="moment">Role</MetaItemTitle>
        <MetaItemValue scheme="dark">Organizer, UI Design, Web Front-End</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="moment">Status</MetaItemTitle>
        <MetaItemValue scheme="dark">Minimum Viable</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="moment">Languages</MetaItemTitle>
        <MetaItemValue scheme="dark">Mostly English</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="moment">Link</MetaItemTitle>
        <Link href="https://moment.intersection.tw" passHref>
          <MetaItemValue as="a" scheme="dark" target="_blank" rel="noopener">The Moment</MetaItemValue>
        </Link>
      </MetaItem>
    </MetaList>
  );
}
