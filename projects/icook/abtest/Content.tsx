import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import LangSwitch from '@components/LangSwitch';

import { Container } from '@components/layout';
import { ContentTitle, Section, Paragraph, ContentList, ContentListItem } from '@components/contentStyles';

import { ListItem } from '@components/layout';
import wineBoiledClamsCover from '@public/projects/icook/wineBoiledClamsCover.webp';
import wineBoiledClamsRecommend from '@public/projects/icook/wineBoiledClamsRecommend.webp';
import IconBounce from '@elements/IconBounce';

const TestGroupList = styled('ul', {
  display: 'grid',
  alignItems: 'center',
  overflowX: 'auto',
  margin: 0,
  padding: '0 0 $8',

  variants: {
    responsive: {
      mobile: {
        grid: 'auto / 256px 36px 256px',
        columnGap: '$16'
      },
      tablet: {
        grid: 'auto / 1fr max-content 1fr',
        columnGap: '32px'
      }
    }
  }
});

const TestGroupsOr = styled(ListItem, {
  textAlign: 'center',

  variants: {
    responsive: {
      tablet: {
        alignSelf: 'center',
        marginRight: '$16'
      }
    }
  }
});

const ExampleCoverLink = styled('a', {
  display: 'block',
  margin: '0 0 $16'
});

const ExampleCover = styled('figure', {
  padding: 0,

  variants: {
    space: {
      withWrap: {
        margin: 0
      },
      noWrap: {
        margin: '0 0 $16'
      }
    }
  }
});

const ExampleCoverImg = styled(Image, {
  variants: {
    responsive: {
      mobile: {
        borderRadius: '8px'
      },
      tablet: {
        borderRadius: '16px'
      }
    }
  }
});

const ExperimentOutcome = styled('figure', {
  margin: '0 0 $8',
  padding: 0,
  color: 'hsl($shade600)',
  fontFamily: '$default',
  fontSize: '$32',
  fontWeight: '700',
  fontStyle: 'italic'
});

export default function Content() {
  const { t, i18n } = useTranslation('icook');

  const isItalic = i18n.language === 'en';

  return(
    <>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <LangSwitch position="articleStart" responsive={{ '@mHover': 'hover' }} />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.intro.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.intro.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.problemTechnical.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.problemTechnical.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.prerequisite.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.prerequisite.description')}} indent />
          <ContentTitle dangerouslySetInnerHTML={{__html: t('abtest.prerequisite.development.title')}} purpose="paragraph" />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.prerequisite.development.description')}} indent />
          <ContentTitle dangerouslySetInnerHTML={{__html: t('abtest.prerequisite.git.title')}} purpose="paragraph" />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.prerequisite.git.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.abtesting.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.abtesting.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.problemProduct.title')}} />
          <IconBounce />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.problemProduct.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.question.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.question.description')}} purpose="question" italic={isItalic} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.current.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.current.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.groups.title')}} />
          <Link href="https://icook.tw/recipes/101777" passHref>
            <ExampleCoverLink target="_blank" rel="noopener">
              <ExampleCover space="withWrap">
                <ExampleCoverImg src={wineBoiledClamsCover} responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} layout="responsive" alt={t('abtest.groups.cover')} />
              </ExampleCover>
            </ExampleCoverLink>
          </Link>
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.groups.description')}} indent />
          <TestGroupList responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
            <ListItem nomark>
              <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('abtest.groups.control.title')}} />
              <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.groups.control.description')}} sectionend />
            </ListItem>
            <TestGroupsOr responsive={{ '@m768': 'tablet' }} nomark>
              <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.groups.or')}} sectionend />
            </TestGroupsOr>
            <ListItem nomark>
              <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('abtest.groups.experiment.title')}} />
              <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.groups.experiment.description')}} sectionend />
            </ListItem>
          </TestGroupList>
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.outcome.title')}} />
          <ExperimentOutcome>+100% ~ 200%</ExperimentOutcome>
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.outcome.description')}} indent />
          <ExampleCover space="noWrap">
            <ExampleCoverImg src={wineBoiledClamsRecommend} responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} layout="responsive" alt={t('abtest.groups.cover')} />
          </ExampleCover>
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.dig.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.dig.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.impact.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.impact.description')}} indent />
        </Section>
        <Section isgroupend>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.learned.title')}} />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('abtest.learned.data.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.learned.data.description')}} indent following />
          <ContentList>
            <ContentListItem square dangerouslySetInnerHTML={{__html: t('abtest.learned.data.items.first')}} />
            <ContentListItem square dangerouslySetInnerHTML={{__html: t('abtest.learned.data.items.second')}} />
          </ContentList>
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('abtest.learned.tag.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.learned.tag.description')}} indent />
        </Section>
      </Container>
    </>
  );
}
