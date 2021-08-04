import React from 'react';
import { ShowBase, SimpleShowLayout } from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import IdeaTitle from './IdeaTitle';

const IdeaShow = props => (
  <ShowBase title={<IdeaTitle />} {...props}>
    <SimpleShowLayout {...props}>
      <MarkdownField source="pair:description" />
    </SimpleShowLayout>
  </ShowBase>
);

export default IdeaShow;
