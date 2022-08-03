import React, { useCallback } from 'react';
import { ListBase, Datagrid, DateField, TextField, ListToolbar, SearchInput } from "react-admin";
import { Box, Grid, makeStyles } from '@material-ui/core';
import { ReferenceField } from '@semapps/semantic-data-provider';
import { useLocation } from 'react-router-dom';
import { CircleInput } from "../../common/input";
import TopPagination from "../../layout/TopPagination";

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
    <ListBase perPage={15} sort={{ field: 'dc:created', order: 'DESC' }} {...props}>
      <Box pl={3} pr={3} pt={1} pb={0}>
        <Grid container>
          <Grid item xs={9}>
            <ListToolbar filters={filters} />
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" justifyContent="flex-end">
              <TopPagination />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Datagrid rowClick="show" rowStyle={selectedRowStyle}>
              <TextField source="pair:label" />
              <ReferenceField reference="Person" source="dc:creator" link={false}>
                <TextField source="pair:firstName" />
              </ReferenceField>
              <DateField source="dc:created" headerClassName={classes.alignCenter} cellClassName={classes.alignCenter} />
              {/*<ShowButton cellClassName={classes.alignRight} />*/}
            </Datagrid>
          </Grid>
        </Grid>
      </Box>
    </ListBase>
  );
}

export default DocumentList;
