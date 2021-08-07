import Link from 'next/link';
import { styled } from 'stitches.config';
import IconLinkedIn from '@homeIcons/IconLinkedIn';
import IconMedium from '@homeIcons/IconMedium';
import IconLoveUI from '@homeIcons/IconLoveUI';
import { Container } from '../components/layout';

const IconLink = styled('a', {
  display: 'inline-block',
  marginRight: '12px',
  marginLeft: '-12px',

  '&:last-of-type': {
    marginLeft: 0
  }
});

function ExternalLinks() {
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
      <Link href="https://dev.ymcheung.tw" passHref>
        <IconLink data-splitbee-event="External Link: Love UI" target="_blank" rel="noopener">
          <IconLoveUI />
        </IconLink>
      </Link>
    </Container>
  );
}

export default ExternalLinks;
