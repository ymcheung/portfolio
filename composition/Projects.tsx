import Link from 'next/link';
import { Container } from '../components/Layout';
import { Heading, Verb } from '../components/Headings';
import { HomeItemsLayout, HomeItemLink, HomeItemContainer, HomeItemImage } from '../components/home/HomeItems';

function Projects() {
  return(
    <Container as="main" responsive={{'@initial': 'full', '@m992': 'max960', '@m1200': 'max1168'}} hasSibling>
      <Heading as="h2" position="homeSection">P<small>rojects</small></Heading>
      <HomeItemsLayout forProjects={{'@initial': 'mobile'}}>
        <Link href="/pie-clockin" passHref>
          <HomeItemLink forProjects>
            <HomeItemContainer>
              <HomeItemImage src="/home/shot/pie/light.jpg" />
              <figcaption>
                <Heading as="h2" position="homeItemName">
                  <Verb item="pie">Explore</Verb> UI of a Clock-In App
                </Heading>
              </figcaption>
            </HomeItemContainer>
          </HomeItemLink>
        </Link>
        <Link href="/moment" passHref>
          <HomeItemLink forProjects>
            <HomeItemContainer>
              <HomeItemImage src="/home/shot/moment/light.jpg" />
              <figcaption>
                <Heading as="h2" position="homeItemName">
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
