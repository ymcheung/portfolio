import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';
import { Container, ListItem, IconList, IconListItem } from '../../components/layout';

import LangSwitch from '../LangSwitch';

import { ContentTitle, Section, Paragraph } from '../../components/contentStyles';

const FeatureList = styled('ul', {
  display: 'grid',
  grid: 'auto / repeat(auto-fill, minmax(48px, 140px))',
  margin: 0,
  padding: 0,

  variants: {
    space: {
      normal: {
        columnGap: '32px'
      },
      wide: {
        columnGap: '48px'
      }
    }
  }
});

const IconListImage = styled('img', {
  size: '$24',
  overflow: 'hidden',
  verticalAlign: 'middle',
  borderRadius: '4px'
});

const IconListDescription = styled(Paragraph, {
  gridArea: 'description'
});

const IconListTimestamp = styled(Paragraph, {
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
    <Container as="article" responsive={{'@m768': 'max640'}} isgroupend>
      <LangSwitch scheme="light" />
      <Section>
        <Paragraph scheme="light" dangerouslySetInnerHTML={{__html: t('intro')}} indent sectionend />
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="light" dangerouslySetInnerHTML={{__html: t('stat.title')}} />
        <FeatureList space={itemSpace}>
          <ListItem nomark>
            <ContentTitle featurednumber="normal" scheme="light">40+</ContentTitle>
            <Paragraph scheme="light" dangerouslySetInnerHTML={{__html: t('stat.count')}} sectionend />
          </ListItem>
          <ListItem nomark>
            <ContentTitle featurednumber="normal" scheme="light">3,600+</ContentTitle>
            <Paragraph scheme="light" dangerouslySetInnerHTML={{__html: t('stat.followers')}} sectionend />
          </ListItem>
        </FeatureList>
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="light" dangerouslySetInnerHTML={{__html: t('standalone.title')}} />
        <IconList>
          {t<string, websiteProps>('standalone.websites', { returnObjects: true }).map(({ slug, url, name, time, description }: websiteProps, index: number) => (
            <IconListItem nomark="true" purpose="timestamp" key={index}>
              <div><IconListImage src={`/projects/intersection/${slug}_24.jpg`} alt="" /></div>
              <Link href={url} passHref>
                <ContentTitle as="a" purpose="iconListItem" scheme="light" dangerouslySetInnerHTML={{__html: name}} data-splitbee-event={`Website Translation: ${name}`} target="_blank" rel="noopener" />
              </Link>
              <IconListDescription scheme="light" dangerouslySetInnerHTML={{__html: description}} sectionend="true" />
              <IconListTimestamp as="time" dateTime={time.format} dangerouslySetInnerHTML={{__html: time.full}} scheme="light" postmark="true" sectionend="true" />
            </IconListItem>
          ))}
        </IconList>
      </Section>
    </Container>
  );
}
