import Link from 'next/link';

import { styled } from 'stitches.config';
import IconArrow from '@elements/IconArrow';

import { Container } from '@components/layout';

const NavList = styled('ul', {
  display: 'grid',
  grid: `"next" auto
         "prev" auto
         "home" auto / auto`,
  margin: '0 -16px 16px',
  padding: '0 $16',
  backdropFilter: 'blur(12px)',

  variants: {
    responsive: {
      desktop: {
        grid: '"home prev next" auto / 120px 1fr 1fr',
        rowGap: 'unset',
        margin: '0 0 16px -120px',
        padding: 0
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
        gridArea: 'prev',
        marginBottom: '$12'
      },
      next: {
        gridArea: 'next',
        marginBottom: '$12',
        textAlign: 'right'
      }
    }
  }
});

IconArrow.toString = () => '.iconArrow';

const NavItemLink = styled('a', {
  display: 'inline-block',
  minWidth: '60px',
  color: 'hsl($shade300)',
  fontFamily: '$default',
  fontSize: '$14',
  lineHeight: '28px',
  textDecoration: 'none',

  [`& ${IconArrow}`]: {
    transition: 'transform 0.2s $easeOut',
    willChange: 'transform',
  },

  '&:hover': {
    [`& ${IconArrow}`]: {
      transition: 'transform $easeIn'
    }
  },

  variants: {
    purpose: {
      prev: {
        '&:hover': {
          [`& ${IconArrow}`]: {
            transform: 'translateX(-4px)',
          }
        }
      },
      next: {
        '&:hover': {
          [`& ${IconArrow}`]: {
            transform: 'translateX(4px)',
          }
        }
      },
      home: {
        '&:hover': {
          [`& ${IconArrow}`]: {
            transform: 'translate(-3px, -5px)',
          }
        }
      }
    }
  }
});

interface NavProps {
  hasPrev?: string;
  prevSlug?: string;
  prevBg?: 'generic' | 'pie' | 'moment' | 'nuomi';
  hasNext?: string;
  nextSlug?: string;
  nextBg?: 'generic' | 'pie' | 'moment' | 'nuomi';
}

function Nav({ hasPrev, prevSlug, prevBg, hasNext, nextSlug, nextBg }: NavProps) {
  return(
    <Container as="nav" responsive={{'@m768': 'max640'}}>
      <NavList responsive={{'@m992': 'desktop'}}>
        {hasPrev &&
          <NavItem position="prev">
            <Link href={`/${prevSlug}`} passHref>
              <NavItemLink purpose={{ '@mHover': 'prev' }}>
                <IconArrow purpose="prev" gotoText={hasPrev} background={prevBg} />
                &nbsp;{hasPrev}
              </NavItemLink>
            </Link>
          </NavItem>
        }
        {hasNext &&
          <NavItem position="next">
            <Link href={`/${nextSlug}`} passHref>
              <NavItemLink purpose={{ '@mHover': 'next' }}>
                {hasNext}&nbsp;
                <IconArrow purpose="next" gotoText={hasNext} background={nextBg}  />
              </NavItemLink>
            </Link>
          </NavItem>
        }
        <NavItem position="home">
          <Link href="/" passHref>
            <NavItemLink purpose={{ '@mHover': 'home' }}>
              <IconArrow background="generic" />
              &nbsp;Home
            </NavItemLink>
          </Link>
        </NavItem>
      </NavList>
    </Container>
  );
}

export default Nav;
