module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: [
        // Local.
        env("LOCAL_FRONTEND", "http://localhost:3000"),
        env("LOCAL_BACKEND", "http://localhost:1337"),
        // Staging.
        env("STAGING_FRONTEND", "http://localhost"),
        env("STAGING_FRONTEND_WWW", "http://localhost"),
        env("STAGING_BACKEND", "http://localhost"),
        env("STAGING_BACKEND_WWW", "http://localhost"),
        // Production.
        env("PROD_FRONTEND", "http://localhost"),
        env("PROD_FRONTEND_WWW", "http://localhost"),
        env("PROD_BACKEND", "http://localhost"),
        env("PROD_BACKEND_WWW", "http://localhost"),
      ],
    },
  },
});
