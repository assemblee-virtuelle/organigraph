import React from 'react';
import { useMediaQuery} from '@material-ui/core';
import { SearchInput } from "react-admin";
import { GridList } from '@semapps/list-components';
import { AvatarWithLabelField } from '@semapps/field-components';
import { CircleInput } from "../../common/input";
import List from "../../layout/List";

const filters = [
  <SearchInput source="q" alwaysOn />,
  <CircleInput source="pair:affiliatedBy" hiddenLabel label="" alwaysOn placeholder="Cercle" />
];

const PersonList = props => {
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'), { noSsr: true });
  return (
    <List {...props} perPage={30} sort={{ field: 'pair:lastName', order: 'ASC' }} filters={filters}>
      <GridList xs={4} sm={2} linkType="show" spacing={xs ? 1 : 3}>
        <AvatarWithLabelField label="pair:label" image="pair:depictedBy" />
      </GridList>
    </List>
  );
}

export default PersonList;
