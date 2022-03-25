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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../shared/hooks/useUserContext";
import { Feedback } from "../../shared/services/feedback/Feedback";

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { handleLogin } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const valide = () => {
    if (!email.includes("@")) {
      Feedback("Informe um e-mail válido", "error");
      return false;
    }
    if (password.length < 3) {
      Feedback("A senha precisa conter pelo menos três caracteres", "error");
      return false;
    }

    Feedback("Acessando sua conta...", "info");
    return true;
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const signIn = () => {
    valide() && handleLogin(email, password) && goToProfile();
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Acesse a sua conta ✌️</Heading>
        </Stack>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          rounded={"lg"}
          p={8}
        >
          <Stack spacing={4}>
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Button variant={"link"} color={"blue.400"}>
                  Esqueceu a sua senha?
                </Button>
              </Stack>
              <Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() => signIn()}
                >
                  Entrar
                </Button>
                <Button
                  bg={useColorModeValue("whiteAlpha.100", "gray.700")}
                  color={"blue.500"}
                  border={"1px solid"}
                  _hover={{
                    bg: useColorModeValue("whiteAlpha.100", "gray.700"),
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
