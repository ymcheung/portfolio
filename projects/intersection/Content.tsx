import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';
import { ListItem, IconList, IconListItem } from '@components/layout';

import LangSwitch from '@components/LangSwitch';

import { ContentTitle, Section, Paragraph, ParagraphPostmark } from '@components/contentStyles';
import { FeatureList } from '@projects/featured';

import IconCalcom from '@public/projects/intersection/calcom.webp';
import IconStateCss from '@public/projects/intersection/statecss.webp';
import IconStorybook from '@public/projects/intersection/storybook.webp';
import IconInclusive from '@public/projects/intersection/inclusive.webp';
import IconProcess from '@public/projects/intersection/process.webp';

const IconListImage = styled(Image, {
  size: '$24',
  overflow: 'hidden',
  verticalAlign: 'middle',
  borderRadius: '4px'
});

const IconListDescription = styled(Paragraph, {
  gridArea: 'description'
});

const IconListTimestamp = styled(ParagraphPostmark, {
  gridArea: 'timestamp'
});

interface WebsiteProps {
  url: string;
  name: string;
  time: {
    format: string;
    full: string;
  };
  description: string;
}

export default function Content() {
  const { t, i18n } = useTranslation('intersection');

  const itemSpace = i18n.language === 'en' ? 'normal' : 'wide';

  const websiteIcons = [
    IconCalcom,
    IconStateCss,
    IconStorybook,
    IconInclusive,
    IconProcess
  ];

  return(
    <>
      <LangSwitch position="articleStart" responsive={{ '@mHover': 'hover' }} />
      <Section as="section">
        <Paragraph dangerouslySetInnerHTML={{__html: t('intro')}} indent sectionend />
      </Section>
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('stat.title')}} />
        <FeatureList space={itemSpace} siblings="sectionEnd">
          <ListItem nomark>
            <ContentTitle featurednumber="normal">40+</ContentTitle>
            <Paragraph dangerouslySetInnerHTML={{__html: t('stat.count')}} purpose="affix" sectionend />
          </ListItem>
          <ListItem nomark>
            <ContentTitle featurednumber="normal">3,600+</ContentTitle>
            <Paragraph dangerouslySetInnerHTML={{__html: t('stat.followers')}} purpose="affix" sectionend />
          </ListItem>
        </FeatureList>
      </Section>
      <Section as="section" isgroupend>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('standalone.title')}} />
        <IconList>
          {t<string, WebsiteProps[]>('standalone.websites',
            { returnObjects: true }).map(({ url, name, time, description }, index: number) => (
            <IconListItem nomark purpose="timestamp" key={index}>
              <div><IconListImage src={websiteIcons[index]} alt="" width={24} height={24} /></div>
              <Link href={url} passHref>
                <ContentTitle as="a" purpose="iconListItem" dangerouslySetInnerHTML={{__html: name}} data-splitbee-event={`Intersection: ${name} Translation Link`} target="_blank" rel="noopener" nounderline />
              </Link>
              <IconListDescription dangerouslySetInnerHTML={{__html: description}} sectionend />
              <IconListTimestamp as="time" dateTime={time.format} dangerouslySetInnerHTML={{__html: time.full}} />
            </IconListItem>
          ))}
        </IconList>
      </Section>
    </>
  );
}
