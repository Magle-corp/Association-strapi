module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: [
        // Local frontend.
        "http://localhost:3000",
        // Local backend.
        "http://localhost:1337",
        // Staging frontend.
        "http://association-next-staging.magle.fr",
        // Staging backend.
        "http://association-strapi-staging.magle.fr",
        // Production frontend.
        "http://association-next.magle.fr",
        // Production backend.
        "http://association-strapi.magle.fr",
      ],
    },
  },
};
