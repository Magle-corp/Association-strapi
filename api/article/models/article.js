"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterUpdate(result, params, data) {
      // The Article is published.
      if (result.published_at !== null && data.published_at) {
        strapi.query("slug").create({
          title: result.title,
          slug: `/publications/articles/${result.slug}`,
          related_page: `article_${result.id}`,
        });
      }

      // The Article is updated.
      if (result.published_at !== null && !data.published_at) {
        const related_slug = await strapi
          .query("slug")
          .find({ related_page: `article_${result.id}` });

        strapi.query("slug").update(
          { id: related_slug[0].id },
          {
            title: result.title,
            slug: `/publications/articles/${result.slug}`,
            related_page: `article_${result.id}`,
          }
        );
      }

      // The Article isn't published.
      if (result.published_at == null) {
        const related_slug = await strapi
          .query("slug")
          .find({ related_page: `article_${result.id}` });

        strapi.query("slug").delete({ id: related_slug.id });
      }
    },
  },
};
