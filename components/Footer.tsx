import { styled } from '../stitches.config';
import { Container } from './layout';
import { Heading } from './headings';

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

const FooterLayout = styled('div', {
  variants: {
    inproject: {
      true: {
        marginLeft: '-120px'
      }
    },
  }
});

const NameTagDescription = styled('span', {
  color: '$shade800',
  fontFamily: '$default',
  fontSize: '$14'
});

interface FooterProps {
  readonly responsive: {};
  readonly inproject?: {};
  readonly scheme: 'dark' | 'light';
}

function Footer({ responsive, inproject, scheme }: FooterProps) {
  const Year = new Date().getFullYear();

  return(
    <Container as="footer" responsive={responsive} footerend>
      <FooterLayout inproject={inproject}>
        <Separate scheme={scheme} />
        <Heading as="strong" nametag="footer" footerscheme={scheme}>{AUTHOR}</Heading>
        <NameTagDescription>Portfolio {Year}</NameTagDescription>
      </FooterLayout>
    </Container>
  );
}

export default Footer;
