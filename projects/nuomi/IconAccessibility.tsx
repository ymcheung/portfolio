import { styled } from '../../stitches.config';
import { Svg } from '../../elements/Svg';

const Icon = styled(Svg, {
  display: 'block',
  size: '$24'
});

const Slope = styled('path', {
  fill: '$shade600'
});

export default function IconAccessibility() {
  return(
    <Icon viewBox="0 0 24 24">
      <Slope d="M20 14V9.47703C20 8.76957 19.2855 8.28581 18.6286 8.54856L4.82119 14.0715C3.79889 14.4804 4.09153 16 5.19258 16H18C19.1046 16 20 15.1046 20 14Z" />
    </Icon>
  );
}
