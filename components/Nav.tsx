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
  fontFamily: '$default',
  fontSize: '$14',
  lineHeight: '48px',
  
  variants: {
    home: {
      true: {

      }
    },
    project: {
      pie: {

      },
      moment: {

      }
    },
    activity: {
      intersection: {

      },
      process: {

      }
    }
  }
});

interface NavProps {
  hasPrev?: string;
  hasNext?: string;
  slug: string;
}

function Nav({ hasPrev, hasNext, slug }: NavProps) {
  return(
    <Container as="nav" responsive={{'@m768': 'max640'}} hasSibling>
      <NavList responsive={{'@m992': 'desktop'}}>
        {hasPrev &&
          <NavItem position="prev">
            <IconArrow purpose="prev" gotoText={hasPrev} />&nbsp;
            <Link href={`/${slug}`} passHref>
              <NavItemLink>
                {hasPrev}
              </NavItemLink>
            </Link>
          </NavItem>
        }
        {hasNext &&
          <NavItem position="next">
            <Link href={`/${slug}`} passHref>
              <NavItemLink>
                {hasNext}
              </NavItemLink>
            </Link>
            &nbsp;<IconArrow purpose="next" gotoText={hasNext} />
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
