'use strict';

/**
 * business-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-list.business-list');
