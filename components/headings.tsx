import { styled } from 'stitches.config';

export const HeadingLayout = styled('div', {
  display: 'grid',
  marginBottom: '$16',

  variants: {
    responsive: {
      mobile: {
        rowGap: '$4'
      },
      tablet: {
        columnGap: '$16',
        alignItems: 'center'
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
        position: 'relative',
        zIndex: 2,
        marginBottom: '4px',
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
        margin: '0 0 $12',
        color: 'hsl($homeSectionTitle)',
        fontSize: '$18',
        fontWeight: 800,
        letterSpacing: '1px'
      },
      homeItemName: {
        display: 'inline-block',
        marginBottom: 0,
        color: 'hsl($shade0)',
        fontSize: '$16',
        fontWeight: 600,
        lineHeight: '24px'
      },
      itemName: {
        marginBottom: 0,
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
    },
    ownmargin: {
      true: {
        marginBottom: '$16'
      }
    }
  }
});
