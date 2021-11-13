import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { styled } from 'stitches.config';
import { AUTHOR, DESCRIPTION } from 'constant';

import { Container, ListItem } from '@components/layout';
import { Heading } from '@components/headings';

import IconLangSwitch from '@elements/IconLangSwitch';
import IconFigma from './icons/IconFigma';
import IconCSS from './icons/IconCSS';
import IconReact from './icons/IconReact';
import IconA11y from './icons/IconA11y';

const DescriptionList = styled('ul', {
  display: 'grid',
  rowGap: '$8',
  position: 'relative',
  zIndex: 2,
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
  fontSize: '$18',
  lineHeight: '21px'
});

const DescriptionText = styled('span', {
  color: 'hsl($shade600)',
  fontSize: '$16',
  fontStyle: 'italic'
});

const ToolsList = styled('ul', {
  display: 'grid',
  grid: 'auto / repeat(4, auto)',
  columnGap: '32px',
  position: 'relative',
  zIndex: 2,
  padding: 0,

  variants: {
    responsive: {
      mobile: {
        justifyContent: 'center',
        margin: '0 0 $4',
      },
      tablet: {
        justifyContent: 'end',
        margin: 0,
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
          <DescriptionIcon><IconLangSwitch /></DescriptionIcon>
          <DescriptionText>Translate Articles and Websites</DescriptionText>
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
