'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('blog')
      .service('myService')
      .getWelcomeMessage();
  },
};
