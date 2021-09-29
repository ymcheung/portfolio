import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Icon = styled(Svg, {
  width: '6px',
  height: '$16',
  marginTop: '32px'
});

const Path = styled('path', {
  fill: 'hsl($shade800)'
});

export default function IconArrowThen() {
  return(
    <Icon viewBox="0 0 6 16" xmlns="http://www.w3.org/2000/svg">
      <title>then</title>
      <Path d="m.646447 3.64645c-.195263.19526-.195263.51184 0 .7071l3.646443 3.64645-3.646443 3.6464c-.195263.1953-.195263.5119 0 .7072.195262.1952.511843.1952.707103 0l4-4.00005c.19527-.19526.19527-.51184 0-.7071l-4-4c-.19526-.19527-.511841-.19527-.707103 0z"/>
    </Icon>
  );
}
