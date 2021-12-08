import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Icon = styled(Svg, {
  size: '$24'
});

const Line = styled('path', {
  variants: {
    shape: {
      calendar: {
        fill: 'hsl($shade800)',
        fillRule: 'evenodd',
        clipRule: 'evenodd'
      },
      check: {
        fill: 'none',
        stroke: 'hsl($shade800)',
        strokeWidth: '2px',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }
    }
  }
});

export default function IconTasks() {
  return(
    <Icon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Tasks</title>
      <Line shape="calendar" d="M8.44444 4C5.98985 4 4 5.98985 4 8.44444V15.5556C4 18.0102 5.98985 20 8.44444 20H15.5556C18.0102 20 20 18.0102 20 15.5556V8.44444C20 5.98985 18.0102 4 15.5556 4H8.44444ZM5.77778 8.44444C5.77778 6.97169 6.97169 5.77778 8.44444 5.77778H15.5556C17.0283 5.77778 18.2222 6.97169 18.2222 8.44444H5.77778ZM5.77778 10.2222V15.5556C5.77778 17.0283 6.97169 18.2222 8.44444 18.2222H15.5556C17.0283 18.2222 18.2222 17.0283 18.2222 15.5556V10.2222H5.77778Z"/>
      <Line shape="check" d="M9.5 14.5L11 16L14.5 13"/>
    </Icon>
  );
}
