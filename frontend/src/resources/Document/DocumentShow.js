import React from 'react';
import { ShowBase, SingleFieldList, ChipField } from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import DocumentTitle from './DocumentTitle';
import ShowSide from "../../layout/ShowSide";

const DocumentShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<DocumentTitle />}>
      <MarkdownField source="pair:description" />
      {/*<ReferenceArrayField reference="Type" source="pair:hasType">*/}
      {/*  <SingleFieldList linkType={false}>*/}
      {/*    <ChipField source="pair:label" color="secondary" />*/}
      {/*  </SingleFieldList>*/}
      {/*</ReferenceArrayField>*/}
      <ReferenceArrayField reference="Circle" source="pair:documents">
        <SingleFieldList linkType="show">
          <ChipField source="pair:label" color="secondary" />
        </SingleFieldList>
      </ReferenceArrayField>
    </ShowSide>
  </ShowBase>
);

export default DocumentShow;
