import { styled } from '../../stitches.config';
import { screenMobile, screenTablet } from '../../utils/screens';

const Wrap = styled('header', {
  position: 'fixed',
  right: 0,
  left: 0,
  zIndex: 0,

  variants: {
    responsive: {
      mobile: {
        top: '36px'
      },
      tablet: {
        top: 0
      }
    }
  }
});

const Device = styled('figure', {
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
          backgroundImage: 'linear-gradient(to bottom, transparent 0%, $shadeMockup50 50%, transparent 100%)'
        }
      },
      tablet: {
        width: '640px',
        height: '524px',
        padding: 0,

        '&::before': {
          backgroundImage: `
            linear-gradient(to bottom, transparent 0%, $shadeMockup50 50%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, $shadeMockup50 50%, transparent 100%)` ,
          backgroundSize: '288px 100%',
          backgroundPosition: `
            top 0 left 0,
            top 24px right 0`
        }
      }
    }
  }
});

const ImageMobile = styled('img', {
  width: '100%',
  position: 'relative',
  zIndex: 1,
  borderRadius: '12px',
});

const ImageTablet = styled('img', {
  position: 'absolute',
  width: '256px',
  zIndex: 1,
  borderRadius: '12px',

  variants: {
    placement: {
      left: {
        top: '$16',
        left: '$16'
      },
      right: {
        top: '40px',
        right: '16px'
      }
    }
  }
});

export default function Cover() {
  return(
    <Wrap responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
      <Device responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
        {screenMobile &&
          <ImageMobile src="/projects/pie/cover-mobile.jpg" alt="" />
        }
        {screenTablet &&
          <>
            <ImageTablet src="/projects/pie/cover-mobile.jpg" placement="left" alt="" />
            <ImageTablet src="/projects/pie/cover-apply.jpg" placement="right" alt="" />
          </>
        }
      </Device>
    </Wrap>
  )
}