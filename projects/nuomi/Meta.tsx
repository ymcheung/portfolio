import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "@projects/meta";

export default function Meta() {
  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="nuomi">Role</MetaItemTitle>
        <MetaItemValue>WordPress Theme Design &amp; Front-End</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="nuomi">Date</MetaItemTitle>
        <MetaItemValue>November, 2017</MetaItemValue>
      </MetaItem>
    </MetaList>
  );
}
