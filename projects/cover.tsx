import { styled } from 'stitches.config';

export const Wrap = styled('header', {
  position: 'relative',
  marginBottom: '$16',
  padding: '$24 0',

  variants: {
    project: {
      pie: {
        backgroundColor: 'hsl($pie0)'
      },
      nuomi: {
        backgroundColor: 'hsl($nuomiBlack0)'
      }
    }
  }
});

export const Device = styled('figure', {
  position: 'relative',
  margin: '0 auto',
  
  '&::before': {
    zIndex: 0,
    content: '',
    backgroundRepeat: 'no-repeat'
  },

  variants: {
    responsive: {
      mobile: {
        width: '272px',
        minHeight: '455px',
        padding: '0 $8',

        '&::before': {
          fullAbsolute: '',
          backgroundImage: 'linear-gradient(to bottom, transparent 0%, hsla($shade800, 0.25) 50%, transparent 92%)'
        }
      },
      tablet: {
        width: 'auto',
        minHeight: 'unset',
        textAlign: 'center'
      }
    },
    model: {
      mobileDual: {
        width: '640px',
        height: '524px',
        padding: 0,

        '&::before': {
          backgroundImage: `
            linear-gradient(to bottom, transparent 0%, hsla($shade800, 0.25) 50%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, hsla($shade800, 0.25) 50%, transparent 100%)` ,
          backgroundSize: '288px 456px',
          backgroundPosition: `
            top 0 left 8px,
            top 24px right 8px`
        }
      },
      tabletMacbook: {
        '&::before': {
          content: 'unset',
          backgroundImage: 'none'
        }
      }
    }
  }
});
