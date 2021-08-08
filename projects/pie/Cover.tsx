import { useState, useEffect } from 'react';
import Image from 'next/image';
import { styled } from 'stitches.config';
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
        left: '$16'
      },
      right: {
        top: '40px',
        right: '$16'
      }
    }
  }
});

export default function Cover() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {setMounted(true)}, []);

  return(
    <Wrap responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} project="pie">
      <Device responsive={{ '@initial': 'mobile' }} device={{ '@m768': 'mobileDual' }}>
        {mounted && screenMobile &&
          <ScreenshotMobile src="/projects/pie/clockingNone.webp" width={256} height={455} alt="Screenshot: Clock-In" />
        }
        {screenTablet &&
          <>
            <ScreenshotTablet src="/projects/pie/clockingNone.jpg" placement="left" alt="Screenshot: Clock-In" />
            <ScreenshotTablet src="/projects/pie/formsConfirmApply.jpg" placement="right" alt="Screenshot: Received and Applying Forms" />
          </>
        }
      </Device>
    </Wrap>
  )
}
