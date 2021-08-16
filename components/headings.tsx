import { styled } from 'stitches.config';

export const Heading = styled('h2', {
  marginTop: 0,
  fontFamily: '$default',

  variants: {
    nametag: {
      home: {
        position: 'relative',
        zIndex: 1,
        marginBottom: 0,
        marginLeft: '-2px',
        color: 'hsl($shade0)',
        fontSize: '3.2rem',
        fontWeight: 800,
        fontStyle: 'italic'
      },
      footer: {
        marginRight: '$8',
        color: 'hsl($shade100)',
        fontSize: '$18',
        fontWeight: 700,
        fontStyle: 'italic'
      }
    },
    position: {
      homeSection: {
        margin: '0 0 $4',
        color: 'hsl($homeSectionTitle)',
        fontSize: '$18',
        fontWeight: 800,
        letterSpacing: '1px'
      },
      homeItemName: {
        display: 'inline-block',
        marginBottom: 0,
        color: 'hsl($shade0)',
        fontSize: '$18',
        fontWeight: 600,
      },
      itemName: {
        marginBottom: '$16',
        color: 'hsl($shade300)',
        fontSize: '$24',
        fontWeight: 600,
        lineHeight: '32px'
      }
    },
    isitalic: {
      true: {
        fontStyle: 'italic'
      }
    }
  }
});

export const Verb = styled('span', {
  display: 'inline-block',
  position: 'relative',
  lineHeight: '24px',
  transition: 'color 0.15s ease-out',

  variants: {
    foreng: {
      true: {
        marginRight: '3px',
      }
    }
  }
});
