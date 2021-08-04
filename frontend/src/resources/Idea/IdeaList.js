import React from 'react';
import { ListBase } from "react-admin";
import { SimpleList } from '@semapps/archipelago-layout';
import { Avatar } from '@material-ui/core';
import IdeaIcon from '@material-ui/icons/EmojiObjects';

const IdeaList = props => (
  <ListBase {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      secondaryText={record => record['pair:description']}
      leftAvatar={() => (
        <Avatar width="100%">
          <IdeaIcon />
        </Avatar>
      )}
      linkType="show"
    />
  </ListBase>
);

export default IdeaList;
