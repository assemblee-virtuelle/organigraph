import React from 'react';
import { ImageField } from 'react-admin';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  image: {
    margin: 0,
    borderRadius: '50%'
  }
}));

const RoundImageField = (props) => {
  const classes = useStyles();
  return (
    <ImageField
      classes={classes}
      {...props}
    />
  );
};

RoundImageField.defaultProps = {
  addLabel: true
};

export default RoundImageField;
