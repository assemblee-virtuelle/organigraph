import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { ListBase, ListToolbar, SearchInput } from "react-admin";
import { AvatarField, GridList } from '@semapps/archipelago-layout';
import { CircleInput } from "../../common/input";
import TopPagination from "../../layout/TopPagination";

const filters = [
  <SearchInput source="q" alwaysOn />,
  <CircleInput source="pair:affiliatedBy" hiddenLabel label="" alwaysOn placeholder="Cercle" />
];

const PersonList = props => {
  return (
    <ListBase {...props} perPage={30} sort={{ field: 'pair:lastName', order: 'ASC' }}>
      <Box pl={3} pr={3} pt={1} pb={0}>
        <Grid container>
          <Grid item xs={7}>
            <ListToolbar filters={filters} />
          </Grid>
          <Grid item xs={5}>
            <Box display="flex" justifyContent="flex-end">
              <TopPagination />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <GridList xs={2} linkType="show">
              <AvatarField label="pair:label" image="pair:depictedBy" />
            </GridList>
          </Grid>
        </Grid>
      </Box>
    </ListBase>
  );
}

export default PersonList;
