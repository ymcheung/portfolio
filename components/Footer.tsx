import { styled } from '../stitches.config';
import { Container } from './Layout';
import { Heading } from './Headings';

import { AUTHOR } from '../constant';

const Separate = styled('hr', {
  width: '120px',
  margin: '0 auto $8 0',
  border: 0,
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  
  variants: {
    scheme: {
      dark: {
        borderBottomColor: '$shade300'
      },
      light: {
        borderBottomColor: '$shade1500'
      }
    }
  }
});

const NameTagDescription = styled('span', {
  color: '$shade800',
  fontFamily: '$default',
  fontSize: '$14'
});

interface FooterProps {
  readonly responsive: {};
  readonly scheme: 'dark' | 'light';
}

function Footer({ responsive, scheme }: FooterProps) {
  const Year = new Date().getFullYear();

  return(
    <Container as="footer" responsive={responsive} footerEnd>
      <Separate scheme={scheme} />
      <Heading as="strong" nameTag="footer" footerScheme={scheme}>{AUTHOR}</Heading>
      <NameTagDescription>Portfolio {Year}</NameTagDescription>
    </Container>
  );
}

export default Footer;
