import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Container } from '../components/layout';
import { Heading, Verb } from '../components/headings';
import { HomeItemsLayout, HomeItemLink, HomeItemContainer, HomeItemImage } from '../home/HomeItems';

function Projects() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return(
    <Container as="main" responsive={{ '@m992': 'max960', '@m1200': 'max1168' }} hassibling>
      <Heading position="homeSection">P<small>rojects</small></Heading>
      <HomeItemsLayout forprojects={{'@initial': 'mobile', '@m768': 'tablet'}}>
        <Link href="/pie-clockin" passHref>
          <HomeItemLink forprojects>
            <HomeItemContainer>
              <HomeItemImage src={`/home/shot/pie/${theme}.jpg`} width={288} height={288} alt="Preview Pie: A Clock-In Web App" />
              <figcaption>
                <Heading position="homeItemName">
                  <Verb item="pie">Explore</Verb> UI of a Clock-In Web App
                </Heading>
              </figcaption>
            </HomeItemContainer>
          </HomeItemLink>
        </Link>
        <Link href="/moment" passHref>
          <HomeItemLink forprojects>
            <HomeItemContainer>
              <HomeItemImage src={`/home/shot/moment/${theme}.jpg`} width={288} height={288} alt="Preview The Moment: Hear a song in the movies/dramas" />
              <figcaption>
                <Heading position="homeItemName">
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
