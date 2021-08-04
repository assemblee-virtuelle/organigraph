import React from 'react';
import { ShowButton, SimpleForm, useEditContext } from 'react-admin';
import {Box, Typography} from "@material-ui/core";

const EditSide = ({ undoable, mutationMode, title, className, ...rest }) => {
  const {
    basePath,
    defaultTitle,
    hasList,
    hasShow,
    record,
    redirect,
    resource,
    save,
    saving,
    version,
  } = useEditContext(rest);

  if( !record ) return null;

  return(
    <>
      <Box pt={2} pl={2} pr={2}>
        <Typography variant="h4" color="textPrimary">
          {title && React.cloneElement(title, { className, record, ...rest })}
          <ShowButton basePath={basePath} record={record} />
        </Typography>
      </Box>
      <SimpleForm
        resource={resource}
        basePath={basePath}
        record={record}
        saving={saving}
        save={save}
        redirect={redirect}
        undoable={undoable}
        mutationMode={mutationMode}
        version={version}
        {...rest}
      />
    </>
  );
};

export default EditSide;
