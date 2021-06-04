import { styled } from '../stitches.config';

export const Wrap = styled('header', {
  position: 'fixed',
  right: 0,
  left: 0,
  zIndex: 0,

  variants: {
    responsive: {
      mobile: {
        minHeight: '458px',
        top: '36px'
      },
      tablet: {
        top: 0
      },
      tabletMacbook: {
        top: '72px'
      },
      desktopMacbook: {
        top: '36px'
      }
    }
  }
});

export const Device = styled('figure', {
  position: 'relative',
  margin: '0 auto',
  
  '&::before': {
    zIndex: 0,
    content: `''`,
    backgroundRepeat: 'no-repeat'
  },

  variants: {
    responsive: {
      mobile: {
        width: '288px',
        padding: '0 $16',

        '&::before': {
          fullAbsolute: '',
          backgroundImage: 'linear-gradient(to bottom, transparent 0%, hsla($shade300, 0.5) 50%, transparent 100%)'
        }
      }
    },
    device: {
      mobileDual: {
        width: '640px',
        height: '524px',
        padding: 0,

        '&::before': {
          backgroundImage: `
            linear-gradient(to bottom, transparent 0%, hsla($shade300, 0.5) 50%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, hsla($shade300, 0.5) 50%, transparent 100%)` ,
          backgroundSize: '288px 100%',
          backgroundPosition: `
            top 0 left 0,
            top 24px right 0`
        }
      },
      tabletMacbook: {
        width: '720px',
        height: '394px',
        padding: '43px 72px 0',
        backgroundSize: 'cover',

        '&::before': {
          backgroundImage: `url('/projects/mockupMacbook.svg')`,
        }
      },
      desktopMacbook: {
        width: '850px',
        height: '465px',
        padding: '51px 85px 0'
      }
    }
  }
});
