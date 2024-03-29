import { styled } from 'stitches.config';
import { ListItem } from './layout';

export const ContentTitle = styled('h2', {
  fontFamily: '$default',
  fontWeight: 600,

  variants: {
    purpose: {
      section: {
        margin: '0 0 $16',
        fontSize: '$20',
        lineHeight: '24px'
      },
      paragraph: {
        margin: '0 0 $8',
        fontSize: '$18',
        lineHeight: '24px'
      },
      graph: {
        display: 'inline-block',
        margin: '0 0 6px',
        fontSize: '$14',
        lineHeight: '18px'
      },
      iconListItem: {
        margin: 0,
        fontSize: '$18',
        lineHeight: '28px'
      },
    },
    scheme: {
      default: {
        color: 'hsl($shade100)'
      },
      mono: {
        color: 'hsl($monoTitleLight)'
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

export const ContentTitlePrefix = styled('span', {
  display: 'inline-block',
  marginBottom: '$4',
  fontFamily: '$default',
  fontSize: '$16',

  variants: {
    scheme: {
      mono: {
        color: 'hsl($monoContentParagraph)'
      }
    }
  }
});

export const Section = styled('div', {
  variants: {
    has: {
      siblings: {
        marginBottom: '32px'
      },
      postmarks: {
        marginBottom: '48px'
      }
    },
    isgroupend: {
      true: {
        marginBottom: 0
      }
    }
  },
  defaultVariants: {
    has: 'siblings'
  }
});

export const Paragraph = styled('p', {
  margin: '0 0 $16',
  fontFamily: '$default',

  variants: {
    purpose: {
      default: {
        fontSize: '$18',
        lineHeight: '28px',
      },
      question: {
        fontSize: '$24',
        lineHeight: '36px',
      },
      affix: {
        fontSize: '$16',
        lineHeight: '20px'
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
    following: {
      true: {
        marginBottom: '$8'
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

  '& .paragraph-mono-link': {
    color: 'hsl($monoContentLink)'
  }
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

export const PostMarksHr = styled('hr', {
  margin: '0 auto $8 0',
  border: 0,
  borderBottomColor: 'hsl($shade1400)',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid'
});

export const ParagraphPostmark = styled('span', {
  display: 'inline-block',
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$14',

  '& .paragraph-link': {
    color: 'hsl($shade300)'
  }
});

export const ContentList = styled('ul', {
  display: 'grid',
  rowGap: '$8',
  margin: '0 0 $12',
  padding: '0 0 0 $18'
});

export const ContentListItem = styled(ListItem, {
  fontFamily: '$default',
  fontSize: '$18',
  lineHeight: '28px',

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
