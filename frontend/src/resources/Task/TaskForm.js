import React from 'react';
import { TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { CircleInput } from '../../common/input';
import { UserInput, StatusInput } from '../../common/input';

const TaskForm = props => (
  <>
    <TextInput source="pair:label" fullWidth />
    <MarkdownInput multiline source="pair:description" fullWidth />
    <UserInput source="pair:assignedTo" />
    <CircleInput source="pair:documents" />
    <StatusInput source="pair:hasStatus" />
  </>
);

export default TaskForm;
