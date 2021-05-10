import Link from 'next/link';
import { Container } from '../components/Layout';
import { Heading, Verb } from '../components/Headings';
import { HomeItemsLayout, HomeItemLink, HomeItemContainer, HomeItemDescription } from '../components/home/HomeItems';

function Activity() {
  return(
    <Container responsive={{'@initial': 'full', '@m992': 'max960', '@m1200': 'max1168'}} isGroupEnd>
      <Heading as="h2" position="homeSection">C<small>ommunity</small> A<small>ctivity</small></Heading>
      <HomeItemsLayout>
        <Link href="/intersectino" passHref>
          <HomeItemLink hasSibling>
            <Heading as="h2" position="homeItem">
              Translate Articles and Websites
            </Heading>
            <HomeItemDescription>
              <Verb>Explore</Verb> search engine optimization and internationalization by translating
            </HomeItemDescription>
          </HomeItemLink>
        </Link>
        <Link href="/translate-design-process" passHref>
          <HomeItemLink>
            <Heading as="h2" position="homeItem">
              Design Process for Pros
            </Heading>
            <HomeItemDescription>
              <Verb>Retrospect</Verb> an event gathing 20 designers to translate an e-book
            </HomeItemDescription>
          </HomeItemLink>
        </Link>
      </HomeItemsLayout>
    </Container>
  );
}

export default Activity;
