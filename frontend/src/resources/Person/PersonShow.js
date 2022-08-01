import React from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField } from 'react-admin';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import PersonTitle from './PersonTitle';
import ShowSide from "../../layout/ShowSide";
import RoundImageField from "../../common/field/RoundImageField";
import MultiUrlField from "../../common/field/MultiUrlField";

const PersonShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<PersonTitle />}>
      <RoundImageField source="image" title="pair:label" addLabel={false} />
      <TextField source="pair:description" fullWidth />
      <MultiUrlField source="pair:homePage" />
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
