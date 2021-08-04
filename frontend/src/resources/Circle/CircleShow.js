import React from 'react';
import { ShowBase, TextField } from 'react-admin';
import { GridList, AvatarField } from '@semapps/archipelago-layout';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import { MarkdownField } from '@semapps/markdown-components';
import ShowSide from "../../layout/ShowSide";
import CircleTitle from "./CircleTitle";

const CircleShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<CircleTitle />}>
      <TextField source="og:purpose" />
      <MarkdownField source="og:accountabilities" />
      <TextField source="og:domain" />
      <ReferenceField reference="Circle" source="pair:partOf" linkType="show">
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceArrayField reference="Person" source="og:leadBy">
        <GridList xs={12} linkType="show">
          <AvatarField label="pair:firstName" image="image" />
        </GridList>
      </ReferenceArrayField>
      <ReferenceArrayField reference="Person" source="pair:supportedBy">
        <GridList xs={12} linkType="show">
          <AvatarField label="pair:firstName" image="image" />
        </GridList>
      </ReferenceArrayField>
      {/*<UriArrayField label="Evénements" reference="Event" filter={{ '@type': 'pair:Event' }} source="pair:involvedIn">*/}
      {/*  <SingleFieldList linkType="show">*/}
      {/*    <ChipField source="pair:label" color="secondary" />*/}
      {/*  </SingleFieldList>*/}
      {/*</UriArrayField>*/}
      {/*<UriArrayField reference="Document" source="pair:documentedBy">*/}
      {/*  <SingleFieldList linkType="show">*/}
      {/*    <ChipField source="pair:label" color="secondary" />*/}
      {/*  </SingleFieldList>*/}
      {/*</UriArrayField>*/}
    </ShowSide>
  </ShowBase>
);

export default CircleShow;
