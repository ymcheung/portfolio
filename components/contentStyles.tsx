import { styled } from '../stitches.config';
import { ListItem } from './layout';

export const ContentTitle = styled('h2', {
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
        margin: '0 0 $8',
        fontSize: '$16',
        lineHeight: '20px'
      },
      graph: {
        display: 'inline-block',
        margin: '0 0 6px',
        fontSize: '$14',
        lineHeight: '18px'
      },
      iconListItem: {
        margin: 0,
        fontSize: '$16',
        lineHeight: '24px'
      },
    },
    scheme: {
      default: {
        color: 'hsl($shade100)'
      },
      mono: {
        color: 'hsl($monoContentTitle)'
      }
    },
    featurednumber: {
      normal: {
        margin: 0,
        display: 'inline-block',
        fontSize: '$18',
        fontWeight: 800,
        fontStyle: 'italic',
        lineHeight: '24px',
      },
      large: {
        display: 'inline-block',
        margin: 0,
        fontSize: '24px',
        fontWeight: 800,
        fontStyle: 'italic',
        lineHeight: '32px',
      }
    },
    nounderline: {
      true: {
        textDecoration: 'none'
      }
    }
  },
  defaultVariants: {
    scheme: 'default'
  }
});

export const Section = styled('div', {
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
  fontFamily: '$default',

  variants: {
    purpose: {
      default: {
        fontSize: '$16',
        lineHeight: '24px',
      },
      question: {
        fontSize: '$24',
        lineHeight: '32px',
      }
    },
    scheme: {
      default: {
        color: 'hsl($shade600)'
      },
      mono: {
        color: 'hsl($monoContentParagraph)'
      }
    },
    indent: {
      true: {
        textIndent: '36px'
      }
    },
    italic: {
      true: {
        fontStyle: 'italic'
      }
    },
    sectionend: {
      true: {
        margin: 0
      }
    }
  },
  defaultVariants: {
    purpose: 'default',
    scheme: 'default'
  },

  '& .paragraph-link': {
    color: 'hsl($shade300)'
  },
});

export const GraphCaption = styled('figcaption', {
  marginTop: '$4',
  fontFamily: '$default',
  fontSize: '$14',
  lineHeight: '18px',

  variants: {
    scheme: {
      default: {
        color: 'hsl($shade600)'
      },
      mono: {
        color: 'hsl($monoContentParagraph)'
      }
    }
  },
  defaultVariants: {
    scheme: 'default'
  }
});

export const ParagraphPostmark = styled('span', {
  display: 'inline-block',
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$14'
});

export const ContentList = styled('ul', {
  margin: '0 0 $12',
  padding: '0 0 0 $18'
});

export const ContentListItem = styled(ListItem, {
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$16',
  lineHeight: '24px'
});
