import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { styled } from '../stitches.config';

import IconLangSwitch from '../elements/IconLangSwitch';

const Button = styled('a', {
  display: 'inline-block',
  margin: '0 0 12px -8px',
  padding: '$8',
  background: 'hsl($shade1500)',
  borderRadius: '4px',
  transition: 'background-color $easeOut',

  '&:active, &:hover': {
    background: 'hsl($shade1400)',
    transition: 'background-color $easeIn',

    '& circle': {
      fill: 'hsl($shade1200)',
      transition: 'fill $easeIn'
    }
  }
});

const LangName = styled('span', {
  display: 'inline-block',
  paddingLeft: '4px',
  verticalAlign: 'bottom',
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$14',
  lineHeight: '20px'
});

function LangSwitch() {
  const router = useRouter();
  const { i18n } = useTranslation();

  const langName = i18n.language === 'en' ? '中文' : 'English';

  return(
    <Link href={router.pathname} locale={router.locale === 'en' ? 'zh-Hant-TW' : 'en'} passHref>
      <Button>
        <IconLangSwitch />
        <LangName>{langName}</LangName>
      </Button>
    </Link>
  );
}

export default LangSwitch;
