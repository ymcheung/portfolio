import Image from 'next/image';
import { styled } from 'stitches.config';
import { GalleryList, GalleryItem } from '@projects/gallery';

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

const NuomiScreenshotImg = styled(Image, {
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
        <NuomiScreenshotImg src={screenshotNuomiAll} 
            layout="responsive"
            width={256}
            height={455}
            quality={100}
            loading="lazy"
            alt={galleryItemAlt.all}
          />
      </NuomiGalleryItem>
      <NuomiGalleryItem item={{ '@m768': 'detail' }} responsive={{ '@m768': 'tablet' }} nomark>
        <NuomiScreenshotImg src={screenshotDetail} 
            layout="responsive"
            width={256}
            height={455}
            quality={100}
            loading="lazy"
            alt={galleryItemAlt.detail}
          />
      </NuomiGalleryItem>
      <NuomiGalleryItem item={{ '@m768': 'course' }} responsive={{ '@m768': 'tablet' }} nomark>
        <NuomiScreenshotImg src={screenshotCourse} 
            layout="responsive"
            width={256}
            height={455}
            quality={100}
            loading="lazy"
            alt={galleryItemAlt.course}
          />
      </NuomiGalleryItem>
    </NuomiGalleryList>
  );
};
