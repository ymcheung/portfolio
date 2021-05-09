import Link from 'next/link';
import { Container } from '../Layout';
import { Heading } from '../Headings';
import IconArrow from '../../elements/IconArrow';
import { HomeItemsLayout, HomeItemLink, HomeItemContainer, HomeItemDescription } from './HomeItems';

function Projects() {
  return(
    <Container as="main" responsive={{'@initial': 'full', '@m992': 'max960', '@m1200': 'max1168'}} hasSibling>
      <Heading as="h2" position="homeSection">P<small>rojects</small></Heading>
      <HomeItemsLayout>
        <Link href="/pie-clockin" passHref>
          <HomeItemLink>
            <HomeItemContainer>
              <Heading as="figcaption" position="homeItem">
                Pie
                <HomeItemDescription>with a clock-in app</HomeItemDescription>
              </Heading>
              <IconArrow wh="sq18" gotoText="上一個" />
            </HomeItemContainer>
          </HomeItemLink>
        </Link>
        <Link href="/moment" passHref>
        <HomeItemLink>
            <HomeItemContainer>
              <Heading as="figcaption" position="homeItem">Moment</Heading>
            </HomeItemContainer>
          </HomeItemLink>
        </Link>
      </HomeItemsLayout>
    </Container>
  );
}

export default Projects;
