import React from 'react';
import {ListBase, ListToolbar, SearchInput} from "react-admin";
import {CalendarList, DaysList} from '@semapps/date-components';
import frLocale from '@fullcalendar/core/locales/fr';
import {Box, useMediaQuery} from '@material-ui/core';
import { CircleInput } from "../../common/input";
import ListLoader from "../../common/list/ListLoader";
import List from "../../layout/List";

const filters = [
  <SearchInput source="q" alwaysOn />,
  <CircleInput source="pair:concerns" allowEmpty hiddenLabel label="" alwaysOn />
];

const EventList = props => {
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'), { noSsr: true });
  return (
    <List perPage={1000} filters={filters} {...props}>
        {xs
          ? <DaysList
              locale={frLocale}
              label="pair:label"
              startDate="pair:startDate"
              endDate="pair:endDate"
              linkType="show"
            />
          : <CalendarList
              locale={frLocale}
              label="pair:label"
              startDate="pair:startDate"
              endDate="pair:endDate"
              linkType="show"
            />
        }
    </List>
  );
}

export default EventList;
