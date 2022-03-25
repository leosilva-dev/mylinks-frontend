import React from 'react';
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  HStack,
  IconButton,
  Icon,
  Text,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { authenticated, firstName, lastName, handleLogout, isLoading } =
    useUserContext();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Button
            onClick={() => navigate('/')}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('primary', 'primary'),
              borderColor: 'primary',
              color: useColorModeValue('primary', 'primary'),
            }}
          >
            <Text
              color={'green.400'}
              fontFamily={'monospace'}
              fontSize={'large'}
              _hover={{
                color: 'green.500',
                transform: 'translateY(-2px)',
                cursor: 'pointer',
              }}
            >
              <Icon as={HiOutlineLightningBolt} />
              MyLinks <br />
            </Text>
          </Button>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          ></HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          {authenticated && !isLoading ? (
            <Menu>
              <MenuButton>
                <Button
                  variant={'Link'}
                  bg={'primary'}
                  size={'sm'}
                  mr={4}
                  color={useColorModeValue('primary', 'primary')}
                  rightIcon={<ChevronDownIcon />}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('primary', 'primary'),
                    borderColor: 'primary',
                    color: useColorModeValue('primary', 'primary'),
                  }}
                >
                  {`${firstName} ${lastName}`}
                </Button>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => navigate('/home')}>Home</MenuItem>
                <MenuItem onClick={() => navigate('/profile')}>Perfil</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              variant={'Link'}
              bg={'primary'}
              size={'sm'}
              mr={4}
              color={useColorModeValue('primary', 'primary')}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('primary', 'primary'),
                borderColor: 'primary',
                color: useColorModeValue('primary', 'primary'),
              }}
              onClick={() => navigate('/entrar')}
            >
              Entrar
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
