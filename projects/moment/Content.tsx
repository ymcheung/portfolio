import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';
import IconSearch from './IconSearch';
import { ListItem, IconList, IconListItem } from '@components/layout';

import LangSwitch from '@components/LangSwitch';

import { ContentTitle, Section, Paragraph, ContentList, ContentListItem } from '@components/contentStyles';

const BubbleSearch = styled('div', {
  padding: '8px 12px',
  color: 'hsl($shade300)',
  fontSize: '$14',
  lineHeight: '24px',
  backgroundColor: 'hsl($searchBubble)',
  borderRadius: '12px',

  variants: {
    responsive: {
      mobile: {
        maxWidth: 'fit-content'
      },
      tablet: {
        maxWidth: 'max-content'
      }
    }
  } 
});

const WhatList = styled('ul', {
 display: 'grid',
 grid: 'auto / repeat(3, 1fr)',
 columnGap: '12px',
 margin: 0,
 padding: 0
});

const WhatFigure = styled('figure', {
  margin: 0,
  textAlign: 'center'
});

const WhatFigureCover = styled('div', {
  color: 'hsl($shade100)',
  fontSize: '$24',
  lineHeight: '48px'
});

const WhatFigcaption = styled('div', {
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$16',
  lineHeight: '20px'
});

interface itemProps {
  [x: string]: any;
  name: string;
}

interface howProps extends itemProps {
  description: string;
}

interface whatProps extends itemProps {
  symbol: string;
}

export default function Content() {
  const { t, i18n } = useTranslation('moment');

  const isItalic = i18n.language === 'en';

  return(
    <>
      <LangSwitch position="articleStart" />
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('intro.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('intro.description')}} purpose="question" italic={isItalic} indent sectionend />
      </Section>
      <Section as="section">
        <Paragraph dangerouslySetInnerHTML={{__html: t('how.lead')}} sectionend />
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('how.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('how.description')}} indent />
        <IconList>
          {t<string, howProps>('how.hows', { returnObjects: true }).map(({ keyword, name }: howProps, index: number) => (
            <IconListItem nomark vertical="middle" key={`how-${index}`}>
              <div>
                <IconSearch />
              </div>
              <BubbleSearch responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} dangerouslySetInnerHTML={{__html: keyword}} />
              <Paragraph dangerouslySetInnerHTML={{__html: name}} purpose="projectIconDescription" sectionend />
            </IconListItem>
          ))}
        </IconList>
      </Section>
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('obstacle.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('obstacle.description')}} indent sectionend />
        <ContentList>
          {t<string, itemProps>('obstacle.execuses', { returnObjects: true }).map(({ name }: itemProps, index: number) => (
            <ContentListItem dangerouslySetInnerHTML={{__html: name}} key={`execuses-${index}`} square />
          ))}
        </ContentList>
        <Paragraph dangerouslySetInnerHTML={{__html: t('obstacle.conclusion')}} indent sectionend />
      </Section>
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('what.title')}} />
        <WhatList>
          {t<string, whatProps>('what.items', { returnObjects: true }).map(({ symbol, name }: whatProps, index: number) => (
            <ListItem nomark key={`what-${index}`}>
              <WhatFigure>
                <WhatFigureCover>
                  {symbol}
                </WhatFigureCover>
                <WhatFigcaption>{name}</WhatFigcaption>
              </WhatFigure>
            </ListItem>
          ))}
        </WhatList>
      </Section>
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('mvp.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('mvp.description')}} indent />
      </Section>
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('expected.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('expected.description')}} indent />
      </Section>
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('measure.title')}} />
        <ContentList>
          {t<string, itemProps>('measure.methods', { returnObjects: true }).map(({ name }: itemProps, index: number) => (
            <ContentListItem dangerouslySetInnerHTML={{__html: name}} key={`execuses-${index}`} square />
          ))}
        </ContentList>
      </Section>
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('grow.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('grow.description')}} indent />
      </Section>
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('prompt.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('prompt.description')}} indent />
      </Section>
    </>
  );
}
