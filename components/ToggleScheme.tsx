import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useThrottledCallback } from 'use-debounce';

import { styled } from 'stitches.config';

import IconDark from '@elements/IconDark';
import IconLight from '@elements/IconLight';


const ToggleDark = styled('button', {
  display: 'inline-block',
  width: '48px',
  height: '48px',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: 'transparent',
  border: 0,
  verticalAlign: 'bottom',
  cursor: 'pointer',

  variants: {
    responsive: {
      mobile: {
        margin: '0 $8 0 -10px',
        padding: '$12 0 $8',
      },
      tablet: {
        margin: '0 $8 0 0',
        padding: '$20 0 0'
      }
    }
  }
});

export default function ToggleScheme() {
  const [ mounted, setMounted ] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  const throttleToggleScheme = useThrottledCallback(toggleTheme, 1000, {
    trailing: false
  });

  if (!mounted) return null;

  const isDarkTheme = resolvedTheme === 'dark';
  const toggleSchemeMessage = isDarkTheme ? '亮色' : '暗色';

  return(
    <ToggleDark type="button" onClick={throttleToggleScheme} responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} aria-label={`切換 Scheme：${toggleSchemeMessage}`} data-splitbee-event="切換 Scheme">
      {!isDarkTheme &&
        <IconDark />
      }
      {isDarkTheme &&
        <IconLight />
      }
    </ToggleDark>
  )
}
