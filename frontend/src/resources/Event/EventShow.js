import React from 'react';
import { ShowBase, SimpleShowLayout, TextField, UrlField, DateField } from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import EventTitle from './EventTitle';

const EventShow = props => (
  <ShowBase title={<EventTitle />} {...props}>
    <SimpleShowLayout {...props}>
        <TextField source="pair:comment" />
        <DateField source="pair:startDate" showTime />
        <DateField source="pair:endDate" showTime />
        <UrlField source="pair:aboutPage" />
        <MarkdownField source="pair:description" />
    </SimpleShowLayout>
  </ShowBase>
);

export default EventShow;
