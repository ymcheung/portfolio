import Link from 'next/link';
import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "..//meta";

export default function Meta() {
  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="intersection">Role</MetaItemTitle>
        <MetaItemValue scheme="light">Organizer &amp; Front-End Designer</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="intersection">Link</MetaItemTitle>
        <Link href="http://thecosignstudio.github.io/process" passHref>
          <MetaItemValue as="a" scheme="light" target="_blank" rel="noopener">專業人士的設計流程</MetaItemValue>
        </Link>
      </MetaItem>
    </MetaList>
  );
}
