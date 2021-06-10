import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { styled, keyframes } from '../stitches.config';
import { AUTHOR, DESCRIPTION } from '../constant';

import { Container } from '../components/layout';
import { Heading } from '../components/headings';

const Header = styled('header', {
  minHeight: '375px',
  overflow: 'hidden',
  position: 'relative',
  paddingTop: '102px',
  borderBottom: '1px solid hsl($shade1200)'
});

const diagonTransition = keyframes({
 '0%': {
    backgroundPosition: '0 0'
  },
  '100%': {
    backgroundPosition: '375px, 375px'
  }
});

const Background = styled('div', {
  fullAbsolute: '',
  zIndex: 0,
  backgroundSize: '75px',
  animation: `${diagonTransition} 60s linear infinite`,

  variants: {
    scheme: {
      dark: {
        backgroundImage: `url('/home/grid_dark.svg')`
      },
      light: {
        backgroundImage: `url('/home/grid.svg')`
      }
    }
  }
});

const NameDescription = styled('span', {
  color: 'hsl($shade700)',
  fontFamily: '$default',
  fontSize: '$18',
  fontStyle: 'italic'
});

export default function NameHeader() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const scheme = theme === 'dark' ? 'dark' : 'light'; 

  return(
    <Header>
      <Background scheme={scheme} />
      <Container responsive={{'@m992': 'max960', '@m1200': 'max1168'}}>
        <Heading as="h1" nametag="home">{AUTHOR}</Heading>
        <NameDescription>{DESCRIPTION}</NameDescription>
      </Container>
    </Header>
  )
}
