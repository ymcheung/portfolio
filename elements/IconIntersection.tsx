import { styled } from 'stitches.config';
import { Svg } from './Svg';

const Icon = styled(Svg, {
  size: '$36',
  borderRadius: '6px'
});

const Background = styled('rect', {
  size: '$96',
  fill: 'hsl($intersection1500)'
});

export default function IconIntersection() {
  return(
    <Icon viewBox="0 0 96 96" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Logo: Intersection</title>
      <Background x="0" y="0" />
      <path d="M17.9381 -9.55127L76.2455 48.7562L70.2281 54.7736L11.9206 -3.53385L17.9381 -9.55127Z" fill="white"/>
      <path opacity="0.36" d="M78.2274 -7.79651L84.2448 -1.77909L26.9838 55.4819L20.9664 49.4644L78.2274 -7.79651Z" fill="black"/>
      <path d="M77.5274 -8.49652L83.5448 -2.4791L26.2839 54.7818L20.2664 48.7644L77.5274 -8.49652Z" fill="#BDCCD4"/>
      <path opacity="0.36" d="M26.9799 43.455L82.8195 99.2947L76.8021 105.312L20.9624 49.4724L26.9799 43.455Z" fill="black"/>
      <path d="M26.2798 42.7549L82.1195 98.5946L76.1021 104.612L20.2624 48.7724L26.2798 42.7549Z" fill="#BDCCD4"/>
      <path opacity="0.36" d="M70.9379 43.4512L76.9553 49.4686L21.1156 105.308L15.0982 99.2908L70.9379 43.4512Z" fill="black"/>
      <path d="M70.2379 42.7513L76.2553 48.7687L20.4156 104.608L14.3982 98.5909L70.2379 42.7513Z" fill="white"/>
    </Icon>
  );
}
