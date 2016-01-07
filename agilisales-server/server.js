/**
 * Module dependencies.
 */

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

'use strict';

require('oneapm');

var init = require('./config/init')(),
  config = require('./config/config'),
  setup = require('./config/setup')(),
  app = require('./config/express')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;
console.log('MEAN.JS application started on address ' + config.serverAddress);
console.log('MEAN.JS application started on port ' + config.port);
