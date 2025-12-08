const dataServers = {
  common: {
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    default: true,
    authServer: true,
    uploadsContainer: "/files",
  },
};

export default dataServers;
