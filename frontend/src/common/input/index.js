import React from 'react';
import { ReferenceInput, ReferenceArrayInput } from '@semapps/semantic-data-provider';
import { AutocompleteArrayInput, SelectInput } from 'react-admin';

export const DocumentsInput = (props) => (
  <ReferenceArrayInput reference="Document" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const EventsInput = (props) => (
  <ReferenceArrayInput reference="Event" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const TasksInput = (props) => (
  <ReferenceArrayInput reference="Task" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const UsersInput = (props) => (
  <ReferenceArrayInput reference="Person" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);

export const CircleInput = (props) => (
  <ReferenceInput reference="Circle" sort={{ field: 'pair:label', order: 'ASC' }} filter={{ _predicates: ['pair:label'] }} perPage={100} {...props}>
    <SelectInput optionText="pair:label" allowNull />
  </ReferenceInput>
);

export const CirclesInput = (props) => (
  <ReferenceArrayInput reference="Circle" {...props}>
    <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
  </ReferenceArrayInput>
);
