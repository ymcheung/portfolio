import { useTranslation } from 'next-i18next';

import { styled } from '../../stitches.config';
import IconSearch from '../../elements/IconSearch';
import { Container } from '../../components/layout';

import { ContentTitle, Section, Paragraph } from '../../components/contentStyles';

type howProps = {
  [x: string]: any;
  name: string;
  description: string;
};

const BubbleList = styled('ul', {
  margin: 0,
  padding: 0
});

const BubbleListItem = styled('li', {
  display: 'grid',
  grid: `"prefix title" auto
        ". description" auto / 32px 1fr`,
  rowGap: '$4',
  alignItems: 'center',
  margin: '0 0 $12',
  fontFamily: '$default',
  listStyle: 'none'
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

const BubbleDescription = styled(Paragraph, {
  gridArea: 'description'
});

export default function Content() {
  const { t } = useTranslation('moment');

  return(
    <Container as="article" responsive={{'@m768': 'max640'}} isGroupEnd>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('intro.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('intro.description')}} indent sectionEnd />
      </Section>
      <Section>
        <Paragraph dangerouslySetInnerHTML={{__html: t('how.lead')}} sectionEnd />
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('how.title')}} />
        <Paragraph indent dangerouslySetInnerHTML={{__html: t('how.description')}} />
        <BubbleList>
          {t<string, howProps>('how.hows', { returnObjects: true }).map(({ keyword, name }: howProps, index: number) => (
            <BubbleListItem key={`how-${index}`}>
              <div>
                <IconSearch />
              </div>
              <BubbleSearch dangerouslySetInnerHTML={{__html: keyword}} />
              <BubbleDescription dangerouslySetInnerHTML={{__html: name}} sectionEnd />
            </BubbleListItem>
          ))}
        </BubbleList>
      </Section>
      <Section>
        <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('obstacle.title')}} />
        <Paragraph dangerouslySetInnerHTML={{__html: t('obstacle.description')}} indent sectionEnd />
      </Section>
    </Container>
  );
}
