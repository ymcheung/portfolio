import { styled } from 'stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  width: '48px',
  height: '52px'
});

const Background = styled('path', {
  fill: 'hsl($iconPieBackground)'
});

const Letter = styled('path', {
  fill: 'hsl($iconPieForeground)'
});

export default function IconPie() {
  return(
    <Icon viewBox="0 0 48 52" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Logo: Pie</title>
      <Background d="M0 16.4C0 11.3595 0 8.83929 0.980941 6.91409C1.8438 5.22063 3.22063 3.8438 4.91409 2.98094C6.83929 2 9.35953 2 14.4 2H33.6C38.6405 2 41.1607 2 43.0859 2.98094C44.7794 3.8438 46.1562 5.22063 47.0191 6.91409C48 8.83929 48 11.3595 48 16.4V35.6C48 40.6405 48 43.1607 47.0191 45.0859C46.1562 46.7794 44.7794 48.1562 43.0859 49.0191C41.1607 50 38.6405 50 33.6 50H14.4C9.35953 50 6.83929 50 4.91409 49.0191C3.22063 48.1562 1.8438 46.7794 0.980941 45.0859C0 43.1607 0 40.6405 0 35.6V16.4Z"/>
      <Letter d="M10.4693 41.3877C10.146 41.3877 9.89625 41.2848 9.71993 41.0791C9.573 40.844 9.52891 40.5795 9.58769 40.2857L15.6708 11.6333C15.7296 11.31 15.8912 11.0455 16.1557 10.8398C16.4202 10.6341 16.6994 10.5312 16.9932 10.5312H28.7187C31.9806 10.5312 34.5961 11.2072 36.565 12.559C38.5633 13.9108 39.5625 15.865 39.5625 18.4217C39.5625 19.1564 39.4743 19.9204 39.298 20.7139C38.5633 24.0934 37.0793 26.5913 34.8459 28.2076C32.6418 29.8239 29.615 30.632 25.7653 30.632H19.8144L17.7867 40.2857C17.7279 40.6089 17.5663 40.8734 17.3018 41.0791C17.0373 41.2848 16.7581 41.3877 16.4643 41.3877H10.4693ZM26.0738 24.5489C27.3081 24.5489 28.3807 24.2109 29.2917 23.535C30.2321 22.8591 30.8492 21.8894 31.1431 20.6257C31.2313 20.1261 31.2753 19.6853 31.2753 19.3033C31.2753 18.4511 31.0256 17.8046 30.526 17.3637C30.0264 16.8936 29.1742 16.6585 27.9693 16.6585H22.6796L21.0046 24.5489H26.0738Z"/>
    </Icon>
  );
}
