import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Router } from 'next/router';

type Props = {
  children: ReactNode;
  router: Router;
};

const Layout: NextPage<Props> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AceBenson - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
