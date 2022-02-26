import { styled } from 'stitches.config';

export const HeadingLayout = styled('div', {
  display: 'grid',
  margin: '0 auto $24',

  variants: {
    responsive: {
      mobile: {
        rowGap: '$4',
        paddingX: '$8'
      },
      tablet: {
        maxWidth: '640px',
        columnGap: '$16',
        paddingX: '$16',
        alignItems: 'center'
      }
    },
    sibling: {
      cover: {
        margin: '0 auto $24'
      },
      none: {
        margin: '0 auto'
      }
    },
    iconm: {
      mobile: {
        grid: `36px
               auto / 100%`
      },
      tablet: {
        grid: 'auto / 36px 1fr'
      }
    },
    iconl: {
      mobile: {
        grid: `52px
               auto / 100%`
      },
      tablet: {
        grid: 'auto / 52px 1fr'
      }
    }
  }
});

export const Heading = styled('h2', {
  marginTop: 0,
  fontFamily: '$default',

  variants: {
    nametag: {
      home: {
        display: 'inline-block',
        position: 'relative',
        zIndex: 2,
        marginBottom: '32px',
        marginLeft: '-2px',
        color: 'hsl($shade0)',
        fontSize: '2rem',
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
      homeManifesto: {
        maxWidth: '600px',
        position: 'relative',
        zIndex: 2,
        margin: '0 0 $12',
        color: 'hsl($shade600)',
        fontSize: '2.8rem',
        fontWeight: 400,
        fontStyle: 'italic'
      },
      homeSection: {
        margin: '0 0 $12',
        color: 'hsl($homeSectionTitle)',
        fontSize: '$18',
        fontWeight: 800,
        letterSpacing: '1px'
      },
      homeItemName: {
        marginBottom: 0,
        color: 'hsl($shade0)',
        fontSize: '$16',
        fontWeight: 600,
        lineHeight: '24px'
      },
      itemName: {
        marginBottom: 0,
        fontSize: '$24',
        fontWeight: 600,
        lineHeight: '32px'
      }
    },
    scheme: {
      default: {
        color: 'hsl($shade300)'
      },
      monoBlack: {
        color: 'hsl($monoTitleLight)'
      }
    },
    isitalic: {
      true: {
        fontStyle: 'italic'
      }
    }
  },
  defaultVariants: {
    scheme: 'default'
  }
});
