import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useProfileContext } from '../../shared/hooks/useProfileContext';
import { LinksListPreview } from './links/LinksListPreview';

export const ProfileResume: React.FC = () => {
  const { firstName, lastName, username, email, description } =
    useProfileContext();

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderTopRadius={10}
      boxShadow={'xs'}
      h="100vh"
      p={5}
    >
      <Box textAlign={'start'}>
        <Heading
          color={useColorModeValue('gray.700', 'gray.400')}
          size="md"
          as="h3"
        >
          Perfil preview
        </Heading>
      </Box>
      <Box py={5}>
        <Box textAlign={'center'}>
          <Stack align={'center'}>
            <Box>
              <Avatar
                name={`${firstName} ${lastName}`}
                size={'lg'}
                bg={'teal.500'}
                showBorder
              />
            </Box>
            <Box textAlign={'center'}>
              <Heading color={'gray.500'} fontSize={'2xl'} fontFamily={'body'}>
                {`${firstName} ${lastName}`}
              </Heading>
              <Text fontWeight={600} color={'gray.500'} mb={4}>
                {`@${username}`}
              </Text>
              <Text fontWeight={600} color={'gray.500'} mb={4}>
                {email}
              </Text>
            </Box>
          </Stack>
          <Text
            textAlign={'justify'}
            as="cite"
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {description || ''}
          </Text>
        </Box>
      </Box>
      <Stack align="center" marginTop={10}>
        <Stack width="80">
          <LinksListPreview />
        </Stack>
      </Stack>
    </Box>
  );
};
