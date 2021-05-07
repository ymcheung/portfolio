import { styled } from '../stitches.config';
import { Container } from './Layout';
import { Heading } from './Headings';

import { AUTHOR } from '../constant';

const Separate = styled('hr', {
  width: '120px',
  margin: '0 auto $8 0',
  borderTop: 0,
  borderBottom: '1px solid $shade1500'
});

const NameTagDescription = styled('span', {
  color: '$shade800',
  fontFamily: '$default',
  fontSize: '$14'
});

export interface FooterProps {
  readonly atHome?: boolean;
  readonly atProject?: boolean;
}

function Footer({ atHome, atProject }: FooterProps) {
  const Year = new Date().getFullYear();

  return(
    <Container as="footer" atHome={atHome} atProject={atProject}>
      <Separate />
      <Heading as="strong" nameTag="footer">{AUTHOR}</Heading>
      <NameTagDescription>Portfolio {Year}</NameTagDescription>
    </Container>
  );
}

export default Footer;