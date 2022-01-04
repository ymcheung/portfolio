import { useRouter } from 'next/router';
import Image from 'next/image';
import { styled } from 'stitches.config';

import { Device } from '@projects/cover';
import homeIndexEn from '/public/projects/carrier/gallery/en/homeIndex.webp';
import homeIndexTw from '/public/projects/carrier/gallery/tw/homeIndex.webp';

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
  const router = useRouter();

  const homeIndex = router.locale === 'en' ? homeIndexEn : homeIndexTw;
  const imgLocale = router.locale === 'en' ? 'en' : 'tw';

  return(
    <>
      <Device display={{ '@m768': 'none' }} responsive="mobile">
        <ScreenshotMobile src={homeIndex} layout="responsive" quality={100} alt="Screenshot: Upcoming Health Checks" />
      </Device>
      <Device display={{ '@initial': 'none', '@m768': 'block' }} responsive="tablet" model="mobileDual">
        <ScreenshotTablet src={`/projects/carrier/gallery/${imgLocale}/homeIndex.jpg`} placement="left" alt="Screenshot: Upcoming Health Checks" loading="lazy" />
        <ScreenshotTablet src={`/projects/carrier/gallery/${imgLocale}/furryShowOnTime.jpg`} placement="right" alt="Screenshot: View the details of Seven" loading="lazy" />
      </Device>
    </>
  )
}
