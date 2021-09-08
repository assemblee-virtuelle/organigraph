import React, { useState } from 'react';
import { CreateBase, TextInput } from 'react-admin';
import { Box, Tabs, Tab, Typography } from '@material-ui/core';
import CreateSide from "../../layout/CreateSide";
import { CircleInput } from "../../common/input";
import AttachForm from "../../common/AttachForm";

const CircleCreate = props => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <Box pb={2} fullWidth>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="fullWidth">
          <Tab label="Créer" />
          <Tab label="Attacher à une ressource" />
        </Tabs>
      </Box>
      {tab === 0 &&
        <CreateBase {...props}>
          <CreateSide>
            <TextInput source="pair:label" label="Nom" fullWidth />
            <CircleInput source="pair:partOf" />
          </CreateSide>
        </CreateBase>
      }
      {tab === 1 &&
        <>
          <Box pt={2} pl={2} pr={2}>
            <Typography variant="h4" color="textPrimary">
              Attacher à une ressource
            </Typography>
          </Box>
          <AttachForm />
        </>
      }
    </>
  );
}

export default CircleCreate;
