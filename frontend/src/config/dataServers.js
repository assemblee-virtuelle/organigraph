const dataServers = {
  av: {
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    default: true,
    uploadsContainer: '/files'
  },
  pod: {
    pod: true,
    authServer: true,
  },
};

export default dataServers;
