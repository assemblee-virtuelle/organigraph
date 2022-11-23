import React from 'react';
import { getResources } from 'react-admin';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { shallowEqual, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
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

const BottomMenu = () => {
  const history = useHistory();

  const classes = useStyles();

  const location = useLocation();
  const matches = location.pathname.match(/^\/([^/]+)/);
  const currentResource = matches ? matches[1] : null;

  const resources = useSelector(getResources, shallowEqual);

  return (
    <BottomNavigation
      value={currentResource}
      onChange={(_, value) => history.push('/' + value)}
      showLabels
    >
      {resources
        .filter(resource => resource.hasList)
        .map(resource => (
          <BottomNavigationAction
            key={resource.name}
            icon={React.createElement(resource.icon)}
            label={resource.options.label}
            value={resource.name}
          />
        ))}
    </BottomNavigation>
  );
};

export default BottomMenu;
