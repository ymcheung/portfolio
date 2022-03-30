import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import LangSwitch from '@components/LangSwitch';

import { FullBlock, Container } from '@components/layout';
import { ContentTitle, Section, Paragraph, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';

import { ListItem, IconList, IconListItem } from '@components/layout';
import { FeatureList } from '@projects/featured';
import { PrototypeIframe } from '@elements/prototypeIframe';

import productivity from '@public/projects/carrier/why/productivity.webp';
import whyMailPreviewEn from '@public/projects/carrier/why/en/mailPreview.webp';
import whyMailPreviewTw from '@public/projects/carrier/why/tw/mailPreview.webp';
import flowEn from '@public/projects/carrier/flow/en.webp';
import flowTw from '@public/projects/carrier/flow/tw.webp';

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
    },
   flow: {
      mobile: {
        marginRight: 0,
        marginLeft: 0,
        overflowX: 'scroll'
      },
      desktop: {
        marginRight: '-120px',
        marginLeft: '-120px',
      }
    },
    screendesktop: {
      mobile: {
        marginRight: 0,
        marginLeft: 0,
        overflowX: 'scroll'
      },
      desktop: {
        overflowX: 'hidden',
        textAlign: 'center'
      }
    }
  }
});

const ParagraphImageScreenDesktop = styled('img', {
  maxWidth: '1080px'
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
  const router = useRouter();
  const { t, i18n } = useTranslation('carrier');

  const { resolvedTheme } = useTheme();

  const isItalic = i18n.language === 'en';
  const itemSpace = i18n.language === 'en' ? 'normal' : 'wide';

  const whyMailPreview = i18n.language === 'en' ? whyMailPreviewEn : whyMailPreviewTw;

  return(
    <>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <LangSwitch position="articleStart" responsive={{ '@mHover': 'hover' }} />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('intro.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('intro.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('question.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('question.content')}} purpose="question" italic={isItalic} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('stats.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('stats.description')}} indent />
          <FeatureList space={itemSpace} siblings="hasSiblings">
            <ListItem nomark>
              <ContentTitle featurednumber="normal">63</ContentTitle>
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
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('who.title')}} />
          <Image src="/projects/carrier/minAn.svg" width={192} height={160} alt={t('who.alt')} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('who.description')}} indent />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('who.understanding.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('who.understanding.description')}} indent />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('who.negligence.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('who.negligence.description')}} indent />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('who.incentive.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('who.incentive.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('why.title')}} />
          <Image src={productivity} layout="responsive" quality={92} alt={t('why.coverAlt')} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('why.description.1st')}} indent />
          <ParagraphImageContainer responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
            <Image src={whyMailPreview} layout="responsive" quality={92} alt={t('why.coverAlt')} />
          </ParagraphImageContainer>
          <Paragraph dangerouslySetInnerHTML={{__html: t('why.description.2nd')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('flow.title')}} />
          <ParagraphImageContainer flow={{ '@initial': 'mobile', '@m992': 'desktop' }}>
            <Image src={router.locale === 'en' ? flowEn : flowTw} width={1434} height={410} layout="fixed" alt={t('flow.alt')} />
          </ParagraphImageContainer>
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('mvp.title')}} />
          {t<string, ParagraphProps[]>('mvp.paragraphs', { returnObjects: true }).map(({ title, description }, index: number) => (
            <Fragment key={`mvp-description-${index}`}>
              <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: title}} />
              <Paragraph dangerouslySetInnerHTML={{__html: description}} indent />
            </Fragment>
          ))}
        </Section>
        <Section id="sectionPrototype">
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('prototype.title')}} />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('prototype.appoint.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('prototype.appoint.description')}} indent />
          <PrototypeIframe src="https://www.figma.com/embed?embed_host=ymcheung&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL60FGYm0zgyJNTPHF64lEn%2Fcarrier-express%3Fpage-id%3D247%253A286%26node-id%3D551%253A1280%26viewport%3D295%252C48%252C0.27%26scaling%3Dscale-down%26starting-point-node-id%3D551%253A1280%26show-proto-sidebar%3D1" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} allowFullScreen loading="lazy" />
        </Section>
        <Section isgroupend>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('screenshot.title')}} />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('screenshot.subtitle')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('screenshot.description')}} indent />
        </Section>
      </Container>
      <FullBlock project="carrier" context="section">
        <ParagraphImageContainer screendesktop={{ '@initial': 'mobile', '@m992': 'desktop' }}>
          <ParagraphImageScreenDesktop src={`/projects/carrier/gallery/${router.locale === 'en' ? 'en' : 'tw'}/new${resolvedTheme === 'dark' ? 'Dark' : 'Light'}.webp`} loading="lazy" alt={t('screenshot.alt')} />
        </ParagraphImageContainer>
      </FullBlock>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <Section isgroupend>
          <PostMarksHr />
          <ParagraphPostmark dangerouslySetInnerHTML={{__html: t('postmark.description')}} />
        </Section>
      </Container>
    </>
  );
}
