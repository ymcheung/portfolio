import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';
import { Indicator } from './indicator';

const Icon = styled(Svg, {
  width: '64px',
  height: '75px'
});

const Rect = styled('rect', {
  variants: {
    display: {
      none: {
        display: 'none'
      }
    },
    purpose: {
      doc: {
        width: '64px',
        height: '75px',
        fill: 'hsl($shade1400)'
      },
      clockInCta: {
        width: '56px',
        height: '10px',
        fill: 'hsl($shade1000)'
      },
      confirmItem: {
        width: '56px',
        height: '18px',
        fill: 'hsl($shade1000)'
      }
    }
  }
});

const Arrow = styled('path', {
  fill: 'none',
  stroke: 'hsl($shade1000)',
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

interface IconProps {
  readonly clockInCta?: {};
  readonly confirmItem?: {};
  readonly indicateGoingBack?: {};
  readonly indicateClockIn?: {};
  readonly indicateConfirm?: {};
}

export default function IconFunctions({ clockInCta, confirmItem, indicateGoingBack, indicateClockIn, indicateConfirm }: IconProps) {
  return(
    <Icon viewBox="0 0 64 75" xmlns="http://www.w3.org/2000/svg">
      <title>Layout of Clock-In and Forms Screens</title>
      <Rect purpose="doc" rx="8"/>
      <Arrow d="m8 7-4 4 4 4"/>
      <Rect purpose="clockInCta" display={clockInCta} x="4" y="59" rx="2"/>
      <Rect purpose="confirmItem" display={confirmItem} x="4" y="20" rx="2"/>
      <Indicator display={indicateGoingBack} animation={{ '@mReduced': 'reduced' }} cx="6" cy="11" r="4"/>
      <Indicator display={indicateConfirm} animation={{ '@mReduced': 'reduced' }} cx="32" cy="30" r="4"/>
      <Indicator display={indicateClockIn} animation={{ '@mReduced': 'reduced' }} cx="32" cy="65" r="4"/>
    </Icon>
  );
}
