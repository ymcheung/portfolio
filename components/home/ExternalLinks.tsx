import Link from 'next/link';
import { styled } from '../../stitches.config';
import IconLinkedIn from '../../elements/IconLinkedIn';
import IconMedium from '../../elements/IconMedium';
import { Container } from '../Layout';

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
    <Container as="aside" responsive={{'@initial': 'full', '@m992': 'max960', '@m1200': 'max1168'}}>
      <Link href="https://www.linkedin.com/in/ymcheungtw" passHref>
        <IconLink target="_blank" rel="noopener">
          <IconLinkedIn />
        </IconLink>
      </Link>
      <Link href="https://intersection.tw" passHref>
        <IconLink target="_blank" rel="noopener">
          <IconMedium />
        </IconLink>
      </Link>
    </Container>
  );
}

export default ExternalLinks;
