import React, { useCallback } from 'react';
import { Datagrid, DateField, TextField, SearchInput, SimpleList } from "react-admin";
import { makeStyles, useMediaQuery } from '@material-ui/core';
import { ReferenceField } from '@semapps/field-components';
import { useLocation } from 'react-router-dom';
import { CircleInput } from "../../common/input";
import List from "../../layout/List";
import DescriptionIcon from "@material-ui/icons/Description";

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
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'), { noSsr: true });

  const selectedRowStyle = useCallback(record => ({
    backgroundColor: record.id === currentRecordId ? 'rgba(0, 0, 0, 0.04)' : undefined
  }), [currentRecordId]);

  return (
    <List perPage={15} sort={{ field: 'dc:created', order: 'DESC' }} filters={filters} {...props}>
      {xs
        ? <SimpleList
            icon={<DescriptionIcon/>}
            primaryText={record => record['pair:label']}
          />
        : <Datagrid rowClick="show" rowStyle={selectedRowStyle}>
            <TextField source="pair:label"/>
            <ReferenceField reference="Person" source="dc:creator" link={false}>
              <TextField source="pair:firstName"/>
            </ReferenceField>
            <DateField source="dc:created" headerClassName={classes.alignCenter} cellClassName={classes.alignCenter}/>
          </Datagrid>
      }
    </List>
  );
}

export default DocumentList;
