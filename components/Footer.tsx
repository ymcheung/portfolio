import { styled } from 'stitches.config';
import { Container } from './layout';
import { Heading } from './headings';

import { AUTHOR } from 'constant';

import ToggleScheme from './ToggleScheme';
import LangSwitch from '@components/LangSwitch';

const Separate = styled('hr', {
  width: '120px',
  margin: '0 auto $16 0',
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

const PrefGroup = styled('div', {
  variants: {
    responsive: {
      tablet: {
        display: 'inline-block',
        marginTop: '-$24',
        verticalAlign: 'bottom'
      }
    }
  }
});

const NameTagDescription = styled('span', {
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$14'
});

interface FooterProps {
  readonly responsive: {};
  readonly inproject?: {};
}

export default function Footer({ responsive, inproject }: FooterProps) {
  const Year = new Date().getFullYear();

  return(
    <Container as="footer" responsive={responsive} space="isFooterEnd">
      <FooterLayout inproject={inproject}>
        <Separate />
        <Heading as="strong" nametag="footer">{AUTHOR}</Heading>
        <NameTagDescription>Portfolio {Year}</NameTagDescription>
        <PrefGroup responsive={{ '@m768': 'tablet' }}>
          <ToggleScheme />
          <LangSwitch position="footer" responsive={{ '@initial': 'mobile', '@m768': 'tablet', '@mHover': 'hover' }} />
        </PrefGroup>
      </FooterLayout>
    </Container>
  );
}
