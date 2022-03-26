import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { ProfileEdit } from './ProfileEdit';
import { ProfileResume } from './ProfileResume';

export const UserProfile: React.FC = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={1}>
      <GridItem w="100%" h="100vh" colSpan={6} paddingX={2} paddingY={5}>
        <ProfileEdit />
      </GridItem>
      <GridItem w="100%" h="100vh" colSpan={6} paddingX={2} paddingY={5}>
        <ProfileResume />
      </GridItem>
    </Grid>
  );
};
