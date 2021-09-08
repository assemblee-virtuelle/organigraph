import React from 'react';
import { CreateBase, TextInput } from 'react-admin';
import CreateSide from "../../layout/CreateSide";
import { CircleInput } from "../../common/input";

const DocumentCreate = props => (
  <CreateBase {...props}>
    <CreateSide>
      <TextInput source="pair:label" fullWidth />
      <CircleInput source="pair:documents" />
    </CreateSide>
  </CreateBase>
);

export default DocumentCreate;
