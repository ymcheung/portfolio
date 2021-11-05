import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { styled } from 'stitches.config';
import { ListItem, IconList, IconListItem } from '@components/layout';

import LangSwitch from '@components/LangSwitch';

import { ContentTitle, Section, Paragraph, ParagraphPostmark } from '@components/contentStyles';
import { FeatureList } from '@projects/featured';

const IconListImage = styled('img', {
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

type websiteProps = {
  [x: string]: any;
  slug: string;
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

  return(
    <>
      <LangSwitch position="articleStart" />
      <Section as="section">
        <Paragraph dangerouslySetInnerHTML={{__html: t('intro')}} indent sectionend />
      </Section>
      <Section as="section">
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('stat.title')}} />
        <FeatureList space={itemSpace}>
          <ListItem nomark>
            <ContentTitle featurednumber="normal">40+</ContentTitle>
            <Paragraph dangerouslySetInnerHTML={{__html: t('stat.count')}} purpose="suffix" sectionend />
          </ListItem>
          <ListItem nomark>
            <ContentTitle featurednumber="normal">3,600+</ContentTitle>
            <Paragraph dangerouslySetInnerHTML={{__html: t('stat.followers')}} purpose="suffix" sectionend />
          </ListItem>
        </FeatureList>
      </Section>
      <Section as="section" isgroupend>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('standalone.title')}} />
        <IconList>
          {t<string, websiteProps>('standalone.websites', { returnObjects: true }).map(({ slug, url, name, time, description }: websiteProps, index: number) => (
            <IconListItem nomark purpose="timestamp" key={index}>
              <div><IconListImage src={`/projects/intersection/${slug}_24.jpg`} alt="" /></div>
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
