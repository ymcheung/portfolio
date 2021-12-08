import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Icon = styled(Svg, {
  size: '$24'
});

const Cross = styled('path', {
  fill: 'none',
  stroke: 'hsl($shade800)',
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
});

export default function IconVet() {
  return(
    <Icon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Vet</title>
      <Cross d="M14.5 5H9.5V9.5H5V15H9.5V19H14.5V15H19V9.5H14.5V5Z"/>
    </Icon>
  );
}
