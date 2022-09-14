const urlJoin = require('url-join');
const path = require('path');
const { AuthOIDCService } = require('@semapps/auth');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config/config');

module.exports = {
  mixins: [AuthOIDCService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    jwtPath: path.resolve(__dirname, '../jwt'),
    issuer: CONFIG.OIDC_ISSUER,
    clientId: CONFIG.OIDC_CLIENT_ID,
    clientSecret: CONFIG.OIDC_CLIENT_SECRET,
    selectSsoData: authData => ({
      email: authData.email,
      name: authData.given_name,
      familyName: authData.family_name
    }),
    accountsDataset: CONFIG.SETTINGS_DATASET
  }
};
