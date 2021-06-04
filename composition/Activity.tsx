import Link from 'next/link';
import { Container } from '../components/layout';
import { Heading, Verb } from '../components/headings';
import { HomeItemsLayout, HomeItemLink, HomeItem, HomeItemDescription } from '../components/home/HomeItems';
import IconHyphen from '../elements/IconHyphen';

function Activity() {
  return(
    <Container responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} isgroupend>
      <Heading position="homeSection">C<small>ommunity</small> A<small>ctivity</small></Heading>
      <HomeItemsLayout as="ul" foractivity={{'@initial': 'mobile', '@m768': 'tablet'}}>
        <HomeItem removeIcon={{ '@m768': true }}>
          <IconHyphen showinmobile={{ '@m768': true }} />
          <Link href="/intersection" passHref>
            <HomeItemLink>
              <Heading position="homeItemName">
                Translate Articles and Websites
              </Heading>
              <HomeItemDescription>
                <Verb>Explore</Verb> search engine optimization and internationalization by translations.
              </HomeItemDescription>
            </HomeItemLink>
          </Link>
          </HomeItem>
        <HomeItem removeIcon={{ '@m768': true }}>
          <IconHyphen showinmobile={{ '@m768': true }} />
          <Link href="/translate-design-process" passHref>
            <HomeItemLink>
              <Heading position="homeItemName">
                Translate “Design Process for Pros”
              </Heading>
              <HomeItemDescription>
                <Verb>Retrospect</Verb> an event gathing 20 designers to translate an e-book.
              </HomeItemDescription>
            </HomeItemLink>
          </Link>
        </HomeItem>
      </HomeItemsLayout>
    </Container>
  );
}

export default Activity;
