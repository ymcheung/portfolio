import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { styled, keyframes } from '../stitches.config';
import { AUTHOR, DESCRIPTION } from '../constant';

import { Container, ListItem } from '../components/layout';
import { Heading } from '../components/headings';

import IconTaiwan from '../elements/IconTaiwan';
import IconFigma from '../elements/IconFigma';
import IconCSS from '../elements/IconCSS';
import IconReact from '../elements/IconReact';
import IconA11y from '../elements/IconA11y';

const DescriptionList = styled('ul', {
  display: 'grid',
  rowGap: '$12',
  position: 'relative',
  zIndex: 1,
  paddingLeft: '28px',

  variants: {
    responsive: {
      mobile: {
        margin: '0 0 56px'
      },
      tablet: {
        margin: '0 0 16px'
      }
    }
  }
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

const ToolsList = styled('ul', {
  display: 'grid',
  grid: 'auto / repeat(4, auto)',
  columnGap: '32px',
  position: 'relative',
  zIndex: 1,
  margin: 0,
  padding: 0,

  variants: {
    responsive: {
      mobile: {
        justifyContent: 'center',
      },
      tablet: {
        justifyContent: 'end',
      }
    }
  }
});

export default function NameHeader() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const scheme = theme === 'dark' ? 'dark' : 'light'; 

  return(
    <Container responsive={{'@m992': 'max960', '@m1200': 'max1168'}}>
      <Heading as="h1" nametag="home">{AUTHOR}</Heading>
      <DescriptionList responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
        <ListItem nomark>
          <DescriptionIcon>🤘</DescriptionIcon>
          <DescriptionText>{DESCRIPTION}</DescriptionText>
        </ListItem>
        <ListItem nomark>
          <DescriptionIcon><IconTaiwan /></DescriptionIcon>
          <DescriptionText>Taiwan</DescriptionText>
        </ListItem>
      </DescriptionList>
      <ToolsList responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
        <ListItem nomark>
          <IconFigma />
        </ListItem>
        <ListItem nomark>
          <IconCSS />
        </ListItem>
        <ListItem nomark>
          <IconReact />
        </ListItem>
        <ListItem nomark>
          <IconA11y />
        </ListItem>
      </ToolsList>
    </Container>
  )
}
