import Image from 'next/image';
import { styled } from 'stitches.config';
import { useTheme } from 'next-themes';

import { Device } from '@projects/cover';

import MockupMacbook from '@projects/MockupMacbook';
import mobileDark from '@public/projects/process/coverMobileDark.webp';
import mobileLight from '@public/projects/process/coverMobileLight.webp';

const Screenshot = styled(Image, {
  width: '100%',
  position: 'relative',
  zIndex: 1
});

export default function Cover() {
  const { resolvedTheme } = useTheme();
  let isDarkTheme = resolvedTheme === 'dark';

  const screenshotMobile = isDarkTheme ? mobileDark : mobileLight;

  return(
    <>
      <Device display={{ '@m768': 'none' }} responsive="mobile">
        <Screenshot src={screenshotMobile} layout="responsive" alt="Mobile Landing Page of Design Process for Pros Translation" />
      </Device>
      <Device display={{ '@initial': 'none', '@m768': 'block' }} responsive="tablet" model="tabletMacbook">
        <MockupMacbook image="/projects/process/coverDesktop.jpg" theme="duo" description="Desktop Landing Page of Design Process for Pros Translation" />
      </Device>
    </>
  )
}
