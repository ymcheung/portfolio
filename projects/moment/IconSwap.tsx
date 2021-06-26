import { styled } from '../../stitches.config';
import { Svg } from '../../elements/Svg';

const Icon = styled(Svg, {
  size: '28px'
});

const Doc = styled('rect', {
  width: '20px',
  height: '24px',
  fill: 'hsl($iterationIconDoc)'
});

const Block = styled('rect', {
  fill: 'hsl($iterationIconChild)'
});

const Arrow = styled('path', {
  stroke: 'hsl($iterationIconDoc)'
});

export default function IconSwap() {
  return(
    <Icon viewBox="0 0 28 28">
      <Doc x="4" y="2" rx="2"/>
      <Block x="6" y="4" width="16" height="9"/>
      <Block x="6" y="15" width="16" height="9"/>
      <Arrow d="M14 7V21M14 7L15.5 8.5M14 7L12.5 8.5M14 21L15.5 19.5M14 21L12.5 19.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
}
