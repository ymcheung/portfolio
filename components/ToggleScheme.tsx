import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { styled } from '../stitches.config';

import IconDark from '../elements/IconDark';
import IconLight from '../elements/IconLight';


const ToggleDark = styled('button', {
  display: 'inline-block',
  width: '48px',
  height: '48px',
  overflow: 'hidden',
  position: 'relative',
  margin: '-32px 0 0 2px',
  padding: '14px 0 6px',
  backgroundColor: 'transparent',
  border: 0,
  verticalAlign: 'sub',
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
  const toogleSchemeMessage = isDarkTheme ? '亮色' : '暗色';

  return(
    <ToggleDark type="button" onClick={toggleTheme} aria-label={`切換 Scheme：${toogleSchemeMessage}`} data-splitbee-event="切換 Scheme">
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
