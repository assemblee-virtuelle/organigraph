import React from 'react';
import { EditBase, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { UsersInput, CircleInput } from '../../common/input';
import CircleTitle from './CircleTitle';
import EditSide from "../../layout/EditSide";
import MultiLinesInput from "../../common/input/MultiLinesInput";

export const CircleEdit = props => (
  <EditBase {...props}>
    <EditSide title={<CircleTitle />} redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="og:purpose" fullWidth />
      <MarkdownInput multiline source="og:accountabilities" fullWidth />
      <TextInput source="og:domain" fullWidth />
      <UsersInput source="og:leadBy" />
      <UsersInput source="pair:involves" />
      <MultiLinesInput source="pair:homePage" fullWidth />
      <CircleInput source="pair:partOf" />
    </EditSide>
  </EditBase>
);

export default CircleEdit;
