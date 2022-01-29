import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import LangSwitch from '@components/LangSwitch';

import { Container } from '@components/layout';
import { ContentTitle, Section, Paragraph, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';

import { ListItem } from '@components/layout';
import wineBoiledClamsCover from '/public/projects/icook/wineBoiledClamsCover.webp';
import wineBoiledClamsRecommend from '/public/projects/icook/wineBoiledClamsRecommend.webp';
import IconBounce from '@elements/IconBounce';

const TestGroupList = styled('ul', {
  display: 'grid',
  alignItems: 'center',
  columnGap: '$16',
  overflowX: 'auto',
  margin: 0,
  padding: '0 0 $8',

  variants: {
    responsive: {
      mobile: {
        grid: 'auto / 256px 36px 256px'
      },
      tablet: {
        grid: 'auto / 1fr 36px 1fr'
      }
    }
  }
});

const ParagraphImageContainer = styled('figure', {
  marginBottom: '$12',
  padding: 0,

  variants: {
    responsive: {
      mobile: {
        marginX: '$auto',
        maxWidth: '360px'
      },
      tablet: {
        marginX: '$0'
      }
    }
  }
});

const PrototypeList = styled('ul', {
  margin: 0,
  padding: '0 0 $12',

  variants: {
    responsive: {
      tablet: {
        display: 'grid',
        grid: 'auto / auto-flow minmax(280px, 50%) 1fr',
        columnGap: '$16',
        overflowY: 'auto'
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

interface statsProps {
  count: number;
  affix: string;
}

interface ParagraphProps {
  title: string;
  description: string;
}

export default function Content() {
  const { t, i18n } = useTranslation('icook');

  const isItalic = i18n.language === 'en';
  const itemSpace = i18n.language === 'en' ? 'normal' : 'wide';

  return(
    <>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <LangSwitch position="articleStart" responsive={{ '@mHover': 'hover' }} />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.intro.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.intro.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.problem.title')}} />
          <IconBounce />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.problem.description')}} indent />
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
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.groups.description')}} indent />
          <Link href="https://icook.tw/recipes/101777" passHref>
            <ExampleCoverLink target="_blank" rel="noopener">
              <ExampleCover space="withWrap">
                <ExampleCoverImg src={wineBoiledClamsCover} responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} layout="responsive" alt={t('abtest.groups.cover')} />
              </ExampleCover>
            </ExampleCoverLink>
          </Link>
          <TestGroupList responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
            <ListItem nomark>
              <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('abtest.groups.control.title')}} />
              <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.groups.control.description')}} sectionend />
            </ListItem>
            <ListItem nomark>
              <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.groups.or')}} sectionend />
            </ListItem>
            <ListItem nomark>
              <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('abtest.groups.experiment.title')}} />
              <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.groups.experiment.description')}} sectionend />
            </ListItem>
          </TestGroupList>
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.outcome.title')}} />
          <ExperimentOutcome>≈300%</ExperimentOutcome>
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.outcome.description')}} indent />
          <ExampleCover space="noWrap">
            <ExampleCoverImg src={wineBoiledClamsRecommend} responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} layout="responsive" alt={t('abtest.groups.cover')} />
          </ExampleCover>
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.dig.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.dig.description')}} indent />
        </Section>
        <Section isgroupend>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('abtest.impact.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('abtest.impact.description')}} indent />
        </Section>
      </Container>
    </>
  );
}
