import {
  Box,
  Stack,
  Container,
  Heading,
  SimpleGrid,
  HStack,
  Icon,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Concentre tudo em um só lugar",
      text: "Precisou adicionar outro link importante ao seu perfil? Porque atualizar em dezenas de sites, se você pode apenas alterar uma única vez no MyLinks?",
    },
    {
      id: 2,
      title: "Customize o MyLinks",
      text: "Crie um perfil com a sua cara, personalize cores, fontes e imagens para que seus seguidores possam desfrutar da melhor experiência.",
    },
    {
      id: 3,
      title: "O que mais importa para seus seguidores",
      text: "Reúna links e redes sociais e faça sua audiência chegar aonde você deseja.",
    },
  ];

  return (
    <Box padding={10} bg={useColorModeValue("gray.100", "gray.700")}>
      <Box>
        <Stack spacing={2} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Descubra nossas melhores features!</Heading>
          <Text
            color={useColorModeValue("gray.600", "gray.100")}
            fontSize={"xl"}
          >
            Entenda de uma vez por todas o motivo dos usuário que usam o MyLinks
            não voltarem atrás e se libertarem de uma vez por todas da confusão
            do gerenciamento de uma montanha de URLs sem sentido
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {features.map((feature) => (
              <VStack key={feature.id} align={"center"}>
                <HStack>
                  <Box color={"green.400"}>
                    <Icon as={CheckIcon} fontSize={"medium"} />
                  </Box>
                  <Text fontWeight={600}>{feature.title}</Text>
                </HStack>
                <Text
                  color={useColorModeValue("gray.600", "gray.100")}
                  textAlign={"center"}
                >
                  {feature.text}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};
