import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Icon = styled(Svg, {
  variants: {
    purpose: {
      finish: {
        size: '$16',
        marginTop: '32px',
      },
      yes: {
        display: 'block',
        size: '$20'
      }
    }
  }
});

const Path = styled('path', {
  fill: 'none',
  stroke: 'hsl($shade800)',
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
});

interface IconProps {
  readonly purpose: {};
}

export default function IconCheck({ purpose }: IconProps) {
  return(
    <Icon viewBox="0 0 16 16" purpose={purpose} xmlns="http://www.w3.org/2000/svg">
      <title>done</title>
      <Path d="m3 8 3 4.5 6-7.5"/>
    </Icon>
  );
}
