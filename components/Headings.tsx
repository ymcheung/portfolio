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
        marginRight: '$8',
        fontSize: '$18',
        fontWeight: 800,
        fontStyle: 'italic'
      }
    },
    position: {
      homeSection: {
        color: '$laurel',
        fontSize: '$16',
        fontWeight: 800,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      },
      homeItem: {
        marginBottom: '$4px',
        color: '$shade0',
        fontSize: '$16',
        fontWeight: 700
      }
    }
  }
});
