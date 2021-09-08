import React from 'react';
import { useDataProvider, useRedirect, useGetList, useRefresh } from "react-admin";
import { Form, Field } from 'react-final-form';
import { Box, Toolbar, TextField, makeStyles, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';

const TextInput = ({ input, ...otherProps }) => <TextField variant="filled" margin="dense" {...input} {...otherProps} />;

const CircleSelect = ({ input, label, ...otherProps }) => {
  const { ids, data } = useGetList('Circle');
  return (
    <FormControl variant="filled">
      <InputLabel>{label}</InputLabel>
      <Select margin="dense" variant="filled" label={label} {...input} {...otherProps}>
        {ids.map(id => (
          <MenuItem value={id} key={id}>
            {data[id]['pair:label']}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
    marginTop: theme.spacing(2),
  },
  field: {
    marginBottom: 23,
    minWidth: theme.spacing(20),
  }
}));

const AttachForm = () => {
  const classes = useStyles();
  const dataProvider = useDataProvider();
  const redirect = useRedirect();
  const refresh = useRefresh();

  const onSubmit = ({ url, partOf }) => {
    console.log('url', url, partOf);
    dataProvider
      .getOne('Circle', { id: url })
      .then(({ data }) => {
        const type = Array.isArray(data.type) ? data.type : [data.type];
        return dataProvider.update('Circle', {
          id: url,
          data: { ...data, type: [...type, 'og:Circle'], 'pair:partOf': partOf },
          previousData: data
        });
      })
      .then(() => {
        redirect('/Circle/' + encodeURIComponent(url) + '/show');
        refresh();
      });
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box p="1em">
            <Field label="URL de la ressource" name="url" component={TextInput} fullWidth className={classes.field} />
            <Field label="Fait partie de" name="partOf" component={CircleSelect} className={classes.field} />
          </Box>
          <Toolbar className={classes.toolbar}>
            <Button type="submit" startIcon={<PostAddIcon />} variant="contained" color="primary">Attacher</Button>
          </Toolbar>
        </form>
      )}
    />
  );
};

export default AttachForm;