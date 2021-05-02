import { styled } from '../stitches.config';

export const Heading = styled('h2', {
  marginTop: 0,
  fontFamily: '$default',

  variants: {
    nameTag: {
      index: {
        marginBottom: 0,
        color: '$shade0',
        fontSize: '2.8rem',
        fontWeight: 800,
        fontStyle: 'italic'
      },
      footer: {
        fontSize: '$14',
        fontWeight: 800,
        fontStyle: 'italic'
      }
    },
    position: {
      index: {
        color: '$laurel',
        fontSize: '$18',
        fontWeight: 800,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }
    }
  }
});
