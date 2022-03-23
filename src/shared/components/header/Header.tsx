import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

interface IMenuLinks {
  name: string;
  route: string;
}
const MenuLinks: IMenuLinks[] = [
  { name: "Home", route: "/home" },
  { name: "Perfil", route: "/profile" },
];

const NavLink = (menulink: IMenuLinks) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("primary", "primary"),
        borderColor: "primary",
        color: useColorModeValue("primary", "primary"),
      }}
      href={menulink.route}
    >
      {menulink.name}
    </Link>
  );
};

export const Header: React.FC = () => {
  const isAuthenticated = true; /* Refactor: get value from userContext */
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link
              href={"/"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("primary", "primary"),
                borderColor: "primary",
                color: useColorModeValue("primary", "primary"),
              }}
            >
              <Box fontWeight={"bold"} fontSize={18} fontFamily={"monospace"}>
                MyLinks
              </Box>
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {isAuthenticated
                ? MenuLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      name={link.name}
                      route={link.route}
                    />
                  ))
                : null}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {isAuthenticated ? (
              <Menu>
                <MenuButton>
                  <Button
                    variant={"Link"}
                    bg={"primary"}
                    size={"sm"}
                    mr={4}
                    color={useColorModeValue("primary", "primary")}
                    rightIcon={<ChevronDownIcon />}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("primary", "primary"),
                      borderColor: "primary",
                      color: useColorModeValue("primary", "primary"),
                    }}
                  >
                    Leonardo Silva
                  </Button>
                </MenuButton>
                <MenuList>
                  <MenuItem>Preferências</MenuItem>
                  <MenuItem>Perfil</MenuItem>
                  <MenuDivider />
                  <MenuItem>Sair</MenuItem>
                </MenuList>
              </Menu>
            ) : null}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {MenuLinks.map((link) => (
                <NavLink key={link.name} name={link.name} route={link.route} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
