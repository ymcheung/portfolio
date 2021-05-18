import { styled } from '../stitches.config';
import { ListItem } from './layout';

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
  marginBottom: '$24',

  variants: {
    isgroupend: {
      true: {
        margin: 0
      }
    }
  }
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
    sectionend: {
      true: {
        margin: 0
      }
    }
  },

  '& .paragraph-link': {
    textDecoration: 'none',
    color: '$shade1500',
  }
});

export const ContentList = styled('ul', {
  margin: '0 0 $12',
  padding: '0 0 0 $18'
});

export const ContentListItem = styled(ListItem, {
  color: '$shade1200',
  fontFamily: '$default',
  fontSize: '$16',
  lineHeight: '24px'
});
