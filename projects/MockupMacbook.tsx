/* eslint-disable jsx-a11y/alt-text */
import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Mockup = styled(Svg, {
  width: '752px',
  height: '410px'
});

const Part = styled('path', {
  variants: {
    screen: {
      duo: {
        fill: 'hsl($shade1500)',
        stroke: 'hsl($shade1200)',
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
        fill: 'hsl($mockupDesktopConcaveMono)'
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
  height: '425px'
});

interface MockupProps {
  readonly image: string;
  readonly theme: 'duo' | 'mono';
}

export default function MockupMacbook({ image, theme} : MockupProps ) {
  return(
    <Mockup viewBox="0 0 1000 546" xmlns="http://www.w3.org/2000/svg">
      <title>MacBook Mockup</title>
      <Part screen={theme} d="m78 8.75759v510.48441c0 3.737 3.0275 6.758 6.7677 6.758h838.4643c3.741 0 6.768-3.023 6.768-6.758v-510.48441c0-3.73685-3.028-6.75759-6.768-6.75759h-838.4643c-3.7409 0-6.7677 3.02302-6.7677 6.75759z"/>
      <Part keyboardside={theme} d="m4 534v-14c0-2.523 1.50908-4 4-4h984c2.488 0 4 1.47 4 4v14c0 12 0 12-32 12h-928c-32 0-32 0-32-12z"/>
      <Part concave={theme} d="m426 516h148c0 14-17.077 14-18.215 14-33.187 0-67.238 0-111.57 0-1.138 0-18.215 0-18.215-14z"/>
      <Part browsertab={theme} d="m100 42h32c8.176 0 8.099 0 8.017-11.9972-.016-2.2091 1.774-4.0028 3.983-4.0028h68c2.209 0 3.999 1.7937 3.983 4.0028-.082 11.9972-.159 11.9972 8.017 11.9972h676v18h-800z"/>
      <Image href={image} x="100" y="60"/>
    </Mockup>
  );
}
