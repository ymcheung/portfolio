import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Icon = styled(Svg, {
  size: '$28'
});

const Third = styled('rect', {
  width: '18px',
  height: '20px',
  fill: 'hsl($iterationIconDoc)'
});

const FirstTwo = styled('rect', {
  width: '19px',
  height: '21px',
  fill: 'hsl($iterationIconDoc)',
  stroke: 'hsl($themeMoment)'
});

export default function IconManually() {
  return(
    <Icon viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <Third x="8" y="1" rx="2"/>
      <FirstTwo x="4.5" y="3.5" rx="2.5"/>
      <FirstTwo x="1.5" y="6.5" rx="2.5"/>
    </Icon>
  );
}
