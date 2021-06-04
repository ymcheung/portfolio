import Link from 'next/link';
import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "../meta";

export default function Meta() {
  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="intersection">Role</MetaItemTitle>
        <MetaItemValue>Organizer &amp; Translator</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="intersection">Link</MetaItemTitle>
        <Link href="https://intersection.tw" passHref>
          <MetaItemValue as="a" target="_blank" rel="noopener">Intersection</MetaItemValue>
        </Link>
      </MetaItem>
    </MetaList>
  );
}
