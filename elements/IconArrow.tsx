import { styled } from '../stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  variants: {
    wh: {
      sq18: {
        size: '$18'
      },
      sq20: {
        size: '20px'
      }
    }
  }
});

const Circle = styled('circle', {
  variants: {
    background: {
      generic: {
        fill: 'hsl($navGenericIconBg)'
      },
      pie: {
        fill: 'hsl($navPieIconBg)'
      },
      moment: {
        fill: 'hsl($navMomentIconBg)'
      },
      nuomi: {
        fill: 'hsl($navNuomiIconBg)'
      }
    }
  }
});

const Arrow = styled('path', {
  fill: 'hsl($shade800)',
  transformOrigin: 'center',

  variants: {
    purpose: {
      external: {
        transform: 'rotate(45deg)'
      },
      next: {
        transform: 'rotate(90deg)'
      },
      internal: {
        transform: 'rotate(135deg)'
      },
      prev: {
        transform: 'rotate(270deg)'
      },
      home: {
        transform: 'rotate(315deg)'
      }
    }
  }
});

type IconArrowProps = {
  readonly wh: {};
  readonly purpose: {};
  readonly background: {};
  readonly gotoText: string;
} & typeof defaultProps;

const defaultProps = {
  wh: 'sq18',
  purpose: 'home',
  background: 'generic',
  gotoText: 'Home'
};

function IconArrow({ wh, purpose, background, gotoText }: IconArrowProps) {
  return(
    <Icon wh={wh} viewBox="0 0 18 18" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>{`Go to: ${gotoText}`}</title>
      <Circle cx="9" cy="9" r="9" background={background} />
      <Arrow purpose={purpose} d="M8.64645 2.64645C8.84171 2.45118 9.15829 2.45118 9.35355 2.64645L12.3536 5.64645C12.5488 5.84171 12.5488 6.15829 12.3536 6.35355C12.1583 6.54882 11.8417 6.54882 11.6464 6.35355L9.5 4.20711V15C9.5 15.2761 9.27614 15.5 9 15.5C8.72386 15.5 8.5 15.2761 8.5 15V4.20711L6.35355 6.35355C6.15829 6.54882 5.84171 6.54882 5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645L8.64645 2.64645Z" fillRule="evenodd" />
    </Icon>
  );
}

IconArrow.defaultProps = defaultProps;
export default IconArrow;
