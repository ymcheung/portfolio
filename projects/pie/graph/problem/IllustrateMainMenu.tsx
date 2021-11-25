import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';
import { Indicator } from '@projects/pie/indicator';

const Icon = styled(Svg, {
  width: '64px',
  height: '75px'
});

const Rect = styled('rect', {
  variants: {
    purpose: {
      device: {
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

interface IconProps {
  readonly indicateClockIn?: {};
  readonly indicateForms?: {};
}

export default function IllustrateMainMenu({ indicateClockIn, indicateForms }: IconProps) {
  return(
    <Icon viewBox="0 0 64 75" xmlns="http://www.w3.org/2000/svg">
      <title>Layout of Main Menu</title>
      <Rect purpose="device" rx="8"/>
      <Rect purpose="clockin" rx="2" x="4" y="19"/>
      <Rect purpose="item" rx="2" x="4" y="39"/>
      <Rect purpose="item" rx="2" x="4" y="56"/>
      <Rect purpose="item" rx="2" x="24" y="39"/>
      <Rect purpose="item" rx="2" x="24" y="56"/>
      <Rect purpose="item" rx="2" x="44" y="39"/>
      <Indicator display={indicateClockIn} animation={{ '@mReduced': 'reduced' }} cx="32" cy="29" r="4"/>
      <Indicator display={indicateForms} animation={{ '@mReduced': 'reduced' }} cx="51" cy="47" r="4"/>
    </Icon>
  );
}
