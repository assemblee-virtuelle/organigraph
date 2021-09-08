import React from 'react';
import { TextInput, EditBase } from 'react-admin';
import frLocale from 'date-fns/locale/fr';
import { DateTimeInput } from '@semapps/date-components';
import { MarkdownInput } from '@semapps/markdown-components';
import EditSide from "../../layout/EditSide";
import EventTitle from './EventTitle';
import { CircleInput } from "../../common/input";

const EventEdit = props => (
  <EditBase {...props}>
    <EditSide title={<EventTitle />} redirect="show">
      <TextInput source="pair:label" fullWidth />
      <CircleInput source="pair:concerns" />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <DateTimeInput
        source="pair:startDate"
        options={{
          format: 'dd/MM/yyyy à HH:mm',
          ampm: false
        }}
        providerOptions={{
          locale: frLocale
        }}
        fullWidth
      />
      <DateTimeInput
        source="pair:endDate"
        options={{
          format: 'dd/MM/yyyy à HH:mm',
          ampm: false
        }}
        providerOptions={{
          locale: frLocale
        }}
        fullWidth
      />
    </EditSide>
  </EditBase>
);

export default EventEdit;
