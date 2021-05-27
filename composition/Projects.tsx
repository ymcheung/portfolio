import Link from 'next/link';
import { Container } from '../components/layout';
import { Heading, Verb } from '../components/headings';
import { HomeItemsLayout, HomeItemLink, HomeItemContainer, HomeItemCover, HomeItemImage } from '../components/home/HomeItems';

function Projects() {
  return(
    <Container as="main" responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} hassibling>
      <Heading as="h2" position="homeSection">P<small>rojects</small></Heading>
      <HomeItemsLayout forProjects={{'@initial': 'mobile', '@m768': 'tablet'}}>
        <Link href="/pie-clockin" passHref>
          <HomeItemLink forProjects>
            <HomeItemContainer>
              <HomeItemCover>
                <HomeItemImage src="/home/shot/pie/light.jpg" alt="Clock-In Feature of Pie: a Clock-In Web App" />
              </HomeItemCover>
              <figcaption>
                <Heading as="h2" position="homeItemName">
                  <Verb item="pie">Explore</Verb> UI of a Clock-In Web App
                </Heading>
              </figcaption>
            </HomeItemContainer>
          </HomeItemLink>
        </Link>
        <Link href="/moment" passHref>
          <HomeItemLink forProjects>
            <HomeItemContainer>
            <HomeItemCover>
              <HomeItemImage src="/home/shot/moment/light.jpg" alt="Moment" />
            </HomeItemCover>
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
