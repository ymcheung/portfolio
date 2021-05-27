import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "../meta";

export default function Meta() {
  return(
    <MetaList responsive={{ '@m768': 'half' }}>
      <MetaItem>
        <MetaItemTitle project="pie">Role</MetaItemTitle>
        <MetaItemValue scheme="dark">Organizer, UI Designer</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="pie">Status</MetaItemTitle>
        <MetaItemValue scheme="dark">UI Design</MetaItemValue>
      </MetaItem>
      <MetaItem>
        <MetaItemTitle project="pie">Languages</MetaItemTitle>
        <MetaItemValue scheme="dark">正體中文, English</MetaItemValue>
      </MetaItem>
    </MetaList>
  );
}
