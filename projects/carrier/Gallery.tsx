import Image from 'next/image';
import { styled } from 'stitches.config';

import { GalleryList, GalleryItem } from '@projects/gallery';

const CarrierGalleryList = styled(GalleryList, {
  variants: {
    grid: {
      tablet: {
        grid: `"delayed ." 60px
               "delayed furry" auto
               ". furry" 60px / 1fr 1fr`,
        rowGap: '60px'
      }
    }
  }
});

const CarrierGalleryItem = styled(GalleryItem, {
  variants: {
    item: {
      delayed: {
        gridArea: 'delayed'
      },
      furry: {
        gridArea: 'furry'
      },
      reserve: {
        gridArea: 'reserve'
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
  const screenshotDelayedDetail = '/projects/carrier/gallery/homeShowDelayed.webp';
  const screenshotFurryShow = '/projects/carrier/gallery/furryShowOnTime.webp';

  return(
    <CarrierGalleryList responsive={{ '@m768': 'tablet' }} grid={{ '@m768': 'tablet' }}>
      <CarrierGalleryItem item={{ '@m768': 'delayed' }} nomark>
        <PieScreenshotImg src={screenshotDelayedDetail}
          layout="responsive"
          width={256}
          height={554}
          alt=""
          quality={100}
          loading="lazy"
        />
      </CarrierGalleryItem>
      <CarrierGalleryItem item={{ '@m768': 'furry' }} nomark>
        <PieScreenshotImg src={screenshotFurryShow}
          layout="responsive"
          width={256}
          height={554}
          alt=""
          quality={100}
          loading="lazy"
        />
      </CarrierGalleryItem>
    </CarrierGalleryList>
  )
}
