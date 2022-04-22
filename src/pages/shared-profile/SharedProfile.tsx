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

export const SharedProfile: React.FC = () => {
  const { username } = useParams();

  const [data, setData] = useState<ISharedProfile>();

  useEffect(() => {
    sharedProfileService
      .getSharedProfileByUsername(username as string)
      .then((response) => {
        if (response !== undefined && response.success) {
          setData(response.data);
        }
      });
  }, [username]);

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
                name={data?.user.name}
                size={'lg'}
                bg={'teal.500'}
                color={'white'}
                showBorder
              />
            </Box>
            <Box textAlign={'center'}>
              <Heading color={'gray.500'} fontSize={'2xl'} fontFamily={'body'}>
                {data?.user.name}
              </Heading>
              <Text fontWeight={600} color={'gray.500'} mb={4}>
                {`@${data?.user.username}`}
              </Text>
              <Text fontWeight={600} color={'gray.500'} mb={4}>
                {data?.user.email}
              </Text>
            </Box>
          </Stack>
          <Text
            textAlign={'justify'}
            as="cite"
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {data?.user.bio || ''}
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
