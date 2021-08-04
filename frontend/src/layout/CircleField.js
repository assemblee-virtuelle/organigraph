import React from 'react';
import { useRecordContext } from 'react-admin';
import {Box, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  circle: {
    backgroundColor: 'blue',
    borderRadius: '50%',
    height: 50
  }
}));

const CircleField = ({ source }) => {
  const classes = useStyles();
  const record = useRecordContext();
  return (
    <Box
      display="flex"
      width={90} height={90}
      bgcolor="primary.main"
      color="white"
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      p={2}
    >
      <Typography align="center">{record[source]}</Typography>
    </Box>
  );
};

export default CircleField;
