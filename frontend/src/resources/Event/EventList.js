import React from 'react';
import {ListBase, ListToolbar, SearchInput} from "react-admin";
import { CalendarList } from '@semapps/date-components';
import frLocale from '@fullcalendar/core/locales/fr';
import { Box } from '@material-ui/core';
import { CircleInput } from "../../common/input";
import ListLoader from "../../common/list/ListLoader";

const filters = [
  <SearchInput source="q" alwaysOn />,
  <CircleInput source="pair:concerns" allowEmpty hiddenLabel label="" alwaysOn />
];

const EventList = props => (
  <ListBase perPage={1000} {...props}>
    <Box p={3} pt={1} pb={0}>
      <ListToolbar filters={filters} />
    </Box>
    <Box p={3} position="relative">
      <CalendarList
        locale={frLocale}
        label="pair:label"
        startDate="pair:startDate"
        endDate="pair:endDate"
        linkType="show"
      />
      <ListLoader />
    </Box>
  </ListBase>
);

export default EventList;
