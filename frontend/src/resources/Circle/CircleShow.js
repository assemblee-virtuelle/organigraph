import React from 'react';
import { ShowBase, TextField, ChipField, DateField, SingleFieldList } from 'react-admin';
import { AvatarField } from '@semapps/archipelago-layout';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import MarkdownField from "../../common/field/MarkdownField";
import ShowSide from "../../layout/ShowSide";
import CircleTitle from "./CircleTitle";
import DescriptionIcon from '@material-ui/icons/Description';
import EventIcon from '@material-ui/icons/Event';
import SmallList from "../../common/list/SmallList";
import MultiUrlField from "../../common/field/MultiUrlField";
import GridList from "../../common/list/GridList";

const CircleShow = props => (
  <ShowBase {...props}>
    <ShowSide title={<CircleTitle />}>
      <TextField source="og:purpose" />
      <MarkdownField source="og:accountabilities" />
      <TextField source="og:domain" />
      <MultiUrlField source="pair:homePage" />
      <ReferenceField reference="Circle" source="pair:partOf" linkType="show">
        <ChipField color="secondary" source="pair:label" />
      </ReferenceField>
      <ReferenceArrayField reference="Circle" source="pair:hasPart">
        <SingleFieldList linkType="show">
          <ChipField color="secondary" source="pair:label" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ReferenceArrayField reference="Person" source="og:leadBy">
        <GridList xs={3} linkType="show">
          <AvatarField label="pair:firstName" image="image" />
        </GridList>
      </ReferenceArrayField>
      <ReferenceArrayField reference="Person" source="pair:involves" perPage={4} inversePredicate="pair:involvedIn" filter={{ type: 'pair:Person' }}>
        <GridList xs={3} linkType="show">
          <AvatarField label="pair:firstName" image="image" />
        </GridList>
      </ReferenceArrayField>
      <ReferenceArrayField reference="Document" source="pair:documentedBy" perPage={4} alwaysShow>
        <SmallList
          icon={<DescriptionIcon />}
          primaryText={record => record['pair:label']}
          secondaryText={record => <DateField record={record} source="created" />}
          inversePredicate="pair:documents"
        />
      </ReferenceArrayField>
      <ReferenceArrayField reference="Event" source="pair:concernedBy" perPage={4} alwaysShow>
        <SmallList
          icon={<EventIcon />}
          primaryText={record => record['pair:label']}
          secondaryText={record => <DateField record={record} source="pair:startDate" showTime />}
          inversePredicate="pair:concerns"
        />
      </ReferenceArrayField>
    </ShowSide>
  </ShowBase>
);

export default CircleShow;
