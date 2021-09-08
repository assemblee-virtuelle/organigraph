import React from 'react';
import { useCreateContext, SimpleForm } from 'react-admin';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from "@material-ui/core";

const CreateSide = ({ children, ...rest }) => {
  const createContext = useCreateContext(rest);

  const query = new URLSearchParams(useLocation().search);
  const filter = query.has('filter') ? JSON.parse(query.get('filter')) : undefined;

  if( !createContext.record ) return null;

  return(
    <>
      <Box pt={2} pl={2} pr={2}>
        <Typography variant="h4" color="textPrimary">
          {createContext.defaultTitle}
        </Typography>
      </Box>
      <SimpleForm {...createContext} initialValues={filter}>
        {children}
      </SimpleForm>
    </>
  );
};

export default CreateSide;
