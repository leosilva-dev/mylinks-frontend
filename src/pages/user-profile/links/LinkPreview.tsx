import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

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
        borderRadius={'base'}
        p={2}
        cursor={'pointer'}
        textAlign="center"
      >
        <Text isTruncated fontSize="large">
          {title}
        </Text>
      </Box>
    </Link>
  );
};
