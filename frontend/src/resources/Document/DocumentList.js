import React, { useCallback } from 'react';
import { ListBase, Datagrid, DateField, TextField, ShowButton, ListToolbar, SearchInput } from "react-admin";
import { Box, makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { CircleInput } from "../../common/input";

const filters = [
  <SearchInput source="q" alwaysOn />,
  <CircleInput source="pair:documents" hiddenLabel label="" alwaysOn placeholder="Cercle" />
];

const useStyles = makeStyles(theme => ({
  alignCenter: {
    textAlign: 'center'
  },
  alignRight: {
    textAlign: 'right'
  }
}));

const DocumentList = props => {
  const classes = useStyles();
  const location = useLocation();
  const matches = location.pathname.split('/');
  const currentRecordId = matches.length > 2 ? decodeURIComponent(matches[2]) : undefined;

  const selectedRowStyle = useCallback(record => ({
    backgroundColor: record.id === currentRecordId ? 'rgba(0, 0, 0, 0.04)' : undefined
  }), [currentRecordId]);

  return (
    <ListBase {...props}>
      <Box p={2} pt={1} pb={0}>
        <ListToolbar filters={filters} />
      </Box>
      <Box p={2} pt={1}>
        <Datagrid rowClick="show" rowStyle={selectedRowStyle}>
          <TextField source="pair:label" />
          <DateField source="dc:created" headerClassName={classes.alignCenter} cellClassName={classes.alignCenter} />
          <ShowButton cellClassName={classes.alignRight} />
        </Datagrid>
      </Box>
    </ListBase>
  );
}

export default DocumentList;
