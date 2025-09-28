'use strict';

/**
 * clients-say service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clients-say.clients-say');
