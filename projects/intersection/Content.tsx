import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';
import { Container, ListItem } from '../../components/layout';

import { ContentTitle, Section, Paragraph } from '../../components/contentStyles';

const FeatureList = styled('ul', {
  display: 'grid',
  grid: 'auto / auto-flow max-content',
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

// const FeatureListItem = styled(ListItem, {

// });


export default function Content() {
  const { t, i18n } = useTranslation('intersection');

  const itemSpace = i18n.language === 'en' ? 'normal' : 'wide';

  return(
    <Container as="article" responsive={{'@m768': 'max640'}} isgroupend>
      <Section>
        <Paragraph scheme="light" dangerouslySetInnerHTML={{__html: t('intro')}} indent sectionend />
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="light" dangerouslySetInnerHTML={{__html: t('stat.title')}} />
        <FeatureList space={itemSpace}>
          <ListItem nomark>
            <ContentTitle purpose="featuredNumber" scheme="light">40+</ContentTitle>
            <Paragraph scheme="light" dangerouslySetInnerHTML={{__html: t('stat.count')}} sectionend />
          </ListItem>
          <ListItem nomark>
            <ContentTitle purpose="featuredNumber" scheme="light">3,600+</ContentTitle>
            <Paragraph scheme="light" dangerouslySetInnerHTML={{__html: t('stat.followers')}} sectionend />
          </ListItem>
        </FeatureList>
      </Section>
      <Section>
        <ContentTitle purpose="section" scheme="light" dangerouslySetInnerHTML={{__html: t('standalone.title')}} />
      </Section>
    </Container>
  );
}
