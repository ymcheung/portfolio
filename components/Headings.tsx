import { styled } from '../stitches.config';

export const Heading = styled('h2', {
  marginTop: 0,
  fontFamily: '$default',

  variants: {
    nameTag: {
      index: {
        color: '$shade0',
        fontSize: '2.8rem',
        fontStyle: 'italic'
      },
      footer: {
        fontSize: '$18',
        fontStyle: 'italic'
      }
    }
  }
});
