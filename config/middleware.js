module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: [
        // Local frontend, needed for fetch.
        "http://localhost",
        // Local backend, needed for access admin.
        "http://localhost:1337",
        // Staging frontend, needed for fetch.
        "http://association-next-staging.magle.fr",
        // Staging backend, needed for access admin.
        "http://association-strapi-staging.magle.fr",
        // Production frontend, needed for fetch.
        "http://association-next.magle.fr",
        // Production backend, needed for access admin.
        "http://association-next.magle.fr",
      ],
    },
  },
};
