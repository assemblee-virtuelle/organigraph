import React from 'react';
import { EditBase, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { UsersInput, CircleInput } from '../../pair';
import CircleTitle from './CircleTitle';
import EditSide from "../../layout/EditSide";

export const CircleEdit = props => (
  <EditBase {...props}>
    <EditSide title={<CircleTitle />} redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput source="og:purpose" fullWidth />
      <MarkdownInput multiline source="og:accountabilities" fullWidth />
      <TextInput source="og:domain" fullWidth />
      <UsersInput source="og:leadBy" />
      <UsersInput source="pair:supportedBy" />
      <CircleInput source="pair:partOf" />
    </EditSide>
  </EditBase>
);

export default CircleEdit;
