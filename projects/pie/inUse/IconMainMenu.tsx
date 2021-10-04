import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Icon = styled(Svg, {
  width: '64px',
  height: '75px'
});

const Rect = styled('rect', {
  variants: {
    purpose: {
      doc: {
        width: '64px',
        height: '75px',
        fill: 'hsl($shade1400)'
      },
      clockin: {
        width: '56px',
        height: '$16',
        fill: 'hsl($shade1000)'
      },
      item: {
        width: '$16',
        height: '14px',
        fill: 'hsl($shade1000)'
      }
    }
  }
});

export default function IconMainMenu() {
  return(
    <Icon viewBox="0 0 64 75" xmlns="http://www.w3.org/2000/svg">
      <title>Layout of Main Menu</title>
      <Rect purpose="doc" rx="8"/>
      <Rect purpose="clockin" rx="2" x="4" y="19"/>
      <Rect purpose="item" rx="2" x="4" y="39"/>
      <Rect purpose="item" rx="2" x="4" y="56"/>
      <Rect purpose="item" rx="2" x="24" y="39"/>
      <Rect purpose="item" rx="2" x="24" y="56"/>
      <Rect purpose="item" rx="2" x="44" y="39"/>
    </Icon>
  );
}
