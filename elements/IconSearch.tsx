import { styled } from '../stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  size: '$24'
});

const Handle = styled('path', {
  stroke: '$shade700',
  strokeWidth: '2px',
  strokeLinecap: 'round'
});

const Glass = styled('circle', {
  fill: 'transparent',
  stroke: '$shade700',
  strokeWidth: '2px'
});

function IconSearch() {
  return(
    <Icon>
      <Handle d="M17 18L21 22"/>
      <Glass cx="11" cy="11" r="8"/>
    </Icon>
  );
};

export default IconSearch;
