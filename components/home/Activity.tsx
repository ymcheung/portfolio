import { Container } from '../Layout';
import { Heading } from '../Headings';
import { HomeItemsLayout } from './HomeItems';

function Activity() {
  return(
    <Container atHome isGroupEnd>
      <Heading as="h2" position="homeSection">C<small>ommunity</small> A<small>ctivity</small></Heading>
      <HomeItemsLayout>
        <div>555</div>
        <div>666</div>
      </HomeItemsLayout>
    </Container>
  );
}

export default Activity;