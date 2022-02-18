module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: "mailhog",
      port: 1025,
      ignoreTLS: true,
    },
    settings: {
      defaultFrom: "association@test.fr",
    },
  },
});
