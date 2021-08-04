import React from 'react';
import { ShowBase, SimpleShowLayout, ChipField, SingleFieldList, TextField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { MainList, SideList, Hero, GridList, AvatarField } from '@semapps/archipelago-layout';
import { ShowWithPermissions } from '@semapps/auth-provider';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import PersonTitle from './PersonTitle';
import HomeIcon from '@material-ui/icons/Home';
import ShowSide from "../../layout/ShowSide";

const PersonShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<PersonTitle />}>
      <TextField source="pair:firstName" />
      <TextField source="pair:lastName" />
      <TextField source="pair:comment" />
      {/*<MapField*/}
      {/*  source="pair:hasLocation"*/}
      {/*  address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}*/}
      {/*  latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}*/}
      {/*  longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}*/}
      {/*/>*/}
      {/*<ReferenceArrayField reference="Organization" source="pair:affiliatedBy">*/}
      {/*  <GridList xs={6} linkType="show">*/}
      {/*    <AvatarField label="pair:label" image="image">*/}
      {/*      <HomeIcon />*/}
      {/*    </AvatarField>*/}
      {/*  </GridList>*/}
      {/*</ReferenceArrayField>*/}
    </ShowSide>
  </ShowBase>
);

export default PersonShow;
