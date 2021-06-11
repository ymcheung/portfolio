import { styled } from '../stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  width: '37px',
  height: '36px'
});

const Path = styled('path', {
  fill: 'hsl($shade300)'
});

export default function IconFigma() {
  return(
    <Icon viewBox="0 0 37 36" xmlns="http://www.w3.org/2000/svg">
      <Path d="m12.15 25h-4.48196v-1.71h1.188l-.594-1.602h-4.374l-.63 1.602h1.314v1.71h-4.427997v-1.71h1.079997l3.528-8.28h-1.71v-1.71h3.762l4.21196 9.99h1.134zm-4.42796-4.77-1.53-4.068h-.108l-1.62 4.068z"/>
      <Path d="m18.9158 25h-5.976v-1.71h2.052v-5.958h-2.052v-1.71h4.05v7.668h1.926z"/>
      <Path d="m26.0701 25h-5.976v-1.71h2.052v-5.958h-2.052v-1.71h4.05v7.668h1.926z"/>
      <Path d="m37.0376 15.01h-1.062l-3.492 5.454v2.826h1.962v1.71h-5.832v-1.71h1.872v-2.844l-3.618-5.436h-1.08v-1.71h4.626v1.71h-1.224l2.34 3.672h.108l2.286-3.672h-1.296v-1.71h4.41z"/>
    </Icon>
  );
}
