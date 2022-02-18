module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: [
        // Local frontend.
        env("LOCAL_FRONTEND", "http://localhost:3000"),
        // Local backend.
        env("LOCAL_BACKEND", "http://localhost:1337"),
        // Staging frontend.
        env("http://association-next-staging.magle.fr", "http://localhost"),
        // Staging backend.
        env("http://association-strapi-staging.magle.fr", "http://localhost"),
        // Production frontend.
        env("PROD_FRONTEND", "http://localhost"),
        // Production backend.
        env("PROD_BACKEND", "http://localhost"),
      ],
    },
  },
});
