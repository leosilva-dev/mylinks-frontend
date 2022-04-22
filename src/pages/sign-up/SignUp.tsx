import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Feedback } from '../../shared/services/feedback/Feedback';
import { useAuthContext } from '../../shared/hooks/useAuthContext';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { handleSignUp } = useAuthContext();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const valide = () => {
    if (/^[a-zA-Z]+$/.test(username) === false) {
      Feedback('O campo username deve conter apenas letras', 'error');
      return false;
    }
    if (password !== confirmPassword) {
      Feedback('As senhas precisam ser iguais', 'error');
      return false;
    }
    if (password.length < 3) {
      Feedback('A senha precisa conter pelo menos três caracteres', 'error');
      return false;
    }
    if (!email.includes('@')) {
      Feedback('Informe um e-mail válido', 'error');
      return false;
    }
    if (!username.length) {
      Feedback('O campo username é obrigatório', 'error');
      return false;
    }
    if (!name.length) {
      Feedback('O campo nome é obrigatório', 'error');
      return false;
    }
    Feedback('Criando sua conta...', 'info');
    return true;
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  const signUp = () => {
    const userIsValid = valide();
    if (userIsValid) {
      handleSignUp({
        name,
        username,
        email,
        password,
      }).then(() => {
        goToProfile();
      });
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Crie a sua conta agora ✌️</Heading>
        </Stack>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          rounded={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Nome</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <FormControl id="password-confirm">
              <FormLabel>Confirme a sua senha</FormLabel>
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={() => signUp()}
                >
                  Cadastrar
                </Button>
                <Button
                  bg={useColorModeValue('whiteAlpha.100', 'gray.700')}
                  color={'blue.500'}
                  border={'1px solid'}
                  _hover={{
                    bg: useColorModeValue('whiteAlpha.100', 'gray.700'),
                  }}
                  onClick={() => navigate('/entrar')}
                >
                  Já possui conta? Entrar
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
