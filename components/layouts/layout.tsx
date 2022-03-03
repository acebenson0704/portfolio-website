import React, { ReactNode } from 'react';

import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Navbar from '../navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Taso - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.lg" pt={16}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
