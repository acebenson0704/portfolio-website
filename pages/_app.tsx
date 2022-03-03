import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import Layout from '../components/layouts/layout';
import Fonts from '../components/fonts';
import theme from '../libs/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
