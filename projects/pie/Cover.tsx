import { styled } from '../../stitches.config';
import { screenMobile, screenTablet } from '../../utils/screens';

import { Wrap, Device } from '../cover';

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
      <Device responsive={{ '@initial': 'mobile' }} device={{ '@m768': 'mobileDual' }}>
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
