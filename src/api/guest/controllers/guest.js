'use strict';

/**
 *  guest controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::guest.guest', ({ strapi }) => ({
  async create(ctx) {
    console.log(ctx.request.body)

    const created = await strapi.services["api::guest.guest"].create(ctx.request.body);
    const updated = await strapi.services["api::guest.guest"].update(created.id, {
      data: {
        link: `https://nadyahans.family?id=${created.id}&to=${encodeURI(created.fullName)}`,
      }
    });

    console.log(updated);
    ctx.send(updated);
  },
}));
