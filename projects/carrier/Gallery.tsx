import { useRouter } from 'next/router';
import Image from 'next/image';
import { styled } from 'stitches.config';

import { GalleryList, GalleryItem } from '@projects/gallery';

const CarrierGalleryList = styled(GalleryList, {
  variants: {
    grid: {
      tablet: {
        grid: `"delayed ." 60px
               "delayed appoint" auto
               ". appoint" 60px / 1fr 1fr`,
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
      appoint: {
        gridArea: 'appoint'
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
  borderRadius: '12px'
});

export default function Gallery() {
  const router = useRouter();
  const ImageLang = router.locale === 'en' ? 'en' : 'tw';

  const screenshotDelayedDetail = `/projects/carrier/gallery/${ImageLang}/homeShowDelayed.webp`;
  const screenshotAppoint = `/projects/carrier/gallery/${ImageLang}/appoint.webp`;

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
      <CarrierGalleryItem item={{ '@m768': 'appoint' }} nomark>
        <PieScreenshotImg src={screenshotAppoint}
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
