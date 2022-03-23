import {
  Container,
  Stack,
  Box,
  Heading,
  Button,
  Text,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HiOutlineLightningBolt } from "react-icons/hi";

export const CallToAction: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          <Text
            color={"green.400"}
            transform={"rotate(350deg)"}
            fontFamily={"monospace"}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            _hover={{
              color: "green.500",
              transform: "translateY(-2px) rotate(350deg)",
              cursor: "pointer",
            }}
          >
            <Icon as={HiOutlineLightningBolt} />
            MyLinks <br />
          </Text>
          Concentre seus links <br />
          <Text as={"span"} color={"green.400"}>
            em um só lugar!
          </Text>
        </Heading>
        <Text color={"gray.500"}>
          Concentre todos os seus links usando o MyLinks e simplifique a forma
          como você compartilha seus conteúdos com o mundo
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
              transform: "translateY(-2px)",
            }}
            onClick={() => navigate("/profile")}
          >
            Crie gratuitamente
          </Button>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Saiba mais
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
