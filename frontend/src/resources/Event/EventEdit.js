import React from 'react';
import { TextInput, EditBase } from 'react-admin';
import DateTimeInput from '../../common/input/DateTimeInput';
import { MarkdownInput } from '@semapps/markdown-components';
import EditSide from '../../layout/EditSide';
import EventTitle from './EventTitle';
import { CircleInput } from '../../common/input';

const EventEdit = props => (
  <EditBase {...props}>
    <EditSide title={<EventTitle />} redirect="show">
      <TextInput source="pair:label" fullWidth />
      <CircleInput source="pair:concerns" />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <DateTimeInput source="pair:startDate" />
      <DateTimeInput source="pair:endDate" />
    </EditSide>
  </EditBase>
);

export default EventEdit;
