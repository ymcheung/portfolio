import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { styled } from '../stitches.config';

import IconLangSwitch from '../elements/IconLangSwitch';

const Button = styled('button', {
  margin: '0 0 12px -8px',
  padding: '$8',
  background: 'transparent',
  border: '2px solid $shade300',
  borderRadius: '4px'
});

const LangName = styled('span', {
  display: 'inline-block',
  paddingLeft: '4px',
  verticalAlign: 'bottom',
  color: '$shade1200',
  fontFamily: '$default',
  fontSize: '$14',
  lineHeight: '20px'
});

function LangSwitch() {
  const router = useRouter();
  const { i18n } = useTranslation();

  const langName = i18n.language === 'en' ? '中文' : 'English';

  return(
    <Link href={router.pathname}
          locale={router.locale === 'en' ? 'tw' : 'en'}
    >
      <Button type="button" data-splitbee-event="切換語言">
        <IconLangSwitch />
        <LangName>{langName}</LangName>
      </Button>
    </Link>
  );
}

export default LangSwitch;
