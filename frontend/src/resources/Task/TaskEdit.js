import React from 'react';
import { EditBase, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { CircleInput, StatusRadioInput } from '../../common/input';
import DateInput from '../../common/input/DateInput';
import CircleTitle from '../Circle/CircleTitle';
import EditSide from '../../layout/EditSide';
import { UserInput } from '../../common/input';

export const TaskEdit = props => (
  <EditBase {...props}>
    <EditSide title={<CircleTitle />} redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <UserInput source="pair:assignedTo" />
      <CircleInput source="pair:documents" />
      <StatusRadioInput source="pair:hasStatus" />
      <DateInput source="pair:dueDate" />
    </EditSide>
  </EditBase>
);

export default TaskEdit;
