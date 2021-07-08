import Link from 'next/link';
import { Container, ListItem } from '../components/layout';
import { Heading } from '../components/headings';
import { HomeItemsLayout, HomeItemLink, HomeItemDescription } from './HomeItems';
import IconHyphen from '../home/IconHyphen';

export default function Activity() {
  return(
    <Container responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} isgroupend>
      <Heading position="homeSection">Community Activity</Heading>
      <HomeItemsLayout responsive={{'@initial': 'mobile', '@m768': 'tablet'}}>
        <ListItem nomark>
          <Link href="/intersection" passHref>
            <HomeItemLink asactivity={{ '@initial': 'mobile', '@m768': 'tablet' }}>
              <IconHyphen hideintablet={{ '@m768': true }} />
              <Heading position="homeItemName">
                Translate Articles and Websites
              </Heading>
              <HomeItemDescription>
                Explore search engine optimization and internationalization by translations.
              </HomeItemDescription>
            </HomeItemLink>
          </Link>
          </ListItem>
        <ListItem nomark>
          <Link href="/translate-design-process" passHref>
            <HomeItemLink asactivity={{ '@initial': 'mobile', '@m768': 'tablet' }}>
              <IconHyphen hideintablet={{ '@m768': true }} />
              <Heading position="homeItemName">
                Translate “Design Process for Pros”
              </Heading>
              <HomeItemDescription>
                Retrospect an event gathing 20 designers to translate an e-book.
              </HomeItemDescription>
            </HomeItemLink>
          </Link>
        </ListItem>
      </HomeItemsLayout>
    </Container>
  );
}
