const { ACTOR_TYPES } = require("@semapps/activitypub");
const anonymousRead = { anon: { read: true } };

module.exports = [
  {
    path: '/'
  },
  {
    path: '/circles',
    acceptedTypes: ['pair:Group', 'og:Circle'],
    dereference: ['pair:hasLocation'],
    permissions: anonymousRead,
    newResourcesPermissions: anonymousRead,
    readOnly: true,
  },
  {
    path: '/events',
    acceptedTypes: ['pair:Event'],
    permissions: anonymousRead,
    newResourcesPermissions: anonymousRead,
    readOnly: true,
  },
  {
    path: '/users',
    acceptedTypes: ['pair:Person'],
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress'],
    permissions: anonymousRead,
    newResourcesPermissions: anonymousRead,
    readOnly: true,
  },
  {
    path: '/bots',
    acceptedTypes: [ACTOR_TYPES.APPLICATION],
    dereference: ['sec:publicKey'],
    excludeFromMirror: true,
    permissions: anonymousRead,
    newResourcesPermissions: anonymousRead,
    readOnly: true,
  },
  {
    path: '/themes',
    acceptedTypes: ['pair:Theme']
  },
  {
    path: '/documents',
    acceptedTypes: ['pair:Document'],
    permissions: anonymousRead,
    newResourcesPermissions: anonymousRead,
    readOnly: true,
  }
];
