import React, { ReactNode } from 'react';

import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { Router } from 'next/router';

import Navbar from '../navbar';

type LayoutProps = {
  children: ReactNode;
  router: Router;
};

const Layout = ({ children, router }: LayoutProps) => {
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
