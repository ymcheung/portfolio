import { styled } from '../../stitches.config';

const screenshotCourse = '/projects/nuomi/course-mobile.jpg';
const screenshotNuomiAll = '/projects/nuomi/nuomiall-mobile.jpg';
const screenshotDetail = '/projects/nuomi/detail-mobile.jpg';

const GalleryList = styled('ul', {
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '288px',
  columnGap: '32px',
  overflowX: 'auto',
  margin: '0 auto',
  padding: '0 $16 $16',

  variants: {
    responsive: {
      tablet: {
        maxWidth: '640px',
        grid: `"all ." 120px
               "all course" auto
               "detail course" 120px
               "detail ." auto / 1fr 1fr`,
        gridAutoFlow: 'row',
        gridAutoColumns: 'unset'
      }
    }
  }
});

const GalleryItem = styled('li', {
  position: 'relative',
  margin: '0 -8px',
  padding: '0 $8',
  listStyle: 'none',

  '&::before': { 
    fullAbsolute: '',
    zIndex: 0,
    content: `''`,
    backgroundImage: 'linear-gradient(to bottom, transparent 0%, hsla($shade600, 0.5) 50%, transparent 92%)'
  },

  variants: {
    responsive: {
      tablet: {
        marginBottom: '$24'
      }
    },

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

function Gallery({ galleryItemAlt }: GalleryProps) {
  return(
    <GalleryList responsive={{ '@m768': 'tablet' }}>
      <GalleryItem item={{ '@m768': 'all' }} responsive={{ '@m768': 'tablet' }}>
        <NuomiScreenshotImg src={screenshotNuomiAll} alt={galleryItemAlt.all} loading="lazy" />
      </GalleryItem>
      <GalleryItem item={{ '@m768': 'detail' }} responsive={{ '@m768': 'tablet' }}>
        <NuomiScreenshotImg src={screenshotDetail} alt={galleryItemAlt.detail} loading="lazy" />
      </GalleryItem>
      <GalleryItem item={{ '@m768': 'course' }} responsive={{ '@m768': 'tablet' }}>
        <NuomiScreenshotImg src={screenshotCourse} alt={galleryItemAlt.course} loading="lazy" />
      </GalleryItem>
    </GalleryList>
  );
};

export default Gallery;
