import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { styled } from '../../stitches.config';

import { Container, ListItem } from '../../components/layout';
import { ContentTitle, Paragraph, GraphCaption } from '../../components/contentStyles';
import { GalleryList, GalleryItem } from '../gallery';

const screenshotClocking = '/projects/pie/clockingNone.webp';
const screenshotForms = '/projects/pie/formsConfirmApply.webp';
const screenshotStats = '/projects/pie/statsAnnualThisYear.webp';
const screenshotFormsNew = '/projects/pie/formsNew.webp';
const screenshotSettings = '/projects/pie/preference.webp';

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

  return(
    <Container responsive={{'@m768': 'max640'}}>
      <ContentTitle purpose="section" scheme="mono" dangerouslySetInnerHTML={{__html: t('gallery.title')}} />
      <PieGalleryList responsive={{ '@m768': 'tablet' }} grid={{ '@m768': 'tablet' }}>
        <PieGalleryItem item={{ '@m768': 'clocking' }} nomark>
          <PieScreenshotImg src={screenshotClocking} width={288} height={497} alt="" loading="lazy" />
        </PieGalleryItem>
        <PieGalleryItem item={{ '@m768': 'forms' }} nomark>
          <PieScreenshotImg src={screenshotForms} width={288} height={497} alt="" loading="lazy" />
        </PieGalleryItem>
        <PieGalleryItem item={{ '@m768': 'stats' }} nomark>
          <PieScreenshotImg src={screenshotStats} width={288} height={497} alt="" loading="lazy" />
        </PieGalleryItem>
        <PieGalleryItem item={{ '@m768': 'formsnew' }} nomark>
          <PieScreenshotImg src={screenshotFormsNew} width={288} height={497} alt="" loading="lazy" />
        </PieGalleryItem>
        <PieGalleryItem item={{ '@m768': 'settings' }} nomark>
          <PieScreenshotImg src={screenshotSettings} width={288} height={497} alt="" loading="lazy" />
        </PieGalleryItem>
      </PieGalleryList>
      <ContentTitle purpose="section" scheme="mono" dangerouslySetInnerHTML={{__html: t('prototype.title')}} />
      <Paragraph indent scheme="mono" dangerouslySetInnerHTML={{__html: t('prototype.description')}} />
    </Container>
  )
}
