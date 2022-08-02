import React from 'react';
import {ShowBase, DateField, ChipField, ReferenceManyField} from 'react-admin';
import { ReferenceField } from "@semapps/semantic-data-provider";
import { AvatarWithLabelField } from "@semapps/field-components";
import EventTitle from './EventTitle';
import ShowSide from "../../layout/ShowSide";
import MarkdownField from "../../common/field/MarkdownField";
import GridList from "../../common/list/GridList";

const EventShow = props => (
  <ShowBase  {...props}>
    <ShowSide title={<EventTitle />}>
      <DateField source="pair:startDate" showTime />
      <DateField source="pair:endDate" showTime />
      <MarkdownField source="pair:description" />
      <ReferenceField reference="Circle" source="pair:concerns" linkType="show">
        <ChipField color="secondary" source="pair:label" />
      </ReferenceField>
      <ReferenceManyField label="Participants" reference="Person" target="pair:involvedIn" sort={{ field: 'pair:label', order: 'ASC' }}>
        <GridList xs={3} linkType="show" emptyText="Aucun participant">
          <AvatarWithLabelField label="pair:label" image="pair:depictedBy" />
        </GridList>
      </ReferenceManyField>
    </ShowSide>
  </ShowBase>
);

export default EventShow;
