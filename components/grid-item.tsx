import React, { ReactNode } from 'react';

import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

type GridItemProps = {
  children: ReactNode;
  href: string;
  title: string;
  thumbnail: StaticImageData;
};

export const GridItem = ({
  children,
  href,
  title,
  thumbnail
}: GridItemProps) => {
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>;
};

type WorkGridItemProps = {
  children: ReactNode;
  id: string;
  title: string;
  thumbnail: string;
};

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail
}: WorkGridItemProps) => (
  <Box w="100%" textAlign="center">
    <motion.div whileHover={{ scale: 1.1 }}>
      <NextLink href={`/works/${id}`} passHref>
        <LinkBox cursor="pointer">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            borderRadius={12}
            position="relative"
          >
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              width="460px"
              height="260px"
            />
          </Box>
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </motion.div>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
    `}
  />
);
