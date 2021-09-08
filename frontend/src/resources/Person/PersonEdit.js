import React from 'react';
import { EditBase, ImageInput, TextInput } from 'react-admin';
import { ImageField } from '@semapps/semantic-data-provider';
import EditSide from "../../layout/EditSide";
import { CirclesInput } from "../../common/input";
import PersonTitle from "./PersonTitle";

export const PersonEdit = props => (
  <EditBase {...props}>
    <EditSide title={<PersonTitle />} redirect="show">
      <TextInput source="pair:firstName" fullWidth />
      <TextInput source="pair:lastName" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <CirclesInput source="og:leads" />
      <CirclesInput source="pair:involvedIn" />
    </EditSide>
  </EditBase>
);

export default PersonEdit;
