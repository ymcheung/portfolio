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
  padding: '0 $16'
});

const ImageMobile = styled('img', {
  width: '100%',
  borderRadius: '12px'
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