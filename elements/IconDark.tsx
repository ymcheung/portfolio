import { styled } from '../stitches.config';
import { Svg } from './Svg';

const Dark = styled(Svg, {
  width: '28px',
  height: '28px'
});


const Background = styled('circle', {
  fill: 'hsl($shade1500)'
});

const Moon = styled('circle', {
  fill: 'hsl($shade300)'
});

function IconDark() {
  return(
    <Dark>
      <Background cx="14" cy="14" r="14" />
      <Moon d="M18 7.28988C15.1085 8.15043 13 10.829 13 14C13 17.171 15.1085 19.8496 18 20.7101C17.3663 20.8987 16.695 21 16 21C12.134 21 9 17.866 9 14C9 10.134 12.134 7 16 7C16.695 7 17.3663 7.10128 18 7.28988Z" />
    </Dark>
  );
}

export default IconDark;
