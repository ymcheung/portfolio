import { styled, keyframes } from '../../stitches.config';
import { Container, ListItem } from '../../components/layout';

const CoverFull = styled('header', {
  overflow: 'hidden',
  marginBottom: '$16',
  backgroundColor: 'hsl($mtMidnight100)'
});

const Song = styled(ListItem, {
  position: 'absolute',

  variants: {
    under: {
      mobile: {
        top: '128px'
      },
      tablet: {
        top: '24px',
        right: '4px'
      }
    },
    stayin: {
      mobile: {
        top: '112px',
        left: '208px'
      },
      tablet: {
        top: '132px',
        right: 0,
        left: 'unset'
      }
    },
    never: {
      tablet: {
        top: '124px',
        left: '36px'
      }
    },
    take: {
      tablet: {
        top: '64px',
        left: '280px'
      }
    },
    responsive: {
      none: {
        display: 'none'
      },
      tablet: {
        display: 'list-item'
      }
    }
  }
});

const SongTitle = styled('strong', {
  color: 'hsl($mtDawn)',
  fontFamily: '$inter',
  fontWeight: 500,

  variants: {
    level: {
      1: {
        fontSize: '$24'
      },
      2: {
        fontSize: '$20'
      },
      3: {
        fontSize: '$16'
      }
    }
  }
});

const Sing = styled('div', {
  color: 'hsl($mtCoverSing)',
  fontFamily: '$inter',
  '&::before': {
    content: '🤘 '
  },

  variants: {
    level: {
      1: {
        fontSize: '$16'
      },
      2: {
        fontSize: '1.2rem'
      }
    }
  }
});

const roll4and28 = keyframes({
  '0%': {
    transform: `translateY(0)`
  },
  '33%': {
    transform: `translateY(-${28}px)`
  },
  '67%': {
    transform: `translateY(-${28 * 2}px)`
  },
  '100%': {
    transform: `translateY(-${28 * 3}px)`
  }
});

const roll4and20 = keyframes({
  '0%': {
    transform: `translateY(0)`
  },
  '33%': {
    transform: `translateY(-${20}px)`
  },
  '67%': {
    transform: `translateY(-${20 * 2}px)`
  },
  '100%': {
    transform: `translateY(-${20 * 3}px)`
  }
});

const roll7and20 = keyframes({
  '0%': {
    transform: `translateY(0)`
  },
  '17%': {
    transform: `translateY(-${20}px)`
  },
  '33%': {
    transform: `translateY(-${20 * 2}px)`
  },
  '50%': {
    transform: `translateY(-${20 * 3}px)`
  },
  '67%': {
    transform: `translateY(-${20 * 4}px)`
  },
  '83%': {
    transform: `translateY(-${20 * 5}px)`
  },
  '100%': {
    transform: `translateY(-${20 * 6}px)`
  }
});

const HeardItem = styled(ListItem, {
  width: 'max-content',
  color: 'hsl($mtCoverHeard)',
  fontFamily: '$inter',

  variants: {
    emoji: {
      movie: {
        '&::before': {
          content: '🎬 '
        }
      },
      tv: {
        '&::before': {
          content: '📺 '
        }
      },
      clip: {
        '&::before': {
          content: '▶️ '
        }
      }
    },
    level: {
      1: {
        fontSize: '$16',
        lineHeight: '28px'
      },
      2: {
        fontSize: '1.2rem',
        lineHeight: '20px'
      }
    }
  }
});

