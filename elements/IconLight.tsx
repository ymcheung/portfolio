import { styled } from '../stitches.config';
import { Svg } from './Svg';

const Light = styled(Svg, {
  width: '28px',
  height: '28px'
});

const Background = styled('circle', {
  fill: 'hsl($shade300)'
});

const Sun = styled('circle', {
  fill: 'hsl($sun)'
});

function IconLight() {
  return(
    <Light>
      <Background cx="14" cy="14" r="14" />
      <Sun cx="14" cy="14" r="6" />
    </Light>
  );
}

export default IconLight;
