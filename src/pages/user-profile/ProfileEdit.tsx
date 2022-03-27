import React from 'react';
import {
  Heading,
  Box,
  Stack,
  useColorModeValue,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  InputLeftAddon,
  Button,
} from '@chakra-ui/react';
import { useProfileContext } from '../../shared/hooks/useProfileContext';
import { LinksListEdit } from '../../shared/components/links/edit/LinksListEdit';

export const ProfileEdit: React.FC = () => {
  const {
    firstName,
    lastName,
    username,
    email,
    description,
    defineUserFirstName,
    defineUserLastName,
    defineUserEmail,
    defineUserUsername,
    defineUserDescription,
    createLink,
  } = useProfileContext();

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
          Edição de perfil
        </Heading>
      </Box>
      <Box py={5}>
        <Stack textAlign={'center'} spacing={4}>
          <HStack spacing={4}>
            <FormControl id="first-name">
              <FormLabel>Nome</FormLabel>
              <Input
                value={firstName}
                onChange={(e) => defineUserFirstName(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl id="last-name">
              <FormLabel>Sobrenome</FormLabel>
              <Input
                value={lastName}
                onChange={(e) => defineUserLastName(e.target.value)}
                type="text"
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <InputGroup>
                <InputLeftAddon>@</InputLeftAddon>
                <Input
                  value={username}
                  onChange={(e) => defineUserUsername(e.target.value)}
                  type="text"
                />
              </InputGroup>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => defineUserEmail(e.target.value)}
                type="email"
              />
            </FormControl>
          </HStack>
          <Stack spacing={4}>
            <FormControl id="description">
              <FormLabel>Descrição</FormLabel>
              <Textarea
                placeholder="Escreva um pouco sobre você..."
                value={description}
                onChange={(e) => defineUserDescription(e.target.value)}
              />
            </FormControl>
          </Stack>
        </Stack>
        <Stack marginTop={10}>
          <Box textAlign={'start'}>
            <Heading
              color={useColorModeValue('gray.700', 'gray.400')}
              size="md"
              as="h3"
            >
              Links compartilhados
            </Heading>
          </Box>
          <Stack width="80">
            <Button onClick={createLink}>Novo link</Button>
            <LinksListEdit />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
