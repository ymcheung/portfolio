import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Icon = styled(Svg, {
  size: '20px'
});

const Circle = styled('circle', {
  fill: 'none',
  stroke: 'hsl($shade1200)',
  strokeWidth: '2px',
  strokeOpacity: 0.48
});

export default function IconNotReady() {
  return(
    <Icon viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Deliverables are not Ready</title>
      <Circle cx="6" cy="13" r="5"/>
    </Icon>
  );
}
