import React from "react";
import { useListContext } from 'react-admin';
import { Button, makeStyles, Toolbar } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
  toolbar: {
    padding: 0
  },
  button: {
    marginLeft: 8
  }
}));

const TopPagination = () => {
  const classes = useStyles();
  const { page, perPage, total, setPage } = useListContext();
  const nbPages = Math.ceil(total / perPage) || 1;
  return (
    nbPages > 1 &&
    <Toolbar className={classes.toolbar}>
      {page > 1 &&
        <Button size="small" variant="contained" color="primary" key="prev" onClick={() => setPage(page - 1)}>
          <ChevronLeft />
          Précédent
        </Button>
      }
      {page !== nbPages &&
        <Button size="small" variant="contained" color="primary" key="next" onClick={() => setPage(page + 1)} className={classes.button}>
          Suivant
          <ChevronRight />
        </Button>
      }
    </Toolbar>
  );
};

export default TopPagination;
