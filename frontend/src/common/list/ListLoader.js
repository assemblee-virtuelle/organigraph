import React from 'react';
import { useListContext } from "react-admin";
import { makeStyles, Box, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  loading: {
    zIndex: 1000,
    backgroundColor: 'white',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    marginTop: 5
  }
}));

const ListLoader = () => {
  const { loading } = useListContext();
  const classes = useStyles();

  if (loading) {
    return(
      <Box alignItems="center" className={classes.loading}>
        <CircularProgress size={60} thickness={6} />
      </Box>
    );
  } else {
    return null;
  }
}

export default ListLoader;