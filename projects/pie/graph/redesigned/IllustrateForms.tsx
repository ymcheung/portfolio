import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';
import { Device } from './device';
import { Bar, TabIcon } from './tab';

const Icon = styled(Svg, {
  width: '108px',
  height: '192px'
});

const Empty = styled('path', {
  fill: 'hsl($monoGraphComponent)',
  fillRule: 'evenodd',
  clipRule: 'evenodd',

  variants: {
    display: {
      none: {
        display: 'none'
      }
    }
  }
});

const Rect = styled('rect', {
  fill: 'hsl($monoGraphComponent)',

  variants: {
    display: {
      none: {
        display: 'none'
      }
    },
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
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',

  variants: {
    display: {
      none: {
        display: 'none'
      }
    },
    purpose: {
      empty: {
        stroke: 'hsl($monoGraphComponent)'
      },
      action: {
        stroke: 'hsl($monoGraphIcon)'
      }
    }
  }
});

interface IllustrateProps {
  readonly confirms?: {}; 
  readonly empty?: {}; 
}

export default function IllustrateForms({ confirms, empty }: IllustrateProps) {
  return(
    <Icon viewBox="0 0 108 192" xmlns="http://www.w3.org/2000/svg">
      <Device rx="8" />
      <Bar d="M0 164H108V184C108 188.418 104.418 192 100 192H8C3.58172 192 0 188.418 0 184V164Z" />
      <TabIcon x="15" y="172" rx="2" />
      <TabIcon x="37" y="172" rx="2" />
      <TabIcon x="59" y="172" rx="2" />
      <TabIcon x="81" y="172" rx="2" />
      <Rect x="6" y="18" display={confirms} purpose="info" rx="2" />
      <Rect x="78" y="18" display={confirms} purpose="action" rx="2" />
      <Check display={confirms} purpose="action" d="M86 30.6667L88.6667 33.3333L94 28" />
      <Rect x="6" y="46" display={confirms} purpose="info" rx="2" />
      <Rect x="78" y="46" display={confirms} purpose="action" rx="2" />
      <Check display={confirms} purpose="action" d="M86 58.6667L88.6667 61.3333L94 56" />
      <Empty display={empty} d="M10 18H98C100.209 18 102 19.7909 102 22V38C102 40.2091 100.209 42 98 42H10C7.79086 42 6 40.2091 6 38V22C6 19.7909 7.79086 18 10 18ZM10 20C8.89543 20 8 20.8954 8 22V38C8 39.1046 8.89543 40 10 40H98C99.1046 40 100 39.1046 100 38V22C100 20.8954 99.1046 20 98 20H10Z" />
      <Check display={empty} purpose="empty" d="M13 30.6667L15.6667 33.3333L21 28" />
    </Icon>
  );
}
