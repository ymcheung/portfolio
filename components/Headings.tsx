import { styled } from '../stitches.config';

export const Heading = styled('h2', {
  marginTop: 0,
  fontFamily: '$default',

  variants: {
    nameTag: {
      index: {
        marginBottom: 0,
        marginLeft: '-2px',
        color: '$shade0',
        fontSize: '2.8rem',
        fontWeight: 800,
        fontStyle: 'italic'
      },
      footer: {
        marginRight: '$8',
        fontSize: '$18',
        fontWeight: 700,
        fontStyle: 'italic'
      }
    },
    position: {
      homeSection: {
        margin: '0 0 $4',
        color: '$laurel',
        fontSize: '$18',
        fontWeight: 800,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      },
      homeItemName: {
        marginBottom: '$4',
        color: '$shade0',
        fontSize: '$18',
        fontWeight: 600,
        lineHeight: '24px'
      }
    }
  }
});

export const Verb = styled('span', {
  display: 'inline-block',

  variants: {
    item: {
      pie: {

      },
      moment: {

      },
      intersection: {

      },
      process: {

      }
    }
  }
});
