import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { ListToolbar, useListContext } from "react-admin";
import TopPagination from "./TopPagination";
import ListLoader from "../common/list/ListLoader";

const ListView = ({ children, filters }) => {
  const { defaultTitle } = useListContext();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'), { noSsr: true });
  return (
    <Box pl={xs ? 2 : 3} pr={xs ? 2 : 3} pt={xs ? 2 : 1} pb={xs ? 2 : 0}>
      <Grid container>
        {xs &&
          <Box pb={1}>
            <Grid item xs={12}>
              <Typography variant="h4" color="textPrimary">
                {defaultTitle}
              </Typography>
            </Grid>
          </Box>
        }
        {!xs &&
          <Grid item xs={9}>
            <ListToolbar filters={filters}/>
          </Grid>
        }
        {!xs &&
          <Grid item xs={3}>
            <Box display="flex" justifyContent="flex-end">
              <TopPagination/>
            </Box>
          </Grid>
        }
        <Grid item xs={12}>
          <Box position="relative">
            {children}
            <ListLoader />
          </Box>
        </Grid>
        {xs &&
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <TopPagination />
            </Box>
          </Grid>
        }
      </Grid>
    </Box>
  );
};

export default ListView;