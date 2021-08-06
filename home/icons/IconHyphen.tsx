import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';
interface IconProps {
  readonly hideintablet: {};
}

const Icon = styled(Svg, {
  size: '$24',

  variants: {
    hideintablet: {
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

export default function IconHyphen({ hideintablet }: IconProps) {
  return(
    <Icon viewBox="0 0 24 24" role="img" hideintablet={hideintablet} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <Path d="M1 12H23" />
    </Icon>
  );
}
