"use strict";

module.exports = {
    async find(ctx) {
        try {
            return await 	strapi.plugin("blog").service("blog").find(ctx.query);
        } catch(err) {
            ctx.throw(500,err);
        }
    }
}