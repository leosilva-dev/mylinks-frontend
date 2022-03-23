import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SignIn: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Acesse a sua conta</Heading>

          <Text fontSize={"lg"} color={"gray.600"}>
            para aproveitar todas as nossas{" "}
            <Link color={"blue.400"}> funcionalidades</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Lembrar me</Checkbox>
                <Link color={"blue.400"}>Esqueceu a sua senha?</Link>
              </Stack>
              <Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() => navigate("/profile")}
                >
                  Entrar
                </Button>
                <Button
                  bg={"whiteAlpha.100"}
                  color={"blue.500"}
                  border={"1px solid"}
                  _hover={{
                    bg: "whiteAlpha.500",
                  }}
                  onClick={() => navigate("/cadastrar")}
                >
                  Ainda não possui uma conta? Cadastrar
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
