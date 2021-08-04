import React from 'react';
import { SimpleForm, useCreateContext } from 'react-admin';

const CreateSide = props => {
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
    redirect,
    resource,
    save,
    saving,
    version,
  } = useCreateContext(props);

  if( !record ) return null;

  return(
    <SimpleForm
      resource={resource}
      basePath={basePath}
      record={record}
      saving={saving}
      version={version}
      save={save}
      redirect={redirect}
      {...rest}
    >
      {children}
    </SimpleForm>
  );
};

export default CreateSide;
