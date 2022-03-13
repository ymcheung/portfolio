import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';
import { Container } from './layout';
import { NavItemLink } from '@projects/Nav';
import IconArrow from '@elements/IconArrow';

const Navigation = styled('nav', {
  padding: '$12 0 $8',
  position: 'fixed',
  right: 0,
  left: 0,
  zIndex: 2,
  backgroundColor: 'hsla($shade1600, 0.84)',
  backdropFilter: 'blur(4px)',
  transition: 'top 0.6s ease-in-out',

  variants: {
    toggle: {
      floating: {
        top: 0
      },
      hidden: {
        top: '-100%'
      }
    }
  },
  defaultVariants: {
    toggle: 'hidden'
  }
});

IconArrow.toString = () => '.iconArrow';

const FloatingNavLink = styled(NavItemLink, {
  variants: {
    responsive: {
      desktop: {
        margin: '0 0 0 -120px'
      }
    }
  }
});

export default function FloatingNav() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { t } = useTranslation('nav');

  return(
    <Navigation toggle={scrollY === 0 ? 'hidden' : 'floating'}>
      <Container responsive={{ '@m768': 'max640' }}>
        <Link href="/" passHref>
          <FloatingNavLink purpose={{ '@mHover': 'home' }} responsive={{ '@m992': 'desktop' }}>
            <IconArrow /> &nbsp;{t('home')}
          </FloatingNavLink>
        </Link>
      </Container>
    </Navigation>
  );
}
