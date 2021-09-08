import React, { useEffect, useMemo } from 'react';
import { ResourceContextProvider, registerResource, unregisterResource, WithPermissions } from 'react-admin';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Grid, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 'calc(100vh - 98px)'
  },
  panel: {
    backgroundColor: theme.palette.grey['200'],
    // minHeight: 'calc(100vh - 98px)',
    // height: '100%'
  }
}));

const defaultOptions = {};

const ResourceRegister = ({ name, list,  create, edit, show, icon, options = defaultOptions }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      registerResource({
        name,
        options,
        hasList: !!list,
        hasEdit: !!edit,
        hasShow: !!show,
        hasCreate: !!create,
        icon,
      })
    );
    return () => dispatch(unregisterResource(name));
  }, [dispatch, name, create, edit, icon, list, show, options]);
  return null;
};

const ResourceRoutes = ({ name, match, list, create, edit, show, options = defaultOptions }) => {
  const isRegistered = useSelector(
    state => !!state.admin.resources[name]
  );

  const classes = useStyles();

  const basePath = match ? match.path : '';

  const resourceData = useMemo(
    () => ({
      resource: name,
      options,
      hasList: !!list,
      hasEdit: !!edit,
      hasShow: !!show,
      hasCreate: !!create,
    }),
    [name, options, create, edit, list, show]
  );

  // match tends to change even on the same route ; using memo to avoid an extra render
  return useMemo(() => {
    // if the registration hasn't finished, no need to render
    if (!isRegistered) {
      return null;
    }

    return (
      <ResourceContextProvider value={name}>
        <Grid container alignItems="stretch" className={classes.container}>
          <Grid item xs={12 - (resourceData.options.panelSize || 4)}>
            <Box>
              <Route
                path={`${basePath}`}
                render={routeProps => (
                  <WithPermissions
                    component={list}
                    basePath={basePath}
                    {...routeProps}
                    {...resourceData}
                    syncWithLocation
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={resourceData.options.panelSize || 4} className={classes.panel}>
            <Box p={0}>
              <Switch>
                {create && (
                  <Route
                    path={`${basePath}/create`}
                    render={routeProps => (
                      <WithPermissions
                        component={create}
                        basePath={basePath}
                        {...routeProps}
                        {...resourceData}
                      />
                    )}
                  />
                )}
                {show && (
                  <Route
                    path={`${basePath}/:id/show`}
                    render={routeProps => (
                      <WithPermissions
                        component={show}
                        basePath={basePath}
                        id={decodeURIComponent(
                          (routeProps.match)
                          .params.id
                          )}
                        {...routeProps}
                        {...resourceData}
                      />
                    )}
                  />
                )}
                {edit && (
                  <Route
                    path={`${basePath}/:id`}
                    render={routeProps => (
                      <WithPermissions
                        component={edit}
                        basePath={basePath}
                        id={decodeURIComponent(
                          (routeProps.match)
                          .params.id
                          )}
                        {...routeProps}
                        {...resourceData}
                      />
                    )}
                  />
                )}
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </ResourceContextProvider>
    );
  }, [basePath, name, create, edit, list, show, resourceData, isRegistered, classes]);
};

const SplitViewResource = ({ intent = 'route', ...props }) =>
  intent === 'registration' ? (
    <ResourceRegister {...props} />
  ) : (
    <ResourceRoutes {...props} />
  );

export default SplitViewResource;
