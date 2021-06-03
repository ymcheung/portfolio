import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { styled } from '../stitches.config';
import { Container } from './layout';
import { Heading } from './headings';

import { AUTHOR } from '../constant';

import IconDark from '../elements/IconDark';
import IconLight from '../elements/IconLight';

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

const ToggleDark = styled('button', {
  display: 'inline-block',
  width: '48px',
  height: '48px',
  overflow: 'hidden',
  position: 'relative',
  margin: '-32px 0 0 2px',
  padding: '14px 0 6px',
  backgroundColor: 'transparent',
  border: 0,
  verticalAlign: 'sub',
  cursor: 'pointer'
});

interface FooterProps {
  readonly responsive: {};
  readonly inproject?: {};
  readonly scheme?: 'dark' | 'light';
}

function Footer({ responsive, inproject, scheme }: FooterProps) {
  const Year = new Date().getFullYear();

  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  const isDarkTheme = resolvedTheme === 'dark';
  const toogleSchemeMessage = isDarkTheme ? '亮色' : '暗色';

  return(
    <Container as="footer" responsive={responsive} footerend>
      <FooterLayout inproject={inproject}>
        <Separate />
        <Heading as="strong" nametag="footer" footerscheme={scheme}>{AUTHOR}</Heading>
        <NameTagDescription>Portfolio {Year}</NameTagDescription>
        {!inproject &&
          <ToggleDark type="button" onClick={toggleTheme} aria-label={`切換 Scheme：${toogleSchemeMessage}`} data-splitbee-event={`切換 Scheme：${toogleSchemeMessage}`}>
            {!isDarkTheme &&
              <IconDark />
            }
            {isDarkTheme &&
              <IconLight />
            }
          </ToggleDark>
        }
      </FooterLayout>
    </Container>
  );
}

export default Footer;
