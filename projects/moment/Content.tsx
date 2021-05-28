import { useTranslation } from 'next-i18next';

import { styled } from '../../stitches.config';
import IconSearch from './IconSearch';
import IconManually from './IconManually';
import IconTemplate from './IconTemplate';
import IconCMS from './IconCMS';
import { Container, ListItem, IconList, IconListItem } from '../../components/layout';

import LangSwitch from '../LangSwitch';

import { ContentTitle, Section, Paragraph, ContentList, ContentListItem } from '../../components/contentStyles';

const BubbleSearch = styled('div', {
  maxWidth: 'fit-content',
  padding: '8px 12px',
  color: '$shade1500',
  fontSize: '$14',
  lineHeight: '24px',
  backgroundColor: '$shade300',
  borderRadius: '12px'
});

const Iteration = styled('h2', {
  margin: 0,
  padding: '0 $12',
  color: '$shade1500',
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
  color: '$shade1600',
  fontSize: '$24',
  lineHeight: '48px'
});

const WhatFigcaption = styled('div', {
  color: '$shade1200',
  fontFamily: '$default',
  fontSize: '$16',
  lineHeight: '20px'
});

type howProps = {
  [x: string]: any;
  name: string;
  description: string;
};

type layoutListProps = {
  [x: string]: any;
  name: string;
}

type whatProps = {
  [x: string]: any;
  symbol: string;
  name: string;
}

export default function Content() {
  const { t, i18n } = useTranslation('moment');

  const isItalic = i18n.language === 'en';

  return(
    <article>
      <LangSwitch scheme="dark" />
      <Section>
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('intro.title')}} />
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('intro.description')}} indent sectionend />
      </Section>
      <Section>
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('how.lead')}} sectionend />
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('how.title')}} />
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('how.description')}} indent />
        <IconList>
          {t<string, howProps>('how.hows', { returnObjects: true }).map(({ keyword, name }: howProps, index: number) => (
            <IconListItem nomark="true" vertical="middle" key={`how-${index}`}>
              <div>
                <IconSearch />
              </div>
              <BubbleSearch dangerouslySetInnerHTML={{__html: keyword}} />
              <IconListDescription scheme="dark" dangerouslySetInnerHTML={{__html: name}} sectionend="true" />
            </IconListItem>
          ))}
        </IconList>
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('obstacle.title')}} />
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('obstacle.description')}} indent sectionend />
        <ContentList>
          {t<string, layoutListProps>('obstacle.execuses', { returnObjects: true }).map(({ name }: layoutListProps, index: number) => (
            <ContentListItem dangerouslySetInnerHTML={{__html: name}} key={`execuses-${index}`} square="true" />
          ))}
        </ContentList>
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('obstacle.conclusion')}} indent sectionend />
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('what.title')}} />
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
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('asap.title')}} />
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('asap.description')}} indent />
        <IconList>
          <IconListItem nomark="true">
            <div>
              <IconManually aria-hidden="true" />
            </div>
            <Iteration dangerouslySetInnerHTML={{__html: t('asap.versions.first.position', { prefix: t('asap.prefix'), affix: t('asap.affix')})} } isItalic={isItalic} />
            <IconListDescription as="div" scheme="dark" dangerouslySetInnerHTML={{__html: t('asap.versions.first.description')}} sectionend="true" />
          </IconListItem>
          <IconListItem nomark="true">
            <div>
              <IconTemplate aria-hidden="true" />
            </div>
            <Iteration dangerouslySetInnerHTML={{__html: t('asap.versions.second.position', {prefix: t('asap.prefix'), affix: t('asap.affix')})}} isItalic={isItalic} />
            <IconListDescription as="div" scheme="dark" dangerouslySetInnerHTML={{__html: t('asap.versions.second.description')}} sectionend="true" />
          </IconListItem>
          <IconListItem nomark="true">
            <div>
              <IconCMS aria-hidden="true" />
            </div>
            <Iteration dangerouslySetInnerHTML={{__html: t('asap.versions.third.position', {prefix: t('asap.prefix'), affix: t('asap.affix')})}} isItalic={isItalic} />
            <IconListDescription as="div" scheme="dark" dangerouslySetInnerHTML={{__html: t('asap.versions.third.description')}} sectionend="true" />
          </IconListItem>
        </IconList>
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('expected.title')}} />
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('expected.description')}} indent />
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('measure.title')}} />
        <ContentList>
          {t<string, layoutListProps>('measure.methods', { returnObjects: true }).map(({ name }: layoutListProps, index: number) => (
            <ContentListItem dangerouslySetInnerHTML={{__html: name}} key={`execuses-${index}`} square="true" />
          ))}
        </ContentList>
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('grow.title')}} />
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('grow.description')}} indent />
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="dark" dangerouslySetInnerHTML={{__html: t('nongoal.title')}} />
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('nongoal.description')}} indent />
      </Section>
      <Section>
        <Paragraph scheme="dark" dangerouslySetInnerHTML={{__html: t('ending')}} indent />
      </Section>
    </article>
  );
}
