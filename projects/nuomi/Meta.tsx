import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "../../components/meta";

export default function Meta() {
  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="nuomi">Role</MetaItemTitle>
        <MetaItemValue scheme="dark">WordPress Theme Design &amp; Front-End</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="nuomi">Date</MetaItemTitle>
        <MetaItemValue scheme="dark">November, 2017</MetaItemValue>
      </MetaItem>
    </MetaList>
  );
}
