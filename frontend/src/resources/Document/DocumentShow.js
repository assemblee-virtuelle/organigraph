import React from 'react';
import { ShowBase, SingleFieldList, ChipField } from 'react-admin';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import DocumentTitle from './DocumentTitle';
import ShowSide from "../../layout/ShowSide";
import MarkdownField from "../../common/field/MarkdownField";

const DocumentShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<DocumentTitle />}>
      <MarkdownField source="pair:description" addLabel={false} />
      <ReferenceArrayField reference="Circle" source="pair:documents">
        <SingleFieldList linkType="show">
          <ChipField source="pair:label" color="secondary" />
        </SingleFieldList>
      </ReferenceArrayField>
    </ShowSide>
  </ShowBase>
);

export default DocumentShow;
