import React from 'react';
import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react';

interface ILinkPreviewProps {
  title: string;
  url: string;
}
export const LinkPreview: React.FC<ILinkPreviewProps> = ({ title, url }) => {
  return (
    <Link href={url} isExternal _hover={{ textDecoration: 'none' }}>
      <Box
        width={'full'}
        boxShadow={'base'}
        bg={useColorModeValue('whiteAlpha.100', 'gray.700')}
        _hover={{
          transform: 'translateY(0px) translateX(0px)',
          bg: useColorModeValue('gray.100', 'gray.800'),
          borderColor: useColorModeValue('blue.500', 'blue.600'),
          borderWidth: '2px',
          transition: 'all 0.5s ease',
          textDecoration: 'none',
        }}
        border={'2px'}
        borderColor={useColorModeValue('gray.200', 'gray.600')}
        borderRadius={'base'}
        cursor={'pointer'}
        textAlign="center"
        p={2}
      >
        <Text isTruncated fontSize="large">
          {title}
        </Text>
      </Box>
    </Link>
  );
};
