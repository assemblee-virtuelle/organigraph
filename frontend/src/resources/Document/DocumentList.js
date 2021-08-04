import React from 'react';
import { ListBase, Datagrid, DateField, TextField, ShowButton } from "react-admin";
import { Box } from '@material-ui/core';

const DocumentList = props => (
  <ListBase {...props}>
    <Box p={3}>
      <Datagrid rowClick="show">
        <TextField source="pair:label" />
        <DateField source="dc:created" />
        <ShowButton />
      </Datagrid>
    </Box>
  </ListBase>
);

export default DocumentList;
