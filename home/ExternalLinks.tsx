import Link from 'next/link';
import { styled } from 'stitches.config';
import IconLinkedIn from '@home/icons/IconLinkedIn';
import IconGithub from '@home/icons/IconGithub';
import IconMedium from '@home/icons/IconMedium';
// import BannerLoveUI from '@home/icons/BannerLoveUI';
import { Container } from '@components/layout';

const IconLink = styled('a', {
  display: 'inline-block',
  marginRight: '12px',

  '&:first-of-type': {
    marginLeft: '-12px'
  },

  '&:last-of-type': {
    marginLeft: 0
  }
});

export default function ExternalLinks() {
  return(
    <Container as="aside" responsive={{'@m992': 'max960', '@m1200': 'max1168'}} space="beforeDivide">
      <Link href="https://www.linkedin.com/in/ymcheungtw" passHref>
        <IconLink data-splitbee-event="External Link: LinkedIn" target="_blank" rel="noopener">
          <IconLinkedIn />
        </IconLink>
      </Link>
      <Link href="https://intersection.tw" passHref>
        <IconLink data-splitbee-event="External Link: Intersection" target="_blank" rel="noopener">
          <IconMedium />
        </IconLink>
      </Link>
      <Link href="https://github.com/ymcheung" passHref>
        <IconLink data-splitbee-event="External Link: Github" target="_blank" rel="noopener">
          <IconGithub />
        </IconLink>
      </Link>
    </Container>
  );
}
