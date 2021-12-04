import { useEffect, useState } from 'react';

import { styled } from 'stitches.config';
import { AUTHOR, DESCRIPTION } from 'constant';

import { Container, ListItem } from '@components/layout';
import { Heading } from '@components/headings';

import IconFigma from './icons/IconFigma';
import IconCSS from './icons/IconCSS';
import IconReact from './icons/IconReact';
import IconA11y from './icons/IconA11y';

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
        margin: '0 0 $4'
      },
      tablet: {
        justifyContent: 'end',
        margin: 0
      }
    }
  }
});

export default function NameHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return(
    <Container responsive={{'@m992': 'max960', '@m1200': 'max1168'}}>
      <Heading as="strong" nametag="home">{AUTHOR}</Heading>
      <Heading as="h1" position="homeManifesto">{DESCRIPTION}</Heading>
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
