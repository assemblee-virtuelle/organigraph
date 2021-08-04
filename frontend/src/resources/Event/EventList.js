import React from 'react';
import { ListBase } from "react-admin";
import { CalendarList } from '@semapps/date-components';
import frLocale from '@fullcalendar/core/locales/fr';
import { Box } from '@material-ui/core';

const EventList = props => (
  <ListBase {...props}>
    <Box p={3}>
      <CalendarList
        locale={frLocale}
        label="pair:label"
        startDate="pair:startDate"
        endDate="pair:endDate"
        linkType="show"
      />
    </Box>
  </ListBase>
);

export default EventList;
