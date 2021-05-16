import { styled } from '../stitches.config';
import { Svg } from './Svg';
// import { DarkModeProps } from './DarkModeProps';

const LinkedIn = styled(Svg, {
  size: '$48'
});

const Background = styled('path', {
  fill: '#1A1918'
});

const Text = styled('path', {
  fill: '#FDFDFF'
});

// const Background = styled.path<DarkModeProps>`
//   fill: ${props => props.darkmode ? '#FDFDFF' : '#1A1918'};
// `;

// const Text = styled.path<DarkModeProps>`
//   fill: ${props => props.darkmode ? '#1A1918' : '#FDFDFF'};
// `;

function IconLinkedIn() {
  return(
    <LinkedIn viewBox="0 0 96 96" aria-labelledby="linkedInLink">
      <title id="linkedInLink">LinkedIn 連結</title>
      <Background fillRule="evenodd" clipRule="evenodd" d="M68.4496 24H27.5424C25.5885 24 24 25.5503 24 27.4615V68.5385C24 70.4497 25.5885 72.0018 27.5424 72.0018H68.4496C70.4079 72.0018 72 70.4497 72 68.5385V27.4615C72 25.5503 70.4079 24 68.4496 24V24Z" />
      <Text d="M64.9046 64.9028H57.7879V53.7619C57.7879 51.1049 57.7408 47.6879 54.0882 47.6879C50.3832 47.6879 49.8179 50.584 49.8179 53.5717V64.9028H42.7012V41.9952H49.5299V45.1278H49.6276C50.5779 43.326 52.9006 41.4272 56.3639 41.4272C63.5739 41.4272 64.9046 46.1705 64.9046 52.3387V64.9028ZM34.6751 38.8653C32.3932 38.8653 30.5487 37.0155 30.5487 34.7381C30.5487 32.458 32.3932 30.6082 34.6751 30.6082C36.9507 30.6082 38.8006 32.458 38.8006 34.7381C38.8006 37.0155 36.9507 38.8653 34.6751 38.8653V38.8653Z" />
      <Text fillRule="evenodd" clipRule="evenodd" d="M31.1149 64.9029H38.237V41.9954H31.1149V64.9029Z" />
    </LinkedIn>
  );
}

export default IconLinkedIn;
