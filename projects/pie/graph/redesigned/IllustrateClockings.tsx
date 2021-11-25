import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';
import { Device } from './device';
import { Bar, TabIcon } from './tab';
import { Indicator } from '@projects/pie/indicator';

const Icon = styled(Svg, {
  width: '108px',
  height: '192px'
});

const ClockingAction = styled('rect', {
  width: '40px',
  height: '16px',
  fill: 'hsl($monoGraphComponent)'
});

const ClockingIcon = styled('path', {
  fill: 'none',
  stroke: 'hsl($monoGraphIcon)',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',

  variants: {
    display: {
      none: {
        display: 'none'
      }
    }
  }
});

interface IllustrateProps {
  readonly clockin?: {}; 
  readonly clockout?: {};
  readonly indicateClockin?: {};
  readonly indicateToForms?: {};
}

export default function IllustrateClockings({ clockin, clockout, indicateClockin, indicateToForms }: IllustrateProps) {
  return(
    <Icon viewBox="0 0 108 192" xmlns="http://www.w3.org/2000/svg">
      <Device rx="8" />
      <ClockingAction x="34" y="132" rx="4" />
      <ClockingIcon display={clockin} d="M40 137H43V143H40" />
      <ClockingIcon display={clockin} d="M38 140H41M41 140L40 141M41 140L40 139" />
      <ClockingIcon display={clockout} d="M42 137H39V143H42" />
      <ClockingIcon display={clockout} d="M41 140H44M44 140L43 141M44 140L43 139" />
      <Bar d="M0 164H108V184C108 188.418 104.418 192 100 192H8C3.58172 192 0 188.418 0 184V164Z" />
      <TabIcon x="15" y="172" rx="2" />
      <TabIcon x="37" y="172" rx="2" />
      <TabIcon x="59" y="172" rx="2" />
      <TabIcon x="81" y="172" rx="2" />
      <Indicator display={indicateClockin} animation={{ '@mReduced': 'reduced' }} cx="54" cy="140" r="4"/>
      <Indicator display={indicateToForms} animation={{ '@mReduced': 'reduced' }} cx="43" cy="180" r="4"/>
    </Icon>
  );
}
