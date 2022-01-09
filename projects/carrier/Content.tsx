import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import LangSwitch from '@components/LangSwitch';

import { Container } from '@components/layout';
import { ContentTitle, Section, Paragraph, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';

import { ListItem, IconList, IconListItem } from '@components/layout';
import { FeatureList } from '@projects/featured';

import IconArrow from '@elements/IconArrow';
import productivity from '/public/projects/carrier/why/productivity.webp';
import whyMailPreviewEn from '/public/projects/carrier/why/en/mailPreview.webp';
import whyMailPreviewTw from '/public/projects/carrier/why/tw/mailPreview.webp';
import prototypeAppointPreviewEn from '/public/projects/carrier/prototype/en/appointment.webp';
import prototypeAppointPreviewTw from '/public/projects/carrier/prototype/tw/appointment.webp';

// import Gallery from './Gallery';

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

const PrototypeLink = styled('a', {
  display: 'block',
  position: 'relative',
  padding: '$16',
  backgroundColor: 'hsl($shade1500)',
  borderRadius: '24px'
});

const PrototypeAppointCover = styled('figure', {
  margin: 0,
  padding: 0
});

const PrototypeAppointCoverImg = styled(Image, {
  borderRadius: '16px'
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
  const { t, i18n } = useTranslation('carrier');

  const isItalic = i18n.language === 'en';
  const itemSpace = i18n.language === 'en' ? 'normal' : 'wide';

  const whyMailPreview = i18n.language === 'en' ? whyMailPreviewEn : whyMailPreviewTw;

  const prototypeAppointPreview = i18n.language === 'en' ? prototypeAppointPreviewEn : prototypeAppointPreviewTw;

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
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('mvp.title')}} />
          {t<string, ParagraphProps[]>('mvp.paragraphs', { returnObjects: true }).map(({ title, description }, index: number) => (
            <Fragment key={`mvp-description-${index}`}>
              <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: title}} />
              <Paragraph dangerouslySetInnerHTML={{__html: description}} indent />
            </Fragment>
          ))}
        </Section>
        <Section id="sectionPrototype" has="postmarks">
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('prototype.title')}} />
          <PrototypeList responsive={{ '@m768': 'tablet' }}>
            <ListItem nomark>
              <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('prototype.appoint.title')}} />
              <Paragraph dangerouslySetInnerHTML={{__html: t('prototype.appoint.description')}} />
              <Link href="https://www.figma.com/proto/L60FGYm0zgyJNTPHF64lEn/carrier-express?page-id=247%3A286&node-id=551%3A1280&viewport=295%2C48%2C0.63&scaling=scale-down&starting-point-node-id=551%3A1280&show-proto-sidebar=1" passHref>
                <PrototypeLink target="_blank" rel="noopener">
                  <PrototypeAppointCover>
                    <PrototypeAppointCoverImg src={prototypeAppointPreview} layout="responsive" alt={t('prototype.appoint.alt')} />
                  </PrototypeAppointCover>
                  <IconArrow position="prototype" purpose="external" background="carrierPrototype" gotoText={t('prototype.appoint.title')} />
                </PrototypeLink>
              </Link>
            </ListItem>
          </PrototypeList>
        </Section>
        <Section isgroupend>
          <PostMarksHr />
          <ParagraphPostmark dangerouslySetInnerHTML={{__html: t('postmark.description')}} />
        </Section>
      </Container>
    </>
  );
}
