import { styled } from '../../stitches.config';
import { screenMobile, screenTablet } from '../../utils/screens';

import { Wrap, Device } from '../ cover';

const ImageMobile = styled('img', {
  width: '100%',
  position: 'relative',
  zIndex: 1,
});

const ImageTablet = styled('img', {
  position: 'absolute',
  width: '256px',
  zIndex: 1,
  borderRadius: '4px',

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
      <Device responsive={{ '@initial': 'mobile' }} dualmobile={{ '@m768': 'tablet' }}>
        {screenMobile &&
          <ImageMobile src="/projects/nuomi/cover-mobile.jpg" alt="" />
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
