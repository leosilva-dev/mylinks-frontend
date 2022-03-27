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
import { BiUserCircle } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { authenticated, handleLogout, isLoading } = useAuthContext();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Button
            onClick={toggleColorMode}
            bg={'transparent'}
            _hover={{ bg: 'transparent' }}
            _focus={{ bg: 'transparent' }}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          {authenticated && !isLoading && (
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
                  <IconButton
                    variant="ghost"
                    aria-label="User menu"
                    fontSize="3xl"
                    icon={<BiUserCircle />}
                  />
                </Button>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => navigate('/home')}>Home</MenuItem>
                <MenuItem onClick={() => navigate('/profile')}>Perfil</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
