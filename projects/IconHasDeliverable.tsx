import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Icon = styled(Svg, {
  size: '20px'
});

const Circle = styled('circle', {
  variants: {
    project: {
      pie: {
        fill: 'hsla($pie700, 0.5)'
      }
    }
  }
});

interface IconProps {
  readonly project: {};
}

export default function IconHasDeliverable({ project }: IconProps) {
  return(
    <Icon viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Deliverables are Ready</title>
      <Circle cx="6" cy="13" r="6" project={project} />
    </Icon>
  );
}
