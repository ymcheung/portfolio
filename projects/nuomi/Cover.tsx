import Image from 'next/image';
import { styled } from 'stitches.config';

import { Device } from '@projects/cover';
import MockupMacbook from '@projects/MockupMacbook';
import screenshotMobile from '@public/projects/nuomi/coverMobile.jpg';

const Screenshot = styled(Image, {
  width: '100%',
  position: 'relative',
  zIndex: 1,

  variants: {
    responsive: {
      mobile: {
        borderRadius: '0 0 12px 12px'
      }
    }
  }
});

export default function Cover() {
  return(
    <>
      <Device display={{ '@m768': 'none' }} responsive="mobile">
        <Screenshot src={screenshotMobile} layout="responsive" responsive="mobile" alt="Mobile Landing Page of Nuomi’s Portfolio" />
      </Device>
      <Device display={{ '@initial': 'none', '@m768': 'block' }} responsive="tablet" model="tabletMacbook">
        <MockupMacbook image="/projects/nuomi/cover-desktop.jpg" theme="mono" description="Desktop Landing Page of Nuomi’s Portfolio" />
      </Device>
    </>
  )
}
