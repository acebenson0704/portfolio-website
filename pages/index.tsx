import type { NextPage } from 'next';

import { Box, Container, Heading, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6}>
        <Text align="center">Hello, I&apos;m a full-stack developer!</Text>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            AceBenson
          </Heading>
          <p>Digital Craftzman ( Artist / Develper / Designer )</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
