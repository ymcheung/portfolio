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
      cta: {
        width: '56px',
        height: '10px',
        fill: 'hsl($shade1000)'
      }
    }
  }
});

const Arrow = styled('path', {
  fill: 'none',
  stroke: 'hsl($shade1000)',
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export default function IconClockIn() {
  return(
    <Icon viewBox="0 0 64 75" xmlns="http://www.w3.org/2000/svg">
      <title>Layout of Clock-In Screen</title>
      <Rect purpose="doc" rx="8"/>
      <Arrow d="m8 7-4 4 4 4"/>
      <Rect purpose="cta" rx="2" x="4" y="59"/>
    </Icon>
  );
}
