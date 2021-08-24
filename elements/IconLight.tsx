import { styled } from 'stitches.config';
import { Svg } from './Svg';

const Light = styled(Svg, {
  size: '28px'
});

const Background = styled('circle', {
  fill: 'hsl($schemeIconLightBg)'
});

const Sun = styled('circle', {
  fill: 'hsl($sun)'
});

function IconLight() {
  return(
    <Light viewBox="0 0 28 28" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Switch to Light Mode</title>
      <Background cx="14" cy="14" r="14" />
      <Sun cx="14" cy="14" r="6" />
    </Light>
  );
}

export default IconLight;
