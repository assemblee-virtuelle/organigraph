import React from 'react';
import { EditBase, ImageInput, TextInput } from 'react-admin';
import { ImageField } from '@semapps/semantic-data-provider';
import EditSide from "../../layout/EditSide";

export const PersonEdit = props => (
  <EditBase{...props}>
    <EditSide>
      <TextInput source="pair:firstName" fullWidth />
      <TextInput source="pair:lastName" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
    </EditSide>
  </EditBase>
);

export default PersonEdit;
