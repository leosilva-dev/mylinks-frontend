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
import { IProfileToUpdate } from '../../shared/services/api/profile/Profile';
import { useNavigate } from 'react-router-dom';

export const ProfileEdit: React.FC = () => {
  const navigate = useNavigate();

  const {
    id,
    name,
    username,
    email,
    bio,
    links,
    defineUserName,
    defineUserEmail,
    defineUserUsername,
    defineUserBio,
    createLink,
    updateProfile,
  } = useProfileContext();

  const handleSave = () => {
    const profileToUpdate: IProfileToUpdate = {
      _id: id,
      name,
      username,
      email,
      bio,
      links,
    };

    updateProfile(profileToUpdate);
  };

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
            <FormControl id="name">
              <FormLabel>Nome</FormLabel>
              <Input
                value={name}
                onChange={(e) => defineUserName(e.target.value)}
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
            <FormControl id="bio">
              <FormLabel>Descrição</FormLabel>
              <Textarea
                placeholder="Escreva um pouco sobre você..."
                value={bio}
                onChange={(e) => defineUserBio(e.target.value)}
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

      <Stack>
        <Button
          bg={'green.400'}
          color={'white'}
          _hover={{
            bg: 'green.500',
          }}
          onClick={() => handleSave()}
        >
          Salvar
        </Button>
        <Button
          bg={'gray.200'}
          color={'gray'}
          _hover={{
            bg: 'gray.300',
          }}
          onClick={() => navigate(0)}
        >
          Descartar alterações
        </Button>
      </Stack>
    </Box>
  );
};
