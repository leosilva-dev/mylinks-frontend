import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Link,
} from '@chakra-ui/react';
import { useProfileContext } from '../../shared/hooks/useProfileContext';
import { LinksListPreview } from '../../shared/components/links/preview/LinksListPreview';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const ProfileResume: React.FC = () => {
  const { name, username, email, bio, links } = useProfileContext();

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderTopRadius={10}
      boxShadow={'xs'}
      h="100vh"
      p={5}
    >
      <Box>
        <Heading
          color={useColorModeValue('gray.700', 'gray.400')}
          size="md"
          as="h3"
        >
          Perfil preview
        </Heading>

        <Link
          isExternal
          href={`/@/${username}`}
          _hover={{ textDecoration: 'none' }}
        >
          <Button
            rightIcon={<ExternalLinkIcon />}
            colorScheme="blue"
            variant="ghost"
          >
            Ver perfil
          </Button>
        </Link>
      </Box>
      <Box py={5}>
        <Box textAlign={'center'}>
          <Stack align={'center'}>
            <Box>
              <Avatar name={`${name}`} size={'lg'} bg={'teal.500'} showBorder />
            </Box>
            <Box textAlign={'center'}>
              <Heading color={'gray.500'} fontSize={'2xl'} fontFamily={'body'}>
                {`${name}`}
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
            {bio || ''}
          </Text>
        </Box>
      </Box>
      <Stack align="center" marginTop={10}>
        <Stack width="80">
          <LinksListPreview
            links={links.filter((link) => link.enabled === true)}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
