import { styled } from '../../stitches.config';
import { Svg } from '../../elements/Svg';

const Icon = styled(Svg, {
  size: '$24'
});

const Handle = styled('path', {
  stroke: 'hsl($shade700)',
  strokeWidth: '2px',
  strokeLinecap: 'round'
});

const Glass = styled('circle', {
  fill: 'transparent',
  stroke: 'hsl($shade700)',
  strokeWidth: '2px'
});

export default function IconSearch() {
  return(
    <Icon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <Handle d="M17 18L21 22"/>
      <Glass cx="11" cy="11" r="8"/>
    </Icon>
  );
};
