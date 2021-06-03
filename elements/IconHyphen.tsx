import { styled } from '../stitches.config';
import { Svg } from './Svg';
interface IconProps {
  readonly showinmobile: {};
}

const Icon = styled(Svg, {
  size: '$24',

  variants: {
    showinmobile: {
      true: {
        display: 'none'
      }
    }
  }
});

const Path = styled('path', {
  stroke: 'hsl($activityHyphen)',
  strokeLinecap: 'round'
});

function IconHyphen({ showinmobile }: IconProps) {
  return(
    <Icon viewBox="0 0 24 24" role="img" showinmobile={showinmobile} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <Path d="M1 12H23" />
    </Icon>
  );
}

export default IconHyphen;
