import { Container } from '../Layout';
import { Heading } from '../Headings';

function Projects() {
  return(
    <Container as="main" hasSibling>
      <Heading as="h2" position="home">P<small>rojects</small></Heading>
    </Container>
  );
}

export default Projects;
