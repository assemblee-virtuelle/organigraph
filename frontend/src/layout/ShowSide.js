import React from 'react';
import { SimpleShowLayout, useShowContext, EditButton } from 'react-admin';
import { Typography, Box, Grid } from "@material-ui/core";

const ShowSide = props => {
  const {
    actions,
    aside,
    children,
    classes: classesOverride,
    className,
    component: Content,
    title,
    ...rest
  } = props;

  const {
    basePath,
    defaultTitle,
    hasList,
    record,
    resource,
    version,
  } = useShowContext(props);

  if( !record ) return null;

  return(
    <>
      <Grid container>
        <Grid item xs={8}>
          <Box pt={2} pl={2}>
            <Typography variant="h4" color="textPrimary">
              {title && React.cloneElement(title, { className, record, ...rest })}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box pt={2} pr={2} display="flex" justifyContent="flex-end">
            <EditButton basePath={basePath} record={record} />
          </Box>
        </Grid>
      </Grid>
      <Box display="flex">
        <SimpleShowLayout
          resource={resource}
          basePath={basePath}
          record={record}
          version={version}
          {...props}
        />
      </Box>
    </>
  );
};

export default ShowSide;
