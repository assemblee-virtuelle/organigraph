const dataServers = {
  av: {
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    default: true,
    uploadsContainer: '/files'
  },
  pod: {
    pod: true,
    authServer: true,
    containers: {
      pod: {
        'vcard:Location': ['/locations'],
        'vcard:Individual': ['/profiles'],
      },
    },
  },
};

export default dataServers;
