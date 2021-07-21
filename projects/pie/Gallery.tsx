import { useTranslation } from 'next-i18next';
import { styled } from '../../stitches.config';

import { Container, ListItem } from '../../components/layout';
import { ContentTitle, Paragraph, GraphCaption } from '../../components/contentStyles';
import { GalleryList, GalleryItem } from '../gallery';

const PieGalleryList = styled(GalleryList, {
  variants: {
    grid: {
      tablet: {
        grid: `"all ." 120px
               "all course" auto
               "detail course" 120px
               "detail ." auto / 1fr 1fr`
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
      course: {
        gridArea: 'course'
      },
      detail: {
        gridArea: 'detail'
      }
    }
  }
});

export default function Gallery() {
  const { t } = useTranslation('pie');

  return(
    <Container responsive={{'@m768': 'max640'}}>
      <ContentTitle purpose="section" scheme="mono" dangerouslySetInnerHTML={{__html: t('gallery.title')}} />
      <PieGalleryList>
      </PieGalleryList>
    </Container>
  )
}
