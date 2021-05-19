import { useTranslation } from 'next-i18next';

import { styled } from '../../stitches.config';
import IconSearch from './IconSearch';
import IconManually from './IconManually';
import IconTemplate from './IconTemplate';
import IconCMS from './IconCMS';
import { Container, ListItem } from '../../components/layout';

import { ContentTitle, Section, Paragraph, ContentList, ContentListItem } from '../../components/contentStyles';

const IconList = styled('ul', {
  display: 'grid',
  rowGap: '$12',
  margin: 0,
  padding: 0
});

const IconListItem = styled(ListItem, {
  display: 'grid',
  grid: `"prefix title" auto
        ". description" auto / 32px 1fr`,
  rowGap: '$4',
  alignItems: 'center',
  margin: '0',
  fontFamily: '$default'
});

const BubbleSearch = styled('div', {
  maxWidth: 'max-content',
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
    fontSize: '$24'
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
    <Container as="article" responsive={{'@m768': 'max640'}} isgroupend>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('intro.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('intro.description')}} indent sectionend />
      </Section>
      <Section>
        <Paragraph dangerouslySetInnerHTML={{__html: t('how.lead')}} sectionend />
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('how.title')}} />
        <Paragraph indent dangerouslySetInnerHTML={{__html: t('how.description')}} />
        <IconList>
          {t<string, howProps>('how.hows', { returnObjects: true }).map(({ keyword, name }: howProps, index: number) => (
            <IconListItem nomark="true" key={`how-${index}`}>
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
          {t<string, layoutListProps>('obstacle.execuses', { returnObjects: true }).map(({ name }: layoutListProps, index: number) => (
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
          <IconListItem>
            <div>
              <IconManually aria-hidden="true" />
            </div>
            <Iteration dangerouslySetInnerHTML={{__html: t('asap.versions.first.position', {prefix: t('asap.prefix'), affix: t('asap.affix')})}} isItalic={isItalic} />
            <IconListDescription as="div" dangerouslySetInnerHTML={{__html: t('asap.versions.first.description')}} sectionend="true" />
          </IconListItem>
          <IconListItem>
            <div>
              <IconTemplate aria-hidden="true" />
            </div>
            <Iteration dangerouslySetInnerHTML={{__html: t('asap.versions.second.position', {prefix: t('asap.prefix'), affix: t('asap.affix')})}} isItalic={isItalic} />
            <IconListDescription as="div" dangerouslySetInnerHTML={{__html: t('asap.versions.second.description')}} sectionend="true" />
          </IconListItem>
          <IconListItem>
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
          {t<string, layoutListProps>('measure.methods', { returnObjects: true }).map(({ name }: layoutListProps, index: number) => (
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
    </Container>
  );
}