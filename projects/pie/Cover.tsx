import Image from 'next/image';
import { styled } from 'stitches.config';

import { Device } from '@projects/cover';
import clockIn from '/public/projects/pie/cover/clockIn.webp';

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

  return(
    <>
      <Device display={{ '@m768': 'none' }} responsive="mobile">
        <ScreenshotMobile src={clockIn} layout="responsive" quality={100} alt="Screenshot: Clock-In" />
      </Device>
      <Device display={{ '@initial': 'none', '@m768': 'block' }} responsive="tablet" model="mobileDual">
        <ScreenshotTablet src="/projects/pie/cover/clockIn.jpg" placement="left" alt="Screenshot: Clock-In" loading="lazy" />
        <ScreenshotTablet src="/projects/pie/cover/formsIndex.jpg" placement="right" alt="Screenshot: Received and Applying Forms" loading="lazy" />
      </Device>
    </>
  )
}
