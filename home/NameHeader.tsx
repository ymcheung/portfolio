import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { styled, keyframes } from '../stitches.config';
import { AUTHOR, DESCRIPTION } from '../constant';

import { Container, ListItem } from '../components/layout';
import { Heading } from '../components/headings';

import IconTaiwan from '../elements/IconTaiwan';

const Header = styled('header', {
  overflow: 'hidden',
  position: 'relative',
  marginBottom: '$12',
  borderBottom: '1px solid hsl($shade1200)',

  variants: {
    responsive: {
      mobile: {
        minHeight: '375px',
        paddingTop: '102px'
      },
      tablet: {
        minHeight: '225px',
        paddingTop: '48px'
      }
    }
  }
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

const DescriptionList = styled('ul', {
  display: 'grid',
  rowGap: '12px',
  position: 'relative',
  zIndex: 1,
  margin: 0,
  paddingLeft: '28px'
});

const DescriptionIcon = styled('span', {
  display: 'inline-block',
  width: '28px',
  marginLeft: '-28px',
  fontSize: '$18'
});

const DescriptionText = styled('span', {
  color: 'hsl($shade700)',
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
    <Header responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
      <Background scheme={scheme} />
      <Container responsive={{'@m992': 'max960', '@m1200': 'max1168'}}>
        <Heading as="h1" nametag="home">{AUTHOR}</Heading>
        <DescriptionList>
          <ListItem nomark>
            <DescriptionIcon>🤘</DescriptionIcon>
            <DescriptionText>{DESCRIPTION}</DescriptionText>
          </ListItem>
          <ListItem nomark>
            <DescriptionIcon><IconTaiwan /></DescriptionIcon>
            <DescriptionText>Taiwanese</DescriptionText>
          </ListItem>
        </DescriptionList>
      </Container>
    </Header>
  )
}
