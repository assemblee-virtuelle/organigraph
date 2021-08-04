import React from 'react';
import { Box } from '@material-ui/core';
import { ListBase } from "react-admin";
import { AvatarField, GridList } from '@semapps/archipelago-layout';

const PersonList = props => (
  <ListBase {...props} perPage={500} sort={{ field: 'pair:lastName', order: 'DESC' }}>
    <Box p={3}>
      <GridList xs={2} linkType="show">
        <AvatarField label="pair:label" image="image" />
      </GridList>
    </Box>
  </ListBase>
);

export default PersonList;
