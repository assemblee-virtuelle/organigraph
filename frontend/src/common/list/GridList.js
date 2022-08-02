import * as React from 'react';
import { useListContext, linkToRecord, Link, Button, useRecordContext } from 'react-admin';
import {Box, Grid, LinearProgress, makeStyles, Typography} from '@material-ui/core';
import ListIcon from "@material-ui/icons/List";

// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();

// Our handleClick does nothing as we wrap the children inside a Link but it is
// required by ChipField, which uses a Chip from material-ui.
// The material-ui Chip requires an onClick handler to behave like a clickable element.
const handleClick = () => {};

const useStyles = makeStyles((theme) => ({
  emptyText: {
    color: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
  },
}));

const GridList = ({ children, linkType, spacing, target, emptyText, ...rest }) => {
  const { ids, data, basePath, total, perPage, loaded } = useListContext();
  const record = useRecordContext();
  const classes = useStyles();
  const searchParams = new URLSearchParams({ filter: JSON.stringify({ [target]: record.id }) });

  if (!loaded) return <LinearProgress style={{ marginBottom: 30 }} />

  return (
    <>
      <Grid container spacing={spacing}>
        {ids.map(id => (
          <Grid item key={id} {...rest}>
            {linkType ? (
              <Link to={linkToRecord(basePath, id, linkType) + '?' + searchParams} onClick={stopPropagation}>
                {React.cloneElement(React.Children.only(children), {
                  record: data[id],
                  basePath,
                  // Workaround to force ChipField to be clickable
                  onClick: handleClick
                })}
              </Link>
            ) : (
              React.cloneElement(React.Children.only(children), {
                record: data[id],
                basePath
              })
            )}
          </Grid>
        ))}
        {ids.length === 0 &&
          <Grid item xs={12}>
            <Box className={classes.emptyText}>
              <Typography variant="body2">
                {emptyText}
              </Typography>
            </Box>
          </Grid>
        }
      </Grid>
      {total > perPage &&
        <Box display="flex" justifyContent="flex-end" p={1}>
          <Link to={`${basePath}?${searchParams}`}><Button label="Voir tous"><ListIcon /></Button></Link>
        </Box>
      }
    </>
  );
};

GridList.defaultProps = {
  xs: 6,
  spacing: 3,
  linkType: 'edit'
};

export default GridList;
