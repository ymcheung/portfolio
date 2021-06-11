import { styled } from '../stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  width: '32px',
  height: '36px'
});

const Path = styled('path', {
  fill: 'hsl($shade300)'
});

export default function IconLight() {
  return(
    <Icon viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
      <Path d="m0 12h9.41176v3.9358h-5.47593v3.9359h5.47593v3.9358h-9.41176z"/>
      <Path d="m11.2941 12h9.4118v3.4225h-5.4759v.6845h5.4759v7.8716h-9.4118v-3.5936h5.476v-.6845h-5.476z"/>
      <Path d="m22.5883 12h9.4117v3.4225h-5.4759v.6845h5.4759v7.8716h-9.4117v-3.5936h5.4759v-.6845h-5.4759z"/>
    </Icon>
  );
}
