import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/layouts/layout';
import Fonts from '../components/fonts';
import theme from '../libs/theme';

function MyApp({ Component, pageProps, router }: AppProps) {
  const routerProps = {
    router: router
  };
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout {...routerProps}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
