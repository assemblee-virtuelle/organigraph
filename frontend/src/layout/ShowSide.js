import React from 'react';
import { useShowContext, EditButton } from 'react-admin';
import {Typography, Box, Grid, useMediaQuery} from "@material-ui/core";
import FieldsList from "../common/list/FieldsList";

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
    // defaultTitle,
    // hasList,
    hasEdit,
    record,
    resource,
    version,
  } = useShowContext(props);

  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'), { noSsr: true });

  if( !record ) return null;

  return(
    <>
      <Grid container>
        <Grid item xs={9}>
          <Box pt={2} pl={2}>
            <Typography variant="h4" color="textPrimary">
              {title && React.cloneElement(title, { className, record, ...rest })}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box pt={xs ? 1 : 2} pr={xs ? 1 : 2} display="flex" justifyContent="flex-end">
            {hasEdit && <EditButton basePath={basePath} record={record} />}
            {actions && actions.map((action, i) => React.cloneElement(action, { key: i }))}
          </Box>
        </Grid>
      </Grid>
      <Box display="flex">
        <FieldsList
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
