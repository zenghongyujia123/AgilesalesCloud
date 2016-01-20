/**
 * Created by zenghong on 16/1/7.
 */
'use strict';
var all = require('../controllers/all');

module.exports = function (app) {
  app.route('/').get(all.index);
  app.route('/webapp').get(all.webAppIndex);
  app.route('/download').get(all.download);
};