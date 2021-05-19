import Link from 'next/link';

import { styled } from '../stitches.config';
import IconArrow from '../elements/IconArrow';

import { Container } from './layout';

const NavList = styled('ul', {
  display: 'grid',
  grid: `"next" auto
         "prev" auto
         "home" auto / auto`,
  margin: 0,
  padding: 0,

  variants: {
    responsive: {
      desktop: {
        grid: '"home prev next" auto / 120px 1fr 1fr',
        marginLeft: '-120px'
      }
    }
  }
});

const NavItem = styled('li', {
  listStyle: 'none',

  variants: {
    position: {
      home: {
        gridArea: 'home'
      },
      prev: {
        gridArea: 'prev'
      },
      next: {
        gridArea: 'next',
        textAlign: 'right'
      }
    }
  }
});

const NavItemLink = styled('a', {
  display: 'inline-block',
  minWidth: '48px',
  color: '$shade1200',
  fontFamily: '$default',
  fontSize: '$14',
  lineHeight: '48px',
  textDecoration: 'none'
});

interface NavProps {
  hasPrev?: string;
  prevSlug?: string;
  prevBg?: string;
  hasNext?: string;
  nextSlug?: string;
  nextBg?: string;
}

function Nav({ hasPrev, prevSlug, prevBg, hasNext, nextSlug, nextBg }: NavProps) {
  return(
    <Container as="nav" responsive={{'@m768': 'max640'}} hasSibling>
      <NavList responsive={{'@m992': 'desktop'}}>
        {hasPrev &&
          <NavItem position="prev">
            <IconArrow purpose="prev" gotoText={hasPrev} background={prevBg} />&nbsp;
            <Link href={`/${prevSlug}`} passHref>
              <NavItemLink>
                {hasPrev}
              </NavItemLink>
            </Link>
          </NavItem>
        }
        {hasNext &&
          <NavItem position="next">
            <Link href={`/${nextSlug}`} passHref>
              <NavItemLink>
                {hasNext}
              </NavItemLink>
            </Link>
            &nbsp;<IconArrow purpose="next" gotoText={hasNext} background={nextBg}  />
          </NavItem>
        }
        <NavItem>
          <IconArrow />&nbsp;
          <Link href="/" passHref>
            <NavItemLink>
              Home
            </NavItemLink>
          </Link>
        </NavItem>
      </NavList>
    </Container>
  );
}

export default Nav;