import Link from 'next/link';

import { styled } from '../stitches.config';
import IconArrow from '../elements/IconArrow';

import { Container } from '../components/layout';

const NavList = styled('ul', {
  display: 'grid',
  grid: `"next" auto
         "prev" auto
         "home" auto / auto`,
  rowGap: '$12',
  margin: 0,
  padding: 0,

  variants: {
    responsive: {
      desktop: {
        grid: '"home prev next" auto / 120px 1fr 1fr',
        rowGap: 'unset',
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
  minWidth: '60px',
  fontFamily: '$default',
  fontSize: '$14',
  lineHeight: '28px',
  textDecoration: 'none',

  variants: {
    scheme: {
      dark: {
        color: '$shade1200'
      },
      light: {
        color: '$shade300'
      }
    }
  }
});

interface NavProps {
  hasPrev?: string;
  prevSlug?: string;
  prevBg?: string;
  hasNext?: string;
  nextSlug?: string;
  nextBg?: string;
  scheme?: 'dark' | 'light';
}

function Nav({ hasPrev, prevSlug, prevBg, hasNext, nextSlug, nextBg, scheme }: NavProps) {
  return(
    <Container as="nav" responsive={{'@m768': 'max640'}} hassibling>
      <NavList responsive={{'@m992': 'desktop'}}>
        {hasPrev &&
          <NavItem position="prev">
            <Link href={`/${prevSlug}`} passHref>
              <NavItemLink scheme={scheme}>
                <IconArrow purpose="prev" gotoText={hasPrev} background={prevBg} />&nbsp;
                {hasPrev}
              </NavItemLink>
            </Link>
          </NavItem>
        }
        {hasNext &&
          <NavItem position="next">
            <Link href={`/${nextSlug}`} passHref>
              <NavItemLink scheme={scheme}>
                {hasNext}
                &nbsp;<IconArrow purpose="next" gotoText={hasNext} background={nextBg}  />
              </NavItemLink>
            </Link>
          </NavItem>
        }
        <NavItem position="home">
          <Link href="/" passHref>
            <NavItemLink scheme={scheme}>
              <IconArrow background={scheme} />&nbsp;
              Home
            </NavItemLink>
          </Link>
        </NavItem>
      </NavList>
    </Container>
  );
}

export default Nav;
