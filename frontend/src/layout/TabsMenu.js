import React from 'react';
import { getResources } from 'react-admin';
import { Tabs, Tab, useMediaQuery, makeStyles } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { shallowEqual, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  tabs: {
    minHeight: 0,
  },
  tab: {
    minWidth: 55,
    color: 'black !important'
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "unset",
    '& svg': {
      paddingRight: 7
    }
  },
  labelIcon: {
    minHeight: 0
  }
}));

const TabsMenu = () => {
  const history = useHistory();

  const classes = useStyles();

  const location = useLocation();
  const matches = location.pathname.match(/^\/([^/]+)/);
  const currentResource = matches ? matches[1] : null;

  const resources = useSelector(getResources, shallowEqual);

  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));

  return (
    <Tabs
      value={currentResource}
      onChange={(_, value) => history.push('/' + value)}
      indicatorColor="primary"
      textColor="primary"
      scrollButtons="auto"
      className={classes.tabs}
    >
      {resources
        .filter(resource => resource.hasList)
        .map(resource => (
          <Tab
            key={resource.name}
            icon={React.createElement(resource.icon)}
            label={xs ? undefined : resource.options.label}
            value={resource.name}
            // className={classes.tab}
            classes={{ root: classes.tab, wrapper: classes.wrapper, labelIcon: classes.labelIcon }}
          />
        ))}
    </Tabs>
  );
};

export default TabsMenu;
