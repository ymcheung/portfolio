import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';
import { Bar, TabIcon } from './tab';
import { Indicator } from '@projects/pie/indicator';

const Icon = styled(Svg, {
  width: '108px',
  height: '192px',
  borderRadius: '8px'
});

const ClockingAction = styled('rect', {
  width: '40px',
  height: '$14',
  borderRadius: '4px'
});

export default function IllustrateClockings() {
  return(
    <Icon viewBox="0 0 108 192" xmlns="http://www.w3.org/2000/svg">
      <ClockingAction x="34" y="138" />
      <Bar d="M0 164H108V184C108 188.418 104.418 192 100 192H8C3.58172 192 0 188.418 0 184V164Z" />
      <TabIcon x="15" y="172" />
      <TabIcon x="37" y="172" />
      <TabIcon x="59" y="172" />
      <TabIcon x="81" y="172" />
    </Icon>
  );
}
