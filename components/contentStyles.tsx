import { styled } from '../stitches.config';

export const ContentTitle = styled('h2', {
  color: '$shade1500',
  fontFamily: '$default',
  fontWeight: 600,

  variants: {
    purpose: {
      section: {
        margin: '0 0 $12',
        fontSize: '$20',
        lineHeight: '24px'
      },
      paragraph: {
        display: 'inline-block',
        margin: '0 0 $4',
        fontSize: '$16',
        lineHeight: '20px'
      }
    }
  }
});

export const Section = styled('section', {
  marginBottom: '$24'
});

export const Paragraph = styled('p', {
  margin: '0 0 $16',
  color: '$shade1200',
  fontFamily: '$default',
  fontSize: '$16',
  lineHeight: '24px',

  variants: {
    indent: {
      true: {
        textIndent: '36px'
      }
    },
    sectionEnd: {
      true: {
        margin: 0
      }
    }
  },

  '& .paragraph-link': {
    textDecoration: 'underline',
    color: '$shade1500',
  }
});
