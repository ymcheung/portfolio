import { styled } from '../../stitches.config';
import { GalleryList, GalleryItem } from '../gallery';

const screenshotCourse = '/projects/nuomi/course-mobile.jpg';
const screenshotNuomiAll = '/projects/nuomi/nuomiall-mobile.jpg';
const screenshotDetail = '/projects/nuomi/detail-mobile.jpg';

const NuomiGalleryList = styled(GalleryList, {
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

const NuomiGalleryItem = styled(GalleryItem, {
  variants: {
    item: {
      all: {
        gridArea: 'all'
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

const NuomiScreenshotImg = styled('img', {
  maxWidth: '100%',
  minHeight: '455px',
  position: 'relative',
  zIndex: 1,
  borderRadius: '0 0 12px 12px'
});

type GalleryProps = {
  readonly galleryItemAlt: {
    all: string;
    detail: string;
    course: string;
  }
}

export default function Gallery({ galleryItemAlt }: GalleryProps) {
  return(
    <NuomiGalleryList responsive={{ '@m768': 'tablet' }} grid={{ '@m768': 'tablet' }}>
      <NuomiGalleryItem item={{ '@m768': 'all' }} responsive={{ '@m768': 'tablet' }} nomark>
        <NuomiScreenshotImg src={screenshotNuomiAll} alt={galleryItemAlt.all} loading="lazy" />
      </NuomiGalleryItem>
      <NuomiGalleryItem item={{ '@m768': 'detail' }} responsive={{ '@m768': 'tablet' }} nomark>
        <NuomiScreenshotImg src={screenshotDetail} alt={galleryItemAlt.detail} loading="lazy" />
      </NuomiGalleryItem>
      <NuomiGalleryItem item={{ '@m768': 'course' }} responsive={{ '@m768': 'tablet' }} nomark>
        <NuomiScreenshotImg src={screenshotCourse} alt={galleryItemAlt.course} loading="lazy" />
      </NuomiGalleryItem>
    </NuomiGalleryList>
  );
};
