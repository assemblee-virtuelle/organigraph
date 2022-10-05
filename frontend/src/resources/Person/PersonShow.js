import React from 'react';
import {ChipField, DateField, ReferenceManyField, ShowBase, SingleFieldList, TextField} from 'react-admin';
import { MultiUrlField, ReferenceArrayField } from '@semapps/field-components';
import PersonTitle from './PersonTitle';
import ShowSide from "../../layout/ShowSide";
import RoundImageField from "../../common/field/RoundImageField";
import domainMapping from "../../config/domainMapping";
import SmallList from "../../common/list/SmallList";
import DescriptionIcon from "@material-ui/icons/Description";
import ViewSourceButton from "../../common/buttons/ViewSourceButton";

const PersonShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<PersonTitle />} actions={[<ViewSourceButton source="pair:webPage" />]}>
      <RoundImageField source="pair:depictedBy" title="pair:label" addLabel={false} />
      <TextField source="pair:description" fullWidth />
      <MultiUrlField source="pair:homePage" domainMapping={domainMapping} />
      <ReferenceArrayField reference="Theme" source="pair:hasInterest">
        <SingleFieldList linkType={false}>
          <ChipField color="secondary" source="pair:label" />
        </SingleFieldList>
      </ReferenceArrayField>
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
      <ReferenceManyField label="Actualités postées" reference="Document" target="dc:creator" perPage={4} filter={{ _predicates: ['pair:label', 'dc:created'] }} sort={{ field: 'dc:created', order: 'DESC' }}>
        <SmallList
          icon={<DescriptionIcon />}
          primaryText={record => record['pair:label']}
          secondaryText={record => <DateField record={record} source="dc:created" />}
          emptyText="Aucune actualité postée par ce membre"
        />
      </ReferenceManyField>
    </ShowSide>
  </ShowBase>
);

export default PersonShow;
