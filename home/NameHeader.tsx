import { styled } from '../stitches.config';
import { TITLE, AUTHOR, DESCRIPTION } from '../constant';

import { Container } from '../components/layout';
import { Heading } from '../components/headings';


const NameDescription = styled('span', {
  color: 'hsl($shade700)',
  fontFamily: '$default',
  fontSize: '$14'
});

export default function NameHeader() {
  return(
    <Container as="header" responsive={{'@m992': 'max960', '@m1200': 'max1168'}} className={null} hassibling>
      <Heading as="h1" nametag="home">{AUTHOR}</Heading>
      <NameDescription>{DESCRIPTION}</NameDescription>
    </Container>
  )
}
