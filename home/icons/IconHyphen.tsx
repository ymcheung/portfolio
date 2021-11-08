import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

interface IconProps {
  readonly purpose: {};
  readonly hideintablet?: {};
}

const Icon = styled(Svg, {
  variants: {
    purpose: {
      activity: {
        size: '$24'
      },
      yes: {
        display: 'block',
        width: '$16',
        height: '$20'
      }
    },
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

export default function IconHyphen({ purpose, hideintablet }: IconProps) {
  return(
    <Icon viewBox="0 0 24 24" role="img" purpose={purpose} hideintablet={hideintablet} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <Path d="M1 12H23" />
    </Icon>
  );
}
