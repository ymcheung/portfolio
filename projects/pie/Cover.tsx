import { styled } from '../../stitches.config';

const Wrap = styled('header', {
  position: 'fixed',
  top: '36px',
  right: 0,
  left: 0,
  zIndex: 0
});

const Device = styled('figure', {
  width: '288px',
  position: 'relative',
  margin: '0 auto',
  padding: '0 $16',
  
  '&::before': {
    fullAbsolute: '',
    zIndex: 0,
    content: `''`,
    backgroundImage: 'linear-gradient(to bottom, transparent 0%, $shadeMockup50 50%, transparent 100%)'
  }
});

const ImageMobile = styled('img', {
  width: '100%',
  position: 'relative',
  zIndex: 1,
  borderRadius: '12px',
});

export default function Cover() {
  return(
    <Wrap>
      <Device>
        <ImageMobile src="/projects/pie/cover-mobile.jpg" alt="" />
      </Device>
    </Wrap>
  )
}