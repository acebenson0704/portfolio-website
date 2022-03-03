import type { NextPage } from 'next';

import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
  useColorModeValue,
  chakra,
  Image
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';

import ArticleLayout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraphy';
import { BioSection, BioYear } from '../components/bio';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Home: NextPage = () => {
  return (
    <ArticleLayout>
      <Container maxW="container.lg">
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          my={12}
        >
          <Text fontSize={['2xl', '4xl', '6xl']} align="center">
            Hello, I&apos;m a developer in Taiwan!
          </Text>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" textAlign="center">
              Taso Chia-Cheng
            </Heading>
            <Text mb={{ base: 0, md: 12 }} fontSize="xl" align="center">
              Computer Vision / Deep Learning / Web Developement
            </Text>
            <Section>
              <Paragraph>
                My name is Tsao chia-cheng, a student in Taiwan. I&apos;m
                currently studying at National Tsin Hua University to gain my
                master&apos;s degree in Computer Science.
              </Paragraph>
              <Paragraph>
                I specialize in Computer Vision, such as Image Recognition by
                Deep Learning or 3D Graphic Processing. Also, Web Developement
                is my habit. Solving real-life problem give me a sense of
                accomplishment.
              </Paragraph>
            </Section>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="236px"
              h="295px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/photo.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            As metioned above, My work is mainly about Computer Vision. Check my
            portfolio below!
          </Paragraph>
          <Center my={4}>
            <NextLink href="/works" scroll={false} passHref>
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
            Graduated from National Tsin Hua University of with a bachelor&apos;s
            degree in Interdisciplinary Program of Eletrical Engineering and
            Computer Science.
          </BioSection>
        </Section>
      </Container>
    </ArticleLayout>
  );
};

export default Home;
