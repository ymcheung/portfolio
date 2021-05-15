import { styled } from '../stitches.config';
import { Container } from './Layout';
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
    inProject: {
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
  readonly inProject?: {};
  readonly scheme: 'dark' | 'light';
}

function Footer({ responsive, inProject, scheme }: FooterProps) {
  const Year = new Date().getFullYear();

  return(
    <Container as="footer" responsive={responsive} footerEnd>
      <FooterLayout inProject={inProject}>
        <Separate scheme={scheme} />
        <Heading as="strong" nameTag="footer" footerScheme={scheme}>{AUTHOR}</Heading>
        <NameTagDescription>Portfolio {Year}</NameTagDescription>
      </FooterLayout>
    </Container>
  );
}

export default Footer;
