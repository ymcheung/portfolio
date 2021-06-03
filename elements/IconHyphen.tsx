import { styled } from '../stitches.config';
import { Svg } from './Svg';
interface IconProps {
  readonly showInMobile: {};
}

const Icon = styled(Svg, {
  size: '$24',

  variants: {
    showInMobile: {
      true: {
        display: 'none'
      }
    }
  }
});

const Path = styled('path', {
  stroke: 'hsl($shade700)',
  strokeLinecap: 'round'
});

function IconHyphen({ showInMobile }: IconProps) {
  return(
    <Icon viewBox="0 0 24 24" role="img" showInMobile={showInMobile} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <Path d="M1 12H23" />
    </Icon>
  );
}

export default IconHyphen;
