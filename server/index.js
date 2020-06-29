#!/usr/bin/env node

const server = require('./src/server');
const config = require('./config');

server.create(config);
