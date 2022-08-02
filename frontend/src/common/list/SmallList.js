import React from 'react';
import { useListContext, useRecordContext, Link, Button } from 'react-admin';
import {Box, LinearProgress, List, ListItem, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0
  },
  listItemGrey: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    paddingLeft: 10,
    paddingRight: 10
  },
  listItemWhite: {
    paddingLeft: 10,
    paddingRight: 10
  },
  listIcon: {
    minWidth: 40
  },
  primaryText: {
    color: 'black'
  },
  secondaryText: {
    color: 'black',
    textAlign: 'right'
  },
}));

const SmallList = ({ icon, primaryText, secondaryText, emptyText, target }) => {
  const { ids, data, basePath, total, perPage, loaded, hasCreate } = useListContext();
  const record = useRecordContext();
  const classes = useStyles();
  const searchParams = new URLSearchParams({ filter: JSON.stringify({ [target]: record.id }) });

  if (!loaded) return <LinearProgress />

  return (
    <>
      <List className={classes.root}>
        {ids.map((id, i) => (
          <Link key={id} to={`${basePath}/${encodeURIComponent(id)}/show?${searchParams}`}>
            <ListItem dense className={i % 2 ? classes.listItemWhite : classes.listItemGrey}>
              <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>
              <ListItemText primary={primaryText(data[id])} className={classes.primaryText} />
              <ListItemText primary={secondaryText(data[id])} className={classes.secondaryText} />
            </ListItem>
          </Link>
        ))}
        {ids.length === 0 &&
          <ListItem dense className={classes.listItemGrey}>
            <ListItemText primary={emptyText} className={classes.primaryText} />
          </ListItem>
        }
      </List>
      <Box display="flex" justifyContent="flex-end" pr={1} minHeight={15}>
        {hasCreate &&
          <Link to={`${basePath}/create?${searchParams}`}><Button label="Ajouter"><AddIcon /></Button></Link>
        }
        {total > perPage &&
          <Link to={`${basePath}?${searchParams}`}><Button label="Voir tous"><ListIcon/></Button></Link>
        }
      </Box>
    </>
  );
};

export default SmallList;
