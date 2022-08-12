import React from 'react';
import { Button, useShowContext } from 'react-admin';
import LaunchIcon from '@material-ui/icons/Launch';

const ViewSourceButton = ({ source }) => {
  const { record } = useShowContext();
  if (record[source]) {
    return (
      <Button label="Source" href={record[source]} target="_blank" rel="noreferrer noopener">
        <LaunchIcon />
      </Button>
    );
  } else {
    return null;
  }
}

export default ViewSourceButton;
