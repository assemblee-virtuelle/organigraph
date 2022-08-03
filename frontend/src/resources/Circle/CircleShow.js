import React from 'react';
import { ShowBase, TextField, ChipField, DateField, SingleFieldList, ReferenceManyField } from 'react-admin';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import { MultiUrlField, AvatarWithLabelField } from '@semapps/field-components';
import MarkdownField from "../../common/field/MarkdownField";
import ShowSide from "../../layout/ShowSide";
import CircleTitle from "./CircleTitle";
import DescriptionIcon from '@material-ui/icons/Description';
import EventIcon from '@material-ui/icons/Event';
import SmallList from "../../common/list/SmallList";
import GridList from "../../common/list/GridList";
import domainMapping from "../../config/domainMapping";

const CircleShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<CircleTitle />}>
      <MarkdownField source="og:purpose" />
      <MarkdownField source="og:accountabilities" />
      <TextField source="og:domain" />
      <MultiUrlField source="pair:homePage" domainMapping={domainMapping} />
      <ReferenceField reference="Circle" source="pair:partOf" linkType="show">
        <ChipField color="secondary" source="pair:label" />
      </ReferenceField>
      <ReferenceArrayField reference="Circle" source="pair:hasPart">
        <SingleFieldList linkType="show">
          <ChipField color="secondary" source="pair:label" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ReferenceArrayField reference="Person" source="og:leadBy" perPage={4} inversePredicate="og:leads">
        <GridList xs={3} linkType="show">
          <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="secondary" />
        </GridList>
      </ReferenceArrayField>
      <ReferenceManyField label="Membres" reference="Person" target="pair:affiliatedBy" perPage={4} sort={{ field: 'pair:label', order: 'ASC' }}>
        <GridList xs={3} linkType="show" emptyText="Aucun membre dans ce cercle">
          <AvatarWithLabelField label="pair:label" image="pair:depictedBy" labelColor="secondary" />
        </GridList>
      </ReferenceManyField>
      <ReferenceManyField label="Actualités" reference="Document" target="pair:documents" perPage={4} sort={{ field: 'dc:created', order: 'ASC' }}>
        <SmallList
          icon={<DescriptionIcon />}
          primaryText={record => record['pair:label']}
          secondaryText={record => <DateField record={record} source="dc:created" />}
          emptyText="Aucune actualité liée à ce cercle"
        />
      </ReferenceManyField>
      <ReferenceManyField label="Réunions" reference="Event" target="pair:concerns" perPage={4} sort={{ field: 'pair:endDate', order: 'DESC' }}>
        <SmallList
          icon={<EventIcon />}
          primaryText={record => record['pair:label']}
          secondaryText={record => <DateField record={record} source="pair:startDate" showTime />}
          emptyText="Aucune réunion prévue pour le moment"
        />
      </ReferenceManyField>
    </ShowSide>
  </ShowBase>
);

export default CircleShow;
