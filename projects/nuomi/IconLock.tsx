import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Icon = styled(Svg, {
  display: 'block',
  size: '$24'
});

const Lock = styled('path', {
  fill: 'hsl($shade600)'
});

export default function IconLock() {
  return(
    <Icon vertical="sub" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <Lock d="M4 11H20V20.1667C20 20.6269 19.6418 21 19.2 21H4.8C4.35817 21 4 20.6269 4 20.1667V11Z"/>
      <Lock d="M8.29412 4C6.47483 4 5 5.47483 5 7.29412V12H7.47059V7.70588C7.47059 6.79624 8.208 6.05882 9.11765 6.05882H14.8824C15.792 6.05882 16.5294 6.79624 16.5294 7.70588V12H19V7.29412C19 5.47483 17.5252 4 15.7059 4H8.29412Z"/>
    </Icon>
  );
}
