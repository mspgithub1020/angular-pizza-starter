const express = require('express');
const fallback = require('express-history-api-fallback');
const helmet = require('helmet');
const { DBManager } = require('./db-manager');
const api = require('./api');

async function create(config) {
    const app = express();
    const dbManager = await DBManager.create(config.db);
    app.use('/api', api.create(dbManager, config));
    Object.values(config.statics).forEach((dir) => {
        app.use(express.static(dir));
    });
    app.use(
      helmet.contentSecurityPolicy(config.csp),
      helmet.referrerPolicy({
        policy: config.referrerPolicy
      }),
      helmet({
        hidePoweredBy: true
      }),
      fallback('index.html', { root: config.statics.app })
    );
    app.listen(config.port, () => {
        console.log(`server listening on http://localhost:${config.port}`);
    });
    return app;
}

module.exports = { create };


