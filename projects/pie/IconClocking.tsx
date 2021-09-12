import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Icon = styled(Svg, {
  size: '$24'
});

const Circle = styled('circle', {
  fill: 'hsl($shade800)'
});

const Pointer = styled('path', {
  fill: 'hsl($shade1400)'
});

export default function IconClocking() {
  return(
    <Icon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Clocking</title>
      <Circle cx="12" cy="12" r="7" />
      <Pointer d="M12 7C12.5523 7 13 7.44772 13 8V12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H12C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7Z"/>
    </Icon>
  );
}
