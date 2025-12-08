const { ACTOR_TYPES } = require('@semapps/activitypub');
const anonymousRead = { anon: { read: true } };
const anonymousReadAndWrite = {
  anon: { read: true, append: true, write: true }
};

module.exports = [
  {
    path: '/'
  },
  {
    path: '/circles',
    acceptedTypes: ['pair:Group', 'og:Circle'],
    dereference: ['pair:hasLocation'],
    permissions: anonymousReadAndWrite,
    newResourcesPermissions: anonymousReadAndWrite
  },
  {
    path: '/events',
    acceptedTypes: ['pair:Event'],
    permissions: anonymousReadAndWrite,
    newResourcesPermissions: anonymousReadAndWrite
  },
  {
    path: '/users',
    acceptedTypes: ['pair:Person'],
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress'],
    permissions: anonymousRead
    // newResourcesPermissions: anonymousRead,
  },
  {
    path: '/bots',
    acceptedTypes: [ACTOR_TYPES.APPLICATION],
    dereference: ['sec:publicKey'],
    excludeFromMirror: true,
    permissions: anonymousRead,
    newResourcesPermissions: anonymousRead
  },
  {
    path: '/documents',
    acceptedTypes: ['pair:Document'],
    permissions: anonymousReadAndWrite,
    newResourcesPermissions: anonymousReadAndWrite
  },
  {
    path: '/tasks',
    acceptedTypes: ['pair:Task'],
    permissions: anonymousReadAndWrite,
    newResourcesPermissions: anonymousReadAndWrite
  },
  {
    path: '/files',
    acceptedTypes: ['semapps:File'],
    permissions: anonymousReadAndWrite
  },
  {
    path: '/themes',
    acceptedTypes: ['pair:Theme']
  },
  {
    path: '/status',
    acceptedTypes: ['pair:TaskStatus']
  }
];
