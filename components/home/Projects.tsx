import Link from 'next/link';
import { Container } from '../Layout';
import { Heading } from '../Headings';
import { HomeItemsLayout, HomeItemLink } from './HomeItems';

function Projects() {
  return(
    <Container as="main" atHome hasSibling>
      <Heading as="h2" position="homeSection">P<small>rojects</small></Heading>
      <HomeItemsLayout>
        <Link href="/pie-clockin" passHref>
          <HomeItemLink>
            <figure>
              <figcaption>
                <h2>Pie</h2>
              </figcaption>
            </figure>
          </HomeItemLink>
        </Link>
        <Link href="/moment" passHref>
        <HomeItemLink>
            <figure>
              <figcaption>
                <h2>Moment</h2>
              </figcaption>
            </figure>
          </HomeItemLink>
        </Link>
      </HomeItemsLayout>
    </Container>
  );
}

export default Projects;
