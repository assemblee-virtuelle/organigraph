import React from 'react';
import { ShowBase, SingleFieldList, ChipField, DateField, TextField } from 'react-admin';
import { Grid } from '@material-ui/core';
import { ReferenceArrayField, ReferenceField, AvatarWithLabelField } from '@semapps/field-components';
import DocumentTitle from './TaskTitle';
import ShowSide from '../../layout/ShowSide';
import MarkdownField from '../../common/field/MarkdownField';
import ViewSourceButton from '../../common/buttons/ViewSourceButton';

const DocumentShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<DocumentTitle />} actions={[<ViewSourceButton source="pair:webPage" />]}>
      <MarkdownField source="pair:description" addLabel={false} />
      <ReferenceField reference="Status" source="pair:hasStatus" link={false}>
        <TextField source="pair:label" />
      </ReferenceField>
      <ReferenceField reference="Person" source="pair:assignedTo" link="show">
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
      <DateField source="dc:created" showTime />
    </ShowSide>
  </ShowBase>
);

export default DocumentShow;
