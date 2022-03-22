import { Wrap, WrapItem, Center } from "@chakra-ui/react";

export const LayoutPageDefault: React.FC = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Wrap
        marginRight={{ md: 100, sm: 30 }}
        marginLeft={{ md: 100, sm: 30 }}
        marginTop={{ md: 10, sm: 5 }}
        marginBottom={{ md: 30, sm: 5 }}
        justify={"center"}
        overflow={"hidden"}
        h={"full"}
        w={"auto"}
      >
        <WrapItem>
          <Center>{children}</Center>
        </WrapItem>
      </Wrap>
    </>
  );
};
