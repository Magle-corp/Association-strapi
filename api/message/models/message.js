"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      await strapi.plugins["email"].services.email.send({
        to: data.email,
        subject: "Test envoie d'email Association",
        text: "Hello world!",
        html: "Hello world!",
      });
    },
  },
};
