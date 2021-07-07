import Link from 'next/link';
import { Container, ListItem } from '../components/layout';
import { Heading, Verb } from '../components/headings';
import { HomeItemsLayout, HomeItemLink } from '../home/HomeItems';

import IconPie from '../elements/IconPie';
import IconMoment from '../elements/IconMoment';
import VerbRedesign from '../elements/VerbRedesign';
import VerbExplore from '../elements/VerbExplore';

export default function Projects() {
  return(
    <Container as="main" responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} hassibling>
      <Heading position="homeSection">Side Projects</Heading>
      <HomeItemsLayout responsive={{'@initial': 'mobile', '@m768': 'tablet'}}>
        <ListItem nomark>
          <Link href="/pie-clockin" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@m768': 'tablet' }}>
              <IconPie />
              <Heading position="homeItemName">
                <Verb>
                  Redesign
                  <VerbRedesign />
                </Verb>
                UI of a Clock-In App
              </Heading>
            </HomeItemLink>
          </Link>
        </ListItem>
        <ListItem nomark>
          <Link href="/moment" passHref>
            <HomeItemLink asproject={{ '@initial': 'mobile', '@m768': 'tablet' }}>
              <IconMoment />
              <Heading position="homeItemName">
                <Verb>
                  Explore
                  <VerbExplore />
                </Verb>
                the moment when hearing a song in the movies/dramas
              </Heading>
            </HomeItemLink>
          </Link>
        </ListItem>
      </HomeItemsLayout>
    </Container>
  );
}
