import { styled } from '../../stitches.config';
import { screenMobile, screenTablet } from '../../utils/screens';

import { Wrap, Device } from '../ cover';

const Image = styled('img', {
  width: '100%',
  position: 'relative',
  zIndex: 1,
});

export default function Cover() {
  return(
    <Wrap responsive={{ '@initial': 'mobile', '@m768': 'tabletMacbook', '@m992': 'desktopMacbook' }}>
      <Device responsive={{ '@initial': 'mobile' }} device={{ '@m768': 'tabletMacbook', '@m992': 'desktopMacbook' }}>
        {screenMobile &&
          <Image src="/projects/nuomi/cover-mobile.jpg" alt="Mobile Landing Page of Nuomi’s Portfolio" />
        }
        {screenTablet &&
          <Image src="/projects/nuomi/cover-desktop.jpg" alt="Desktop Landing Page of Nuomi’s Portfolio" />
        }
      </Device>
    </Wrap>
  )
}
