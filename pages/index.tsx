import type { NextPage } from 'next';

import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';

import Section from '../components/section';
import Paragraph from '../components/paragraphy';
import { BioSection, BioYear } from '../components/bio';

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
      >
        <Text align="center">Hello, I&apos;m a developer!</Text>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            AceBenson
          </Heading>
          <p>Computer Vision / Deep Learning / Web</p>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Nothing.</Paragraph>
        <Center my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Center>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Biology
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Pintung, Taiwan.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Graduated from National Tsin Hua University of with a Bachelor's
          degree in Interdisciplinary Program of Eletrical Engineering and
          Computer Science.
        </BioSection>
      </Section>
    </Container>
  );
};

export default Home;
