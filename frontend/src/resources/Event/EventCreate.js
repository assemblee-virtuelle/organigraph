import React from 'react';
import { CreateBase, TextInput } from 'react-admin';
import CreateSide from "../../layout/CreateSide";
import { CircleInput } from "../../common/input";

const EventCreate = props => (
  <CreateBase {...props}>
    <CreateSide>
      <TextInput source="pair:label" label="Nom" fullWidth />
      <CircleInput source="pair:concerns" />
    </CreateSide>
  </CreateBase>
);

export default EventCreate;
