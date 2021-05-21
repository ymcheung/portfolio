import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';
import { Container, ListItem } from '../../components/layout';

import { ContentTitle, Section, Paragraph } from '../../components/contentStyles';

export default function Content() {
  const { t } = useTranslation('intersection');

  return(
    <Container as="article" responsive={{'@m768': 'max640'}} isgroupend>
      <Section>
        <Paragraph scheme="light" dangerouslySetInnerHTML={{__html: t('intro')}} indent sectionend />
      </Section>
    </Container>
  );
}
