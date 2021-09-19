import Image from 'next/image';
import { styled } from 'stitches.config';
import { screenMobile, screenTablet } from '@utils/screens';

import { Wrap, Device } from '@projects/cover';
import MockupMacbook from '@projects/MockupMacbook';

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
    <Wrap project="nuomi">
      <Device responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} model={{ '@m768': 'tabletMacbook' }}>
        {screenMobile &&
          <Screenshot src="/projects/nuomi/cover-mobile.jpg" width={272} height={484} responsive="mobile" alt="Mobile Landing Page of Nuomi’s Portfolio" />
        }
        {screenTablet &&
          <MockupMacbook image="/projects/nuomi/cover-desktop.jpg" theme="mono" description="Desktop Landing Page of Nuomi’s Portfolio" />
        }
      </Device>
    </Wrap>
  )
}
