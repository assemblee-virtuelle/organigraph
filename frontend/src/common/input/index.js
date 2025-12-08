import React from 'react';
import { ReferenceInput, ReferenceArrayInput } from '@semapps/input-components';
import { AutocompleteArrayInput, RadioButtonGroupInput, SelectInput } from 'react-admin';

export const DocumentsInput = props => (
  <ReferenceArrayInput reference="Document" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const EventsInput = props => (
  <ReferenceArrayInput reference="Event" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const TasksInput = props => (
  <ReferenceArrayInput reference="Task" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const UsersInput = props => (
  <ReferenceArrayInput reference="Person" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const UserInput = props => (
  <ReferenceInput reference="Person" perPage={100} {...props}>
    <SelectInput optionText="pair:label" allowNull />
  </ReferenceInput>
);

export const CircleInput = props => (
  <ReferenceInput reference="Circle" sort={{ field: 'pair:label', order: 'ASC' }} perPage={100} {...props}>
    <SelectInput optionText="pair:label" allowNull />
  </ReferenceInput>
);

export const CirclesInput = props => (
  <ReferenceArrayInput reference="Circle" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const StatusRadioInput = props => (
  <ReferenceInput reference="Status" perPage={100} {...props}>
    <RadioButtonGroupInput optionText="pair:label" />
  </ReferenceInput>
);

export const StatusInput = props => (
  <ReferenceInput reference="Status" perPage={100} {...props}>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>
);
