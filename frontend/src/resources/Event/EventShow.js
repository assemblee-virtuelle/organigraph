import React from 'react';
import { ShowBase, DateField, ChipField } from 'react-admin';
import { ReferenceField } from "@semapps/semantic-data-provider";
import EventTitle from './EventTitle';
import ShowSide from "../../layout/ShowSide";
import MarkdownField from "../../common/field/MarkdownField";

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
