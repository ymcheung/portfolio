import { styled } from '../../stitches.config';

const List = styled('ul', {
  display: 'grid',
  rowGap: '$12',
  margin: 0,
  padding: 0,

  variants: {
    responsive: {
      half: {
        grid: 'auto / repeat(2, 1fr)',
        columnGap: '$12'
      }
    }
  }
});

const Item = styled('li', {
  listStyle: 'none'
});

const ItemTitle = styled('strong', {
  display: 'block',
  color: '$pie800',
  fontFamily: '$mono',
  fontSize: '$14',
  fontWeight: 500,
  lineHeight: '20px'
});

const ItemValue = styled('span', {
  display: 'inline-block',
  color: '$shade1000',
  fontFamily: '$mono',
  fontSize: '$14',
  fontWeight: 500
});

export default function Meta() {
  return(
    <List responsive={{ '@m768': 'half' }}>
      <Item>
        <ItemTitle>Role</ItemTitle>
        <ItemValue>Organizer, UI Designer</ItemValue>
      </Item>
      <Item>
        <ItemTitle>Status</ItemTitle>
        <ItemValue>UI Design</ItemValue>
      </Item>
      <Item>
        <ItemTitle>Languages</ItemTitle>
        <ItemValue>正體中文, English</ItemValue>
      </Item>
    </List>
  );
}
