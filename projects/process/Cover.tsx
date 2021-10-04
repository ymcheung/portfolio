import Image from 'next/image';
import { styled } from 'stitches.config';
import { screenMobile, screenTablet } from '@utils/screens';

import { useTheme } from 'next-themes';

import { Wrap, Device } from '@projects/cover';
import MockupMacbook from '@projects/MockupMacbook';

const Screenshot = styled(Image, {
  width: '100%',
  position: 'relative',
  zIndex: 1
});

export default function Cover() {
  const { resolvedTheme } = useTheme();
  let isDarkTheme = resolvedTheme === 'dark';

  return(
    <Wrap>
      <Device responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} vpheight="iphone8" model={{ '@m768': 'tabletMacbook' }}>
        {screenMobile && isDarkTheme &&
          <Screenshot src="/projects/process/coverMobileDark.webp" width={272} height={484} alt="Mobile Landing Page of Design Process for Pros Translation" />
        }
        {screenMobile && !isDarkTheme &&
          <Screenshot src="/projects/process/coverMobileLight.webp" width={272} height={484} alt="Mobile Landing Page of Design Process for Pros Translation" />
        }
        {screenTablet &&
          <MockupMacbook image="/projects/process/coverDesktop.jpg" theme="duo" description="Desktop Landing Page of Design Process for Pros Translation" />
        }
      </Device>
    </Wrap>
  )
}
