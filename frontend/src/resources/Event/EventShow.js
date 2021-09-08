import React from 'react';
import { ShowBase, DateField, ChipField } from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import { ReferenceField } from "@semapps/semantic-data-provider";
import EventTitle from './EventTitle';
import ShowSide from "../../layout/ShowSide";

const EventShow = props => (
  <ShowBase  {...props}>
    <ShowSide title={<EventTitle />}>
      <DateField source="pair:startDate" showTime />
      <DateField source="pair:endDate" showTime />
      <MarkdownField source="pair:description" />
      <ReferenceField reference="Circle" source="pair:concerns" linkType="show">
        <ChipField color="secondary" source="pair:label" />
      </ReferenceField>
    </ShowSide>
  </ShowBase>
);

export default EventShow;
