import { MetaList, MetaItem, MetaItemTitle, MetaItemValue  } from "../meta";

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
    </MetaList>
  );
}
