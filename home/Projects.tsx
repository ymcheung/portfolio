import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';

import { styled } from 'stitches.config';

import { Container, ListItem } from '@components/layout';
import { Heading } from '@components/headings';
import { HomeItemsLayout, HomeItemLink } from '@home/HomeItems';

import IconPie from '@elements/IconPie';
import IconClocking from '@projects/pie/IconClocking';
import IconForms from '@projects/pie/IconForms';
import IconSalary from '@projects/pie/IconSalary';
import IconStats from '@projects/pie/IconStats';

import IconMoment from '@elements/IconMoment';

const IconsList = styled('ul', {
  display: 'grid',
  grid: 'auto / auto-flow max-content',
  columnGap: '$24',
  padding: 0
});

const IconItem = styled(ListItem, {
  background: 'hsl($shade1400)',
  borderRadius: '4px',

  variants: {
    project: {
      pie: {
        fontSize: 0
      },
      moment: {
        minWidth: '$24',
        color: 'hsl($shade800)',
        fontFamily: 'sans-serif',
        fontSize: '$14',
        lineHeight: '24px',
        textAlign: 'center'
      }
    },
    mono: {
      true: {
        filter: 'grayscale(100%)'
      }
    }
  }
});

export default function Projects() {
  const { t, i18n } = useTranslation('home');
  const isEng = i18n.language === 'en';

  const { resolvedTheme } = useTheme();
  const isLightTheme = resolvedTheme !== 'dark';

  return(
    <Container as="main" responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} space="hasSibling">
      <Heading position="homeSection" isitalic={isEng} dangerouslySetInnerHTML={{__html: t('project.title')}} />
      <HomeItemsLayout responsive={{'@initial': 'mobile', '@m768': 'tablet'}}>
        <ListItem nomark>
          <Link href="/pie-clockin" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@mHover': 'hover' }}>
              <IconPie />
              <Heading position="homeItemName" dangerouslySetInnerHTML={{__html: t('project.pie.title', { redesign: t('verb.redesign') })}} />
              <IconsList>
                <IconItem project="pie" nomark><IconClocking /></IconItem>
                <IconItem project="pie" nomark><IconForms /></IconItem>
                <IconItem project="pie" nomark><IconSalary /></IconItem>
                <IconItem project="pie" nomark><IconStats /></IconItem>
              </IconsList>
            </HomeItemLink>
          </Link>
        </ListItem>
        <ListItem nomark>
          <Link href="/moment" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@mHover': 'hover' }}>
              <IconMoment />
              <Heading position="homeItemName" dangerouslySetInnerHTML={{__html: t('project.moment.title', { explore: t('verb.explore') })}} />
              <IconsList>
                <IconItem project="moment" mono={isLightTheme} nomark>🤘</IconItem>
                <IconItem project="moment" mono={isLightTheme} nomark>♪</IconItem>
                <IconItem project="moment" mono={isLightTheme} nomark>&nbsp;&nbsp;🎬&nbsp;&nbsp;📺&nbsp;&nbsp;▶️&nbsp;&nbsp;</IconItem>
              </IconsList>
            </HomeItemLink>
          </Link>
        </ListItem>
      </HomeItemsLayout>
    </Container>
  );
}
