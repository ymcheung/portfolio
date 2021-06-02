import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { styled } from '../stitches.config';

import IconLangSwitch from '../elements/IconLangSwitch';

const Button = styled('a', {
  display: 'inline-block',
  margin: '0 0 12px -8px',
  padding: '$8',
  borderRadius: '4px',

  variants: {
    scheme: {
      dark: {
        background: '$shade100',
        transition: 'background-color $easeOut',

        '&:active, &:hover': {
          background: 'hsl($shade300)',
          transition: 'background-color $easeIn'
        }
      },
      light: {
        background: '$shade1500',
        transition: 'background-color $easeOut',

        '&:active, &:hover': {
          background: 'hsla($shade1200, 0.5)',
          transition: 'background-color $easeIn',

          '& circle': {
            fill: 'hsl($shade1200)',
            transition: 'fill $easeIn'
          },

          '& path': {
            fill: 'hsla($shade1600,0.75)',
            transition: 'fill $easeIn'
          }
        }
      }
    }
  }
});

const LangName = styled('span', {
  display: 'inline-block',
  paddingLeft: '4px',
  verticalAlign: 'bottom',
  color: 'hsl($shade1200)',
  fontFamily: '$default',
  fontSize: '$14',
  lineHeight: '20px',

  variants: {
    scheme: {
      dark: {
        color: 'hsl($shade1200)'
      },
      light: {
        color: 'hsl($shade600)'
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
