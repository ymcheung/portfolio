import { styled } from '../../stitches.config';
import { Svg } from '../../elements/Svg';

const Icon = styled(Svg, {
  size: '28px'
});

const Document = styled('rect', {
  width: '18px',
  height: '20px',
  fill: 'hsl($iterationIconDoc)',

  variants: {
    front: {
      true: {
        stroke: 'hsl($themeMoment)'
      }
    }
  }
});

const Nav = styled('rect', {
  width: '5px',
  height: '4px',
  fill: 'hsl($iterationIconChild)'
});

const Lyric = styled('rect', {
  width: '8px',
  height: '11px',
  fill: 'hsl($iterationIconChild)'
});

const Footer = styled('rect', {
  width: '14px',
  height: '4px',
  fill: 'hsl($iterationIconChild)'
});

export default function IconTemplate() {
  return(
    <Icon viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <Document x="6" y="2" rx="2" />
      <Document x="3" y="5" rx="2" front />
      <Nav x="5" y="7" />
      <Lyric x="11" y="7" />
      <Footer x="5" y="19" />
    </Icon>
  );
}
