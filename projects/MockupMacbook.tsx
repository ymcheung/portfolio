/* eslint-disable jsx-a11y/alt-text */
import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Mockup = styled(Svg, {
  variants: {
    responsive: {
      tablet: {
        width: '720px',
        height: '393px'
      },
      desktop: {
        width: '1000px',
        height: '546px'
      }
    }
  }
});

const Part = styled('path', {
  variants: {
    screen: {
      duo: {
        fill: 'hsl($shade1500)',
        stroke: 'hsl($shade1400)',
        strokeWidth: '4px'
      },
      mono: {
        fill: 'hsl($mockupDesktopScreenMono)',
        stroke: 'hsl($mockupDesktopScreenBorderMono)',
        strokeWidth: '4px'
      }
    },
    keyboardside: {
      duo: {
        fill: 'hsl($shade1400)'
      },
      mono: {
        fill: 'hsl($mockupDesktopKeyboardSideMono)'
      }
    },
    concave: {
      duo: {
        fill: 'hsl($mockupDesktopConcaveDuo)'
      },
      mono: {
        fill: 'hsla($mockupDesktopConcaveMono, 0.5)'
      }
    },
    browsertab: {
      duo: {
        fill: 'hsla($shade1400, 0.5)'
      },
      mono: {
        fill: 'hsla($mockupDesktopBrowserTabMono, 0.5)'
      }
    }
  }
});

const Image = styled('image', {
  width: '800px',
  height: '432px'
});

interface MockupProps {
  readonly image: string;
  readonly theme: 'duo' | 'mono';
  readonly description: string;
}

export default function MockupMacbook({ image, theme, description } : MockupProps ) {
  return(
    <Mockup viewBox="0 0 1000 546" responsive={{ '@m768': 'tablet', '@m1200': 'desktop' }} xmlns="http://www.w3.org/2000/svg">
      <title>{description}</title>
      <Part screen={theme} d="M78 519.242V34C78 22.799 78 17.1984 80.1799 12.9202C82.0973 9.15695 85.1569 6.09734 88.9202 4.17987C93.1984 2 98.7989 2 110 2H898C909.201 2 914.802 2 919.08 4.17987C922.843 6.09734 925.903 9.15695 927.82 12.9202C930 17.1984 930 22.799 930 34V519.242C930 522.977 926.973 526 923.232 526H84.7677C81.0275 526 78 522.979 78 519.242Z"/>
      <Part keyboardside={theme} d="m4 534v-14c0-2.523 1.50908-4 4-4h984c2.488 0 4 1.47 4 4v14c0 12 0 12-32 12h-928c-32 0-32 0-32-12z"/>
      <Part concave={theme} d="m426 516h148c0 14-17.077 14-18.215 14-33.187 0-67.238 0-111.57 0-1.138 0-18.215 0-18.215-14z"/>
      <Part browsertab={theme} d="m100 42h32c8.176 0 8.099 0 8.017-11.9972-.016-2.2091 1.774-4.0028 3.983-4.0028h68c2.209 0 3.999 1.7937 3.983 4.0028-.082 11.9972-.159 11.9972 8.017 11.9972h676v18h-800z"/>
      <Image href={image} x="100" y="60" preserveAspectRatio="xMidYMin meet"/>
    </Mockup>
  );
}
