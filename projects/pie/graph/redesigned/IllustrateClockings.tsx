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
  height: '14px',
  fill: 'hsl($monoGraphComponent)'
});

export default function IllustrateClockings() {
  return(
    <Icon viewBox="0 0 108 192" xmlns="http://www.w3.org/2000/svg">
      <Device rx="8" />
      <ClockingAction x="34" y="138" rx="4" />
      <Bar d="M0 164H108V184C108 188.418 104.418 192 100 192H8C3.58172 192 0 188.418 0 184V164Z" />
      <TabIcon x="15" y="172" rx="2" />
      <TabIcon x="37" y="172" rx="2" />
      <TabIcon x="59" y="172" rx="2" />
      <TabIcon x="81" y="172" rx="2" />
    </Icon>
  );
}
