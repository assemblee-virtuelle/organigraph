import React from 'react';
// import { CreateButton } from 'react-admin';
import { Box, makeStyles, AppBar as MuiAppBar, Grid, useMediaQuery, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
// import { useLocation } from 'react-router-dom';
import TabsMenu from "./TabsMenu";
import theme from "../config/theme";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BottomMenu from "./BottomMenu";

const useStyles = makeStyles(theme => ({
  bottomAppBar: {
    top: 'auto',
    bottom: 0
  },
  header: {
    position: 'relative',
    backgroundColor: theme.palette.grey['200'],
    [theme.breakpoints.up('sm')]: {
      paddingTop: 12,
      paddingLeft: 12,
      paddingRight: 12
    }
  },
  logo: {
    width: 48,
    height: 48,
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      width: 32,
      height: 32,
    }
  },
  logoText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.palette.common.white,
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    }
  },
  openButton: {
    padding: 5,
    float: 'right'
  },
  menuLink: {
    textDecoration: 'none'
  },
  menuText: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 1,
    color: theme.palette.common.white
  }
}));

const AppBar = () => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'), { noSsr: true });
  // const location = useLocation();
  // const matches = location.pathname.match(/^\/([^/]+)/);
  // const resource = matches ? matches[1] : 'Circle';

  if( xs ) {
    return(
      <MuiAppBar position="fixed" className={classes.bottomAppBar}>
        <BottomMenu />
      </MuiAppBar>
    )
  } else {
    return (
      <MuiAppBar position="sticky" className={classes.root}>
        <Box className={classes.header}>
          <Grid container>
            <Grid item xs={8}>
              <TabsMenu />
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" justifyContent="flex-end">
                {/*<CreateButton basePath={'/' + resource} />*/}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </MuiAppBar>
    );
  }
};

export default AppBar;
