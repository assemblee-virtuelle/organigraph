const path = require('path');
const urlJoin = require('url-join');
const { ImporterMixin } = require('@semapps/importer');
const CONFIG = require('../config/config');

module.exports = {
  name: 'status-importer',
  mixins: [ImporterMixin],
  settings: {
    source: {
      getAllFull: path.resolve(__dirname, './imports/status.json'),
      fieldsMapping: {
        slug: 'slug'
      }
    },
    dest: {
      containerUri: urlJoin(CONFIG.HOME_URL, '/status')
    }
  },
  methods: {
    transform(data) {
      return {
        '@type': 'pair:TaskStatus',
        'pair:label': data.label
      };
    }
  }
};
