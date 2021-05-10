import Link from 'next/link';
import { Container } from '../components/Layout';
import { Heading, Verb } from '../components/Headings';
import { HomeItemsLayout, HomeItemLink, HomeItemContainer, HomeItemDescription } from '../components/home/HomeItems';

function Projects() {
  return(
    <Container as="main" responsive={{'@initial': 'full', '@m992': 'max960', '@m1200': 'max1168'}} hasSibling>
      <Heading as="h2" position="homeSection">P<small>rojects</small></Heading>
      <HomeItemsLayout>
        <Link href="/pie-clockin" passHref>
          <HomeItemLink hasSibling>
            <HomeItemContainer>
              <figcaption>
                <Heading as="h2" position="homeItem">
                  <Verb item="pie">Explore</Verb> UI of a Clock-In App
                </Heading>
                <HomeItemDescription>Pie.Today</HomeItemDescription>
              </figcaption>
            </HomeItemContainer>
          </HomeItemLink>
        </Link>
        <Link href="/moment" passHref>
          <HomeItemLink>
            <HomeItemContainer>
              <figcaption>
                <Heading as="h2" position="homeItem">
                  <Verb item="moment">Explore</Verb> the moment when hearing a song in the movies/dramas
                </Heading>
              </figcaption>
            </HomeItemContainer>
          </HomeItemLink>
        </Link>
      </HomeItemsLayout>
    </Container>
  );
}

export default Projects;
