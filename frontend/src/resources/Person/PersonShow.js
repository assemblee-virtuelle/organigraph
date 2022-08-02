import React from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField } from 'react-admin';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { MultiUrlField } from '@semapps/field-components';
import PersonTitle from './PersonTitle';
import ShowSide from "../../layout/ShowSide";
import RoundImageField from "../../common/field/RoundImageField";
import domainMapping from "../../config/domainMapping";

const PersonShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<PersonTitle />}>
      <RoundImageField source="pair:depictedBy" title="pair:label" addLabel={false} />
      <TextField source="pair:description" fullWidth />
      <MultiUrlField source="pair:homePage" domainMapping={domainMapping} />
      <ReferenceArrayField reference="Circle" source="og:leads">
        <SingleFieldList linkType="show">
          <ChipField color="secondary" source="pair:label" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ReferenceArrayField reference="Circle" source="pair:affiliatedBy" filter={{ type: 'og:Circle' }}>
        <SingleFieldList linkType="show">
          <ChipField color="secondary" source="pair:label" />
        </SingleFieldList>
      </ReferenceArrayField>
    </ShowSide>
  </ShowBase>
);

export default PersonShow;
