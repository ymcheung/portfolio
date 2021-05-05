import { styled } from '../stitches.config';
// import { DarkModeProps } from './DarkModeProps';

const Medium = styled('svg', {
  width: '48px',
  height: '48px',
  verticalAlign: 'sub'
});

const Oval = styled('path', {
  fill: 'black'
});

// const Background = styled.path<DarkModeProps>`
//   fill: ${props => props.darkmode ? '#FDFDFF' : '#1A1918'};
// `;

// const Text = styled.path<DarkModeProps>`
//   fill: ${props => props.darkmode ? '#1A1918' : '#FDFDFF'};
// `;

function IconMedium() {
  return(
    <Medium viewBox="0 0 96 96" aria-labelledby="MediumLink">
      <title id="MediumLink">Medium Publication 連結</title>
      <Oval d="M52.0998 48.1741C52.0998 58.2111 44.0185 66.3476 34.0502 66.3476C24.0819 66.3476 16 58.2092 16 48.1741C16 38.139 24.0813 30 34.0502 30C44.0191 30 52.0998 38.1371 52.0998 48.1741Z" />
      <Oval d="M71.9009 48.1741C71.9009 57.6218 67.8602 65.2837 62.8758 65.2837C57.8913 65.2837 53.8507 57.6218 53.8507 48.1741C53.8507 38.7265 57.8907 31.0646 62.8752 31.0646C67.8596 31.0646 71.9003 38.7241 71.9003 48.1741" />
      <Oval d="M80 48.1741C80 56.6369 78.5791 63.5015 76.8258 63.5015C75.0726 63.5015 73.6523 56.6387 73.6523 48.1741C73.6523 39.7095 75.0732 32.8467 76.8258 32.8467C78.5785 32.8467 80 39.7089 80 48.1741Z" />
    </Medium>
  );
}

export default IconMedium;
