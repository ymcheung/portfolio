import { styled } from 'stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  width: '48px',
  height: '52px'
});

const Background = styled('path', {
  fill: '#F04646'
});

const Arrows = styled('path', {
  fill: 'none',
  stroke: 'hsl($shade1600)',
  strokeWidth: '4px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
});

export default function IconAbTest() {
  return(
    <Icon viewBox="0 0 48 52" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Logo: A/B Test @iCook</title>
      <Background d="M0 16.4C0 11.3595 0 8.83929 0.980941 6.91409C1.8438 5.22063 3.22063 3.8438 4.91409 2.98094C6.83929 2 9.35953 2 14.4 2H33.6C38.6405 2 41.1607 2 43.0859 2.98094C44.7794 3.8438 46.1562 5.22063 47.0191 6.91409C48 8.83929 48 11.3595 48 16.4V35.6C48 40.6405 48 43.1607 47.0191 45.0859C46.1562 46.7794 44.7794 48.1562 43.0859 49.0191C41.1607 50 38.6405 50 33.6 50H14.4C9.35953 50 6.83929 50 4.91409 49.0191C3.22063 48.1562 1.8438 46.7794 0.980941 45.0859C0 43.1607 0 40.6405 0 35.6V16.4Z"/>
      <Arrows d="M42 34H33C24 34 24 14 24 14C24 14 24 34 15 34H6M42 34L38 30M42 34L38 38M6 34L10 30M6 34L10 38"/>
    </Icon>
  );
}
