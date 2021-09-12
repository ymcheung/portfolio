import { styled } from 'stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  size: '$48'
});

const Background = styled('path', {
  fill: 'hsl($iconPieBackground)'
});

const Letter = styled('path', {
  fill: 'hsl($iconPieForeground)'
});

export default function IconPie() {
  return(
    <Icon viewBox="0 0 48 48" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Logo: Pie</title>
      <Background d="M0 14.4C0 9.35953 0 6.83929 0.980941 4.91409C1.8438 3.22063 3.22063 1.8438 4.91409 0.980941C6.83929 0 9.35953 0 14.4 0H33.6C38.6405 0 41.1607 0 43.0859 0.980941C44.7794 1.8438 46.1562 3.22063 47.0191 4.91409C48 6.83929 48 9.35953 48 14.4V33.6C48 38.6405 48 41.1607 47.0191 43.0859C46.1562 44.7794 44.7794 46.1562 43.0859 47.0191C41.1607 48 38.6405 48 33.6 48H14.4C9.35953 48 6.83929 48 4.91409 47.0191C3.22063 46.1562 1.8438 44.7794 0.980941 43.0859C0 41.1607 0 38.6405 0 33.6V14.4Z"/>
      <Letter d="M10.4693 39.3877C10.146 39.3877 9.89625 39.2848 9.71993 39.0791C9.573 38.844 9.52891 38.5795 9.58769 38.2857L15.6708 9.63327C15.7296 9.31001 15.8912 9.04552 16.1557 8.83982C16.4202 8.63411 16.6994 8.53125 16.9932 8.53125H28.7187C31.9806 8.53125 34.5961 9.20715 36.565 10.559C38.5633 11.9108 39.5625 13.865 39.5625 16.4217C39.5625 17.1564 39.4743 17.9204 39.298 18.7139C38.5633 22.0934 37.0793 24.5913 34.8459 26.2076C32.6418 27.8239 29.615 28.632 25.7653 28.632H19.8144L17.7867 38.2857C17.7279 38.6089 17.5663 38.8734 17.3018 39.0791C17.0373 39.2848 16.7581 39.3877 16.4643 39.3877H10.4693ZM26.0738 22.5489C27.3081 22.5489 28.3807 22.2109 29.2917 21.535C30.2321 20.8591 30.8492 19.8894 31.1431 18.6257C31.2313 18.1261 31.2753 17.6853 31.2753 17.3033C31.2753 16.4511 31.0256 15.8046 30.526 15.3637C30.0264 14.8936 29.1742 14.6585 27.9693 14.6585H22.6796L21.0046 22.5489H26.0738Z"/>
    </Icon>
  );
}
