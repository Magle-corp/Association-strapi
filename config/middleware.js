module.exports = {
  settings: {
    cors: {
      enabled: true,
      // headers: '*',
      origin: [
        // Local.
        "http://localhost",
        // Staging.
        "http://association-next-staging.magle.fr",
        // Production.
        "http://association-next.magle.fr",
      ],
    },
  },
};
