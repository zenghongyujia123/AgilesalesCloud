/**
 * Created by zenghong on 16/1/7.
 */
'use strict';
var indexCtrl = require('../controllers/index');

module.exports = function (app) {
  app.route('/').get(indexCtrl.index);
  app.route('/webapp').get(indexCtrl.webAppIndex);
  app.route('/download').get(indexCtrl.download);
};