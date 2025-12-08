import React, { useCallback } from 'react';
import { CreateBase, TextInput, useAuthProvider } from 'react-admin';
import CreateSide from '../../layout/CreateSide';
import { CircleInput } from '../../common/input';

const DocumentCreate = props => {
  const authProvider = useAuthProvider();

  const transform = useCallback(
    async data => {
      const identity = await authProvider.getIdentity();
      console.log('callback', identity);
      return {
        ...data,
        'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/waiting',
        'pair:assignedTo': identity?.id
      };
    },
    [authProvider]
  );

  return (
    <CreateBase transform={transform} {...props}>
      <CreateSide>
        <TextInput source="pair:label" fullWidth />
        <CircleInput source="pair:documents" />
      </CreateSide>
    </CreateBase>
  );
};

export default DocumentCreate;
