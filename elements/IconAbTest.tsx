import { styled } from 'stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  size: '$36'
});

const Background = styled('path', {
  fill: '#F04646'
});

const Arrows = styled('path', {
  fill: 'none',
  stroke: 'hsl($shade1600)',
  strokeWidth: '3px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
});

export default function IconAbTest() {
  return(
    <Icon viewBox="0 0 36 36" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Logo: A/B Test @iCook</title>
      <Background d="M0 18C0 12.4087 0 9.61305 0.913445 7.4078C2.13137 4.46746 4.46746 2.13137 7.4078 0.913445C9.61305 0 12.4087 0 18 0V0C23.5913 0 26.3869 0 28.5922 0.913445C31.5325 2.13137 33.8686 4.46746 35.0866 7.4078C36 9.61305 36 12.4087 36 18V18C36 23.5913 36 26.3869 35.0866 28.5922C33.8686 31.5325 31.5325 33.8686 28.5922 35.0866C26.3869 36 23.5913 36 18 36V36C12.4087 36 9.61305 36 7.4078 35.0866C4.46746 33.8686 2.13137 31.5325 0.913445 28.5922C0 26.3869 0 23.5913 0 18V18Z"/>
      <Arrows d="M30 23.3333H24C18 23.3333 18 10 18 10C18 10 18 23.3333 12 23.3333H6M30 23.3333L27.3333 20.6667M30 23.3333L27.3333 26M6 23.3333L8.66667 20.6667M6 23.3333L8.66667 26"/>
    </Icon>
  );
}
