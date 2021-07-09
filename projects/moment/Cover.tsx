import { styled } from '../../stitches.config';
import { Container, ListItem } from '../../components/layout';

const CoverFull = styled('header', {
  marginBottom: '$16',
  backgroundColor: 'hsl($mtMidnight100)'
});

const Song = styled(ListItem, {
  position: 'absolute',

  variants: {
    ithink: {
      tablet: {

      }
    },
    under: {
      mobile: {
        top: '144px'
      }
    },
    stayin: {
      mobile: {
        top: '128px',
        left: '192px'
      }
    },
    never: {
      tablet: {

      }
    },
    take: {
      tablet: {

      }
    },
    responsive: {
      none: {
        display: 'none'
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
        fontSize: '2.8rem'
      },
      2: {
        fontSize: '$24'
      },
      3: {
        fontSize: '$18'
      }
    }
  }
});

const Sing = styled('div', {
  color: 'hsl($shade1400)',
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

const Heard = styled('ul', {
  margin: 0,
  padding: 0
});

const HeardItem = styled(ListItem, {
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

export default function Cover() {
  return(
    <CoverFull>
      <Container as="ul" responsive={{ '@m768': 'max640' }} momentcover>
        <Song nomark>
          <SongTitle level={1}>
            I Think We&rsquo;re Alone Now
          </SongTitle>
          <Sing level={1}>Tiffiany</Sing>
          <Heard>
            <HeardItem emoji="tv" level={1} nomark>Umbrella Academy Season 1 (2019)</HeardItem>
            <HeardItem emoji="movie" level={1} nomark>Blinded by the Light (2019)</HeardItem>
            <HeardItem emoji="movie" level={1} nomark>Ted 2 (2015)</HeardItem>
            <HeardItem emoji="movie" level={1} nomark>Ted (2012)</HeardItem>
          </Heard>
        </Song>
        <Song nomark under={{ '@initial': 'mobile' }}>
          <SongTitle level={2}>
            Under Pressure
          </SongTitle>
          <Sing level={2}>Queen</Sing>
          <Heard>
            <HeardItem emoji="movie" level={2} nomark>Bohemian Rhapsody (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Sing (2016)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Happy Feet 2 (2011)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>It&rsquo;s Kind of a Funny Story (2010)</HeardItem>
          </Heard>
        </Song>
        <Song nomark stayin={{ '@initial': 'mobile' }}>
          <SongTitle level={3}>
            Stayin&rsquo; Alive
          </SongTitle>
          <Sing level={2}>The Bee Gees</Sing>
          <Heard>
            <HeardItem emoji="tv" level={2} nomark>Supernatural Season 14 (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Ready Player One (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>The Secret Life of Pets (2016)</HeardItem>
            <HeardItem emoji="tv" level={2} nomark>Glee Season 3 (2012)</HeardItem>
            <HeardItem emoji="tv" level={2} nomark>Sherlock Season 2 (2012)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Ted (2012)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Madagascar (2005)</HeardItem>
          </Heard>
        </Song>
        <Song nomark responsive={{ '@initial': 'none' }}>
          <SongTitle level={3}>
            Never Gonna Give You Up
          </SongTitle>
          <Sing level={2}>Rick Astley</Sing>
          <Heard>
            <HeardItem emoji="tv" level={2} nomark>Dark Season 2 (2019)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>Bumblebee (2018)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>The Disaster Artist (2017)</HeardItem>
            <HeardItem emoji="movie" level={2} nomark>The Lego Batman Movie (2017)</HeardItem>
          </Heard>
        </Song>
        <Song nomark responsive={{ '@initial': 'none' }}>
          <SongTitle level={3}>
            Take on Me
          </SongTitle>
          <Sing level={2}>A-Ha</Sing>
          <Heard>
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
