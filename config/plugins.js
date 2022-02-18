module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("MAIL_HOST", "mailhog"),
      port: env("MAIL_PORT", 1025),
      ignoreTLS: true,
    },
    settings: {
      defaultFrom: env("MAIL_FROM", "admin@strapi.com"),
    },
  },
});
