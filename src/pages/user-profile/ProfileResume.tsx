import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useUserContext } from '../../shared/hooks/useUserContext';

export const ProfileResume: React.FC = () => {
  const { firstName, lastName, username, email, description } =
    useUserContext();

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      borderRadius={10}
      color="white"
      h="auto"
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
                color={'white'}
                bg={'teal.500'}
                showBorder
              />
            </Box>
            <Box textAlign={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'}>
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
    </Box>
  );
};
