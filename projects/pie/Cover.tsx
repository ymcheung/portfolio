import Image from 'next/image';
import { styled } from '../../stitches.config';
import { screenMobile, screenTablet } from '../../utils/screens';

import { Wrap, Device } from '../cover';

const ScreenshotMobile = styled(Image, {
  position: 'relative',
  zIndex: 1,
  borderRadius: '12px',
});

const ScreenshotTablet = styled('img', {
  width: '272px',
  position: 'absolute',
  zIndex: 1,
  borderRadius: '12px',

  variants: {
    placement: {
      left: {
        top: '$16',
        left: '$8'
      },
      right: {
        top: '40px',
        right: '8px'
      }
    }
  }
});

export default function Cover() {
  return(
    <Wrap responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} project="pie">
      <Device responsive={{ '@initial': 'mobile' }} device={{ '@m768': 'mobileDual' }}>
        {screenMobile &&
          <ScreenshotMobile src="/projects/pie/cover-mobile.jpg" width={256} height={455} alt="Screenshot: Clock-In" />
        }
        {screenTablet &&
          <>
            <ScreenshotTablet src="/projects/pie/cover-mobile.jpg" placement="left" alt="Screenshot: Clock-In" />
            <ScreenshotTablet src="/projects/pie/cover-apply.jpg" placement="right" alt="Screenshot: New Leave Form" />
          </>
        }
      </Device>
    </Wrap>
  )
}
