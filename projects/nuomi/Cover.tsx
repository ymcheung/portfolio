import Image from 'next/image';
import { styled } from 'stitches.config';
import { screenMobile, screenTablet } from '@utils/screens';

import { Wrap, Device } from '@projects/cover';

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
      <Device responsive={{ '@initial': 'mobile' }} device={{ '@m768': 'tabletMacbook', '@m992': 'desktopMacbook' }}>
        {screenMobile &&
          <Screenshot src="/projects/nuomi/cover-mobile.jpg" width={272} height={484} responsive="mobile" alt="Mobile Landing Page of Nuomi’s Portfolio" />
        }
        {screenTablet &&
          <Screenshot src="/projects/nuomi/cover-desktop.jpg" width={1080} height={574} alt="Desktop Landing Page of Nuomi’s Portfolio" />
        }
      </Device>
    </Wrap>
  )
}
