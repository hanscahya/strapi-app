'use strict';

/**
 *  guest controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::guest.guest', ({ strapi }) => ({
  async create(ctx) {
    const created = await strapi.services["api::guest.guest"].create(ctx.request.body);
    const updated = await strapi.services["api::guest.guest"].update(created.id, {
      data: {
        link: `https://nadyahans.family?id=${created.id}&to=${encodeURI(created.fullName)}`,
      }
    });
    ctx.send(updated);
  },
}));
