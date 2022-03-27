import {
  Box,
  useColorModeValue,
  Heading,
  Stack,
  Avatar,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  sharedProfileService,
  ISharedProfile,
} from '../../shared/services/api/shared-profile/SharedProfile';
import { LinksListPreview } from '../../shared/components/links/preview/LinksListPreview';

interface ISharedProfileTypes {
  usernameParam: string;
}

export const SharedProfile: React.FC = () => {
  const { usernameParam } = useParams<keyof ISharedProfileTypes>();

  const [data, setData] = useState<ISharedProfile>();

  useEffect(() => {
    sharedProfileService
      .getSharedProfileByUsername(usernameParam || '')
      .then((response) => {
        if (response.data !== undefined) {
          setData(response.data);
        }
      });
  }, [usernameParam]);

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderTopRadius={10}
      boxShadow={'xs'}
      h="100vh"
      p={5}
    >
      <Box textAlign={'start'}></Box>
      <Box py={5}>
        <Box textAlign={'center'}>
          <Stack align={'center'}>
            <Box>
              <Avatar
                name={data?.title}
                size={'lg'}
                bg={'teal.500'}
                showBorder
              />
            </Box>
            <Box textAlign={'center'}>
              <Heading color={'gray.500'} fontSize={'2xl'} fontFamily={'body'}>
                {data?.title}
              </Heading>
              <Text fontWeight={600} color={'gray.500'} mb={4}>
                {`@${data?.username}`}
              </Text>
              <Text fontWeight={600} color={'gray.500'} mb={4}>
                {data?.email}
              </Text>
            </Box>
          </Stack>
          <Text
            textAlign={'justify'}
            as="cite"
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {data?.bio || ''}
          </Text>
        </Box>
      </Box>
      <Stack align="center" marginTop={10}>
        <Stack width="80">
          <LinksListPreview links={data?.links || []} />
        </Stack>
      </Stack>
    </Box>
  );
};
