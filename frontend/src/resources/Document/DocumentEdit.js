import React from 'react';
import { EditBase, TextInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { CircleInput} from '../../common/input';
import CircleTitle from "../Circle/CircleTitle";
import EditSide from "../../layout/EditSide";

export const DocumentEdit = props => (
  <EditBase {...props}>
    <EditSide title={<CircleTitle />} redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <CircleInput source="pair:documents" />
    </EditSide>
  </EditBase>
);

export default DocumentEdit;
