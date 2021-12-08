import { useTranslation } from 'next-i18next';

import LangSwitch from '@components/LangSwitch';

import { Container, FullBlock } from '@components/layout';
import { ContentTitle, Section, Paragraph, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';

import { ListItem, IconList, IconListItem } from '@components/layout';
import { FeatureList } from '@projects/featured';

import Gallery from './Gallery';

interface statsProps {
  count: number;
  affix: string;
}

export default function Content() {
  const { t, i18n } = useTranslation('carrier');

  const isItalic = i18n.language === 'en';
  const itemSpace = i18n.language === 'en' ? 'normal' : 'wide';

  return(
    <>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <LangSwitch position="articleStart" responsive={{ '@mHover': 'hover' }} />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('brief.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('brief.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('stats.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('stats.description')}} indent />
          <FeatureList space={itemSpace} siblings="hasSiblings">
            <ListItem nomark>
              <ContentTitle featurednumber="normal">60</ContentTitle>
              <Paragraph dangerouslySetInnerHTML={{__html: t('stats.respond.affix')}} purpose="affix" sectionend />
            </ListItem>
          </FeatureList>
          <IconList>
            {t<string, statsProps[]>('stats.respond.findings', { returnObjects: true }).map(({ count, affix }, index: number) => (
              <IconListItem purpose="noTitle" prefixwidth={24} nomark key={`statsFinding-${index}`}>
                <ContentTitle as="strong" purpose="iconListItem">{count}</ContentTitle>
                <Paragraph sectionend>{affix}</Paragraph>
              </IconListItem>
            ))}
          </IconList>
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('question.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('question.content')}} purpose="question" italic={isItalic} indent />
        </Section>
        <Section isgroupend>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('idea.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('idea.description')}} indent />
        </Section>
      </Container>
      <FullBlock project="carrier">
        <Container responsive={{'@m768': 'max640'}}>
          <Section>
            <Gallery />
          </Section>
        </Container>
      </FullBlock>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <Section has="postmarks">
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('next.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('next.description')}} indent />
        </Section>
        <Section isgroupend>
          <PostMarksHr />
          <ParagraphPostmark dangerouslySetInnerHTML={{__html: t('postmark.description')}} />
        </Section>
      </Container>
    </>
  );
}
