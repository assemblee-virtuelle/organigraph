import React from 'react';
import { EditBase, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { CircleInput, StatusRadioInput } from '../../common/input';
import CircleTitle from '../Circle/CircleTitle';
import EditSide from '../../layout/EditSide';
import { UserInput } from '../../common/input';

export const DocumentEdit = props => (
  <EditBase {...props}>
    <EditSide title={<CircleTitle />} redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <UserInput source="pair:assignedTo" />
      <CircleInput source="pair:documents" />
      <StatusRadioInput source="pair:hasStatus" />
    </EditSide>
  </EditBase>
);

export default DocumentEdit;
