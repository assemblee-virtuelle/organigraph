import React from 'react';
import { CreateBase, TextInput } from 'react-admin';
import CreateSide from "../../layout/CreateSide";
import { CircleInput } from "../../pair";

const CircleCreate = props => (
  <CreateBase {...props}>
    <CreateSide>
      <TextInput source="pair:label" label="Nom" fullWidth />
      <CircleInput source="pair:partOf" />
    </CreateSide>
  </CreateBase>
);

export default CircleCreate;
