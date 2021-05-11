import { styled } from '../stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  size: '$24'
});

const Path = styled('path', {
  stroke: '$shade700',
  strokeLinecap: 'round'
});

function IconHyphen() {
  return(
    <Icon viewBox="0 0 24 24" role="img" aria-hidden="true">
      <Path d="M1 12H23" />
    </Icon>
  );
}

export default IconHyphen;
