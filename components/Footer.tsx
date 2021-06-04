import { styled } from '../stitches.config';
import { Container } from './layout';
import { Heading } from './headings';

import { AUTHOR } from '../constant';

import ToggleScheme from './ToggleScheme';

const Separate = styled('hr', {
  width: '120px',
  margin: '0 auto $8 0',
  border: 0,
  borderBottomColor: 'hsl($footerSeparate)',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid'
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
  color: 'hsl($shade800)',
  fontFamily: '$default',
  fontSize: '$14'
});

interface FooterProps {
  readonly responsive: {};
  readonly inproject?: {};
  readonly scheme?: 'dark' | 'light';
}

function Footer({ responsive, inproject, scheme }: FooterProps) {
  const Year = new Date().getFullYear();

  return(
    <Container as="footer" responsive={responsive} footerend>
      <FooterLayout inproject={inproject}>
        <Separate />
        <Heading as="strong" nametag="footer" footerscheme={scheme}>{AUTHOR}</Heading>
        <NameTagDescription>Portfolio {Year}</NameTagDescription>
        {!inproject &&
          <ToggleScheme />
        }
      </FooterLayout>
    </Container>
  );
}

export default Footer;
