import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { styled } from '../stitches.config';

import IconLangSwitch from '../elements/IconLangSwitch';

const Button = styled('a', {
  display: 'inline-block',
  margin: '0 0 12px -8px',
  padding: '$8',
  background: 'transparent',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: '4px',

  variants: {
    scheme: {
      dark: {
        borderColor: '$shade300'
      },
      light: {
        borderColor: '$shade1500'
      }
    }
  }
});

const LangName = styled('span', {
  display: 'inline-block',
  paddingLeft: '4px',
  verticalAlign: 'bottom',
  color: '$shade1200',
  fontFamily: '$default',
  fontSize: '$14',
  lineHeight: '20px',

  variants: {
    scheme: {
      dark: {
        color: '$shade1200'
      },
      light: {
        color: '$shade600'
      }
    }
  }
});

function LangSwitch({ scheme }) {
  const router = useRouter();
  const { i18n } = useTranslation();

  const langName = i18n.language === 'en' ? '中文' : 'English';

  return(
    <Link href={router.pathname} locale={router.locale === 'en' ? 'zh-Hant-TW' : 'en'} passHref>
      <Button scheme={scheme} data-splitbee-event="切換語言">
        <IconLangSwitch scheme={scheme} />
        <LangName scheme={scheme}>{langName}</LangName>
      </Button>
    </Link>
  );
}

export default LangSwitch;
