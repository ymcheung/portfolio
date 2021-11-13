import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { styled } from 'stitches.config';

import IconDark from '@elements/IconDark';
import IconLight from '@elements/IconLight';


const ToggleDark = styled('button', {
  display: 'inline-block',
  width: '48px',
  height: '48px',
  overflow: 'hidden',
  position: 'relative',
  margin: '-32px $8 0 2px',
  padding: '$20 0 0',
  backgroundColor: 'transparent',
  border: 0,
  verticalAlign: 'bottom',
  cursor: 'pointer'
});

function ToggleScheme() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  const isDarkTheme = resolvedTheme === 'dark';
  const toggleSchemeMessage = isDarkTheme ? '亮色' : '暗色';

  return(
    <ToggleDark type="button" onClick={toggleTheme} aria-label={`切換 Scheme：${toggleSchemeMessage}`} data-splitbee-event="切換 Scheme">
      {!isDarkTheme &&
        <IconDark />
      }
      {isDarkTheme &&
        <IconLight />
      }
    </ToggleDark>
  )
}

export default ToggleScheme;
