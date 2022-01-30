import { styled } from 'stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  width: '40px',
  height: '32px',
  marginBottom: '$8'
});

const Line = styled('path', {
  fill: 'none',
  stroke: 'hsl($shade600)',
  strokeWidth: '4px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
});

export default function IconBounce() {
  return(
    <Icon viewBox="0 0 40 32" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Bounce Rate Icon</title>
      <Line d="M2 30H38" />
      <Line d="M2 5L20 23L38 5M38 5V11M38 5H32" />
    </Icon>
  );
}
