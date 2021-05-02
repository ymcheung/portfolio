import { global } from '../stitches.config';

export const globalStyles = global({
  'html': {
    boxSizing: 'border-box',
    fontSize: '62.5%'
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },
  'body': {
    margin: 0,
    fontSize: '$2'
  }
});

// export const webfontOverpass = global({
//   '@font-face': [
//   {
//     fontFamily: 'Overpass',
//     src: 'url("/webfont/overpass/overpass-extralight.woff2") format(woff2), url("/webfont/overpass/overpass-extralight.woff") format(woff), url("/webfont/overpass/overpass-extralight.ttf") format(truetype)',
//     fontWeight: 300,
//     fontStyle: 'normal'
//   },
//   {
//     fontFamily: 'Overpass',
//     src: 'url("/webfont/overpass/overpass-light.woff2") format(woff2), url("/webfont/overpass/overpass-light.woff") format(woff), url("/webfont/overpass/overpass-light.ttf") format(truetype)',
//     fontWeight: 400,
//     fontStyle: 'normal'
//   },
//   {
//     fontFamily: 'Overpass',
//     src: 'url("/webfont/overpass/overpass-light-italic.woff2") format(woff2), url("/webfont/overpass/overpass-light-italic.woff") format(woff), url("/webfont/overpass/overpass-light-italic.ttf") format(truetype)',
//     fontWeight: 400,
//     fontStyle: 'italic'
//   },
//   {
//     fontFamily: 'Overpass',
//     src: 'url("/webfont/overpass/overpass-semibold.woff2") format(woff2), url("/webfont/overpass/overpass-semibold.woff") format(woff), url("/webfont/overpass/overpass-semibold.ttf") format(truetype)',
//     fontWeight: 600,
//     fontStyle: 'normal'
//   },
//   {
//     fontFamily: 'Overpass',
//     src: 'url("/webfont/overpass/overpass-bold-italic.woff2") format(woff2), url("/webfont/overpass/overpass-bold-italic.woff") format(woff), url("/webfont/overpass/overpass-bold-italic.ttf") format(truetype)',
//     fontWeight: 700,
//     fontStyle: 'italic'
//   },
//   {
//     fontFamily: 'Overpass',
//     src: 'url("/webfont/overpass/overpass-extrabold.woff2") format(woff2), url("/webfont/overpass/overpass-extrabold.woff") format(woff), url("/webfont/overpass/overpass-extrabold.ttf") format(truetype)',
//     fontWeight: 800,
//     fontStyle: 'normal'
//   },
//   {
//     fontFamily: 'Overpass',
//     src: 'url("/webfont/overpass/overpass-extrabold-italic.woff2") format(woff2), url("/webfont/overpass/overpass-extrabold-italic.woff") format(woff), url("/webfont/overpass/overpass-extrabold-italic.ttf") format(truetype)',
//     fontWeight: 800,
//     fontStyle: 'italic'
//   }]
// });
