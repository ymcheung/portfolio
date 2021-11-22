import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';
import { Device } from './device';
import { Bar, TabIcon } from './tab';

const Icon = styled(Svg, {
  width: '108px',
  height: '192px'
});

const Rect = styled('rect', {
  fill: 'hsl($monoGraphComponent)',

  variants: {
    purpose: {
      info: {
        width: '68px',
        height: '$24'
      },
      action: {
        size: '$24'
      }
    }
  }
});

const Check = styled('path', {
  fill: 'none',
  stroke: 'hsl($monoGraphIcon)',
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
});

export default function IllustrateForms() {
  return(
    <Icon viewBox="0 0 108 192" xmlns="http://www.w3.org/2000/svg">
      <Device rx="8" />
      <Bar d="M0 164H108V184C108 188.418 104.418 192 100 192H8C3.58172 192 0 188.418 0 184V164Z" />
      <TabIcon x="15" y="172" rx="2" />
      <TabIcon x="37" y="172" rx="2" />
      <TabIcon x="59" y="172" rx="2" />
      <TabIcon x="81" y="172" rx="2" />
      <Rect x="6" y="18" purpose="info" rx="2" />
      <Rect x="78" y="18" purpose="action" rx="2" />
      <Check d="M86 30.6667L88.6667 33.3333L94 28" />
      <Rect x="6" y="46"  purpose="info" rx="2" />
      <Rect x="78" y="46" purpose="action" rx="2" />
      <Check d="M86 58.6667L88.6667 61.3333L94 56" />
    </Icon>
  );
}
