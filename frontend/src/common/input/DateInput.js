import React from 'react';
import frLocale from 'date-fns/locale/fr';
import { DateInput as SemappsDateInput } from '@semapps/date-components';

const DateTimeInput = props => (
  <SemappsDateInput
    options={{
      format: 'dd/MM/yyyy',
      ampm: false
    }}
    providerOptions={{
      locale: frLocale
    }}
    fullWidth
    {...props}
  />
);

export default DateTimeInput;
