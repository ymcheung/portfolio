import { useEffect } from 'react';

import Link from 'next/link';
import { styled, global } from '../stitches.config';
import { globalStyles } from '../utils/globalStyles';

const pageBody = global({
  'body[data-body-style=pie]': {
    minHeight: '100vh',
    backgroundColor: '$shade300'
  }
});

export default function ProjectPie() {
  useEffect(() => {
    document.body.setAttribute('data-body-style', 'pie');
  });
  pageBody();

  return(
    <>
      <Link href="/">Home</Link>
    </>
  );
}
