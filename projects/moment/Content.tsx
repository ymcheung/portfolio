import { useTranslation } from 'next-i18next';

import { styled } from '../../stitches.config';
import IconSearch from './IconSearch';
import IconManually from './IconManually';
import IconTemplate from './IconTemplate';
import IconCMS from './IconCMS';
import { ListItem, IconList, IconListItem } from '../../components/layout';

import LangSwitch from '../LangSwitch';

import { ContentTitle, Section, Paragraph, ContentList, ContentListItem } from '../../components/contentStyles';

const BubbleSearch = styled('div', {
  maxWidth: 'fit-content',
  padding: '8px 12px',
  color: 'hsl($shade300)',
  fontSize: '$14',
  lineHeight: '24px',
  backgroundColor: 'hsl($searchBubble)',
  borderRadius: '12px'
});

const IconListDescription = styled(Paragraph, {
  gridArea: 'description',
  paddingX: '$12' 
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

const Iteration = styled('strong', {
  margin: 0,
  padding: '0 $12',
  color: 'hsl($shade100)',
  fontSize: '$16',

  variants: {
    isItalic: {
      true: {
        fontStyle: 'italic'
      }
    }
  },

  '& .number': {
    fontSize: '$24',
    lineHeight: '24px'
  }
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
    <article>
      <LangSwitch />
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('intro.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('intro.description')}} indent sectionend />
      </Section>
      <Section>
        <Paragraph dangerouslySetInnerHTML={{__html: t('how.lead')}} sectionend />
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('how.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('how.description')}} indent />
        <IconList>
          {t<string, howProps>('how.hows', { returnObjects: true }).map(({ keyword, name }: howProps, index: number) => (
            <IconListItem nomark="true" vertical="middle" key={`how-${index}`}>
              <div>
                <IconSearch />
              </div>
              <BubbleSearch dangerouslySetInnerHTML={{__html: keyword}} />
              <IconListDescription dangerouslySetInnerHTML={{__html: name}} sectionend="true" />
            </IconListItem>
          ))}
        </IconList>
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('obstacle.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('obstacle.description')}} indent sectionend />
        <ContentList>
          {t<string, itemProps>('obstacle.execuses', { returnObjects: true }).map(({ name }: itemProps, index: number) => (
            <ContentListItem dangerouslySetInnerHTML={{__html: name}} key={`execuses-${index}`} square="true" />
          ))}
        </ContentList>
        <Paragraph dangerouslySetInnerHTML={{__html: t('obstacle.conclusion')}} indent sectionend />
      </Section>
      <Section>
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
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('asap.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('asap.description')}} indent />
        <IconList>
          <IconListItem nomark="true">
            <div>
              <IconManually aria-hidden="true" />
            </div>
            <Iteration dangerouslySetInnerHTML={{__html: t('asap.versions.first.position', { prefix: t('asap.prefix'), affix: t('asap.affix')})} } isItalic={isItalic} />
            <IconListDescription as="div" dangerouslySetInnerHTML={{__html: t('asap.versions.first.description')}} sectionend="true" />
          </IconListItem>
          <IconListItem nomark="true">
            <div>
              <IconTemplate aria-hidden="true" />
            </div>
            <Iteration dangerouslySetInnerHTML={{__html: t('asap.versions.second.position', {prefix: t('asap.prefix'), affix: t('asap.affix')})}} isItalic={isItalic} />
            <IconListDescription as="div" dangerouslySetInnerHTML={{__html: t('asap.versions.second.description')}} sectionend="true" />
          </IconListItem>
          <IconListItem nomark="true">
            <div>
              <IconCMS aria-hidden="true" />
            </div>
            <Iteration dangerouslySetInnerHTML={{__html: t('asap.versions.third.position', {prefix: t('asap.prefix'), affix: t('asap.affix')})}} isItalic={isItalic} />
            <IconListDescription as="div" dangerouslySetInnerHTML={{__html: t('asap.versions.third.description')}} sectionend="true" />
          </IconListItem>
        </IconList>
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('expected.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('expected.description')}} indent />
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('measure.title')}} />
        <ContentList>
          {t<string, itemProps>('measure.methods', { returnObjects: true }).map(({ name }: itemProps, index: number) => (
            <ContentListItem dangerouslySetInnerHTML={{__html: name}} key={`execuses-${index}`} square="true" />
          ))}
        </ContentList>
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('grow.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('grow.description')}} indent />
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('nongoal.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('nongoal.description')}} indent />
      </Section>
      <Section>
        <Paragraph dangerouslySetInnerHTML={{__html: t('ending')}} indent />
      </Section>
    </article>
  );
}
