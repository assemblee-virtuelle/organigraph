import React from "react";
import { ReferenceManyField } from "react-admin";
import GridList from "./GridList";
import { AvatarWithLabelField } from "@semapps/field-components";
import { useMediaQuery } from "@material-ui/core";

const UsersList = props => {
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'), { noSsr: true });
  return (
    <ReferenceManyField reference="Person" perPage={xs ? 3 : 4} sort={{ field: 'pair:label', order: 'ASC' }} filter={{ _predicates: ['pair:label', 'pair:depictedBy'] }} {...props}>
      <GridList xs={4} sm={3} linkType="show" emptyText="Aucun membre dans ce cercle">
        <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="secondary" />
      </GridList>
    </ReferenceManyField>
  )
};

export default UsersList;
