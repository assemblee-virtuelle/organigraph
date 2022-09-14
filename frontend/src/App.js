import React from 'react';
import { Admin } from 'react-admin';
import { SsoLoginPage, LogoutButton } from '@semapps/auth-provider';
import { createBrowserHistory as createHistory } from 'history';

import i18nProvider from './config/i18nProvider';
import authProvider from './config/authProvider';
import dataProvider from './config/dataProvider';
import theme from './config/theme';

import * as resources from './resources';
import SplitViewResource from "./layout/SplitViewResource";
import Layout from './layout/Layout';

const history = createHistory();

const App = () => (
  <Admin
    history={history}
    title={process.env.REACT_APP_INSTANCE_NAME}
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    layout={Layout}
    theme={theme}
    loginPage={SsoLoginPage}
    logoutButton={LogoutButton}
  >
    {Object.entries(resources).map(([key, resource]) => (
      <SplitViewResource key={key} name={key} {...resource.config} />
    ))}
  </Admin>
);

export default App;
