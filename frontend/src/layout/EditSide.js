import React from 'react';
import { ShowButton, useEditContext, SimpleForm } from 'react-admin';
import {Box, Grid, Typography} from "@material-ui/core";

const EditSide = ({ title, children, ...rest }) => {
  const editContext = useEditContext(rest);

  if( !editContext.record ) return null;

  return(
    <>
      <Grid container>
        <Grid item xs={9}>
          <Box pt={2} pl={2}>
            <Typography variant="h4" color="textPrimary">
              {title && React.cloneElement(title, { record: editContext.record, ...rest })}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box pt={2} pr={2} display="flex" justifyContent="flex-end">
            <ShowButton basePath={editContext.basePath} record={editContext.record} />
          </Box>
        </Grid>
      </Grid>
      <SimpleForm {...editContext}>
        {children}
      </SimpleForm>
    </>
  );
};

export default EditSide;
