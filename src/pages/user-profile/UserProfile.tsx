import { Grid, GridItem } from "@chakra-ui/react";
import { ProfileEdit } from "./ProfileEdit";
import { ProfileResume } from "./ProfileResume";

export const UserProfile: React.FC = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={2}>
      <GridItem w="100%" h="10" colSpan={8} p={5}>
        <ProfileEdit />
      </GridItem>
      <GridItem w="100%" h="10" colSpan={4} p={5}>
        <ProfileResume />
      </GridItem>
    </Grid>
  );
};
