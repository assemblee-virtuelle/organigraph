import * as React from 'react';
import { useListContext, linkToRecord, Link, Button, useRecordContext } from 'react-admin';
import {Box, Grid} from '@material-ui/core';
import ListIcon from "@material-ui/icons/List";

// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();

// Our handleClick does nothing as we wrap the children inside a Link but it is
// required by ChipField, which uses a Chip from material-ui.
// The material-ui Chip requires an onClick handler to behave like a clickable element.
const handleClick = () => {};

const GridList = ({ children, linkType, spacing, inversePredicate, ...rest }) => {
  const { ids, data, basePath, total, perPage } = useListContext();
  const record = useRecordContext();
  const searchParams = new URLSearchParams({ filter: JSON.stringify({ [inversePredicate]: record.id }) });

  return (
    <>
      <Grid container spacing={spacing}>
        {ids.map(id => (
          <Grid item key={id} {...rest}>
            {linkType ? (
              <Link to={linkToRecord(basePath, id, linkType)} onClick={stopPropagation}>
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
      </Grid>
      {total === perPage &&
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
