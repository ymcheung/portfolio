import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { styled } from 'stitches.config';

import { Device } from '@projects/cover';
import homeIndexEnDark from '@public/projects/carrier/gallery/en/homeIndexDark.webp';
import homeIndexTwDark from '@public/projects/carrier/gallery/tw/homeIndexDark.webp';
import homeIndexEnLight from '@public/projects/carrier/gallery/en/homeIndexLight.webp';
import homeIndexTwLight from '@public/projects/carrier/gallery/tw/homeIndexLight.webp';

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
  const { resolvedTheme } = useTheme();

  const homeIndexLight = router.locale === 'en' ? homeIndexEnLight : homeIndexTwLight;
  const homeIndexDark = router.locale === 'en' ? homeIndexEnDark : homeIndexTwDark;
  const imgLocale = router.locale === 'en' ? 'en' : 'tw';
  const imgAffix = resolvedTheme === 'dark' ? 'Dark' : 'Light';

  return(
    <>
      <Device display={{ '@m768': 'none' }} responsive="mobile">
        {resolvedTheme === 'dark' &&
          <ScreenshotMobile src={homeIndexDark} layout="responsive" quality={100} alt="Screenshot: Upcoming Health Checks" />
        }
        {resolvedTheme === 'light' &&
          <ScreenshotMobile src={homeIndexLight} layout="responsive" quality={100} alt="Screenshot: Upcoming Health Checks" />
        }
      </Device>
      <Device display={{ '@initial': 'none', '@m768': 'block' }} responsive="tablet" model="mobileDual">
        <ScreenshotTablet src={`/projects/carrier/gallery/${imgLocale}/homeIndex${imgAffix}.jpg`} placement="left" alt="Screenshot: Upcoming Health Checks" loading="lazy" />
        <ScreenshotTablet src={`/projects/carrier/gallery/${imgLocale}/furryShowDelayed${imgAffix}.jpg`} placement="right" alt="Screenshot: View the details of Seven" loading="lazy" />
      </Device>
    </>
  )
}
