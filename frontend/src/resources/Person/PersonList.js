import React from 'react';
import { Box } from '@material-ui/core';
import { ListBase, ListToolbar, SearchInput } from "react-admin";
import { AvatarField, GridList } from '@semapps/archipelago-layout';
import { CircleInput } from "../../common/input";

const filters = [
  <SearchInput source="q" alwaysOn />,
  <CircleInput source="pair:involvedIn" hiddenLabel label="" alwaysOn placeholder="Cercle" />
];

const PersonList = props => (
  <ListBase {...props} perPage={500} sort={{ field: 'pair:lastName', order: 'ASC' }}>
    <Box p={3} pt={1} pb={0}>
      <ListToolbar filters={filters} />
    </Box>
    <Box p={3}>
      <GridList xs={2} linkType="show">
        <AvatarField label="pair:label" image="image" />
      </GridList>
    </Box>
  </ListBase>
);

export default PersonList;
