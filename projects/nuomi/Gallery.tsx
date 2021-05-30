import { styled } from '../../stitches.config';

const screenshotCourse = '/projects/nuomi/course-mobile.jpg';
const screenshotNuomiAll = '/projects/nuomi/nuomiall-mobile.jpg';
const screenshotDetail = '/projects/nuomi/detail-mobile.jpg';

const GalleryList = styled('ul', {
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '256px',
  gridGap: '0 60px',
  overflowX: 'auto',
  margin: '0 -16px',
  padding: '0 32px $8',
  backdropFilter: 'blur(4px)',

  variants: {
    responsive: {
      tablet: {
        grid: `"all ." 120px
               "all course" auto
               "detail course" 120px
               "detail ." auto / 1fr 1fr`,
        gridAutoFlow: 'row',
        gridAutoColumns: 'unset',
        backgroundColor: 'unset',
        backdropFilter: 'unset'
      }
    }
  }
});

const GalleryItem = styled('li', {
  position: 'relative',
  margin: '0 -24px',
  padding: '0 $8',
  listStyle: 'none',

  '&::before': { 
    fullAbsolute: '',
    zIndex: 0,
    content: `''`,
    backgroundImage: 'linear-gradient(to bottom, transparent 0%, $shadeMockup50 50%, transparent 100%)'
  },

  variants: {
    responsive: {
      tablet: {
        marginBottom: '24px'
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
  minHeight: '512px',
  position: 'relative',
  zIndex: 1
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
        <NuomiScreenshotImg src={screenshotNuomiAll} alt={galleryItemAlt.all} />
      </GalleryItem>
      <GalleryItem item={{ '@m768': 'detail' }} responsive={{ '@m768': 'tablet' }}>
        <NuomiScreenshotImg src={screenshotDetail} alt={galleryItemAlt.detail} />
      </GalleryItem>
      <GalleryItem item={{ '@m768': 'course' }} responsive={{ '@m768': 'tablet' }}>
        <NuomiScreenshotImg src={screenshotCourse} alt={galleryItemAlt.course} />
      </GalleryItem>
    </GalleryList>
  );
};

export default Gallery;
