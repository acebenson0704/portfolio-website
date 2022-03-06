import type { NextPage } from 'next';

import {
  Container,
  Divider,
  Heading,
  Link,
  SimpleGrid
} from '@chakra-ui/react';

import { getWorksData } from '../libs/works';
import ArticleLayout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import Paragraph from '../components/paragraphy';

export async function getStaticProps() {
  const allWorksData = getWorksData();
  return {
    props: {
      allWorksData
    }
  };
}

type allWorksDataProps = {
  allWorksData: [
    {
      id: string;
      title: string;
      category: string;
      abstract: string;
      image: string;
    }
  ];
};

const Works: NextPage<allWorksDataProps> = ({
  allWorksData
}: allWorksDataProps) => {
  return (
    <ArticleLayout title="Wroks">
      <Container maxW="container.lg">
        <Heading as="h2" fontSize={20} my={4}>
          Computer Vision
        </Heading>
        <Divider />
        <Section>
          <Paragraph>
            Computer Vision has been achived with Neural Networks. My lab
            conduct research in image features extraction and geometric
            processing.
          </Paragraph>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {allWorksData
            .filter((data) => data.category === 'Computer Vision')
            .map((data) => {
              return (
                <Section delay={0.1} key={data.id}>
                  <WorkGridItem
                    id={data.id}
                    title={data.title}
                    thumbnail={data.image}
                  >
                    {data.abstract}
                  </WorkGridItem>
                </Section>
              );
            })}
        </SimpleGrid>

        <Heading as="h2" fontSize={20} my={4}>
          Cocos Creator Project
        </Heading>
        <Divider />
        <Section>
          <Paragraph>
            {' '}
            <Link href="https://www.cocos.com/en/creator" target="_blank">
              Cocos Creator
            </Link>{' '}
            is an engine for building amazing games and software that works on
            phones, tablets, PCs, and the web.
          </Paragraph>
          <Paragraph>
            The following projects are Academia and Industry Collaboration,
            which collaborate with BioxiTech and IGS. The backend server and
            game art design are provided by companies. I am responsible for
            building frontend.
          </Paragraph>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {allWorksData
            .filter((data) => data.category === 'Cocos Creator Project')
            .map((data) => {
              return (
                <Section delay={0.2} key={data.id}>
                  <WorkGridItem
                    id={data.id}
                    title={data.title}
                    thumbnail={data.image}
                  >
                    {data.abstract}
                  </WorkGridItem>
                </Section>
              );
            })}
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  );
};

export default Works;
