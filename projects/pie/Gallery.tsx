import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { styled } from 'stitches.config';

import { Section, ContentTitle, Paragraph } from '@components/contentStyles';
import { GalleryList, GalleryItem } from '@projects/gallery';

import tabBarDark from '@public/projects/pie/tabBarDark.jpg';

const TabBarRescue = styled('img', {
  width: '100%',
  minWidth: '288px',
  maxWidth: '395px',
  marginBottom: '$16'
});

const PieGalleryList = styled(GalleryList, {
  variants: {
    grid: {
      tablet: {
        grid: `"clocking ." 60px
               "clocking forms" auto
               "stats forms" 60px
               "stats formsnew" auto
               "settings formsnew" 60px
               "settings ." auto / 1fr 1fr`,
        rowGap: '60px'
      }
    }
  }
});

const PieGalleryItem = styled(GalleryItem, {
  variants: {
    item: {
      clocking: {
        gridArea: 'clocking'
      },
      forms: {
        gridArea: 'forms'
      },
      stats: {
        gridArea: 'stats'
      },
      formsnew: {
        gridArea: 'formsnew'
      },
      settings: {
        gridArea: 'settings'
      }
    }
  }
});

const PieScreenshotImg = styled(Image, {
  position: 'relative',
  zIndex: 1,
  borderRadius: '0 0 12px 12px'
});

export default function Gallery() {
  const { t } = useTranslation('pie');

  const screenshotClocking = '/projects/pie/clockingNone.webp';
  const screenshotForms = '/projects/pie/formsConfirmApply.webp';
  const screenshotStats = '/projects/pie/statsAnnualThisYear.webp';
  const screenshotFormsNew = '/projects/pie/formsNew.webp';
  const screenshotSettings = '/projects/pie/preference.webp';

  return(
    <>
      <Section>
        <ContentTitle purpose="section" scheme="mono" dangerouslySetInnerHTML={{__html: t('gallery.title')}} />
        <ContentTitle purpose="paragraph" scheme="mono">Tab Bar</ContentTitle>
        <TabBarRescue src={tabBarDark.src} loading="lazy" alt={t('gallery.tabBar')} />
        <ContentTitle purpose="paragraph" scheme="mono" dangerouslySetInnerHTML={{__html: t('gallery.selected')}} />
        <PieGalleryList responsive={{ '@m768': 'tablet' }} grid={{ '@m768': 'tablet' }}>
          <PieGalleryItem item={{ '@m768': 'clocking' }} nomark>
            <PieScreenshotImg src={screenshotClocking}
              layout="responsive"
              width={256}
              height={455}
              alt=""
              quality={100}
              loading="lazy"
            />
          </PieGalleryItem>
          <PieGalleryItem item={{ '@m768': 'forms' }} nomark>
            <PieScreenshotImg src={screenshotForms}
              layout="responsive"
              width={256}
              height={455}
              alt=""
              quality={100}
              loading="lazy"
            />
          </PieGalleryItem>
          <PieGalleryItem item={{ '@m768': 'stats' }} nomark>
            <PieScreenshotImg src={screenshotStats}
              layout="responsive"
              width={256}
              height={455}
              alt=""
              quality={100}
              loading="lazy"
            />
          </PieGalleryItem>
          <PieGalleryItem item={{ '@m768': 'formsnew' }} nomark>
            <PieScreenshotImg src={screenshotFormsNew}
              layout="responsive"
              width={256}
              height={455}
              alt=""
              quality={100}
              loading="lazy"
            />
          </PieGalleryItem>
          <PieGalleryItem item={{ '@m768': 'settings' }} nomark>
            <PieScreenshotImg src={screenshotSettings}
              layout="responsive"
              width={256}
              height={455}
              alt=""
              quality={100}
              loading="lazy"
            />
          </PieGalleryItem>
        </PieGalleryList>
      </Section>
    </>
  )
}
