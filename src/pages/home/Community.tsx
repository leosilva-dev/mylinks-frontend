import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Community: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <VStack>
          <Stack spacing={0} align={'center'}>
            <Heading>Participe da comunidade hoje mesmo</Heading>
            <Text>
              Pessoas de todo o mundo tem usado o MyLinks em suas estratégias de
              marketing
            </Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Button
              marginTop={5}
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
                transform: 'translateY(-2px)',
              }}
              onClick={() => navigate('/profile')}
            >
              Comece agora!
            </Button>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};
