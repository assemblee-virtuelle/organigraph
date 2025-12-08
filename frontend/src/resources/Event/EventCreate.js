import React from 'react';
import { CreateBase, TextInput } from 'react-admin';
import CreateSide from '../../layout/CreateSide';
import { CircleInput } from '../../common/input';
import DateTimeInput from '../../common/input/DateTimeInput';

const EventCreate = props => (
  <CreateBase {...props}>
    <CreateSide>
      <TextInput source="pair:label" label="Nom" fullWidth />
      <CircleInput source="pair:concerns" />
      <DateTimeInput source="pair:startDate" />
      <DateTimeInput source="pair:endDate" />
    </CreateSide>
  </CreateBase>
);

export default EventCreate;
