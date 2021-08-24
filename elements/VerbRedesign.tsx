import { styled } from 'stitches.config';
import { Svg } from './Svg';

const Verb = styled(Svg, {
  width: '76px',
  height: '4px',
  position: 'absolute',
  right: 0,
  bottom: '-2px',
  left: 0,
  zIndex: '-1'
});

const Line = styled('path', {
  stroke: 'hsl($shade1400)',
  strokeWidth: '4px',
  strokeLinecap: 'round'
});

export default function VerbRedesign() {
  return(
    <Verb viewBox="0 0 76 4" role="img" xmlns="http://www.w3.org/2000/svg">
      <Line d="M2 2H74"/>
    </Verb>
  );
}
