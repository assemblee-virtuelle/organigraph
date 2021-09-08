import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 25,
    marginBottom: 10,
    lineHeight: 1.3,
    fontWeight: 600
  },
}));

const FieldsListLabel = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="subtitle1" component="div" className={classes.root}>
      {children}
    </Typography>
  );
};

export default FieldsListLabel;
