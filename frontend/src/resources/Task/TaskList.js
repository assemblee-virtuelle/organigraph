import React, { useCallback } from 'react';
import { ListBase, Datagrid, TextField, ListToolbar, SearchInput } from 'react-admin';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { ReferenceField } from '@semapps/field-components';
import { useLocation } from 'react-router-dom';
import { CircleInput, StatusInput, UserInput } from '../../common/input';
import TopPagination from '../../layout/TopPagination';
import ListLoader from '../../common/list/ListLoader';

const filters = [
  <CircleInput source="pair:documents" hiddenLabel label="" alwaysOn placeholder="Cercle" />,
  <StatusInput source="pair:hasStatus" hiddenLabel label="" alwaysOn placeholder="Status" />,
  <UserInput source="pair:assignedTo" hiddenLabel label="" alwaysOn placeholder="Assigné à" />
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
  const location = useLocation();
  const matches = location.pathname.split('/');
  const currentRecordId = matches.length > 2 ? decodeURIComponent(matches[2]) : undefined;

  const selectedRowStyle = useCallback(
    record => ({
      backgroundColor: record.id === currentRecordId ? 'rgba(0, 0, 0, 0.04)' : undefined
    }),
    [currentRecordId]
  );

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
            <Box position="relative">
              <Datagrid rowClick="show" rowStyle={selectedRowStyle}>
                <TextField source="pair:label" />
                <ReferenceField reference="Person" source="pair:assignedTo" link={false}>
                  <TextField source="pair:label" />
                </ReferenceField>
                <ReferenceField reference="Circle" source="pair:documents" link={false}>
                  <TextField source="pair:label" />
                </ReferenceField>
                <ReferenceField reference="Status" source="pair:hasStatus" link={false}>
                  <TextField source="pair:label" />
                </ReferenceField>
              </Datagrid>
              <ListLoader />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ListBase>
  );
};

export default DocumentList;
