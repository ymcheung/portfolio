import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { styled } from 'stitches.config';

import IconLangSwitch from '@elements/IconLangSwitch';

const Switch = styled('a', {
  display: 'inline-block',
  paddingX: '$8',
  verticalAlign: 'bottom',
  backgroundColor: 'hsl($shade1500)',
  borderRadius: '4px',
  willChange: 'background-color',

  variants: {
    position: {
      articleStart: {
        margin: '0 0 $12 -$8',
        paddingY: '$8'
      },
      footer: {
        paddingY: '$4'
      }
    },
    responsive: {
      mobile: {
        marginBottom: '$8'
      },
      tablet: {
        marginBottom: 0
      },
      hover: {
        transition: 'background-color $easeOut',

        '&:active, &:hover': {
          backgroundColor: 'hsl($shade1400)',
          transition: 'background-color $easeOut',

          '& circle': {
            fill: 'hsl($shade1200)',
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
  verticalAlign: 'sub',
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$14',
  lineHeight: 1
});

interface LangSwitchProps {
  readonly position: {}
  readonly responsive: {}
}

function LangSwitch({ position, responsive }: LangSwitchProps) {
  const router = useRouter();
  const { i18n } = useTranslation();

  const langName = i18n.language === 'en' ? '中文' : 'English';

  return(
    <Link href={router.pathname} locale={router.locale === 'en' ? 'zh-TW' : 'en'} passHref>
      <Switch position={position} responsive={responsive}>
        <IconLangSwitch />
        <LangName>{langName}</LangName>
      </Switch>
    </Link>
  );
}

export default LangSwitch;
