import React from 'react';
import { ShowBase, SingleFieldList, ChipField, DateField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import DocumentTitle from './DocumentTitle';
import ShowSide from "../../layout/ShowSide";
import MarkdownField from "../../common/field/MarkdownField";
import { AvatarWithLabelField } from "@semapps/field-components";
import ViewSourceButton from "../../common/buttons/ViewSourceButton";

const DocumentShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<DocumentTitle />} actions={[<ViewSourceButton source="pair:webPage" />]}>
      <MarkdownField source="pair:description" addLabel={false} />
      <DateField source="dc:created" showTime />
      <ReferenceField reference="Person" source="dc:creator" link="show">
        <Grid container>
          <Grid item xs={2}>
            <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="secondary" />
          </Grid>
        </Grid>
      </ReferenceField>
      <ReferenceArrayField reference="Circle" source="pair:documents">
        <SingleFieldList linkType="show">
          <ChipField source="pair:label" color="secondary" />
        </SingleFieldList>
      </ReferenceArrayField>
    </ShowSide>
  </ShowBase>
);

export default DocumentShow;
