import { styled } from 'stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  size: '20px'
});

const Circle = styled('circle', {
  fill: 'hsla($shade1200, 0.75)'
});

const Bubble = styled('path', {
  fill: 'hsla($shade800, 0.75)'
});

function IconLangSwitch() {
  return(
    <Icon viewBox="0 0 20 20" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Switch Language</title>
      <Circle cx="10" cy="10" r="10"/>
      <Bubble d="m19.4912 13.1579h-6.5816c-1.2085 0-1.7372 1.526-.7877 2.2737.2374.1869.1052.5684-.197.5684h-.5549c-.5281 0-1.0357-.2046-1.41621-.5708l-.88348-.8503c-.94735-.9117-2.21147-1.421-3.52628-1.421-1.40474 0-2.54403-1.1388-2.54403-2.5435v-7.75583c1.80375-1.76825 4.27455-2.85857 7-2.85857 5.5228 0 10 4.47715 10 10 0 1.1035-.1787 2.1653-.5088 3.1579z"/>
    </Icon>
  );
}

export default IconLangSwitch;
