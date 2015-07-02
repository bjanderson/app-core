'use strict';

var http = require('./servers/http'),
  https = require('./servers/https'),
  config = {
    env: process.env.NODE_ENV || 'dev',
    httpPort: process.env.HTTP_PORT || 20080,
    httpsPort: process.env.HTTPS_PORT || 20443,
  },
  httpServer = http(config),
  httpsServer = https(config),
  scribe = require('scribe-js')(),
  console = process.console;
