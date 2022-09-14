import React from 'react';
import { Notification } from 'react-admin';
import { Grid, Box, useMediaQuery, ThemeProvider, makeStyles, Typography } from '@material-ui/core';
// import { UserMenu, LogoutButton } from '@semapps/auth-provider';
import AppBar from './AppBar';
import ScrollToTop from './ScrollToTop';

const useStyles = makeStyles(theme => ({
  topBar: {
    height: 45,
    backgroundImage: 'radial-gradient(circle at 50% 14em, #ADDEEC 0%, #28ccfb 100%)',
    paddingTop: 5,
  },
  userMenu: {
    float: 'right',
    backgroundColor: 'unset',
    '& button': {
      padding: '6px 12px'
    }
  }
}));

const Layout = ({ appBar, logout, theme, title, children }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      {!xs && (
        <Box width={1} className={classes.topBar}>
          <Grid container>
            <Grid item xs={6}>
              <Box pt={1} pl={3}>
                <Typography>{title}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box pr={1}>
                {/*<UserMenu logout={<LogoutButton />} classes={{ user: classes.userMenu }} />*/}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
      {React.cloneElement(appBar, { logout })}
      {children}
      <Notification />
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  appBar: <AppBar />
};

export default Layout;
