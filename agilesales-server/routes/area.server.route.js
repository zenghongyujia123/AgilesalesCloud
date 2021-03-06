/**
 * Created by zenghong on 16/1/7.
 */
'use strict';
var all = require('../controllers/all');
var filter = require('../filters/all').user;

module.exports = function (app) {
  app.route('/webapp/area/title/update').post(filter.requireUser, all.area.updateAreaTitle);
  app.route('/webapp/area/multi/upload').post(filter.requireUser, all.area.uploadMultiArea);
  app.route('/webapp/area').get(filter.requireUser, all.area.getAreas);
};