const Heard = styled('ul', {
  overflow: 'hidden',
  margin: 0,
  padding: 0,

  variants: {
    level: {
      1: {
        height: '28px'
      },
      2: {
        height: '20px'
      }
    },
    animate: {
      ithink: {
        [`& ${HeardItem}`]: {
          animation: `${roll4and28} 8s alternate ease-in-out infinite`
        }
      },
      under: {
        [`& ${HeardItem}`]: {
          animation: `${roll4and20} 6s alternate ease-in-out infinite`
        }
      },
      stayin: {
        [`& ${HeardItem}`]: {
          animation: `${roll7and20} 12s alternate ease-in-out infinite`
        }
      },
      never: {
        [`& ${HeardItem}`]: {
          animation: `${roll4and20} 8s alternate ease-in-out infinite`
        }
      },
      take: {
        [`& ${HeardItem}`]: {
          animation: `${roll7and20} 14s alternate ease-in-out infinite`
        }
      }
    }
  }
});

export default function Cover() {
  return(
    <CoverFull>
      <Container as="ul" responsive={{ '@m768': 'max640' }} momentcover>
        <Song nomark>
          <SongTitle level={1}>
            I Think We&rsquo;re Alone Now
          </SongTitle>
          <Sing level={1}>Tiffiany</Sing>
          <Heard level={1} animate="ithink">
            <HeardItem emoji="tv" level={1} nomark>Umbrella Academy S1 (2019)</HeardItem>
            <HeardItem emoji="movie" level={1} nomark>Blinded by the Light (2019)</HeardItem>
            <HeardItem emoji="movie" level={1} nomark>Ted 2 (2015)</HeardItem>
            <HeardItem emoji="movie" level={1} nomark>Ted (2012)</HeardItem>
          </Heard>
        </Song>
        <Song nomark under={{ '@initial': 'mobile', '@m768': 'tablet' }}>
          <SongTitle level={2}>
            Under Pressure
          </SongTitle>
          <Sing level={2}>Queen</Sing>
          <Heard level={2} animate="under">
            <HeardItem emoji="movie" level={2} nomark>Bohemian Rhapsody (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Sing (2016)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Happy Feet 2 (2011)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>It&rsquo;s Kind of a Funny Story (2010)</HeardItem>
          </Heard>
        </Song>
        <Song nomark stayin={{ '@initial': 'mobile', '@m768': 'tablet' }}>
          <SongTitle level={3}>
            Stayin&rsquo; Alive
          </SongTitle>
          <Sing level={2}>The Bee Gees</Sing>
          <Heard level={2} animate="stayin">
            <HeardItem emoji="tv" level={2} nomark>Supernatural S14 (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Ready Player One (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>The Secret Life of Pets (2016)</HeardItem>
            <HeardItem emoji="tv" level={2} nomark>Glee S3 (2012)</HeardItem>
            <HeardItem emoji="tv" level={2} nomark>Sherlock S2 (2012)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Ted (2012)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Madagascar (2005)</HeardItem>
          </Heard>
        </Song>
        <Song nomark responsive={{ '@initial': 'none', '@m768': 'tablet' }} never={{ '@m768': 'tablet' }}>
          <SongTitle level={3}>
            Never Gonna Give You Up
          </SongTitle>
          <Sing level={2}>Rick Astley</Sing>
          <Heard level={2} animate="never">
            <HeardItem emoji="tv" level={2} nomark>Dark S2 (2019)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Bumblebee (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>The Disaster Artist (2017)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>The Lego Batman Movie (2017)</HeardItem>
          </Heard>
        </Song>
        <Song nomark responsive={{ '@initial': 'none', '@m768': 'tablet' }} take={{ '@m768': 'tablet' }}>
          <SongTitle level={2}>
            Take on Me
          </SongTitle>
          <Sing level={2}>A-Ha</Sing>
          <Heard level={2} animate="take">
            <HeardItem emoji="movie" level={2} nomark>Bumblebee (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Ready Player One (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Deadpool 2 (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>La La Land (2016)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Sing Street (2016)</HeardItem>
            <HeardItem emoji="tv" level={2} nomark>Family Guy: Breaking out is Hard to Do (2005)</HeardItem>
            <HeardItem emoji="tv" level={2} nomark>The Simpsons: Future-Drama  (2005)</HeardItem>
          </Heard>
        </Song>
      </Container>
    </CoverFull>
  )
}
