import React from 'react';
import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Center>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="4xl"
          bgGradient="linear(to-b, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="24px" mt={3} mb={2}>
          Página não encontrada
        </Text>
        <Text color={'gray.500'} mb={6}>
          A página que você está procurando não existe..
        </Text>

        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
          onClick={() => navigate('/home')}
        >
          Voltar para Home
        </Button>
      </Box>
    </Center>
  );
};
