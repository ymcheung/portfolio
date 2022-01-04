import { styled } from 'stitches.config';

export const Device = styled('figure', {
  position: 'relative',
  margin: '0 auto',

  '&::before': {
    fullAbsolute: '',
    zIndex: 0,
    content: '',
    backgroundImage: 'linear-gradient(to bottom, transparent 0%, hsla($shade800, 0.16) 50%, transparent 92%)',
    backgroundRepeat: 'no-repeat'
  },

  variants: {
    display: {
      none: {
        display: 'none'
      },
      block: {
        display: 'block'
      }
    },
    responsive: {
      mobile: {
        maxWidth: '414px',
        padding: '0 $8',
      },
      tablet: {
        maxWidth: 'none',
        marginX: '$auto'
      }
    },
    model: {
      mobileDual: {
        width: '640px',
        height: '640px',
        padding: 0,

        '&::before': {
          backgroundImage: `
            linear-gradient(to bottom, transparent 0%, hsla($shade800, 0.16) 72%, transparent 92%),
            linear-gradient(to bottom, transparent 0%, hsla($shade800, 0.16) 72%, transparent 92%)`,
          backgroundSize: '288px 500px',
          backgroundPosition: `
            top 0 left 8px,
            top 48px right 8px`
        }
      },
      tabletMacbook: {
        textAlign: 'center',

        '&::before': {
          content: 'unset',
          backgroundImage: 'none'
        }
      }
    }
  }
});
